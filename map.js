const locations = [
    // =========================
    // MAP 1
    // =========================
    {
        map: "map1.png",
        name: "forte terrore",
        x: 473,
        y: 328
    },
    {
        map: "map1.png",
        name: "karhold",
        x: 565,
        y: 265
    },
    {
        map: "map1.png",
        name: "ultimo focolare",
        x: 459,
        y: 235
    },
    {
        map: "map1.png",
        name: "deepwood motte",
        x: 228,
        y: 282
    },
    {
        map: "map1.png",
        name: "isola dell'orso",
        x: 194,
        y: 208
    },
    {
        map: "map1.png",
        name: "pugno dei primi uomini",
        x: 310,
        y: 46
    },
    {
        map: "map1.png",
        name: "castello di craster",
        x: 401,
        y: 90
    },
    {
        map: "map1.png",
        name: "aspra dimora",
        x: 506,
        y: 49
    },
    {
        map: "map1.png",
        name: "torre delle ombre",
        x: 368,
        y: 124
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
        x: 355,
        y: 162
    },
    {
        map: "map2.png",
        name: "nido dell'aquila",
        x: 473,
        y: 62
    },
    {
        map: "map2.png",
        name: "porta insanguinata",
        x: 445,
        y: 77
    },
    {
        map: "map2.png",
        name: "maidenpool",
        x: 452,
        y: 179
    },
    {
        map: "map2.png",
        name: "roccia del drago",
        x: 561,
        y: 213
    },
    {
        map: "map2.png",
        name: "tarth",
        x: 588,
        y: 390
    },
    {
        map: "map2.png",
        name: "capo tempesta",
        x: 508,
        y: 408
    },
    {
        map: "map2.png",
        name: "sala dell'estate",
        x: 407,
        y: 418
    },
    {
        map: "map2.png",
        name: "rostro del grifone",
        x: 486,
        y: 431
    },
    {
        map: "map2.png",
        name: "lancia del sole",
        x: 570,
        y: 633
    },
    {
        map: "map2.png",
        name: "arbor",
        x: 26,
        y: 650
    },
    {
        map: "map2.png",
        name: "collina del corno",
        x: 189,
        y: 489
    },
    {
        map: "map2.png",
        name: "vecchia citta",
        x: 81,
        y: 550
    },
    {
        map: "map2.png",
        name: "stelle al tramonto",
        x: 194,
        y: 590
    },
    {
        map: "map2.png",
        name: "approdo del re",
        x: 451,
        y: 277
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
        x: 655,
        y: 560
    },
    {
        map: "map2.png",
        name: "collina fantasma",
        x: 550,
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
        x: 450,
        y: 57
    },
    {
        map: "map4.png",
        name: "astapor",
        x: 370,
        y: 186
    },
    {
        map: "map4.png",
        name: "yunkai",
        x: 390,
        y: 97
    },

    // =========================
    // MAP 5
    // =========================
    {
        map: "map5.png",
        name: "vaes dothrak",
        x: 187,
        y: 122
    },
    {
        map: "map5.png",
        name: "qarth",
        x: 357,
        y: 732
    }
];
