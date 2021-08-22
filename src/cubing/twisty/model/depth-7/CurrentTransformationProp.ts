import { KSolvePuzzle } from "../../../twisty";
import {
  combineTransformations,
  KPuzzleDefinition,
} from "../../../kpuzzle";
import type { Transformation } from "../../../puzzle-geometry/interfaces";
import type {
  AlgIndexer,
  CurrentMoveInfo,
} from "../../old/animation/indexer/AlgIndexer";
import { TwistyPropDerived } from "../TwistyProp";

interface CurentTransformationPropInputs {
  anchoredStart: Transformation;
  currentMoveInfo: CurrentMoveInfo;
  indexer: AlgIndexer<any>;
  def: KPuzzleDefinition;
}

// This started as a version of `EffectiveTimestamp` without the actual
// timestamp, to enable easier caching.
export class CurentTransformationProp extends TwistyPropDerived<
  CurentTransformationPropInputs,
  Transformation
> {
  // TODO: Figure out why this is still firing 6 times during stub demo loading.
  derive(inputs: CurentTransformationPropInputs): Transformation {
    let state: Transformation = inputs.indexer.transformAtIndex(
      inputs.currentMoveInfo.stateIndex,
    ) as any;
    state = combineTransformations(inputs.def, inputs.anchoredStart, state);
    const ksolvePuzzle = new KSolvePuzzle(inputs.def); // TODO: put this elsewhere.
    for (const finishingMove of inputs.currentMoveInfo.movesFinishing) {
      state = combineTransformations(
        inputs.def,
        state,
        ksolvePuzzle.stateFromMove(finishingMove.move),
      );
    }
    return state;
  }
}