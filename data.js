exports.loadData = function (lang) {
  if (!lang) {
    lang = 'en'
  }

  return getDataList(require(`./forme_${lang}`))
}

function getDataList (localizedFormes) {
  let data = [
    {
      'dexNumber': '001', 
      'base': [
        45,
        49,
        49,
        65,
        65,
        45
      ],
	  'type1': "Grass",
	  'type2': "Poison",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"satk"]
	  ],
	  'dt': [1,2,.5,.5,.25,2,.5,1,1,2,2,1,1,1,1,1,1,.5],
	  'evolve': ['lv',16, 2]
    },
    {
      'dexNumber': '002',
      'base': [
        60,
        62,
        63,
        80,
        80,
        60
      ],
	  'type1': "Grass",
	  'type2': "Poison",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"satk"], [1,"sdef"]
	  ],
	  'dt': [1,2,.5,.5,.25,2,.5,1,1,2,2,1,1,1,1,1,1,.5],
	  'evolve': ['lv',32, 3]
    },
    {
      'dexNumber': '003',
      'base': [
        80,
        82,
        83,
        100,
        100,
        80
      ],
      'otherForme': {
        'mega': [
          80,
          100,
          123,
          122,
          120,
          80
        ]
      },
	  'type1': "Grass",
	  'type2': "Poison",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[2,"satk"], [1,"sdef"]
	  ],
	  'dt': [1,2,.5,.5,.25,2,.5,1,1,2,2,1,1,1,1,1,1,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '004',
      'base': [
        39,
        52,
        43,
        60,
        50,
        65
      ],
	  'type1': "Fire",
	  'type2': "None",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,.5,2,1,.5,.5,1,1,2,1,1,.5,2,1,1,1,.5,.5],
	  'evolve': ['lv',16, 5]
    },
    {
      'dexNumber': '005',
      'base': [
        58,
        64,
        58,
        80,
        65,
        80
      ],
	  'type1': "Fire",
	  'type2': "None",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"], [1,"satk"]
	  ],
	  'dt': [1,.5,2,1,.5,.5,1,1,2,1,1,.5,2,1,1,1,.5,.5],
	  'evolve': ['lv',36, 6]
    },
    {
      'dexNumber': '006',
      'base': [
        78,
        84,
        78,
        109,
        85,
        100
      ],
      'otherForme': {
        'megaY': [
          78,
          104,
          78,
          159,
          115,
          100
        ],
        'megaX': [
          78,
          130,
          111,
          130,
          85,
          100
        ]
      },
	  'type1': "Fire",
	  'type2': "Flying",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[3,"satk"]
	  ],
	  'dt': [1,.5,2,2,.25,1,.5,1,0,1,1,.25,4,1,1,1,.5,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '007',
      'base': [
        44,
        48,
        65,
        50,
        64,
        43
      ],
	  'type1': "Water",
	  'type2': "None",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"def"]
	  ],
	  'dt': [1,.5,.5,2,2,.5,1,1,1,1,1,1,1,1,1,1,.5,1],
	  'evolve': ['lv',16,8]
    },
    {
      'dexNumber': '008',
      'base': [
        59,
        63,
        80,
        65,
        80,
        58
      ],
	  'type1': "Water",
	  'type2': "None",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"def"],[1,"sdef"]
	  ],
	  'dt': [1,.5,.5,2,2,.5,1,1,1,1,1,1,1,1,1,1,.5,1],
	  'evolve': ['lv',36,9]
    },
    {
      'dexNumber': '009',
      'base': [
        79,
        83,
        100,
        85,
        105,
        78
      ],
      'otherForme': {
        'mega': [
          79,
          103,
          120,
          135,
          115,
          78
        ]
      },
	  'type1': "Water",
	  'type2': "None",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[3,"sdef"]
	  ],
	  'dt': [1,.5,.5,2,2,.5,1,1,1,1,1,1,1,1,1,1,.5,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '010',
      'base': [
        45,
        30,
        35,
        20,
        20,
        45
      ],
	  'type1': "Bug",
	  'type2': "None",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"hp"]
	  ],
	  'dt': [1,2,1,1,.5,1,.5,1,.5,2,1,1,2,1,1,1,1,1],
	  'evolve': ['lv',7,11]
    },
    {
      'dexNumber': '011',
      'base': [
        50,
        20,
        55,
        25,
        25,
        30
      ],
	  'type1': "Bug",
	  'type2': "None",
	  'caprate': 120,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"def"]
	  ],
	  'dt': [1,2,1,1,.5,1,.5,1,.5,2,1,1,2,1,1,1,1,1],
	  'evolve': ['lv',10,12]
    },
    {
      'dexNumber': '012',
      'base': [
        60,
        45,
        50,
        90,
        80,
        70
      ],
	  'type1': "Bug",
	  'type2': "Flying",
	  'caprate': 45,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"satk"], [1,"sdef"]
	  ],
	  'dt': [1,2,1,2,.25,2,.25,1,0,2,1,.5,4,1,1,1,1,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '013',
      'base': [
        40,
        35,
        30,
        20,
        20,
        50
      ],
	  'type1': "Bug",
	  'type2': "Poison",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,2,1,1,.25,1,.25,.5,1,2,2,.5,2,1,1,1,1,.5],
	  'evolve': ['lv',7,14]
    },
    {
      'dexNumber': '014',
      'base': [
        45,
        25,
        50,
        25,
        25,
        35
      ],
	  'type1': "Bug",
	  'type2': "Poison",
	  'caprate': 120,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"def"]
	  ],
	  'dt': [1,2,1,1,.25,1,.25,.5,1,2,2,.5,2,1,1,1,1,.5],
	  'evolve': ['lv',10,15]
    },
    {
      'dexNumber': '015',
      'base': [
        65,
        90,
        40,
        45,
        80,
        75
      ],
      'otherForme': {
        'mega': [
          65,
          150,
          40,
          15,
          80,
          145
        ]
      },
	  'type1': "Bug",
	  'type2': "Poison",
	  'caprate': 45,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"atk"], [1,"sdef"]
	  ],
	  'dt': [1,2,1,1,.25,1,.25,.5,1,2,2,.5,2,1,1,1,1,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '016',
      'base': [
        40,
        45,
        40,
        35,
        35,
        56
      ],
	  'type1': "Normal",
	  'type2': "Flying",
	  'caprate': 255,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,1,1,2,.5,2,1,1,0,1,1,.5,2,0,1,1,1,1],
	  'evolve': ['lv',18,17]
    },
    {
      'dexNumber': '017',
      'base': [
        63,
        60,
        55,
        50,
        50,
        71
      ],
	  'type1': "Normal",
	  'type2': "Flying",
	  'caprate': 120,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[2,"spd"]
	  ],
	  'dt': [1,1,1,2,.5,2,1,1,0,1,1,.5,2,0,1,1,1,1],
	  'evolve': ['lv',36,18]
    },
    {
      'dexNumber': '018',
      'base': [
        83,
        80,
        75,
        70,
        70,
        101
      ],
      'otherForme': {
        'mega': [
          83,
          80,
          80,
          135,
          80,
          121
        ]
      },
	  'type1': "Normal",
	  'type2': "Flying",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[3,"spd"]
	  ],
	  'dt': [1,1,1,2,.5,2,1,1,0,1,1,.5,2,0,1,1,1,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '019',
      'base': [
        30,
        56,
        35,
        25,
        35,
        72
      ],
	  'type1': "Normal",
	  'type2': "None",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,1,1,1,1,1,2,1,1,1,1,1,1,0,1,1,1,1],
	  'evolve': ['lv',20,20]
    },
    {
      'dexNumber': '020',
      'base': [
        55,
        81,
        60,
        50,
        70,
        97
      ],
	  'type1': "Normal",
	  'type2': "None",
	  'caprate': 127,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"spd"]
	  ],
	  'dt': [1,1,1,1,1,1,2,1,1,1,1,1,1,0,1,1,1,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '021',
      'base': [
        40,
        60,
        30,
        31,
        31,
        70
      ],
	  'type1': "Normal",
	  'type2': "Flying",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,1,1,2,.5,2,1,1,0,1,1,.5,2,0,1,1,1,1],
	  'evolve': ['lv',20,22]
    },
    {
      'dexNumber': '022',
      'base': [
        65,
        90,
        65,
        61,
        61,
        100
      ],
	  'type1': "Normal",
	  'type2': "Flying",
	  'caprate': 90,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"spd"]
	  ],
	  'dt': [1,1,1,2,.5,2,1,1,0,1,1,.5,2,0,1,1,1,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '023',
      'base': [
        35,
        60,
        44,
        40,
        54,
        55
      ],
	  'type1': "Poison",
	  'type2': "None",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"atk"]
	  ],
	  'dt': [1,1,1,1,.5,1,.5,.5,2,1,2,.5,1,1,1,1,1,.5],
	  'evolve': ['lv',22,24]
    },
    {
      'dexNumber': '024',
      'base': [
        60,
        85,
        69,
        65,
        79,
        80
      ],
	  'type1': "Poison",
	  'type2': "None",
	  'caprate': 90,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"atk"]
	  ],
	  'dt': [1,1,1,1,.5,1,.5,.5,2,1,2,.5,1,1,1,1,1,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '025',
      'base': [
        35,
        55,
        40,
        50,
        50,
        90
      ],
	  'type1': "Electric",
	  'type2': "None",
	  'caprate': 190,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"spd"]
	  ],
	  'dt': [1,1,1,.5,1,1,1,1,2,.5,1,1,1,1,1,1,.5,1],
	  'evolve': ['stone','thunder',26]
    },
    {
      'dexNumber': '026',
      'base': [
        60,
        90,
        55,
        90,
        80,
        110
      ],
	  'type1': "Electric",
	  'type2': "None",
	  'caprate': 75,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[3,"spd"]
	  ],
	  'dt': [1,1,1,.5,1,1,1,1,2,.5,1,1,1,1,1,1,.5,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '027',
      'base': [
        50,
        75,
        85,
        20,
        30,
        40
      ],
	  'type1': "Ground",
	  'type2': "None",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"def"]
	  ],
	  'dt': [1,1,2,0,2,2,1,.5,1,1,1,1,.5,1,1,1,1,1],
	  'evolve': ['lv',22,28]
    },
    {
      'dexNumber': '028',
      'base': [
        75,
        100,
        110,
        45,
        55,
        65
      ],
	  'type1': "Ground",
	  'type2': "None",
	  'caprate': 90,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"def"]
	  ],
	  'dt': [1,1,2,0,2,2,1,.5,1,1,1,1,.5,1,1,1,1,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '029',
      'base': [
        55,
        47,
        52,
        40,
        40,
        41
      ],
	  'type1': "Poison",
	  'type2': "None",
	  'caprate': 235,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"hp"]
	  ],
	  'dt': [1,1,1,1,.5,1,.5,.5,2,1,2,.5,1,1,1,1,1,.5],
	  'evolve': ['lv',16,30]
    },
    {
      'dexNumber': '030',
      'base': [
        70,
        62,
        67,
        55,
        55,
        56
      ],
	  'type1': "Poison",
	  'type2': "None",
	  'caprate': 120,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[2,"hp"]
	  ],
	  'dt': [1,1,1,1,.5,1,.5,.5,2,1,2,.5,1,1,1,1,1,.5],
	  'evolve': ['stone','moon',31]
    },
    {
      'dexNumber': '031',
      'base': [
        90,
        92,
        87,
        75,
        85,
        76
      ],
	  'type1': "Poison",
	  'type2': "Ground",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[3,"hp"]
	  ],
	  'dt': [1,1,2,0,1,2,.5,.25,2,1,2,.5,.5,1,1,1,1,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '032',
      'base': [
        46,
        57,
        40,
        40,
        40,
        50
      ],
	  'type1': "Poison",
	  'type2': "None",
	  'caprate': 235,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"atk"]
	  ],
	  'dt': [1,1,1,1,.5,1,.5,.5,2,1,2,.5,1,1,1,1,1,.5],
	  'evolve': ['lv',16,33]
    },
    {
      'dexNumber': '033',
      'base': [
        61,
        72,
        57,
        55,
        55,
        65
      ],
	  'type1': "Poison",
	  'type2': "None",
	  'caprate': 120,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[2,"atk"]
	  ],
	  'dt': [1,1,1,1,.5,1,.5,.5,2,1,2,.5,1,1,1,1,1,.5],
	  'evolve': ['stone','moon',34]
    },
    {
      'dexNumber': '034',
      'base': [
        81,
        102,
        77,
        85,
        75,
        85
      ],
	  'type1': "Poison",
	  'type2': "Ground",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[3,"atk"]
	  ],
	  'dt': [1,1,2,0,1,2,.5,.25,2,1,2,.5,.5,1,1,1,1,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '035',
      'base': [
        70,
        45,
        48,
        60,
        65,
        35
      ],
	  'type1': "Fairy",
	  'type2': "None",
	  'caprate': 150,
	  'gt': f,
	  'basehappy': 140,
	  'ev': [
		[2,"hp"]
	  ],
	  'dt': [1,1,1,1,1,1,.5,2,1,1,1,.5,1,1,0,.5,2,1],
	  'evolve': ['stone','moon',36]
    },
    {
      'dexNumber': '036',
      'base': [
        95,
        70,
        73,
        95,
        90,
        60
      ],
	  'type1': "Fairy",
	  'type2': "None",
	  'caprate': 25,
	  'gt': f,
	  'basehappy': 140,
	  'ev': [
		[3,"hp"]
	  ],
	  'dt': [1,1,1,1,1,1,.5,2,1,1,1,.5,1,1,0,.5,2,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '037',
      'base': [
        38,
        41,
        40,
        50,
        65,
        65
      ],
	  'type1': "Fire",
	  'type2': "None",
	  'caprate': 190,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,.5,2,1,.5,.5,1,1,2,1,1,.5,2,1,1,1,.5,.5],
	  'evolve': ['stone','fire',38]
    },
    {
      'dexNumber': '038',
      'base': [
        73,
        76,
        75,
        81,
        100,
        100
      ],
	  'type1': "Fire",
	  'type2': "None",
	  'caprate': 75,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"], [1,"sdef"]
	  ],
	  'dt': [1,.5,2,1,.5,.5,1,1,2,1,1,.5,2,1,1,1,.5,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '039',
      'base': [
        115,
        45,
        20,
        45,
        25,
        20
      ],
	  'type1': "Normal",
	  'type2': "Fairy",
	  'caprate': 170,
	  'gt': f,
	  'basehappy': 70,
	  'ev': [
		[2,"hp"]
	  ],
	  'dt': [1,1,1,1,1,1,1,2,1,1,1,.5,1,0,0,.5,2,1],
	  'evolve': ['stone','moon',40]
    },
    {
      'dexNumber': '040',
      'base': [
        140,
        70,
        45,
        85,
        50,
        45
      ],
	  'type1': "Normal",
	  'type2': "Fairy",
	  'caprate': 50,
	  'gt': f,
	  'basehappy': 70,
	  'ev': [
		[3,"hp"]
	  ],
	  'dt': [1,1,1,1,1,1,1,2,1,1,1,.5,1,0,0,.5,2,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '041',
      'base': [
        40,
        45,
        35,
        30,
        40,
        55
      ],
	  'type1': "Poison",
	  'type2': "Flying",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,1,1,2,.25,2,.25,.5,0,1,2,.25,2,1,1,1,1,.5],
	  'evolve': ['stone','moon',42]
    },
    {
      'dexNumber': '042',
      'base': [
        75,
        80,
        70,
        65,
        75,
        90
      ],
	  'type1': "Poison",
	  'type2': "Flying",
	  'caprate': 90,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"spd"]
	  ],
	  'dt': [1,1,1,2,.25,2,.25,.5,0,1,2,.25,2,1,1,1,1,.5],
	  'evolve': ['happiness',220,169]
    },
    {
      'dexNumber': '043',
      'base': [
        45,
        50,
        55,
        75,
        65,
        30
      ],
	  'type1': "Grass",
	  'type2': "Poison",
	  'caprate': 255,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[1,"satk"]
	  ],
	  'dt': [1,2,.5,.5,.25,2,.5,1,1,2,2,1,1,1,1,1,1,.5],
	  'evolve': ['lv',21,44]
    },
    {
      'dexNumber': '044',
      'base': [
        60,
        65,
        70,
        85,
        75,
        40
      ],
	  'type1': "Grass",
	  'type2': "Poison",
	  'caprate': 120,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[2,"satk"]
	  ],
	  'dt': [1,2,.5,.5,.25,2,.5,1,1,2,2,1,1,1,1,1,1,.5],
	  'evolve': ['multistone',['leaf','sun'],[45,182]]
    },
    {
      'dexNumber': '045',
      'base': [
        75,
        80,
        85,
        110,
        90,
        50
      ],
	  'type1': "Grass",
	  'type2': "Poison",
	  'caprate': 45,
	  'gt': ms,
	  'basehappy': 70,
	  'ev': [
		[3,"satk"]
	  ],
	  'dt': [1,2,.5,.5,.25,2,.5,1,1,2,2,1,1,1,1,1,1,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '046',
      'base': [
        35,
        70,
        55,
        45,
        55,
        25
      ],
	  'type1': "Bug",
	  'type2': "Grass",
	  'caprate': 190,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"atk"]
	  ],
	  'dt': [1,4,.5,.5,.25,2,.5,2,.25,4,1,2,2,1,1,1,1,1],
	  'evolve': ['lv',24,47]
    },
    {
      'dexNumber': '047',
      'base': [
        60,
        95,
        80,
        60,
        80,
        30
      ],
	  'type1': "Bug",
	  'type2': "Grass",
	  'caprate': 75,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"atk"],[1,"def"]
	  ],
	  'dt': [1,4,.5,.5,.25,2,.5,2,.25,4,1,2,2,1,1,1,1,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '048',
      'base': [
        60,
        55,
        50,
        40,
        55,
        45
      ],
	  'type1': "Bug",
	  'type2': "Poison",
	  'caprate': 190,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"sdef"]
	  ],
	  'dt': [1,2,1,1,.25,1,.25,.5,1,2,2,.5,2,1,1,1,1,.5],
	  'evolve': ['lv',31,49]
    },
    {
      'dexNumber': '049',
      'base': [
        70,
        65,
        60,
        90,
        75,
        90
      ],
	  'type1': "Bug",
	  'type2': "Poison",
	  'caprate': 75,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"],[1, "satk"]
	  ],
	  'dt': [1,2,1,1,.25,1,.25,.5,1,2,2,.5,2,1,1,1,1,.5],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '050',
      'base': [
        10,
        55,
        25,
        35,
        45,
        95
      ],
	  'type1': "Ground",
	  'type2': "None",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,1,2,0,2,2,1,.5,1,1,1,1,.5,1,1,1,1,1],
	  'evolve': ['lv',26,51]
    },
    {
      'dexNumber': '051',
      'base': [
        35,
        80,
        50,
        50,
        70,
        120
      ],
	  'type1': "Ground",
	  'type2': "None",
	  'caprate': 50,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"spd"]
	  ],
	  'dt': [1,1,2,0,2,2,1,.5,1,1,1,1,.5,1,1,1,1,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '052',
      'base': [
        40,
        45,
        35,
        40,
        40,
        90
      ],
	  'type1': "Normal",
	  'type2': "None",
	  'caprate': 255,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"spd"]
	  ],
	  'dt': [1,1,1,1,1,1,2,1,1,1,1,1,1,0,1,1,1,1],
	  'evolve': ['lv',28,53]
    },
    {
      'dexNumber': '053',
      'base': [
        65,
        70,
        60,
        65,
        65,
        115
      ],
	  'type1': "Normal",
	  'type2': "None",
	  'caprate': 90,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"spd"]
	  ],
	  'dt': [1,1,1,1,1,1,2,1,1,1,1,1,1,0,1,1,1,1],
	  'evolve': ['na',0,0]
    },
    {
      'dexNumber': '054',
      'base': [
        50,
        52,
        48,
        65,
        50,
        55
      ],
	  'type1': "Water",
	  'type2': "None",
	  'caprate': 190,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[1,"satk"]
	  ],
	  'dt': [1,.5,.5,2,2,.5,1,1,1,1,1,1,1,1,1,1,.5,1],
	  'evolve': ['lv',33,55]
    },
    {
      'dexNumber': '055',
      'base': [
        80,
        82,
        78,
        95,
        80,
        85
      ],
	  'type1': "Water",
	  'type2': "None",
	  'caprate': 75,
	  'gt': mf,
	  'basehappy': 70,
	  'ev': [
		[2,"satk"]
	  ],
	  'dt': [1,.5,.5,2,2,.5,1,1,1,1,1,1,1,1,1,1,.5,1],
	  'evolve': ['na',0,0]
    }/*,
    {
      'dexNumber': '056',
      'base': [
        40,
        80,
        35,
        35,
        45,
        70
      ]
    },
    {
      'dexNumber': '057',
      'base': [
        65,
        105,
        60,
        60,
        70,
        95
      ]
    },
    {
      'dexNumber': '058',
      'base': [
        55,
        70,
        45,
        70,
        50,
        60
      ]
    },
    {
      'dexNumber': '059',
      'base': [
        90,
        110,
        80,
        100,
        80,
        95
      ]
    },
    {
      'dexNumber': '060',
      'base': [
        40,
        50,
        40,
        40,
        40,
        90
      ]
    },
    {
      'dexNumber': '061',
      'base': [
        65,
        65,
        65,
        50,
        50,
        90
      ]
    },
    {
      'dexNumber': '062',
      'base': [
        90,
        95,
        95,
        70,
        90,
        70
      ]
    },
    {
      'dexNumber': '063',
      'base': [
        25,
        20,
        15,
        105,
        55,
        90
      ]
    },
    {
      'dexNumber': '064',
      'base': [
        40,
        35,
        30,
        120,
        70,
        105
      ]
    },
    {
      'dexNumber': '065',
      'base': [
        55,
        50,
        45,
        135,
        95,
        120
      ],
      'otherForme': {
        'mega': [
          55,
          50,
          65,
          175,
          95,
          150
        ]
      }
    },
    {
      'dexNumber': '066',
      'base': [
        70,
        80,
        50,
        35,
        35,
        35
      ]
    },
    {
      'dexNumber': '067',
      'base': [
        80,
        100,
        70,
        50,
        60,
        45
      ]
    },
    {
      'dexNumber': '068',
      'base': [
        90,
        130,
        80,
        65,
        85,
        55
      ]
    },
    {
      'dexNumber': '069',
      'base': [
        50,
        75,
        35,
        70,
        30,
        40
      ]
    },
    {
      'dexNumber': '070',
      'base': [
        65,
        90,
        50,
        85,
        45,
        55
      ]
    },
    {
      'dexNumber': '071',
      'base': [
        80,
        105,
        65,
        100,
        70,
        70
      ]
    },
    {
      'dexNumber': '072',
      'base': [
        40,
        40,
        35,
        50,
        100,
        70
      ]
    },
    {
      'dexNumber': '073',
      'base': [
        80,
        70,
        65,
        80,
        120,
        100
      ]
    },
    {
      'dexNumber': '074',
      'base': [
        40,
        80,
        100,
        30,
        30,
        20
      ]
    },
    {
      'dexNumber': '075',
      'base': [
        55,
        95,
        115,
        45,
        45,
        35
      ]
    },
    {
      'dexNumber': '076',
      'base': [
        80,
        120,
        130,
        55,
        65,
        45
      ]
    },
    {
      'dexNumber': '077',
      'base': [
        50,
        85,
        55,
        65,
        65,
        90
      ]
    },
    {
      'dexNumber': '078',
      'base': [
        65,
        100,
        70,
        80,
        80,
        105
      ]
    },
    {
      'dexNumber': '079',
      'base': [
        90,
        65,
        65,
        40,
        40,
        15
      ]
    },
    {
      'dexNumber': '080',
      'base': [
        95,
        75,
        110,
        100,
        80,
        30
      ],
      'otherForme': {
        'mega': [
          95,
          75,
          180,
          130,
          80,
          30
        ]
      }
    },
    {
      'dexNumber': '081',
      'base': [
        25,
        35,
        70,
        95,
        55,
        45
      ]
    },
    {
      'dexNumber': '082',
      'base': [
        50,
        60,
        95,
        120,
        70,
        70
      ]
    },
    {
      'dexNumber': '083',
      'base': [
        52,
        65,
        55,
        58,
        62,
        60
      ]
    },
    {
      'dexNumber': '084',
      'base': [
        35,
        85,
        45,
        35,
        35,
        75
      ]
    },
    {
      'dexNumber': '085',
      'base': [
        60,
        110,
        70,
        60,
        60,
        100
      ]
    },
    {
      'dexNumber': '086',
      'base': [
        65,
        45,
        55,
        45,
        70,
        45
      ]
    },
    {
      'dexNumber': '087',
      'base': [
        90,
        70,
        80,
        70,
        95,
        70
      ]
    },
    {
      'dexNumber': '088',
      'base': [
        80,
        80,
        50,
        40,
        50,
        25
      ]
    },
    {
      'dexNumber': '089',
      'base': [
        105,
        105,
        75,
        65,
        100,
        50
      ]
    },
    {
      'dexNumber': '090',
      'base': [
        30,
        65,
        100,
        45,
        25,
        40
      ]
    },
    {
      'dexNumber': '091',
      'base': [
        50,
        95,
        180,
        85,
        45,
        70
      ]
    },
    {
      'dexNumber': '092',
      'base': [
        30,
        35,
        30,
        100,
        35,
        80
      ]
    },
    {
      'dexNumber': '093',
      'base': [
        45,
        50,
        45,
        115,
        55,
        95
      ]
    },
    {
      'dexNumber': '094',
      'base': [
        60,
        65,
        60,
        130,
        75,
        110
      ],
      'otherForme': {
        'mega': [
          60,
          65,
          80,
          170,
          95,
          130
        ]
      }
    },
    {
      'dexNumber': '095',
      'base': [
        35,
        45,
        160,
        30,
        45,
        70
      ]
    },
    {
      'dexNumber': '096',
      'base': [
        60,
        48,
        45,
        43,
        90,
        42
      ]
    },
    {
      'dexNumber': '097',
      'base': [
        85,
        73,
        70,
        73,
        115,
        67
      ]
    },
    {
      'dexNumber': '098',
      'base': [
        30,
        105,
        90,
        25,
        25,
        50
      ]
    },
    {
      'dexNumber': '099',
      'base': [
        55,
        130,
        115,
        50,
        50,
        75
      ]
    },
    {
      'dexNumber': '100',
      'base': [
        40,
        30,
        50,
        55,
        55,
        100
      ]
    },
    {
      'dexNumber': '101',
      'base': [
        60,
        50,
        70,
        80,
        80,
        140
      ]
    },
    {
      'dexNumber': '102',
      'base': [
        60,
        40,
        80,
        60,
        45,
        40
      ]
    },
    {
      'dexNumber': '103',
      'base': [
        95,
        95,
        85,
        125,
        65,
        55
      ]
    },
    {
      'dexNumber': '104',
      'base': [
        50,
        50,
        95,
        40,
        50,
        35
      ]
    },
    {
      'dexNumber': '105',
      'base': [
        60,
        80,
        110,
        50,
        80,
        45
      ]
    },
    {
      'dexNumber': '106',
      'base': [
        50,
        120,
        53,
        35,
        110,
        87
      ]
    },
    {
      'dexNumber': '107',
      'base': [
        50,
        105,
        79,
        35,
        110,
        76
      ]
    },
    {
      'dexNumber': '108',
      'base': [
        90,
        55,
        75,
        60,
        75,
        30
      ]
    },
    {
      'dexNumber': '109',
      'base': [
        40,
        65,
        95,
        60,
        45,
        35
      ]
    },
    {
      'dexNumber': '110',
      'base': [
        65,
        90,
        120,
        85,
        70,
        60
      ]
    },
    {
      'dexNumber': '111',
      'base': [
        80,
        85,
        95,
        30,
        30,
        25
      ]
    },
    {
      'dexNumber': '112',
      'base': [
        105,
        130,
        120,
        45,
        45,
        40
      ]
    },
    {
      'dexNumber': '113',
      'base': [
        250,
        5,
        5,
        35,
        105,
        50
      ]
    },
    {
      'dexNumber': '114',
      'base': [
        65,
        55,
        115,
        100,
        40,
        60
      ]
    },
    {
      'dexNumber': '115',
      'base': [
        105,
        95,
        80,
        40,
        80,
        90
      ],
      'otherForme': {
        'mega': [
          105,
          125,
          100,
          60,
          100,
          100
        ]
      }
    },
    {
      'dexNumber': '116',
      'base': [
        30,
        40,
        70,
        70,
        25,
        60
      ]
    },
    {
      'dexNumber': '117',
      'base': [
        55,
        65,
        95,
        95,
        45,
        85
      ]
    },
    {
      'dexNumber': '118',
      'base': [
        45,
        67,
        60,
        35,
        50,
        63
      ]
    },
    {
      'dexNumber': '119',
      'base': [
        80,
        92,
        65,
        65,
        80,
        68
      ]
    },
    {
      'dexNumber': '120',
      'base': [
        30,
        45,
        55,
        70,
        55,
        85
      ]
    },
    {
      'dexNumber': '121',
      'base': [
        60,
        75,
        85,
        100,
        85,
        115
      ]
    },
    {
      'dexNumber': '122',
      'base': [
        40,
        45,
        65,
        100,
        120,
        90
      ]
    },
    {
      'dexNumber': '123',
      'base': [
        70,
        110,
        80,
        55,
        80,
        105
      ]
    },
    {
      'dexNumber': '124',
      'base': [
        65,
        50,
        35,
        115,
        95,
        95
      ]
    },
    {
      'dexNumber': '125',
      'base': [
        65,
        83,
        57,
        95,
        85,
        105
      ]
    },
    {
      'dexNumber': '126',
      'base': [
        65,
        95,
        57,
        100,
        85,
        93
      ]
    },
    {
      'dexNumber': '127',
      'base': [
        65,
        125,
        100,
        55,
        70,
        85
      ],
      'otherForme': {
        'mega': [
          65,
          155,
          120,
          65,
          90,
          105
        ]
      }
    },
    {
      'dexNumber': '128',
      'base': [
        75,
        100,
        95,
        40,
        70,
        110
      ]
    },
    {
      'dexNumber': '129',
      'base': [
        20,
        10,
        55,
        15,
        20,
        80
      ]
    },
    {
      'dexNumber': '130',
      'base': [
        95,
        125,
        79,
        60,
        100,
        81
      ],
      'otherForme': {
        'mega': [
          95,
          155,
          109,
          70,
          130,
          81
        ]
      }
    },
    {
      'dexNumber': '131',
      'base': [
        130,
        85,
        80,
        85,
        95,
        60
      ]
    },
    {
      'dexNumber': '132',
      'base': [
        48,
        48,
        48,
        48,
        48,
        48
      ]
    },
    {
      'dexNumber': '133',
      'base': [
        55,
        55,
        50,
        45,
        65,
        55
      ]
    },
    {
      'dexNumber': '134',
      'base': [
        130,
        65,
        60,
        110,
        95,
        65
      ]
    },
    {
      'dexNumber': '135',
      'base': [
        65,
        65,
        60,
        110,
        95,
        130
      ]
    },
    {
      'dexNumber': '136',
      'base': [
        65,
        130,
        60,
        95,
        110,
        65
      ]
    },
    {
      'dexNumber': '137',
      'base': [
        65,
        60,
        70,
        85,
        75,
        40
      ]
    },
    {
      'dexNumber': '138',
      'base': [
        35,
        40,
        100,
        90,
        55,
        35
      ]
    },
    {
      'dexNumber': '139',
      'base': [
        70,
        60,
        125,
        115,
        70,
        55
      ]
    },
    {
      'dexNumber': '140',
      'base': [
        30,
        80,
        90,
        55,
        45,
        55
      ]
    },
    {
      'dexNumber': '141',
      'base': [
        60,
        115,
        105,
        65,
        70,
        80
      ]
    },
    {
      'dexNumber': '142',
      'base': [
        80,
        105,
        65,
        60,
        75,
        130
      ],
      'otherForme': {
        'mega': [
          80,
          135,
          85,
          70,
          95,
          150
        ]
      }
    },
    {
      'dexNumber': '143',
      'base': [
        160,
        110,
        65,
        65,
        110,
        30
      ]
    },
    {
      'dexNumber': '144',
      'base': [
        90,
        85,
        100,
        95,
        125,
        85
      ]
    },
    {
      'dexNumber': '145',
      'base': [
        90,
        90,
        85,
        125,
        90,
        100
      ]
    },
    {
      'dexNumber': '146',
      'base': [
        90,
        100,
        90,
        125,
        85,
        90
      ]
    },
    {
      'dexNumber': '147',
      'base': [
        41,
        64,
        45,
        50,
        50,
        50
      ]
    },
    {
      'dexNumber': '148',
      'base': [
        61,
        84,
        65,
        70,
        70,
        70
      ]
    },
    {
      'dexNumber': '149',
      'base': [
        91,
        134,
        95,
        100,
        100,
        80
      ]
    },
    {
      'dexNumber': '150',
      'base': [
        106,
        110,
        90,
        154,
        90,
        130
      ],
      'otherForme': {
        'megaX': [
          106,
          190,
          100,
          154,
          100,
          130
        ],
        'megaY': [
          106,
          150,
          70,
          194,
          120,
          140
        ]
      }
    },
    {
      'dexNumber': '151',
      'base': [
        100,
        100,
        100,
        100,
        100,
        100
      ]
    },
    {
      'dexNumber': '152',
      'base': [
        45,
        49,
        65,
        49,
        65,
        45
      ]
    },
    {
      'dexNumber': '153',
      'base': [
        60,
        62,
        80,
        63,
        80,
        60
      ]
    },
    {
      'dexNumber': '154',
      'base': [
        80,
        82,
        100,
        83,
        100,
        80
      ]
    },
    {
      'dexNumber': '155',
      'base': [
        39,
        52,
        43,
        60,
        50,
        65
      ]
    },
    {
      'dexNumber': '156',
      'base': [
        58,
        64,
        58,
        80,
        65,
        80
      ]
    },
    {
      'dexNumber': '157',
      'base': [
        78,
        84,
        78,
        109,
        85,
        100
      ]
    },
    {
      'dexNumber': '158',
      'base': [
        50,
        65,
        64,
        44,
        48,
        43
      ]
    },
    {
      'dexNumber': '159',
      'base': [
        65,
        80,
        80,
        59,
        63,
        58
      ]
    },
    {
      'dexNumber': '160',
      'base': [
        85,
        105,
        100,
        79,
        83,
        78
      ]
    },
    {
      'dexNumber': '161',
      'base': [
        35,
        46,
        34,
        35,
        45,
        20
      ]
    },
    {
      'dexNumber': '162',
      'base': [
        85,
        76,
        64,
        45,
        55,
        90
      ]
    },
    {
      'dexNumber': '163',
      'base': [
        60,
        30,
        30,
        36,
        56,
        50
      ]
    },
    {
      'dexNumber': '164',
      'base': [
        100,
        50,
        50,
        76,
        96,
        70
      ]
    },
    {
      'dexNumber': '165',
      'base': [
        40,
        20,
        30,
        40,
        80,
        55
      ]
    },
    {
      'dexNumber': '166',
      'base': [
        55,
        35,
        50,
        55,
        110,
        85
      ]
    },
    {
      'dexNumber': '167',
      'base': [
        40,
        60,
        40,
        40,
        40,
        30
      ]
    },
    {
      'dexNumber': '168',
      'base': [
        70,
        90,
        70,
        60,
        60,
        40
      ]
    },
    {
      'dexNumber': '169',
      'base': [
        85,
        90,
        80,
        70,
        80,
        130
      ]
    },
    {
      'dexNumber': '170',
      'base': [
        75,
        38,
        38,
        56,
        56,
        67
      ]
    },
    {
      'dexNumber': '171',
      'base': [
        125,
        58,
        58,
        76,
        76,
        67
      ]
    },
    {
      'dexNumber': '172',
      'base': [
        20,
        40,
        15,
        35,
        35,
        60
      ]
    },
    {
      'dexNumber': '173',
      'base': [
        50,
        25,
        28,
        45,
        55,
        15
      ]
    },
    {
      'dexNumber': '174',
      'base': [
        90,
        30,
        15,
        40,
        20,
        15
      ]
    },
    {
      'dexNumber': '175',
      'base': [
        35,
        20,
        65,
        40,
        65,
        20
      ]
    },
    {
      'dexNumber': '176',
      'base': [
        55,
        40,
        85,
        80,
        105,
        40
      ]
    },
    {
      'dexNumber': '177',
      'base': [
        40,
        50,
        45,
        70,
        45,
        70
      ]
    },
    {
      'dexNumber': '178',
      'base': [
        65,
        75,
        70,
        95,
        70,
        95
      ]
    },
    {
      'dexNumber': '179',
      'base': [
        55,
        40,
        40,
        65,
        45,
        35
      ]
    },
    {
      'dexNumber': '180',
      'base': [
        70,
        55,
        55,
        80,
        60,
        45
      ]
    },
    {
      'dexNumber': '181',
      'base': [
        90,
        75,
        85,
        115,
        90,
        55
      ],
      'otherForme': {
        'mega': [
          90,
          95,
          105,
          165,
          110,
          45
        ]
      }
    },
    {
      'dexNumber': '182',
      'base': [
        75,
        80,
        95,
        90,
        100,
        50
      ]
    },
    {
      'dexNumber': '183',
      'base': [
        70,
        20,
        50,
        20,
        50,
        40
      ]
    },
    {
      'dexNumber': '184',
      'base': [
        100,
        50,
        80,
        60,
        80,
        50
      ]
    },
    {
      'dexNumber': '185',
      'base': [
        70,
        100,
        115,
        30,
        65,
        30
      ]
    },
    {
      'dexNumber': '186',
      'base': [
        90,
        75,
        75,
        90,
        100,
        70
      ]
    },
    {
      'dexNumber': '187',
      'base': [
        35,
        35,
        40,
        35,
        55,
        50
      ]
    },
    {
      'dexNumber': '188',
      'base': [
        55,
        45,
        50,
        45,
        65,
        80
      ]
    },
    {
      'dexNumber': '189',
      'base': [
        75,
        55,
        70,
        55,
        95,
        110
      ]
    },
    {
      'dexNumber': '190',
      'base': [
        55,
        70,
        55,
        40,
        55,
        85
      ]
    },
    {
      'dexNumber': '191',
      'base': [
        30,
        30,
        30,
        30,
        30,
        30
      ]
    },
    {
      'dexNumber': '192',
      'base': [
        75,
        75,
        55,
        105,
        85,
        30
      ]
    },
    {
      'dexNumber': '193',
      'base': [
        65,
        65,
        45,
        75,
        45,
        95
      ]
    },
    {
      'dexNumber': '194',
      'base': [
        55,
        45,
        45,
        25,
        25,
        15
      ]
    },
    {
      'dexNumber': '195',
      'base': [
        95,
        85,
        85,
        65,
        65,
        35
      ]
    },
    {
      'dexNumber': '196',
      'base': [
        65,
        65,
        60,
        130,
        95,
        110
      ]
    },
    {
      'dexNumber': '197',
      'base': [
        95,
        65,
        110,
        60,
        130,
        65
      ]
    },
    {
      'dexNumber': '198',
      'base': [
        60,
        85,
        42,
        85,
        42,
        91
      ]
    },
    {
      'dexNumber': '199',
      'base': [
        95,
        75,
        80,
        100,
        110,
        30
      ]
    },
    {
      'dexNumber': '200',
      'base': [
        60,
        60,
        60,
        85,
        85,
        85
      ]
    },
    {
      'dexNumber': '201',
      'base': [
        48,
        72,
        48,
        72,
        48,
        48
      ]
    },
    {
      'dexNumber': '202',
      'base': [
        190,
        33,
        58,
        33,
        58,
        33
      ]
    },
    {
      'dexNumber': '203',
      'base': [
        70,
        80,
        65,
        90,
        65,
        85
      ]
    },
    {
      'dexNumber': '204',
      'base': [
        50,
        65,
        90,
        35,
        35,
        15
      ]
    },
    {
      'dexNumber': '205',
      'base': [
        75,
        90,
        140,
        60,
        60,
        40
      ]
    },
    {
      'dexNumber': '206',
      'base': [
        100,
        70,
        70,
        65,
        65,
        45
      ]
    },
    {
      'dexNumber': '207',
      'base': [
        65,
        75,
        105,
        35,
        65,
        85
      ]
    },
    {
      'dexNumber': '208',
      'base': [
        75,
        85,
        200,
        55,
        65,
        30
      ],
      'otherForme': {
        'mega': [
          75,
          125,
          230,
          55,
          95,
          30
        ]
      }
    },
    {
      'dexNumber': '209',
      'base': [
        60,
        80,
        50,
        40,
        40,
        30
      ]
    },
    {
      'dexNumber': '210',
      'base': [
        90,
        120,
        75,
        60,
        60,
        45
      ]
    },
    {
      'dexNumber': '211',
      'base': [
        65,
        95,
        75,
        55,
        55,
        85
      ]
    },
    {
      'dexNumber': '212',
      'base': [
        70,
        130,
        100,
        55,
        80,
        65
      ],
      'otherForme': {
        'mega': [
          70,
          150,
          140,
          65,
          100,
          75
        ]
      }
    },
    {
      'dexNumber': '213',
      'base': [
        20,
        10,
        230,
        10,
        230,
        5
      ]
    },
    {
      'dexNumber': '214',
      'base': [
        80,
        125,
        75,
        40,
        95,
        85
      ],
      'otherForme': {
        'mega': [
          80,
          185,
          115,
          40,
          105,
          75
        ]
      }
    },
    {
      'dexNumber': '215',
      'base': [
        55,
        95,
        55,
        35,
        75,
        115
      ]
    },
    {
      'dexNumber': '216',
      'base': [
        60,
        80,
        50,
        50,
        50,
        40
      ]
    },
    {
      'dexNumber': '217',
      'base': [
        90,
        130,
        75,
        75,
        75,
        55
      ]
    },
    {
      'dexNumber': '218',
      'base': [
        40,
        40,
        40,
        70,
        40,
        20
      ]
    },
    {
      'dexNumber': '219',
      'base': [
        50,
        50,
        120,
        80,
        80,
        30
      ]
    },
    {
      'dexNumber': '220',
      'base': [
        50,
        50,
        40,
        30,
        30,
        50
      ]
    },
    {
      'dexNumber': '221',
      'base': [
        100,
        100,
        80,
        60,
        60,
        50
      ]
    },
    {
      'dexNumber': '222',
      'base': [
        55,
        55,
        85,
        65,
        85,
        35
      ]
    },
    {
      'dexNumber': '223',
      'base': [
        35,
        65,
        35,
        65,
        35,
        65
      ]
    },
    {
      'dexNumber': '224',
      'base': [
        75,
        105,
        75,
        105,
        75,
        45
      ]
    },
    {
      'dexNumber': '225',
      'base': [
        45,
        55,
        45,
        65,
        45,
        75
      ]
    },
    {
      'dexNumber': '226',
      'base': [
        65,
        40,
        70,
        80,
        140,
        70
      ]
    },
    {
      'dexNumber': '227',
      'base': [
        65,
        80,
        140,
        40,
        70,
        70
      ]
    },
    {
      'dexNumber': '228',
      'base': [
        45,
        60,
        30,
        80,
        50,
        65
      ]
    },
    {
      'dexNumber': '229',
      'base': [
        75,
        90,
        50,
        110,
        80,
        95
      ],
      'otherForme': {
        'mega': [
          75,
          90,
          90,
          140,
          90,
          115
        ]
      }
    },
    {
      'dexNumber': '230',
      'base': [
        75,
        95,
        95,
        95,
        95,
        85
      ]
    },
    {
      'dexNumber': '231',
      'base': [
        90,
        60,
        60,
        40,
        40,
        40
      ]
    },
    {
      'dexNumber': '232',
      'base': [
        90,
        120,
        120,
        60,
        60,
        50
      ]
    },
    {
      'dexNumber': '233',
      'base': [
        85,
        80,
        90,
        105,
        95,
        60
      ]
    },
    {
      'dexNumber': '234',
      'base': [
        73,
        95,
        62,
        85,
        65,
        85
      ]
    },
    {
      'dexNumber': '235',
      'base': [
        55,
        20,
        35,
        20,
        45,
        75
      ]
    },
    {
      'dexNumber': '236',
      'base': [
        35,
        35,
        35,
        35,
        35,
        35
      ]
    },
    {
      'dexNumber': '237',
      'base': [
        50,
        95,
        95,
        35,
        110,
        70
      ]
    },
    {
      'dexNumber': '238',
      'base': [
        45,
        30,
        15,
        85,
        65,
        65
      ]
    },
    {
      'dexNumber': '239',
      'base': [
        45,
        63,
        37,
        65,
        55,
        95
      ]
    },
    {
      'dexNumber': '240',
      'base': [
        45,
        75,
        37,
        70,
        55,
        83
      ]
    },
    {
      'dexNumber': '241',
      'base': [
        95,
        80,
        105,
        40,
        70,
        100
      ]
    },
    {
      'dexNumber': '242',
      'base': [
        255,
        10,
        10,
        75,
        135,
        55
      ]
    },
    {
      'dexNumber': '243',
      'base': [
        90,
        85,
        75,
        115,
        100,
        115
      ]
    },
    {
      'dexNumber': '244',
      'base': [
        115,
        115,
        85,
        90,
        75,
        100
      ]
    },
    {
      'dexNumber': '245',
      'base': [
        100,
        75,
        115,
        90,
        115,
        85
      ]
    },
    {
      'dexNumber': '246',
      'base': [
        50,
        64,
        50,
        45,
        50,
        41
      ]
    },
    {
      'dexNumber': '247',
      'base': [
        70,
        84,
        70,
        65,
        70,
        51
      ]
    },
    {
      'dexNumber': '248',
      'base': [
        100,
        134,
        110,
        95,
        100,
        61
      ],
      'otherForme': {
        'mega': [
          100,
          164,
          150,
          95,
          120,
          71
        ]
      }
    },
    {
      'dexNumber': '249',
      'base': [
        106,
        90,
        130,
        90,
        154,
        110
      ]
    },
    {
      'dexNumber': '250',
      'base': [
        106,
        130,
        90,
        110,
        154,
        90
      ]
    },
    {
      'dexNumber': '251',
      'base': [
        100,
        100,
        100,
        100,
        100,
        100
      ]
    },
    {
      'dexNumber': '252',
      'base': [
        40,
        45,
        35,
        65,
        55,
        70
      ]
    },
    {
      'dexNumber': '253',
      'base': [
        50,
        65,
        45,
        85,
        65,
        95
      ]
    },
    {
      'dexNumber': '254',
      'base': [
        70,
        85,
        65,
        105,
        85,
        120
      ],
      'otherForme': {
        'mega': [
          70,
          110,
          75,
          145,
          85,
          145
        ]
      }
    },
    {
      'dexNumber': '255',
      'base': [
        45,
        60,
        40,
        70,
        50,
        45
      ]
    },
    {
      'dexNumber': '256',
      'base': [
        60,
        85,
        60,
        85,
        60,
        55
      ]
    },
    {
      'dexNumber': '257',
      'base': [
        80,
        120,
        70,
        110,
        70,
        80
      ],
      'otherForme': {
        'mega': [
          80,
          160,
          80,
          130,
          80,
          100
        ]
      }
    },
    {
      'dexNumber': '258',
      'base': [
        50,
        70,
        50,
        50,
        50,
        40
      ]
    },
    {
      'dexNumber': '259',
      'base': [
        70,
        85,
        70,
        60,
        70,
        50
      ]
    },
    {
      'dexNumber': '260',
      'base': [
        100,
        110,
        90,
        85,
        90,
        60
      ],
      'otherForme': {
        'mega': [
          100,
          150,
          110,
          95,
          110,
          70
        ]
      }
    },
    {
      'dexNumber': '261',
      'base': [
        35,
        55,
        35,
        30,
        30,
        35
      ]
    },
    {
      'dexNumber': '262',
      'base': [
        70,
        90,
        70,
        60,
        60,
        70
      ]
    },
    {
      'dexNumber': '263',
      'base': [
        38,
        30,
        41,
        30,
        41,
        60
      ]
    },
    {
      'dexNumber': '264',
      'base': [
        78,
        70,
        61,
        50,
        61,
        100
      ]
    },
    {
      'dexNumber': '265',
      'base': [
        45,
        45,
        35,
        20,
        30,
        20
      ]
    },
    {
      'dexNumber': '266',
      'base': [
        50,
        35,
        55,
        25,
        25,
        15
      ]
    },
    {
      'dexNumber': '267',
      'base': [
        60,
        70,
        50,
        100,
        50,
        65
      ]
    },
    {
      'dexNumber': '268',
      'base': [
        50,
        35,
        55,
        25,
        25,
        15
      ]
    },
    {
      'dexNumber': '269',
      'base': [
        60,
        50,
        70,
        50,
        90,
        65
      ]
    },
    {
      'dexNumber': '270',
      'base': [
        40,
        30,
        30,
        40,
        50,
        30
      ]
    },
    {
      'dexNumber': '271',
      'base': [
        60,
        50,
        50,
        60,
        70,
        50
      ]
    },
    {
      'dexNumber': '272',
      'base': [
        80,
        70,
        70,
        90,
        100,
        70
      ]
    },
    {
      'dexNumber': '273',
      'base': [
        40,
        40,
        50,
        30,
        30,
        30
      ]
    },
    {
      'dexNumber': '274',
      'base': [
        70,
        70,
        40,
        60,
        40,
        60
      ]
    },
    {
      'dexNumber': '275',
      'base': [
        90,
        100,
        60,
        90,
        60,
        80
      ]
    },
    {
      'dexNumber': '276',
      'base': [
        40,
        55,
        30,
        30,
        30,
        85
      ]
    },
    {
      'dexNumber': '277',
      'base': [
        60,
        85,
        60,
        50,
        50,
        125
      ]
    },
    {
      'dexNumber': '278',
      'base': [
        40,
        30,
        30,
        55,
        30,
        85
      ]
    },
    {
      'dexNumber': '279',
      'base': [
        60,
        50,
        100,
        85,
        70,
        65
      ]
    },
    {
      'dexNumber': '280',
      'base': [
        28,
        25,
        25,
        45,
        35,
        40
      ]
    },
    {
      'dexNumber': '281',
      'base': [
        38,
        35,
        35,
        65,
        55,
        50
      ]
    },
    {
      'dexNumber': '282',
      'base': [
        68,
        65,
        65,
        125,
        115,
        80
      ],
      'otherForme': {
        'mega': [
          68,
          85,
          65,
          165,
          135,
          100
        ]
      }
    },
    {
      'dexNumber': '283',
      'base': [
        40,
        30,
        32,
        50,
        52,
        65
      ]
    },
    {
      'dexNumber': '284',
      'base': [
        70,
        60,
        62,
        80,
        82,
        60
      ]
    },
    {
      'dexNumber': '285',
      'base': [
        60,
        40,
        60,
        40,
        60,
        35
      ]
    },
    {
      'dexNumber': '286',
      'base': [
        60,
        130,
        80,
        60,
        60,
        70
      ]
    },
    {
      'dexNumber': '287',
      'base': [
        60,
        60,
        60,
        35,
        35,
        30
      ]
    },
    {
      'dexNumber': '288',
      'base': [
        80,
        80,
        80,
        55,
        55,
        90
      ]
    },
    {
      'dexNumber': '289',
      'base': [
        150,
        160,
        100,
        95,
        65,
        100
      ]
    },
    {
      'dexNumber': '290',
      'base': [
        31,
        45,
        90,
        30,
        30,
        40
      ]
    },
    {
      'dexNumber': '291',
      'base': [
        61,
        90,
        45,
        50,
        50,
        160
      ]
    },
    {
      'dexNumber': '292',
      'base': [
        1,
        90,
        45,
        30,
        30,
        40
      ]
    },
    {
      'dexNumber': '293',
      'base': [
        64,
        51,
        23,
        51,
        23,
        28
      ]
    },
    {
      'dexNumber': '294',
      'base': [
        84,
        71,
        43,
        71,
        43,
        48
      ]
    },
    {
      'dexNumber': '295',
      'base': [
        104,
        91,
        63,
        91,
        73,
        68
      ]
    },
    {
      'dexNumber': '296',
      'base': [
        72,
        60,
        30,
        20,
        30,
        25
      ]
    },
    {
      'dexNumber': '297',
      'base': [
        144,
        120,
        60,
        40,
        60,
        50
      ]
    },
    {
      'dexNumber': '298',
      'base': [
        50,
        20,
        40,
        20,
        40,
        20
      ]
    },
    {
      'dexNumber': '299',
      'base': [
        30,
        45,
        135,
        45,
        90,
        30
      ]
    },
    {
      'dexNumber': '300',
      'base': [
        50,
        45,
        45,
        35,
        35,
        50
      ]
    },
    {
      'dexNumber': '301',
      'base': [
        70,
        65,
        65,
        55,
        55,
        70
      ]
    },
    {
      'dexNumber': '302',
      'base': [
        50,
        75,
        75,
        65,
        65,
        50
      ],
      'otherForme': {
        'mega': [
          50,
          85,
          125,
          85,
          115,
          20
        ]
      }
    },
    {
      'dexNumber': '303',
      'base': [
        50,
        85,
        85,
        55,
        55,
        50
      ],
      'otherForme': {
        'mega': [
          50,
          105,
          125,
          55,
          95,
          50
        ]
      }
    },
    {
      'dexNumber': '304',
      'base': [
        50,
        70,
        100,
        40,
        40,
        30
      ]
    },
    {
      'dexNumber': '305',
      'base': [
        60,
        90,
        140,
        50,
        50,
        40
      ]
    },
    {
      'dexNumber': '306',
      'base': [
        70,
        110,
        180,
        60,
        60,
        50
      ],
      'otherForme': {
        'mega': [
          70,
          140,
          230,
          60,
          80,
          50
        ]
      }
    },
    {
      'dexNumber': '307',
      'base': [
        30,
        40,
        55,
        40,
        55,
        60
      ]
    },
    {
      'dexNumber': '308',
      'base': [
        60,
        60,
        75,
        60,
        75,
        80
      ],
      'otherForme': {
        'mega': [
          60,
          100,
          85,
          80,
          85,
          100
        ]
      }
    },
    {
      'dexNumber': '309',
      'base': [
        40,
        45,
        40,
        65,
        40,
        65
      ]
    },
    {
      'dexNumber': '310',
      'base': [
        70,
        75,
        60,
        105,
        60,
        105
      ],
      'otherForme': {
        'mega': [
          70,
          75,
          80,
          135,
          80,
          135
        ]
      }
    },
    {
      'dexNumber': '311',
      'base': [
        60,
        50,
        40,
        85,
        75,
        95
      ]
    },
    {
      'dexNumber': '312',
      'base': [
        60,
        40,
        50,
        75,
        85,
        95
      ]
    },
    {
      'dexNumber': '313',
      'base': [
        65,
        73,
        55,
        47,
        75,
        85
      ]
    },
    {
      'dexNumber': '314',
      'base': [
        65,
        47,
        55,
        73,
        75,
        85
      ]
    },
    {
      'dexNumber': '315',
      'base': [
        50,
        60,
        45,
        100,
        80,
        65
      ]
    },
    {
      'dexNumber': '316',
      'base': [
        70,
        43,
        53,
        43,
        53,
        40
      ]
    },
    {
      'dexNumber': '317',
      'base': [
        100,
        73,
        83,
        73,
        83,
        55
      ]
    },
    {
      'dexNumber': '318',
      'base': [
        45,
        90,
        20,
        65,
        20,
        65
      ]
    },
    {
      'dexNumber': '319',
      'base': [
        70,
        120,
        40,
        95,
        40,
        95
      ],
      'otherForme': {
        'mega': [
          70,
          140,
          70,
          110,
          65,
          105
        ]
      }
    },
    {
      'dexNumber': '320',
      'base': [
        130,
        70,
        35,
        70,
        35,
        60
      ]
    },
    {
      'dexNumber': '321',
      'base': [
        170,
        90,
        45,
        90,
        45,
        60
      ]
    },
    {
      'dexNumber': '322',
      'base': [
        60,
        60,
        40,
        65,
        45,
        35
      ]
    },
    {
      'dexNumber': '323',
      'base': [
        70,
        100,
        70,
        105,
        75,
        40
      ],
      'otherForme': {
        'mega': [
          70,
          120,
          100,
          145,
          105,
          20
        ]
      }
    },
    {
      'dexNumber': '324',
      'base': [
        70,
        85,
        140,
        85,
        70,
        20
      ]
    },
    {
      'dexNumber': '325',
      'base': [
        60,
        25,
        35,
        70,
        80,
        60
      ]
    },
    {
      'dexNumber': '326',
      'base': [
        80,
        45,
        65,
        90,
        110,
        80
      ]
    },
    {
      'dexNumber': '327',
      'base': [
        60,
        60,
        60,
        60,
        60,
        60
      ]
    },
    {
      'dexNumber': '328',
      'base': [
        45,
        100,
        45,
        45,
        45,
        10
      ]
    },
    {
      'dexNumber': '329',
      'base': [
        50,
        70,
        50,
        50,
        50,
        70
      ]
    },
    {
      'dexNumber': '330',
      'base': [
        80,
        100,
        80,
        80,
        80,
        100
      ]
    },
    {
      'dexNumber': '331',
      'base': [
        50,
        85,
        40,
        85,
        40,
        35
      ]
    },
    {
      'dexNumber': '332',
      'base': [
        70,
        115,
        60,
        115,
        60,
        55
      ]
    },
    {
      'dexNumber': '333',
      'base': [
        45,
        40,
        60,
        40,
        75,
        50
      ]
    },
    {
      'dexNumber': '334',
      'base': [
        75,
        70,
        90,
        70,
        105,
        80
      ],
      'otherForme': {
        'mega': [
          75,
          110,
          110,
          110,
          105,
          80
        ]
      }
    },
    {
      'dexNumber': '335',
      'base': [
        73,
        115,
        60,
        60,
        60,
        90
      ]
    },
    {
      'dexNumber': '336',
      'base': [
        73,
        100,
        60,
        100,
        60,
        65
      ]
    },
    {
      'dexNumber': '337',
      'base': [
        70,
        55,
        65,
        95,
        85,
        70
      ]
    },
    {
      'dexNumber': '338',
      'base': [
        70,
        95,
        85,
        55,
        65,
        70
      ]
    },
    {
      'dexNumber': '339',
      'base': [
        50,
        48,
        43,
        46,
        41,
        60
      ]
    },
    {
      'dexNumber': '340',
      'base': [
        110,
        78,
        73,
        76,
        71,
        60
      ]
    },
    {
      'dexNumber': '341',
      'base': [
        43,
        80,
        65,
        50,
        35,
        35
      ]
    },
    {
      'dexNumber': '342',
      'base': [
        63,
        120,
        85,
        90,
        55,
        55
      ]
    },
    {
      'dexNumber': '343',
      'base': [
        40,
        40,
        55,
        40,
        70,
        55
      ]
    },
    {
      'dexNumber': '344',
      'base': [
        60,
        70,
        105,
        70,
        120,
        75
      ]
    },
    {
      'dexNumber': '345',
      'base': [
        66,
        41,
        77,
        61,
        87,
        23
      ]
    },
    {
      'dexNumber': '346',
      'base': [
        86,
        81,
        97,
        81,
        107,
        43
      ]
    },
    {
      'dexNumber': '347',
      'base': [
        45,
        95,
        50,
        40,
        50,
        75
      ]
    },
    {
      'dexNumber': '348',
      'base': [
        75,
        125,
        100,
        70,
        80,
        45
      ]
    },
    {
      'dexNumber': '349',
      'base': [
        20,
        15,
        20,
        10,
        55,
        80
      ]
    },
    {
      'dexNumber': '350',
      'base': [
        95,
        60,
        79,
        100,
        125,
        81
      ]
    },
    {
      'dexNumber': '351',
      'base': [
        70,
        70,
        70,
        70,
        70,
        70
      ]
    },
    {
      'dexNumber': '352',
      'base': [
        60,
        90,
        70,
        60,
        120,
        40
      ]
    },
    {
      'dexNumber': '353',
      'base': [
        44,
        75,
        35,
        63,
        33,
        45
      ]
    },
    {
      'dexNumber': '354',
      'base': [
        64,
        115,
        65,
        83,
        63,
        65
      ],
      'otherForme': {
        'mega': [
          64,
          165,
          75,
          93,
          83,
          75
        ]
      }
    },
    {
      'dexNumber': '355',
      'base': [
        20,
        40,
        90,
        30,
        90,
        25
      ]
    },
    {
      'dexNumber': '356',
      'base': [
        40,
        70,
        130,
        60,
        130,
        25
      ]
    },
    {
      'dexNumber': '357',
      'base': [
        99,
        68,
        83,
        72,
        87,
        51
      ]
    },
    {
      'dexNumber': '358',
      'base': [
        65,
        50,
        70,
        95,
        80,
        65
      ]
    },
    {
      'dexNumber': '359',
      'base': [
        65,
        130,
        60,
        75,
        60,
        75
      ],
      'otherForme': {
        'mega': [
          65,
          150,
          60,
          115,
          60,
          115
        ]
      }
    },
    {
      'dexNumber': '360',
      'base': [
        95,
        23,
        48,
        23,
        48,
        23
      ]
    },
    {
      'dexNumber': '361',
      'base': [
        50,
        50,
        50,
        50,
        50,
        50
      ]
    },
    {
      'dexNumber': '362',
      'base': [
        80,
        80,
        80,
        80,
        80,
        80
      ],
      'otherForme': {
        'mega': [
          80,
          120,
          80,
          120,
          80,
          100
        ]
      }
    },
    {
      'dexNumber': '363',
      'base': [
        70,
        40,
        50,
        55,
        50,
        25
      ]
    },
    {
      'dexNumber': '364',
      'base': [
        90,
        60,
        70,
        75,
        70,
        45
      ]
    },
    {
      'dexNumber': '365',
      'base': [
        110,
        80,
        90,
        95,
        90,
        65
      ]
    },
    {
      'dexNumber': '366',
      'base': [
        35,
        64,
        85,
        74,
        55,
        32
      ]
    },
    {
      'dexNumber': '367',
      'base': [
        55,
        104,
        105,
        94,
        75,
        52
      ]
    },
    {
      'dexNumber': '368',
      'base': [
        55,
        84,
        105,
        114,
        75,
        52
      ]
    },
    {
      'dexNumber': '369',
      'base': [
        100,
        90,
        130,
        45,
        65,
        55
      ]
    },
    {
      'dexNumber': '370',
      'base': [
        43,
        30,
        55,
        40,
        65,
        97
      ]
    },
    {
      'dexNumber': '371',
      'base': [
        45,
        75,
        60,
        40,
        30,
        50
      ]
    },
    {
      'dexNumber': '372',
      'base': [
        65,
        95,
        100,
        60,
        50,
        50
      ]
    },
    {
      'dexNumber': '373',
      'base': [
        95,
        135,
        80,
        110,
        80,
        100
      ],
      'otherForme': {
        'mega': [
          95,
          145,
          130,
          120,
          90,
          120
        ]
      }
    },
    {
      'dexNumber': '374',
      'base': [
        40,
        55,
        80,
        35,
        60,
        30
      ]
    },
    {
      'dexNumber': '375',
      'base': [
        60,
        75,
        100,
        55,
        80,
        50
      ]
    },
    {
      'dexNumber': '376',
      'base': [
        80,
        135,
        130,
        95,
        90,
        70
      ],
      'otherForme': {
        'mega': [
          80,
          145,
          150,
          105,
          110,
          110
        ]
      }
    },
    {
      'dexNumber': '377',
      'base': [
        80,
        100,
        200,
        50,
        100,
        50
      ]
    },
    {
      'dexNumber': '378',
      'base': [
        80,
        50,
        100,
        100,
        200,
        50
      ]
    },
    {
      'dexNumber': '379',
      'base': [
        80,
        75,
        150,
        75,
        150,
        50
      ]
    },
    {
      'dexNumber': '380',
      'base': [
        80,
        80,
        90,
        110,
        130,
        110
      ],
      'otherForme': {
        'mega': [
          80,
          100,
          120,
          140,
          150,
          110
        ]
      }
    },
    {
      'dexNumber': '381',
      'base': [
        80,
        90,
        80,
        130,
        110,
        110
      ],
      'otherForme': {
        'mega': [
          80,
          130,
          100,
          160,
          120,
          110
        ]
      }
    },
    {
      'dexNumber': '382',
      'base': [
        100,
        100,
        90,
        150,
        140,
        90
      ],
      'otherForme': {
        'primal': [
          100,
          150,
          90,
          180,
          160,
          90
        ]
      }
    },
    {
      'dexNumber': '383',
      'base': [
        100,
        150,
        140,
        100,
        90,
        90
      ],
      'otherForme': {
        'primal': [
          100,
          180,
          160,
          150,
          90,
          90
        ]
      }
    },
    {
      'dexNumber': '384',
      'base': [
        105,
        150,
        90,
        150,
        90,
        95
      ],
      'otherForme': {
        'mega': [
          105,
          180,
          100,
          180,
          100,
          115
        ]
      }
    },
    {
      'dexNumber': '385',
      'base': [
        100,
        100,
        100,
        100,
        100,
        100
      ]
    },
    {
      'dexNumber': '386',
      'base': [
        50,
        150,
        50,
        150,
        50,
        150
      ],
      'otherForme': {
        'attack': [
          50,
          180,
          20,
          180,
          20,
          150
        ],
        'defense': [
          50,
          70,
          160,
          70,
          160,
          90
        ],
        'speed': [
          50,
          95,
          90,
          95,
          90,
          180
        ]
      }
    },
    {
      'dexNumber': '387',
      'base': [
        55,
        68,
        64,
        45,
        55,
        31
      ]
    },
    {
      'dexNumber': '388',
      'base': [
        75,
        89,
        85,
        55,
        65,
        36
      ]
    },
    {
      'dexNumber': '389',
      'base': [
        95,
        109,
        105,
        75,
        85,
        56
      ]
    },
    {
      'dexNumber': '390',
      'base': [
        44,
        58,
        44,
        58,
        44,
        61
      ]
    },
    {
      'dexNumber': '391',
      'base': [
        64,
        78,
        52,
        78,
        52,
        81
      ]
    },
    {
      'dexNumber': '392',
      'base': [
        76,
        104,
        71,
        104,
        71,
        108
      ]
    },
    {
      'dexNumber': '393',
      'base': [
        53,
        51,
        53,
        61,
        56,
        40
      ]
    },
    {
      'dexNumber': '394',
      'base': [
        64,
        66,
        68,
        81,
        76,
        50
      ]
    },
    {
      'dexNumber': '395',
      'base': [
        84,
        86,
        88,
        111,
        101,
        60
      ]
    },
    {
      'dexNumber': '396',
      'base': [
        40,
        55,
        30,
        30,
        30,
        60
      ]
    },
    {
      'dexNumber': '397',
      'base': [
        55,
        75,
        50,
        40,
        40,
        80
      ]
    },
    {
      'dexNumber': '398',
      'base': [
        85,
        120,
        70,
        50,
        60,
        100
      ]
    },
    {
      'dexNumber': '399',
      'base': [
        59,
        45,
        40,
        35,
        40,
        31
      ]
    },
    {
      'dexNumber': '400',
      'base': [
        79,
        85,
        60,
        55,
        60,
        71
      ]
    },
    {
      'dexNumber': '401',
      'base': [
        37,
        25,
        41,
        25,
        41,
        25
      ]
    },
    {
      'dexNumber': '402',
      'base': [
        77,
        85,
        51,
        55,
        51,
        65
      ]
    },
    {
      'dexNumber': '403',
      'base': [
        45,
        65,
        34,
        40,
        34,
        45
      ]
    },
    {
      'dexNumber': '404',
      'base': [
        60,
        85,
        49,
        60,
        49,
        60
      ]
    },
    {
      'dexNumber': '405',
      'base': [
        80,
        120,
        79,
        95,
        79,
        70
      ]
    },
    {
      'dexNumber': '406',
      'base': [
        40,
        30,
        35,
        50,
        70,
        55
      ]
    },
    {
      'dexNumber': '407',
      'base': [
        60,
        70,
        65,
        125,
        105,
        90
      ]
    },
    {
      'dexNumber': '408',
      'base': [
        67,
        125,
        40,
        30,
        30,
        58
      ]
    },
    {
      'dexNumber': '409',
      'base': [
        97,
        165,
        60,
        65,
        50,
        58
      ]
    },
    {
      'dexNumber': '410',
      'base': [
        30,
        42,
        118,
        42,
        88,
        30
      ]
    },
    {
      'dexNumber': '411',
      'base': [
        60,
        52,
        168,
        47,
        138,
        30
      ]
    },
    {
      'dexNumber': '412',
      'base': [
        40,
        29,
        45,
        29,
        45,
        36
      ]
    },
    {
      'dexNumber': '413',
      'otherForme': {
        'plant': [
          60,
          59,
          85,
          79,
          105,
          36
        ],
        'sandy': [
          60,
          79,
          105,
          59,
          85,
          36
        ],
        'trash': [
          60,
          69,
          95,
          69,
          95,
          36
        ]
      }
    },
    {
      'dexNumber': '414',
      'base': [
        70,
        94,
        50,
        94,
        50,
        66
      ]
    },
    {
      'dexNumber': '415',
      'base': [
        30,
        30,
        42,
        30,
        42,
        70
      ]
    },
    {
      'dexNumber': '416',
      'base': [
        70,
        80,
        102,
        80,
        102,
        40
      ]
    },
    {
      'dexNumber': '417',
      'base': [
        60,
        45,
        70,
        45,
        90,
        95
      ]
    },
    {
      'dexNumber': '418',
      'base': [
        55,
        65,
        35,
        60,
        30,
        85
      ]
    },
    {
      'dexNumber': '419',
      'base': [
        85,
        105,
        55,
        85,
        50,
        115
      ]
    },
    {
      'dexNumber': '420',
      'base': [
        45,
        35,
        45,
        62,
        53,
        35
      ]
    },
    {
      'dexNumber': '421',
      'base': [
        70,
        60,
        70,
        87,
        78,
        85
      ]
    },
    {
      'dexNumber': '422',
      'base': [
        76,
        48,
        48,
        57,
        62,
        34
      ]
    },
    {
      'dexNumber': '423',
      'base': [
        111,
        83,
        68,
        92,
        82,
        39
      ]
    },
    {
      'dexNumber': '424',
      'base': [
        75,
        100,
        66,
        60,
        66,
        115
      ]
    },
    {
      'dexNumber': '425',
      'base': [
        90,
        50,
        34,
        60,
        44,
        70
      ]
    },
    {
      'dexNumber': '426',
      'base': [
        150,
        80,
        44,
        90,
        54,
        80
      ]
    },
    {
      'dexNumber': '427',
      'base': [
        55,
        66,
        44,
        44,
        56,
        85
      ]
    },
    {
      'dexNumber': '428',
      'base': [
        65,
        76,
        84,
        54,
        96,
        105
      ],
      'otherForme': {
        'mega': [
          65,
          136,
          94,
          54,
          96,
          135
        ]
      }
    },
    {
      'dexNumber': '429',
      'base': [
        60,
        60,
        60,
        105,
        105,
        105
      ]
    },
    {
      'dexNumber': '430',
      'base': [
        100,
        125,
        52,
        105,
        52,
        71
      ]
    },
    {
      'dexNumber': '431',
      'base': [
        49,
        55,
        42,
        42,
        37,
        85
      ]
    },
    {
      'dexNumber': '432',
      'base': [
        71,
        82,
        64,
        64,
        59,
        112
      ]
    },
    {
      'dexNumber': '433',
      'base': [
        45,
        30,
        50,
        65,
        50,
        45
      ]
    },
    {
      'dexNumber': '434',
      'base': [
        63,
        63,
        47,
        41,
        41,
        74
      ]
    },
    {
      'dexNumber': '435',
      'base': [
        103,
        93,
        67,
        71,
        61,
        84
      ]
    },
    {
      'dexNumber': '436',
      'base': [
        57,
        24,
        86,
        24,
        86,
        23
      ]
    },
    {
      'dexNumber': '437',
      'base': [
        67,
        89,
        116,
        79,
        116,
        33
      ]
    },
    {
      'dexNumber': '438',
      'base': [
        50,
        80,
        95,
        10,
        45,
        10
      ]
    },
    {
      'dexNumber': '439',
      'base': [
        20,
        25,
        45,
        70,
        90,
        60
      ]
    },
    {
      'dexNumber': '440',
      'base': [
        100,
        5,
        5,
        15,
        65,
        30
      ]
    },
    {
      'dexNumber': '441',
      'base': [
        76,
        65,
        45,
        92,
        42,
        91
      ]
    },
    {
      'dexNumber': '442',
      'base': [
        50,
        92,
        108,
        92,
        108,
        35
      ]
    },
    {
      'dexNumber': '443',
      'base': [
        58,
        70,
        45,
        40,
        45,
        42
      ]
    },
    {
      'dexNumber': '444',
      'base': [
        68,
        90,
        65,
        50,
        55,
        82
      ]
    },
    {
      'dexNumber': '445',
      'base': [
        108,
        130,
        95,
        80,
        85,
        102
      ],
      'otherForme': {
        'mega': [
          108,
          170,
          115,
          120,
          95,
          92
        ]
      }
    },
    {
      'dexNumber': '446',
      'base': [
        135,
        85,
        40,
        40,
        85,
        5
      ]
    },
    {
      'dexNumber': '447',
      'base': [
        40,
        70,
        40,
        35,
        40,
        60
      ]
    },
    {
      'dexNumber': '448',
      'base': [
        70,
        110,
        70,
        115,
        70,
        90
      ],
      'otherForme': {
        'mega': [
          70,
          145,
          88,
          140,
          70,
          112
        ]
      }
    },
    {
      'dexNumber': '449',
      'base': [
        68,
        72,
        78,
        38,
        42,
        32
      ]
    },
    {
      'dexNumber': '450',
      'base': [
        108,
        112,
        118,
        68,
        72,
        47
      ]
    },
    {
      'dexNumber': '451',
      'base': [
        40,
        50,
        90,
        30,
        55,
        65
      ]
    },
    {
      'dexNumber': '452',
      'base': [
        70,
        90,
        110,
        60,
        75,
        95
      ]
    },
    {
      'dexNumber': '453',
      'base': [
        48,
        61,
        40,
        61,
        40,
        50
      ]
    },
    {
      'dexNumber': '454',
      'base': [
        83,
        106,
        65,
        86,
        65,
        85
      ]
    },
    {
      'dexNumber': '455',
      'base': [
        74,
        100,
        72,
        90,
        72,
        46
      ]
    },
    {
      'dexNumber': '456',
      'base': [
        49,
        49,
        56,
        49,
        61,
        66
      ]
    },
    {
      'dexNumber': '457',
      'base': [
        69,
        69,
        76,
        69,
        86,
        91
      ]
    },
    {
      'dexNumber': '458',
      'base': [
        45,
        20,
        50,
        60,
        120,
        50
      ]
    },
    {
      'dexNumber': '459',
      'base': [
        60,
        62,
        50,
        62,
        60,
        40
      ]
    },
    {
      'dexNumber': '460',
      'base': [
        90,
        92,
        75,
        92,
        85,
        60
      ],
      'otherForme': {
        'mega': [
          90,
          132,
          105,
          132,
          105,
          30
        ]
      }
    },
    {
      'dexNumber': '461',
      'base': [
        70,
        120,
        65,
        45,
        85,
        125
      ]
    },
    {
      'dexNumber': '462',
      'base': [
        70,
        70,
        115,
        130,
        90,
        60
      ]
    },
    {
      'dexNumber': '463',
      'base': [
        110,
        85,
        95,
        80,
        95,
        50
      ]
    },
    {
      'dexNumber': '464',
      'base': [
        115,
        140,
        130,
        55,
        55,
        40
      ]
    },
    {
      'dexNumber': '465',
      'base': [
        100,
        100,
        125,
        110,
        50,
        50
      ]
    },
    {
      'dexNumber': '466',
      'base': [
        75,
        123,
        67,
        95,
        85,
        95
      ]
    },
    {
      'dexNumber': '467',
      'base': [
        75,
        95,
        67,
        125,
        95,
        83
      ]
    },
    {
      'dexNumber': '468',
      'base': [
        85,
        50,
        95,
        120,
        115,
        80
      ]
    },
    {
      'dexNumber': '469',
      'base': [
        86,
        76,
        86,
        116,
        56,
        95
      ]
    },
    {
      'dexNumber': '470',
      'base': [
        65,
        110,
        130,
        60,
        65,
        95
      ]
    },
    {
      'dexNumber': '471',
      'base': [
        65,
        60,
        110,
        130,
        95,
        65
      ]
    },
    {
      'dexNumber': '472',
      'base': [
        75,
        95,
        125,
        45,
        75,
        95
      ]
    },
    {
      'dexNumber': '473',
      'base': [
        110,
        130,
        80,
        70,
        60,
        80
      ]
    },
    {
      'dexNumber': '474',
      'base': [
        85,
        80,
        70,
        135,
        75,
        90
      ]
    },
    {
      'dexNumber': '475',
      'base': [
        68,
        125,
        65,
        65,
        115,
        80
      ],
      'otherForme': {
        'mega': [
          68,
          165,
          95,
          65,
          115,
          110
        ]
      }
    },
    {
      'dexNumber': '476',
      'base': [
        60,
        55,
        145,
        75,
        150,
        40
      ]
    },
    {
      'dexNumber': '477',
      'base': [
        45,
        100,
        135,
        65,
        135,
        45
      ]
    },
    {
      'dexNumber': '478',
      'base': [
        70,
        80,
        70,
        80,
        70,
        110
      ]
    },
    {
      'dexNumber': '479',
      'base': [
        50,
        50,
        77,
        95,
        77,
        91
      ],
      'otherForme': {
        'heat': [
          50,
          65,
          107,
          105,
          107,
          86
        ],
        'wash': [
          50,
          65,
          107,
          105,
          107,
          86
        ],
        'frost': [
          50,
          65,
          107,
          105,
          107,
          86
        ],
        'fan': [
          50,
          65,
          107,
          105,
          107,
          86
        ],
        'mow': [
          50,
          65,
          107,
          105,
          107,
          86
        ]
      }
    },
    {
      'dexNumber': '480',
      'base': [
        75,
        75,
        130,
        75,
        130,
        95
      ]
    },
    {
      'dexNumber': '481',
      'base': [
        80,
        105,
        105,
        105,
        105,
        80
      ]
    },
    {
      'dexNumber': '482',
      'base': [
        75,
        125,
        70,
        125,
        70,
        115
      ]
    },
    {
      'dexNumber': '483',
      'base': [
        100,
        120,
        120,
        150,
        100,
        90
      ]
    },
    {
      'dexNumber': '484',
      'base': [
        90,
        120,
        100,
        150,
        120,
        100
      ]
    },
    {
      'dexNumber': '485',
      'base': [
        91,
        90,
        106,
        130,
        106,
        77
      ]
    },
    {
      'dexNumber': '486',
      'base': [
        110,
        160,
        110,
        80,
        110,
        100
      ]
    },
    {
      'dexNumber': '487',
      'otherForme': {
        'altered': [
          150,
          100,
          120,
          100,
          120,
          90
        ],
        'origin': [
          150,
          120,
          100,
          120,
          100,
          90
        ]
      }
    },
    {
      'dexNumber': '488',
      'base': [
        120,
        70,
        120,
        75,
        130,
        85
      ]
    },
    {
      'dexNumber': '489',
      'base': [
        80,
        80,
        80,
        80,
        80,
        80
      ]
    },
    {
      'dexNumber': '490',
      'base': [
        100,
        100,
        100,
        100,
        100,
        100
      ]
    },
    {
      'dexNumber': '491',
      'base': [
        70,
        90,
        90,
        135,
        90,
        125
      ]
    },
    {
      'dexNumber': '492',
      'otherForme': {
        'land': [
          100,
          100,
          100,
          100,
          100,
          100
        ],
        'sky': [
          100,
          103,
          75,
          120,
          75,
          127
        ]
      }
    },
    {
      'dexNumber': '493',
      'base': [
        120,
        120,
        120,
        120,
        120,
        120
      ]
    },
    {
      'dexNumber': '494',
      'base': [
        100,
        100,
        100,
        100,
        100,
        100
      ]
    },
    {
      'dexNumber': '495',
      'base': [
        45,
        45,
        55,
        45,
        55,
        63
      ]
    },
    {
      'dexNumber': '496',
      'base': [
        60,
        60,
        75,
        60,
        75,
        83
      ]
    },
    {
      'dexNumber': '497',
      'base': [
        75,
        75,
        95,
        75,
        95,
        113
      ]
    },
    {
      'dexNumber': '498',
      'base': [
        65,
        63,
        45,
        45,
        45,
        45
      ]
    },
    {
      'dexNumber': '499',
      'base': [
        90,
        93,
        55,
        70,
        55,
        55
      ]
    },
    {
      'dexNumber': '500',
      'base': [
        110,
        123,
        65,
        100,
        65,
        65
      ]
    },
    {
      'dexNumber': '501',
      'base': [
        55,
        55,
        45,
        63,
        45,
        45
      ]
    },
    {
      'dexNumber': '502',
      'base': [
        75,
        75,
        60,
        83,
        60,
        60
      ]
    },
    {
      'dexNumber': '503',
      'base': [
        95,
        100,
        85,
        108,
        70,
        70
      ]
    },
    {
      'dexNumber': '504',
      'base': [
        45,
        55,
        39,
        35,
        39,
        42
      ]
    },
    {
      'dexNumber': '505',
      'base': [
        60,
        85,
        69,
        60,
        69,
        77
      ]
    },
    {
      'dexNumber': '506',
      'base': [
        45,
        60,
        45,
        25,
        45,
        55
      ]
    },
    {
      'dexNumber': '507',
      'base': [
        65,
        80,
        65,
        35,
        65,
        60
      ]
    },
    {
      'dexNumber': '508',
      'base': [
        85,
        110,
        90,
        45,
        90,
        80
      ]
    },
    {
      'dexNumber': '509',
      'base': [
        41,
        50,
        37,
        50,
        37,
        66
      ]
    },
    {
      'dexNumber': '510',
      'base': [
        64,
        88,
        50,
        88,
        50,
        106
      ]
    },
    {
      'dexNumber': '511',
      'base': [
        50,
        53,
        48,
        53,
        48,
        64
      ]
    },
    {
      'dexNumber': '512',
      'base': [
        75,
        98,
        63,
        98,
        63,
        101
      ]
    },
    {
      'dexNumber': '513',
      'base': [
        50,
        53,
        48,
        53,
        48,
        64
      ]
    },
    {
      'dexNumber': '514',
      'base': [
        75,
        98,
        63,
        98,
        63,
        101
      ]
    },
    {
      'dexNumber': '515',
      'base': [
        50,
        53,
        48,
        53,
        48,
        64
      ]
    },
    {
      'dexNumber': '516',
      'base': [
        75,
        98,
        63,
        98,
        63,
        101
      ]
    },
    {
      'dexNumber': '517',
      'base': [
        76,
        25,
        45,
        67,
        55,
        24
      ]
    },
    {
      'dexNumber': '518',
      'base': [
        116,
        55,
        85,
        107,
        95,
        29
      ]
    },
    {
      'dexNumber': '519',
      'base': [
        50,
        55,
        50,
        36,
        30,
        43
      ]
    },
    {
      'dexNumber': '520',
      'base': [
        62,
        77,
        62,
        50,
        42,
        65
      ]
    },
    {
      'dexNumber': '521',
      'base': [
        80,
        115,
        80,
        65,
        55,
        93
      ]
    },
    {
      'dexNumber': '522',
      'base': [
        45,
        60,
        32,
        50,
        32,
        76
      ]
    },
    {
      'dexNumber': '523',
      'base': [
        75,
        100,
        63,
        80,
        63,
        116
      ]
    },
    {
      'dexNumber': '524',
      'base': [
        55,
        75,
        85,
        25,
        25,
        15
      ]
    },
    {
      'dexNumber': '525',
      'base': [
        70,
        105,
        105,
        50,
        40,
        20
      ]
    },
    {
      'dexNumber': '526',
      'base': [
        85,
        135,
        130,
        60,
        80,
        25
      ]
    },
    {
      'dexNumber': '527',
      'base': [
        55,
        45,
        43,
        55,
        43,
        72
      ]
    },
    {
      'dexNumber': '528',
      'base': [
        67,
        57,
        55,
        77,
        55,
        114
      ]
    },
    {
      'dexNumber': '529',
      'base': [
        60,
        85,
        40,
        30,
        45,
        68
      ]
    },
    {
      'dexNumber': '530',
      'base': [
        110,
        135,
        60,
        50,
        65,
        88
      ]
    },
    {
      'dexNumber': '531',
      'base': [
        103,
        60,
        86,
        60,
        86,
        50
      ],
      'otherForme': {
        'mega': [
          103,
          60,
          126,
          80,
          126,
          50
        ]
      }
    },
    {
      'dexNumber': '532',
      'base': [
        75,
        80,
        55,
        25,
        35,
        35
      ]
    },
    {
      'dexNumber': '533',
      'base': [
        85,
        105,
        85,
        40,
        50,
        40
      ]
    },
    {
      'dexNumber': '534',
      'base': [
        105,
        140,
        95,
        55,
        65,
        45
      ]
    },
    {
      'dexNumber': '535',
      'base': [
        50,
        50,
        40,
        50,
        40,
        64
      ]
    },
    {
      'dexNumber': '536',
      'base': [
        75,
        65,
        55,
        65,
        55,
        69
      ]
    },
    {
      'dexNumber': '537',
      'base': [
        105,
        95,
        75,
        85,
        75,
        74
      ]
    },
    {
      'dexNumber': '538',
      'base': [
        120,
        100,
        85,
        30,
        85,
        45
      ]
    },
    {
      'dexNumber': '539',
      'base': [
        75,
        125,
        75,
        30,
        75,
        85
      ]
    },
    {
      'dexNumber': '540',
      'base': [
        45,
        53,
        70,
        40,
        60,
        42
      ]
    },
    {
      'dexNumber': '541',
      'base': [
        55,
        63,
        90,
        50,
        80,
        42
      ]
    },
    {
      'dexNumber': '542',
      'base': [
        75,
        103,
        80,
        70,
        80,
        92
      ]
    },
    {
      'dexNumber': '543',
      'base': [
        30,
        45,
        59,
        30,
        39,
        57
      ]
    },
    {
      'dexNumber': '544',
      'base': [
        40,
        55,
        99,
        40,
        79,
        47
      ]
    },
    {
      'dexNumber': '545',
      'base': [
        60,
        100,
        89,
        55,
        69,
        112
      ]
    },
    {
      'dexNumber': '546',
      'base': [
        40,
        27,
        60,
        37,
        50,
        66
      ]
    },
    {
      'dexNumber': '547',
      'base': [
        60,
        67,
        85,
        77,
        75,
        116
      ]
    },
    {
      'dexNumber': '548',
      'base': [
        45,
        35,
        50,
        70,
        50,
        30
      ]
    },
    {
      'dexNumber': '549',
      'base': [
        70,
        60,
        75,
        110,
        75,
        90
      ]
    },
    {
      'dexNumber': '550',
      'base': [
        70,
        92,
        65,
        80,
        55,
        98
      ]
    },
    {
      'dexNumber': '551',
      'base': [
        50,
        72,
        35,
        35,
        35,
        65
      ]
    },
    {
      'dexNumber': '552',
      'base': [
        60,
        82,
        45,
        45,
        45,
        74
      ]
    },
    {
      'dexNumber': '553',
      'base': [
        95,
        117,
        80,
        65,
        70,
        92
      ]
    },
    {
      'dexNumber': '554',
      'base': [
        70,
        90,
        45,
        15,
        45,
        50
      ]
    },
    {
      'dexNumber': '555',
      'base': [
        105,
        140,
        55,
        30,
        55,
        95
      ],
      'otherForme': {
        'zen': [
          105,
          30,
          105,
          140,
          105,
          55
        ]
      }
    },
    {
      'dexNumber': '556',
      'base': [
        75,
        86,
        67,
        106,
        67,
        60
      ]
    },
    {
      'dexNumber': '557',
      'base': [
        50,
        65,
        85,
        35,
        35,
        55
      ]
    },
    {
      'dexNumber': '558',
      'base': [
        70,
        95,
        125,
        65,
        75,
        45
      ]
    },
    {
      'dexNumber': '559',
      'base': [
        50,
        75,
        70,
        35,
        70,
        48
      ]
    },
    {
      'dexNumber': '560',
      'base': [
        65,
        90,
        115,
        45,
        115,
        58
      ]
    },
    {
      'dexNumber': '561',
      'base': [
        72,
        58,
        80,
        103,
        80,
        97
      ]
    },
    {
      'dexNumber': '562',
      'base': [
        38,
        30,
        85,
        55,
        65,
        30
      ]
    },
    {
      'dexNumber': '563',
      'base': [
        58,
        50,
        145,
        95,
        105,
        30
      ]
    },
    {
      'dexNumber': '564',
      'base': [
        54,
        78,
        103,
        53,
        45,
        22
      ]
    },
    {
      'dexNumber': '565',
      'base': [
        74,
        108,
        133,
        83,
        65,
        32
      ]
    },
    {
      'dexNumber': '566',
      'base': [
        55,
        112,
        45,
        74,
        45,
        70
      ]
    },
    {
      'dexNumber': '567',
      'base': [
        75,
        140,
        65,
        112,
        65,
        110
      ]
    },
    {
      'dexNumber': '568',
      'base': [
        50,
        50,
        62,
        40,
        62,
        65
      ]
    },
    {
      'dexNumber': '569',
      'base': [
        80,
        95,
        82,
        60,
        82,
        75
      ]
    },
    {
      'dexNumber': '570',
      'base': [
        40,
        65,
        40,
        80,
        40,
        65
      ]
    },
    {
      'dexNumber': '571',
      'base': [
        60,
        105,
        60,
        120,
        60,
        105
      ]
    },
    {
      'dexNumber': '572',
      'base': [
        55,
        50,
        40,
        40,
        40,
        75
      ]
    },
    {
      'dexNumber': '573',
      'base': [
        75,
        95,
        60,
        65,
        60,
        115
      ]
    },
    {
      'dexNumber': '574',
      'base': [
        45,
        30,
        50,
        55,
        65,
        45
      ]
    },
    {
      'dexNumber': '575',
      'base': [
        60,
        45,
        70,
        75,
        85,
        55
      ]
    },
    {
      'dexNumber': '576',
      'base': [
        70,
        55,
        95,
        95,
        110,
        65
      ]
    },
    {
      'dexNumber': '577',
      'base': [
        45,
        30,
        40,
        105,
        50,
        20
      ]
    },
    {
      'dexNumber': '578',
      'base': [
        65,
        40,
        50,
        125,
        60,
        30
      ]
    },
    {
      'dexNumber': '579',
      'base': [
        110,
        65,
        75,
        125,
        85,
        30
      ]
    },
    {
      'dexNumber': '580',
      'base': [
        62,
        44,
        50,
        44,
        50,
        55
      ]
    },
    {
      'dexNumber': '581',
      'base': [
        75,
        87,
        63,
        87,
        63,
        98
      ]
    },
    {
      'dexNumber': '582',
      'base': [
        36,
        50,
        50,
        65,
        60,
        44
      ]
    },
    {
      'dexNumber': '583',
      'base': [
        51,
        65,
        65,
        80,
        75,
        59
      ]
    },
    {
      'dexNumber': '584',
      'base': [
        71,
        95,
        85,
        110,
        95,
        79
      ]
    },
    {
      'dexNumber': '585',
      'base': [
        60,
        60,
        50,
        40,
        50,
        75
      ]
    },
    {
      'dexNumber': '586',
      'base': [
        80,
        100,
        70,
        60,
        70,
        95
      ]
    },
    {
      'dexNumber': '587',
      'base': [
        55,
        75,
        60,
        75,
        60,
        103
      ]
    },
    {
      'dexNumber': '588',
      'base': [
        50,
        75,
        45,
        40,
        45,
        60
      ]
    },
    {
      'dexNumber': '589',
      'base': [
        70,
        135,
        105,
        60,
        105,
        20
      ]
    },
    {
      'dexNumber': '590',
      'base': [
        69,
        55,
        45,
        55,
        55,
        15
      ]
    },
    {
      'dexNumber': '591',
      'base': [
        114,
        85,
        70,
        85,
        80,
        30
      ]
    },
    {
      'dexNumber': '592',
      'base': [
        55,
        40,
        50,
        65,
        85,
        40
      ]
    },
    {
      'dexNumber': '593',
      'base': [
        100,
        60,
        70,
        85,
        105,
        60
      ]
    },
    {
      'dexNumber': '594',
      'base': [
        165,
        75,
        80,
        40,
        45,
        65
      ]
    },
    {
      'dexNumber': '595',
      'base': [
        50,
        47,
        50,
        57,
        50,
        65
      ]
    },
    {
      'dexNumber': '596',
      'base': [
        70,
        77,
        60,
        97,
        60,
        108
      ]
    },
    {
      'dexNumber': '597',
      'base': [
        44,
        50,
        91,
        24,
        86,
        10
      ]
    },
    {
      'dexNumber': '598',
      'base': [
        74,
        94,
        131,
        54,
        116,
        20
      ]
    },
    {
      'dexNumber': '599',
      'base': [
        40,
        55,
        70,
        45,
        60,
        30
      ]
    },
    {
      'dexNumber': '600',
      'base': [
        60,
        80,
        95,
        70,
        85,
        50
      ]
    },
    {
      'dexNumber': '601',
      'base': [
        60,
        100,
        115,
        70,
        85,
        90
      ]
    },
    {
      'dexNumber': '602',
      'base': [
        35,
        55,
        40,
        45,
        40,
        60
      ]
    },
    {
      'dexNumber': '603',
      'base': [
        65,
        85,
        70,
        75,
        70,
        40
      ]
    },
    {
      'dexNumber': '604',
      'base': [
        85,
        115,
        80,
        105,
        80,
        50
      ]
    },
    {
      'dexNumber': '605',
      'base': [
        55,
        55,
        55,
        85,
        55,
        30
      ]
    },
    {
      'dexNumber': '606',
      'base': [
        75,
        75,
        75,
        125,
        95,
        40
      ]
    },
    {
      'dexNumber': '607',
      'base': [
        50,
        30,
        55,
        65,
        55,
        20
      ]
    },
    {
      'dexNumber': '608',
      'base': [
        60,
        40,
        60,
        95,
        60,
        55
      ]
    },
    {
      'dexNumber': '609',
      'base': [
        60,
        55,
        90,
        145,
        90,
        80
      ]
    },
    {
      'dexNumber': '610',
      'base': [
        46,
        87,
        60,
        30,
        40,
        57
      ]
    },
    {
      'dexNumber': '611',
      'base': [
        66,
        117,
        70,
        40,
        50,
        67
      ]
    },
    {
      'dexNumber': '612',
      'base': [
        76,
        147,
        90,
        60,
        70,
        97
      ]
    },
    {
      'dexNumber': '613',
      'base': [
        55,
        70,
        40,
        60,
        40,
        40
      ]
    },
    {
      'dexNumber': '614',
      'base': [
        95,
        110,
        80,
        70,
        80,
        50
      ]
    },
    {
      'dexNumber': '615',
      'base': [
        70,
        50,
        30,
        95,
        135,
        105
      ]
    },
    {
      'dexNumber': '616',
      'base': [
        50,
        40,
        85,
        40,
        65,
        25
      ]
    },
    {
      'dexNumber': '617',
      'base': [
        80,
        70,
        40,
        100,
        60,
        145
      ]
    },
    {
      'dexNumber': '618',
      'base': [
        109,
        66,
        84,
        81,
        99,
        32
      ]
    },
    {
      'dexNumber': '619',
      'base': [
        45,
        85,
        50,
        55,
        50,
        65
      ]
    },
    {
      'dexNumber': '620',
      'base': [
        65,
        125,
        60,
        95,
        60,
        105
      ]
    },
    {
      'dexNumber': '621',
      'base': [
        77,
        120,
        90,
        60,
        90,
        48
      ]
    },
    {
      'dexNumber': '622',
      'base': [
        59,
        74,
        50,
        35,
        50,
        35
      ]
    },
    {
      'dexNumber': '623',
      'base': [
        89,
        124,
        80,
        55,
        80,
        55
      ]
    },
    {
      'dexNumber': '624',
      'base': [
        45,
        85,
        70,
        40,
        40,
        60
      ]
    },
    {
      'dexNumber': '625',
      'base': [
        65,
        125,
        100,
        60,
        70,
        70
      ]
    },
    {
      'dexNumber': '626',
      'base': [
        95,
        110,
        95,
        40,
        95,
        55
      ]
    },
    {
      'dexNumber': '627',
      'base': [
        70,
        83,
        50,
        37,
        50,
        60
      ]
    },
    {
      'dexNumber': '628',
      'base': [
        100,
        123,
        75,
        57,
        75,
        80
      ]
    },
    {
      'dexNumber': '629',
      'base': [
        70,
        55,
        75,
        45,
        65,
        60
      ]
    },
    {
      'dexNumber': '630',
      'base': [
        110,
        65,
        105,
        55,
        95,
        80
      ]
    },
    {
      'dexNumber': '631',
      'base': [
        85,
        97,
        66,
        105,
        66,
        65
      ]
    },
    {
      'dexNumber': '632',
      'base': [
        58,
        109,
        112,
        48,
        48,
        109
      ]
    },
    {
      'dexNumber': '633',
      'base': [
        52,
        65,
        50,
        45,
        50,
        38
      ]
    },
    {
      'dexNumber': '634',
      'base': [
        72,
        85,
        70,
        65,
        70,
        58
      ]
    },
    {
      'dexNumber': '635',
      'base': [
        92,
        105,
        90,
        125,
        90,
        98
      ]
    },
    {
      'dexNumber': '636',
      'base': [
        55,
        85,
        55,
        50,
        55,
        60
      ]
    },
    {
      'dexNumber': '637',
      'base': [
        85,
        60,
        65,
        135,
        105,
        100
      ]
    },
    {
      'dexNumber': '638',
      'base': [
        91,
        90,
        129,
        90,
        72,
        108
      ]
    },
    {
      'dexNumber': '639',
      'base': [
        91,
        129,
        90,
        72,
        90,
        108
      ]
    },
    {
      'dexNumber': '640',
      'base': [
        91,
        90,
        72,
        90,
        129,
        108
      ]
    },
    {
      'dexNumber': '641',
      'base': [
        79,
        115,
        70,
        125,
        80,
        111
      ],
      'otherForme': {
        'therian': [
          79,
          100,
          80,
          110,
          90,
          121
        ]
      }
    },
    {
      'dexNumber': '642',
      'base': [
        79,
        115,
        70,
        125,
        80,
        111
      ],
      'otherForme': {
        'therian': [
          79,
          105,
          70,
          145,
          80,
          101
        ]
      }
    },
    {
      'dexNumber': '643',
      'base': [
        100,
        120,
        100,
        150,
        120,
        90
      ]
    },
    {
      'dexNumber': '644',
      'base': [
        100,
        150,
        120,
        120,
        100,
        90
      ]
    },
    {
      'dexNumber': '645',
      'base': [
        89,
        125,
        90,
        115,
        80,
        101
      ],
      'otherForme': {
        'therian': [
          89,
          145,
          90,
          105,
          80,
          91
        ]
      }
    },
    {
      'dexNumber': '646',
      'base': [
        125,
        130,
        90,
        130,
        90,
        95
      ],
      'otherForme': {
        'black': [
          125,
          170,
          100,
          120,
          90,
          95
        ],
        'white': [
          125,
          120,
          90,
          170,
          100,
          95
        ]
      }
    },
    {
      'dexNumber': '647',
      'base': [
        91,
        72,
        90,
        129,
        90,
        108
      ]
    },
    {
      'dexNumber': '648',
      'otherForme': {
        'aria': [
          100,
          77,
          77,
          128,
          128,
          90
        ],
        'pirouette': [
          100,
          128,
          90,
          77,
          77,
          128
        ]
      }
    },
    {
      'dexNumber': '649',
      'base': [
        71,
        120,
        95,
        120,
        95,
        99
      ]
    },
    {
      'dexNumber': '650',
      'base': [
        56,
        61,
        65,
        48,
        45,
        38
      ]
    },
    {
      'dexNumber': '651',
      'base': [
        61,
        78,
        95,
        56,
        58,
        57
      ]
    },
    {
      'dexNumber': '652',
      'base': [
        88,
        107,
        122,
        74,
        75,
        64
      ]
    },
    {
      'dexNumber': '653',
      'base': [
        40,
        45,
        40,
        62,
        60,
        60
      ]
    },
    {
      'dexNumber': '654',
      'base': [
        59,
        59,
        58,
        90,
        70,
        73
      ]
    },
    {
      'dexNumber': '655',
      'base': [
        75,
        69,
        72,
        114,
        100,
        104
      ]
    },
    {
      'dexNumber': '656',
      'base': [
        41,
        56,
        40,
        62,
        44,
        71
      ]
    },
    {
      'dexNumber': '657',
      'base': [
        54,
        63,
        52,
        83,
        56,
        97
      ]
    },
    {
      'dexNumber': '658',
      'base': [
        72,
        95,
        67,
        103,
        71,
        122
      ]
    },
    {
      'dexNumber': '659',
      'base': [
        38,
        36,
        38,
        32,
        36,
        57
      ]
    },
    {
      'dexNumber': '660',
      'base': [
        85,
        56,
        77,
        50,
        77,
        78
      ]
    },
    {
      'dexNumber': '661',
      'base': [
        45,
        50,
        43,
        40,
        38,
        62
      ]
    },
    {
      'dexNumber': '662',
      'base': [
        62,
        73,
        55,
        56,
        52,
        84
      ]
    },
    {
      'dexNumber': '663',
      'base': [
        78,
        81,
        71,
        74,
        69,
        126
      ]
    },
    {
      'dexNumber': '664',
      'base': [
        38,
        35,
        40,
        27,
        25,
        35
      ]
    },
    {
      'dexNumber': '665',
      'base': [
        45,
        22,
        60,
        27,
        30,
        29
      ]
    },
    {
      'dexNumber': '666',
      'base': [
        80,
        52,
        50,
        90,
        50,
        89
      ]
    },
    {
      'dexNumber': '667',
      'base': [
        62,
        50,
        58,
        73,
        54,
        72
      ]
    },
    {
      'dexNumber': '668',
      'base': [
        86,
        68,
        72,
        109,
        66,
        106
      ]
    },
    {
      'dexNumber': '669',
      'base': [
        44,
        38,
        39,
        61,
        79,
        42
      ]
    },
    {
      'dexNumber': '670',
      'base': [
        54,
        45,
        47,
        75,
        98,
        52
      ]
    },
    {
      'dexNumber': '671',
      'base': [
        78,
        65,
        68,
        112,
        154,
        75
      ]
    },
    {
      'dexNumber': '672',
      'base': [
        66,
        65,
        48,
        62,
        57,
        52
      ]
    },
    {
      'dexNumber': '673',
      'base': [
        123,
        100,
        62,
        97,
        81,
        68
      ]
    },
    {
      'dexNumber': '674',
      'base': [
        67,
        82,
        62,
        46,
        48,
        43
      ]
    },
    {
      'dexNumber': '675',
      'base': [
        95,
        124,
        78,
        69,
        71,
        58
      ]
    },
    {
      'dexNumber': '676',
      'base': [
        75,
        80,
        60,
        65,
        90,
        102
      ]
    },
    {
      'dexNumber': '677',
      'base': [
        62,
        48,
        54,
        63,
        60,
        68
      ]
    },
    {
      'dexNumber': '678',
      'base': [
        74,
        48,
        76,
        83,
        81,
        104
      ]
    },
    {
      'dexNumber': '679',
      'base': [
        45,
        80,
        100,
        35,
        37,
        28
      ]
    },
    {
      'dexNumber': '680',
      'base': [
        59,
        110,
        150,
        45,
        49,
        35
      ]
    },
    {
      'dexNumber': '681',
      'base': [
        60,
        50,
        150,
        50,
        150,
        60
      ],
      'otherForme': {
        'blade': [
          60,
          150,
          50,
          150,
          50,
          60
        ]
      }
    },
    {
      'dexNumber': '682',
      'base': [
        78,
        52,
        60,
        63,
        65,
        23
      ]
    },
    {
      'dexNumber': '683',
      'base': [
        101,
        72,
        72,
        99,
        89,
        29
      ]
    },
    {
      'dexNumber': '684',
      'base': [
        62,
        48,
        66,
        59,
        57,
        49
      ]
    },
    {
      'dexNumber': '685',
      'base': [
        82,
        80,
        86,
        85,
        75,
        72
      ]
    },
    {
      'dexNumber': '686',
      'base': [
        53,
        54,
        53,
        37,
        46,
        45
      ]
    },
    {
      'dexNumber': '687',
      'base': [
        86,
        92,
        88,
        68,
        75,
        73
      ]
    },
    {
      'dexNumber': '688',
      'base': [
        42,
        52,
        67,
        39,
        56,
        50
      ]
    },
    {
      'dexNumber': '689',
      'base': [
        72,
        105,
        115,
        54,
        86,
        68
      ]
    },
    {
      'dexNumber': '690',
      'base': [
        50,
        60,
        60,
        60,
        60,
        30
      ]
    },
    {
      'dexNumber': '691',
      'base': [
        65,
        75,
        90,
        97,
        123,
        44
      ]
    },
    {
      'dexNumber': '692',
      'base': [
        50,
        53,
        62,
        58,
        63,
        44
      ]
    },
    {
      'dexNumber': '693',
      'base': [
        71,
        73,
        88,
        120,
        89,
        59
      ]
    },
    {
      'dexNumber': '694',
      'base': [
        44,
        38,
        33,
        61,
        43,
        70
      ]
    },
    {
      'dexNumber': '695',
      'base': [
        62,
        55,
        52,
        109,
        94,
        109
      ]
    },
    {
      'dexNumber': '696',
      'base': [
        58,
        89,
        77,
        45,
        45,
        48
      ]
    },
    {
      'dexNumber': '697',
      'base': [
        82,
        121,
        119,
        69,
        59,
        71
      ]
    },
    {
      'dexNumber': '698',
      'base': [
        77,
        59,
        50,
        67,
        63,
        46
      ]
    },
    {
      'dexNumber': '699',
      'base': [
        123,
        77,
        72,
        99,
        92,
        58
      ]
    },
    {
      'dexNumber': '700',
      'base': [
        95,
        65,
        65,
        110,
        130,
        60
      ]
    },
    {
      'dexNumber': '701',
      'base': [
        78,
        92,
        75,
        74,
        63,
        118
      ]
    },
    {
      'dexNumber': '702',
      'base': [
        67,
        58,
        57,
        81,
        67,
        101
      ]
    },
    {
      'dexNumber': '703',
      'base': [
        50,
        50,
        150,
        50,
        150,
        50
      ]
    },
    {
      'dexNumber': '704',
      'base': [
        45,
        50,
        35,
        55,
        75,
        40
      ]
    },
    {
      'dexNumber': '705',
      'base': [
        68,
        75,
        53,
        83,
        113,
        60
      ]
    },
    {
      'dexNumber': '706',
      'base': [
        90,
        100,
        70,
        110,
        150,
        80
      ]
    },
    {
      'dexNumber': '707',
      'base': [
        57,
        80,
        91,
        80,
        87,
        75
      ]
    },
    {
      'dexNumber': '708',
      'base': [
        43,
        70,
        48,
        50,
        60,
        38
      ]
    },
    {
      'dexNumber': '709',
      'base': [
        85,
        110,
        76,
        65,
        82,
        56
      ]
    },
    {
      'dexNumber': '710',
      'otherForme': {
        'smallSize': [
          44,
          66,
          70,
          44,
          55,
          56
        ],
        'averageSize': [
          49,
          66,
          70,
          44,
          55,
          51
        ],
        'largeSize': [
          54,
          66,
          70,
          44,
          55,
          46
        ],
        'superSize': [
          59,
          66,
          70,
          44,
          55,
          41
        ]
      }
    },
    {
      'dexNumber': '711',
      'otherForme': {
        'smallSize': [
          55,
          85,
          122,
          58,
          75,
          99
        ],
        'averageSize': [
          65,
          90,
          122,
          58,
          75,
          84
        ],
        'largeSize': [
          75,
          95,
          122,
          58,
          75,
          69
        ],
        'superSize': [
          85,
          100,
          122,
          58,
          75,
          54
        ]
      }
    },
    {
      'dexNumber': '712',
      'base': [
        55,
        69,
        85,
        32,
        35,
        28
      ]
    },
    {
      'dexNumber': '713',
      'base': [
        95,
        117,
        184,
        44,
        46,
        28
      ]
    },
    {
      'dexNumber': '714',
      'base': [
        40,
        30,
        35,
        45,
        40,
        55
      ]
    },
    {
      'dexNumber': '715',
      'base': [
        85,
        70,
        80,
        97,
        80,
        123
      ]
    },
    {
      'dexNumber': '716',
      'base': [
        126,
        131,
        95,
        131,
        98,
        99
      ]
    },
    {
      'dexNumber': '717',
      'base': [
        126,
        131,
        95,
        131,
        98,
        99
      ]
    },
    {
      'dexNumber': '718',
      'base': [
        108,
        100,
        121,
        81,
        95,
        95
      ]
    },
    {
      'dexNumber': '719',
      'base': [
        50,
        100,
        150,
        100,
        150,
        50
      ],
      'otherForme': {
        'mega': [
          50,
          160,
          110,
          160,
          110,
          110
        ]
      }
    },
    {
      'dexNumber': '720',
      'otherForme': {
        'confined': [
          80,
          110,
          60,
          150,
          130,
          70
        ],
        'unbound': [
          80,
          160,
          60,
          170,
          130,
          80
        ]
      }
    },
    {
      'dexNumber': '721',
      'base': [
        80,
        110,
        120,
        130,
        90,
        70
      ]
    }*/
  ]

  return data
}
