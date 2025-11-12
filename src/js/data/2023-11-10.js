dataSetVersion = "2023-11-10"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by faction",
    key: "faction",
    tooltip: "Check this to restrict to operators from certain factions.",
    checked: false,
    sub: [
      { name: "Endfield", key: "endfield" },
      { name: "Landbreaker", key: "landbreaker" },
      { name: "Order of Steel Oath", key: "oso" },
      { name: "Talos-II General Chamber of Commerce", key: "tgcc" },
      { name: "Rhodes Island", key: "rhodes" },
      { name: "Hongshan", key: "hongshan" }
    ]
  },
  {
    name: "Exclude males",
    key: "male",
    tooltip: "Check this to exclude males.",
    checked: false
  },
  {
    name: "Exclude females",
    key: "female",
    tooltip: "Check this to exclude females.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Endministrator (Female)",
    img: "endminA.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Endministrator (Male)",
    img: "endminB.png",
    opts: {
      faction: ['endfield'],
      male: true
    }
  },
  {
    name: "Perlica",
    img: "perlica.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Wulfgard",
    img: "wulfgard.png",
    opts: {
      faction: ['landbreaker'],
      male: true
    }
  },
  {
    name: "Xaihi",
    img: "mybini.png",
    opts: {
      faction: ['oso'],
      female: true
    }
  },
  {
    name: "Ember",
    img: "ember.png",
    opts: {
      faction: ['oso'],
      female: true
    }
  },
  {
    name: "Avywenna",
    img: "avywenna.png",
    opts: {
      faction: ['tgcc'],
      female: true
    }
  },
  {
    name: "Angelina",
    img: "angelina.png",
    opts: {
      faction: ['rhodes'],
      female: true
    }
  },
  {
    name: "Chen Qianyu",
    img: "chen.png",
    opts: {
      faction: ['chen'],
      female: true
    }
  },
  {
    name: "Fjall",
    img: "fjall.png",
    opts: {
      faction: ['endfield'],
      male: true
    }
  },
]
