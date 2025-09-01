export type Data = {
  id: string;
  displayName: string;
};
export type CMSData = {
  faction: string[];
  loyalty?: string;
  legion?: string;
  cmsmod?: string;
  name: string;
};
export type GlobalData = {
  faction: string;
  loyalty?: string;
  legion?: string;
  cmsmod?: string;
  name: string;
};
export var globalState: GlobalData = {
  faction: "",
  name: "",
  loyalty: "",
  legion: "",
  cmsmod: "",
};
export type UnitData = {
  forceOrg: string;
  displayName: string;
  faction: string[];
  loyalty?: string;
  legion?: string;
  cmsmod?: string;
};

export const loyaltyScreen: Data[] = [
  { id: "1", displayName: "Loyalist" },
  { id: "2", displayName: "Traitor" },
];
export const forceOrg: Data[] = [
  { id: "1", displayName: "Primarch" },
  { id: "2", displayName: "HQ" },
  { id: "3", displayName: "Troops" },
  { id: "4", displayName: "Elites" },
  { id: "5", displayName: "Fast Attack" },
  { id: "6", displayName: "Heavy Support" },
  { id: "7", displayName: "Lord of War" },
];
export const factionScreen: Data[] = [
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
export const legionScreen: Data[] = [
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
    name: "None",
  },
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
    faction: ["1"],
    name: "The Steel Fist",
    legion: "1",
  },
  {
    faction: ["1"],
    name: "The Eskaton Imperative",
    legion: "1",
  },
  {
    faction: ["1"],
    name: "The Storm of War",
    legion: "1",
  },
  {
    faction: ["1"],
    name: "The Unbroken Vow",
    legion: "1",
  },
  {
    faction: ["1"],
    name: "The Seeker’s Arrow",
    legion: "1",
  },
  {
    faction: ["1"],
    name: "The Serpent’s Bane",
    legion: "1",
  },
  {
    faction: ["1"],
    name: "Chogorian Brotherhood",
    legion: "5",
  },

  {
    faction: ["1"],
    name: "The Sagyar Mazan",
    legion: "5",
  },

  {
    faction: ["1"],
    name: "The Black Watch",
    legion: "6",
    loyalty: "1",
  },
  {
    faction: ["1"],
    name: "The Pale Hunters",
    legion: "6",
  },
  {
    faction: ["1"],
    name: "The Bloodied Claw",
    legion: "6",
  },
  {
    faction: ["1"],
    legion: "7",
    name: "Hammerfall Strike Force",
  },
  {
    faction: ["1"],
    legion: "7",
    name: "The Stone Gauntlet",
  },
  {
    faction: ["1"],
    legion: "7",
    name: "Templar Assault",
    loyalty: "1",
  },
  {
    faction: ["1"],
    name: "The Day of Revelation",
    legion: "9",
  },
  {
    faction: ["1"],
    name: "The Day of Sorrows",
    legion: "9",
  },
  {
    faction: ["1"],
    name: "Company of Bitter Iron",
    legion: "10",
    loyalty: "1",
  },
  {
    faction: ["1"],
    name: "The Head of the Gorgon",
    legion: "10",
  },
  {
    faction: ["1"],
    name: "Logos Lectora",
    legion: "13",
  },
  {
    faction: ["1"],
    name: "The Covenant of Fire",
    legion: "18",
  },
  {
    faction: ["1"],
    name: "The Awakening Fire",
    legion: "18",
  },
  {
    faction: ["1"],
    name: "Decapitation Strike",
    legion: "19",
  },
  {
    faction: ["1"],
    name: "Liberation Force",
    legion: "19",
    loyalty: "1",
  },
  {
    faction: ["1"],
    name: "The Maru Skara",
    legion: "3",
  },
  {
    faction: ["1"],
    name: "IIIrd Company Elite",
    legion: "3",
  },
  {
    faction: ["1"],
    name: "The Hammer of Olympia",
    legion: "4",
  },
  {
    faction: ["1"],
    name: "The Ironfire",
    legion: "4",
  },
  {
    faction: ["1"],
    name: "The Swift Blade",
    legion: "8",
  },
  {
    faction: ["1"],
    name: "Terror Assault",
    legion: "8",
  },
  {
    faction: ["1"],
    name: "Berserker Assault",
    legion: "12",
  },
  {
    faction: ["1"],
    name: "The Crimson Path",
    legion: "12",
  },
  {
    faction: ["1"],
    name: "The Reaping",
    legion: "14",
  },
  {
    faction: ["1"],
    name: "Creeping Death",
    legion: "14",
  },
  {
    faction: ["1"],
    name: "The Achaean Configuration",
    legion: "15",
  },
  {
    faction: ["1"],
    name: "The Guard Of The Crimson King",
    legion: "15",
  },
  {
    faction: ["1"],
    name: "The Black Reaving",
    legion: "16",
  },
  {
    faction: ["1"],
    name: "The Long March",
    legion: "16",
  },
  {
    faction: ["1"],
    name: "The Dark Brethren",
    legion: "17",
  },
  {
    faction: ["1"],
    name: "Last Of The Serrated Sun",
    legion: "17",
  },
  {
    faction: ["1"],
    name: "The Coils Of The Hydra",
    legion: "20",
  },
  {
    faction: ["1"],
    name: "Headhunter Leviathal",
    legion: "20",
  },
  {
    faction: ["3"],
    name: "Archimandrite",
  },
  {
    faction: ["3"],
    name: "Cybernetica",
  },
  {
    faction: ["3"],
    name: "Lacyraemarta",
  },
  {
    faction: ["3"],
    name: "Macrotek",
  },
  {
    faction: ["3"],
    name: "Malagra",
  },
  {
    faction: ["3"],
    name: "Myrmidax",
  },
  {
    faction: ["3"],
    name: "Reductor",
  },
  {
    faction: ["6"],
    name: "Encroaching Ruin",
  },
  {
    faction: ["6"],
    name: "Heedless Slaughter",
  },
  {
    faction: ["6"],
    name: "Putrid Corruption",
  },
  {
    faction: ["6"],
    name: "Rapturous Sensation",
  },
  {
    faction: ["6"],
    name: "Formless Distortion",
  },
  {
    faction: ["6"],
    name: "Infernal Tempest",
  },
  {
    faction: ["6"],
    name: "Ravenous Dissolution",
  },
  {
    faction: ["6"],
    name: "Malevolent Artifice",
  },
  {
    faction: ["7"],
    name: "Solar Pattern Cohorts",
  },
  {
    faction: ["7"],
    name: "Ultramar Pattern Cohorts",
  },
  {
    faction: ["7"],
    name: "Reborn Cohorts",
  },
  {
    faction: ["7"],
    name: "Armoured Fist Pattern Cohorts",
  },
  {
    faction: ["7"],
    name: "Penal Pattern Cohorts",
  },
  {
    faction: ["7"],
    name: "Feral Pattern Cohorts",
  },
  {
    faction: ["7"],
    name: "Siege Pattern Cohorts",
  },
  {
    faction: ["7"],
    name: "Iron Pattern Cohorts",
  },
  {
    faction: ["8"],
    name: "Warrior Elite",
  },
  {
    faction: ["8"],
    name: "Legacy of the Great Crusade",
  },
  {
    faction: ["8"],
    name: "Clanfolk Levy",
  },
  {
    faction: ["8"],
    name: "Gene-crafted",
  },
  {
    faction: ["8"],
    name: "Cyber-augmetics",
  },
  {
    faction: ["8"],
    name: "Alchem-jackers",
  },
  {
    faction: ["8"],
    name: "Survivors of the Dark Age",
  },
  {
    faction: ["8"],
    name: "Armoury of Old Night",
  },
  {
    faction: ["8"],
    name: "Feral Warriors",
  },
  {
    faction: ["8"],
    name: "Kinfolk Helots",
  },
  {
    faction: ["8"],
    name: "Abhuman Muster",
  },
  {
    faction: ["8"],
    name: "Debased Rabble",
    loyalty: "2",
  },
  {
    faction: ["8"],
    name: "Tainted Flesh",
    loyalty: "2",
  },
  {
    faction: ["8"],
    name: "Ogryn Conscripts",
  },
  {
    faction: ["8"],
    name: "Industrial Stronghold",
  },
  {
    faction: ["8"],
    name: "Unending Horde",
  },
  {
    faction: ["8"],
    name: "Arms of the Omnissiah",
  },
  {
    faction: ["8"],
    name: "Forge Remnants",
  },
  {
    faction: ["8"],
    name: "Augmented Levy",
  },
  {
    faction: ["10"],
    name: "Chamber of Vigilance",
  },
  {
    faction: ["10"],
    name: "Chamber of Judgement",
  },
  {
    faction: ["10"],
    name: "Chamber of Oblivion",
  },
];
export const rosterScreenInner: UnitData[] = [
  //Space Marines
  //Primarchs
  {
    forceOrg: "1",
    displayName: "Lion El'Johnson",
    faction: ["1"],
    legion: "1",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Fulgrim",
    faction: ["1"],
    legion: "3",
    loyalty: "2",
  },
  {
    forceOrg: "1",
    displayName: "Perturabo",
    faction: ["1"],
    legion: "4",
    loyalty: "2",
  },
  {
    forceOrg: "1",
    displayName: "Jaghatai Khan",
    faction: ["1"],
    legion: "5",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Leman Russ",
    faction: ["1"],
    legion: "6",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Rogal Dorn",
    faction: ["1"],
    legion: "7",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Konrad Curze",
    faction: ["1"],
    legion: "8",
    loyalty: "2",
  },
  {
    forceOrg: "1",
    displayName: "Sanguinius",
    faction: ["1"],
    legion: "9",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Ferrus Manus",
    faction: ["1"],
    legion: "10",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Angron",
    faction: ["1"],
    legion: "12",
    loyalty: "2",
  },
  {
    forceOrg: "1",
    displayName: "Roboute Guilliman",
    faction: ["1"],
    legion: "13",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Mortarion",
    faction: ["1"],
    legion: "14",
    loyalty: "2",
  },
  {
    forceOrg: "1",
    displayName: "Magnus the Red",
    faction: ["1"],
    legion: "15",
    loyalty: "2",
  },
  {
    forceOrg: "1",
    displayName: "Horus Lupercal",
    faction: ["1"],
    legion: "16",
    loyalty: "2",
  },
  {
    forceOrg: "1",
    displayName: "Lorgar Aurelian",
    faction: ["1"],
    legion: "17",
    loyalty: "2",
  },
  {
    forceOrg: "1",
    displayName: "Vulkan",
    faction: ["1"],
    legion: "18",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Corvus Corax",
    faction: ["1"],
    legion: "19",
    loyalty: "1",
  },
  {
    forceOrg: "1",
    displayName: "Alpharius Omegon",
    faction: ["1"],
    legion: "20",
    loyalty: "2",
  },
  //HQ
  { forceOrg: "2", displayName: "Centurion", faction: ["1", "2"] },
  { forceOrg: "2", displayName: "Damocles Command Rhino", faction: ["1", "2"] },
  { forceOrg: "2", displayName: "Optae", faction: ["1", "2"] },
  { forceOrg: "2", displayName: "Praetor", faction: ["1", "2"] },
  //Troops
  { forceOrg: "3", displayName: "Assault Squad", faction: ["1", "2"] },
  { forceOrg: "3", displayName: "Breacher Squad", faction: ["1", "2"] },
  { forceOrg: "3", displayName: "Despoiler Squad", faction: ["1", "2"] },
  { forceOrg: "3", displayName: "Reconnaissance Squad", faction: ["1", "2"] },
  { forceOrg: "3", displayName: "Scout Squad", faction: ["1", "2"] },
  { forceOrg: "3", displayName: "Tactical Squad", faction: ["1", "2"] },
  { forceOrg: "3", displayName: "Tactical Support Squad", faction: ["1", "2"] },
  {
    forceOrg: "3",
    displayName: "Tarantula Sentry Gun Battery",
    faction: ["1", "2"],
  },
  {
    forceOrg: "3",
    displayName: "Terminator Indomitus Squad",
    faction: ["1", "2"],
  },
  //Elites
  {
    forceOrg: "4",
    displayName: "Apothecarion Detachment",
    faction: ["1", "2"],
  },
  {
    forceOrg: "4",
    displayName: "Castra Ferrum Dreadnought Talon",
    faction: ["1", "2"],
  },
  {
    forceOrg: "4",
    displayName: "Contemptor Dreadnought Talon",
    faction: ["1", "2"],
  },
  {
    forceOrg: "4",
    displayName: "Destroyer Assault Squad",
    faction: ["1", "2"],
  },
  {
    forceOrg: "4",
    displayName: "Mortalis Destroyer Squad",
    faction: ["1", "2"],
  },
  { forceOrg: "4", displayName: "Nullificator Squad", faction: ["1", "2"] },
  { forceOrg: "4", displayName: "Rapier Battery", faction: ["1", "2"] },
  { forceOrg: "4", displayName: "Techmarine Covenant", faction: ["1", "2"] },
  {
    forceOrg: "4",
    displayName: "Terminator Cataphractii Squad",
    faction: ["1", "2"],
  },
  {
    forceOrg: "4",
    displayName: "Terminator Tartaros Squad",
    faction: ["1", "2"],
  },
  { forceOrg: "4", displayName: "Veteran Squad", faction: ["1", "2"] },

  //Fast Attack
  { forceOrg: "5", displayName: "Dreadclaw Drop Pod", faction: ["1", "2"] },
  { forceOrg: "5", displayName: "Javelin Squadron", faction: ["1", "2"] },
  {
    forceOrg: "5",
    displayName: "Legion Avenger Strike Fighter",
    faction: ["1", "2"],
  },
  {
    forceOrg: "5",
    displayName: "Legion Primaris-Lightning Strike Fighter",
    faction: ["1", "2"],
  },
  {
    forceOrg: "5",
    displayName: "Legion Thunderbolt Fighter",
    faction: ["1", "2"],
  },
  { forceOrg: "5", displayName: "Outrider Squadron", faction: ["1", "2"] },
  {
    forceOrg: "5",
    displayName: "Proteus Land Speeder Squadron",
    faction: ["1", "2"],
  },
  { forceOrg: "5", displayName: "Sabre Strike Squadron", faction: ["1", "2"] },
  { forceOrg: "5", displayName: "Seeker Squad", faction: ["1", "2"] },
  { forceOrg: "5", displayName: "Sky-Hunter Squadron", faction: ["1", "2"] },
  {
    forceOrg: "5",
    displayName: "Spatha Attack Bike Squadron",
    faction: ["1", "2"],
  },
  { forceOrg: "5", displayName: "Storm Eagle Gunship", faction: ["1", "2"] },
  { forceOrg: "5", displayName: "Xiphon Interceptor", faction: ["1", "2"] },
  //Heavy Support
  { forceOrg: "6", displayName: "Arquitor Squadron", faction: ["1", "2"] },
  { forceOrg: "6", displayName: "Caestus Assault Ram", faction: ["1", "2"] },
  {
    forceOrg: "6",
    displayName: "Deathstorm Drop Pod Squadron",
    faction: ["1", "2"],
  },
  {
    forceOrg: "6",
    displayName: "Deredeo Dreadnought Talon",
    faction: ["1", "2"],
  },
  { forceOrg: "6", displayName: "Fire Raptor Gunship", faction: ["1", "2"] },
  { forceOrg: "6", displayName: "Heavy Support Squad", faction: ["1", "2"] },
  { forceOrg: "6", displayName: "Kharybdis Assault Claw", faction: ["1", "2"] },
  { forceOrg: "6", displayName: "Kratos Squadron", faction: ["1", "2"] },
  {
    forceOrg: "6",
    displayName: "Land Raider Achilles Squadron",
    faction: ["1", "2"],
  },
  {
    forceOrg: "6",
    displayName: "Land Raider Phobos Squadron",
    faction: ["1", "2"],
  },
  {
    forceOrg: "6",
    displayName: "Land Raider Proteus Carrier Squadron",
    faction: ["1", "2"],
  },
  {
    forceOrg: "6",
    displayName: "Land Raider Proteus Explorator",
    faction: ["1", "2"],
  },
  { forceOrg: "6", displayName: "Land Raider Spartan", faction: ["1", "2"] },
  {
    forceOrg: "6",
    displayName: "Legion Basilisk Squadron",
    faction: ["1", "2"],
  },
  {
    forceOrg: "6",
    displayName: "Legion Malcador Assault Tank Squadron",
    faction: ["1", "2"],
  },
  { forceOrg: "6", displayName: "Legion Medusa Squadron", faction: ["1", "2"] },
  {
    forceOrg: "6",
    displayName: "Legion Minotaur Battery",
    faction: ["1", "2"],
  },
  {
    forceOrg: "6",
    displayName: "Leviathan Dreadnought Talon",
    faction: ["1", "2"],
  },
  { forceOrg: "6", displayName: "Predator Squadron", faction: ["1", "2"] },
  { forceOrg: "6", displayName: "Scorpius Squadron", faction: ["1", "2"] },
  { forceOrg: "6", displayName: "Sicaran Arcus Squadron", faction: ["1", "2"] },
  { forceOrg: "6", displayName: "Sicaran Omega Squadron", faction: ["1", "2"] },
  {
    forceOrg: "6",
    displayName: "Sicaran Punisher Squadron",
    faction: ["1", "2"],
  },
  { forceOrg: "6", displayName: "Sicaran Squadron", faction: ["1", "2"] },
  {
    forceOrg: "6",
    displayName: "Sicaran Venator Squadron",
    faction: ["1", "2"],
  },
  { forceOrg: "6", displayName: "Vindicator Squadron", faction: ["1", "2"] },
  { forceOrg: "6", displayName: "Whirlwind", faction: ["1", "2"] },
  //Lord of War
  { forceOrg: "7", displayName: "Cerberus Squadron", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Falchion", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Fellblade", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Glaive", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Legion Baneblade", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Legion Banehammer", faction: ["1", "2"] },
  {
    forceOrg: "7",
    displayName: "Legion Crassus Armoured Assault Transport",
    faction: ["1", "2"],
  },
  {
    forceOrg: "7",
    displayName: "Legion Macharius Heavy Tank Squadron",
    faction: ["1", "2"],
  },
  {
    forceOrg: "7",
    displayName: "Legion Macharius Omega Heavy Tank",
    faction: ["1", "2"],
  },
  { forceOrg: "7", displayName: "Legion Marauder Bomber", faction: ["1", "2"] },
  {
    forceOrg: "7",
    displayName: "Legion Marauder Destroyer",
    faction: ["1", "2"],
  },
  {
    forceOrg: "7",
    displayName: "Legion Praetor Armoured Assault Launcher",
    faction: ["1", "2"],
  },
  { forceOrg: "7", displayName: "Legion Shadowsword", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Legion Stormblade", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Legion Stormlord", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Legion Stormsword", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Mastodon", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Sokar Stormbird", faction: ["1", "2"] },
  { forceOrg: "7", displayName: "Thunderhawk Gunship", faction: ["1", "2"] },
  {
    forceOrg: "7",
    displayName: "Thunderhawk Transporter",
    faction: ["1", "2"],
  },
  { forceOrg: "7", displayName: "Typhon Squadron", faction: ["1", "2"] },
  //Mechanicum
  //HQ
  { forceOrg: "2", displayName: "Archmagos Prime", faction: ["3"] },
  { forceOrg: "2", displayName: "Archmagos Prime on Abeyant", faction: ["3"] },
  { forceOrg: "2", displayName: "Magos Dominus", faction: ["3"] },
  { forceOrg: "2", displayName: "Magos Dominus on Abeyant", faction: ["3"] },
  //Elites
  {
    forceOrg: "4",
    displayName: "Domitar Battle-Automata Maniple",
    faction: ["3"],
  },
  { forceOrg: "4", displayName: "Myrmidon Secutor Host", faction: ["3"] },
  { forceOrg: "4", displayName: "Tech-Priest Auxilia", faction: ["3"] },
  //Troops
  {
    forceOrg: "3",
    displayName: "Adsecularis Tech-thralls Covenant",
    faction: ["3"],
  },
  {
    forceOrg: "3",
    displayName: "Castellax Battle-Automata Maniple",
    faction: ["3"],
  },
  {
    forceOrg: "3",
    displayName: "Scyllax Guardian-Automata Maniple",
    faction: ["3"],
  },
  { forceOrg: "3", displayName: "Thallax Cohort", faction: ["3"] },
  //Fast Attack
  {
    forceOrg: "5",
    displayName: "Arlatax Battle-Automata Maniple",
    faction: ["3"],
  },
  { forceOrg: "5", displayName: "Ursarax Cohort", faction: ["3"] },
  {
    forceOrg: "5",
    displayName: "Vorax Battle-automata Maniple",
    faction: ["3"],
  },
  {
    forceOrg: "5",
    displayName: "Vultarax Stratos-Automata Squadron",
    faction: ["3"],
  },
  //Heavy Support
  { forceOrg: "6", displayName: "Karacnos Assault Tank", faction: ["3"] },
  { forceOrg: "6", displayName: "Knight Moirax Talon", faction: ["3"] },
  { forceOrg: "6", displayName: "Krios Squadron", faction: ["3"] },
  { forceOrg: "6", displayName: "Myrmidon Destructor Host", faction: ["3"] },
  {
    forceOrg: "6",
    displayName: "Thanatar Siege-automata Maniple",
    faction: ["3"],
  },
  //Lord of War
  {
    forceOrg: "7",
    displayName: "Mechanicum Acastus Knight Asterius",
    faction: ["3"],
  },
  { forceOrg: "7", displayName: "Mechanicum Knight Atrapos", faction: ["3"] },
  { forceOrg: "7", displayName: "Mechanicum Knight Magaera", faction: ["3"] },
  { forceOrg: "7", displayName: "Mechanicum Knight Styrix", faction: ["3"] },
  { forceOrg: "7", displayName: "Ordinatus Aktaeus", faction: ["3"] },
  { forceOrg: "7", displayName: "Ordinatus Ulator", faction: ["3"] },
  //4Knights Questoris
  //Troops
  { forceOrg: "3", displayName: "Armiger Helverin Talon", faction: ["4"] },
  { forceOrg: "3", displayName: "Armiger Warglaive Talon", faction: ["4"] },

  //Lord of War
  { forceOrg: "7", displayName: "Acastus Knight Porphyrion", faction: ["4"] },
  { forceOrg: "7", displayName: "Knight Acheron", faction: ["4"] },
  { forceOrg: "7", displayName: "Knight Castigator", faction: ["4"] },
  { forceOrg: "7", displayName: "Knight Lancer", faction: ["4"] },
  { forceOrg: "7", displayName: "Knight Questoris", faction: ["4"] },
  {
    forceOrg: "7",
    displayName: "Questoris Acastus Knight Asterius",
    faction: ["4"],
  },
  { forceOrg: "7", displayName: "Questoris Knight Atrapos", faction: ["4"] },
  { forceOrg: "7", displayName: "Questoris Knight Magaera", faction: ["4"] },
  { forceOrg: "7", displayName: "Questoris Knight Styrix", faction: ["4"] },

  //5Collegia Titanica
  //Lord of War
  { forceOrg: "7", displayName: "Reaver Battle Titan", faction: ["5"] },
  { forceOrg: "7", displayName: "Warbringer Nemesis Titan", faction: ["5"] },
  { forceOrg: "7", displayName: "Warhound Scout Titan", faction: ["5"] },
  { forceOrg: "7", displayName: "Warlord Battle Titan", faction: ["5"] },
  //6 Ruinstorm Daemons
  //6 Ruinstorm Daemons
  //HQ
  { forceOrg: "2", displayName: "Ruinstorm Daemon Harbinger", faction: ["6"] },
  { forceOrg: "2", displayName: "Ruinstorm Daemon Hierarch", faction: ["6"] },
  { forceOrg: "2", displayName: "Ruinstorm Daemon Sovereign", faction: ["6"] },
  //Elites
  { forceOrg: "4", displayName: "Ruinstorm Daemon Beasts", faction: ["6"] },
  { forceOrg: "4", displayName: "Ruinstorm Daemon Brutes", faction: ["6"] },
  //Troops
  { forceOrg: "3", displayName: "Ruinstorm Daemon Swarms", faction: ["6"] },
  { forceOrg: "3", displayName: "Ruinstorm Lesser Daemons", faction: ["6"] },
  //Fast Attack
  { forceOrg: "5", displayName: "Ruinstorm Daemon Cavalry", faction: ["6"] },
  { forceOrg: "5", displayName: "Ruinstorm Daemon Harriers", faction: ["6"] },
  //Heavy Support
  {
    forceOrg: "6",
    displayName: "Greater Ruinstorm Daemon Beast",
    faction: ["6"],
  },
  { forceOrg: "6", displayName: "Ruinstorm Daemon Behemoth", faction: ["6"] },
  //Lords of War
  { forceOrg: "7", displayName: "Cor'bax Utterblight Unbound", faction: ["6"] },
  { forceOrg: "7", displayName: "Ka’bandha Unbound", faction: ["6"] },
  { forceOrg: "7", displayName: "Ruinstorm Arch-Daemon", faction: ["6"] },
  { forceOrg: "7", displayName: "Samus Unbound", faction: ["6"] },
  //7 Solar Auxilia
  //HQ
  {
    forceOrg: "2",
    displayName: "Armoured Fist - Leman Russ Command Tank",
    faction: ["7"],
  },
  { forceOrg: "2", displayName: "Legate Marshal", faction: ["7"] },
  { forceOrg: "2", displayName: "Tactical Command Tercio", faction: ["7"] },
  //Elites
  { forceOrg: "4", displayName: "Charonite Ogryn Section", faction: ["7"] },
  { forceOrg: "4", displayName: "Medicae Section", faction: ["7"] },
  { forceOrg: "4", displayName: "Veletaris Tercio", faction: ["7"] },
  //Troops
  { forceOrg: "3", displayName: "Infantry Tercio", faction: ["7"] },
  //Fast Attack
  { forceOrg: "5", displayName: "Arvus Lighter", faction: ["7"] },
  { forceOrg: "5", displayName: "Arvus Transport", faction: ["7"] },
  {
    forceOrg: "5",
    displayName: "Divisio Aeronautica Primaris-Lightning Strike Fighter",
    faction: ["7"],
  },
  {
    forceOrg: "5",
    displayName: "Divisio Aeronautica Thunderbolt Fighter",
    faction: ["7"],
  },
  {
    forceOrg: "5",
    displayName: "Hermes Light Sentinel Squadron",
    faction: ["7"],
  },
  //Heavy Support
  {
    forceOrg: "6",
    displayName: "Aethon Heavy Sentinel Squadron",
    faction: ["7"],
  },
  { forceOrg: "6", displayName: "Armoured Battery", faction: ["7"] },
  { forceOrg: "6", displayName: "Armoured Tercio", faction: ["7"] },
  { forceOrg: "6", displayName: "Artillery Tercio", faction: ["7"] },
  { forceOrg: "6", displayName: "Cyclops Demolition Section", faction: ["7"] },
  {
    forceOrg: "6",
    displayName: "Malcador Heavy Tank Squadron",
    faction: ["7"],
  },
  {
    forceOrg: "6",
    displayName: "Valdor Tank Destroyer Squadron",
    faction: ["7"],
  },
  //8 Imperialis Militia
  //HQ
  { forceOrg: "2", displayName: "Command Cadre", faction: ["8"] },
  { forceOrg: "2", displayName: "Discipline Master Cadre", faction: ["8"] },
  { forceOrg: "2", displayName: "Force Commander", faction: ["8"] },
  //Elites
  { forceOrg: "4", displayName: "Field Gun Battery", faction: ["8"] },
  { forceOrg: "4", displayName: "Medicae Detachment", faction: ["8"] },
  { forceOrg: "4", displayName: "Ogryn Brute Squad", faction: ["8"] },
  //Troops
  { forceOrg: "3", displayName: "Fire Support Squad", faction: ["8"] },
  { forceOrg: "3", displayName: "Grenadier Squad", faction: ["8"] },
  { forceOrg: "3", displayName: "Infantry Squad", faction: ["8"] },
  { forceOrg: "3", displayName: "Levy Squad", faction: ["8"] },
  { forceOrg: "3", displayName: "Reconnaissance Squad", faction: ["8"] },
  //Fast Attack
  { forceOrg: "5", displayName: "Arvus Transport", faction: ["8"] },
  { forceOrg: "5", displayName: "Beastmasters", faction: ["8"] },
  { forceOrg: "5", displayName: "Cargo-8 Hauler Squadron", faction: ["8"] },
  { forceOrg: "5", displayName: "Cavalry Squad", faction: ["8"] },
  { forceOrg: "5", displayName: "Sentinel Squadron", faction: ["8"] },
  { forceOrg: "5", displayName: "Thunderbolt Fighter", faction: ["8"] },
  //Heavy Support
  { forceOrg: "6", displayName: "Gorgon Heavy Transporter", faction: ["8"] },
  { forceOrg: "6", displayName: "Heavy Ordnance Battery", faction: ["8"] },
  { forceOrg: "6", displayName: "Leman Russ", faction: ["8"] },
  { forceOrg: "6", displayName: "Malcador Heavy Tank", faction: ["8"] },
  { forceOrg: "6", displayName: "Rapier Battery", faction: ["8"] },
  //9 Legio Custodes
  //HQ
  { forceOrg: "2", displayName: "Custodes Tribune", faction: ["9"] },
  { forceOrg: "2", displayName: "Custodian Shield Captain", faction: ["9"] },
  //Elites
  { forceOrg: "4", displayName: "Aquilion Terminator Squad", faction: ["9"] },
  {
    forceOrg: "4",
    displayName: "Contemptor-Achillus Dreadnought",
    faction: ["9"],
  },
  { forceOrg: "4", displayName: "Hetaeron Guard Squad", faction: ["9"] },
  //Troops
  { forceOrg: "3", displayName: "Custodian Guard Squad", faction: ["9"] },
  { forceOrg: "3", displayName: "Sentinel Guard Squad", faction: ["9"] },
  //Fast Attack
  { forceOrg: "5", displayName: "Agamatus Jetbike Squadron", faction: ["9"] },
  { forceOrg: "5", displayName: "Custodian Venatari Squad", faction: ["9"] },
  {
    forceOrg: "5",
    displayName: "Pallas Attack Speeder Squadron",
    faction: ["9"],
  },
  //Heavy Support
  { forceOrg: "6", displayName: "Caladius Grav-Tank", faction: ["9"] },
  {
    forceOrg: "6",
    displayName: "Contemptor-Galatus Dreadnought",
    faction: ["9"],
  },
  { forceOrg: "6", displayName: "Sagittarum Guard Squad", faction: ["9"] },
  { forceOrg: "6", displayName: "Telemon Heavy Dreadnought", faction: ["9"] },
  //10 Silent Sisterhood
  //HQ
  { forceOrg: "2", displayName: "Jenetia Krole", faction: ["10"] },
  { forceOrg: "2", displayName: "Knight Abyssal", faction: ["10"] },
  { forceOrg: "2", displayName: "Knight Centura", faction: ["10"] },
  { forceOrg: "2", displayName: "Silent Fury", faction: ["10"] },
  { forceOrg: "2", displayName: "Silent Judge", faction: ["10"] },
  //Elites
  { forceOrg: "4", displayName: "Eradicator Cadre", faction: ["10"] },
  { forceOrg: "4", displayName: "Knight Vestal Covenant", faction: ["10"] },
  { forceOrg: "4", displayName: "Oblivion Knights", faction: ["10"] },
  //Troops
  { forceOrg: "3", displayName: "Prosecutor Cadre", faction: ["10"] },
  { forceOrg: "3", displayName: "Vigilator Cadre", faction: ["10"] },
  //Fast Attack
  { forceOrg: "5", displayName: "Firebrand Cadre", faction: ["10"] },
  { forceOrg: "5", displayName: "Pursuer Cadre", faction: ["10"] },
  { forceOrg: "5", displayName: "Subjugator Cadre", faction: ["10"] },
  { forceOrg: "5", displayName: "Termite Assault Drill", faction: ["10"] },
  //Heavy Support
  { forceOrg: "6", displayName: "Expurgator Cadre", faction: ["10"] },
  { forceOrg: "6", displayName: "Sanctioner Cadre", faction: ["10"] },
];
