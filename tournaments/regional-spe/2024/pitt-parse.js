const masterList = document.querySelector('.masters-ol');
const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        "name": "Andrew Estrada",
        "flag": "CA",
        "placing": 1,
        "event": "Pittsburgh",
        "event": "Pittsburgh",
        "record": {
            "wins": 15,
            "losses": 2,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Kyogre",
                    "number": "3",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Hawlucha",
                    "number": "118",
                    "set": "SVI"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Energy Recycler",
                    "number": "124",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 5,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Jesse Parker",
        "flag": "US",
        "placing": 2,
        "event": "Pittsburgh",
        "record": {
            "wins": 14,
            "losses": 2,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "158",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Zapdos",
                    "number": "29",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Collin Merli-Matthews",
        "flag": "US",
        "placing": 3,
        "event": "Pittsburgh",
        "record": {
            "wins": 13,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "251",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "269",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "255",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Eiscue",
                    "number": "44",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Penny",
                    "number": "183",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Andrew Hedrick",
        "flag": "US",
        "placing": 4,
        "event": "Pittsburgh",
        "record": {
            "wins": 12,
            "losses": 2,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Michael Chen",
        "flag": "US",
        "placing": 5,
        "event": "Pittsburgh",
        "record": {
            "wins": 12,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "SWSH259",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Adam Reinhardt",
        "flag": "US",
        "placing": 6,
        "event": "Pittsburgh",
        "record": {
            "wins": 12,
            "losses": 4,
            "ties": 0
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Zapdos",
                    "number": "29",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Zeraora",
                    "number": "56",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Serena",
                    "number": "164",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Lucas Xing",
        "flag": "CA",
        "placing": 7,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 2,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Chien-Pao ex",
                    "number": "261",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Bibarel",
                    "number": "121",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "111",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Frigibax",
                    "number": "58",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Frigibax",
                    "number": "57",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Baxcalibur",
                    "number": "60",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Superior Energy Retrieval",
                    "number": "189",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Cross Switcher",
                    "number": "230",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Canceling Cologne",
                    "number": "136",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 9,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Rahul Reddy",
        "flag": "US",
        "placing": 8,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "155",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Penny",
                    "number": "183",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Isaiah Bradner",
        "flag": "US",
        "placing": 9,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 0,
            "ties": 5
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Temple of Sinnoh",
                    "number": "155",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Nicholas Moffitt",
        "flag": "US",
        "placing": 10,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 2,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Michael Davidson",
        "flag": "US",
        "placing": 11,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 2,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "GG48",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Temple of Sinnoh",
                    "number": "155",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Hunter Butler",
        "flag": "US",
        "placing": 12,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 2,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Sawyer Melban",
        "flag": "US",
        "placing": 13,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 2,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Kyogre",
                    "number": "3",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Energy Recycler",
                    "number": "124",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 5,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Noah Sawyer",
        "flag": "US",
        "placing": 14,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu V",
                    "number": "85",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu VMAX",
                    "number": "86",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Tyler Mathews",
        "flag": "US",
        "placing": 15,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "192",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Caleb Gedemer",
        "flag": "US",
        "placing": 16,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "60",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Dre Alderette",
        "flag": "US",
        "placing": 17,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "191",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Brendan Cevasco",
        "flag": "US",
        "placing": 18,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Serena",
                    "number": "164",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Landen Kaetler",
        "flag": "CA",
        "placing": 19,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Cobalion",
                    "number": "126",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Benjamin Howard",
        "flag": "US",
        "placing": 20,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 3,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Zeraora",
                    "number": "56",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Dan Hugar",
        "flag": "US",
        "placing": 21,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 2,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 5,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Bryan McDaniel",
        "flag": "US",
        "placing": 22,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 4,
            "ties": 0
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "66",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "182",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu VMAX",
                    "number": "7",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Miraidon ex",
                    "number": "227",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Miraidon ex",
                    "number": "253",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Austin Ellis",
        "flag": "CA",
        "placing": 23,
        "event": "Pittsburgh",
        "record": {
            "wins": 11,
            "losses": 4,
            "ties": 0
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "186",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "GG69",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "182",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Gabe Shumway",
        "flag": "US",
        "placing": 24,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 2,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Snorlax",
                    "number": "143",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Wyrdeer V",
                    "number": "134",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "247",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Radiant Charizard",
                    "number": "11",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Therapeutic Energy - Special",
                    "number": "193",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Luminous Energy - Special",
                    "number": "191",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Vance Kelley",
        "flag": "US",
        "placing": 25,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 2,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Vincent D'Arcy",
        "flag": "US",
        "placing": 26,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 2,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Snorlax",
                    "number": "TG10",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Cross Switcher",
                    "number": "230",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Jon Eng",
        "flag": "US",
        "placing": 27,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Deoxys",
                    "number": "120",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                }
            ]
        }
    },
    {
        "name": "Noah Hanerland",
        "flag": "US",
        "placing": 28,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "155",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Zinnia's Resolve",
                    "number": "164",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Impact Energy - Special",
                    "number": "157",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Johnny Rabus",
        "flag": "US",
        "placing": 29,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Cobalion",
                    "number": "126",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Tower of Darkness",
                    "number": "137",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Tord Reklev",
        "flag": "NO",
        "placing": 30,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "245",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Elliott Chereches",
        "flag": "CA",
        "placing": 31,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Zeraora",
                    "number": "56",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Christian Chase",
        "flag": "US",
        "placing": 32,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Hawlucha",
                    "number": "118",
                    "set": "SVI"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Grant Manley",
        "flag": "US",
        "placing": 33,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Calvin Connor",
        "flag": "US",
        "placing": 34,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Christopher Venier",
        "flag": "CA",
        "placing": 35,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Oricorio",
                    "number": "42",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Jeremy Gibson",
        "flag": "US",
        "placing": 36,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "SWSH271",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "GG10",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Haru Nishikawa",
        "flag": "JP",
        "placing": 37,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                },
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Luke Smith",
        "flag": "US",
        "placing": 38,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "Regan Retzloff",
        "flag": "US",
        "placing": 39,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Lugia V",
                    "number": "185",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lugia VSTAR",
                    "number": "211",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Penny",
                    "number": "183",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Rowan Stavenow",
        "flag": "CA",
        "placing": 40,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "228",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 3,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Temple of Sinnoh",
                    "number": "155",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Isaiah Cheville",
        "flag": "US",
        "placing": 41,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 3,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Joshua Curtin",
        "flag": "US",
        "placing": 42,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Zapdos",
                    "number": "29",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Ivan Chan",
        "flag": "US",
        "placing": 43,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 1,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                },
                {
                    "count": 11,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Mike Newey",
        "flag": "US",
        "placing": 44,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Frigibax",
                    "number": "57",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Frigibax",
                    "number": "58",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Baxcalibur",
                    "number": "60",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Chien-Pao ex",
                    "number": "236",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "111",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Bibarel",
                    "number": "121",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Chien-Pao ex",
                    "number": "30",
                    "set": "SVP"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Superior Energy Retrieval",
                    "number": "189",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Canceling Cologne",
                    "number": "136",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Skaters' Park",
                    "number": "242",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Gregory Playter",
        "flag": "US",
        "placing": 45,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "191",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Gibson Archer-Tang",
        "flag": "US",
        "placing": 46,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "87",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "83",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Mawile",
                    "number": "71",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Shauna",
                    "number": "240",
                    "set": "FST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Zach Lesage",
        "flag": "CA",
        "placing": 47,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                }
            ]
        }
    },
    {
        "name": "Benjamin McEachen",
        "flag": "US",
        "placing": 48,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Oricorio",
                    "number": "42",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                }
            ]
        }
    },
    {
        "name": "Grayson Lang",
        "flag": "US",
        "placing": 49,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "152",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "TG30",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "TG03",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "185",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "155",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Giacomo",
                    "number": "182",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "Hunter Smith",
        "flag": "US",
        "placing": 50,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "87",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Octillery",
                    "number": "178",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "83",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Jacky Su",
        "flag": "CA",
        "placing": 51,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Snorlax",
                    "number": "TG10",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Therapeutic Energy - Special",
                    "number": "193",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "Daniel Lopez",
        "flag": "US",
        "placing": 52,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Erin McCann",
        "flag": "US",
        "placing": 53,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "250",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "254",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cleansing Gloves",
                    "number": "136",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Ryan Bownes",
        "flag": "US",
        "placing": 54,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 2,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "SWSH272",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Lugia VSTAR",
                    "number": "211",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lugia VSTAR",
                    "number": "202",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Harris Noor",
        "flag": "US",
        "placing": 55,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "185",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "211",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "154",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "155",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "SWSH272",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Penny",
                    "number": "183",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "Benjamin Nackman",
        "flag": "US",
        "placing": 56,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "87",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "247",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "83",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Giacomo",
                    "number": "182",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Letter of Encouragement",
                    "number": "189",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Ryan Harris",
        "flag": "US",
        "placing": 57,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 2,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Kyogre",
                    "number": "3",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Pidgeot V",
                    "number": "188",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "192",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Energy Recycler",
                    "number": "124",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 5,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Ryan Sabelhaus",
        "flag": "US",
        "placing": 58,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 2,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "SWSH259",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 5,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Christopher Wigelsworth",
        "flag": "US",
        "placing": 59,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Charmander",
                    "number": "44",
                    "set": "SVP"
                },
                {
                    "count": 3,
                    "name": "Charizard ex",
                    "number": "223",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "GG29",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Bibarel",
                    "number": "GG25",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Pidgey",
                    "number": "207",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Pidgeot ex",
                    "number": "225",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Charizard",
                    "number": "20",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Arceus V",
                    "number": "165",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Arceus VSTAR",
                    "number": "176",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Jacq",
                    "number": "175",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Vitality Band",
                    "number": "185",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Magma Basin",
                    "number": "144",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 8,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "George Gebhardt",
        "flag": "US",
        "placing": 60,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 2,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                },
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Evan Campbell",
        "flag": "US",
        "placing": 61,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Abaan Ahmed",
        "flag": "US",
        "placing": 62,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "60",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Avery",
                    "number": "130",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Jeremy Gumila",
        "flag": "US",
        "placing": 63,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "228",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "GG10",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "GG48",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Temple of Sinnoh",
                    "number": "155",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                },
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Colton Ames",
        "flag": "US",
        "placing": 64,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 3,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Giratina VSTAR",
                    "number": "212",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Hawlucha",
                    "number": "7",
                    "set": "SVP"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 5,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Noel Totomoch",
        "flag": "US",
        "placing": 65,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 5,
            "ties": 0
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "212",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "185",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "247",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Jonathan Ramirez",
        "flag": "US",
        "placing": 66,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 3,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "192",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Alex Schemanske",
        "flag": "US",
        "placing": 67,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 5,
            "ties": 0
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "TG20",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "TG21",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "TG03",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "83",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Giacomo",
                    "number": "182",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Michael Otero",
        "flag": "US",
        "placing": 68,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 3,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "154",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "211",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Thorton",
                    "number": "167",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Ryan Soety",
        "flag": "US",
        "placing": 69,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 3,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Dylan Gunn",
        "flag": "US",
        "placing": 70,
        "event": "Pittsburgh",
        "record": {
            "wins": 10,
            "losses": 5,
            "ties": 0
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "191",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Kyogre",
                    "number": "3",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Energy Recycler",
                    "number": "124",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                }
            ],
            "energy": [
                {
                    "count": 5,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Keaton Gill",
        "flag": "US",
        "placing": 71,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 3,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Colton Meahl",
        "flag": "US",
        "placing": 72,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 3,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "191",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Darin O'Meara",
        "flag": "US",
        "placing": 73,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Oricorio",
                    "number": "42",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                }
            ]
        }
    },
    {
        "name": "Soumil Dusara",
        "flag": "US",
        "placing": 74,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Michele Schiraldi",
        "flag": "CA",
        "placing": 75,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Gardevoir ex",
                    "number": "228",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                },
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Conner Truitt",
        "flag": "US",
        "placing": 76,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "GG10",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Penny",
                    "number": "183",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Temple of Sinnoh",
                    "number": "155",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Kamil Colatosti",
        "flag": "CA",
        "placing": 77,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Chris Fulop",
        "flag": "US",
        "placing": 78,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu V",
                    "number": "85",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu VMAX",
                    "number": "86",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Prin Basser",
        "flag": "US",
        "placing": 79,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Eiscue",
                    "number": "44",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "254",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "250",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "TG30",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Penny",
                    "number": "183",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Owen Rhoads",
        "flag": "US",
        "placing": 80,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Hawlucha",
                    "number": "7",
                    "set": "SVP"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Joe Sturino",
        "flag": "US",
        "placing": 81,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "TG20",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "TG30",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "SWSH089",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "185",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Giacomo",
                    "number": "182",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Joshua Sambrano",
        "flag": "US",
        "placing": 82,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "87",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "185",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Inteleon VMAX",
                    "number": "266",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "Peyton Bauermeister",
        "flag": "US",
        "placing": 83,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "192",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Kyle Caruthers",
        "flag": "US",
        "placing": 84,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Charmander",
                    "number": "44",
                    "set": "SVP"
                },
                {
                    "count": 2,
                    "name": "Charizard ex",
                    "number": "228",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Charizard ex",
                    "number": "215",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgey",
                    "number": "162",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgeot ex",
                    "number": "225",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Entei V",
                    "number": "GG36",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Arceus V",
                    "number": "166",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arceus V",
                    "number": "SWSH204",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Arceus VSTAR",
                    "number": "184",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Charizard",
                    "number": "20",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                }
            ],
            "energy": [
                {
                    "count": 8,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Calvin Chang",
        "flag": "US",
        "placing": 85,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Morgan Purdy",
        "flag": "US",
        "placing": 86,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Kirlia",
                    "number": "SWSH271",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "245",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "25",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Zacian V",
                    "number": "GG48",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Temple of Sinnoh",
                    "number": "155",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 11,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Aden Cunningham",
        "flag": "US",
        "placing": 87,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 4,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Snorlax",
                    "number": "TG10",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pidgeot V",
                    "number": "188",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Crabominable V",
                    "number": "76",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Vengeful Punch",
                    "number": "197",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Andrew Wu",
        "flag": "US",
        "placing": 88,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "192",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Zeryx Schaefer",
        "flag": "US",
        "placing": 89,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Charmander",
                    "number": "44",
                    "set": "SVP"
                },
                {
                    "count": 3,
                    "name": "Charizard ex",
                    "number": "223",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Arceus V",
                    "number": "SWSH204",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Arceus VSTAR",
                    "number": "SWSH307",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Pidgey",
                    "number": "207",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgeot ex",
                    "number": "225",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "GG10",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Jacq",
                    "number": "175",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 1,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 8,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Brad Brown",
        "flag": "US",
        "placing": 90,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "227",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "158",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "TG03",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "GG34",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Zeraora",
                    "number": "56",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "182",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 13,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Julia Butenhoff",
        "flag": "US",
        "placing": 91,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 3,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Riley Hulbert",
        "flag": "US",
        "placing": 92,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raichu V",
                    "number": "158",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Ian Robb",
        "flag": "US",
        "placing": 93,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "JW Kriewall",
        "flag": "US",
        "placing": 94,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Zapdos",
                    "number": "29",
                    "set": "PGO"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Austin Daniels",
        "flag": "US",
        "placing": 95,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "191",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Arron Sanyer",
        "flag": "US",
        "placing": 96,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Pidgeot V",
                    "number": "188",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Charizard",
                    "number": "20",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Michael Diaz",
        "flag": "US",
        "placing": 97,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Cody Graham",
        "flag": "US",
        "placing": 98,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Arceus VSTAR",
                    "number": "123",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Arceus V",
                    "number": "122",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Flying Pikachu VMAX",
                    "number": "7",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Alolan Vulpix VSTAR",
                    "number": "34",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Alolan Vulpix V",
                    "number": "33",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Bibarel",
                    "number": "121",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Bidoof",
                    "number": "111",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Leafy Camo Poncho",
                    "number": "160",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Mitchell Roberge",
        "flag": "US",
        "placing": 99,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Charizard ex",
                    "number": "228",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Mew",
                    "number": "GG10",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Charmander",
                    "number": "44",
                    "set": "SVP"
                },
                {
                    "count": 1,
                    "name": "Charmeleon",
                    "number": "27",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgey",
                    "number": "207",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgeot ex",
                    "number": "225",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "GG29",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Bibarel",
                    "number": "GG25",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Delphox V",
                    "number": "173",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Magma Basin",
                    "number": "144",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Vitality Band",
                    "number": "185",
                    "set": "SSH"
                }
            ],
            "energy": [
                {
                    "count": 1,
                    "name": "Luminous Energy - Special",
                    "number": "191",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 8,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Chris Franco",
        "flag": "US",
        "placing": 100,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Oricorio",
                    "number": "GG04",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Ben Dobberstein",
        "flag": "US",
        "placing": 101,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "264",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Snorlax",
                    "number": "TG10",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Therapeutic Energy - Special",
                    "number": "193",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Luke Morsa",
        "flag": "US",
        "placing": 102,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Snorlax",
                    "number": "143",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "182",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Corey Patterson",
        "flag": "US",
        "placing": 103,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "250",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "TG30",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "254",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Trekking Shoes",
                    "number": "156",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Brandon Dean",
        "flag": "US",
        "placing": 104,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "170",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "TG21",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Rapid Strike Urshifu V",
                    "number": "153",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Rapid Strike Urshifu V",
                    "number": "TG20",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Octillery",
                    "number": "TG03",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "266",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "186",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Suchit Koparde",
        "flag": "US",
        "placing": 105,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 1,
            "ties": 7
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "191",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Shashi Naraine",
        "flag": "CA",
        "placing": 106,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Edwin Arrollo",
        "flag": "US",
        "placing": 107,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Zamazenta",
                    "number": "97",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Pidgeot V",
                    "number": "137",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Metal Energy - Basic",
                    "number": "159",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Andrew Ryals",
        "flag": "US",
        "placing": 108,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 3,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Giratina VSTAR",
                    "number": "212",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Ryan Miller",
        "flag": "US",
        "placing": 109,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Miraidon ex",
                    "number": "244",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Miraidon ex",
                    "number": "253",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "GG34",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "SWSH122",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Zapdos",
                    "number": "29",
                    "set": "PGO"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Penny",
                    "number": "183",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Brayden Karvelas",
        "flag": "US",
        "placing": 110,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 3,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "192",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Erich Francis",
        "flag": "US",
        "placing": 111,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 3,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Miraidon ex",
                    "number": "79",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "TG03",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "247",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Vincent Vuong",
        "flag": "CA",
        "placing": 112,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 3,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "227",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "158",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Zeraora",
                    "number": "56",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Eddie North",
        "flag": "US",
        "placing": 113,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "185",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Snorlax",
                    "number": "TG10",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 5,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Dakota Davey",
        "flag": "US",
        "placing": 114,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Charmander",
                    "number": "26",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Charizard ex",
                    "number": "223",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Delphox V",
                    "number": "173",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 7,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Jacob Noel",
        "flag": "US",
        "placing": 115,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "266",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "TG20",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "TG21",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Basculin",
                    "number": "70",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "155",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "186",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "TG03",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Giacomo",
                    "number": "182",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "Chris Pagan",
        "flag": "US",
        "placing": 116,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Arceus VSTAR",
                    "number": "123",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Arceus V",
                    "number": "122",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Flying Pikachu VMAX",
                    "number": "7",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Tapu Koko V",
                    "number": "50",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Tapu Koko VMAX",
                    "number": "51",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Leafy Camo Poncho",
                    "number": "160",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Panic Mask",
                    "number": "165",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 8,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Jacob Stock",
        "flag": "US",
        "placing": 117,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 6,
            "ties": 0
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                }
            ]
        }
    },
    {
        "name": "Michael Canaves",
        "flag": "US",
        "placing": 118,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Origin Forme Palkia V",
                    "number": "39",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Bibarel",
                    "number": "121",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Mawile",
                    "number": "71",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Bidoof",
                    "number": "111",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Origin Forme Palkia VSTAR",
                    "number": "SWSH254",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Origin Forme Palkia VSTAR",
                    "number": "40",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Chien-Pao ex",
                    "number": "30",
                    "set": "SVP"
                },
                {
                    "count": 1,
                    "name": "Chien-Pao ex",
                    "number": "61",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Cross Switcher",
                    "number": "230",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Kenny Hernandez",
        "flag": "US",
        "placing": 119,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "182",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Hawlucha",
                    "number": "118",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Justin Norris",
        "flag": "US",
        "placing": 120,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Charizard ex",
                    "number": "125",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Charmander",
                    "number": "26",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgeot ex",
                    "number": "164",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgey",
                    "number": "162",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Arceus VSTAR",
                    "number": "SWSH307",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Arceus V",
                    "number": "SWSH306",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Vengeful Punch",
                    "number": "197",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Avery",
                    "number": "130",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Jacq",
                    "number": "175",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 9,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Jose Medina",
        "flag": "US",
        "placing": 121,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Charizard ex",
                    "number": "223",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Charmander",
                    "number": "26",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgey",
                    "number": "207",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgeot ex",
                    "number": "225",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Entei V",
                    "number": "GG36",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "GG10",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Bidoof",
                    "number": "GG29",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Bibarel",
                    "number": "GG25",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Delphox V",
                    "number": "173",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Vitality Band",
                    "number": "185",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Justified Gloves",
                    "number": "143",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Magma Basin",
                    "number": "144",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 8,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Kyle Tokarczyk",
        "flag": "US",
        "placing": 122,
        "event": "Pittsburgh",
        "record": {
            "wins": 9,
            "losses": 6,
            "ties": 0
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                }
            ]
        }
    },
    {
        "name": "Sanjay Sundararajan",
        "flag": "US",
        "placing": 123,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Origin Forme Palkia V",
                    "number": "39",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Origin Forme Palkia VSTAR",
                    "number": "40",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Chien-Pao ex",
                    "number": "61",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "GG29",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Bibarel",
                    "number": "GG25",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Bibarel",
                    "number": "121",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Cross Switcher",
                    "number": "230",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Tyler Perry",
        "flag": "US",
        "placing": 124,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Giancarlo Bortolon",
        "flag": "CA",
        "placing": 125,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Eiscue",
                    "number": "44",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Nicholas Moses",
        "flag": "US",
        "placing": 126,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Origin Forme Palkia V",
                    "number": "39",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Origin Forme Palkia VSTAR",
                    "number": "208",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Chien-Pao ex",
                    "number": "236",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "111",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Bibarel",
                    "number": "121",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Cross Switcher",
                    "number": "230",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Patrick Scharff",
        "flag": "US",
        "placing": 127,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 4,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Basculin",
                    "number": "70",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "TG20",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "185",
                    "set": "EVS"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "TG21",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Edwin Lopez",
        "flag": "US",
        "placing": 128,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Gilberto Acosta",
        "flag": "US",
        "placing": 129,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "211",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "SWSH271",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "245",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "GG48",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "25",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Pokemon League Headquarters",
                    "number": "192",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                },
                {
                    "count": 9,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Jonathan Twigg",
        "flag": "US",
        "placing": 130,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "250",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Genesect V",
                    "number": "254",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Genesect V",
                    "number": "255",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Eiscue",
                    "number": "44",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Ely Greenfeld",
        "flag": "US",
        "placing": 131,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "SWSH272",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Snorlax",
                    "number": "143",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "155",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "247",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Therapeutic Energy - Special",
                    "number": "193",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Krystal Florendo",
        "flag": "CA",
        "placing": 132,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "87",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "TG30",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "TG03",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "83",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Giacomo",
                    "number": "182",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "Nick Trausch",
        "flag": "US",
        "placing": 133,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "244",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu VMAX",
                    "number": "7",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "264",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "SWSH122",
                    "set": "PR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Mario Vivas",
        "flag": "CA",
        "placing": 134,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 3,
            "ties": 5
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Tower of Darkness",
                    "number": "137",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                }
            ]
        }
    },
    {
        "name": "Ryan Antonucci",
        "flag": "US",
        "placing": 135,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "245",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                },
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Christian Cantelon",
        "flag": "CA",
        "placing": 136,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "227",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "158",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "247",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Zeraora",
                    "number": "56",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "GG34",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "TG03",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Stormy Mountains",
                    "number": "161",
                    "set": "EVS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Dalen Dockery",
        "flag": "US",
        "placing": 137,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "SWSH272",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu VMAX",
                    "number": "86",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu V",
                    "number": "85",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                }
            ]
        }
    },
    {
        "name": "Teja Gummadi",
        "flag": "US",
        "placing": 138,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cross Switcher",
                    "number": "230",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Cleansing Gloves",
                    "number": "136",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Cody Bruder",
        "flag": "US",
        "placing": 139,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "185",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "211",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "SWSH272",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "247",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "154",
                    "set": "BST"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Matthew Connors",
        "flag": "US",
        "placing": 140,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Eiscue",
                    "number": "44",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Jose Marzan",
        "flag": "US",
        "placing": 141,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 5,
            "ties": 2
        },
        "decklist": { "pokemon": [{ "count": 4, "name": "Charmander", "number": "44", "set": "SVP" }, { "count": 2, "name": "Charizard ex", "number": "228", "set": "OBF" }, { "count": 1, "name": "Charizard ex", "number": "215", "set": "OBF" }, { "count": 2, "name": "Pidgey", "number": "162", "set": "OBF" }, { "count": 2, "name": "Pidgeot ex", "number": "225", "set": "OBF" }, { "count": 1, "name": "Manaphy", "number": "GG06", "set": "CRZ" }, { "count": 1, "name": "Entei V", "number": "GG36", "set": "CRZ" }, { "count": 1, "name": "Arceus V", "number": "166", "set": "BRS" }, { "count": 1, "name": "Arceus V", "number": "SWSH204", "set": "PR" }, { "count": 2, "name": "Arceus VSTAR", "number": "184", "set": "BRS" }, { "count": 1, "name": "Pumpkaboo", "number": "76", "set": "EVS" }, { "count": 1, "name": "Radiant Charizard", "number": "20", "set": "CRZ" }], "trainer": [{ "count": 4, "name": "Iono", "number": "185", "set": "PAL" }, { "count": 2, "name": "Colress's Experiment", "number": "GG59", "set": "CRZ" }, { "count": 2, "name": "Professor's Research", "number": "147", "set": "BRS" }, { "count": 1, "name": "Switch", "number": "147", "set": "CES" }, { "count": 3, "name": "Boss's Orders", "number": "132", "set": "BRS" }, { "count": 1, "name": "Raihan", "number": "140", "set": "CRZ" }, { "count": 4, "name": "Battle VIP Pass", "number": "225", "set": "FST" }, { "count": 4, "name": "Ultra Ball", "number": "150", "set": "BRS" }, { "count": 1, "name": "Choice Belt", "number": "211", "set": "ASR" }, { "count": 3, "name": "Artazon", "number": "229", "set": "OBF" }, { "count": 2, "name": "Nest Ball", "number": "181", "set": "SVI" }, { "count": 1, "name": "Super Rod", "number": "188", "set": "PAL" }, { "count": 4, "name": "Rare Candy", "number": "142", "set": "CES" }], "energy": [{ "count": 8, "name": "Fire Energy - Basic", "number": "153", "set": "CRZ" }, { "count": 1, "name": "Double Turbo Energy - Special", "number": "216", "set": "ASR" }] }
    },
    {
        "name": "Jake Riggs",
        "flag": "US",
        "placing": 142,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Charizard ex",
                    "number": "223",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Charizard ex",
                    "number": "215",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Charmeleon",
                    "number": "27",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Charmander",
                    "number": "26",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Charmander",
                    "number": "44",
                    "set": "SVP"
                },
                {
                    "count": 2,
                    "name": "Arceus V",
                    "number": "122",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arceus V",
                    "number": "165",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Arceus VSTAR",
                    "number": "123",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Pidgeot ex",
                    "number": "225",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgey",
                    "number": "207",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Radiant Charizard",
                    "number": "11",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Jacq",
                    "number": "175",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Vitality Band",
                    "number": "185",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                }
            ],
            "energy": [
                {
                    "count": 1,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 8,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Tristan Bennett",
        "flag": "US",
        "placing": 143,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Town Store",
                    "number": "196",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Justin Tse",
        "flag": "CA",
        "placing": 144,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Joshua Acevedo",
        "flag": "US",
        "placing": 145,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Giratina V",
                    "number": "SWSH259",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Alexander Phillips",
        "flag": "US",
        "placing": 146,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 4,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Mason Lovato",
        "flag": "US",
        "placing": 147,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "158",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Miraidon ex",
                    "number": "253",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "280",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "GG34",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Zapdos",
                    "number": "29",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "182",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "247",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "155",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Sky Seal Stone",
                    "number": "143",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Beach Court",
                    "number": "167",
                    "set": "SVI"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Andrew Weiss",
        "flag": "US",
        "placing": 148,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Fan of Waves",
                    "number": "127",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Penny",
                    "number": "183",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Gabriel Smart",
        "flag": "US",
        "placing": 149,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Archeops",
                    "number": "SWSH272",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "211",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Caleb Rogerson",
        "flag": "US",
        "placing": 150,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 4,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Temple of Sinnoh",
                    "number": "155",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Cyrus Davis",
        "flag": "CA",
        "placing": 151,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Charizard",
                    "number": "11",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Hawlucha",
                    "number": "118",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Pidgeot V",
                    "number": "137",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Elliot Sayles",
        "flag": "US",
        "placing": 152,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "SWSH109",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "264",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu VMAX",
                    "number": "86",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu V",
                    "number": "85",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Brennon Conner",
        "flag": "US",
        "placing": 153,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Snorlax",
                    "number": "143",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Charizard",
                    "number": "11",
                    "set": "PGO"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Wyrdeer V",
                    "number": "180",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "211",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lugia V",
                    "number": "185",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Serena",
                    "number": "164",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Therapeutic Energy - Special",
                    "number": "193",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Luminous Energy - Special",
                    "number": "191",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Nathan Bumbarger",
        "flag": "US",
        "placing": 154,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Arceus VSTAR",
                    "number": "123",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arceus VSTAR",
                    "number": "176",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Alolan Vulpix V",
                    "number": "33",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Alolan Vulpix VSTAR",
                    "number": "34",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Espeon V",
                    "number": "64",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Espeon VMAX",
                    "number": "65",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Arceus V",
                    "number": "165",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Arceus V",
                    "number": "122",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Alolan Vulpix V",
                    "number": "173",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Radiant Jirachi",
                    "number": "120",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu V",
                    "number": "6",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Flying Pikachu VMAX",
                    "number": "7",
                    "set": "CEL"
                }
            ],
            "trainer": [
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Adventurer's Discovery",
                    "number": "224",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "McKinley Freeman",
        "flag": "US",
        "placing": 155,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 4,
            "ties": 4
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Giratina V",
                    "number": "185",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Giratina VSTAR",
                    "number": "212",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Hawlucha",
                    "number": "118",
                    "set": "SVI"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Matthew Hammond",
        "flag": "US",
        "placing": 156,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 5,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Davin Erickson",
        "flag": "US",
        "placing": 157,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "87",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "83",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 7,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Liam Conant",
        "flag": "US",
        "placing": 158,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "192",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Iyla Sutherland",
        "flag": "US",
        "placing": 159,
        "event": "Pittsburgh",
        "record": {
            "wins": 8,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Cross Switcher",
                    "number": "230",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Ralts Musser",
        "flag": "US",
        "placing": 160,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 3,
            "ties": 6
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Kirlia",
                    "number": "SWSH271",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "TG05",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "228",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Zacian V",
                    "number": "GG48",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "GG10",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                }
            ],
            "energy": [
                {
                    "count": 11,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Aleaner Pabonnie",
        "flag": "US",
        "placing": 161,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 5,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "185",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "212",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Jonathan Valenzuela",
        "flag": "US",
        "placing": 162,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 5,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "87",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "GG39",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "83",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                }
            ]
        }
    },
    {
        "name": "Ryan Tongue",
        "flag": "US",
        "placing": 163,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 5,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Zeraora",
                    "number": "56",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "54",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Flaaffy",
                    "number": "55",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Flaaffy",
                    "number": "TG03",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "81",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Raichu V",
                    "number": "45",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raichu V",
                    "number": "158",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "169",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Zapdos",
                    "number": "29",
                    "set": "PGO"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Dregan Shook",
        "flag": "US",
        "placing": 164,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 6,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Arceus V",
                    "number": "122",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Arceus VSTAR",
                    "number": "123",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Duraludon V",
                    "number": "122",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Duraludon VMAX",
                    "number": "TG30",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Duraludon VMAX",
                    "number": "123",
                    "set": "EVS"
                },
                {
                    "count": 2,
                    "name": "Umbreon V",
                    "number": "SWSH203",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Umbreon VMAX",
                    "number": "95",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Adventurer's Discovery",
                    "number": "224",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Volo",
                    "number": "151",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Karen's Conviction",
                    "number": "144",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Panic Mask",
                    "number": "165",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 5,
                    "name": "Metal Energy - Basic",
                    "number": "159",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Fighting Energy - Basic",
                    "number": "233",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Darkness Energy - Basic",
                    "number": "158",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Luminous Energy - Special",
                    "number": "191",
                    "set": "PAL"
                }
            ]
        }
    },
    {
        "name": "Joseph Sumner",
        "flag": "US",
        "placing": 165,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 4,
            "ties": 5
        },
        "decklist":{"pokemon":[{"count":1, "name": "Miraidon ex", "number":"81", "set": "SVI"},{"count":1, "name": "Miraidon ex", "number":"244", "set": "SVI"},{"count":1, "name": "Miraidon ex", "number":"253", "set": "SVI"},{"count":2, "name": "Raikou V", "number":"GG41", "set": "CRZ"},{"count":2, "name": "Mareep", "number":"GG34", "set": "CRZ"},{"count":2, "name": "Flaaffy", "number":"SWSH122", "set": "PR"},{"count":1, "name": "Lumineon V", "number":"156", "set": "BRS"},{"count":1, "name": "Squawkabilly ex", "number":"169", "set": "PAL"},{"count":1, "name": "Drapion V", "number":"118", "set": "LOR"},{"count":1, "name": "Flying Pikachu V", "number":"6", "set": "CEL"},{"count":2, "name": "Raichu V", "number":"45", "set": "BRS"},{"count":1, "name": "Zapdos", "number":"29", "set": "PGO"}],"trainer":[{"count":2, "name": "Beach Court", "number":"167", "set": "SVI"},{"count":2, "name": "Forest Seal Stone", "number":"156", "set": "SIT"},{"count":1, "name": "Bravery Charm", "number":"173", "set": "PAL"},{"count":1, "name": "Lost Vacuum", "number":"135", "set": "CRZ"},{"count":2, "name": "Escape Rope", "number":"125", "set": "BST"},{"count":4, "name": "Ultra Ball", "number":"150", "set": "BRS"},{"count":1, "name": "Nest Ball", "number":"181", "set": "SVI"},{"count":4, "name": "Electric Generator", "number":"170", "set": "SVI"},{"count":1, "name": "Switch Cart", "number":"154", "set": "ASR"},{"count":2, "name": "Judge", "number":"235", "set": "FST"},{"count":1, "name": "Iono", "number":"185", "set": "PAL"},{"count":3, "name": "Boss's Orders", "number":"132", "set": "BRS"},{"count":1, "name": "Penny", "number":"183", "set": "SVI"},{"count":4, "name": "Professor's Research", "number":"147", "set": "BRS"},{"count":1, "name": "Arven", "number":"186", "set": "OBF"}],"energy":[{"count":14, "name": "Lightning Energy - Basic", "number":"155", "set": "CRZ"}]}
    },
    {
        "name": "Omar Ben-Gacem",
        "flag": "UK",
        "placing": 166,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 6,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Snorlax",
                    "number": "143",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Dang Pho",
        "flag": "US",
        "placing": 167,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 4,
            "ties": 5
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Jake Abrams",
        "flag": "US",
        "placing": 168,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 6,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "118",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Echoing Horn",
                    "number": "136",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "June Norber",
        "flag": "US",
        "placing": 169,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 6,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "GG49",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Trekking Shoes",
                    "number": "156",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Owen Johnson",
        "flag": "CA",
        "placing": 170,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 7,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Kirlia",
                    "number": "68",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "67",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Kirlia",
                    "number": "60",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 2,
                    "name": "Reversal Energy - Special",
                    "number": "192",
                    "set": "PAL"
                },
                {
                    "count": 10,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Jack Bray",
        "flag": "US",
        "placing": 171,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 7,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Comfey",
                    "number": "79",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Temple of Sinnoh",
                    "number": "155",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Jet Energy - Special",
                    "number": "190",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Victor Carrillo",
        "flag": "US",
        "placing": 172,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 7,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "185",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "202",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "SWSH272",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Lumineon V",
                    "number": "156",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "155",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu V",
                    "number": "151",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Single Strike Urshifu VMAX",
                    "number": "168",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                }
            ]
        }
    },
    {
        "name": "Andres Estrada",
        "flag": "US",
        "placing": 173,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 7,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Mew V",
                    "number": "250",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Mew V",
                    "number": "251",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Mew VMAX",
                    "number": "269",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Mew VMAX",
                    "number": "TG30",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Genesect V",
                    "number": "254",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Genesect V",
                    "number": "255",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Oricorio",
                    "number": "GG04",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Maxim Korobov",
        "flag": "US",
        "placing": 174,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Comfey",
                    "number": "GG14",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Comfey",
                    "number": "SWSH242",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Sableye",
                    "number": "70",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Cramorant",
                    "number": "50",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Dragonite V",
                    "number": "SWSH154",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Drapion V",
                    "number": "182",
                    "set": "LOR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Mirage Gate",
                    "number": "163",
                    "set": "LOR"
                },
                {
                    "count": 4,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Pokegear 3.0",
                    "number": "174",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "PokeStop",
                    "number": "68",
                    "set": "PGO"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                },
                {
                    "count": 3,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 2,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Mateo Thompson Soto",
        "flag": "US",
        "placing": 175,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Skwovet",
                    "number": "222",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Arceus V",
                    "number": "122",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Arceus VSTAR",
                    "number": "123",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "111",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Bibarel",
                    "number": "121",
                    "set": "BRS"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Serena",
                    "number": "164",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Raihan",
                    "number": "140",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Cheren's Care",
                    "number": "134",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Scott Cottrell",
        "flag": "US",
        "placing": 176,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 5,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Trekking Shoes",
                    "number": "156",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Harrison Zipp",
        "flag": "US",
        "placing": 177,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Miraidon ex",
                    "number": "253",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Mareep",
                    "number": "GG34",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Flaaffy",
                    "number": "TG03",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "GG41",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Raikou V",
                    "number": "48",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Raichu V",
                    "number": "158",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Zeraora",
                    "number": "56",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "264",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arven",
                    "number": "186",
                    "set": "OBF"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Electric Generator",
                    "number": "170",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Bravery Charm",
                    "number": "173",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 14,
                    "name": "Lightning Energy - Basic",
                    "number": "155",
                    "set": "CRZ"
                }
            ]
        }
    },
    {
        "name": "Michael Zheng",
        "flag": "US",
        "placing": 178,
        "event": "Pittsburgh",
        "record": {
            "wins": 7,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "60",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Genesect V",
                    "number": "254",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Oricorio",
                    "number": "42",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Trekking Shoes",
                    "number": "156",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Miguel Arocho",
        "flag": "US",
        "placing": 179,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 6,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Charmander",
                    "number": "44",
                    "set": "SVP"
                },
                {
                    "count": 3,
                    "name": "Charizard ex",
                    "number": "223",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Arceus V",
                    "number": "166",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Arceus VSTAR",
                    "number": "GG70",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Pidgey",
                    "number": "207",
                    "set": "OBF"
                },
                {
                    "count": 2,
                    "name": "Pidgeot ex",
                    "number": "225",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "GG10",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Radiant Charizard",
                    "number": "20",
                    "set": "CRZ"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Artazon",
                    "number": "229",
                    "set": "OBF"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 4,
                    "name": "Colress's Experiment",
                    "number": "155",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Jacq",
                    "number": "175",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                }
            ],
            "energy": [
                {
                    "count": 8,
                    "name": "Fire Energy - Basic",
                    "number": "153",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Nhan Le",
        "flag": "US",
        "placing": 180,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 1,
            "ties": 3
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Gardevoir ex",
                    "number": "86",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Gardevoir",
                    "number": "61",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Cresselia",
                    "number": "74",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Ralts",
                    "number": "84",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Zacian V",
                    "number": "16",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Mew",
                    "number": "11",
                    "set": "CEL"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "41",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Ralts",
                    "number": "60",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Kirlia",
                    "number": "SWSH271",
                    "set": "PR"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Level Ball",
                    "number": "129",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Worker",
                    "number": "167",
                    "set": "SIT"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 2,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Fog Crystal",
                    "number": "140",
                    "set": "CRE"
                }
            ],
            "energy": [
                {
                    "count": 12,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Andrew Dombroski",
        "flag": "US",
        "placing": 181,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 5,
            "ties": 2
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Tyranitar V",
                    "number": "97",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Lugia V",
                    "number": "138",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Yveltal",
                    "number": "175",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Radiant Tsareena",
                    "number": "16",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Lugia VSTAR",
                    "number": "139",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Pumpkaboo",
                    "number": "76",
                    "set": "EVS"
                },
                {
                    "count": 4,
                    "name": "Archeops",
                    "number": "147",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "SWSH250",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Stonjourner",
                    "number": "84",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Squawkabilly ex",
                    "number": "264",
                    "set": "PAL"
                }
            ],
            "trainer": [
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Professor Burnet",
                    "number": "SWSH167",
                    "set": "PR"
                },
                {
                    "count": 2,
                    "name": "Mesagoza",
                    "number": "178",
                    "set": "SVI"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Capturing Aroma",
                    "number": "153",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Urn of Vitality",
                    "number": "139",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Collapsed Stadium",
                    "number": "137",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 3,
                    "name": "Gift Energy - Special",
                    "number": "171",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Single Strike Energy - Special",
                    "number": "141",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Joseph Horth",
        "flag": "US",
        "placing": 182,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Inteleon VMAX",
                    "number": "79",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Inteleon V",
                    "number": "78",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu VMAX",
                    "number": "88",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Rapid Strike Urshifu V",
                    "number": "87",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Octillery",
                    "number": "37",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Remoraid",
                    "number": "36",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Medicham V",
                    "number": "83",
                    "set": "EVS"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "40",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Spiritomb",
                    "number": "89",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Radiant Alakazam",
                    "number": "59",
                    "set": "SIT"
                }
            ],
            "trainer": [
                {
                    "count": 2,
                    "name": "Korrina's Focus",
                    "number": "128",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Melony",
                    "number": "TG26",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Giacomo",
                    "number": "182",
                    "set": "PAL"
                },
                {
                    "count": 1,
                    "name": "Klara",
                    "number": "145",
                    "set": "CRE"
                },
                {
                    "count": 1,
                    "name": "Cheryl",
                    "number": "123",
                    "set": "BST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Energy Search",
                    "number": "128",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Energy Retrieval",
                    "number": "127",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 3,
                    "name": "Tower of Waters",
                    "number": "138",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Rapid Strike Energy - Special",
                    "number": "140",
                    "set": "BST"
                },
                {
                    "count": 6,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Sammy Allen",
        "flag": "US",
        "placing": 183,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 6,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 3,
                    "name": "Chien-Pao ex",
                    "number": "236",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Frigibax",
                    "number": "208",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Baxcalibur",
                    "number": "210",
                    "set": "PAL"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "GG29",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Bibarel",
                    "number": "GG25",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Lumineon V",
                    "number": "155",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Radiant Greninja",
                    "number": "46",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Manaphy",
                    "number": "GG06",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Kyogre",
                    "number": "36",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Origin Forme Palkia VSTAR",
                    "number": "192",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Origin Forme Palkia V",
                    "number": "SWSH253",
                    "set": "PR"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Irida",
                    "number": "147",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Superior Energy Retrieval",
                    "number": "189",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Canceling Cologne",
                    "number": "136",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Rare Candy",
                    "number": "142",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Skaters' Park",
                    "number": "242",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Super Rod",
                    "number": "188",
                    "set": "PAL"
                }
            ],
            "energy": [
                {
                    "count": 9,
                    "name": "Water Energy - Basic",
                    "number": "231",
                    "set": "CRE"
                }
            ]
        }
    },
    {
        "name": "Zoe Jacobsen",
        "flag": "US",
        "placing": 184,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 2,
                    "name": "Giratina V",
                    "number": "130",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Giratina VSTAR",
                    "number": "131",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Arceus V",
                    "number": "122",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Arceus V",
                    "number": "SWSH204",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Arceus VSTAR",
                    "number": "123",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arceus VSTAR",
                    "number": "176",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Arceus VSTAR",
                    "number": "184",
                    "set": "BRS"
                },
                {
                    "count": 2,
                    "name": "Bidoof",
                    "number": "111",
                    "set": "CRZ"
                },
                {
                    "count": 1,
                    "name": "Bibarel",
                    "number": "SWSH188",
                    "set": "PR"
                },
                {
                    "count": 1,
                    "name": "Bibarel",
                    "number": "121",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Skwovet",
                    "number": "222",
                    "set": "SVI"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 3,
                    "name": "Trekking Shoes",
                    "number": "156",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Professor's Research",
                    "number": "147",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Cleansing Gloves",
                    "number": "136",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Switch",
                    "number": "147",
                    "set": "CES"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Psychic Energy - Basic",
                    "number": "232",
                    "set": "CRE"
                },
                {
                    "count": 4,
                    "name": "Grass Energy - Basic",
                    "number": "152",
                    "set": "CRZ"
                },
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "V Guard Energy - Special",
                    "number": "169",
                    "set": "SIT"
                }
            ]
        }
    },
    {
        "name": "Charlie Kerr",
        "flag": "US",
        "placing": 185,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "254",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "250",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "TG30",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Eiscue",
                    "number": "44",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Meloetta",
                    "number": "124",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Hisuian Heavy Ball",
                    "number": "146",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 2,
                    "name": "Elesa's Sparkle",
                    "number": "147",
                    "set": "CRZ"
                },
                {
                    "count": 2,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 1,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Iono",
                    "number": "185",
                    "set": "PAL"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 1,
                    "name": "Crystal Cave",
                    "number": "144",
                    "set": "EVS"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Fusion Strike Energy - Special",
                    "number": "244",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    },
    {
        "name": "Jeffrey Chau",
        "flag": "CA",
        "placing": 186,
        "event": "Pittsburgh",
        "record": {
            "wins": 6,
            "losses": 4,
            "ties": 1
        },
        "decklist": {
            "pokemon": [
                {
                    "count": 4,
                    "name": "Mew V",
                    "number": "113",
                    "set": "FST"
                },
                {
                    "count": 3,
                    "name": "Mew VMAX",
                    "number": "114",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Genesect V",
                    "number": "185",
                    "set": "FST"
                }
            ],
            "trainer": [
                {
                    "count": 4,
                    "name": "Battle VIP Pass",
                    "number": "225",
                    "set": "FST"
                },
                {
                    "count": 4,
                    "name": "Cram-o-matic",
                    "number": "229",
                    "set": "FST"
                },
                {
                    "count": 2,
                    "name": "Escape Rope",
                    "number": "125",
                    "set": "BST"
                },
                {
                    "count": 2,
                    "name": "Feather Ball",
                    "number": "141",
                    "set": "ASR"
                },
                {
                    "count": 2,
                    "name": "Nest Ball",
                    "number": "181",
                    "set": "SVI"
                },
                {
                    "count": 1,
                    "name": "Pal Pad",
                    "number": "172",
                    "set": "SSH"
                },
                {
                    "count": 4,
                    "name": "Power Tablet",
                    "number": "236",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Switch Cart",
                    "number": "154",
                    "set": "ASR"
                },
                {
                    "count": 4,
                    "name": "Ultra Ball",
                    "number": "150",
                    "set": "BRS"
                },
                {
                    "count": 4,
                    "name": "Path to the Peak",
                    "number": "213",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Boss's Orders",
                    "number": "132",
                    "set": "BRS"
                },
                {
                    "count": 3,
                    "name": "Judge",
                    "number": "235",
                    "set": "FST"
                },
                {
                    "count": 1,
                    "name": "Roxanne",
                    "number": "150",
                    "set": "ASR"
                },
                {
                    "count": 1,
                    "name": "Box of Disaster",
                    "number": "154",
                    "set": "LOR"
                },
                {
                    "count": 2,
                    "name": "Choice Belt",
                    "number": "211",
                    "set": "ASR"
                },
                {
                    "count": 3,
                    "name": "Forest Seal Stone",
                    "number": "156",
                    "set": "SIT"
                },
                {
                    "count": 1,
                    "name": "Lost City",
                    "number": "161",
                    "set": "LOR"
                },
                {
                    "count": 3,
                    "name": "Lost Vacuum",
                    "number": "135",
                    "set": "CRZ"
                }
            ],
            "energy": [
                {
                    "count": 4,
                    "name": "Double Turbo Energy - Special",
                    "number": "216",
                    "set": "ASR"
                }
            ]
        }
    }
]

