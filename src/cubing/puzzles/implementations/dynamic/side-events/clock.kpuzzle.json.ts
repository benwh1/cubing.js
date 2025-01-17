import type { KPuzzleDefinition } from "../../../../kpuzzle";
import type { KTransformationOrbitData } from "../../../../kpuzzle/KPuzzleDefinition";

const p18 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const o18 = new Array(18).fill(0);
const t18: KTransformationOrbitData = {
  permutation: p18,
  orientation: o18,
};

export const clockJSON: KPuzzleDefinition = {
  name: "clock",
  orbits: {
    DIALS: { numPieces: 18, numOrientations: 12 },
    FACES: { numPieces: 18, numOrientations: 1 },
    FRAME: { numPieces: 1, numOrientations: 2 },
    HOUR_MARKS: { numPieces: 18, numOrientations: 4 },
    PEG_CAPS: { numPieces: 8, numOrientations: 12 },
  },
  startStateData: {
    DIALS: {
      pieces: p18,
      orientation: o18,
    },
    FACES: {
      pieces: p18,
      orientation: o18,
    },
    FRAME: { pieces: [0], orientation: [0] },
    HOUR_MARKS: {
      pieces: p18,
      orientation: o18,
    },
    PEG_CAPS: {
      pieces: [0, 1, 2, 3, 4, 5, 6, 7],
      orientation: [0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  moves: {
    UL_PLUS_: {
      DIALS: {
        permutation: p18,
        orientation: [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0],
      },
      FACES: t18,
      FRAME: { permutation: [0], orientation: [0] },
      HOUR_MARKS: t18,
      PEG_CAPS: {
        permutation: [0, 1, 2, 3, 4, 5, 6, 7],
        orientation: [1, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    U_PLUS_: {
      DIALS: {
        permutation: p18,
        orientation: [1, 1, 1, 1, 1, 1, 0, 0, 0, 11, 0, 11, 0, 0, 0, 0, 0, 0],
      },
      FACES: t18,
      FRAME: { permutation: [0], orientation: [0] },
      HOUR_MARKS: t18,
      PEG_CAPS: {
        permutation: [0, 1, 2, 3, 4, 5, 6, 7],
        orientation: [1, 1, 0, 0, 0, 0, 0, 0],
      },
    },
    ALL_PLUS_: {
      DIALS: {
        permutation: p18,
        orientation: [1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 0, 11, 0, 0, 0, 11, 0, 11],
      },
      FACES: t18,
      FRAME: { permutation: [0], orientation: [0] },
      HOUR_MARKS: t18,
      PEG_CAPS: {
        permutation: [0, 1, 2, 3, 4, 5, 6, 7],
        orientation: [1, 1, 1, 1, 0, 0, 0, 0],
      },
    },
    y2: {
      DIALS: {
        permutation: [
          9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8,
        ],
        orientation: o18,
      },
      FACES: {
        permutation: [
          9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8,
        ],
        orientation: o18,
      },
      FRAME: { permutation: [0], orientation: [1] },
      HOUR_MARKS: {
        permutation: [
          9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8,
        ],
        orientation: o18,
      },
      PEG_CAPS: {
        permutation: [4, 5, 6, 7, 0, 1, 2, 3],
        orientation: [0, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    z: {
      DIALS: {
        permutation: [
          6, 3, 0, 7, 4, 1, 8, 5, 2, 11, 14, 17, 10, 13, 16, 9, 12, 15,
        ],
        orientation: [
          3, 3, 3, 3, 3, 3, 3, 3, 3, -3, -3, -3, -3, -3, -3, -3, -3, -3,
        ],
      },
      FACES: {
        permutation: [
          6, 3, 0, 7, 4, 1, 8, 5, 2, 11, 14, 17, 10, 13, 16, 9, 12, 15,
        ],
        orientation: o18,
      },
      FRAME: { permutation: [0], orientation: [0] },
      HOUR_MARKS: {
        permutation: [
          6, 3, 0, 7, 4, 1, 8, 5, 2, 11, 14, 17, 10, 13, 16, 9, 12, 15,
        ],
        orientation: [
          1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        ],
      },
      PEG_CAPS: {
        permutation: [3, 0, 1, 2, 5, 6, 7, 4],
        orientation: [0, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    // TODO: define this as `z2 y2`
    x2: {
      DIALS: {
        permutation: [
          17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
        ],
        orientation: [
          6, 6, 6, 6, 6, 6, 6, 6, 6, -6, -6, -6, -6, -6, -6, -6, -6, -6,
        ],
      },
      FACES: {
        permutation: [
          17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
        ],
        orientation: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      FRAME: {
        permutation: [0],
        orientation: [1],
      },
      HOUR_MARKS: {
        permutation: [
          17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
        ],
        orientation: [
          2, 2, 2, 2, 2, 2, 2, 2, 2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        ],
      },
      PEG_CAPS: {
        permutation: [6, 7, 4, 5, 2, 3, 0, 1],
        orientation: [0, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    UL: {
      // TODO: define "pin up" as something other than a normal move.
      DIALS: t18,
      FACES: t18,
      FRAME: { permutation: [0], orientation: [0] },
      HOUR_MARKS: t18,
      PEG_CAPS: {
        permutation: [0, 1, 2, 3, 4, 5, 6, 7],
        orientation: [1, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    UR: {
      // TODO: define "pin up" as something other than a normal move.
      DIALS: t18,
      FACES: t18,
      FRAME: { permutation: [0], orientation: [0] },
      HOUR_MARKS: t18,
      PEG_CAPS: {
        permutation: [0, 1, 2, 3, 4, 5, 6, 7],
        orientation: [0, 1, 0, 0, 0, 0, 0, 0],
      },
    },
    DL: {
      // TODO: define "pin up" as something other than a normal move.
      DIALS: t18,
      FACES: t18,
      FRAME: { permutation: [0], orientation: [0] },
      HOUR_MARKS: t18,
      PEG_CAPS: {
        permutation: [0, 1, 2, 3, 4, 5, 6, 7],
        orientation: [0, 0, 0, 1, 0, 0, 0, 0],
      },
    },
    DR: {
      // TODO: define "pin up" as something other than a normal move.
      DIALS: t18,
      FACES: t18,
      FRAME: { permutation: [0], orientation: [0] },
      HOUR_MARKS: t18,
      PEG_CAPS: {
        permutation: [0, 1, 2, 3, 4, 5, 6, 7],
        orientation: [0, 0, 1, 0, 0, 0, 0, 0],
      },
    },
  },
  experimentalDerivedMoves: {
    UR_PLUS_: "[z': UL_PLUS_]",
    DR_PLUS_: "[z2: UL_PLUS_]",
    DL_PLUS_: "[z: UL_PLUS_]",

    R_PLUS_: "[z': U_PLUS_]",
    D_PLUS_: "[z2: U_PLUS_]",
    L_PLUS_: "[z: U_PLUS_]",

    F_PLUS_: "ALL_PLUS_",

    // x2: "y2 z2", // TODO(https://github.com/cubing/cubing.js/issues/279)

    ULw_PLUS_: "U_PLUS_ L_PLUS_ UL_PLUS_'",
    URw_PLUS_: "U_PLUS_ R_PLUS_ UR_PLUS_'",
    DLw_PLUS_: "D_PLUS_ L_PLUS_ DL_PLUS_'",
    DRw_PLUS_: "D_PLUS_ R_PLUS_ DR_PLUS_'",

    BULw_PLUS_: "[y2: URw_PLUS_']",
    BURw_PLUS_: "[y2: ULw_PLUS_']",
    BDLw_PLUS_: "[y2: DRw_PLUS_']",
    BDRw_PLUS_: "[y2: DLw_PLUS_']",

    B_PLUS_: "[y2: ALL_PLUS_']",
    BU_PLUS_: "[y2: U_PLUS_']",
    BR_PLUS_: "[y2: L_PLUS_']",
    BD_PLUS_: "[y2: D_PLUS_']",
    BL_PLUS_: "[y2: R_PLUS_']",
    BUR_PLUS_: "[y2: UL_PLUS_']",
    BUL_PLUS_: "[y2: UR_PLUS_']",
    BDL_PLUS_: "[y2: DR_PLUS_']",
    BDR_PLUS_: "[y2: DL_PLUS_']",

    MUL_PLUS_: "UR_PLUS_' DL_PLUS_' U_PLUS_ R_PLUS_ D_PLUS_ L_PLUS_ ALL_PLUS_'",
    MUR_PLUS_: "UL_PLUS_' DR_PLUS_' U_PLUS_ L_PLUS_ D_PLUS_ R_PLUS_ ALL_PLUS_'",
    MDR_PLUS_: "MUL_PLUS_",
    MDL_PLUS_: "MUR_PLUS_",

    BMUL_PLUS_: "[y2: MUR_PLUS_']",
    BMUR_PLUS_: "[y2: MUL_PLUS_']",
    BMDR_PLUS_: "[y2: MDR_PLUS_']",
    BMDL_PLUS_: "[y2: MDL_PLUS_']",
  },
};
