const locations = [
    // =========================
    // MAP 1
    // =========================
    {
        map: "map1.png",
        name: "forte terrore",
        x: 167,
        y: 115
    },
    {
        map: "map1.png",
        name: "karhold",
        x: 201,
        y: 95
    },
    {
        map: "map1.png",
        name: "ultimo focolare",
        x: 162,
        y: 83
    },
    {
        map: "map1.png",
        name: "deepwood motte",
        x: 81,
        y: 100
    },
    {
        map: "map1.png",
        name: "isola dell'orso",
        x: 69,
        y: 71
    },
    {
        map: "map1.png",
        name: "pugno dei primi uomini",
        x: 110,
        y: 16
    },
    {
        map: "map1.png",
        name: "castello di craster",
        x: 142,
        y: 30
    },
    {
        map: "map1.png",
        name: "aspra dimora",
        x: 178,
        y: 16
    },
    {
        map: "map1.png",
        name: "torre delle ombre",
        x: 128,
        y: 43
    },
    {
        map: "map1.png",
        name: "castello nero",
        x: 424,
        y: 128
    },
    {
        map: "map1.png",
        name: "piazza di torrhen",
        x: 233,
        y: 408
    },
    {
        map: "map1.png",
        name: "grande inverno",
        x: 328,
        y: 360
    },
    {
        map: "map1.png",
        name: "porto bianco",
        x: 398,
        y: 494
    },
    {
        map: "map1.png",
        name: "moat cailin",
        x: 335,
        y: 520
    },
    {
        map: "map1.png",
        name: "le dita",
        x: 602,
        y: 620
    },

    // =========================
    // MAP 2
    // =========================
    {
        map: "map2.png",
        name: "delta delle acque",
        x: 247,
        y: 134
    },
    {
        map: "map2.png",
        name: "castel granito",
        x: 87,
        y: 222
    },
    {
        map: "map2.png",
        name: "lannisport",
        x: 83,
        y: 245
    },
    {
        map: "map2.png",
        name: "pyke",
        x: 90,
        y: 80
    },
    {
        map: "map2.png",
        name: "forte clegane",
        x: 32,
        y: 89
    },
    {
        map: "map2.png",
        name: "harrenhal",
        x: 126,
        y: 56
    },
    {
        map: "map2.png",
        name: "nido dell'aquila",
        x: 167,
        y: 21
    },
    {
        map: "map2.png",
        name: "porta insanguinata",
        x: 157,
        y: 26
    },
    {
        map: "map2.png",
        name: "maidenpool",
        x: 160,
        y: 63
    },
    {
        map: "map2.png",
        name: "roccia del drago",
        x: 196,
        y: 74
    },
    {
        map: "map2.png",
        name: "tarth",
        x: 208,
        y: 137
    },
    {
        map: "map2.png",
        name: "capo tempesta",
        x: 179,
        y: 144
    },
    {
        map: "map2.png",
        name: "sala dell'estate",
        x: 144,
        y: 148
    },
    {
        map: "map2.png",
        name: "rostro del grifone",
        x: 141,
        y: 50
    },
    {
        map: "map2.png",
        name: "lancia del sole",
        x: 201,
        y: 225
    },
    {
        map: "map2.png",
        name: "arbor",
        x: 2,
        y: 750
    },
    {
        map: "map2.png",
        name: "collina del corno",
        x: 205,
        y: 500
    },
    {
        map: "map2.png",
        name: "vecchia citta",
        x: 90,
        y: 535
    },
    {
        map: "map2.png",
        name: "stelle al tramonto",
        x: 195,
        y: 595
    },
    {
        map: "map2.png",
        name: "approdo del re",
        x: 460,
        y: 280
    },
    {
        map: "map2.png",
        name: "baia delle acque nere",
        x: 510,
        y: 260
    },
    {
        map: "map2.png",
        name: "le stepstone",
        x: 670,
        y: 560
    },
    {
        map: "map2.png",
        name: "collina fantasma",
        x: 545,
        y: 583
    },
    {
        map: "map2.png",
        name: "alto giardino",
        x: 170,
        y: 450
    },
    {
        map: "map2.png",
        name: "ashford",
        x: 276,
        y: 440
    },

    // =========================
    // MAP 3
    // =========================
    {
        map: "map3.png",
        name: "braavos",
        x: 80,
        y: 26
    },
    {
        map: "map3.png",
        name: "pentos",
        x: 28,
        y: 118
    },
    {
        map: "map3.png",
        name: "volantis",
        x: 142,
        y: 243
    },
    {
        map: "map3.png",
        name: "lys",
        x: 34,
        y: 243
    },
    {
        map: "map3.png",
        name: "tyrosh",
        x: 5,
        y: 188
    },
    {
        map: "map3.png",
        name: "myr",
        x: 50,
        y: 185
    },

    // =========================
    // MAP 4
    // =========================
    {
        map: "map4.png",
        name: "valyria",
        x: 13,
        y: 147
    },
    {
        map: "map4.png",
        name: "mereen",
        x: 147,
        y: 22
    },
    {
        map: "map4.png",
        name: "astapor",
        x: 120,
        y: 80
    },
    {
        map: "map4.png",
        name: "yunkai",
        x: 130,
        y: 37
    },

    // =========================
    // MAP 5
    // =========================
    {
        map: "map5.png",
        name: "vaes dothrak",
        x: 67,
        y: 32
    },
    {
        map: "map5.png",
        name: "qarth",
        x: 126,
        y: 258
    }
];
