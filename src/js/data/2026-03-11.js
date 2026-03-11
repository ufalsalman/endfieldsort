dataSetVersion = "2026-03-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by faction",
    key: "faction",
    tooltip: "Check this to restrict to operators from certain factions.",
    checked: false,
    sub: [
      { name: "Endfield Industries", key: "endfield" },
      { name: "Rhodes Island", key: "rhodes" },
      { name: "Order of Steel Oath", key: "oso" },
      { name: "Seš'qa", key: "sesqa" },
      { name: "Hongshan Academy of Science", key: "hongshan" },
      { name: "United Workers' Syndicate of Talos II", key: "unw" },
      { name: "Hannabit Circuit", key: "hannabit" },
      { name: "Talos-II General Chamber of Commerce", key: "tgcc" },
      { name: "Cabal of Tranquilitiy", key: "cot" }
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
    name: "Endministrator (Male)",
    img: "endminA.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Endministrator (Female)",
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
    name: "Chen Qianyu",
    img: "chen.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Laevatain",
    img: "laevatain.png",
    opts: {
      faction: ['rhodes'],
      female: true
    }
  },
  {
    name: "Yvonne",
    img: "yvonne.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Gilberta",
    img: "gilberta.png",
    opts: {
      faction: ['rhodes'],
      female: true
    }
  },
  {
    name: "Ardelia",
    img: "ardelia.png",
    opts: {
      faction: ['rhodes'],
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
    name: "Last Rite",
    img: "lastrite.png",
    opts: {
      faction: ['sesqa'],
      female: true
    }
  },
  {
    name: "Lifeng",
    img: "lifeng.png",
    opts: {
      faction: ['hongshan'],
      male: true
    }
  },
  {
    name: "Pogranichnik",
    img: "pogranichnik.png",
    opts: {
      faction: ['rhodes'],
      male: true
    }
  },
  {
    name: "Alesh",
    img: "alesh.png",
    opts: {
      faction: ['unw'],
      male: true
    }
  },
  {
    name: "Arclight",
    img: "arclight.png",
    opts: {
      faction: ['hannabit'],
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
    name: "Da Pan",
    img: "dapan.png",
    opts: {
      faction: ['hongshan'],
      male: true
    }
  },
  {
    name: "Snowshine",
    img: "snowshine.png",
    opts: {
      faction: ['rhodes'],
      female: true
    }
  },
  {
    name: "Wulfgard",
    img: "wulfgard.png",
    opts: {
      faction: ['endfield'],
      male: true
    }
  },
  {
    name: "Xaihi",
    img: "mybini.png",
    opts: {
      faction: ['cot'],
      female: true
    }
  },
  {
    name: "Akekuri",
    img: "akekuri.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Antal",
    img: "antal.png",
    opts: {
      faction: ['endfield'],
      male: true
    }
  },
  {
    name: "Catcher",
    img: "catcher.png",
    opts: {
      faction: ['endfield'],
      male: true
    }
  },
  {
    name: "Estella",
    img: "estella.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Fluorite",
    img: "fluorite.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Tangtang",
    img: "tangtang.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  },
  {
    name: "Rossi",
    img: "rossi.png",
    opts: {
      faction: ['endfield'],
      female: true
    }
  }
]
