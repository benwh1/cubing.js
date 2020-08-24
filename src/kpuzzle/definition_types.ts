import { MoveExpander } from "./move_expander";

// TODO: Properly handle freezing
export interface OrbitTransformation {
  permutation: number[];
  orientation: number[];
}
// TODO: Use a list instead of an object for performance?
export type Transformation = Record<string, OrbitTransformation>;

export interface OrbitDefinition {
  numPieces: number;
  orientations: number;
}

export interface KPuzzleDefinition {
  name: string;
  orbits: { [/* orbit name */ key: string]: OrbitDefinition };
  startPieces: Transformation; // TODO: Expose a way to get the transformed start pieces.
  moves: { [/* move name */ key: string]: Transformation };
  svg?: string;
  moveExpander?: MoveExpander;
}
