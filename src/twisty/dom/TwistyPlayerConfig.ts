import { Vector3 } from "three";
import { Sequence } from "../../alg";
import {
  AlgAttribute,
  StringEnumAttribute,
  Vector3Attribute,
} from "./element/ElementConfig";
import { BackViewLayout, backViewLayouts } from "./viewers/TwistyViewerWrapper";

// TODO: turn these maps into lists?
export const visualizationFormats = {
  "3D": true, // default
  "2D": true,
  "PG3D": true,
};
export type VisualizationFormat = keyof typeof visualizationFormats;

export const backgroundThemes = {
  checkered: true, // default
  none: true,
  PG3D: true,
};
export type BackgroundTheme = keyof typeof backgroundThemes;

export const controlsLocations = {
  "bottom-row": true, // default
  "none": true,
};
export type ControlsLocation = keyof typeof controlsLocations;

export const puzzleIDs = {
  "3x3x3": true, // default
  "custom": true,
  "2x2x2": true,
  "4x4x4": true,
  "megaminx": true,
  "pyraminx": true,
  "sq1": true,
  "clock": true,
  "skewb": true,
  "FTO": true,
};
export type PuzzleID = keyof typeof puzzleIDs;

// TODO: templatize
export interface ManagedAttribute<K> {
  string: string;
  value: K;
  setString(s: string): boolean;
  setValue(v: K): boolean;
}

type AnyManagedAttribute = ManagedAttribute<any>;

interface TwistyPlayerAttributes extends Record<string, AnyManagedAttribute> {
  // Alg
  "alg": AlgAttribute;

  // Puzzle
  "puzzle": StringEnumAttribute<PuzzleID>;
  "visualization": StringEnumAttribute<VisualizationFormat>;

  // Background
  "background": StringEnumAttribute<BackgroundTheme>;
  "controls": StringEnumAttribute<ControlsLocation>;

  // 3D config
  "back-view": StringEnumAttribute<BackViewLayout>;
  "camera-position": Vector3Attribute;
}

export interface TwistyPlayerConfigValues {
  alg: Sequence;

  puzzle: PuzzleID;
  visualization: VisualizationFormat;

  background: BackgroundTheme;
  controls: ControlsLocation;

  backView: BackViewLayout;
  cameraPosition: Vector3;
}

export type TwistyPlayerInitialConfig = Partial<TwistyPlayerConfigValues>;

const twistyPlayerAttributeMap: Record<
  keyof TwistyPlayerAttributes,
  keyof TwistyPlayerConfigValues
> = {
  "alg": "alg",

  "puzzle": "puzzle",
  "visualization": "visualization",

  "background": "background",
  "controls": "controls",

  "back-view": "backView",
  "camera-position": "cameraPosition",
};

// TODO: Can we avoid instantiating a new class for ech attribute, and would it help performance?
export class TwistyPlayerConfig {
  attributes: TwistyPlayerAttributes;
  constructor(
    private twistyPlayer: any, // TODO
    initialValues: TwistyPlayerInitialConfig,
  ) {
    this.attributes = {
      "alg": new AlgAttribute(initialValues.alg),

      "puzzle": new StringEnumAttribute(puzzleIDs, initialValues.puzzle),
      "visualization": new StringEnumAttribute(
        visualizationFormats,
        initialValues.visualization,
      ),

      "background": new StringEnumAttribute(
        backgroundThemes,
        initialValues.background,
      ),
      "controls": new StringEnumAttribute(
        controlsLocations,
        initialValues.controls,
      ),

      "back-view": new StringEnumAttribute(
        backViewLayouts,
        initialValues["backView"],
      ),
      "camera-position": new Vector3Attribute(
        new Vector3(0, 0, 5),
        initialValues["cameraPosition"],
      ),
    };
  }

  static get observedAttributes(): (keyof TwistyPlayerAttributes & string)[] {
    return Object.keys(twistyPlayerAttributeMap);
  }

  attributeChangedCallback(
    attributeName: string,
    oldValue: string,
    newValue: string,
  ): void {
    const managedAttribute = this.attributes[attributeName];
    if (managedAttribute) {
      // TODO: Handle `null` better.
      if (oldValue !== null && managedAttribute.string !== oldValue) {
        console.warn(
          "Attribute out of sync!",
          attributeName,
          managedAttribute.string,
          oldValue,
        );
      }
      managedAttribute.setString(newValue);

      // TODO: can we make this type-safe?
      // TODO: avoid double-setting in recursive calls
      this.twistyPlayer[twistyPlayerAttributeMap[attributeName]] =
        managedAttribute.value;
    }
  }
}