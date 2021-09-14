import type { PuzzleDescriptionString } from "../../../puzzle-geometry/PGPuzzles";
import { cube3x3x3, PuzzleLoader, puzzles } from "../../../puzzles";
import type { PuzzleID } from "../../old/dom/TwistyPlayerConfig";
import { NoValueType, NO_VALUE, TwistyPropDerived } from "../TwistyProp";
import { descGenericPGPuzzleLoader } from "./PuzzleLoader-helper";

interface PuzzleLoaderPropInputs {
  puzzleIDRequest: PuzzleID | NoValueType;
  puzzleDescriptionRequest: PuzzleDescriptionString | NoValueType;
}

export class PuzzleLoaderProp extends TwistyPropDerived<
  PuzzleLoaderPropInputs,
  PuzzleLoader
> {
  derive(inputs: PuzzleLoaderPropInputs): PuzzleLoader {
    if (inputs.puzzleIDRequest && inputs.puzzleIDRequest !== NO_VALUE) {
      return puzzles[inputs.puzzleIDRequest];
    }
    if (
      inputs.puzzleDescriptionRequest &&
      inputs.puzzleDescriptionRequest !== NO_VALUE
    ) {
      return descGenericPGPuzzleLoader(inputs.puzzleDescriptionRequest);
    }
    return cube3x3x3;
  }
}