// for (let i = 0; i < pittResults.length; i++) {
//     console.log(pittResults[i])
// }

// pittResults.forEach(function (e) {
//     console.log(e)
// })

// pittResults.forEach(a => {
//     delete a.resistances;
//     delete a.drop;
//     delete a.rounds;
// })
// console.log('day 2 results info', pittResults)

//masters
function displayList(array = []) {
    masterList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');

        let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', "../../../assets/flag-codes/" + item.flag + ".png");
        // else {
        //     flagImg.setAttribute('src', "../../../assets/flags/unknown.png");
        // }

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

        let firstSprite = document.createElement('img');
        firstSprite.classList.add('sprite');
        firstSprite.setAttribute('src', item.sprite1);
        let secondSprite = document.createElement('img');
        secondSprite.classList.add('sprite');
        secondSprite.classList.add('second-sprite');
        secondSprite.setAttribute('src', item.sprite2);
        let listIcon = document.createElement('img');
        listIcon.classList.add('list-icon');
        listIcon.setAttribute('src', "../../../assets/list-icon.png");

        item_element.appendChild(title);
        title.appendChild(playerName);
        playerName.appendChild(flagImg);
        playerName.append(item.name);
        title.appendChild(deck);
        deck.appendChild(firstSprite);
        deck.appendChild(secondSprite);
        deck.appendChild(listIcon);

        if (item.decklist) {
            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.placing + ". " + item.name + " -" + " " + item.event + " Regionals";

                const setConvert = {
                    // sv
                    "OBF": "sv3",
                    "PAL": "sv2",
                    "SVI": "sv1",
                    // "PR-SV": "svp"
                    // swsh
                    "CRZ": "swsh12pt5",
                    "SIT": "swsh12",
                    "LOR": "swsh11",
                    "PGO": "pgo",
                    "ASR": "swsh10",
                    "BRS": "swsh9",
                    "FST": "swsh8",
                    "CEL": "cel25",
                    "EVS": "swsh7",
                    "CRE": "swsh6",
                    "BST": "swsh5",
                    "SHF": "swsh45",
                    "VIV": "swsh4",
                    "CPA": "swsh35",
                    "DAA": "swsh3",
                    "RCL": "swsh2",
                    "SSH": "swsh1"
                }

                for(const cardType in item.decklist) {
                    item.decklist[cardType].forEach(card => {

                        let cardSpace = document.createElement('div');
                        cardSpace.classList.add('pokemon-card');
    
                        let pokeCard = document.createElement('img');
                        pokeCard.classList.add('pok-card-small')
    
                        pokeCard.setAttribute('alt', card.name + " " + card.set);
                        pokeCard.setAttribute('src', "https://images.pokemontcg.io/" + setConvert[card.set] + "/" + card.number + ".png");
                        if (card.set === "PR") {
                            pokeCard.setAttribute('src', "https://ptcglegends.com/assets/cards/promo/PR-" + card.number + ".png");
                        }

                        let zoomedImg = document.getElementById("insert-zoomed-img");
                        let zoombox = document.getElementById("zoomed-bg");

                        pokeCard.onclick = () => {
                            zoomedImg.setAttribute('src', "https://images.pokemontcg.io/" + setConvert[card.set] + "/" + card.number + "_hires.png");
                            zoombox.className = "show";
                        };
                        zoombox.onclick = () => {
                            zoombox.className = "";
                        };

                        item.decklist.pokemon.sort(function(a, b){return a-b});
                        item.decklist.trainer.sort(function(a, b){return a-b});
                        item.decklist.energy.sort(function(a, b){return a-b});

                        if (deck.radiusCard === true) {
                            pokeCard.classList.add('radius-card')
                        }

                        let numberCounter = document.createElement('img');
                        numberCounter.classList.add('num-1')
                        numberCounter.setAttribute('src', "../../../assets/card-count/" + card.count + ".png");

                        cardSpace.appendChild(pokeCard);
                        cardSpace.appendChild(numberCounter);

                        modalBottom.appendChild(cardSpace);
                        modalX.addEventListener('click', () => {
                            modal.style.display = 'none';
                            behind.style.display = 'none';
                            cardSpace.remove();
                        })
                        behind.addEventListener('click', () => {
                            modal.style.display = 'none';
                            behind.style.display = 'none';
                            cardSpace.remove();
                        })
                    })
                }
            })
        }
        masterList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
