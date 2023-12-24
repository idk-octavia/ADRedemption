import { DC } from "../../constants";


export const corruptionUpgrades = [
  {
    name: "Memory Perfection",
    id: 1,
    cost: 2,
    requirement: `Please send your save to the devs with an image of this - You should never be able to see this`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `Ra memory gain is ${formatX(1500, 1)} stronger, but only when in the appropriate celestials Reality.`,
  },
  {
    name: "Spacetime Distruption",
    id: 2,
    cost: 3,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Game speed is multiplied based on highest score (Applies after corruptions)",
    effect: () => Decimal.pow10(Math.pow(1 + player.mending.corruptionChallenge.recordScore, 1/1.48)),
    formatEffect: value => formatX(value, 2)
  },
  {
    name: "Rewarding Achievements",
    id: 3,
    cost: 2,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Gain a power effect to achievement power effects, after softcaps, based on unspent corrupted fragments.",
    effect: () => 1 + Math.log(1 + (player.mending.corruptedFragments - player.mending.spentCF)/3), // We do math.log not math.log10 here since we do want the natural log of CF, not the base 10 log
    formatEffect: value => `^` + format(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 6",
    id: 4,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 6",
    id: 5,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 6",
    id: 6,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 7",
    id: 7,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 8",
    id: 8,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 9",
    id: 9,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 10",
    id: 10,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 11",
    id: 11,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 12",
    id: 12,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 13",
    id: 13,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 14",
    id: 14,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 15",
    id: 15,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Prestige Extension",
    id: 16,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `Prestige Limits power is now doubled, capped at ${formatInt(1)}`,
  },
  {
    name: "Dimension Superscaling",
    id: 17,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `If Dimensional Limitations corruption is 5 or higher, Antimatter dimensions gain a power effect based on highest Glyph Level this mend.`,
    effect: () => player.mending.corruptionChallenge.corruptedMend & player.mending.corruption[1] >= 5 ? 1 + Math.log(player.records.bestReality.glyphLevelSet) : 1,
    formatEffect: value => formatPow(value, 2, 2)
  },
  {
    name: "Time Expansion",
    id: 18,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `Time Compression power +${format(0.01, 2, 2)} (capped at +${formatInt(1)}), Time compression devisor ${formatPow(0.1, 1, 1)}`,
  },
  {
    name: "Galaxy Strengthening",
    id: 19,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `Galactic Weakness - Scaling is ^0.5, and power is ${formatX(1.4, 1, 1)} (capped at ${formatX(1)})`,
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Rewarding Glyphs",
    id: 20,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "If Complex Glyphs is level 4 or higher, gain a power effect to score, based on glyph levels and Complex Glyphs level",
    effect: () => player.mending.corruptionChallenge.corruptedMend && (player.mending.corruption[4] >= 4) ? 1 + Math.log(Math.log(player.mending.corruption[4] * Math.max(1,player.records.bestReality.glyphLevel)))/2 : 1,
    formatEffect: value => formatPow(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 21",
    id: 21,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 22",
    id: 22,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 23",
    id: 23,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 24",
    id: 24,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption Upgrade 25",
    id: 25,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
];
