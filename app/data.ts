export type Data = {
  id: string;
  displayName: string;
};

export type CMSData = {
  faction: string[];
  loyalty?: string;
  legion?: string;
  name: string;
};

export const loyaltyData: Data[] = [
  { id: "1", displayName: "Loyalist" },
  { id: "2", displayName: "Traitor" },
];

export const factionData: Data[] = [
  { id: "1", displayName: "Legiones Astartes" },
  { id: "2", displayName: "Shattered Legions" },
  { id: "3", displayName: "Cult Mechanicum" },
  { id: "4", displayName: "Knights Questoris" },
  { id: "5", displayName: "Collegia Titanica" },
  { id: "6", displayName: "Ruinstorm Daemons" },
  { id: "7", displayName: "Solar Auxilia" },
  { id: "8", displayName: "Imperialis Militia" },
  { id: "9", displayName: "Legio Custodes" },
  { id: "10", displayName: "Silent Sisterhood" },
];

export const legionData: Data[] = [
  {
    id: "1",
    displayName: "Dark Angels",
  },
  {
    id: "3",
    displayName: "Emperors Children",
  },
  {
    id: "4",
    displayName: "Iron Warriors",
  },
  {
    id: "5",
    displayName: "White Scars",
  },
  {
    id: "6",
    displayName: "Space Wolves",
  },
  {
    id: "7",
    displayName: "Imperial Fists",
  },
  {
    id: "8",
    displayName: "Night Lords",
  },
  {
    id: "9",
    displayName: "Blood Angels",
  },
  {
    id: "10",
    displayName: "Iron Hands",
  },
  {
    id: "12",
    displayName: "World Eaters",
  },
  {
    id: "13",
    displayName: "Ultramarines",
  },
  {
    id: "14",
    displayName: "Death Guard",
  },
  {
    id: "15",
    displayName: "Thousand Sons",
  },
  {
    id: "16",
    displayName: "Sons of Horus",
  },
  {
    id: "17",
    displayName: "Word Bearers",
  },
  {
    id: "18",
    displayName: "Salamanders",
  },
  {
    id: "19",
    displayName: "Raven Guard",
  },
  {
    id: "20",
    displayName: "Alpha Legion",
  },
  {
    id: "99",
    displayName: "Black Shields",
  },
];

export const cmsData: CMSData[] = [
  {
    faction: ["1", "2"],
    name: "Sky-hunter Phalanx",
  },
  {
    faction: ["1", "2"],
    name: "Angels Wrath",
  },
  {
    faction: ["1", "2"],
    name: "Armoured Spearhead",
  },
  {
    faction: ["1", "2"],
    name: "Bretheren of Iron",
  },
  {
    faction: ["1", "2"],
    name: "Drop Pod Assault",
  },
  {
    faction: ["1", "2"],
    name: "Fury of the Ancients",
  },
  {
    faction: ["1", "2"],
    name: "Pride of the Legion",
  },
  {
    faction: ["1", "2"],
    name: "Recon Company",
  },
  {
    faction: ["1", "2"],
    name: "Underworld Assault",
  },
  {
    faction: ["1", "2"],
    legion: "7",
    name: "Hammerfall Strike Force",
  },
  {
    faction: ["1", "2"],
    legion: "7",
    name: "The Stone Gauntlet",
  },
  {
    faction: ["10"],
    name: "Chamber of Vigilance",
  },
];
