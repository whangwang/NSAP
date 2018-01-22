var express = require('express');
var request = require("request");
var http = require("https");
var nba = [
  {
    "team": "Boston Celtics",
    "logo": "https://stats.nba.com/media/img/teams/logos/BOS_logo.svg",
    "team_id": "1610612738",
    "color": "#3B8349",
    "player": []
  },{
    "team": "Brooklyn Nets",
    "logo": "https://stats.nba.com/media/img/teams/logos/BKN_logo.svg",
    "team_id": "1610612751",
    "color": "#000000",
    "player": []
  },{
    "team": "New York Knicks",
    "logo": "https://stats.nba.com/media/img/teams/logos/NYK_logo.svg",
    "team_id": "1610612752",
    "color": "#EF6430",
    "player": []
  },{
    "team": "Philadelphia 76ers",
    "logo": "https://stats.nba.com/media/img/teams/logos/PHI_logo.svg",
    "team_id": "1610612755",
    "color": "#186BB6",
    "player": []
  },{
    "team": "Toronto Raptors",
    "logo": "https://stats.nba.com/media/img/teams/logos/TOR_logo.svg",
    "team_id": "1610612761",
    "color": "#661A1F",
    "player": []
  },{
    "team": "Chicago Bulls",
    "logo": "https://stats.nba.com/media/img/teams/logos/CHI_logo.svg",
    "team_id": "1610612741",
    "color": "#CF3D41",
    "player": []
  },{
    "team": "Cleveland Cavaliers",
    "logo": "https://stats.nba.com/media/img/teams/logos/CLE_logo.svg",
    "team_id": "1610612739",
    "color": "#6F263D",
    "player": []
  },{
    "team": "Detroit Pistonss",
    "logo": "https://stats.nba.com/media/img/teams/logos/DET_logo.svg",
    "team_id": "1610612765",
    "color": "#DE4131",
    "player": []
  },{
    "team": "Indiana Pacers",
    "logo": "https://stats.nba.com/media/img/teams/logos/IND_logo.svg",
    "team_id": "1610612754",
    "color": "#F8BB32",
    "player": []
  },{
    "team": "Milwaukee Bucks",
    "logo": "https://stats.nba.com/media/img/teams/logos/MIL_logo.svg",
    "team_id": "1610612749",
    "color": "#305931",
    "player": []
  },{
    "team": "Atlanta Hawks",
    "logo": "https://stats.nba.com/media/img/teams/logos/ATL_logo.svg",
    "team_id": "1610612737",
    "color": "#E0433E",
    "player": []
  },{
    "team": "Charlotte Hornets",
    "logo": "https://stats.nba.com/media/img/teams/logos/CHA_logo.svg",
    "team_id": "1610612766",
    "color": "#276A87",
    "player": []
  },{
    "team": "Miami Heat",
    "logo": "https://stats.nba.com/media/img/teams/logos/MIA_logo.svg",
    "team_id": "1610612748",
    "color": "#992B2E",
    "player": []
  },{
    "team": "Orlando Magic",
    "logo": "https://stats.nba.com/media/img/teams/logos/ORL_logo.svg",
    "team_id": "1610612753",
    "color": "#2B7FC1",
    "player": []
  },{
    "team": "Washington Wizards",
    "logo": "https://stats.nba.com/media/img/teams/logos/WAS_logo.svg",
    "team_id": "1610612764",
    "color": "#D03C2D",
    "player": []
  },{
    "team": "Denver Nuggets",
    "logo": "https://stats.nba.com/media/img/teams/logos/DEN_logo.svg",
    "team_id": "1610612743",
    "color": "#F8BD36",
    "player": []
  },{
    "team": "Minnesota Timberwolves",
    "logo": "https://stats.nba.com/media/img/teams/logos/MIN_logo.svg",
    "team_id": "1610612750",
    "color": "#0D2240",
    "player": []
  },{
    "team": "Oklahoma City Thunder",
    "logo": "https://stats.nba.com/media/img/teams/logos/OKC_logo.svg",
    "team_id": "1610612760",
    "color": "#224574",
    "player": []
  },{
    "team": "Portland Trail Blazers",
    "logo": "https://stats.nba.com/media/img/teams/logos/POR_logo.svg",
    "team_id": "1610612757",
    "color": "#90271D",
    "player": []
  },{
    "team": "Utah Jazz",
    "logo": "https://stats.nba.com/media/img/teams/logos/UTA_logo.svg",
    "team_id": "1610612762",
    "color": "#0D2240",
    "player": []
  },{
    "team": "Golden State Warriors",
    "logo": "https://stats.nba.com/media/img/teams/logos/GSW_logo.svg",
    "team_id": "1610612744",
    "color": "#1668B3",
    "player": []
  },{
    "team": "LA Clippers",
    "logo": "https://stats.nba.com/media/img/teams/logos/LAC_logo.svg",
    "team_id": "1610612746",
    "color": "#ED484C",
    "player": []
  },{
    "team": "Los Angeles Lakers",
    "logo": "https://stats.nba.com/media/img/teams/logos/LAL_logo.svg",
    "team_id": "1610612747",
    "color": "#572981",
    "player": []
  },{
    "team": "Phoenix Suns",
    "logo": "https://stats.nba.com/media/img/teams/logos/PHX_logo.svg",
    "team_id": "1610612756",
    "color": "#E6962E",
    "player": []
  },{
    "team": "Sacramento Kings",
    "logo": "https://stats.nba.com/media/img/teams/logos/SAC_logo.svg",
    "team_id": "1610612758",
    "color": "#5B2B82",
    "player": []
  },{
    "team": "Dallas Mavericks",
    "logo": "https://stats.nba.com/media/img/teams/logos/DAL_logo.svg",
    "team_id": "1610612742",
    "color": "#1B65A0",
    "player": []
  },{
    "team": "Houston Rockets",
    "logo": "https://stats.nba.com/media/img/teams/logos/HOU_logo.svg",
    "team_id": "1610612745",
    "color": "#CF3D41",
    "player": []
  },{
    "team": "Memphis Grizzlies",
    "logo": "https://stats.nba.com/media/img/teams/logos/MEM_logo.svg",
    "team_id": "1610612763",
    "color": "#6189B9",
    "player": []
  },{
    "team": "New Orleans Pelicans",
    "logo": "https://stats.nba.com/media/img/teams/logos/NOP_logo.svg",
    "team_id": "1610612740",
    "color": "#897B58",
    "player": []
  },{
    "team": "San Antonio Spurs",
    "logo": "https://stats.nba.com/media/img/teams/logos/SAS_logo.svg",
    "team_id": "1610612759",
    "color": "#1F1F1F",
    "player": []
  }
]
var nba_player = [
  {
    "PlayerId": "greenac01",
    "PlayerName": "A.C. Green",
    "Year": "1986-2001",
    "Num": 0
  },
  {
    "PlayerId": "bramlaj01",
    "PlayerName": "A.J. Bramlett",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "engliaj01",
    "PlayerName": "A.J. English",
    "Year": "1991-1992",
    "Num": 0
  },
  {
    "PlayerId": "guytoaj01",
    "PlayerName": "A.J. Guyton",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "hammoaj01",
    "PlayerName": "A.J. Hammons",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "matthaj01",
    "PlayerName": "A.J. Matthews",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "priceaj01",
    "PlayerName": "A.J. Price",
    "Year": "2010-2015",
    "Num": 0
  },
  {
    "PlayerId": "slaugaj01",
    "PlayerName": "A.J. Slaughter",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wyndeaj01",
    "PlayerName": "A.J. Wynder",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "holtaw01",
    "PlayerName": "A.W. Holt",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "brookaa01",
    "PlayerName": "Aaron Brooks",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "craftaa01",
    "PlayerName": "Aaron Craft",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gordoaa01",
    "PlayerName": "Aaron Gordon",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "grayaa01",
    "PlayerName": "Aaron Gray",
    "Year": "2008-2014",
    "Num": 0
  },
  {
    "PlayerId": "harriaa01",
    "PlayerName": "Aaron Harrison",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "jamesaa01",
    "PlayerName": "Aaron James",
    "Year": "1975-1979",
    "Num": 0
  },
  {
    "PlayerId": "mckieaa01",
    "PlayerName": "Aaron McKie",
    "Year": "1995-2007",
    "Num": 0
  },
  {
    "PlayerId": "milesaa01",
    "PlayerName": "Aaron Miles",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "swinsaa01",
    "PlayerName": "Aaron Swinson",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "whiteaa01",
    "PlayerName": "Aaron White",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "williaa01",
    "PlayerName": "Aaron Williams",
    "Year": "1994-2008",
    "Num": 0
  },
  {
    "PlayerId": "naderab01",
    "PlayerName": "Abdel Nader",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "gaddyab01",
    "PlayerName": "Abdul Gaddy",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jeelaab01",
    "PlayerName": "Abdul Jeelani",
    "Year": "1980-1981",
    "Num": 0
  },
  {
    "PlayerId": "earlac01",
    "PlayerName": "Acie Earl",
    "Year": "1994-1997",
    "Num": 0
  },
  {
    "PlayerId": "lawac01",
    "PlayerName": "Acie Law",
    "Year": "2008-2011",
    "Num": 0
  },
  {
    "PlayerId": "hangaad01",
    "PlayerName": "Adam Hanga",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "harriad01",
    "PlayerName": "Adam Harrington",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "keefead01",
    "PlayerName": "Adam Keefe",
    "Year": "1993-2001",
    "Num": 0
  },
  {
    "PlayerId": "morriad01",
    "PlayerName": "Adam Morrison",
    "Year": "2007-2010",
    "Num": 0
  },
  {
    "PlayerId": "foylead01",
    "PlayerName": "Adonal Foyle",
    "Year": "1998-2009",
    "Num": 0
  },
  {
    "PlayerId": "jordaad01",
    "PlayerName": "Adonis Jordan",
    "Year": "1994-1999",
    "Num": 0
  },
  {
    "PlayerId": "thomaad01",
    "PlayerName": "Adonis Thomas",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "paynead01",
    "PlayerName": "Adreian Payne",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "brancad01",
    "PlayerName": "Adrian Branch",
    "Year": "1987-1990",
    "Num": 0
  },
  {
    "PlayerId": "caldwad01",
    "PlayerName": "Adrian Caldwell",
    "Year": "1990-1998",
    "Num": 0
  },
  {
    "PlayerId": "dantlad01",
    "PlayerName": "Adrian Dantley",
    "Year": "1977-1991",
    "Num": 0
  },
  {
    "PlayerId": "griffad01",
    "PlayerName": "Adrian Griffin",
    "Year": "2000-2008",
    "Num": 0
  },
  {
    "PlayerId": "smithad01",
    "PlayerName": "Adrian Smith",
    "Year": "1962-1972",
    "Num": 0
  },
  {
    "PlayerId": "mitchak01",
    "PlayerName": "Akil Mitchell",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "attleal01",
    "PlayerName": "Al Attles",
    "Year": "1961-1971",
    "Num": 0
  },
  {
    "PlayerId": "beardal01",
    "PlayerName": "Al Beard",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "biancal01",
    "PlayerName": "Al Bianchi",
    "Year": "1957-1966",
    "Num": 0
  },
  {
    "PlayerId": "brighal01",
    "PlayerName": "Al Brightman",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "butleal01",
    "PlayerName": "Al Butler",
    "Year": "1962-1965",
    "Num": 0
  },
  {
    "PlayerId": "carlsal01",
    "PlayerName": "Al Carlson",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "cervial01",
    "PlayerName": "Al Cervi",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "cuetoal01",
    "PlayerName": "Al Cueto",
    "Year": "1970-1971",
    "Num": 0
  },
  {
    "PlayerId": "eberhal01",
    "PlayerName": "Al Eberhard",
    "Year": "1975-1978",
    "Num": 0
  },
  {
    "PlayerId": "ferraal01",
    "PlayerName": "Al Ferrari",
    "Year": "1956-1963",
    "Num": 0
  },
  {
    "PlayerId": "flemial01",
    "PlayerName": "Al Fleming",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "guokaal01",
    "PlayerName": "Al Guokas",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "hairsal01",
    "PlayerName": "Al Hairston",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "harrial01",
    "PlayerName": "Al Harrington",
    "Year": "1999-2014",
    "Num": 0
  },
  {
    "PlayerId": "henryal01",
    "PlayerName": "Al Henry",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "horfoal01",
    "PlayerName": "Al Horford",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "jacksal01",
    "PlayerName": "Al Jackson",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "jeffeal01",
    "PlayerName": "Al Jefferson",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "lucasal01",
    "PlayerName": "Al Lucas",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "lujacal01",
    "PlayerName": "Al Lujack",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "masinal01",
    "PlayerName": "Al Masino",
    "Year": "1953-1954",
    "Num": 0
  },
  {
    "PlayerId": "miksial01",
    "PlayerName": "Al Miksis",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "negraal01",
    "PlayerName": "Al Negratti",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "rogesal01",
    "PlayerName": "Al Roges",
    "Year": "1954-1955",
    "Num": 0
  },
  {
    "PlayerId": "salvaal01",
    "PlayerName": "Al Salvadori",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "sandeal01",
    "PlayerName": "Al Sanders",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "skinnal01",
    "PlayerName": "Al Skinner",
    "Year": "1975-1980",
    "Num": 0
  },
  {
    "PlayerId": "smithal01",
    "PlayerName": "Al Smith",
    "Year": "1972-1976",
    "Num": 0
  },
  {
    "PlayerId": "thornal01",
    "PlayerName": "Al Thornton",
    "Year": "2008-2011",
    "Num": 0
  },
  {
    "PlayerId": "tuckeal01",
    "PlayerName": "Al Tucker",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "willial01",
    "PlayerName": "Al Williams",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "woodal01",
    "PlayerName": "Al Wood",
    "Year": "1982-1987",
    "Num": 0
  },
  {
    "PlayerId": "aminual01",
    "PlayerName": "Al-Farouq Aminu",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "abdelal01",
    "PlayerName": "Alaa Abdelnaby",
    "Year": "1991-1995",
    "Num": 0
  },
  {
    "PlayerId": "aminual02",
    "PlayerName": "Alade Aminu",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "anderal01",
    "PlayerName": "Alan Anderson",
    "Year": "2006-2017",
    "Num": 1
  },
  {
    "PlayerId": "hardyal01",
    "PlayerName": "Alan Hardy",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "hendeal01",
    "PlayerName": "Alan Henderson",
    "Year": "1996-2007",
    "Num": 0
  },
  {
    "PlayerId": "oggal01",
    "PlayerName": "Alan Ogg",
    "Year": "1991-1993",
    "Num": 0
  },
  {
    "PlayerId": "sawyeal01",
    "PlayerName": "Alan Sawyer",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "willial03",
    "PlayerName": "Alan Williams",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "tuckeal02",
    "PlayerName": "Alando Tucker",
    "Year": "2008-2010",
    "Num": 0
  },
  {
    "PlayerId": "kingal01",
    "PlayerName": "Albert King",
    "Year": "1982-1992",
    "Num": 0
  },
  {
    "PlayerId": "miralal01",
    "PlayerName": "Albert Miralles",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "brownal01",
    "PlayerName": "Alec Brown",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "burksal01",
    "PlayerName": "Alec Burks",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "kesslal01",
    "PlayerName": "Alec Kessler",
    "Year": "1991-1994",
    "Num": 0
  },
  {
    "PlayerId": "peteral01",
    "PlayerName": "Alec Peters",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "djordal01",
    "PlayerName": "Aleksandar Djordjevic",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "pavloal02",
    "PlayerName": "Aleksandar Pavlovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "radojal01",
    "PlayerName": "Aleksandar Radojevic",
    "Year": "2000-2005",
    "Num": 0
  },
  {
    "PlayerId": "vezenal01",
    "PlayerName": "Aleksandar Vezenkov",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gential01",
    "PlayerName": "Alessandro Gentile",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "abrinal01",
    "PlayerName": "Alex Abrines",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "ackeral01",
    "PlayerName": "Alex Acker",
    "Year": "2006-2009",
    "Num": 0
  },
  {
    "PlayerId": "blackal01",
    "PlayerName": "Alex Blackwell",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "bradlal02",
    "PlayerName": "Alex Bradley",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "carusal01",
    "PlayerName": "Alex Caruso",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "englial01",
    "PlayerName": "Alex English",
    "Year": "1977-1991",
    "Num": 0
  },
  {
    "PlayerId": "garcial01",
    "PlayerName": "Alex Garcia",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "grozaal01",
    "PlayerName": "Alex Groza",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "hamilal01",
    "PlayerName": "Alex Hamilton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hannual01",
    "PlayerName": "Alex Hannum",
    "Year": "1950-1957",
    "Num": 0
  },
  {
    "PlayerId": "kirkal01",
    "PlayerName": "Alex Kirk",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "lenal01",
    "PlayerName": "Alex Len",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "oriakal01",
    "PlayerName": "Alex Oriakhi",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "poythal01",
    "PlayerName": "Alex Poythress",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "scaleal01",
    "PlayerName": "Alex Scales",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "stephal01",
    "PlayerName": "Alex Stepheson",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "stivral01",
    "PlayerName": "Alex Stivrins",
    "Year": "1986-1993",
    "Num": 0
  },
  {
    "PlayerId": "johnsal01",
    "PlayerName": "Alexander Johnson",
    "Year": "2007-2008",
    "Num": 0
  },
  {
    "PlayerId": "volkoal01",
    "PlayerName": "Alexander Volkov",
    "Year": "1990-1992",
    "Num": 0
  },
  {
    "PlayerId": "paranal01",
    "PlayerName": "Alexandre Paranhos",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "shvedal01",
    "PlayerName": "Alexey Shved",
    "Year": "2013-2015",
    "Num": 0
  },
  {
    "PlayerId": "ajincal01",
    "PlayerName": "Alexis Ajinca",
    "Year": "2009-2017",
    "Num": 1
  },
  {
    "PlayerId": "mckinal01",
    "PlayerName": "Alfonzo McKinnie",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "mcguial01",
    "PlayerName": "Alfred McGuire",
    "Year": "1952-1955",
    "Num": 0
  },
  {
    "PlayerId": "hugheri01",
    "PlayerName": "Alfredrick Hughes",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "bristal01",
    "PlayerName": "Allan Bristow",
    "Year": "1974-1983",
    "Num": 0
  },
  {
    "PlayerId": "houstal01",
    "PlayerName": "Allan Houston",
    "Year": "1994-2005",
    "Num": 0
  },
  {
    "PlayerId": "rayal01",
    "PlayerName": "Allan Ray",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "crabbal01",
    "PlayerName": "Allen Crabbe",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "iversal01",
    "PlayerName": "Allen Iverson",
    "Year": "1997-2010",
    "Num": 0
  },
  {
    "PlayerId": "leaveal01",
    "PlayerName": "Allen Leavell",
    "Year": "1980-1989",
    "Num": 0
  },
  {
    "PlayerId": "murphal01",
    "PlayerName": "Allen Murphy",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "mcguial02",
    "PlayerName": "Allie McGuire",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "bradlal01",
    "PlayerName": "Alonzo Bradley",
    "Year": "1978-1980",
    "Num": 0
  },
  {
    "PlayerId": "geeal01",
    "PlayerName": "Alonzo Gee",
    "Year": "2010-2017",
    "Num": 1
  },
  {
    "PlayerId": "mournal01",
    "PlayerName": "Alonzo Mourning",
    "Year": "1993-2008",
    "Num": 0
  },
  {
    "PlayerId": "kabaal01",
    "PlayerName": "Alpha Kaba",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fordal01",
    "PlayerName": "Alphonso Ford",
    "Year": "1994-1995",
    "Num": 0
  },
  {
    "PlayerId": "fordal02",
    "PlayerName": "Alton Ford",
    "Year": "2002-2004",
    "Num": 0
  },
  {
    "PlayerId": "listeal01",
    "PlayerName": "Alton Lister",
    "Year": "1982-1998",
    "Num": 0
  },
  {
    "PlayerId": "adamsal01",
    "PlayerName": "Alvan Adams",
    "Year": "1976-1988",
    "Num": 0
  },
  {
    "PlayerId": "heggsal01",
    "PlayerName": "Alvin Heggs",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "jonesal01",
    "PlayerName": "Alvin Jones",
    "Year": 2002,
    "Num": 0
  },
  {
    "PlayerId": "roberal01",
    "PlayerName": "Alvin Robertson",
    "Year": "1985-1996",
    "Num": 0
  },
  {
    "PlayerId": "scottal01",
    "PlayerName": "Alvin Scott",
    "Year": "1978-1985",
    "Num": 0
  },
  {
    "PlayerId": "simsal01",
    "PlayerName": "Alvin Sims",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "willial02",
    "PlayerName": "Alvin Williams",
    "Year": "1998-2007",
    "Num": 0
  },
  {
    "PlayerId": "mccasam01",
    "PlayerName": "Amal McCaskill",
    "Year": "1997-2004",
    "Num": 0
  },
  {
    "PlayerId": "stoudam01",
    "PlayerName": "Amar'e Stoudemire",
    "Year": "2003-2016",
    "Num": 0
  },
  {
    "PlayerId": "mbayeam01",
    "PlayerName": "Amath M'Baye",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "brimaam01",
    "PlayerName": "Amida Brimah",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jeffeam01",
    "PlayerName": "Amile Jefferson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnsam01",
    "PlayerName": "Amir Johnson",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "varejan01",
    "PlayerName": "Anderson Varejao",
    "Year": "2005-2017",
    "Num": 1
  },
  {
    "PlayerId": "pattean01",
    "PlayerName": "Andrae Patterson",
    "Year": "1999-2000",
    "Num": 0
  },
  {
    "PlayerId": "blatcan01",
    "PlayerName": "Andray Blatche",
    "Year": "2006-2014",
    "Num": 0
  },
  {
    "PlayerId": "barrean01",
    "PlayerName": "Andre Barrett",
    "Year": "2005-2008",
    "Num": 0
  },
  {
    "PlayerId": "brownan01",
    "PlayerName": "Andre Brown",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "dawkian01",
    "PlayerName": "Andre Dawkins",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "drumman01",
    "PlayerName": "Andre Drummond",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "emmetan01",
    "PlayerName": "Andre Emmett",
    "Year": "2005-2012",
    "Num": 0
  },
  {
    "PlayerId": "iguodan01",
    "PlayerName": "Andre Iguodala",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "mccaran01",
    "PlayerName": "Andre McCarter",
    "Year": "1977-1981",
    "Num": 0
  },
  {
    "PlayerId": "millean02",
    "PlayerName": "Andre Miller",
    "Year": "2000-2016",
    "Num": 0
  },
  {
    "PlayerId": "moorean01",
    "PlayerName": "Andre Moore",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "owensan01",
    "PlayerName": "Andre Owens",
    "Year": "2006-2008",
    "Num": 0
  },
  {
    "PlayerId": "roberan03",
    "PlayerName": "Andre Roberson",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "spencan01",
    "PlayerName": "Andre Spencer",
    "Year": "1993-1994",
    "Num": 0
  },
  {
    "PlayerId": "turnean01",
    "PlayerName": "Andre Turner",
    "Year": "1987-1992",
    "Num": 0
  },
  {
    "PlayerId": "wakefan01",
    "PlayerName": "Andre Wakefield",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "bargnan01",
    "PlayerName": "Andrea Bargnani",
    "Year": "2007-2016",
    "Num": 0
  },
  {
    "PlayerId": "glynian01",
    "PlayerName": "Andreas Glyniadakis",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "kirilan01",
    "PlayerName": "Andrei Kirilenko",
    "Year": "2002-2015",
    "Num": 0
  },
  {
    "PlayerId": "milutan01",
    "PlayerName": "Andreja Milutinovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "guibean01",
    "PlayerName": "Andres Guibert",
    "Year": "1994-1995",
    "Num": 0
  },
  {
    "PlayerId": "nocioan01",
    "PlayerName": "Andres Nocioni",
    "Year": "2005-2012",
    "Num": 0
  },
  {
    "PlayerId": "anderan01",
    "PlayerName": "Andrew Anderson",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "andrean01",
    "PlayerName": "Andrew Andrews",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bogutan01",
    "PlayerName": "Andrew Bogut",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "bynuman01",
    "PlayerName": "Andrew Bynum",
    "Year": "2006-2014",
    "Num": 0
  },
  {
    "PlayerId": "declean01",
    "PlayerName": "Andrew DeClercq",
    "Year": "1996-2005",
    "Num": 0
  },
  {
    "PlayerId": "gazean01",
    "PlayerName": "Andrew Gaze",
    "Year": "1994-1999",
    "Num": 0
  },
  {
    "PlayerId": "goudean01",
    "PlayerName": "Andrew Goudelock",
    "Year": "2012-2016",
    "Num": 0
  },
  {
    "PlayerId": "harrian01",
    "PlayerName": "Andrew Harrison",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "langan01",
    "PlayerName": "Andrew Lang",
    "Year": "1989-2000",
    "Num": 0
  },
  {
    "PlayerId": "lawrean01",
    "PlayerName": "Andrew Lawrence",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "levanan01",
    "PlayerName": "Andrew Levane",
    "Year": "1949-1953",
    "Num": 0
  },
  {
    "PlayerId": "nichoan01",
    "PlayerName": "Andrew Nicholson",
    "Year": "2013-2017",
    "Num": 1
  },
  {
    "PlayerId": "smithan01",
    "PlayerName": "Andrew Smith",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "toneyan01",
    "PlayerName": "Andrew Toney",
    "Year": "1981-1988",
    "Num": 0
  },
  {
    "PlayerId": "whitean01",
    "PlayerName": "Andrew White",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wiggian01",
    "PlayerName": "Andrew Wiggins",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "biedran01",
    "PlayerName": "Andris Biedrins",
    "Year": "2005-2014",
    "Num": 0
  },
  {
    "PlayerId": "duncaan01",
    "PlayerName": "Andy Duncan",
    "Year": "1949-1951",
    "Num": 0
  },
  {
    "PlayerId": "johnsan01",
    "PlayerName": "Andy Johnson",
    "Year": "1959-1962",
    "Num": 0
  },
  {
    "PlayerId": "kostean01",
    "PlayerName": "Andy Kostecka",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "odonnan01",
    "PlayerName": "Andy O'Donnell",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "pankoan01",
    "PlayerName": "Andy Panko",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "phillan01",
    "PlayerName": "Andy Phillip",
    "Year": "1948-1958",
    "Num": 0
  },
  {
    "PlayerId": "rautian01",
    "PlayerName": "Andy Rautins",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "tonkoan01",
    "PlayerName": "Andy Tonkovich",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "toolsan01",
    "PlayerName": "Andy Toolson",
    "Year": "1991-1996",
    "Num": 0
  },
  {
    "PlayerId": "walkean01",
    "PlayerName": "Andy Walker",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "hardaan01",
    "PlayerName": "Anfernee Hardaway",
    "Year": "1994-2008",
    "Num": 0
  },
  {
    "PlayerId": "musian01",
    "PlayerName": "Angelo Musi",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "sharpan01",
    "PlayerName": "Angelo Sharpless",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "truitan01",
    "PlayerName": "Ansley Truitt",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "sesayan01",
    "PlayerName": "Ansu Sesay",
    "Year": "2002-2005",
    "Num": 0
  },
  {
    "PlayerId": "jamisan01",
    "PlayerName": "Antawn Jamison",
    "Year": "1999-2014",
    "Num": 0
  },
  {
    "PlayerId": "tomican01",
    "PlayerName": "Ante Tomic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "zizican01",
    "PlayerName": "Ante Zizic",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "aventan01",
    "PlayerName": "Anthony Avent",
    "Year": "1993-2000",
    "Num": 0
  },
  {
    "PlayerId": "bennean01",
    "PlayerName": "Anthony Bennett",
    "Year": "2014-2017",
    "Num": 1
  },
  {
    "PlayerId": "bonnean01",
    "PlayerName": "Anthony Bonner",
    "Year": "1991-1996",
    "Num": 0
  },
  {
    "PlayerId": "bowiean01",
    "PlayerName": "Anthony Bowie",
    "Year": "1989-1998",
    "Num": 0
  },
  {
    "PlayerId": "brownan02",
    "PlayerName": "Anthony Brown",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "cartean01",
    "PlayerName": "Anthony Carter",
    "Year": "2000-2012",
    "Num": 0
  },
  {
    "PlayerId": "cookan01",
    "PlayerName": "Anthony Cook",
    "Year": "1991-1996",
    "Num": 0
  },
  {
    "PlayerId": "davisan02",
    "PlayerName": "Anthony Davis",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "fredean01",
    "PlayerName": "Anthony Frederick",
    "Year": "1989-1992",
    "Num": 0
  },
  {
    "PlayerId": "goldwan01",
    "PlayerName": "Anthony Goldwire",
    "Year": "1996-2006",
    "Num": 0
  },
  {
    "PlayerId": "grundan01",
    "PlayerName": "Anthony Grundy",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "johnsan02",
    "PlayerName": "Anthony Johnson",
    "Year": "1998-2010",
    "Num": 0
  },
  {
    "PlayerId": "jonesan01",
    "PlayerName": "Anthony Jones",
    "Year": "1987-1990",
    "Num": 0
  },
  {
    "PlayerId": "marshan01",
    "PlayerName": "Anthony Marshall",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "masonan01",
    "PlayerName": "Anthony Mason",
    "Year": "1990-2003",
    "Num": 0
  },
  {
    "PlayerId": "millean01",
    "PlayerName": "Anthony Miller",
    "Year": "1995-2005",
    "Num": 0
  },
  {
    "PlayerId": "morroan01",
    "PlayerName": "Anthony Morrow",
    "Year": "2009-2017",
    "Num": 1
  },
  {
    "PlayerId": "parkean01",
    "PlayerName": "Anthony Parker",
    "Year": "1998-2012",
    "Num": 0
  },
  {
    "PlayerId": "peelean01",
    "PlayerName": "Anthony Peeler",
    "Year": "1993-2005",
    "Num": 0
  },
  {
    "PlayerId": "pullaan01",
    "PlayerName": "Anthony Pullard",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "randoan01",
    "PlayerName": "Anthony Randolph",
    "Year": "2009-2014",
    "Num": 0
  },
  {
    "PlayerId": "roberan02",
    "PlayerName": "Anthony Roberson",
    "Year": "2006-2009",
    "Num": 0
  },
  {
    "PlayerId": "roberan01",
    "PlayerName": "Anthony Roberts",
    "Year": "1978-1984",
    "Num": 0
  },
  {
    "PlayerId": "tayloan01",
    "PlayerName": "Anthony Taylor",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "tollian01",
    "PlayerName": "Anthony Tolliver",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "tuckean01",
    "PlayerName": "Anthony Tucker",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "carran01",
    "PlayerName": "Antoine Carr",
    "Year": "1985-2000",
    "Num": 0
  },
  {
    "PlayerId": "rigauan01",
    "PlayerName": "Antoine Rigaudeau",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "walkean02",
    "PlayerName": "Antoine Walker",
    "Year": "1997-2008",
    "Num": 0
  },
  {
    "PlayerId": "wrighan01",
    "PlayerName": "Antoine Wright",
    "Year": "2006-2011",
    "Num": 0
  },
  {
    "PlayerId": "anderan02",
    "PlayerName": "Antonio Anderson",
    "Year": 2010,
    "Num": 0
  },
  {
    "PlayerId": "blakean01",
    "PlayerName": "Antonio Blakeney",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "burksan01",
    "PlayerName": "Antonio Burks",
    "Year": "2005-2006",
    "Num": 0
  },
  {
    "PlayerId": "daniean01",
    "PlayerName": "Antonio Daniels",
    "Year": "1998-2011",
    "Num": 0
  },
  {
    "PlayerId": "davisan01",
    "PlayerName": "Antonio Davis",
    "Year": "1994-2006",
    "Num": 0
  },
  {
    "PlayerId": "harvean01",
    "PlayerName": "Antonio Harvey",
    "Year": "1994-2003",
    "Num": 0
  },
  {
    "PlayerId": "langan02",
    "PlayerName": "Antonio Lang",
    "Year": "1995-2000",
    "Num": 0
  },
  {
    "PlayerId": "mcdyean01",
    "PlayerName": "Antonio McDyess",
    "Year": "1996-2011",
    "Num": 0
  },
  {
    "PlayerId": "fotsian01",
    "PlayerName": "Antonis Fotsis",
    "Year": 2002,
    "Num": 0
  },
  {
    "PlayerId": "clevean01",
    "PlayerName": "Antonius Cleveland",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "pasecan01",
    "PlayerName": "Anzejs Pasecniks",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "clarkar01",
    "PlayerName": "Archie Clark",
    "Year": "1967-1976",
    "Num": 0
  },
  {
    "PlayerId": "deesar01",
    "PlayerName": "Archie Dees",
    "Year": "1959-1962",
    "Num": 0
  },
  {
    "PlayerId": "goodwar01",
    "PlayerName": "Archie Goodwin",
    "Year": "2014-2017",
    "Num": 1
  },
  {
    "PlayerId": "maughar01",
    "PlayerName": "Ariel Maughan",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "onuakar01",
    "PlayerName": "Arinze Onuaku",
    "Year": "2014-2017",
    "Num": 1
  },
  {
    "PlayerId": "curear01",
    "PlayerName": "Armand Cure",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "gilliar01",
    "PlayerName": "Armen Gilliam",
    "Year": "1988-2000",
    "Num": 0
  },
  {
    "PlayerId": "johnsar02",
    "PlayerName": "Armon Johnson",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "hillar01",
    "PlayerName": "Armond Hill",
    "Year": "1977-1984",
    "Num": 0
  },
  {
    "PlayerId": "moultar01",
    "PlayerName": "Arnett Moultrie",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "ferriar01",
    "PlayerName": "Arnie Ferrin",
    "Year": "1949-1951",
    "Num": 0
  },
  {
    "PlayerId": "johnsar01",
    "PlayerName": "Arnie Johnson",
    "Year": "1949-1953",
    "Num": 0
  },
  {
    "PlayerId": "risenar01",
    "PlayerName": "Arnie Risen",
    "Year": "1949-1958",
    "Num": 0
  },
  {
    "PlayerId": "baynear01",
    "PlayerName": "Aron Baynes",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "afflaar01",
    "PlayerName": "Arron Afflalo",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "kazemar01",
    "PlayerName": "Arsalan Kazemi",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "burriar01",
    "PlayerName": "Art Burris",
    "Year": "1951-1952",
    "Num": 0
  },
  {
    "PlayerId": "colliar01",
    "PlayerName": "Art Collins",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "harriar01",
    "PlayerName": "Art Harris",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "heymaar01",
    "PlayerName": "Art Heyman",
    "Year": "1964-1970",
    "Num": 0
  },
  {
    "PlayerId": "hillhar01",
    "PlayerName": "Art Hillhouse",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "longar01",
    "PlayerName": "Art Long",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "spectar01",
    "PlayerName": "Art Spector",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "spoelar01",
    "PlayerName": "Art Spoelstra",
    "Year": "1955-1958",
    "Num": 0
  },
  {
    "PlayerId": "stolkar01",
    "PlayerName": "Art Stolkey",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "williar01",
    "PlayerName": "Art Williams",
    "Year": "1968-1975",
    "Num": 0
  },
  {
    "PlayerId": "beckear01",
    "PlayerName": "Arthur Becker",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "gilmoar01",
    "PlayerName": "Artis Gilmore",
    "Year": "1972-1988",
    "Num": 0
  },
  {
    "PlayerId": "gudaiar01",
    "PlayerName": "Arturas Gudaitis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "kellyar01",
    "PlayerName": "Arvesta Kelly",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "kramear01",
    "PlayerName": "Arvid Kramer",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "macijar01",
    "PlayerName": "Arvydas Macijauskas",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "sabonar01",
    "PlayerName": "Arvydas Sabonis",
    "Year": "1996-2003",
    "Num": 0
  },
  {
    "PlayerId": "amayaas01",
    "PlayerName": "Ashraf Amaya",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "jonesas01",
    "PlayerName": "Askia Jones",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "majokat01",
    "PlayerName": "Ater Majok",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "davisau01",
    "PlayerName": "Aubrey Davis",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "brindau01",
    "PlayerName": "Aud Brindley",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "norriau01",
    "PlayerName": "Audie Norris",
    "Year": "1983-1985",
    "Num": 0
  },
  {
    "PlayerId": "perryau01",
    "PlayerName": "Aulcie Perry",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "carrau01",
    "PlayerName": "Austin Carr",
    "Year": "1972-1981",
    "Num": 0
  },
  {
    "PlayerId": "croshau01",
    "PlayerName": "Austin Croshere",
    "Year": "1998-2009",
    "Num": 0
  },
  {
    "PlayerId": "dayeau01",
    "PlayerName": "Austin Daye",
    "Year": "2010-2015",
    "Num": 0
  },
  {
    "PlayerId": "riverau01",
    "PlayerName": "Austin Rivers",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "bradlav01",
    "PlayerName": "Avery Bradley",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "johnsav01",
    "PlayerName": "Avery Johnson",
    "Year": "1989-2004",
    "Num": 0
  },
  {
    "PlayerId": "storeaw01",
    "PlayerName": "Awvee Storey",
    "Year": "2005-2008",
    "Num": 0
  },
  {
    "PlayerId": "herveax01",
    "PlayerName": "Axel Hervelle",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "toupaax01",
    "PlayerName": "Axel Toupane",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "armstbj01",
    "PlayerName": "B.J. Armstrong",
    "Year": "1990-2000",
    "Num": 0
  },
  {
    "PlayerId": "tylerbj01",
    "PlayerName": "B.J. Tyler",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "youngbj01",
    "PlayerName": "B.J. Young",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "howelba01",
    "PlayerName": "Bailey Howell",
    "Year": "1960-1971",
    "Num": 0
  },
  {
    "PlayerId": "adebaba01",
    "PlayerName": "Bam Adebayo",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "cableba01",
    "PlayerName": "Barney Cable",
    "Year": "1959-1964",
    "Num": 0
  },
  {
    "PlayerId": "davisba01",
    "PlayerName": "Baron Davis",
    "Year": "2000-2012",
    "Num": 0
  },
  {
    "PlayerId": "clemeba01",
    "PlayerName": "Barry Clemens",
    "Year": "1966-1976",
    "Num": 0
  },
  {
    "PlayerId": "krameba01",
    "PlayerName": "Barry Kramer",
    "Year": "1965-1970",
    "Num": 0
  },
  {
    "PlayerId": "lieboba01",
    "PlayerName": "Barry Liebowitz",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "nelsoba01",
    "PlayerName": "Barry Nelson",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "ormsba01",
    "PlayerName": "Barry Orms",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "parkhba01",
    "PlayerName": "Barry Parkhill",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "steveba01",
    "PlayerName": "Barry Stevens",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "sumptba01",
    "PlayerName": "Barry Sumpter",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "yatesba01",
    "PlayerName": "Barry Yates",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "kofoeba01",
    "PlayerName": "Bart Kofoed",
    "Year": "1988-1993",
    "Num": 0
  },
  {
    "PlayerId": "govedba01",
    "PlayerName": "Bato Govedarica",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "forreba01",
    "PlayerName": "Bayard Forrest",
    "Year": "1978-1979",
    "Num": 0
  },
  {
    "PlayerId": "beechbe01",
    "PlayerName": "Beau Beech",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "smawlbe01",
    "PlayerName": "Belus Smawley",
    "Year": "1947-1952",
    "Num": 0
  },
  {
    "PlayerId": "bentibe01",
    "PlayerName": "Ben Bentil",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "clydebe01",
    "PlayerName": "Ben Clyde",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "colembe01",
    "PlayerName": "Ben Coleman",
    "Year": "1987-1994",
    "Num": 0
  },
  {
    "PlayerId": "davisbe01",
    "PlayerName": "Ben Davis",
    "Year": "1997-2000",
    "Num": 0
  },
  {
    "PlayerId": "gillebe01",
    "PlayerName": "Ben Gillery",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "goldfbe01",
    "PlayerName": "Ben Goldfaden",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "gordobe01",
    "PlayerName": "Ben Gordon",
    "Year": "2005-2015",
    "Num": 0
  },
  {
    "PlayerId": "handlbe01",
    "PlayerName": "Ben Handlogten",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "hansbbe01",
    "PlayerName": "Ben Hansbrough",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "kelsobe01",
    "PlayerName": "Ben Kelso",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "mcdonbe01",
    "PlayerName": "Ben McDonald",
    "Year": "1986-1989",
    "Num": 0
  },
  {
    "PlayerId": "mclembe01",
    "PlayerName": "Ben McLemore",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "moorebe01",
    "PlayerName": "Ben Moore",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "poquebe01",
    "PlayerName": "Ben Poquette",
    "Year": "1978-1987",
    "Num": 0
  },
  {
    "PlayerId": "schadbe01",
    "PlayerName": "Ben Schadler",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "scharbe01",
    "PlayerName": "Ben Scharnus",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "simmobe01",
    "PlayerName": "Ben Simmons",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "uzohbe01",
    "PlayerName": "Ben Uzoh",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "wallabe01",
    "PlayerName": "Ben Wallace",
    "Year": "1997-2012",
    "Num": 0
  },
  {
    "PlayerId": "warlebe01",
    "PlayerName": "Ben Warley",
    "Year": "1963-1970",
    "Num": 0
  },
  {
    "PlayerId": "swainbe01",
    "PlayerName": "Bennie Swain",
    "Year": 1959,
    "Num": 0
  },
  {
    "PlayerId": "udrihbe01",
    "PlayerName": "Beno Udrih",
    "Year": "2005-2017",
    "Num": 1
  },
  {
    "PlayerId": "benjabe01",
    "PlayerName": "Benoit Benjamin",
    "Year": "1986-2000",
    "Num": 0
  },
  {
    "PlayerId": "jamesbe01",
    "PlayerName": "Bernard James",
    "Year": "2013-2015",
    "Num": 0
  },
  {
    "PlayerId": "kingbe01",
    "PlayerName": "Bernard King",
    "Year": "1978-1993",
    "Num": 0
  },
  {
    "PlayerId": "robinbe01",
    "PlayerName": "Bernard Robinson",
    "Year": "2005-2007",
    "Num": 0
  },
  {
    "PlayerId": "thompbe01",
    "PlayerName": "Bernard Thompson",
    "Year": "1985-1989",
    "Num": 0
  },
  {
    "PlayerId": "toonebe01",
    "PlayerName": "Bernard Toone",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "fryerbe01",
    "PlayerName": "Bernie Fryer",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "harribe01",
    "PlayerName": "Bernie Harris",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "willibe01",
    "PlayerName": "Bernie Williams",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "cookbe01",
    "PlayerName": "Bert Cook",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "nordmbe01",
    "PlayerName": "Bevo Nordmann",
    "Year": "1962-1965",
    "Num": 0
  },
  {
    "PlayerId": "allenbi01",
    "PlayerName": "Bill Allen",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "bolgebi01",
    "PlayerName": "Bill Bolger",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "bradlbi01",
    "PlayerName": "Bill Bradley",
    "Year": "1968-1977",
    "Num": 0
  },
  {
    "PlayerId": "bradlbi02",
    "PlayerName": "Bill Bradley",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "bridgbi01",
    "PlayerName": "Bill Bridges",
    "Year": "1963-1975",
    "Num": 0
  },
  {
    "PlayerId": "buntibi01",
    "PlayerName": "Bill Buntin",
    "Year": 1966,
    "Num": 0
  },
  {
    "PlayerId": "buntibi02",
    "PlayerName": "Bill Bunting",
    "Year": "1970-1972",
    "Num": 0
  },
  {
    "PlayerId": "calhobi01",
    "PlayerName": "Bill Calhoun",
    "Year": "1949-1955",
    "Num": 0
  },
  {
    "PlayerId": "cartwbi01",
    "PlayerName": "Bill Cartwright",
    "Year": "1980-1995",
    "Num": 0
  },
  {
    "PlayerId": "chambbi01",
    "PlayerName": "Bill Chamberlain",
    "Year": "1973-1974",
    "Num": 0
  },
  {
    "PlayerId": "clossbi01",
    "PlayerName": "Bill Closs",
    "Year": "1950-1952",
    "Num": 0
  },
  {
    "PlayerId": "crowbi01",
    "PlayerName": "Bill Crow",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "curlebi01",
    "PlayerName": "Bill Curley",
    "Year": "1995-2001",
    "Num": 0
  },
  {
    "PlayerId": "davisbi01",
    "PlayerName": "Bill Davis",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "dinwibi01",
    "PlayerName": "Bill Dinwiddie",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "downebi01",
    "PlayerName": "Bill Downey",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "ebbenbi01",
    "PlayerName": "Bill Ebben",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "edwarbi01",
    "PlayerName": "Bill Edwards",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "gaborbi01",
    "PlayerName": "Bill Gabor",
    "Year": "1950-1955",
    "Num": 0
  },
  {
    "PlayerId": "gainebi01",
    "PlayerName": "Bill Gaines",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "garnebi01",
    "PlayerName": "Bill Garner",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "garnebi02",
    "PlayerName": "Bill Garnett",
    "Year": "1983-1986",
    "Num": 0
  },
  {
    "PlayerId": "hanzlbi01",
    "PlayerName": "Bill Hanzlik",
    "Year": "1981-1990",
    "Num": 0
  },
  {
    "PlayerId": "henrybi01",
    "PlayerName": "Bill Henry",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "hermabi01",
    "PlayerName": "Bill Herman",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "hewitbi01",
    "PlayerName": "Bill Hewitt",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "higgibi01",
    "PlayerName": "Bill Higgins",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "hoskebi01",
    "PlayerName": "Bill Hosket",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "jonesbi01",
    "PlayerName": "Bill Jones",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "kellebi01",
    "PlayerName": "Bill Keller",
    "Year": "1970-1976",
    "Num": 0
  },
  {
    "PlayerId": "laimbbi01",
    "PlayerName": "Bill Laimbeer",
    "Year": "1981-1994",
    "Num": 0
  },
  {
    "PlayerId": "ligonbi01",
    "PlayerName": "Bill Ligon",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "martibi01",
    "PlayerName": "Bill Martin",
    "Year": "1986-1988",
    "Num": 0
  },
  {
    "PlayerId": "mayfibi01",
    "PlayerName": "Bill Mayfield",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "mcgilbi01",
    "PlayerName": "Bill McGill",
    "Year": "1963-1970",
    "Num": 0
  },
  {
    "PlayerId": "melchbi01",
    "PlayerName": "Bill Melchionni",
    "Year": "1967-1976",
    "Num": 0
  },
  {
    "PlayerId": "meyerbi01",
    "PlayerName": "Bill Meyer",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "millebi01",
    "PlayerName": "Bill Miller",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "mlkvybi01",
    "PlayerName": "Bill Mlkvy",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "newtobi01",
    "PlayerName": "Bill Newton",
    "Year": "1973-1974",
    "Num": 0
  },
  {
    "PlayerId": "roberbi01",
    "PlayerName": "Bill Roberts",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "robinbi01",
    "PlayerName": "Bill Robinzine",
    "Year": "1976-1982",
    "Num": 0
  },
  {
    "PlayerId": "russebi01",
    "PlayerName": "Bill Russell",
    "Year": "1957-1969",
    "Num": 0
  },
  {
    "PlayerId": "sharmbi01",
    "PlayerName": "Bill Sharman",
    "Year": "1951-1961",
    "Num": 0
  },
  {
    "PlayerId": "smithbi01",
    "PlayerName": "Bill Smith",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "stricbi01",
    "PlayerName": "Bill Stricker",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "thiebbi01",
    "PlayerName": "Bill Thieben",
    "Year": "1957-1958",
    "Num": 0
  },
  {
    "PlayerId": "toshebi01",
    "PlayerName": "Bill Tosheff",
    "Year": "1952-1954",
    "Num": 0
  },
  {
    "PlayerId": "turnebi01",
    "PlayerName": "Bill Turner",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "waltobi01",
    "PlayerName": "Bill Walton",
    "Year": "1975-1987",
    "Num": 0
  },
  {
    "PlayerId": "wennibi01",
    "PlayerName": "Bill Wennington",
    "Year": "1986-2000",
    "Num": 0
  },
  {
    "PlayerId": "willobi01",
    "PlayerName": "Bill Willoughby",
    "Year": "1976-1984",
    "Num": 0
  },
  {
    "PlayerId": "zopfbi01",
    "PlayerName": "Bill Zopf",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "cunnibi01",
    "PlayerName": "Billy Cunningham",
    "Year": "1966-1976",
    "Num": 0
  },
  {
    "PlayerId": "deangbi01",
    "PlayerName": "Billy DeAngelis",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "donovbi01",
    "PlayerName": "Billy Donovan",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "evansbi01",
    "PlayerName": "Billy Evans",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "harribi01",
    "PlayerName": "Billy Harris",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "hassebi01",
    "PlayerName": "Billy Hassett",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "jamesbi01",
    "PlayerName": "Billy James",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "kenvibi01",
    "PlayerName": "Billy Kenville",
    "Year": "1954-1960",
    "Num": 0
  },
  {
    "PlayerId": "knighbi01",
    "PlayerName": "Billy Knight",
    "Year": "1975-1985",
    "Num": 0
  },
  {
    "PlayerId": "mckinbi01",
    "PlayerName": "Billy McKinney",
    "Year": "1979-1986",
    "Num": 0
  },
  {
    "PlayerId": "owensbi01",
    "PlayerName": "Billy Owens",
    "Year": "1992-2001",
    "Num": 0
  },
  {
    "PlayerId": "paultbi01",
    "PlayerName": "Billy Paultz",
    "Year": "1971-1985",
    "Num": 0
  },
  {
    "PlayerId": "batesbi01",
    "PlayerName": "Billy Ray Bates",
    "Year": "1980-1983",
    "Num": 0
  },
  {
    "PlayerId": "reidbi01",
    "PlayerName": "Billy Reid",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "schaebi01",
    "PlayerName": "Billy Schaeffer",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "shephbi01",
    "PlayerName": "Billy Shepherd",
    "Year": "1973-1975",
    "Num": 0
  },
  {
    "PlayerId": "thomabi01",
    "PlayerName": "Billy Thomas",
    "Year": "2005-2008",
    "Num": 0
  },
  {
    "PlayerId": "thompbi01",
    "PlayerName": "Billy Thompson",
    "Year": "1987-1992",
    "Num": 0
  },
  {
    "PlayerId": "colesbi01",
    "PlayerName": "Bimbo Coles",
    "Year": "1991-2004",
    "Num": 0
  },
  {
    "PlayerId": "smithbi02",
    "PlayerName": "Bingo Smith",
    "Year": "1970-1980",
    "Num": 0
  },
  {
    "PlayerId": "averibi01",
    "PlayerName": "Bird Averitt",
    "Year": "1974-1978",
    "Num": 0
  },
  {
    "PlayerId": "biyombi01",
    "PlayerName": "Bismack Biyombo",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "delebi01",
    "PlayerName": "Bison Dele",
    "Year": "1992-1999",
    "Num": 0
  },
  {
    "PlayerId": "towerbl01",
    "PlayerName": "Blackie Towery",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "dennibl01",
    "PlayerName": "Blaine Denning",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "rasmubl01",
    "PlayerName": "Blair Rasmussen",
    "Year": "1986-1993",
    "Num": 0
  },
  {
    "PlayerId": "ahearbl01",
    "PlayerName": "Blake Ahearn",
    "Year": "2008-2012",
    "Num": 0
  },
  {
    "PlayerId": "griffbl01",
    "PlayerName": "Blake Griffin",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "edwarbl01",
    "PlayerName": "Blue Edwards",
    "Year": "1990-1999",
    "Num": 0
  },
  {
    "PlayerId": "ellisbo02",
    "PlayerName": "Bo Ellis",
    "Year": "1978-1980",
    "Num": 0
  },
  {
    "PlayerId": "eriasbo01",
    "PlayerName": "Bo Erias",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "kimblbo01",
    "PlayerName": "Bo Kimble",
    "Year": "1991-1993",
    "Num": 0
  },
  {
    "PlayerId": "lamarbo01",
    "PlayerName": "Bo Lamar",
    "Year": "1974-1977",
    "Num": 0
  },
  {
    "PlayerId": "mccalbo01",
    "PlayerName": "Bo McCalebb",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "outlabo01",
    "PlayerName": "Bo Outlaw",
    "Year": "1994-2008",
    "Num": 0
  },
  {
    "PlayerId": "allenbo01",
    "PlayerName": "Bob Allen",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "anderbo01",
    "PlayerName": "Bob Anderegg",
    "Year": 1960,
    "Num": 0
  },
  {
    "PlayerId": "armstbo01",
    "PlayerName": "Bob Armstrong",
    "Year": 1957,
    "Num": 0
  },
  {
    "PlayerId": "arnzebo01",
    "PlayerName": "Bob Arnzen",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "bedelbo01",
    "PlayerName": "Bob Bedell",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "bigelbo01",
    "PlayerName": "Bob Bigelow",
    "Year": "1976-1979",
    "Num": 0
  },
  {
    "PlayerId": "boozebo01",
    "PlayerName": "Bob Boozer",
    "Year": "1961-1971",
    "Num": 0
  },
  {
    "PlayerId": "brannbo01",
    "PlayerName": "Bob Brannum",
    "Year": "1950-1955",
    "Num": 0
  },
  {
    "PlayerId": "brownbo01",
    "PlayerName": "Bob Brown",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "burrobo01",
    "PlayerName": "Bob Burrow",
    "Year": "1957-1958",
    "Num": 0
  },
  {
    "PlayerId": "carnebo01",
    "PlayerName": "Bob Carney",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "carpebo01",
    "PlayerName": "Bob Carpenter",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "carribo01",
    "PlayerName": "Bob Carrington",
    "Year": "1978-1980",
    "Num": 0
  },
  {
    "PlayerId": "chrisbo01",
    "PlayerName": "Bob Christian",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "cluggbo01",
    "PlayerName": "Bob Cluggish",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "cousybo01",
    "PlayerName": "Bob Cousy",
    "Year": "1951-1970",
    "Num": 0
  },
  {
    "PlayerId": "dandrbo01",
    "PlayerName": "Bob Dandridge",
    "Year": "1970-1982",
    "Num": 0
  },
  {
    "PlayerId": "daviebo01",
    "PlayerName": "Bob Davies",
    "Year": "1949-1955",
    "Num": 0
  },
  {
    "PlayerId": "davisbo01",
    "PlayerName": "Bob Davis",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "dillebo01",
    "PlayerName": "Bob Dille",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "dollbo01",
    "PlayerName": "Bob Doll",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "donhabo01",
    "PlayerName": "Bob Donham",
    "Year": "1951-1954",
    "Num": 0
  },
  {
    "PlayerId": "duffybo01",
    "PlayerName": "Bob Duffy",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "duffybo02",
    "PlayerName": "Bob Duffy",
    "Year": "1963-1965",
    "Num": 0
  },
  {
    "PlayerId": "elliobo01",
    "PlayerName": "Bob Elliott",
    "Year": "1979-1981",
    "Num": 0
  },
  {
    "PlayerId": "evansbo01",
    "PlayerName": "Bob Evans",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "faughbo01",
    "PlayerName": "Bob Faught",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "feeribo01",
    "PlayerName": "Bob Feerick",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "ferrybo01",
    "PlayerName": "Bob Ferry",
    "Year": "1960-1969",
    "Num": 0
  },
  {
    "PlayerId": "fitzgbo01",
    "PlayerName": "Bob Fitzgerald",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "fordbo01",
    "PlayerName": "Bob Ford",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "ganttbo01",
    "PlayerName": "Bob Gantt",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "greacbo01",
    "PlayerName": "Bob Greacen",
    "Year": "1970-1972",
    "Num": 0
  },
  {
    "PlayerId": "grossbo01",
    "PlayerName": "Bob Gross",
    "Year": "1976-1983",
    "Num": 0
  },
  {
    "PlayerId": "hansebo01",
    "PlayerName": "Bob Hansen",
    "Year": "1984-1992",
    "Num": 0
  },
  {
    "PlayerId": "harribo01",
    "PlayerName": "Bob Harris",
    "Year": "1950-1954",
    "Num": 0
  },
  {
    "PlayerId": "harribo02",
    "PlayerName": "Bob Harrison",
    "Year": "1950-1958",
    "Num": 0
  },
  {
    "PlayerId": "hogsebo01",
    "PlayerName": "Bob Hogsett",
    "Year": "1967-1968",
    "Num": 0
  },
  {
    "PlayerId": "hopkibo01",
    "PlayerName": "Bob Hopkins",
    "Year": "1957-1960",
    "Num": 0
  },
  {
    "PlayerId": "houbrbo01",
    "PlayerName": "Bob Houbregs",
    "Year": "1954-1958",
    "Num": 0
  },
  {
    "PlayerId": "hubbabo01",
    "PlayerName": "Bob Hubbard",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "kauffbo01",
    "PlayerName": "Bob Kauffman",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "kinnebo01",
    "PlayerName": "Bob Kinney",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "knighbo01",
    "PlayerName": "Bob Knight",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "lackebo01",
    "PlayerName": "Bob Lackey",
    "Year": "1973-1974",
    "Num": 0
  },
  {
    "PlayerId": "laniebo01",
    "PlayerName": "Bob Lanier",
    "Year": "1971-1984",
    "Num": 0
  },
  {
    "PlayerId": "lavoybo01",
    "PlayerName": "Bob Lavoy",
    "Year": "1951-1954",
    "Num": 0
  },
  {
    "PlayerId": "lochmbo01",
    "PlayerName": "Bob Lochmueller",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "lovebo01",
    "PlayerName": "Bob Love",
    "Year": "1967-1977",
    "Num": 0
  },
  {
    "PlayerId": "martibo01",
    "PlayerName": "Bob Martin",
    "Year": "1994-1995",
    "Num": 0
  },
  {
    "PlayerId": "mcadobo01",
    "PlayerName": "Bob McAdoo",
    "Year": "1973-1986",
    "Num": 0
  },
  {
    "PlayerId": "mccanbo01",
    "PlayerName": "Bob McCann",
    "Year": "1990-1998",
    "Num": 0
  },
  {
    "PlayerId": "mcintbo01",
    "PlayerName": "Bob McIntyre",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "mcneibo01",
    "PlayerName": "Bob McNeill",
    "Year": "1961-1962",
    "Num": 0
  },
  {
    "PlayerId": "millebo01",
    "PlayerName": "Bob Miller",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "mullebo01",
    "PlayerName": "Bob Mullens",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "naberbo01",
    "PlayerName": "Bob Naber",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "nashbo01",
    "PlayerName": "Bob Nash",
    "Year": "1973-1979",
    "Num": 0
  },
  {
    "PlayerId": "netolbo01",
    "PlayerName": "Bob Netolicky",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "obriebo01",
    "PlayerName": "Bob O'Brien",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "peterbo01",
    "PlayerName": "Bob Peterson",
    "Year": "1954-1956",
    "Num": 0
  },
  {
    "PlayerId": "pettibo01",
    "PlayerName": "Bob Pettit",
    "Year": "1955-1965",
    "Num": 0
  },
  {
    "PlayerId": "portmbo01",
    "PlayerName": "Bob Portman",
    "Year": "1970-1973",
    "Num": 0
  },
  {
    "PlayerId": "priddbo01",
    "PlayerName": "Bob Priddy",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "quickbo01",
    "PlayerName": "Bob Quick",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "rensbro01",
    "PlayerName": "Bob Rensberger",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "riedybo01",
    "PlayerName": "Bob Riedy",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "rileybo01",
    "PlayerName": "Bob Riley",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "royerbo01",
    "PlayerName": "Bob Royer",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "rulebo01",
    "PlayerName": "Bob Rule",
    "Year": "1968-1975",
    "Num": 0
  },
  {
    "PlayerId": "santibo01",
    "PlayerName": "Bob Santini",
    "Year": 1956,
    "Num": 0
  },
  {
    "PlayerId": "schafbo01",
    "PlayerName": "Bob Schafer",
    "Year": "1956-1957",
    "Num": 0
  },
  {
    "PlayerId": "sheabo01",
    "PlayerName": "Bob Shea",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "simsbo01",
    "PlayerName": "Bob Sims",
    "Year": "1962-1968",
    "Num": 0
  },
  {
    "PlayerId": "surabo01",
    "PlayerName": "Bob Sura",
    "Year": "1996-2005",
    "Num": 0
  },
  {
    "PlayerId": "thornbo01",
    "PlayerName": "Bob Thornton",
    "Year": "1986-1996",
    "Num": 0
  },
  {
    "PlayerId": "toughbo01",
    "PlayerName": "Bob Tough",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "vergabo01",
    "PlayerName": "Bob Verga",
    "Year": "1968-1974",
    "Num": 0
  },
  {
    "PlayerId": "warlibo01",
    "PlayerName": "Bob Warlick",
    "Year": "1966-1970",
    "Num": 0
  },
  {
    "PlayerId": "warrebo01",
    "PlayerName": "Bob Warren",
    "Year": "1969-1976",
    "Num": 0
  },
  {
    "PlayerId": "weissbo01",
    "PlayerName": "Bob Weiss",
    "Year": "1966-1977",
    "Num": 0
  },
  {
    "PlayerId": "wiesebo01",
    "PlayerName": "Bob Wiesenhahn",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "wilkebo01",
    "PlayerName": "Bob Wilkerson",
    "Year": "1977-1983",
    "Num": 0
  },
  {
    "PlayerId": "willibo01",
    "PlayerName": "Bob Williams",
    "Year": "1956-1957",
    "Num": 0
  },
  {
    "PlayerId": "wilsobo01",
    "PlayerName": "Bob Wilson",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "woodbo01",
    "PlayerName": "Bob Wood",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "woollbo01",
    "PlayerName": "Bob Woollard",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "marjabo01",
    "PlayerName": "Boban Marjanovic",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "brownbo02",
    "PlayerName": "Bobby Brown",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "cattabo01",
    "PlayerName": "Bobby Cattage",
    "Year": "1982-1986",
    "Num": 0
  },
  {
    "PlayerId": "cookbo01",
    "PlayerName": "Bobby Cook",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "croftbo01",
    "PlayerName": "Bobby Croft",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "edmonbo01",
    "PlayerName": "Bobby Edmonds",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "fieldbo01",
    "PlayerName": "Bobby Fields",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "hoopebo01",
    "PlayerName": "Bobby Hooper",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "hurlebo01",
    "PlayerName": "Bobby Hurley",
    "Year": "1994-1998",
    "Num": 0
  },
  {
    "PlayerId": "jacksbo01",
    "PlayerName": "Bobby Jackson",
    "Year": "1998-2009",
    "Num": 0
  },
  {
    "PlayerId": "jonesbo01",
    "PlayerName": "Bobby Jones",
    "Year": "1975-1986",
    "Num": 0
  },
  {
    "PlayerId": "jonesbo02",
    "PlayerName": "Bobby Jones",
    "Year": "2007-2008",
    "Num": 0
  },
  {
    "PlayerId": "lewisbo01",
    "PlayerName": "Bobby Lewis",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "lloydbo01",
    "PlayerName": "Bobby Lloyd",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "phillbo01",
    "PlayerName": "Bobby Phills",
    "Year": "1992-2000",
    "Num": 0
  },
  {
    "PlayerId": "portibo01",
    "PlayerName": "Bobby Portis",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "rascobo01",
    "PlayerName": "Bobby Rascoe",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "simmobo01",
    "PlayerName": "Bobby Simmons",
    "Year": "2002-2012",
    "Num": 0
  },
  {
    "PlayerId": "smithbo01",
    "PlayerName": "Bobby Smith",
    "Year": "1960-1962",
    "Num": 0
  },
  {
    "PlayerId": "wanzebo01",
    "PlayerName": "Bobby Wanzer",
    "Year": "1949-1957",
    "Num": 0
  },
  {
    "PlayerId": "washibo01",
    "PlayerName": "Bobby Washington",
    "Year": "1970-1972",
    "Num": 0
  },
  {
    "PlayerId": "watsobo01",
    "PlayerName": "Bobby Watson",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "wilsobo03",
    "PlayerName": "Bobby Wilson",
    "Year": "1975-1978",
    "Num": 0
  },
  {
    "PlayerId": "wilsobo02",
    "PlayerName": "Bobby Wilson",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "bogdabo01",
    "PlayerName": "Bogdan Bogdanovic",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "bogdabo02",
    "PlayerName": "Bojan Bogdanovic",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "dubljbo01",
    "PlayerName": "Bojan Dubljevic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mckinbo01",
    "PlayerName": "Bones McKinney",
    "Year": "1947-1952",
    "Num": 0
  },
  {
    "PlayerId": "ndongbo01",
    "PlayerName": "Boniface N'Dong",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "wellsbo01",
    "PlayerName": "Bonzi Wells",
    "Year": "1999-2008",
    "Num": 0
  },
  {
    "PlayerId": "ellisbo01",
    "PlayerName": "Boo Ellis",
    "Year": "1959-1960",
    "Num": 0
  },
  {
    "PlayerId": "woodfbo01",
    "PlayerName": "Booker Woodfox",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "diawbo01",
    "PlayerName": "Boris Diaw",
    "Year": "2004-2017",
    "Num": 0
  },
  {
    "PlayerId": "nachabo01",
    "PlayerName": "Boris Nachamkin",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "nachbbo01",
    "PlayerName": "Bostjan Nachbar",
    "Year": "2003-2008",
    "Num": 0
  },
  {
    "PlayerId": "wrighbr02",
    "PlayerName": "Bracey Wright",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "bransbr01",
    "PlayerName": "Brad Branson",
    "Year": "1982-1983",
    "Num": 0
  },
  {
    "PlayerId": "daughbr01",
    "PlayerName": "Brad Daugherty",
    "Year": "1987-1994",
    "Num": 0
  },
  {
    "PlayerId": "davisbr01",
    "PlayerName": "Brad Davis",
    "Year": "1978-1992",
    "Num": 0
  },
  {
    "PlayerId": "hollabr01",
    "PlayerName": "Brad Holland",
    "Year": "1980-1982",
    "Num": 0
  },
  {
    "PlayerId": "lohaubr01",
    "PlayerName": "Brad Lohaus",
    "Year": "1988-1998",
    "Num": 0
  },
  {
    "PlayerId": "millebr01",
    "PlayerName": "Brad Miller",
    "Year": "1999-2012",
    "Num": 0
  },
  {
    "PlayerId": "newlebr01",
    "PlayerName": "Brad Newley",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "sellebr01",
    "PlayerName": "Brad Sellers",
    "Year": "1987-1993",
    "Num": 0
  },
  {
    "PlayerId": "wrighbr01",
    "PlayerName": "Brad Wright",
    "Year": "1987-1988",
    "Num": 0
  },
  {
    "PlayerId": "bealbr01",
    "PlayerName": "Bradley Beal",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "heslibr01",
    "PlayerName": "Brady Heslip",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "walkebr01",
    "PlayerName": "Brady Walker",
    "Year": "1949-1952",
    "Num": 0
  },
  {
    "PlayerId": "wrighbr03",
    "PlayerName": "Brandan Wright",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "dawsobr01",
    "PlayerName": "Branden Dawson",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "knighbr02",
    "PlayerName": "Brandin Knight",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "armstbr01",
    "PlayerName": "Brandon Armstrong",
    "Year": "2002-2004",
    "Num": 0
  },
  {
    "PlayerId": "ashlebr01",
    "PlayerName": "Brandon Ashley",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bassbr01",
    "PlayerName": "Brandon Bass",
    "Year": "2006-2017",
    "Num": 1
  },
  {
    "PlayerId": "daviebr01",
    "PlayerName": "Brandon Davies",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "huntebr01",
    "PlayerName": "Brandon Hunter",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "ingrabr01",
    "PlayerName": "Brandon Ingram",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "jennibr01",
    "PlayerName": "Brandon Jennings",
    "Year": "2010-2017",
    "Num": 1
  },
  {
    "PlayerId": "knighbr03",
    "PlayerName": "Brandon Knight",
    "Year": "2012-2017",
    "Num": 1
  },
  {
    "PlayerId": "paulbr01",
    "PlayerName": "Brandon Paul",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "roybr01",
    "PlayerName": "Brandon Roy",
    "Year": "2007-2013",
    "Num": 0
  },
  {
    "PlayerId": "rushbr01",
    "PlayerName": "Brandon Rush",
    "Year": "2009-2017",
    "Num": 1
  },
  {
    "PlayerId": "trichbr01",
    "PlayerName": "Brandon Triche",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "willibr01",
    "PlayerName": "Brandon Williams",
    "Year": "1998-2003",
    "Num": 0
  },
  {
    "PlayerId": "weidnbr01",
    "PlayerName": "Brant Weidner",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "haywobr01",
    "PlayerName": "Brendan Haywood",
    "Year": "2002-2015",
    "Num": 0
  },
  {
    "PlayerId": "mccanbr01",
    "PlayerName": "Brendan McCann",
    "Year": "1958-1960",
    "Num": 0
  },
  {
    "PlayerId": "barrybr01",
    "PlayerName": "Brent Barry",
    "Year": "1996-2009",
    "Num": 0
  },
  {
    "PlayerId": "pricebr01",
    "PlayerName": "Brent Price",
    "Year": "1993-2002",
    "Num": 0
  },
  {
    "PlayerId": "scottbr01",
    "PlayerName": "Brent Scott",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "szabobr01",
    "PlayerName": "Brett Szabo",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "vromabr01",
    "PlayerName": "Brett Vroman",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "knighbr01",
    "PlayerName": "Brevin Knight",
    "Year": "1998-2009",
    "Num": 0
  },
  {
    "PlayerId": "brunkbr01",
    "PlayerName": "Brian Brunkhorst",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "butchbr01",
    "PlayerName": "Brian Butch",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "cardibr01",
    "PlayerName": "Brian Cardinal",
    "Year": "2001-2012",
    "Num": 0
  },
  {
    "PlayerId": "cookbr01",
    "PlayerName": "Brian Cook",
    "Year": "2004-2012",
    "Num": 0
  },
  {
    "PlayerId": "davisbr02",
    "PlayerName": "Brian Davis",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "evansbr01",
    "PlayerName": "Brian Evans",
    "Year": "1997-1999",
    "Num": 0
  },
  {
    "PlayerId": "grantbr01",
    "PlayerName": "Brian Grant",
    "Year": "1995-2006",
    "Num": 0
  },
  {
    "PlayerId": "heanebr01",
    "PlayerName": "Brian Heaney",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "howarbr01",
    "PlayerName": "Brian Howard",
    "Year": "1992-1993",
    "Num": 0
  },
  {
    "PlayerId": "mahonbr01",
    "PlayerName": "Brian Mahoney",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "martibr01",
    "PlayerName": "Brian Martin",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "olivebr01",
    "PlayerName": "Brian Oliver",
    "Year": "1991-1998",
    "Num": 0
  },
  {
    "PlayerId": "quinnbr01",
    "PlayerName": "Brian Quinnett",
    "Year": "1990-1992",
    "Num": 0
  },
  {
    "PlayerId": "roberbr01",
    "PlayerName": "Brian Roberts",
    "Year": "2013-2017",
    "Num": 1
  },
  {
    "PlayerId": "rowsobr01",
    "PlayerName": "Brian Rowsom",
    "Year": "1988-1990",
    "Num": 0
  },
  {
    "PlayerId": "scalabr01",
    "PlayerName": "Brian Scalabrine",
    "Year": "2002-2012",
    "Num": 0
  },
  {
    "PlayerId": "shawbr01",
    "PlayerName": "Brian Shaw",
    "Year": "1989-2003",
    "Num": 0
  },
  {
    "PlayerId": "skinnbr01",
    "PlayerName": "Brian Skinner",
    "Year": "1999-2012",
    "Num": 0
  },
  {
    "PlayerId": "taylobr01",
    "PlayerName": "Brian Taylor",
    "Year": "1973-1982",
    "Num": 0
  },
  {
    "PlayerId": "wintebr01",
    "PlayerName": "Brian Winters",
    "Year": "1975-1983",
    "Num": 0
  },
  {
    "PlayerId": "weberbr01",
    "PlayerName": "Briante Weber",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "johnsbr02",
    "PlayerName": "Brice Johnson",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "johnsbr01",
    "PlayerName": "Britton Johnsen",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "motumbr01",
    "PlayerName": "Brock Motum",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "koenibr01",
    "PlayerName": "Bronson Koenig",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lopezbr01",
    "PlayerName": "Brook Lopez",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "steppbr01",
    "PlayerName": "Brook Steppe",
    "Year": "1983-1989",
    "Num": 0
  },
  {
    "PlayerId": "thompbr01",
    "PlayerName": "Brooks Thompson",
    "Year": "1995-1998",
    "Num": 0
  },
  {
    "PlayerId": "bowenbr01",
    "PlayerName": "Bruce Bowen",
    "Year": "1997-2009",
    "Num": 0
  },
  {
    "PlayerId": "douglbr01",
    "PlayerName": "Bruce Douglas",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "flowebr01",
    "PlayerName": "Bruce Flowers",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "halebr01",
    "PlayerName": "Bruce Hale",
    "Year": "1949-1951",
    "Num": 0
  },
  {
    "PlayerId": "kuczebr01",
    "PlayerName": "Bruce Kuczenski",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "sealsbr01",
    "PlayerName": "Bruce Seals",
    "Year": "1974-1978",
    "Num": 0
  },
  {
    "PlayerId": "spragbr01",
    "PlayerName": "Bruce Spraggins",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "cabocbr01",
    "PlayerName": "Bruno Caboclo",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "sundobr01",
    "PlayerName": "Bruno Sundov",
    "Year": "1999-2005",
    "Num": 0
  },
  {
    "PlayerId": "warribr01",
    "PlayerName": "Bryan Warrick",
    "Year": "1983-1986",
    "Num": 0
  },
  {
    "PlayerId": "dunstbr01",
    "PlayerName": "Bryant Dunston",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "reevebr01",
    "PlayerName": "Bryant Reeves",
    "Year": "1996-2001",
    "Num": 0
  },
  {
    "PlayerId": "stithbr01",
    "PlayerName": "Bryant Stith",
    "Year": "1993-2002",
    "Num": 0
  },
  {
    "PlayerId": "alforbr01",
    "PlayerName": "Bryce Alford",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "cottobr01",
    "PlayerName": "Bryce Cotton",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "dejeabr01",
    "PlayerName": "Bryce Dejean-Jones",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "drewbr01",
    "PlayerName": "Bryce Drew",
    "Year": "1999-2004",
    "Num": 0
  },
  {
    "PlayerId": "forbebr01",
    "PlayerName": "Bryn Forbes",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "russebr01",
    "PlayerName": "Bryon Russell",
    "Year": "1994-2006",
    "Num": 0
  },
  {
    "PlayerId": "wellsbu01",
    "PlayerName": "Bubba Wells",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "wilsobu01",
    "PlayerName": "Bubba Wilson",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "hawkiro01",
    "PlayerName": "Bubbles Hawkins",
    "Year": "1976-1979",
    "Num": 0
  },
  {
    "PlayerId": "johnsbu01",
    "PlayerName": "Buck Johnson",
    "Year": "1987-1993",
    "Num": 0
  },
  {
    "PlayerId": "sydnobu01",
    "PlayerName": "Buck Sydnor",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "willibu01",
    "PlayerName": "Buck Williams",
    "Year": "1982-1998",
    "Num": 0
  },
  {
    "PlayerId": "bockhbu01",
    "PlayerName": "Bucky Bockhorn",
    "Year": "1959-1965",
    "Num": 0
  },
  {
    "PlayerId": "mcconbu01",
    "PlayerName": "Bucky McConnell",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "actonbu01",
    "PlayerName": "Bud Acton",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "grantbu01",
    "PlayerName": "Bud Grant",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "koperbu01",
    "PlayerName": "Bud Koper",
    "Year": 1965,
    "Num": 0
  },
  {
    "PlayerId": "ogdenbu01",
    "PlayerName": "Bud Ogden",
    "Year": "1970-1971",
    "Num": 0
  },
  {
    "PlayerId": "olsenbu01",
    "PlayerName": "Bud Olsen",
    "Year": "1963-1970",
    "Num": 0
  },
  {
    "PlayerId": "palmebu01",
    "PlayerName": "Bud Palmer",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "stallbu01",
    "PlayerName": "Bud Stallworth",
    "Year": "1973-1977",
    "Num": 0
  },
  {
    "PlayerId": "hieldbu01",
    "PlayerName": "Buddy Hield",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "jeannbu01",
    "PlayerName": "Buddy Jeannette",
    "Year": "1948-1950",
    "Num": 0
  },
  {
    "PlayerId": "ogradbu01",
    "PlayerName": "Buddy O'Grady",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "ehlerbu01",
    "PlayerName": "Bulbs Ehlers",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "beardbu01",
    "PlayerName": "Butch Beard",
    "Year": "1970-1979",
    "Num": 0
  },
  {
    "PlayerId": "bookebu01",
    "PlayerName": "Butch Booker",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "cartebu01",
    "PlayerName": "Butch Carter",
    "Year": "1981-1986",
    "Num": 0
  },
  {
    "PlayerId": "feherbu01",
    "PlayerName": "Butch Feher",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "gravebu01",
    "PlayerName": "Butch Graves",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "joynebu01",
    "PlayerName": "Butch Joyner",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "leebu01",
    "PlayerName": "Butch Lee",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "vanbrbu01",
    "PlayerName": "Butch Van Breda Kolff",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "beckby01",
    "PlayerName": "Byron Beck",
    "Year": "1968-1977",
    "Num": 0
  },
  {
    "PlayerId": "dinkiby01",
    "PlayerName": "Byron Dinkins",
    "Year": "1990-1991",
    "Num": 0
  },
  {
    "PlayerId": "houstby01",
    "PlayerName": "Byron Houston",
    "Year": "1993-1996",
    "Num": 0
  },
  {
    "PlayerId": "irvinby01",
    "PlayerName": "Byron Irvin",
    "Year": "1990-1993",
    "Num": 0
  },
  {
    "PlayerId": "mulleby01",
    "PlayerName": "Byron Mullens",
    "Year": "2010-2014",
    "Num": 0
  },
  {
    "PlayerId": "scottby01",
    "PlayerName": "Byron Scott",
    "Year": "1984-1997",
    "Num": 0
  },
  {
    "PlayerId": "aikencj01",
    "PlayerName": "C.J. Aiken",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "faircj02",
    "PlayerName": "C.J. Fair",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "harricj01",
    "PlayerName": "C.J. Harris",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "kupeccj01",
    "PlayerName": "C.J. Kupec",
    "Year": "1976-1978",
    "Num": 0
  },
  {
    "PlayerId": "leslicj01",
    "PlayerName": "C.J. Leslie",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mccolcj01",
    "PlayerName": "C.J. McCollum",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "milescj01",
    "PlayerName": "C.J. Miles",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "watsocj01",
    "PlayerName": "C.J. Watson",
    "Year": "2008-2017",
    "Num": 1
  },
  {
    "PlayerId": "wilcocj01",
    "PlayerName": "C.J. Wilcox",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "willicj01",
    "PlayerName": "C.J. Williams",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "lalanca01",
    "PlayerName": "Cady Lalanne",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bowdlca01",
    "PlayerName": "Cal Bowdler",
    "Year": "2000-2002",
    "Num": 0
  },
  {
    "PlayerId": "chrisca01",
    "PlayerName": "Cal Christensen",
    "Year": "1951-1955",
    "Num": 0
  },
  {
    "PlayerId": "ramseca01",
    "PlayerName": "Cal Ramsey",
    "Year": "1960-1961",
    "Num": 0
  },
  {
    "PlayerId": "cheanca01",
    "PlayerName": "Calbert Cheaney",
    "Year": "1994-2006",
    "Num": 0
  },
  {
    "PlayerId": "jonesca01",
    "PlayerName": "Caldwell Jones",
    "Year": "1974-1990",
    "Num": 0
  },
  {
    "PlayerId": "swanica01",
    "PlayerName": "Caleb Swanigan",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "boothca01",
    "PlayerName": "Calvin Booth",
    "Year": "2000-2009",
    "Num": 0
  },
  {
    "PlayerId": "fowleca01",
    "PlayerName": "Calvin Fowler",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "garreca01",
    "PlayerName": "Calvin Garrett",
    "Year": "1981-1984",
    "Num": 0
  },
  {
    "PlayerId": "grahaca01",
    "PlayerName": "Calvin Graham",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "murphca01",
    "PlayerName": "Calvin Murphy",
    "Year": "1971-1983",
    "Num": 0
  },
  {
    "PlayerId": "nattca01",
    "PlayerName": "Calvin Natt",
    "Year": "1980-1990",
    "Num": 0
  },
  {
    "PlayerId": "bairsca01",
    "PlayerName": "Cameron Bairstow",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "jonesca02",
    "PlayerName": "Cameron Jones",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "oliveca01",
    "PlayerName": "Cameron Oliver",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "payneca01",
    "PlayerName": "Cameron Payne",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "wellsca01",
    "PlayerName": "Cameron Wells",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "russeca02",
    "PlayerName": "Campy Russell",
    "Year": "1975-1985",
    "Num": 0
  },
  {
    "PlayerId": "scurrca01",
    "PlayerName": "Carey Scurry",
    "Year": "1986-1988",
    "Num": 0
  },
  {
    "PlayerId": "leverca01",
    "PlayerName": "Caris LeVert",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "baileca01",
    "PlayerName": "Carl Bailey",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "braunca01",
    "PlayerName": "Carl Braun",
    "Year": "1948-1962",
    "Num": 0
  },
  {
    "PlayerId": "fulleca01",
    "PlayerName": "Carl Fuller",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "henryca01",
    "PlayerName": "Carl Henry",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "herreca01",
    "PlayerName": "Carl Herrera",
    "Year": "1992-1999",
    "Num": 0
  },
  {
    "PlayerId": "kilpaca01",
    "PlayerName": "Carl Kilpatrick",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "landrca01",
    "PlayerName": "Carl Landry",
    "Year": "2008-2016",
    "Num": 0
  },
  {
    "PlayerId": "mcnulca01",
    "PlayerName": "Carl McNulty",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "meinhca01",
    "PlayerName": "Carl Meinhold",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "nicksca01",
    "PlayerName": "Carl Nicks",
    "Year": "1981-1983",
    "Num": 0
  },
  {
    "PlayerId": "shaefca01",
    "PlayerName": "Carl Shaeffer",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "thomaca01",
    "PlayerName": "Carl Thomas",
    "Year": "1992-1998",
    "Num": 0
  },
  {
    "PlayerId": "johnsca01",
    "PlayerName": "Carldell Johnson",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "scottca01",
    "PlayerName": "Carleton Scott",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "arroyca01",
    "PlayerName": "Carlos Arroyo",
    "Year": "2002-2011",
    "Num": 0
  },
  {
    "PlayerId": "boozeca01",
    "PlayerName": "Carlos Boozer",
    "Year": "2003-2015",
    "Num": 0
  },
  {
    "PlayerId": "clarkca01",
    "PlayerName": "Carlos Clark",
    "Year": "1984-1985",
    "Num": 0
  },
  {
    "PlayerId": "delfica01",
    "PlayerName": "Carlos Delfino",
    "Year": "2005-2013",
    "Num": 0
  },
  {
    "PlayerId": "rogerca01",
    "PlayerName": "Carlos Rogers",
    "Year": "1995-2002",
    "Num": 0
  },
  {
    "PlayerId": "terryca01",
    "PlayerName": "Carlos Terry",
    "Year": "1981-1983",
    "Num": 0
  },
  {
    "PlayerId": "mckinca01",
    "PlayerName": "Carlton McKinney",
    "Year": "1990-1992",
    "Num": 0
  },
  {
    "PlayerId": "anthoca01",
    "PlayerName": "Carmelo Anthony",
    "Year": "2004-2018",
    "Num": 1
  },
  {
    "PlayerId": "butleca01",
    "PlayerName": "Caron Butler",
    "Year": "2003-2016",
    "Num": 0
  },
  {
    "PlayerId": "felixca01",
    "PlayerName": "Carrick Felix",
    "Year": 2014,
    "Num": 1
  },
  {
    "PlayerId": "hooseca01",
    "PlayerName": "Carroll Hooser",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "martica01",
    "PlayerName": "Cartier Martin",
    "Year": "2009-2015",
    "Num": 0
  },
  {
    "PlayerId": "jacobca01",
    "PlayerName": "Casey Jacobsen",
    "Year": "2003-2008",
    "Num": 0
  },
  {
    "PlayerId": "prathca01",
    "PlayerName": "Casey Prather",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "shawca01",
    "PlayerName": "Casey Shaw",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "wareca01",
    "PlayerName": "Casper Ware",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "barbeca01",
    "PlayerName": "Cat Barber",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "russeca01",
    "PlayerName": "Cazzie Russell",
    "Year": "1967-1978",
    "Num": 0
  },
  {
    "PlayerId": "hankice01",
    "PlayerName": "Cecil Hankins",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "osmande01",
    "PlayerName": "Cedi Osman",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "ballce01",
    "PlayerName": "Cedric Ball",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "bozemce01",
    "PlayerName": "Cedric Bozeman",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "cebalce01",
    "PlayerName": "Cedric Ceballos",
    "Year": "1991-2001",
    "Num": 0
  },
  {
    "PlayerId": "hendece02",
    "PlayerName": "Cedric Henderson",
    "Year": "1998-2002",
    "Num": 0
  },
  {
    "PlayerId": "hendece01",
    "PlayerName": "Cedric Henderson",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "huntece01",
    "PlayerName": "Cedric Hunter",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "jacksce01",
    "PlayerName": "Cedric Jackson",
    "Year": 2010,
    "Num": 0
  },
  {
    "PlayerId": "lewisce01",
    "PlayerName": "Cedric Lewis",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "maxwece01",
    "PlayerName": "Cedric Maxwell",
    "Year": "1978-1988",
    "Num": 0
  },
  {
    "PlayerId": "simmoce01",
    "PlayerName": "Cedric Simmons",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "hordgce01",
    "PlayerName": "Cedrick Hordges",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "akyolce01",
    "PlayerName": "Cenk Akyol",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "trybace01",
    "PlayerName": "Cezary Trybanski",
    "Year": "2003-2004",
    "Num": 0
  },
  {
    "PlayerId": "stanbch01",
    "PlayerName": "Chace Stanback",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gallach01",
    "PlayerName": "Chad Gallagher",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "kinchch01",
    "PlayerName": "Chad Kinch",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "oguchch01",
    "PlayerName": "Chamberlain Oguchi",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "parsoch01",
    "PlayerName": "Chandler Parsons",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "fryech01",
    "PlayerName": "Channing Frye",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "barklch01",
    "PlayerName": "Charles Barkley",
    "Year": "1985-2000",
    "Num": 0
  },
  {
    "PlayerId": "beaslch01",
    "PlayerName": "Charles Beasley",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "bradlch01",
    "PlayerName": "Charles Bradley",
    "Year": "1982-1984",
    "Num": 0
  },
  {
    "PlayerId": "claxtch01",
    "PlayerName": "Charles Claxton",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "cookech01",
    "PlayerName": "Charles Cooke",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "davisch02",
    "PlayerName": "Charles Davis",
    "Year": "1982-1990",
    "Num": 0
  },
  {
    "PlayerId": "dudlech01",
    "PlayerName": "Charles Dudley",
    "Year": "1973-1979",
    "Num": 0
  },
  {
    "PlayerId": "edgech01",
    "PlayerName": "Charles Edge",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "hentzch01",
    "PlayerName": "Charles Hentz",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "jenkich01",
    "PlayerName": "Charles Jenkins",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "johnsch01",
    "PlayerName": "Charles Johnson",
    "Year": "1973-1979",
    "Num": 0
  },
  {
    "PlayerId": "jonesch02",
    "PlayerName": "Charles Jones",
    "Year": "1985-1989",
    "Num": 0
  },
  {
    "PlayerId": "jonesch01",
    "PlayerName": "Charles Jones",
    "Year": "1984-1998",
    "Num": 0
  },
  {
    "PlayerId": "jonesch03",
    "PlayerName": "Charles Jones",
    "Year": "1999-2000",
    "Num": 0
  },
  {
    "PlayerId": "jordach01",
    "PlayerName": "Charles Jordan",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "obannch01",
    "PlayerName": "Charles O'Bannon",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "oaklech01",
    "PlayerName": "Charles Oakley",
    "Year": "1986-2004",
    "Num": 0
  },
  {
    "PlayerId": "parksch01",
    "PlayerName": "Charles Parks",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "pittmch01",
    "PlayerName": "Charles Pittman",
    "Year": "1983-1986",
    "Num": 0
  },
  {
    "PlayerId": "shackch01",
    "PlayerName": "Charles Shackleford",
    "Year": "1989-1999",
    "Num": 0
  },
  {
    "PlayerId": "smithch02",
    "PlayerName": "Charles Smith",
    "Year": "1990-1996",
    "Num": 0
  },
  {
    "PlayerId": "smithch04",
    "PlayerName": "Charles Smith",
    "Year": "1998-2006",
    "Num": 0
  },
  {
    "PlayerId": "smithch01",
    "PlayerName": "Charles Smith",
    "Year": "1989-1997",
    "Num": 0
  },
  {
    "PlayerId": "thomach01",
    "PlayerName": "Charles Thomas",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "willich01",
    "PlayerName": "Charles Williams",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "shippch01",
    "PlayerName": "Charley Shipp",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "bellch01",
    "PlayerName": "Charlie Bell",
    "Year": "2002-2011",
    "Num": 0
  },
  {
    "PlayerId": "blackch01",
    "PlayerName": "Charlie Black",
    "Year": "1949-1952",
    "Num": 0
  },
  {
    "PlayerId": "crissch01",
    "PlayerName": "Charlie Criss",
    "Year": "1978-1985",
    "Num": 0
  },
  {
    "PlayerId": "davisch01",
    "PlayerName": "Charlie Davis",
    "Year": "1972-1974",
    "Num": 0
  },
  {
    "PlayerId": "hardnch01",
    "PlayerName": "Charlie Hardnett",
    "Year": "1963-1965",
    "Num": 0
  },
  {
    "PlayerId": "hoefech01",
    "PlayerName": "Charlie Hoefer",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "lowerch01",
    "PlayerName": "Charlie Lowery",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "parslch01",
    "PlayerName": "Charlie Parsley",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "paulkch01",
    "PlayerName": "Charlie Paulk",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "scottch01",
    "PlayerName": "Charlie Scott",
    "Year": "1971-1980",
    "Num": 0
  },
  {
    "PlayerId": "sittoch01",
    "PlayerName": "Charlie Sitton",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "tyrach01",
    "PlayerName": "Charlie Tyra",
    "Year": "1958-1962",
    "Num": 0
  },
  {
    "PlayerId": "villach01",
    "PlayerName": "Charlie Villanueva",
    "Year": "2006-2016",
    "Num": 0
  },
  {
    "PlayerId": "wardch01",
    "PlayerName": "Charlie Ward",
    "Year": "1995-2005",
    "Num": 0
  },
  {
    "PlayerId": "westbch01",
    "PlayerName": "Charlie Westbrook",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "yelvech01",
    "PlayerName": "Charlie Yelverton",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "budinch01",
    "PlayerName": "Chase Budinger",
    "Year": "2010-2016",
    "Num": 0
  },
  {
    "PlayerId": "randlch01",
    "PlayerName": "Chasson Randle",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "billuch01",
    "PlayerName": "Chauncey Billups",
    "Year": "1998-2014",
    "Num": 0
  },
  {
    "PlayerId": "johnsch02",
    "PlayerName": "Cheese Johnson",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "diallch01",
    "PlayerName": "Cheick Diallo",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "sambch01",
    "PlayerName": "Cheikh Samb",
    "Year": "2008-2009",
    "Num": 0
  },
  {
    "PlayerId": "parksch02",
    "PlayerName": "Cherokee Parks",
    "Year": "1996-2004",
    "Num": 0
  },
  {
    "PlayerId": "aubucch01",
    "PlayerName": "Chet Aubuchon",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "carlich01",
    "PlayerName": "Chet Carlisle",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "mcnabch01",
    "PlayerName": "Chet McNabb",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "walkech01",
    "PlayerName": "Chet Walker",
    "Year": "1963-1975",
    "Num": 0
  },
  {
    "PlayerId": "halbech01",
    "PlayerName": "Chick Halbert",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "reisech01",
    "PlayerName": "Chick Reiser",
    "Year": "1948-1950",
    "Num": 0
  },
  {
    "PlayerId": "vaughch01",
    "PlayerName": "Chico Vaughn",
    "Year": "1963-1970",
    "Num": 0
  },
  {
    "PlayerId": "onuakch01",
    "PlayerName": "Chinanu Onuaku",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "elonuch01",
    "PlayerName": "Chinemelu Elonu",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "crossch01",
    "PlayerName": "Chink Crossin",
    "Year": "1948-1950",
    "Num": 0
  },
  {
    "PlayerId": "sobekch01",
    "PlayerName": "Chips Sobek",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "anderch01",
    "PlayerName": "Chris Andersen",
    "Year": "2002-2017",
    "Num": 1
  },
  {
    "PlayerId": "anstech01",
    "PlayerName": "Chris Anstey",
    "Year": "1998-2000",
    "Num": 0
  },
  {
    "PlayerId": "babbch01",
    "PlayerName": "Chris Babb",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "boshch01",
    "PlayerName": "Chris Bosh",
    "Year": "2004-2016",
    "Num": 1
  },
  {
    "PlayerId": "bouchch01",
    "PlayerName": "Chris Boucher",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "carrch01",
    "PlayerName": "Chris Carr",
    "Year": "1996-2001",
    "Num": 0
  },
  {
    "PlayerId": "childch01",
    "PlayerName": "Chris Childs",
    "Year": "1995-2003",
    "Num": 0
  },
  {
    "PlayerId": "copelch01",
    "PlayerName": "Chris Copeland",
    "Year": "2013-2016",
    "Num": 0
  },
  {
    "PlayerId": "corchch01",
    "PlayerName": "Chris Corchiani",
    "Year": "1992-1994",
    "Num": 0
  },
  {
    "PlayerId": "crawfch02",
    "PlayerName": "Chris Crawford",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "crawfch01",
    "PlayerName": "Chris Crawford",
    "Year": "1998-2004",
    "Num": 0
  },
  {
    "PlayerId": "daniech01",
    "PlayerName": "Chris Daniels",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "douglch01",
    "PlayerName": "Chris Douglas-Roberts",
    "Year": "2009-2015",
    "Num": 0
  },
  {
    "PlayerId": "dudlech02",
    "PlayerName": "Chris Dudley",
    "Year": "1988-2003",
    "Num": 0
  },
  {
    "PlayerId": "duhonch01",
    "PlayerName": "Chris Duhon",
    "Year": "2005-2013",
    "Num": 0
  },
  {
    "PlayerId": "englech01",
    "PlayerName": "Chris Engler",
    "Year": "1983-1988",
    "Num": 0
  },
  {
    "PlayerId": "fordch01",
    "PlayerName": "Chris Ford",
    "Year": "1973-1982",
    "Num": 0
  },
  {
    "PlayerId": "garnech01",
    "PlayerName": "Chris Garner",
    "Year": "1998-2001",
    "Num": 0
  },
  {
    "PlayerId": "gatlich01",
    "PlayerName": "Chris Gatling",
    "Year": "1992-2002",
    "Num": 0
  },
  {
    "PlayerId": "gouldch01",
    "PlayerName": "Chris Goulding",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "harrich01",
    "PlayerName": "Chris Harris",
    "Year": 1956,
    "Num": 0
  },
  {
    "PlayerId": "herrech01",
    "PlayerName": "Chris Herren",
    "Year": "2000-2001",
    "Num": 0
  },
  {
    "PlayerId": "huntech01",
    "PlayerName": "Chris Hunter",
    "Year": 2010,
    "Num": 0
  },
  {
    "PlayerId": "jeffech01",
    "PlayerName": "Chris Jefferies",
    "Year": "2003-2004",
    "Num": 0
  },
  {
    "PlayerId": "jentch01",
    "PlayerName": "Chris Jent",
    "Year": "1994-1997",
    "Num": 0
  },
  {
    "PlayerId": "johnsch04",
    "PlayerName": "Chris Johnson",
    "Year": "2013-2016",
    "Num": 0
  },
  {
    "PlayerId": "johnsch03",
    "PlayerName": "Chris Johnson",
    "Year": "2011-2013",
    "Num": 0
  },
  {
    "PlayerId": "kamanch01",
    "PlayerName": "Chris Kaman",
    "Year": "2004-2016",
    "Num": 1
  },
  {
    "PlayerId": "kingch01",
    "PlayerName": "Chris King",
    "Year": "1994-1999",
    "Num": 0
  },
  {
    "PlayerId": "mccrach01",
    "PlayerName": "Chris McCray",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "mcculch01",
    "PlayerName": "Chris McCullough",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "mcneach01",
    "PlayerName": "Chris McNealy",
    "Year": "1986-1988",
    "Num": 0
  },
  {
    "PlayerId": "mihmch01",
    "PlayerName": "Chris Mihm",
    "Year": "2001-2009",
    "Num": 0
  },
  {
    "PlayerId": "millsch01",
    "PlayerName": "Chris Mills",
    "Year": "1994-2003",
    "Num": 0
  },
  {
    "PlayerId": "morrich01",
    "PlayerName": "Chris Morris",
    "Year": "1989-1999",
    "Num": 0
  },
  {
    "PlayerId": "mullich01",
    "PlayerName": "Chris Mullin",
    "Year": "1986-2001",
    "Num": 0
  },
  {
    "PlayerId": "munkch01",
    "PlayerName": "Chris Munk",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "obekpch01",
    "PlayerName": "Chris Obekpa",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "owensch01",
    "PlayerName": "Chris Owens",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "paulch01",
    "PlayerName": "Chris Paul",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "portech01",
    "PlayerName": "Chris Porter",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "quinnch01",
    "PlayerName": "Chris Quinn",
    "Year": "2007-2013",
    "Num": 0
  },
  {
    "PlayerId": "richach01",
    "PlayerName": "Chris Richard",
    "Year": "2008-2010",
    "Num": 0
  },
  {
    "PlayerId": "robinch01",
    "PlayerName": "Chris Robinson",
    "Year": "1997-1998",
    "Num": 0
  },
  {
    "PlayerId": "singlch01",
    "PlayerName": "Chris Singleton",
    "Year": "2012-2014",
    "Num": 0
  },
  {
    "PlayerId": "smithch03",
    "PlayerName": "Chris Smith",
    "Year": "1993-1995",
    "Num": 0
  },
  {
    "PlayerId": "smithch05",
    "PlayerName": "Chris Smith",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "taftch01",
    "PlayerName": "Chris Taft",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "udofich01",
    "PlayerName": "Chris Udofia",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "walkech02",
    "PlayerName": "Chris Walker",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "washbch01",
    "PlayerName": "Chris Washburn",
    "Year": "1987-1988",
    "Num": 0
  },
  {
    "PlayerId": "webbech01",
    "PlayerName": "Chris Webber",
    "Year": "1994-2008",
    "Num": 0
  },
  {
    "PlayerId": "welpch01",
    "PlayerName": "Chris Welp",
    "Year": "1988-1990",
    "Num": 0
  },
  {
    "PlayerId": "whitnch01",
    "PlayerName": "Chris Whitney",
    "Year": "1994-2004",
    "Num": 0
  },
  {
    "PlayerId": "wilcoch01",
    "PlayerName": "Chris Wilcox",
    "Year": "2003-2013",
    "Num": 0
  },
  {
    "PlayerId": "wrighch02",
    "PlayerName": "Chris Wright",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "wrighch01",
    "PlayerName": "Chris Wright",
    "Year": "2012-2014",
    "Num": 1
  },
  {
    "PlayerId": "burnsch01",
    "PlayerName": "Christian Burns",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "eyengch01",
    "PlayerName": "Christian Eyenga",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "laettch01",
    "PlayerName": "Christian Laettner",
    "Year": "1993-2005",
    "Num": 0
  },
  {
    "PlayerId": "watfoch01",
    "PlayerName": "Christian Watford",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "woodch01",
    "PlayerName": "Christian Wood",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "coxch01",
    "PlayerName": "Chubby Cox",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "aleksch01",
    "PlayerName": "Chuck Aleksinas",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "connoch01",
    "PlayerName": "Chuck Connors",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "coopech01",
    "PlayerName": "Chuck Cooper",
    "Year": "1951-1956",
    "Num": 0
  },
  {
    "PlayerId": "gardnch01",
    "PlayerName": "Chuck Gardner",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "gilmuch01",
    "PlayerName": "Chuck Gilmur",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "grigsch01",
    "PlayerName": "Chuck Grigsby",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "hayesch01",
    "PlayerName": "Chuck Hayes",
    "Year": "2006-2016",
    "Num": 0
  },
  {
    "PlayerId": "lloydch01",
    "PlayerName": "Chuck Lloyd",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "mencech01",
    "PlayerName": "Chuck Mencel",
    "Year": "1956-1957",
    "Num": 0
  },
  {
    "PlayerId": "mrazoch01",
    "PlayerName": "Chuck Mrazovich",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "nevitch01",
    "PlayerName": "Chuck Nevitt",
    "Year": "1983-1994",
    "Num": 0
  },
  {
    "PlayerId": "noblech01",
    "PlayerName": "Chuck Noble",
    "Year": "1956-1962",
    "Num": 0
  },
  {
    "PlayerId": "osborch01",
    "PlayerName": "Chuck Osborne",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "persoch01",
    "PlayerName": "Chuck Person",
    "Year": "1987-2000",
    "Num": 0
  },
  {
    "PlayerId": "sharech01",
    "PlayerName": "Chuck Share",
    "Year": "1952-1960",
    "Num": 0
  },
  {
    "PlayerId": "terrych01",
    "PlayerName": "Chuck Terry",
    "Year": "1973-1977",
    "Num": 0
  },
  {
    "PlayerId": "willich02",
    "PlayerName": "Chuck Williams",
    "Year": "1971-1978",
    "Num": 0
  },
  {
    "PlayerId": "willich03",
    "PlayerName": "Chuckie Williams",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "atkinch01",
    "PlayerName": "Chucky Atkins",
    "Year": "2000-2010",
    "Num": 0
  },
  {
    "PlayerId": "brownch01",
    "PlayerName": "Chucky Brown",
    "Year": "1990-2002",
    "Num": 0
  },
  {
    "PlayerId": "maduach01",
    "PlayerName": "Chukwudiebere Maduabum",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "powelci01",
    "PlayerName": "Cincinnatus Powell",
    "Year": "1968-1975",
    "Num": 0
  },
  {
    "PlayerId": "brookcl01",
    "PlayerName": "Clarence Brookins",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "glovecl01",
    "PlayerName": "Clarence Glover",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "keacl01",
    "PlayerName": "Clarence Kea",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "weathcl01",
    "PlayerName": "Clarence Weatherspoon",
    "Year": "1993-2005",
    "Num": 0
  },
  {
    "PlayerId": "kellocl01",
    "PlayerName": "Clark Kellogg",
    "Year": "1983-1987",
    "Num": 0
  },
  {
    "PlayerId": "englicl01",
    "PlayerName": "Claude English",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "gregocl01",
    "PlayerName": "Claude Gregory",
    "Year": "1986-1988",
    "Num": 0
  },
  {
    "PlayerId": "overtcl01",
    "PlayerName": "Claude Overton",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "terrycl01",
    "PlayerName": "Claude Terry",
    "Year": "1973-1978",
    "Num": 0
  },
  {
    "PlayerId": "virdecl01",
    "PlayerName": "Claude Virden",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "johnscl02",
    "PlayerName": "Clay Johnson",
    "Year": "1982-1984",
    "Num": 0
  },
  {
    "PlayerId": "earlycl01",
    "PlayerName": "Cleanthony Early",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "haskicl01",
    "PlayerName": "Clem Haskins",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "johnscl01",
    "PlayerName": "Clemon Johnson",
    "Year": "1979-1988",
    "Num": 0
  },
  {
    "PlayerId": "hillcl01",
    "PlayerName": "Cleo Hill",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "buckncl01",
    "PlayerName": "Cleveland Buckner",
    "Year": "1962-1963",
    "Num": 0
  },
  {
    "PlayerId": "alexacl01",
    "PlayerName": "Cliff Alexander",
    "Year": 2016,
    "Num": 1
  },
  {
    "PlayerId": "andercl01",
    "PlayerName": "Cliff Anderson",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "barkecl01",
    "PlayerName": "Cliff Barker",
    "Year": "1950-1952",
    "Num": 0
  },
  {
    "PlayerId": "hagancl01",
    "PlayerName": "Cliff Hagan",
    "Year": "1957-1970",
    "Num": 0
  },
  {
    "PlayerId": "levincl01",
    "PlayerName": "Cliff Levingston",
    "Year": "1983-1995",
    "Num": 0
  },
  {
    "PlayerId": "meelycl01",
    "PlayerName": "Cliff Meely",
    "Year": "1972-1976",
    "Num": 0
  },
  {
    "PlayerId": "pondecl01",
    "PlayerName": "Cliff Pondexter",
    "Year": "1976-1978",
    "Num": 0
  },
  {
    "PlayerId": "robincl01",
    "PlayerName": "Cliff Robinson",
    "Year": "1980-1992",
    "Num": 0
  },
  {
    "PlayerId": "willicl01",
    "PlayerName": "Cliff Williams",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "lettcl01",
    "PlayerName": "Clifford Lett",
    "Year": "1990-1991",
    "Num": 0
  },
  {
    "PlayerId": "raycl01",
    "PlayerName": "Clifford Ray",
    "Year": "1972-1981",
    "Num": 0
  },
  {
    "PlayerId": "robincl02",
    "PlayerName": "Clifford Robinson",
    "Year": "1990-2007",
    "Num": 0
  },
  {
    "PlayerId": "roziecl01",
    "PlayerName": "Clifford Rozier",
    "Year": "1995-1998",
    "Num": 0
  },
  {
    "PlayerId": "capelca01",
    "PlayerName": "Clint Capela",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "chapmcl01",
    "PlayerName": "Clint Chapman",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mcdancl01",
    "PlayerName": "Clint McDaniel",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "richacl01",
    "PlayerName": "Clint Richardson",
    "Year": "1980-1987",
    "Num": 0
  },
  {
    "PlayerId": "wagercl01",
    "PlayerName": "Clint Wager",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "smithcl01",
    "PlayerName": "Clinton Smith",
    "Year": "1987-1991",
    "Num": 0
  },
  {
    "PlayerId": "wheelcl01",
    "PlayerName": "Clinton Wheeler",
    "Year": "1988-1989",
    "Num": 0
  },
  {
    "PlayerId": "dickecl01",
    "PlayerName": "Clyde Dickey",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "drexlcl01",
    "PlayerName": "Clyde Drexler",
    "Year": "1984-1998",
    "Num": 0
  },
  {
    "PlayerId": "leecl01",
    "PlayerName": "Clyde Lee",
    "Year": "1967-1976",
    "Num": 0
  },
  {
    "PlayerId": "lovelcl01",
    "PlayerName": "Clyde Lovellette",
    "Year": "1954-1964",
    "Num": 0
  },
  {
    "PlayerId": "mayescl01",
    "PlayerName": "Clyde Mayes",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "dietrco01",
    "PlayerName": "Coby Dietrick",
    "Year": "1971-1983",
    "Num": 0
  },
  {
    "PlayerId": "karlco01",
    "PlayerName": "Coby Karl",
    "Year": "2008-2010",
    "Num": 0
  },
  {
    "PlayerId": "zelleco01",
    "PlayerName": "Cody Zeller",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "aldrico01",
    "PlayerName": "Cole Aldrich",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "jonesco01",
    "PlayerName": "Collis Jones",
    "Year": "1972-1975",
    "Num": 0
  },
  {
    "PlayerId": "templco01",
    "PlayerName": "Collis Temple",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "iversco01",
    "PlayerName": "Colton Iverson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "henryco01",
    "PlayerName": "Conner Henry",
    "Year": "1987-1988",
    "Num": 0
  },
  {
    "PlayerId": "dierkco01",
    "PlayerName": "Connie Dierking",
    "Year": "1959-1971",
    "Num": 0
  },
  {
    "PlayerId": "hawkico01",
    "PlayerName": "Connie Hawkins",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "normaco01",
    "PlayerName": "Connie Norman",
    "Year": "1975-1979",
    "Num": 0
  },
  {
    "PlayerId": "reaco01",
    "PlayerName": "Connie Rea",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "simmoco01",
    "PlayerName": "Connie Simmons",
    "Year": "1947-1956",
    "Num": 0
  },
  {
    "PlayerId": "beckco01",
    "PlayerName": "Corey Beck",
    "Year": "1996-1999",
    "Num": 0
  },
  {
    "PlayerId": "benjaco01",
    "PlayerName": "Corey Benjamin",
    "Year": "1999-2003",
    "Num": 0
  },
  {
    "PlayerId": "breweco01",
    "PlayerName": "Corey Brewer",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "crowdco01",
    "PlayerName": "Corey Crowder",
    "Year": "1992-1995",
    "Num": 0
  },
  {
    "PlayerId": "gaineco01",
    "PlayerName": "Corey Gaines",
    "Year": "1989-1995",
    "Num": 0
  },
  {
    "PlayerId": "hawkico02",
    "PlayerName": "Corey Hawkins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "maggeco01",
    "PlayerName": "Corey Maggette",
    "Year": "2000-2013",
    "Num": 0
  },
  {
    "PlayerId": "waldeco01",
    "PlayerName": "Corey Walden",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "webstco01",
    "PlayerName": "Corey Webster",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "willico01",
    "PlayerName": "Corey Williams",
    "Year": "1993-1994",
    "Num": 0
  },
  {
    "PlayerId": "blounco01",
    "PlayerName": "Corie Blount",
    "Year": "1994-2004",
    "Num": 0
  },
  {
    "PlayerId": "calhoco01",
    "PlayerName": "Corky Calhoun",
    "Year": "1973-1980",
    "Num": 0
  },
  {
    "PlayerId": "devlico01",
    "PlayerName": "Corky Devlin",
    "Year": "1956-1958",
    "Num": 0
  },
  {
    "PlayerId": "willico02",
    "PlayerName": "Corliss Williamson",
    "Year": "1996-2007",
    "Num": 0
  },
  {
    "PlayerId": "cashco01",
    "PlayerName": "Cornelius Cash",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "warneco01",
    "PlayerName": "Cornell Warner",
    "Year": "1971-1977",
    "Num": 0
  },
  {
    "PlayerId": "thompco01",
    "PlayerName": "Corny Thompson",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "edwarco01",
    "PlayerName": "Corsley Edwards",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "alexaco01",
    "PlayerName": "Cory Alexander",
    "Year": "1996-2005",
    "Num": 0
  },
  {
    "PlayerId": "blackco01",
    "PlayerName": "Cory Blackwell",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "carrco01",
    "PlayerName": "Cory Carr",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "higgico01",
    "PlayerName": "Cory Higgins",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "jeffeco01",
    "PlayerName": "Cory Jefferson",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "josepco01",
    "PlayerName": "Cory Joseph",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "nashco01",
    "PlayerName": "Cotton Nash",
    "Year": "1965-1968",
    "Num": 0
  },
  {
    "PlayerId": "clarkco01",
    "PlayerName": "Coty Clarke",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "gunthco01",
    "PlayerName": "Coulby Gunther",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "alexaco02",
    "PlayerName": "Courtney Alexander",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "fellsco01",
    "PlayerName": "Courtney Fells",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fortsco01",
    "PlayerName": "Courtney Fortson",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "leeco01",
    "PlayerName": "Courtney Lee",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "simsco01",
    "PlayerName": "Courtney Sims",
    "Year": "2008-2009",
    "Num": 0
  },
  {
    "PlayerId": "mcqueco01",
    "PlayerName": "Cozell McQueen",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "brackcr01",
    "PlayerName": "Craig Brackins",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "dillcr01",
    "PlayerName": "Craig Dill",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "dykemcr01",
    "PlayerName": "Craig Dykema",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "ehlocr01",
    "PlayerName": "Craig Ehlo",
    "Year": "1984-1997",
    "Num": 0
  },
  {
    "PlayerId": "hodgecr01",
    "PlayerName": "Craig Hodges",
    "Year": "1983-1992",
    "Num": 0
  },
  {
    "PlayerId": "nealcr01",
    "PlayerName": "Craig Neal",
    "Year": "1989-1991",
    "Num": 0
  },
  {
    "PlayerId": "raymocr01",
    "PlayerName": "Craig Raymond",
    "Year": "1969-1973",
    "Num": 0
  },
  {
    "PlayerId": "sheltcr01",
    "PlayerName": "Craig Shelton",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "smithcr01",
    "PlayerName": "Craig Smith",
    "Year": "2007-2012",
    "Num": 0
  },
  {
    "PlayerId": "spitzcr01",
    "PlayerName": "Craig Spitzer",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "feliccr01",
    "PlayerName": "Cristiano Felicio",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "marticu01",
    "PlayerName": "Cuonzo Martin",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "armstcu01",
    "PlayerName": "Curly Armstrong",
    "Year": "1949-1951",
    "Num": 0
  },
  {
    "PlayerId": "borchcu01",
    "PlayerName": "Curtis Borchardt",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "kitchcu01",
    "PlayerName": "Curtis Kitchen",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "perrycu01",
    "PlayerName": "Curtis Perry",
    "Year": "1971-1978",
    "Num": 0
  },
  {
    "PlayerId": "rowecu01",
    "PlayerName": "Curtis Rowe",
    "Year": "1972-1979",
    "Num": 0
  },
  {
    "PlayerId": "moblecu01",
    "PlayerName": "Cuttino Mobley",
    "Year": "1999-2009",
    "Num": 0
  },
  {
    "PlayerId": "russeda01",
    "PlayerName": "D'Angelo Russell",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "smithdv01",
    "PlayerName": "D'Vauntes Smith-Rivera",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wilcudc01",
    "PlayerName": "D.C. Wilcutt",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "augusdj01",
    "PlayerName": "D.J. Augustin",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "coopedj01",
    "PlayerName": "D.J. Cooper",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "kennedj01",
    "PlayerName": "D.J. Kennedy",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "mbengdj01",
    "PlayerName": "D.J. Mbenga",
    "Year": "2005-2011",
    "Num": 0
  },
  {
    "PlayerId": "seeledj01",
    "PlayerName": "D.J. Seeley",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "stephdj01",
    "PlayerName": "D.J. Stephens",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "strawdj01",
    "PlayerName": "D.J. Strawberry",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "whitedj01",
    "PlayerName": "D.J. White",
    "Year": "2009-2014",
    "Num": 0
  },
  {
    "PlayerId": "wilsodj01",
    "PlayerName": "D.J. Wilson",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "cookda02",
    "PlayerName": "Daequan Cook",
    "Year": "2008-2013",
    "Num": 0
  },
  {
    "PlayerId": "jonesda02",
    "PlayerName": "Dahntay Jones",
    "Year": "2004-2017",
    "Num": 1
  },
  {
    "PlayerId": "summeda01",
    "PlayerName": "DaJuan Summers",
    "Year": "2010-2013",
    "Num": 0
  },
  {
    "PlayerId": "wagneda02",
    "PlayerName": "Dajuan Wagner",
    "Year": "2003-2007",
    "Num": 0
  },
  {
    "PlayerId": "johnsda04",
    "PlayerName": "Dakari Johnson",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "davisda01",
    "PlayerName": "Dale Davis",
    "Year": "1992-2007",
    "Num": 0
  },
  {
    "PlayerId": "ellisda01",
    "PlayerName": "Dale Ellis",
    "Year": "1984-2000",
    "Num": 0
  },
  {
    "PlayerId": "hamilda01",
    "PlayerName": "Dale Hamilton",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "schluda01",
    "PlayerName": "Dale Schlueter",
    "Year": "1969-1978",
    "Num": 0
  },
  {
    "PlayerId": "wilkida01",
    "PlayerName": "Dale Wilkinson",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "bagarda01",
    "PlayerName": "Dalibor Bagaric",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "comegda01",
    "PlayerName": "Dallas Comegys",
    "Year": "1988-1989",
    "Num": 0
  },
  {
    "PlayerId": "thornda01",
    "PlayerName": "Dallas Thornton",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "jonesda03",
    "PlayerName": "Damian Jones",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "lillada01",
    "PlayerName": "Damian Lillard",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "inglida01",
    "PlayerName": "Damien Inglis",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "wilkida02",
    "PlayerName": "Damien Wilkins",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "jamesda01",
    "PlayerName": "Damion James",
    "Year": "2011-2014",
    "Num": 0
  },
  {
    "PlayerId": "leeda03",
    "PlayerName": "Damion Lee",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "markoda01",
    "PlayerName": "Damir Markota",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "rudezda01",
    "PlayerName": "Damjan Rudez",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "jonesda01",
    "PlayerName": "Damon Jones",
    "Year": "1999-2009",
    "Num": 0
  },
  {
    "PlayerId": "stoudda01",
    "PlayerName": "Damon Stoudamire",
    "Year": "1996-2008",
    "Num": 0
  },
  {
    "PlayerId": "brownda02",
    "PlayerName": "Damone Brown",
    "Year": "2002-2005",
    "Num": 0
  },
  {
    "PlayerId": "dotsoda01",
    "PlayerName": "Damyean Dotson",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "anderda02",
    "PlayerName": "Dan Anderson",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "anderda01",
    "PlayerName": "Dan Anderson",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "dickada01",
    "PlayerName": "Dan Dickau",
    "Year": "2003-2008",
    "Num": 0
  },
  {
    "PlayerId": "gadzuda01",
    "PlayerName": "Dan Gadzuric",
    "Year": "2003-2012",
    "Num": 0
  },
  {
    "PlayerId": "godfrda01",
    "PlayerName": "Dan Godfread",
    "Year": "1991-1992",
    "Num": 0
  },
  {
    "PlayerId": "hesteda01",
    "PlayerName": "Dan Hester",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "isselda01",
    "PlayerName": "Dan Issel",
    "Year": "1971-1985",
    "Num": 0
  },
  {
    "PlayerId": "kingda01",
    "PlayerName": "Dan King",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "krausda01",
    "PlayerName": "Dan Kraus",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "langhda01",
    "PlayerName": "Dan Langhi",
    "Year": "2001-2004",
    "Num": 0
  },
  {
    "PlayerId": "majerda01",
    "PlayerName": "Dan Majerle",
    "Year": "1989-2002",
    "Num": 0
  },
  {
    "PlayerId": "mcclida01",
    "PlayerName": "Dan McClintock",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "nwaelda01",
    "PlayerName": "Dan Nwaelele",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "osullda01",
    "PlayerName": "Dan O'Sullivan",
    "Year": "1991-1996",
    "Num": 0
  },
  {
    "PlayerId": "roundda01",
    "PlayerName": "Dan Roundfield",
    "Year": "1976-1987",
    "Num": 0
  },
  {
    "PlayerId": "swartda01",
    "PlayerName": "Dan Swartz",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "tiemada01",
    "PlayerName": "Dan Tieman",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "barroda01",
    "PlayerName": "Dana Barros",
    "Year": "1990-2004",
    "Num": 0
  },
  {
    "PlayerId": "pagetda01",
    "PlayerName": "Dana Pagett",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "suttlda01",
    "PlayerName": "Dane Suttle",
    "Year": "1984-1985",
    "Num": 0
  },
  {
    "PlayerId": "diezda01",
    "PlayerName": "Dani Diez",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "dixonda01",
    "PlayerName": "Daniel Dixon",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ewingda01",
    "PlayerName": "Daniel Ewing",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "gibsoda01",
    "PlayerName": "Daniel Gibson",
    "Year": "2007-2013",
    "Num": 0
  },
  {
    "PlayerId": "hamilda02",
    "PlayerName": "Daniel Hamilton",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "ochefda01",
    "PlayerName": "Daniel Ochefu",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "ortonda01",
    "PlayerName": "Daniel Orton",
    "Year": "2012-2014",
    "Num": 0
  },
  {
    "PlayerId": "santida01",
    "PlayerName": "Daniel Santiago",
    "Year": "2001-2005",
    "Num": 0
  },
  {
    "PlayerId": "sparkda01",
    "PlayerName": "Daniel Sparks",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "theisda01",
    "PlayerName": "Daniel Theis",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "gallida01",
    "PlayerName": "Danilo Gallinari",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "aingeda01",
    "PlayerName": "Danny Ainge",
    "Year": "1982-1995",
    "Num": 0
  },
  {
    "PlayerId": "doyleda01",
    "PlayerName": "Danny Doyle",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "ferryda01",
    "PlayerName": "Danny Ferry",
    "Year": "1991-2003",
    "Num": 0
  },
  {
    "PlayerId": "finnda01",
    "PlayerName": "Danny Finn",
    "Year": "1953-1955",
    "Num": 0
  },
  {
    "PlayerId": "fortsda01",
    "PlayerName": "Danny Fortson",
    "Year": "1998-2007",
    "Num": 0
  },
  {
    "PlayerId": "grangda01",
    "PlayerName": "Danny Granger",
    "Year": "2006-2015",
    "Num": 0
  },
  {
    "PlayerId": "greenda02",
    "PlayerName": "Danny Green",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "mannida01",
    "PlayerName": "Danny Manning",
    "Year": "1989-2003",
    "Num": 0
  },
  {
    "PlayerId": "schayda01",
    "PlayerName": "Danny Schayes",
    "Year": "1982-1999",
    "Num": 0
  },
  {
    "PlayerId": "vraneda01",
    "PlayerName": "Danny Vranes",
    "Year": "1982-1988",
    "Num": 0
  },
  {
    "PlayerId": "wagneda01",
    "PlayerName": "Danny Wagner",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "youngda01",
    "PlayerName": "Danny Young",
    "Year": "1985-1995",
    "Num": 0
  },
  {
    "PlayerId": "cunnida01",
    "PlayerName": "Dante Cunningham",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "exumda01",
    "PlayerName": "Dante Exum",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "houseda01",
    "PlayerName": "Danuel House",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "carrida01",
    "PlayerName": "Darel Carrier",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "hobsoda01",
    "PlayerName": "Darington Hobson",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "saricda01",
    "PlayerName": "Dario Saric",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "atkinda01",
    "PlayerName": "Darion Atkins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnsda03",
    "PlayerName": "Darius Johnson-Odom",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "milesda01",
    "PlayerName": "Darius Miles",
    "Year": "2001-2009",
    "Num": 0
  },
  {
    "PlayerId": "milleda01",
    "PlayerName": "Darius Miller",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "morrida01",
    "PlayerName": "Darius Morris",
    "Year": "2012-2015",
    "Num": 0
  },
  {
    "PlayerId": "songada01",
    "PlayerName": "Darius Songaila",
    "Year": "2004-2011",
    "Num": 0
  },
  {
    "PlayerId": "washida01",
    "PlayerName": "Darius Washington",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "milicda01",
    "PlayerName": "Darko Milicic",
    "Year": "2004-2013",
    "Num": 0
  },
  {
    "PlayerId": "hillmda01",
    "PlayerName": "Darnell Hillman",
    "Year": "1972-1980",
    "Num": 0
  },
  {
    "PlayerId": "jacksda01",
    "PlayerName": "Darnell Jackson",
    "Year": "2009-2011",
    "Num": 0
  },
  {
    "PlayerId": "meeda01",
    "PlayerName": "Darnell Mee",
    "Year": "1994-1995",
    "Num": 0
  },
  {
    "PlayerId": "valenda01",
    "PlayerName": "Darnell Valentine",
    "Year": "1982-1991",
    "Num": 0
  },
  {
    "PlayerId": "imhofda01",
    "PlayerName": "Darrall Imhoff",
    "Year": "1961-1972",
    "Num": 0
  },
  {
    "PlayerId": "allumda01",
    "PlayerName": "Darrell Allums",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "armstda01",
    "PlayerName": "Darrell Armstrong",
    "Year": "1995-2008",
    "Num": 0
  },
  {
    "PlayerId": "arthuda01",
    "PlayerName": "Darrell Arthur",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "brownda01",
    "PlayerName": "Darrell Brown",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "elstoda01",
    "PlayerName": "Darrell Elston",
    "Year": "1975-1977",
    "Num": 0
  },
  {
    "PlayerId": "griffda01",
    "PlayerName": "Darrell Griffith",
    "Year": "1981-1991",
    "Num": 0
  },
  {
    "PlayerId": "hardyda01",
    "PlayerName": "Darrell Hardy",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "lockhda01",
    "PlayerName": "Darrell Lockhart",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "walkeda01",
    "PlayerName": "Darrell Walker",
    "Year": "1984-1993",
    "Num": 0
  },
  {
    "PlayerId": "collida01",
    "PlayerName": "Darren Collison",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "dayeda01",
    "PlayerName": "Darren Daye",
    "Year": "1984-1988",
    "Num": 0
  },
  {
    "PlayerId": "mornida01",
    "PlayerName": "Darren Morningstar",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "tillida01",
    "PlayerName": "Darren Tillis",
    "Year": "1983-1984",
    "Num": 0
  },
  {
    "PlayerId": "martida01",
    "PlayerName": "Darrick Martin",
    "Year": "1995-2008",
    "Num": 0
  },
  {
    "PlayerId": "hancoda01",
    "PlayerName": "Darrin Hancock",
    "Year": "1995-1997",
    "Num": 0
  },
  {
    "PlayerId": "hillida01",
    "PlayerName": "Darrun Hilliard",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "dawkida01",
    "PlayerName": "Darryl Dawkins",
    "Year": "1976-1989",
    "Num": 0
  },
  {
    "PlayerId": "johnsda02",
    "PlayerName": "Darryl Johnson",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "watkida01",
    "PlayerName": "Darryl Watkins",
    "Year": "2008-2012",
    "Num": 0
  },
  {
    "PlayerId": "hamda01",
    "PlayerName": "Darvin Ham",
    "Year": "1997-2005",
    "Num": 0
  },
  {
    "PlayerId": "cookda01",
    "PlayerName": "Darwin Cook",
    "Year": "1981-1989",
    "Num": 0
  },
  {
    "PlayerId": "battoda01",
    "PlayerName": "Dave Batton",
    "Year": "1983-1984",
    "Num": 0
  },
  {
    "PlayerId": "bingda01",
    "PlayerName": "Dave Bing",
    "Year": "1967-1978",
    "Num": 0
  },
  {
    "PlayerId": "brittda01",
    "PlayerName": "Dave Britton",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "buddda01",
    "PlayerName": "Dave Budd",
    "Year": "1961-1965",
    "Num": 0
  },
  {
    "PlayerId": "corzida01",
    "PlayerName": "Dave Corzine",
    "Year": "1979-1991",
    "Num": 0
  },
  {
    "PlayerId": "cowenda01",
    "PlayerName": "Dave Cowens",
    "Year": "1971-1983",
    "Num": 0
  },
  {
    "PlayerId": "debusda01",
    "PlayerName": "Dave DeBusschere",
    "Year": "1963-1974",
    "Num": 0
  },
  {
    "PlayerId": "deutsda01",
    "PlayerName": "Dave Deutsch",
    "Year": 1967,
    "Num": 0
  },
  {
    "PlayerId": "fedorda01",
    "PlayerName": "Dave Fedor",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "feitlda01",
    "PlayerName": "Dave Feitl",
    "Year": "1987-1992",
    "Num": 0
  },
  {
    "PlayerId": "gambeda01",
    "PlayerName": "Dave Gambee",
    "Year": "1959-1970",
    "Num": 0
  },
  {
    "PlayerId": "greenda01",
    "PlayerName": "Dave Greenwood",
    "Year": "1980-1991",
    "Num": 0
  },
  {
    "PlayerId": "gunthda01",
    "PlayerName": "Dave Gunther",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "hendeda01",
    "PlayerName": "Dave Henderson",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "hoppeda01",
    "PlayerName": "Dave Hoppen",
    "Year": "1988-1993",
    "Num": 0
  },
  {
    "PlayerId": "jamerda01",
    "PlayerName": "Dave Jamerson",
    "Year": "1991-1994",
    "Num": 0
  },
  {
    "PlayerId": "johnsda01",
    "PlayerName": "Dave Johnson",
    "Year": "1993-1994",
    "Num": 0
  },
  {
    "PlayerId": "lattida01",
    "PlayerName": "Dave Lattin",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "magleda01",
    "PlayerName": "Dave Magley",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "meyerda01",
    "PlayerName": "Dave Meyers",
    "Year": "1976-1980",
    "Num": 0
  },
  {
    "PlayerId": "minorda01",
    "PlayerName": "Dave Minor",
    "Year": "1952-1953",
    "Num": 0
  },
  {
    "PlayerId": "newmada01",
    "PlayerName": "Dave Newmark",
    "Year": "1969-1971",
    "Num": 0
  },
  {
    "PlayerId": "piontda01",
    "PlayerName": "Dave Piontek",
    "Year": "1957-1963",
    "Num": 0
  },
  {
    "PlayerId": "popsoda01",
    "PlayerName": "Dave Popson",
    "Year": "1989-1992",
    "Num": 0
  },
  {
    "PlayerId": "robisda01",
    "PlayerName": "Dave Robisch",
    "Year": "1972-1984",
    "Num": 0
  },
  {
    "PlayerId": "schelda01",
    "PlayerName": "Dave Schellhase",
    "Year": "1967-1968",
    "Num": 0
  },
  {
    "PlayerId": "scholda01",
    "PlayerName": "Dave Scholz",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "sorenda01",
    "PlayerName": "Dave Sorenson",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "stallda01",
    "PlayerName": "Dave Stallworth",
    "Year": "1966-1975",
    "Num": 0
  },
  {
    "PlayerId": "twardda01",
    "PlayerName": "Dave Twardzik",
    "Year": "1973-1980",
    "Num": 0
  },
  {
    "PlayerId": "wohlda01",
    "PlayerName": "Dave Wohl",
    "Year": "1972-1978",
    "Num": 0
  },
  {
    "PlayerId": "zelleda01",
    "PlayerName": "Dave Zeller",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "anderda03",
    "PlayerName": "David Andersen",
    "Year": "2010-2011",
    "Num": 0
  },
  {
    "PlayerId": "benoida01",
    "PlayerName": "David Benoit",
    "Year": "1992-2001",
    "Num": 0
  },
  {
    "PlayerId": "burnsda01",
    "PlayerName": "David Burns",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "bustida01",
    "PlayerName": "David Bustion",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "cookeda01",
    "PlayerName": "David Cooke",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "gaineda01",
    "PlayerName": "David Gaines",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "harrida01",
    "PlayerName": "David Harrison",
    "Year": "2005-2008",
    "Num": 0
  },
  {
    "PlayerId": "leeda01",
    "PlayerName": "David Lee",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "leeda02",
    "PlayerName": "David Lee",
    "Year": "2006-2017",
    "Num": 0
  },
  {
    "PlayerId": "michida01",
    "PlayerName": "David Michineau",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "noelda01",
    "PlayerName": "David Noel",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "nwabada01",
    "PlayerName": "David Nwaba",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "popeda01",
    "PlayerName": "David Pope",
    "Year": "1985-1986",
    "Num": 0
  },
  {
    "PlayerId": "riverda01",
    "PlayerName": "David Rivers",
    "Year": "1989-1992",
    "Num": 0
  },
  {
    "PlayerId": "robinda01",
    "PlayerName": "David Robinson",
    "Year": "1990-2003",
    "Num": 0
  },
  {
    "PlayerId": "stockda01",
    "PlayerName": "David Stockton",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "thirdda01",
    "PlayerName": "David Thirdkill",
    "Year": "1983-1987",
    "Num": 0
  },
  {
    "PlayerId": "thompda01",
    "PlayerName": "David Thompson",
    "Year": "1976-1984",
    "Num": 0
  },
  {
    "PlayerId": "vanteda01",
    "PlayerName": "David Vanterpool",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "vaughda01",
    "PlayerName": "David Vaughn",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "vaughda02",
    "PlayerName": "David Vaughn",
    "Year": "1996-1999",
    "Num": 0
  },
  {
    "PlayerId": "wearda01",
    "PlayerName": "David Wear",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "wesleda01",
    "PlayerName": "David Wesley",
    "Year": "1994-2007",
    "Num": 0
  },
  {
    "PlayerId": "westda01",
    "PlayerName": "David West",
    "Year": "2004-2018",
    "Num": 1
  },
  {
    "PlayerId": "wingada01",
    "PlayerName": "David Wingate",
    "Year": "1987-2001",
    "Num": 0
  },
  {
    "PlayerId": "woodda01",
    "PlayerName": "David Wood",
    "Year": "1989-1997",
    "Num": 0
  },
  {
    "PlayerId": "berryda01",
    "PlayerName": "Davion Berry",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bertada01",
    "PlayerName": "Davis Bertans",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "reedda01",
    "PlayerName": "Davon Reed",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "foxde01",
    "PlayerName": "De'Aaron Fox",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "garrede01",
    "PlayerName": "Dean Garrett",
    "Year": "1997-2002",
    "Num": 0
  },
  {
    "PlayerId": "meminde01",
    "PlayerName": "Dean Meminger",
    "Year": "1972-1977",
    "Num": 0
  },
  {
    "PlayerId": "olivede01",
    "PlayerName": "Dean Oliver",
    "Year": "2002-2003",
    "Num": 0
  },
  {
    "PlayerId": "tolsode01",
    "PlayerName": "Dean Tolson",
    "Year": "1975-1978",
    "Num": 0
  },
  {
    "PlayerId": "daniede01",
    "PlayerName": "DeAndre Daniels",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jordade01",
    "PlayerName": "DeAndre Jordan",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "liggide01",
    "PlayerName": "DeAndre Liggins",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "bembrde01",
    "PlayerName": "DeAndre' Bembry",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "smithde01",
    "PlayerName": "Deb Smith",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "willode01",
    "PlayerName": "Dedric Willoughby",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "bostde01",
    "PlayerName": "Dee Bost",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "brownde01",
    "PlayerName": "Dee Brown",
    "Year": "1991-2002",
    "Num": 0
  },
  {
    "PlayerId": "brownde03",
    "PlayerName": "Dee Brown",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "gibsode01",
    "PlayerName": "Dee Gibson",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "murrade01",
    "PlayerName": "Dejounte Murray",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "blairde01",
    "PlayerName": "DeJuan Blair",
    "Year": "2010-2016",
    "Num": 0
  },
  {
    "PlayerId": "wheatde01",
    "PlayerName": "DeJuan Wheat",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "beshode01",
    "PlayerName": "Del Beshore",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "ruddde01",
    "PlayerName": "Delaney Rudd",
    "Year": "1990-1993",
    "Num": 0
  },
  {
    "PlayerId": "curryde01",
    "PlayerName": "Dell Curry",
    "Year": "1987-2002",
    "Num": 0
  },
  {
    "PlayerId": "dempsde01",
    "PlayerName": "Dell Demps",
    "Year": "1994-1997",
    "Num": 0
  },
  {
    "PlayerId": "wrighde01",
    "PlayerName": "Delon Wright",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "westde01",
    "PlayerName": "Delonte West",
    "Year": "2005-2012",
    "Num": 0
  },
  {
    "PlayerId": "derozde01",
    "PlayerName": "DeMar DeRozan",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "johnsde02",
    "PlayerName": "DeMarco Johnson",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "couside01",
    "PlayerName": "DeMarcus Cousins",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "nelsode01",
    "PlayerName": "DeMarcus Nelson",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "carrode01",
    "PlayerName": "DeMarre Carroll",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "nichode01",
    "PlayerName": "Demetris Nichols",
    "Year": "2008-2009",
    "Num": 0
  },
  {
    "PlayerId": "calipde01",
    "PlayerName": "Demetrius Calip",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "jacksde01",
    "PlayerName": "Demetrius Jackson",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "gaide01",
    "PlayerName": "Deng Gai",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "awtrede01",
    "PlayerName": "Dennis Awtrey",
    "Year": "1971-1982",
    "Num": 0
  },
  {
    "PlayerId": "bellde01",
    "PlayerName": "Dennis Bell",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "boydde01",
    "PlayerName": "Dennis Boyd",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "duvalde01",
    "PlayerName": "Dennis DuVal",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "greyde01",
    "PlayerName": "Dennis Grey",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "hamilde01",
    "PlayerName": "Dennis Hamilton",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "holmade01",
    "PlayerName": "Dennis Holman",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "hopsode01",
    "PlayerName": "Dennis Hopson",
    "Year": "1988-1992",
    "Num": 0
  },
  {
    "PlayerId": "hornede01",
    "PlayerName": "Dennis Horner",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "johnsde01",
    "PlayerName": "Dennis Johnson",
    "Year": "1977-1990",
    "Num": 0
  },
  {
    "PlayerId": "nuttde01",
    "PlayerName": "Dennis Nutt",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "rodmade01",
    "PlayerName": "Dennis Rodman",
    "Year": "1987-2000",
    "Num": 0
  },
  {
    "PlayerId": "schrode01",
    "PlayerName": "Dennis Schroder",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "scottde01",
    "PlayerName": "Dennis Scott",
    "Year": "1991-2000",
    "Num": 0
  },
  {
    "PlayerId": "smithde03",
    "PlayerName": "Dennis Smith Jr.",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "stewade01",
    "PlayerName": "Dennis Stewart",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "vanzade01",
    "PlayerName": "Dennis Van Zant",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "wuycide01",
    "PlayerName": "Dennis Wuycik",
    "Year": "1973-1975",
    "Num": 0
  },
  {
    "PlayerId": "livinde01",
    "PlayerName": "Denzel Livingston",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "valende01",
    "PlayerName": "Denzel Valentine",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "burtode01",
    "PlayerName": "Deonte Burton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jonesde01",
    "PlayerName": "DeQuan Jones",
    "Year": 2013,
    "Num": 1
  },
  {
    "PlayerId": "anderde01",
    "PlayerName": "Derek Anderson",
    "Year": "1998-2008",
    "Num": 0
  },
  {
    "PlayerId": "cookede01",
    "PlayerName": "Derek Cooke",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fishede01",
    "PlayerName": "Derek Fisher",
    "Year": "1997-2014",
    "Num": 0
  },
  {
    "PlayerId": "grimmde01",
    "PlayerName": "Derek Grimm",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "harpede01",
    "PlayerName": "Derek Harper",
    "Year": "1984-1999",
    "Num": 0
  },
  {
    "PlayerId": "hoodde01",
    "PlayerName": "Derek Hood",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "smithde02",
    "PlayerName": "Derek Smith",
    "Year": "1983-1991",
    "Num": 0
  },
  {
    "PlayerId": "stronde01",
    "PlayerName": "Derek Strong",
    "Year": "1992-2001",
    "Num": 0
  },
  {
    "PlayerId": "willide04",
    "PlayerName": "Derek Willis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnsde03",
    "PlayerName": "DerMarr Johnson",
    "Year": "2001-2008",
    "Num": 0
  },
  {
    "PlayerId": "oconnde01",
    "PlayerName": "Dermie O'Connell",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "willide01",
    "PlayerName": "Deron Williams",
    "Year": "2006-2017",
    "Num": 1
  },
  {
    "PlayerId": "dickede01",
    "PlayerName": "Derrek Dickey",
    "Year": "1974-1978",
    "Num": 0
  },
  {
    "PlayerId": "alstode01",
    "PlayerName": "Derrick Alston",
    "Year": "1995-1997",
    "Num": 0
  },
  {
    "PlayerId": "brownde04",
    "PlayerName": "Derrick Brown",
    "Year": "2010-2012",
    "Num": 0
  },
  {
    "PlayerId": "byarsde01",
    "PlayerName": "Derrick Byars",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "caracde01",
    "PlayerName": "Derrick Caracter",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "chievde01",
    "PlayerName": "Derrick Chievous",
    "Year": "1989-1991",
    "Num": 0
  },
  {
    "PlayerId": "colemde01",
    "PlayerName": "Derrick Coleman",
    "Year": "1991-2005",
    "Num": 0
  },
  {
    "PlayerId": "dialde01",
    "PlayerName": "Derrick Dial",
    "Year": "2000-2004",
    "Num": 0
  },
  {
    "PlayerId": "favorde01",
    "PlayerName": "Derrick Favors",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "gervide01",
    "PlayerName": "Derrick Gervin",
    "Year": "1990-1991",
    "Num": 0
  },
  {
    "PlayerId": "jonesde02",
    "PlayerName": "Derrick Jones",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "lowde01",
    "PlayerName": "Derrick Low",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mckeyde01",
    "PlayerName": "Derrick McKey",
    "Year": "1988-2002",
    "Num": 0
  },
  {
    "PlayerId": "phelpde01",
    "PlayerName": "Derrick Phelps",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "rosede01",
    "PlayerName": "Derrick Rose",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "rowlade01",
    "PlayerName": "Derrick Rowland",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "waltode01",
    "PlayerName": "Derrick Walton",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "whitede01",
    "PlayerName": "Derrick White",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "willide02",
    "PlayerName": "Derrick Williams",
    "Year": "2012-2017",
    "Num": 1
  },
  {
    "PlayerId": "zimmede01",
    "PlayerName": "Derrick Zimmerman",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "diopde01",
    "PlayerName": "DeSagana Diop",
    "Year": "2002-2013",
    "Num": 0
  },
  {
    "PlayerId": "thomade01",
    "PlayerName": "Deshaun Thomas",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "stevede01",
    "PlayerName": "DeShawn Stevenson",
    "Year": "2001-2013",
    "Num": 0
  },
  {
    "PlayerId": "farmede01",
    "PlayerName": "Desmon Farmer",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "fergude01",
    "PlayerName": "Desmond Ferguson",
    "Year": 2004,
    "Num": 0
  },
  {
    "PlayerId": "masonde01",
    "PlayerName": "Desmond Mason",
    "Year": "2001-2010",
    "Num": 0
  },
  {
    "PlayerId": "penigde01",
    "PlayerName": "Desmond Penigar",
    "Year": 2004,
    "Num": 0
  },
  {
    "PlayerId": "schrede01",
    "PlayerName": "Detlef Schrempf",
    "Year": "1986-2001",
    "Num": 0
  },
  {
    "PlayerId": "georgde01",
    "PlayerName": "Devean George",
    "Year": "2000-2010",
    "Num": 0
  },
  {
    "PlayerId": "bookede02",
    "PlayerName": "Devin Booker",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bookede01",
    "PlayerName": "Devin Booker",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "brownde02",
    "PlayerName": "Devin Brown",
    "Year": "2003-2010",
    "Num": 0
  },
  {
    "PlayerId": "durrade01",
    "PlayerName": "Devin Durrant",
    "Year": "1985-1986",
    "Num": 0
  },
  {
    "PlayerId": "ebankde01",
    "PlayerName": "Devin Ebanks",
    "Year": "2011-2013",
    "Num": 0
  },
  {
    "PlayerId": "grayde01",
    "PlayerName": "Devin Gray",
    "Year": "1997-2000",
    "Num": 0
  },
  {
    "PlayerId": "greende01",
    "PlayerName": "Devin Green",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "harride01",
    "PlayerName": "Devin Harris",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "robinde01",
    "PlayerName": "Devin Robinson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "sweetde01",
    "PlayerName": "Devin Sweetney",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "willide03",
    "PlayerName": "Devin Williams",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hardide01",
    "PlayerName": "DeVon Hardin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "marblde01",
    "PlayerName": "Devyn Marble",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "dedmode01",
    "PlayerName": "Dewayne Dedmon",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "scalede01",
    "PlayerName": "DeWayne Scales",
    "Year": "1981-1984",
    "Num": 0
  },
  {
    "PlayerId": "menyade01",
    "PlayerName": "Dewitt Menyard",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "boneyde01",
    "PlayerName": "Dexter Boney",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "cambrde01",
    "PlayerName": "Dexter Cambridge",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "pittmde01",
    "PlayerName": "Dexter Pittman",
    "Year": "2011-2014",
    "Num": 0
  },
  {
    "PlayerId": "shousde01",
    "PlayerName": "Dexter Shouse",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "stricde01",
    "PlayerName": "Dexter Strickland",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "westbde01",
    "PlayerName": "Dexter Westbrook",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "davisde01",
    "PlayerName": "Deyonta Davis",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "wellsde01",
    "PlayerName": "Dez Wells",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "stonedi01",
    "PlayerName": "Diamond Stone",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "garredi02",
    "PlayerName": "Diante Garrett",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "athadi01",
    "PlayerName": "Dick Atha",
    "Year": "1956-1958",
    "Num": 0
  },
  {
    "PlayerId": "barnedi01",
    "PlayerName": "Dick Barnett",
    "Year": "1960-1974",
    "Num": 0
  },
  {
    "PlayerId": "buntdi01",
    "PlayerName": "Dick Bunt",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "cunnidi01",
    "PlayerName": "Dick Cunningham",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "dickedi01",
    "PlayerName": "Dick Dickey",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "duckedi01",
    "PlayerName": "Dick Duckett",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "farledi01",
    "PlayerName": "Dick Farley",
    "Year": "1955-1959",
    "Num": 0
  },
  {
    "PlayerId": "fitzgdi01",
    "PlayerName": "Dick Fitzgerald",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "garmadi01",
    "PlayerName": "Dick Garmaker",
    "Year": "1956-1961",
    "Num": 0
  },
  {
    "PlayerId": "garredi01",
    "PlayerName": "Dick Garrett",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "gibbsdi01",
    "PlayerName": "Dick Gibbs",
    "Year": "1972-1976",
    "Num": 0
  },
  {
    "PlayerId": "groatdi01",
    "PlayerName": "Dick Groat",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "grubadi01",
    "PlayerName": "Dick Grubar",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "hemridi01",
    "PlayerName": "Dick Hemric",
    "Year": "1956-1957",
    "Num": 0
  },
  {
    "PlayerId": "holubdi01",
    "PlayerName": "Dick Holub",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "knostdi01",
    "PlayerName": "Dick Knostman",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "leedi01",
    "PlayerName": "Dick Lee",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "mcguidi01",
    "PlayerName": "Dick McGuire",
    "Year": "1950-1960",
    "Num": 0
  },
  {
    "PlayerId": "mehendi01",
    "PlayerName": "Dick Mehen",
    "Year": "1950-1952",
    "Num": 0
  },
  {
    "PlayerId": "milledi01",
    "PlayerName": "Dick Miller",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "murphdi01",
    "PlayerName": "Dick Murphy",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "nemeldi01",
    "PlayerName": "Dick Nemelka",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "okeefdi01",
    "PlayerName": "Dick O'Keefe",
    "Year": "1948-1951",
    "Num": 0
  },
  {
    "PlayerId": "rickedi01",
    "PlayerName": "Dick Ricketts",
    "Year": "1956-1958",
    "Num": 0
  },
  {
    "PlayerId": "rosendi01",
    "PlayerName": "Dick Rosenthal",
    "Year": "1955-1957",
    "Num": 0
  },
  {
    "PlayerId": "schnidi01",
    "PlayerName": "Dick Schnittker",
    "Year": "1951-1958",
    "Num": 0
  },
  {
    "PlayerId": "schuldi01",
    "PlayerName": "Dick Schulz",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "shriddi01",
    "PlayerName": "Dick Shrider",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "snydedi01",
    "PlayerName": "Dick Snyder",
    "Year": "1967-1979",
    "Num": 0
  },
  {
    "PlayerId": "surhodi01",
    "PlayerName": "Dick Surhoff",
    "Year": "1953-1954",
    "Num": 0
  },
  {
    "PlayerId": "triptdi01",
    "PlayerName": "Dick Triptow",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "vanardi01",
    "PlayerName": "Dick Van Arsdale",
    "Year": "1966-1977",
    "Num": 0
  },
  {
    "PlayerId": "wehrdi01",
    "PlayerName": "Dick Wehr",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "simpkdi01",
    "PlayerName": "Dickey Simpkins",
    "Year": "1995-2002",
    "Num": 0
  },
  {
    "PlayerId": "thompdi01",
    "PlayerName": "Dijon Thompson",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "eddledi01",
    "PlayerName": "Dike Eddleman",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "mutomdi01",
    "PlayerName": "Dikembe Mutombo",
    "Year": "1992-2009",
    "Num": 0
  },
  {
    "PlayerId": "crockdi01",
    "PlayerName": "Dillard Crocker",
    "Year": "1949-1953",
    "Num": 0
  },
  {
    "PlayerId": "brookdi01",
    "PlayerName": "Dillon Brooks",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "agravdi01",
    "PlayerName": "Dimitrios Agravanis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "martidi01",
    "PlayerName": "Dino Martin",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "radjadi01",
    "PlayerName": "Dino Radja",
    "Year": "1994-1997",
    "Num": 0
  },
  {
    "PlayerId": "glovedi01",
    "PlayerName": "Dion Glover",
    "Year": "2000-2005",
    "Num": 0
  },
  {
    "PlayerId": "waitedi01",
    "PlayerName": "Dion Waiters",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "chrisdi01",
    "PlayerName": "Dionte Christmas",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "minnidi01",
    "PlayerName": "Dirk Minniefield",
    "Year": "1986-1988",
    "Num": 0
  },
  {
    "PlayerId": "nowitdi01",
    "PlayerName": "Dirk Nowitzki",
    "Year": "1999-2018",
    "Num": 1
  },
  {
    "PlayerId": "thiamdj01",
    "PlayerName": "Djibril Thiam",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "riverdo01",
    "PlayerName": "Doc Rivers",
    "Year": "1984-1996",
    "Num": 0
  },
  {
    "PlayerId": "schaydo01",
    "PlayerName": "Dolph Schayes",
    "Year": "1950-1964",
    "Num": 0
  },
  {
    "PlayerId": "sabondo01",
    "PlayerName": "Domantas Sabonis",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "mcguido01",
    "PlayerName": "Dominic McGuire",
    "Year": "2008-2013",
    "Num": 0
  },
  {
    "PlayerId": "pressdo01",
    "PlayerName": "Dominic Pressley",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "waterdo01",
    "PlayerName": "Dominic Waters",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jonesdo02",
    "PlayerName": "Dominique Jones",
    "Year": "2011-2013",
    "Num": 0
  },
  {
    "PlayerId": "wilkido01",
    "PlayerName": "Dominique Wilkins",
    "Year": "1983-1999",
    "Num": 0
  },
  {
    "PlayerId": "ackerdo01",
    "PlayerName": "Don Ackerman",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "adamsdo01",
    "PlayerName": "Don Adams",
    "Year": "1971-1977",
    "Num": 0
  },
  {
    "PlayerId": "anieldo01",
    "PlayerName": "Don Anielak",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "asmondo01",
    "PlayerName": "Don Asmonga",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "barksdo01",
    "PlayerName": "Don Barksdale",
    "Year": "1952-1955",
    "Num": 0
  },
  {
    "PlayerId": "bielkdo01",
    "PlayerName": "Don Bielke",
    "Year": 1956,
    "Num": 0
  },
  {
    "PlayerId": "bovendo01",
    "PlayerName": "Don Boven",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "busedo01",
    "PlayerName": "Don Buse",
    "Year": "1973-1985",
    "Num": 0
  },
  {
    "PlayerId": "carlodo01",
    "PlayerName": "Don Carlos",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "carlsdo01",
    "PlayerName": "Don Carlson",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "chanedo01",
    "PlayerName": "Don Chaney",
    "Year": "1969-1980",
    "Num": 0
  },
  {
    "PlayerId": "collido02",
    "PlayerName": "Don Collins",
    "Year": "1981-1987",
    "Num": 0
  },
  {
    "PlayerId": "deedo01",
    "PlayerName": "Don Dee",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "eliasdo01",
    "PlayerName": "Don Eliason",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "forddo01",
    "PlayerName": "Don Ford",
    "Year": "1976-1982",
    "Num": 0
  },
  {
    "PlayerId": "gratedo01",
    "PlayerName": "Don Grate",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "hanrado01",
    "PlayerName": "Don Hanrahan",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "henrido01",
    "PlayerName": "Don Henriksen",
    "Year": "1953-1955",
    "Num": 0
  },
  {
    "PlayerId": "kojisdo01",
    "PlayerName": "Don Kojis",
    "Year": "1964-1975",
    "Num": 0
  },
  {
    "PlayerId": "lofgrdo01",
    "PlayerName": "Don Lofgran",
    "Year": "1951-1954",
    "Num": 0
  },
  {
    "PlayerId": "macledo01",
    "PlayerName": "Don MacLean",
    "Year": "1993-2001",
    "Num": 0
  },
  {
    "PlayerId": "martido01",
    "PlayerName": "Don Martin",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "maydo01",
    "PlayerName": "Don May",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "nelsodo01",
    "PlayerName": "Don Nelson",
    "Year": "1963-1976",
    "Num": 0
  },
  {
    "PlayerId": "ohldo01",
    "PlayerName": "Don Ohl",
    "Year": "1961-1970",
    "Num": 0
  },
  {
    "PlayerId": "ottendo01",
    "PlayerName": "Don Otten",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "putnado01",
    "PlayerName": "Don Putman",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "raydo01",
    "PlayerName": "Don Ray",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "rehfedo01",
    "PlayerName": "Don Rehfeldt",
    "Year": "1951-1952",
    "Num": 0
  },
  {
    "PlayerId": "reiddo01",
    "PlayerName": "Don Reid",
    "Year": "1996-2003",
    "Num": 0
  },
  {
    "PlayerId": "savagdo01",
    "PlayerName": "Don Savage",
    "Year": "1952-1957",
    "Num": 0
  },
  {
    "PlayerId": "smithdo02",
    "PlayerName": "Don Smith",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "smithdo01",
    "PlayerName": "Don Smith",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "sundedo01",
    "PlayerName": "Don Sunderlage",
    "Year": "1954-1955",
    "Num": 0
  },
  {
    "PlayerId": "hodgedo01",
    "PlayerName": "Donald Hodge",
    "Year": "1992-1996",
    "Num": 0
  },
  {
    "PlayerId": "royaldo01",
    "PlayerName": "Donald Royal",
    "Year": "1990-1998",
    "Num": 0
  },
  {
    "PlayerId": "sidledo01",
    "PlayerName": "Donald Sidle",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "sloando01",
    "PlayerName": "Donald Sloan",
    "Year": "2012-2016",
    "Num": 1
  },
  {
    "PlayerId": "washido01",
    "PlayerName": "Donald Washington",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "whitedo01",
    "PlayerName": "Donald Whiteside",
    "Year": "1997-1998",
    "Num": 0
  },
  {
    "PlayerId": "motiedo01",
    "PlayerName": "Donatas Motiejunas",
    "Year": "2013-2017",
    "Num": 1
  },
  {
    "PlayerId": "taylodo01",
    "PlayerName": "Donell Taylor",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "harvedo01",
    "PlayerName": "Donnell Harvey",
    "Year": "2001-2005",
    "Num": 0
  },
  {
    "PlayerId": "boycedo01",
    "PlayerName": "Donnie Boyce",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "butchdo01",
    "PlayerName": "Donnie Butcher",
    "Year": "1962-1966",
    "Num": 0
  },
  {
    "PlayerId": "formado01",
    "PlayerName": "Donnie Forman",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "freemdo01",
    "PlayerName": "Donnie Freeman",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "marshdo02",
    "PlayerName": "Donny Marshall",
    "Year": "1996-2003",
    "Num": 0
  },
  {
    "PlayerId": "mitchdo01",
    "PlayerName": "Donovan Mitchell",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "smithdo04",
    "PlayerName": "Donta Smith",
    "Year": "2005-2006",
    "Num": 0
  },
  {
    "PlayerId": "jonesdo01",
    "PlayerName": "Dontae' Jones",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "greendo01",
    "PlayerName": "Donte Greene",
    "Year": "2009-2012",
    "Num": 0
  },
  {
    "PlayerId": "jeffedo01",
    "PlayerName": "Dontell Jefferson",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "wingfdo01",
    "PlayerName": "Dontonio Wingfield",
    "Year": "1995-1998",
    "Num": 0
  },
  {
    "PlayerId": "marshdo01",
    "PlayerName": "Donyell Marshall",
    "Year": "1995-2009",
    "Num": 0
  },
  {
    "PlayerId": "wrighdo01",
    "PlayerName": "Dorell Wright",
    "Year": "2005-2015",
    "Num": 0
  },
  {
    "PlayerId": "finnedo01",
    "PlayerName": "Dorian Finney-Smith",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "murredo01",
    "PlayerName": "Dorie Murrey",
    "Year": "1967-1972",
    "Num": 0
  },
  {
    "PlayerId": "lambdo01",
    "PlayerName": "Doron Lamb",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "bolstdo01",
    "PlayerName": "Doug Bolstorff",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "chrisdo01",
    "PlayerName": "Doug Christie",
    "Year": "1993-2007",
    "Num": 0
  },
  {
    "PlayerId": "collido01",
    "PlayerName": "Doug Collins",
    "Year": "1974-1981",
    "Num": 0
  },
  {
    "PlayerId": "edwardo01",
    "PlayerName": "Doug Edwards",
    "Year": "1994-1996",
    "Num": 0
  },
  {
    "PlayerId": "holcodo01",
    "PlayerName": "Doug Holcomb",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "kistldo01",
    "PlayerName": "Doug Kistler",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "leedo01",
    "PlayerName": "Doug Lee",
    "Year": "1992-1995",
    "Num": 0
  },
  {
    "PlayerId": "mcderdo01",
    "PlayerName": "Doug McDermott",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "moedo01",
    "PlayerName": "Doug Moe",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "overtdo01",
    "PlayerName": "Doug Overton",
    "Year": "1993-2004",
    "Num": 0
  },
  {
    "PlayerId": "rothdo01",
    "PlayerName": "Doug Roth",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "simsdo01",
    "PlayerName": "Doug Sims",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "smithdo03",
    "PlayerName": "Doug Smith",
    "Year": "1992-1996",
    "Num": 0
  },
  {
    "PlayerId": "westdo01",
    "PlayerName": "Doug West",
    "Year": "1990-2001",
    "Num": 0
  },
  {
    "PlayerId": "parrado01",
    "PlayerName": "Doyle Parrack",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "bendedr01",
    "PlayerName": "Dragan Bender",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "tarladr01",
    "PlayerName": "Dragan Tarlac",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "greendr01",
    "PlayerName": "Draymond Green",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "petrodr01",
    "PlayerName": "Drazen Petrovic",
    "Year": "1990-1993",
    "Num": 0
  },
  {
    "PlayerId": "barrydr01",
    "PlayerName": "Drew Barry",
    "Year": "1998-2000",
    "Num": 0
  },
  {
    "PlayerId": "crawfan01",
    "PlayerName": "Drew Crawford",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "goodedr01",
    "PlayerName": "Drew Gooden",
    "Year": "2003-2016",
    "Num": 0
  },
  {
    "PlayerId": "gordodr01",
    "PlayerName": "Drew Gordon",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "causwdu01",
    "PlayerName": "Duane Causwell",
    "Year": "1991-2001",
    "Num": 0
  },
  {
    "PlayerId": "coopedu01",
    "PlayerName": "Duane Cooper",
    "Year": "1993-1994",
    "Num": 0
  },
  {
    "PlayerId": "ferredu01",
    "PlayerName": "Duane Ferrell",
    "Year": "1989-1999",
    "Num": 0
  },
  {
    "PlayerId": "kluehdu01",
    "PlayerName": "Duane Klueh",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "washidu01",
    "PlayerName": "Duane Washington",
    "Year": "1988-1993",
    "Num": 0
  },
  {
    "PlayerId": "willidu01",
    "PlayerName": "Duck Williams",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "bradldu01",
    "PlayerName": "Dudley Bradley",
    "Year": "1980-1989",
    "Num": 0
  },
  {
    "PlayerId": "dukandu01",
    "PlayerName": "Duje Dukan",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "scottdu01",
    "PlayerName": "Durand Scott",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "dilladw01",
    "PlayerName": "Dwaine Dillard",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "bacondw01",
    "PlayerName": "Dwayne Bacon",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "collidw01",
    "PlayerName": "Dwayne Collins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "davisdw02",
    "PlayerName": "Dwayne Davis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jonesdw02",
    "PlayerName": "Dwayne Jones",
    "Year": "2006-2010",
    "Num": 0
  },
  {
    "PlayerId": "mccladw01",
    "PlayerName": "Dwayne McClain",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "mortodw01",
    "PlayerName": "Dwayne Morton",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "poleedw01",
    "PlayerName": "Dwayne Polee",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "schindw01",
    "PlayerName": "Dwayne Schintzius",
    "Year": "1991-1999",
    "Num": 0
  },
  {
    "PlayerId": "whitfdw01",
    "PlayerName": "Dwayne Whitfield",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "anderdw01",
    "PlayerName": "Dwight Anderson",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "buyckdw01",
    "PlayerName": "Dwight Buycks",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "davisdw01",
    "PlayerName": "Dwight Davis",
    "Year": "1973-1977",
    "Num": 0
  },
  {
    "PlayerId": "howardw01",
    "PlayerName": "Dwight Howard",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "jonesdw01",
    "PlayerName": "Dwight Jones",
    "Year": "1974-1983",
    "Num": 0
  },
  {
    "PlayerId": "poweldw01",
    "PlayerName": "Dwight Powell",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "walledw01",
    "PlayerName": "Dwight Waller",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "wadedw01",
    "PlayerName": "Dwyane Wade",
    "Year": "2004-2018",
    "Num": 1
  },
  {
    "PlayerId": "nixdy01",
    "PlayerName": "Dyron Nix",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "mooreet01",
    "PlayerName": "E'Twaun Moore",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "colemec01",
    "PlayerName": "E.C. Coleman",
    "Year": "1974-1979",
    "Num": 0
  },
  {
    "PlayerId": "singlej01",
    "PlayerName": "E.J. Singler",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "barroea01",
    "PlayerName": "Earl Barron",
    "Year": "2006-2015",
    "Num": 0
  },
  {
    "PlayerId": "boykiea01",
    "PlayerName": "Earl Boykins",
    "Year": "1999-2012",
    "Num": 0
  },
  {
    "PlayerId": "clarkea01",
    "PlayerName": "Earl Clark",
    "Year": "2010-2015",
    "Num": 0
  },
  {
    "PlayerId": "curetea01",
    "PlayerName": "Earl Cureton",
    "Year": "1981-1997",
    "Num": 0
  },
  {
    "PlayerId": "doddea01",
    "PlayerName": "Earl Dodd",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "evansea01",
    "PlayerName": "Earl Evans",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "gardnea01",
    "PlayerName": "Earl Gardner",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "jonesea01",
    "PlayerName": "Earl Jones",
    "Year": "1985-1986",
    "Num": 0
  },
  {
    "PlayerId": "lloydea01",
    "PlayerName": "Earl Lloyd",
    "Year": "1951-1960",
    "Num": 0
  },
  {
    "PlayerId": "monroea01",
    "PlayerName": "Earl Monroe",
    "Year": "1968-1980",
    "Num": 0
  },
  {
    "PlayerId": "shannea01",
    "PlayerName": "Earl Shannon",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "tatumea01",
    "PlayerName": "Earl Tatum",
    "Year": "1977-1980",
    "Num": 0
  },
  {
    "PlayerId": "watsoea01",
    "PlayerName": "Earl Watson",
    "Year": "2002-2014",
    "Num": 0
  },
  {
    "PlayerId": "williea01",
    "PlayerName": "Earl Williams",
    "Year": "1975-1979",
    "Num": 0
  },
  {
    "PlayerId": "higgiea01",
    "PlayerName": "Earle Higgins",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "killuea01",
    "PlayerName": "Earnie Killum",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "parhaea01",
    "PlayerName": "Easy Parham",
    "Year": "1949-1951",
    "Num": 0
  },
  {
    "PlayerId": "barteed01",
    "PlayerName": "Ed Bartels",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "beached01",
    "PlayerName": "Ed Beach",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "biedeed01",
    "PlayerName": "Ed Biedenbach",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "burtoed01",
    "PlayerName": "Ed Burton",
    "Year": "1962-1965",
    "Num": 0
  },
  {
    "PlayerId": "conlied01",
    "PlayerName": "Ed Conlin",
    "Year": "1956-1962",
    "Num": 0
  },
  {
    "PlayerId": "dahleed01",
    "PlayerName": "Ed Dahler",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "danieed01",
    "PlayerName": "Ed Daniel",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "davised01",
    "PlayerName": "Ed Davis",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "earleed01",
    "PlayerName": "Ed Earle",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "flemied01",
    "PlayerName": "Ed Fleming",
    "Year": "1956-1960",
    "Num": 0
  },
  {
    "PlayerId": "gaydaed01",
    "PlayerName": "Ed Gayda",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "grayed01",
    "PlayerName": "Ed Gray",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "hortoed01",
    "PlayerName": "Ed Horton",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "johnsed01",
    "PlayerName": "Ed Johnson",
    "Year": "1969-1971",
    "Num": 0
  },
  {
    "PlayerId": "kalafed01",
    "PlayerName": "Ed Kalafat",
    "Year": "1955-1957",
    "Num": 0
  },
  {
    "PlayerId": "kasided01",
    "PlayerName": "Ed Kasid",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "leedeed01",
    "PlayerName": "Ed Leede",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "macaued01",
    "PlayerName": "Ed Macauley",
    "Year": "1950-1959",
    "Num": 0
  },
  {
    "PlayerId": "mannied01",
    "PlayerName": "Ed Manning",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "melvied01",
    "PlayerName": "Ed Melvin",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "mikaned01",
    "PlayerName": "Ed Mikan",
    "Year": "1949-1954",
    "Num": 0
  },
  {
    "PlayerId": "nealyed01",
    "PlayerName": "Ed Nealy",
    "Year": "1983-1993",
    "Num": 0
  },
  {
    "PlayerId": "obanned01",
    "PlayerName": "Ed O'Bannon",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "petered01",
    "PlayerName": "Ed Peterson",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "pincked01",
    "PlayerName": "Ed Pinckney",
    "Year": "1986-1997",
    "Num": 0
  },
  {
    "PlayerId": "rainsed01",
    "PlayerName": "Ed Rains",
    "Year": "1982-1983",
    "Num": 0
  },
  {
    "PlayerId": "ratleed01",
    "PlayerName": "Ed Ratleff",
    "Year": "1974-1978",
    "Num": 0
  },
  {
    "PlayerId": "sadowed01",
    "PlayerName": "Ed Sadowski",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "searced01",
    "PlayerName": "Ed Searcy",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "sheroed01",
    "PlayerName": "Ed Sherod",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "smithed01",
    "PlayerName": "Ed Smith",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "stanced01",
    "PlayerName": "Ed Stanczak",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "stokeed01",
    "PlayerName": "Ed Stokes",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "basdeed01",
    "PlayerName": "Eddie Basden",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "gilled01",
    "PlayerName": "Eddie Gill",
    "Year": "2001-2009",
    "Num": 0
  },
  {
    "PlayerId": "griffed01",
    "PlayerName": "Eddie Griffin",
    "Year": "2002-2007",
    "Num": 0
  },
  {
    "PlayerId": "houseed01",
    "PlayerName": "Eddie House",
    "Year": "2001-2011",
    "Num": 0
  },
  {
    "PlayerId": "hugheed01",
    "PlayerName": "Eddie Hughes",
    "Year": "1988-1990",
    "Num": 0
  },
  {
    "PlayerId": "johnsed03",
    "PlayerName": "Eddie Johnson",
    "Year": "1982-1999",
    "Num": 0
  },
  {
    "PlayerId": "johnsed02",
    "PlayerName": "Eddie Johnson",
    "Year": "1978-1987",
    "Num": 0
  },
  {
    "PlayerId": "jonesed02",
    "PlayerName": "Eddie Jones",
    "Year": "1995-2008",
    "Num": 0
  },
  {
    "PlayerId": "jordaed01",
    "PlayerName": "Eddie Jordan",
    "Year": "1978-1984",
    "Num": 0
  },
  {
    "PlayerId": "wilkied01",
    "PlayerName": "Eddie Lee Wilkins",
    "Year": "1985-1993",
    "Num": 0
  },
  {
    "PlayerId": "masted01",
    "PlayerName": "Eddie Mast",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "milesed01",
    "PlayerName": "Eddie Miles",
    "Year": "1964-1972",
    "Num": 0
  },
  {
    "PlayerId": "milleed01",
    "PlayerName": "Eddie Miller",
    "Year": "1953-1954",
    "Num": 0
  },
  {
    "PlayerId": "owensed01",
    "PlayerName": "Eddie Owens",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "philled01",
    "PlayerName": "Eddie Phillips",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "robined01",
    "PlayerName": "Eddie Robinson",
    "Year": "2000-2004",
    "Num": 0
  },
  {
    "PlayerId": "curryed01",
    "PlayerName": "Eddy Curry",
    "Year": "2002-2013",
    "Num": 0
  },
  {
    "PlayerId": "jonesed01",
    "PlayerName": "Edgar Jones",
    "Year": "1981-1986",
    "Num": 0
  },
  {
    "PlayerId": "laceyed01",
    "PlayerName": "Edgar Lacey",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "sosaed01",
    "PlayerName": "Edgar Sosa",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bavcied01",
    "PlayerName": "Edin Bavcic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "sumneed01",
    "PlayerName": "Edmond Sumner",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lawreed01",
    "PlayerName": "Edmund Lawrence",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "najered01",
    "PlayerName": "Eduardo Najera",
    "Year": "2001-2012",
    "Num": 0
  },
  {
    "PlayerId": "ubileed01",
    "PlayerName": "Edwin Ubiles",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "tavarwa01",
    "PlayerName": "Edy Tavares",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "rentzef01",
    "PlayerName": "Efthimi Rentzias",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "mockeeg01",
    "PlayerName": "Egidijus Mockevicius",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ugboaej01",
    "PlayerName": "Ejike Ugboaja",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "udohek01",
    "PlayerName": "Ekpe Udoh",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "campbel01",
    "PlayerName": "Elden Campbell",
    "Year": "1991-2005",
    "Num": 0
  },
  {
    "PlayerId": "recasel01",
    "PlayerName": "Eldridge Recasner",
    "Year": "1995-2002",
    "Num": 0
  },
  {
    "PlayerId": "paytoel01",
    "PlayerName": "Elfrid Payton",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "bayloel01",
    "PlayerName": "Elgin Baylor",
    "Year": "1959-1972",
    "Num": 0
  },
  {
    "PlayerId": "cookel01",
    "PlayerName": "Elgin Cook",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "harriel01",
    "PlayerName": "Elias Harris",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "johnsel01",
    "PlayerName": "Elijah Johnson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "millsel01",
    "PlayerName": "Elijah Millsap",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "perryel01",
    "PlayerName": "Elliot Perry",
    "Year": "1992-2002",
    "Num": 0
  },
  {
    "PlayerId": "williel01",
    "PlayerName": "Elliot Williams",
    "Year": "2012-2016",
    "Num": 0
  },
  {
    "PlayerId": "behnkel01",
    "PlayerName": "Elmer Behnke",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "benneel01",
    "PlayerName": "Elmer Bennett",
    "Year": "1995-1997",
    "Num": 0
  },
  {
    "PlayerId": "gaineel01",
    "PlayerName": "Elmer Gainer",
    "Year": "1948-1950",
    "Num": 0
  },
  {
    "PlayerId": "morgeel01",
    "PlayerName": "Elmore Morgenthaler",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "smithel01",
    "PlayerName": "Elmore Smith",
    "Year": "1972-1979",
    "Num": 0
  },
  {
    "PlayerId": "spencel01",
    "PlayerName": "Elmore Spencer",
    "Year": "1993-1997",
    "Num": 0
  },
  {
    "PlayerId": "webstel01",
    "PlayerName": "Elnardo Webster",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "vargael01",
    "PlayerName": "Eloy Vargas",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "turneel01",
    "PlayerName": "Elston Turner",
    "Year": "1982-1989",
    "Num": 0
  },
  {
    "PlayerId": "brandel01",
    "PlayerName": "Elton Brand",
    "Year": "2000-2016",
    "Num": 0
  },
  {
    "PlayerId": "mcgriel01",
    "PlayerName": "Elton McGriff",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "hayesel01",
    "PlayerName": "Elvin Hayes",
    "Year": "1969-1984",
    "Num": 0
  },
  {
    "PlayerId": "ivoryel01",
    "PlayerName": "Elvin Ivory",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "bryanem01",
    "PlayerName": "Em Bryant",
    "Year": "1965-1972",
    "Num": 0
  },
  {
    "PlayerId": "davisem01",
    "PlayerName": "Emanual Davis",
    "Year": "1997-2003",
    "Num": 0
  },
  {
    "PlayerId": "okafoem01",
    "PlayerName": "Emeka Okafor",
    "Year": "2005-2013",
    "Num": 0
  },
  {
    "PlayerId": "preldem01",
    "PlayerName": "Emir Preldzic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mudiaem01",
    "PlayerName": "Emmanuel Mudiay",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "kanteen01",
    "PlayerName": "Enes Kanter",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "whatlen01",
    "PlayerName": "Ennis Whatley",
    "Year": "1984-1997",
    "Num": 0
  },
  {
    "PlayerId": "lorbeer01",
    "PlayerName": "Erazem Lorbek",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "anderer01",
    "PlayerName": "Eric Anderson",
    "Year": "1993-1994",
    "Num": 0
  },
  {
    "PlayerId": "atkiner01",
    "PlayerName": "Eric Atkins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bledser01",
    "PlayerName": "Eric Bledsoe",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "dawsoer01",
    "PlayerName": "Eric Dawson",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "fernser01",
    "PlayerName": "Eric Fernsten",
    "Year": "1976-1984",
    "Num": 0
  },
  {
    "PlayerId": "gordoer01",
    "PlayerName": "Eric Gordon",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "griffer01",
    "PlayerName": "Eric Griffin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnser01",
    "PlayerName": "Eric Johnson",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "leckner01",
    "PlayerName": "Eric Leckner",
    "Year": "1989-1997",
    "Num": 0
  },
  {
    "PlayerId": "maynoer01",
    "PlayerName": "Eric Maynor",
    "Year": "2010-2014",
    "Num": 0
  },
  {
    "PlayerId": "mcwiler01",
    "PlayerName": "Eric McWilliams",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "mobleer01",
    "PlayerName": "Eric Mobley",
    "Year": "1995-1997",
    "Num": 0
  },
  {
    "PlayerId": "moneyer01",
    "PlayerName": "Eric Money",
    "Year": "1975-1980",
    "Num": 0
  },
  {
    "PlayerId": "montrer01",
    "PlayerName": "Eric Montross",
    "Year": "1995-2002",
    "Num": 0
  },
  {
    "PlayerId": "moreler01",
    "PlayerName": "Eric Moreland",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "murdoer01",
    "PlayerName": "Eric Murdock",
    "Year": "1992-2000",
    "Num": 0
  },
  {
    "PlayerId": "piatker01",
    "PlayerName": "Eric Piatkowski",
    "Year": "1995-2008",
    "Num": 0
  },
  {
    "PlayerId": "rileyer01",
    "PlayerName": "Eric Riley",
    "Year": "1994-1999",
    "Num": 0
  },
  {
    "PlayerId": "snower01",
    "PlayerName": "Eric Snow",
    "Year": "1996-2008",
    "Num": 0
  },
  {
    "PlayerId": "washier01",
    "PlayerName": "Eric Washington",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "whiteer01",
    "PlayerName": "Eric White",
    "Year": "1988-1989",
    "Num": 0
  },
  {
    "PlayerId": "willier01",
    "PlayerName": "Eric Williams",
    "Year": "1996-2007",
    "Num": 0
  },
  {
    "PlayerId": "barkler01",
    "PlayerName": "Erick Barkley",
    "Year": "2001-2002",
    "Num": 0
  },
  {
    "PlayerId": "dampier01",
    "PlayerName": "Erick Dampier",
    "Year": "1997-2012",
    "Num": 0
  },
  {
    "PlayerId": "greener01",
    "PlayerName": "Erick Green",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "stricer01",
    "PlayerName": "Erick Strickland",
    "Year": "1997-2005",
    "Num": 0
  },
  {
    "PlayerId": "danieer01",
    "PlayerName": "Erik Daniels",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "mccreer01",
    "PlayerName": "Erik McCree",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "murpher01",
    "PlayerName": "Erik Murphy",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "browner01",
    "PlayerName": "Ernest Brown",
    "Year": 2002,
    "Num": 0
  },
  {
    "PlayerId": "barreer01",
    "PlayerName": "Ernie Barrett",
    "Year": "1954-1956",
    "Num": 0
  },
  {
    "PlayerId": "becker01",
    "PlayerName": "Ernie Beck",
    "Year": "1954-1961",
    "Num": 0
  },
  {
    "PlayerId": "calveer01",
    "PlayerName": "Ernie Calverley",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "digreer01",
    "PlayerName": "Ernie DiGregorio",
    "Year": "1974-1978",
    "Num": 0
  },
  {
    "PlayerId": "grunfer01",
    "PlayerName": "Ernie Grunfeld",
    "Year": "1978-1986",
    "Num": 0
  },
  {
    "PlayerId": "vandeer01",
    "PlayerName": "Ernie Vandeweghe",
    "Year": "1950-1956",
    "Num": 0
  },
  {
    "PlayerId": "palmeer01",
    "PlayerName": "Errol Palmer",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "ilyaser01",
    "PlayerName": "Ersan Ilyasova",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "stagger01",
    "PlayerName": "Erv Staggs",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "inniger01",
    "PlayerName": "Ervin Inniger",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "johnser02",
    "PlayerName": "Ervin Johnson",
    "Year": "1994-2006",
    "Num": 0
  },
  {
    "PlayerId": "mueller01",
    "PlayerName": "Erwin Mueller",
    "Year": "1967-1974",
    "Num": 0
  },
  {
    "PlayerId": "hollies01",
    "PlayerName": "Essie Hollis",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "batises01",
    "PlayerName": "Esteban Batista",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "thomaet01",
    "PlayerName": "Etan Thomas",
    "Year": "2002-2011",
    "Num": 0
  },
  {
    "PlayerId": "bohanet01",
    "PlayerName": "Etdrick Bohannon",
    "Year": "1998-2001",
    "Num": 0
  },
  {
    "PlayerId": "jetereu01",
    "PlayerName": "Eugene Jeter",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "eschmev01",
    "PlayerName": "Evan Eschmeyer",
    "Year": "2000-2003",
    "Num": 0
  },
  {
    "PlayerId": "fournev01",
    "PlayerName": "Evan Fournier",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "turneev01",
    "PlayerName": "Evan Turner",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "stephev01",
    "PlayerName": "Everette Stephens",
    "Year": "1989-1991",
    "Num": 0
  },
  {
    "PlayerId": "burnsev01",
    "PlayerName": "Evers Burns",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "grayev01",
    "PlayerName": "Evric Gray",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "melofa01",
    "PlayerName": "Fab Melo",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "obertfa01",
    "PlayerName": "Fabricio Oberto",
    "Year": "2006-2011",
    "Num": 0
  },
  {
    "PlayerId": "leverfa01",
    "PlayerName": "Fat Lever",
    "Year": "1983-1994",
    "Num": 0
  },
  {
    "PlayerId": "taylofa01",
    "PlayerName": "Fatty Taylor",
    "Year": "1970-1977",
    "Num": 0
  },
  {
    "PlayerId": "kammefe01",
    "PlayerName": "Federico Kammerichs",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lopezfe01",
    "PlayerName": "Felipe Lopez",
    "Year": "1999-2002",
    "Num": 0
  },
  {
    "PlayerId": "spencfe01",
    "PlayerName": "Felton Spencer",
    "Year": "1991-2002",
    "Num": 0
  },
  {
    "PlayerId": "dembofe01",
    "PlayerName": "Fennis Dembo",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "martife01",
    "PlayerName": "Fernando Martin",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "ezelife01",
    "PlayerName": "Festus Ezeli",
    "Year": "2013-2016",
    "Num": 1
  },
  {
    "PlayerId": "thearfl01",
    "PlayerName": "Floyd Theard",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "volkefl01",
    "PlayerName": "Floyd Volker",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "willifl01",
    "PlayerName": "Fly Williams",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "robinfl01",
    "PlayerName": "Flynn Robinson",
    "Year": "1967-1974",
    "Num": 0
  },
  {
    "PlayerId": "walkefo01",
    "PlayerName": "Foots Walker",
    "Year": "1975-1984",
    "Num": 0
  },
  {
    "PlayerId": "ablefo01",
    "PlayerName": "Forest Able",
    "Year": 1957,
    "Num": 0
  },
  {
    "PlayerId": "mckenfo01",
    "PlayerName": "Forrest McKenzie",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "currafr01",
    "PlayerName": "Fran Curran",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "ohanlfr01",
    "PlayerName": "Fran O'Hanlon",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "vazqufr01",
    "PlayerName": "Fran Vazquez",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "elsonfr01",
    "PlayerName": "Francisco Elson",
    "Year": "2004-2012",
    "Num": 0
  },
  {
    "PlayerId": "garcifr01",
    "PlayerName": "Francisco Garcia",
    "Year": "2006-2015",
    "Num": 0
  },
  {
    "PlayerId": "brickfr01",
    "PlayerName": "Frank Brickowski",
    "Year": "1985-1997",
    "Num": 0
  },
  {
    "PlayerId": "cardfr01",
    "PlayerName": "Frank Card",
    "Year": "1969-1973",
    "Num": 0
  },
  {
    "PlayerId": "fucarfr01",
    "PlayerName": "Frank Fucarino",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "gatesfr01",
    "PlayerName": "Frank Gates",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "jacksfr01",
    "PlayerName": "Frank Jackson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnsfr01",
    "PlayerName": "Frank Johnson",
    "Year": "1982-1994",
    "Num": 0
  },
  {
    "PlayerId": "kaminfr01",
    "PlayerName": "Frank Kaminsky",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "kendrfr01",
    "PlayerName": "Frank Kendrick",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "kornefr01",
    "PlayerName": "Frank Kornet",
    "Year": "1990-1991",
    "Num": 0
  },
  {
    "PlayerId": "kudelfr01",
    "PlayerName": "Frank Kudelka",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "mangifr01",
    "PlayerName": "Frank Mangiapane",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "masonfr01",
    "PlayerName": "Frank Mason III",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "ntilila01",
    "PlayerName": "Frank Ntilikina",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "oleynfr01",
    "PlayerName": "Frank Oleynick",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "radovfr01",
    "PlayerName": "Frank Radovich",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "ramsefr01",
    "PlayerName": "Frank Ramsey",
    "Year": "1955-1964",
    "Num": 0
  },
  {
    "PlayerId": "reddofr01",
    "PlayerName": "Frank Reddout",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "russefr01",
    "PlayerName": "Frank Russell",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "schadfr01",
    "PlayerName": "Frank Schade",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "selvyfr01",
    "PlayerName": "Frank Selvy",
    "Year": "1955-1964",
    "Num": 0
  },
  {
    "PlayerId": "willifr02",
    "PlayerName": "Frank Williams",
    "Year": "2003-2005",
    "Num": 0
  },
  {
    "PlayerId": "baumhfr01",
    "PlayerName": "Frankie Baumholtz",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "brianfr01",
    "PlayerName": "Frankie Brian",
    "Year": "1950-1956",
    "Num": 0
  },
  {
    "PlayerId": "kingfr01",
    "PlayerName": "Frankie King",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "sandefr01",
    "PlayerName": "Frankie Sanders",
    "Year": "1979-1981",
    "Num": 0
  },
  {
    "PlayerId": "edwarfr01",
    "PlayerName": "Franklin Edwards",
    "Year": "1982-1988",
    "Num": 0
  },
  {
    "PlayerId": "brownfr01",
    "PlayerName": "Fred Brown",
    "Year": "1972-1984",
    "Num": 0
  },
  {
    "PlayerId": "cartefr01",
    "PlayerName": "Fred Carter",
    "Year": "1970-1977",
    "Num": 0
  },
  {
    "PlayerId": "chrisfr01",
    "PlayerName": "Fred Christ",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "cofiefr01",
    "PlayerName": "Fred Cofield",
    "Year": "1986-1987",
    "Num": 0
  },
  {
    "PlayerId": "diutefr01",
    "PlayerName": "Fred Diute",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "fostefr01",
    "PlayerName": "Fred Foster",
    "Year": "1969-1977",
    "Num": 0
  },
  {
    "PlayerId": "hetzefr01",
    "PlayerName": "Fred Hetzel",
    "Year": "1966-1971",
    "Num": 0
  },
  {
    "PlayerId": "hiltofr01",
    "PlayerName": "Fred Hilton",
    "Year": "1972-1973",
    "Num": 0
  },
  {
    "PlayerId": "hoibefr01",
    "PlayerName": "Fred Hoiberg",
    "Year": "1996-2005",
    "Num": 0
  },
  {
    "PlayerId": "jacobfr01",
    "PlayerName": "Fred Jacobs",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "jonesfr01",
    "PlayerName": "Fred Jones",
    "Year": "2003-2009",
    "Num": 0
  },
  {
    "PlayerId": "lacoufr01",
    "PlayerName": "Fred LaCour",
    "Year": "1961-1963",
    "Num": 0
  },
  {
    "PlayerId": "painefr01",
    "PlayerName": "Fred Paine",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "roberfr01",
    "PlayerName": "Fred Roberts",
    "Year": "1984-1997",
    "Num": 0
  },
  {
    "PlayerId": "saundfr01",
    "PlayerName": "Fred Saunders",
    "Year": "1975-1978",
    "Num": 0
  },
  {
    "PlayerId": "schaufr01",
    "PlayerName": "Fred Schaus",
    "Year": "1950-1954",
    "Num": 0
  },
  {
    "PlayerId": "scolafr01",
    "PlayerName": "Fred Scolari",
    "Year": "1947-1955",
    "Num": 0
  },
  {
    "PlayerId": "shefffr01",
    "PlayerName": "Fred Sheffield",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "taylofr01",
    "PlayerName": "Fred Taylor",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "vanvlfr01",
    "PlayerName": "Fred VanVleet",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "vinsofr01",
    "PlayerName": "Fred Vinson",
    "Year": "1995-2000",
    "Num": 0
  },
  {
    "PlayerId": "boydfr01",
    "PlayerName": "Freddie Boyd",
    "Year": "1973-1978",
    "Num": 0
  },
  {
    "PlayerId": "crawffr01",
    "PlayerName": "Freddie Crawford",
    "Year": "1967-1971",
    "Num": 0
  },
  {
    "PlayerId": "lewisfr01",
    "PlayerName": "Freddie Lewis",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "lewisfr02",
    "PlayerName": "Freddie Lewis",
    "Year": "1967-1977",
    "Num": 0
  },
  {
    "PlayerId": "willifr01",
    "PlayerName": "Freeman Williams",
    "Year": "1979-1986",
    "Num": 0
  },
  {
    "PlayerId": "freyfr01",
    "PlayerName": "Frido Frey",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "nagyfr01",
    "PlayerName": "Fritz Nagy",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "aldemfu01",
    "PlayerName": "Furkan Aldemir",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "korkmfu01",
    "PlayerName": "Furkan Korkmaz",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "pruitga01",
    "PlayerName": "Gabe Pruitt",
    "Year": "2008-2009",
    "Num": 0
  },
  {
    "PlayerId": "goodrga01",
    "PlayerName": "Gail Goodrich",
    "Year": "1966-1979",
    "Num": 0
  },
  {
    "PlayerId": "mekelga01",
    "PlayerName": "Gal Mekel",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "bishoga01",
    "PlayerName": "Gale Bishop",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "lawalga01",
    "PlayerName": "Gani Lawal",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "heardga01",
    "PlayerName": "Gar Heard",
    "Year": "1971-1981",
    "Num": 0
  },
  {
    "PlayerId": "smithga01",
    "PlayerName": "Garfield Smith",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "oshiega01",
    "PlayerName": "Garland O'Shields",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "silerga01",
    "PlayerName": "Garret Siler",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "stutzga01",
    "PlayerName": "Garrett Stutz",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "templga01",
    "PlayerName": "Garrett Temple",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "wittsga01",
    "PlayerName": "Garry Witts",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "josepga01",
    "PlayerName": "Garth Joseph",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "alcorga01",
    "PlayerName": "Gary Alcorn",
    "Year": "1960-1961",
    "Num": 0
  },
  {
    "PlayerId": "alexaga01",
    "PlayerName": "Gary Alexander",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "bergega01",
    "PlayerName": "Gary Bergen",
    "Year": 1957,
    "Num": 0
  },
  {
    "PlayerId": "braddga01",
    "PlayerName": "Gary Bradds",
    "Year": "1965-1971",
    "Num": 0
  },
  {
    "PlayerId": "brokaga01",
    "PlayerName": "Gary Brokaw",
    "Year": "1975-1978",
    "Num": 0
  },
  {
    "PlayerId": "forbega01",
    "PlayerName": "Gary Forbes",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "freemga01",
    "PlayerName": "Gary Freeman",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "garlaga01",
    "PlayerName": "Gary Garland",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "grantga01",
    "PlayerName": "Gary Grant",
    "Year": "1989-2001",
    "Num": 0
  },
  {
    "PlayerId": "grayga01",
    "PlayerName": "Gary Gray",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "gregoga01",
    "PlayerName": "Gary Gregor",
    "Year": "1969-1974",
    "Num": 0
  },
  {
    "PlayerId": "harriga01",
    "PlayerName": "Gary Harris",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "hillga01",
    "PlayerName": "Gary Hill",
    "Year": "1964-1965",
    "Num": 0
  },
  {
    "PlayerId": "kellega01",
    "PlayerName": "Gary Keller",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "leonaga01",
    "PlayerName": "Gary Leonard",
    "Year": "1990-1992",
    "Num": 0
  },
  {
    "PlayerId": "melchga01",
    "PlayerName": "Gary Melchionni",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "nealga01",
    "PlayerName": "Gary Neal",
    "Year": "2011-2017",
    "Num": 1
  },
  {
    "PlayerId": "paytoga01",
    "PlayerName": "Gary Payton",
    "Year": "1991-2007",
    "Num": 0
  },
  {
    "PlayerId": "paytoga02",
    "PlayerName": "Gary Payton II",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "phillga01",
    "PlayerName": "Gary Phillips",
    "Year": "1962-1966",
    "Num": 0
  },
  {
    "PlayerId": "plummga01",
    "PlayerName": "Gary Plummer",
    "Year": "1985-1993",
    "Num": 0
  },
  {
    "PlayerId": "suitega01",
    "PlayerName": "Gary Suiter",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "trentga01",
    "PlayerName": "Gary Trent",
    "Year": "1996-2004",
    "Num": 0
  },
  {
    "PlayerId": "turnega01",
    "PlayerName": "Gary Turner",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "vocega01",
    "PlayerName": "Gary Voce",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "zellega01",
    "PlayerName": "Gary Zeller",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "nickega01",
    "PlayerName": "Gaylon Nickerson",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "hammige01",
    "PlayerName": "Geert Hammink",
    "Year": "1994-1996",
    "Num": 0
  },
  {
    "PlayerId": "banksge01",
    "PlayerName": "Gene Banks",
    "Year": "1982-1987",
    "Num": 0
  },
  {
    "PlayerId": "bercege01",
    "PlayerName": "Gene Berce",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "conlege01",
    "PlayerName": "Gene Conley",
    "Year": "1953-1964",
    "Num": 0
  },
  {
    "PlayerId": "dykerge01",
    "PlayerName": "Gene Dyker",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "engluge01",
    "PlayerName": "Gene Englund",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "gillege01",
    "PlayerName": "Gene Gillette",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "guarige01",
    "PlayerName": "Gene Guarilia",
    "Year": "1960-1963",
    "Num": 0
  },
  {
    "PlayerId": "jamesge01",
    "PlayerName": "Gene James",
    "Year": "1949-1951",
    "Num": 0
  },
  {
    "PlayerId": "littlge01",
    "PlayerName": "Gene Littles",
    "Year": "1970-1975",
    "Num": 0
  },
  {
    "PlayerId": "moorege01",
    "PlayerName": "Gene Moore",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "ollrige01",
    "PlayerName": "Gene Ollrich",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "phillge01",
    "PlayerName": "Gene Phillips",
    "Year": "1972-1973",
    "Num": 0
  },
  {
    "PlayerId": "rhodege01",
    "PlayerName": "Gene Rhodes",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "rockge01",
    "PlayerName": "Gene Rock",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "shortge01",
    "PlayerName": "Gene Short",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "shuege01",
    "PlayerName": "Gene Shue",
    "Year": "1955-1964",
    "Num": 0
  },
  {
    "PlayerId": "stumpge01",
    "PlayerName": "Gene Stump",
    "Year": "1948-1950",
    "Num": 0
  },
  {
    "PlayerId": "tormobu01",
    "PlayerName": "Gene Tormohlen",
    "Year": "1963-1970",
    "Num": 0
  },
  {
    "PlayerId": "vancege01",
    "PlayerName": "Gene Vance",
    "Year": "1948-1952",
    "Num": 0
  },
  {
    "PlayerId": "wileyge01",
    "PlayerName": "Gene Wiley",
    "Year": "1963-1968",
    "Num": 0
  },
  {
    "PlayerId": "willige01",
    "PlayerName": "Gene Williams",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "carlige01",
    "PlayerName": "Geno Carlisle",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "crompge01",
    "PlayerName": "Geoff Crompton",
    "Year": "1979-1984",
    "Num": 0
  },
  {
    "PlayerId": "hustoge01",
    "PlayerName": "Geoff Huston",
    "Year": "1980-1987",
    "Num": 0
  },
  {
    "PlayerId": "petrige01",
    "PlayerName": "Geoff Petrie",
    "Year": "1971-1976",
    "Num": 0
  },
  {
    "PlayerId": "adamsge01",
    "PlayerName": "George Adams",
    "Year": "1973-1975",
    "Num": 0
  },
  {
    "PlayerId": "blanege01",
    "PlayerName": "George Blaney",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "bonsage01",
    "PlayerName": "George Bon Salle",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "brownge01",
    "PlayerName": "George Brown",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "brunsge01",
    "PlayerName": "George Bruns",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "buccige01",
    "PlayerName": "George Bucci",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "cartege01",
    "PlayerName": "George Carter",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "depauge01",
    "PlayerName": "George de Paula",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "dempsge01",
    "PlayerName": "George Dempsey",
    "Year": "1955-1959",
    "Num": 0
  },
  {
    "PlayerId": "feigege01",
    "PlayerName": "George Feigenbaum",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "gervige01",
    "PlayerName": "George Gervin",
    "Year": "1973-1986",
    "Num": 0
  },
  {
    "PlayerId": "glamage01",
    "PlayerName": "George Glamack",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "hillge01",
    "PlayerName": "George Hill",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "irvinge01",
    "PlayerName": "George Irvine",
    "Year": "1971-1976",
    "Num": 0
  },
  {
    "PlayerId": "johnsge01",
    "PlayerName": "George Johnson",
    "Year": "1971-1974",
    "Num": 0
  },
  {
    "PlayerId": "johnsge03",
    "PlayerName": "George Johnson",
    "Year": "1979-1986",
    "Num": 0
  },
  {
    "PlayerId": "johnsge02",
    "PlayerName": "George Johnson",
    "Year": "1973-1986",
    "Num": 0
  },
  {
    "PlayerId": "kaftage01",
    "PlayerName": "George Kaftan",
    "Year": "1949-1953",
    "Num": 0
  },
  {
    "PlayerId": "karlge01",
    "PlayerName": "George Karl",
    "Year": "1974-1978",
    "Num": 0
  },
  {
    "PlayerId": "kingge01",
    "PlayerName": "George King",
    "Year": "1952-1958",
    "Num": 0
  },
  {
    "PlayerId": "leege01",
    "PlayerName": "George Lee",
    "Year": "1961-1968",
    "Num": 0
  },
  {
    "PlayerId": "lehmage01",
    "PlayerName": "George Lehmann",
    "Year": "1968-1974",
    "Num": 0
  },
  {
    "PlayerId": "lynchge01",
    "PlayerName": "George Lynch",
    "Year": "1994-2005",
    "Num": 0
  },
  {
    "PlayerId": "mccloge01",
    "PlayerName": "George McCloud",
    "Year": "1990-2002",
    "Num": 0
  },
  {
    "PlayerId": "mcginge01",
    "PlayerName": "George McGinnis",
    "Year": "1972-1982",
    "Num": 0
  },
  {
    "PlayerId": "mcleoge01",
    "PlayerName": "George McLeod",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "mearnge01",
    "PlayerName": "George Mearns",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "mikange01",
    "PlayerName": "George Mikan",
    "Year": "1949-1956",
    "Num": 0
  },
  {
    "PlayerId": "munroge01",
    "PlayerName": "George Munroe",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "nostrge01",
    "PlayerName": "George Nostrand",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "pastuge01",
    "PlayerName": "George Pastushok",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "pattege01",
    "PlayerName": "George Patterson",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "pearcge01",
    "PlayerName": "George Pearcy",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "peeplge01",
    "PlayerName": "George Peeples",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "ratkoge01",
    "PlayerName": "George Ratkovicz",
    "Year": "1950-1955",
    "Num": 0
  },
  {
    "PlayerId": "reynoge01",
    "PlayerName": "George Reynolds",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "senesge01",
    "PlayerName": "George Senesky",
    "Year": "1947-1954",
    "Num": 0
  },
  {
    "PlayerId": "stonege01",
    "PlayerName": "George Stone",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "sutorge01",
    "PlayerName": "George Sutor",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "thompge01",
    "PlayerName": "George Thompson",
    "Year": "1970-1975",
    "Num": 0
  },
  {
    "PlayerId": "tinslge01",
    "PlayerName": "George Tinsley",
    "Year": "1970-1972",
    "Num": 0
  },
  {
    "PlayerId": "trappge01",
    "PlayerName": "George Trapp",
    "Year": "1972-1977",
    "Num": 0
  },
  {
    "PlayerId": "wilsoge01",
    "PlayerName": "George Wilson",
    "Year": "1965-1971",
    "Num": 0
  },
  {
    "PlayerId": "yardlge01",
    "PlayerName": "George Yardley",
    "Year": "1954-1960",
    "Num": 0
  },
  {
    "PlayerId": "zidekge01",
    "PlayerName": "George Zidek",
    "Year": "1996-1998",
    "Num": 0
  },
  {
    "PlayerId": "niangge01",
    "PlayerName": "Georges Niang",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "gloucge01",
    "PlayerName": "Georgi Glouchkov",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "papagge01",
    "PlayerName": "Georgios Papagiannis",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "brownge02",
    "PlayerName": "Gerald Brown",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "fitchge01",
    "PlayerName": "Gerald Fitch",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "glassge01",
    "PlayerName": "Gerald Glass",
    "Year": "1991-1996",
    "Num": 0
  },
  {
    "PlayerId": "govange01",
    "PlayerName": "Gerald Govan",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "greenge01",
    "PlayerName": "Gerald Green",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "hendege01",
    "PlayerName": "Gerald Henderson",
    "Year": "1980-1992",
    "Num": 0
  },
  {
    "PlayerId": "hendege02",
    "PlayerName": "Gerald Henderson",
    "Year": "2010-2017",
    "Num": 1
  },
  {
    "PlayerId": "madkige01",
    "PlayerName": "Gerald Madkins",
    "Year": "1994-1998",
    "Num": 0
  },
  {
    "PlayerId": "paddige01",
    "PlayerName": "Gerald Paddio",
    "Year": "1991-1994",
    "Num": 0
  },
  {
    "PlayerId": "robinge01",
    "PlayerName": "Gerald Robinson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wallage01",
    "PlayerName": "Gerald Wallace",
    "Year": "2002-2015",
    "Num": 0
  },
  {
    "PlayerId": "wilkige01",
    "PlayerName": "Gerald Wilkins",
    "Year": "1986-1999",
    "Num": 0
  },
  {
    "PlayerId": "kingge02",
    "PlayerName": "Gerard King",
    "Year": "1999-2001",
    "Num": 0
  },
  {
    "PlayerId": "calabge01",
    "PlayerName": "Gerry Calabrese",
    "Year": "1951-1952",
    "Num": 0
  },
  {
    "PlayerId": "wardge01",
    "PlayerName": "Gerry Ward",
    "Year": "1964-1967",
    "Num": 0
  },
  {
    "PlayerId": "muresgh01",
    "PlayerName": "Gheorghe Muresan",
    "Year": "1994-2000",
    "Num": 0
  },
  {
    "PlayerId": "clavegi01",
    "PlayerName": "Gian Clavell",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "antetgi01",
    "PlayerName": "Giannis Antetokounmpo",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "rouxgi01",
    "PlayerName": "Giff Roux",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "datomlu01",
    "PlayerName": "Gigi Datome",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "mcgregi01",
    "PlayerName": "Gil McGregor",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "arenagi01",
    "PlayerName": "Gilbert Arenas",
    "Year": "2002-2012",
    "Num": 0
  },
  {
    "PlayerId": "sovragi01",
    "PlayerName": "Gino Sovran",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "printgi01",
    "PlayerName": "Giorgos Printezis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "combsgl01",
    "PlayerName": "Glen Combs",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "dandrgl01",
    "PlayerName": "Glen Dandridge",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "davisgl01",
    "PlayerName": "Glen Davis",
    "Year": "2008-2015",
    "Num": 0
  },
  {
    "PlayerId": "gondrgl01",
    "PlayerName": "Glen Gondrezick",
    "Year": "1978-1983",
    "Num": 0
  },
  {
    "PlayerId": "ricegl01",
    "PlayerName": "Glen Rice",
    "Year": "1990-2004",
    "Num": 0
  },
  {
    "PlayerId": "ricegl02",
    "PlayerName": "Glen Rice Jr.",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "selbogl01",
    "PlayerName": "Glen Selbo",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "hagangl01",
    "PlayerName": "Glenn Hagan",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "hansegl01",
    "PlayerName": "Glenn Hansen",
    "Year": "1976-1978",
    "Num": 0
  },
  {
    "PlayerId": "mcdongl01",
    "PlayerName": "Glenn McDonald",
    "Year": "1975-1977",
    "Num": 0
  },
  {
    "PlayerId": "moslegl01",
    "PlayerName": "Glenn Mosley",
    "Year": "1978-1979",
    "Num": 0
  },
  {
    "PlayerId": "robingl01",
    "PlayerName": "Glenn Robinson",
    "Year": "1995-2005",
    "Num": 0
  },
  {
    "PlayerId": "robingl02",
    "PlayerName": "Glenn Robinson III",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "saultgl01",
    "PlayerName": "Glynn Saulters",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "shammgo01",
    "PlayerName": "God Shammgod",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "kennego01",
    "PlayerName": "Goo Kennedy",
    "Year": "1972-1977",
    "Num": 0
  },
  {
    "PlayerId": "ligongo01",
    "PlayerName": "Goose Ligon",
    "Year": "1968-1974",
    "Num": 0
  },
  {
    "PlayerId": "dragigo01",
    "PlayerName": "Goran Dragic",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "giricgo01",
    "PlayerName": "Gordan Giricek",
    "Year": "2003-2008",
    "Num": 0
  },
  {
    "PlayerId": "haywago01",
    "PlayerName": "Gordon Hayward",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "dienggo01",
    "PlayerName": "Gorgui Dieng",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "getchgo01",
    "PlayerName": "Gorham Getchell",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "bakumgr01",
    "PlayerName": "Gracin Bakumanya",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lewisgr01",
    "PlayerName": "Grady Lewis",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "omallgr01",
    "PlayerName": "Grady O'Malley",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "gondrgr01",
    "PlayerName": "Grant Gondrezick",
    "Year": "1987-1989",
    "Num": 0
  },
  {
    "PlayerId": "hillgr01",
    "PlayerName": "Grant Hill",
    "Year": "1995-2013",
    "Num": 0
  },
  {
    "PlayerId": "jerregr01",
    "PlayerName": "Grant Jerrett",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "longgr01",
    "PlayerName": "Grant Long",
    "Year": "1989-2003",
    "Num": 0
  },
  {
    "PlayerId": "simmogr01",
    "PlayerName": "Grant Simmons",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "waitegr01",
    "PlayerName": "Granville Waiters",
    "Year": "1984-1988",
    "Num": 0
  },
  {
    "PlayerId": "andergr01",
    "PlayerName": "Greg Anderson",
    "Year": "1988-1998",
    "Num": 0
  },
  {
    "PlayerId": "anthogr01",
    "PlayerName": "Greg Anthony",
    "Year": "1992-2002",
    "Num": 0
  },
  {
    "PlayerId": "ballagr01",
    "PlayerName": "Greg Ballard",
    "Year": "1978-1989",
    "Num": 0
  },
  {
    "PlayerId": "buckngr01",
    "PlayerName": "Greg Buckner",
    "Year": "2000-2009",
    "Num": 0
  },
  {
    "PlayerId": "bunchgr01",
    "PlayerName": "Greg Bunch",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "butlegr01",
    "PlayerName": "Greg Butler",
    "Year": "1989-1991",
    "Num": 0
  },
  {
    "PlayerId": "deanegr01",
    "PlayerName": "Greg Deane",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "dreilgr01",
    "PlayerName": "Greg Dreiling",
    "Year": "1987-1997",
    "Num": 0
  },
  {
    "PlayerId": "fillmgr01",
    "PlayerName": "Greg Fillmore",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "fostegr01",
    "PlayerName": "Greg Foster",
    "Year": "1991-2003",
    "Num": 0
  },
  {
    "PlayerId": "grahagr01",
    "PlayerName": "Greg Graham",
    "Year": "1994-1998",
    "Num": 0
  },
  {
    "PlayerId": "grantgr01",
    "PlayerName": "Greg Grant",
    "Year": "1990-1996",
    "Num": 0
  },
  {
    "PlayerId": "griffgr01",
    "PlayerName": "Greg Griffin",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "howargr01",
    "PlayerName": "Greg Howard",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "hydergr01",
    "PlayerName": "Greg Hyder",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "jacksgr01",
    "PlayerName": "Greg Jackson",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "kelsegr01",
    "PlayerName": "Greg Kelser",
    "Year": "1980-1985",
    "Num": 0
  },
  {
    "PlayerId": "kitegr01",
    "PlayerName": "Greg Kite",
    "Year": "1984-1995",
    "Num": 0
  },
  {
    "PlayerId": "leegr01",
    "PlayerName": "Greg Lee",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "minorgr01",
    "PlayerName": "Greg Minor",
    "Year": "1995-1999",
    "Num": 0
  },
  {
    "PlayerId": "monrogr01",
    "PlayerName": "Greg Monroe",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "odengr01",
    "PlayerName": "Greg Oden",
    "Year": "2009-2014",
    "Num": 0
  },
  {
    "PlayerId": "ostergr01",
    "PlayerName": "Greg Ostertag",
    "Year": "1996-2006",
    "Num": 0
  },
  {
    "PlayerId": "smithgr01",
    "PlayerName": "Greg Smith",
    "Year": "1969-1976",
    "Num": 0
  },
  {
    "PlayerId": "smithgr02",
    "PlayerName": "Greg Smith",
    "Year": "2012-2016",
    "Num": 0
  },
  {
    "PlayerId": "stiemgr01",
    "PlayerName": "Greg Stiemsma",
    "Year": "2012-2015",
    "Num": 0
  },
  {
    "PlayerId": "stokegr01",
    "PlayerName": "Greg Stokes",
    "Year": "1986-1990",
    "Num": 0
  },
  {
    "PlayerId": "suttogr01",
    "PlayerName": "Greg Sutton",
    "Year": "1992-1996",
    "Num": 0
  },
  {
    "PlayerId": "whittgr01",
    "PlayerName": "Greg Whittington",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wittmgr01",
    "PlayerName": "Greg Wittman",
    "Year": "1970-1971",
    "Num": 0
  },
  {
    "PlayerId": "echengr01",
    "PlayerName": "Gregory Echenique",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "vasqugr01",
    "PlayerName": "Greivis Vasquez",
    "Year": "2011-2017",
    "Num": 1
  },
  {
    "PlayerId": "yabusgu01",
    "PlayerName": "Guerschon Yabusele",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "diazgu01",
    "PlayerName": "Guillermo Diaz",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "vetragu01",
    "PlayerName": "Gundars Vetra",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "bailegu01",
    "PlayerName": "Gus Bailey",
    "Year": "1975-1980",
    "Num": 0
  },
  {
    "PlayerId": "gerargu01",
    "PlayerName": "Gus Gerard",
    "Year": "1975-1981",
    "Num": 0
  },
  {
    "PlayerId": "johnsgu01",
    "PlayerName": "Gus Johnson",
    "Year": "1964-1973",
    "Num": 0
  },
  {
    "PlayerId": "willigu01",
    "PlayerName": "Gus Williams",
    "Year": "1976-1987",
    "Num": 0
  },
  {
    "PlayerId": "ayongu01",
    "PlayerName": "Gustavo Ayon",
    "Year": "2012-2014",
    "Num": 0
  },
  {
    "PlayerId": "mannigu01",
    "PlayerName": "Guy Manning",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "morgagu01",
    "PlayerName": "Guy Morgan",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "rodgegu01",
    "PlayerName": "Guy Rodgers",
    "Year": "1959-1970",
    "Num": 0
  },
  {
    "PlayerId": "ruckegu01",
    "PlayerName": "Guy Rucker",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "sparrgu01",
    "PlayerName": "Guy Sparrow",
    "Year": "1958-1960",
    "Num": 0
  },
  {
    "PlayerId": "willigu02",
    "PlayerName": "Guy Williams",
    "Year": "1985-1986",
    "Num": 0
  },
  {
    "PlayerId": "seungha01",
    "PlayerName": "Ha Seung-Jin",
    "Year": "2005-2006",
    "Num": 0
  },
  {
    "PlayerId": "olajuha01",
    "PlayerName": "Hakeem Olajuwon",
    "Year": "1985-2002",
    "Num": 0
  },
  {
    "PlayerId": "warriha01",
    "PlayerName": "Hakim Warrick",
    "Year": "2006-2013",
    "Num": 0
  },
  {
    "PlayerId": "crislha01",
    "PlayerName": "Hal Crisler",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "greerha01",
    "PlayerName": "Hal Greer",
    "Year": "1959-1973",
    "Num": 0
  },
  {
    "PlayerId": "haleha01",
    "PlayerName": "Hal Hale",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "jeterha01",
    "PlayerName": "Hal Jeter",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "learha01",
    "PlayerName": "Hal Lear",
    "Year": 1957,
    "Num": 0
  },
  {
    "PlayerId": "tidriha01",
    "PlayerName": "Hal Tidrick",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "uplinha01",
    "PlayerName": "Hal Uplinger",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "ndiayha01",
    "PlayerName": "Hamady N'Diaye",
    "Year": "2011-2014",
    "Num": 0
  },
  {
    "PlayerId": "haddaha01",
    "PlayerName": "Hamed Haddadi",
    "Year": "2009-2013",
    "Num": 0
  },
  {
    "PlayerId": "beendha01",
    "PlayerName": "Hank Beenders",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "biasaha01",
    "PlayerName": "Hank Biasatti",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "dezonha01",
    "PlayerName": "Hank DeZonie",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "finkeha01",
    "PlayerName": "Hank Finkel",
    "Year": "1967-1975",
    "Num": 0
  },
  {
    "PlayerId": "lefkoha01",
    "PlayerName": "Hank Lefkowitz",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "mcdowha01",
    "PlayerName": "Hank McDowell",
    "Year": "1982-1987",
    "Num": 0
  },
  {
    "PlayerId": "rosenha01",
    "PlayerName": "Hank Rosenstein",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "thornha01",
    "PlayerName": "Hank Thorns",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "whitnha01",
    "PlayerName": "Hank Whitney",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "williha01",
    "PlayerName": "Hank Williams",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "mottoha01",
    "PlayerName": "Hanno Mottola",
    "Year": "2001-2002",
    "Num": 0
  },
  {
    "PlayerId": "hairsha01",
    "PlayerName": "Happy Hairston",
    "Year": "1965-1975",
    "Num": 0
  },
  {
    "PlayerId": "brownha01",
    "PlayerName": "Harold Brown",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "ellisha01",
    "PlayerName": "Harold Ellis",
    "Year": "1994-1998",
    "Num": 0
  },
  {
    "PlayerId": "foxha01",
    "PlayerName": "Harold Fox",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "jamisha01",
    "PlayerName": "Harold Jamison",
    "Year": "2000-2002",
    "Num": 0
  },
  {
    "PlayerId": "johnsha01",
    "PlayerName": "Harold Johnson",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "keeliha01",
    "PlayerName": "Harold Keeling",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "kottmha01",
    "PlayerName": "Harold Kottman",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "minerha01",
    "PlayerName": "Harold Miner",
    "Year": "1993-1996",
    "Num": 0
  },
  {
    "PlayerId": "pressha01",
    "PlayerName": "Harold Pressley",
    "Year": "1987-1990",
    "Num": 0
  },
  {
    "PlayerId": "barneha02",
    "PlayerName": "Harrison Barnes",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "barneha01",
    "PlayerName": "Harry Barnes",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "boykoha01",
    "PlayerName": "Harry Boykoff",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "davisha01",
    "PlayerName": "Harry Davis",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "dinneha01",
    "PlayerName": "Harry Dinnel",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "donovha01",
    "PlayerName": "Harry Donovan",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "gallaha01",
    "PlayerName": "Harry Gallatin",
    "Year": "1949-1958",
    "Num": 0
  },
  {
    "PlayerId": "gilesha01",
    "PlayerName": "Harry Giles",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lauriha01",
    "PlayerName": "Harry Laurie",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "milleha01",
    "PlayerName": "Harry Miller",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "rogerha01",
    "PlayerName": "Harry Rogers",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "zelleha01",
    "PlayerName": "Harry Zeller",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "wingoha01",
    "PlayerName": "Harthorne Wingo",
    "Year": "1973-1976",
    "Num": 0
  },
  {
    "PlayerId": "catchha01",
    "PlayerName": "Harvey Catchings",
    "Year": "1975-1985",
    "Num": 0
  },
  {
    "PlayerId": "grantha01",
    "PlayerName": "Harvey Grant",
    "Year": "1989-1999",
    "Num": 0
  },
  {
    "PlayerId": "marlaha01",
    "PlayerName": "Harvey Marlatt",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "thabeha01",
    "PlayerName": "Hasheem Thabeet",
    "Year": "2010-2014",
    "Num": 0
  },
  {
    "PlayerId": "adamsha01",
    "PlayerName": "Hassan Adams",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "whiteha01",
    "PlayerName": "Hassan Whiteside",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "whitnha02",
    "PlayerName": "Hawkeye Whitney",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "workmha01",
    "PlayerName": "Haywoode Workman",
    "Year": "1990-2000",
    "Num": 0
  },
  {
    "PlayerId": "turkohe01",
    "PlayerName": "Hedo Turkoglu",
    "Year": "2001-2015",
    "Num": 0
  },
  {
    "PlayerId": "norelhe01",
    "PlayerName": "Henk Norel",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "akinhe01",
    "PlayerName": "Henry Akin",
    "Year": "1967-1969",
    "Num": 0
  },
  {
    "PlayerId": "baconhe01",
    "PlayerName": "Henry Bacon",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "bibbyhe01",
    "PlayerName": "Henry Bibby",
    "Year": "1973-1981",
    "Num": 0
  },
  {
    "PlayerId": "dickehe01",
    "PlayerName": "Henry Dickerson",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "ellenhe01",
    "PlayerName": "Henry Ellenson",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "jameshe01",
    "PlayerName": "Henry James",
    "Year": "1991-1998",
    "Num": 0
  },
  {
    "PlayerId": "loganhe01",
    "PlayerName": "Henry Logan",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "pearche01",
    "PlayerName": "Henry Pearcy",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "simshe01",
    "PlayerName": "Henry Sims",
    "Year": "2013-2016",
    "Num": 0
  },
  {
    "PlayerId": "turnehe02",
    "PlayerName": "Henry Turner",
    "Year": "1990-1995",
    "Num": 0
  },
  {
    "PlayerId": "walkebi01",
    "PlayerName": "Henry Walker",
    "Year": "2009-2015",
    "Num": 0
  },
  {
    "PlayerId": "wardhe01",
    "PlayerName": "Henry Ward",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "krauthe01",
    "PlayerName": "Herb Krautblatt",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "scherhe01",
    "PlayerName": "Herb Scherer",
    "Year": "1951-1952",
    "Num": 0
  },
  {
    "PlayerId": "whitehe01",
    "PlayerName": "Herb White",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "willihe01",
    "PlayerName": "Herb Williams",
    "Year": "1982-1999",
    "Num": 0
  },
  {
    "PlayerId": "fuetshe01",
    "PlayerName": "Herm Fuetsch",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "gillihe01",
    "PlayerName": "Herm Gilliam",
    "Year": "1970-1977",
    "Num": 0
  },
  {
    "PlayerId": "heddehe01",
    "PlayerName": "Herm Hedderick",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "klotzhe01",
    "PlayerName": "Herm Klotz",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "schaehe01",
    "PlayerName": "Herm Schaefer",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "baltihe01",
    "PlayerName": "Herschel Baltimore",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "turnehe01",
    "PlayerName": "Herschell Turner",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "hawkihe01",
    "PlayerName": "Hersey Hawkins",
    "Year": "1989-2001",
    "Num": 0
  },
  {
    "PlayerId": "armsthi01",
    "PlayerName": "Hilton Armstrong",
    "Year": "2007-2014",
    "Num": 0
  },
  {
    "PlayerId": "fullehi01",
    "PlayerName": "Hiram Fuller",
    "Year": 2004,
    "Num": 0
  },
  {
    "PlayerId": "copelho01",
    "PlayerName": "Hollis Copeland",
    "Year": "1980-1982",
    "Num": 0
  },
  {
    "PlayerId": "thompho01",
    "PlayerName": "Hollis Thompson",
    "Year": "2014-2017",
    "Num": 1
  },
  {
    "PlayerId": "dilloho01",
    "PlayerName": "Hook Dillon",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "gibsoho01",
    "PlayerName": "Hoot Gibson",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "grantho01",
    "PlayerName": "Horace Grant",
    "Year": "1988-2004",
    "Num": 0
  },
  {
    "PlayerId": "jenkiho01",
    "PlayerName": "Horace Jenkins",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "walkeho01",
    "PlayerName": "Horace Walker",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "llamaho01",
    "PlayerName": "Horacio Llamas Grey",
    "Year": "1997-1998",
    "Num": 0
  },
  {
    "PlayerId": "hundlho01",
    "PlayerName": "Hot Rod Hundley",
    "Year": "1958-1963",
    "Num": 0
  },
  {
    "PlayerId": "williho01",
    "PlayerName": "Hot Rod Williams",
    "Year": "1987-1999",
    "Num": 0
  },
  {
    "PlayerId": "bayneho01",
    "PlayerName": "Howard Bayne",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "carteho01",
    "PlayerName": "Howard Carter",
    "Year": "1984-1985",
    "Num": 0
  },
  {
    "PlayerId": "eisleho01",
    "PlayerName": "Howard Eisley",
    "Year": "1995-2006",
    "Num": 0
  },
  {
    "PlayerId": "komivho01",
    "PlayerName": "Howard Komives",
    "Year": "1965-1974",
    "Num": 0
  },
  {
    "PlayerId": "nathaho01",
    "PlayerName": "Howard Nathan",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "porteho01",
    "PlayerName": "Howard Porter",
    "Year": "1972-1978",
    "Num": 0
  },
  {
    "PlayerId": "woodho01",
    "PlayerName": "Howard Wood",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "wrighho02",
    "PlayerName": "Howard Wright",
    "Year": "1991-1993",
    "Num": 0
  },
  {
    "PlayerId": "carlho01",
    "PlayerName": "Howie Carl",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "dallmho01",
    "PlayerName": "Howie Dallmar",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "janotho01",
    "PlayerName": "Howie Janotta",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "jolifho01",
    "PlayerName": "Howie Jolliff",
    "Year": "1961-1963",
    "Num": 0
  },
  {
    "PlayerId": "mccarho01",
    "PlayerName": "Howie McCarty",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "montgho01",
    "PlayerName": "Howie Montgomery",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "raderho01",
    "PlayerName": "Howie Rader",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "schulho01",
    "PlayerName": "Howie Schultz",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "shannho01",
    "PlayerName": "Howie Shannon",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "wrighho01",
    "PlayerName": "Howie Wright",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "reedhu01",
    "PlayerName": "Hub Reed",
    "Year": "1959-1965",
    "Num": 0
  },
  {
    "PlayerId": "davishu01",
    "PlayerName": "Hubert Davis",
    "Year": "1993-2004",
    "Num": 0
  },
  {
    "PlayerId": "whitehu01",
    "PlayerName": "Hubie White",
    "Year": "1963-1971",
    "Num": 0
  },
  {
    "PlayerId": "joneshu01",
    "PlayerName": "Hutch Jones",
    "Year": "1983-1984",
    "Num": 0
  },
  {
    "PlayerId": "clarkia01",
    "PlayerName": "Ian Clark",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "lockhia01",
    "PlayerName": "Ian Lockhart",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "mahinia01",
    "PlayerName": "Ian Mahinmi",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "kutluib01",
    "PlayerName": "Ibo Kutluay",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "rakocig01",
    "PlayerName": "Igor Rakocevic",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "anigbik01",
    "PlayerName": "Ike Anigbogu",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "borsaik01",
    "PlayerName": "Ike Borsavage",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "dioguik01",
    "PlayerName": "Ike Diogu",
    "Year": "2006-2012",
    "Num": 0
  },
  {
    "PlayerId": "iroegik01",
    "PlayerName": "Ike Iroegbu",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "karamil01",
    "PlayerName": "Ilkan Karaman",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "shumpim01",
    "PlayerName": "Iman Shumpert",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "udokaim01",
    "PlayerName": "Ime Udoka",
    "Year": "2004-2011",
    "Num": 0
  },
  {
    "PlayerId": "bowmair01",
    "PlayerName": "Ira Bowman",
    "Year": "2000-2002",
    "Num": 0
  },
  {
    "PlayerId": "hargeir01",
    "PlayerName": "Ira Harge",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "newblir01",
    "PlayerName": "Ira Newble",
    "Year": "2001-2008",
    "Num": 0
  },
  {
    "PlayerId": "terreir01",
    "PlayerName": "Ira Terrell",
    "Year": "1977-1979",
    "Num": 0
  },
  {
    "PlayerId": "bemorir01",
    "PlayerName": "Irv Bemoras",
    "Year": "1954-1957",
    "Num": 0
  },
  {
    "PlayerId": "kiffiir01",
    "PlayerName": "Irv Kiffin",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "rotheir01",
    "PlayerName": "Irv Rothenberg",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "torgoir01",
    "PlayerName": "Irv Torgoff",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "thomair01",
    "PlayerName": "Irving Thomas",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "austiis01",
    "PlayerName": "Isaac Austin",
    "Year": "1992-2002",
    "Num": 0
  },
  {
    "PlayerId": "fontais01",
    "PlayerName": "Isaac Fontaine",
    "Year": 2002,
    "Num": 0
  },
  {
    "PlayerId": "hamilis01",
    "PlayerName": "Isaac Hamilton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "walthis01",
    "PlayerName": "Isaac Walthour",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "cordiis01",
    "PlayerName": "Isaia Cordinier",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "briscis01",
    "PlayerName": "Isaiah Briscoe",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "canaais01",
    "PlayerName": "Isaiah Canaan",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "cousiis01",
    "PlayerName": "Isaiah Cousins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "harteis01",
    "PlayerName": "Isaiah Hartenstein",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hicksis01",
    "PlayerName": "Isaiah Hicks",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "morriis01",
    "PlayerName": "Isaiah Morris",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "rideris01",
    "PlayerName": "Isaiah Rider",
    "Year": "1994-2002",
    "Num": 0
  },
  {
    "PlayerId": "taylois01",
    "PlayerName": "Isaiah Taylor",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "thomais02",
    "PlayerName": "Isaiah Thomas",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "whiteis01",
    "PlayerName": "Isaiah Whitehead",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "wilsois01",
    "PlayerName": "Isaiah Wilson",
    "Year": "1972-1973",
    "Num": 0
  },
  {
    "PlayerId": "smithis01",
    "PlayerName": "Ish Smith",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "thomais01",
    "PlayerName": "Isiah Thomas",
    "Year": "1982-1994",
    "Num": 0
  },
  {
    "PlayerId": "johnsiv01",
    "PlayerName": "Ivan Johnson",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "mcfariv01",
    "PlayerName": "Ivan McFarlin",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "rabbiv01",
    "PlayerName": "Ivan Rabb",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "newbiiv01",
    "PlayerName": "Ivano Newbill",
    "Year": "1995-1998",
    "Num": 0
  },
  {
    "PlayerId": "zubaciv01",
    "PlayerName": "Ivica Zubac",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "turkyiz01",
    "PlayerName": "Izzet Turkyilmaz",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "brownjc01",
    "PlayerName": "J'Covan Brown",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "anderjj01",
    "PlayerName": "J.J. Anderson",
    "Year": "1983-1985",
    "Num": 0
  },
  {
    "PlayerId": "avilajj01",
    "PlayerName": "J.J. Avila",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bareajo01",
    "PlayerName": "J.J. Barea",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "hicksjj01",
    "PlayerName": "J.J. Hickson",
    "Year": "2009-2016",
    "Num": 0
  },
  {
    "PlayerId": "obriejj01",
    "PlayerName": "J.J. O'Brien",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "redicjj01",
    "PlayerName": "J.J. Redick",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "tokotjp01",
    "PlayerName": "J.P. Tokoto",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bremejr01",
    "PlayerName": "J.R. Bremer",
    "Year": "2003-2004",
    "Num": 0
  },
  {
    "PlayerId": "giddejr01",
    "PlayerName": "J.R. Giddens",
    "Year": "2009-2010",
    "Num": 0
  },
  {
    "PlayerId": "hendejr01",
    "PlayerName": "J.R. Henderson",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "reidjr01",
    "PlayerName": "J.R. Reid",
    "Year": "1990-2001",
    "Num": 0
  },
  {
    "PlayerId": "smithjr01",
    "PlayerName": "J.R. Smith",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "birdja01",
    "PlayerName": "Jabari Bird",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "brownja01",
    "PlayerName": "Jabari Brown",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "parkeja01",
    "PlayerName": "Jabari Parker",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "smithja01",
    "PlayerName": "Jabari Smith",
    "Year": "2001-2005",
    "Num": 0
  },
  {
    "PlayerId": "burmaja01",
    "PlayerName": "Jack Burmaster",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "colemja01",
    "PlayerName": "Jack Coleman",
    "Year": "1950-1958",
    "Num": 0
  },
  {
    "PlayerId": "cooleja01",
    "PlayerName": "Jack Cooley",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "cottoja01",
    "PlayerName": "Jack Cotton",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "dwanja01",
    "PlayerName": "Jack Dwan",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "eskrija01",
    "PlayerName": "Jack Eskridge",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "foleyja01",
    "PlayerName": "Jack Foley",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "garfija01",
    "PlayerName": "Jack Garfinkel",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "georgja01",
    "PlayerName": "Jack George",
    "Year": "1954-1961",
    "Num": 0
  },
  {
    "PlayerId": "gilleja01",
    "PlayerName": "Jack Gillespie",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "givenja01",
    "PlayerName": "Jack Givens",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "haleyja01",
    "PlayerName": "Jack Haley",
    "Year": "1989-1998",
    "Num": 0
  },
  {
    "PlayerId": "hewsoja01",
    "PlayerName": "Jack Hewson",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "kerrija01",
    "PlayerName": "Jack Kerris",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "kileyja01",
    "PlayerName": "Jack Kiley",
    "Year": "1952-1953",
    "Num": 0
  },
  {
    "PlayerId": "maddoja01",
    "PlayerName": "Jack Maddox",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "marinja01",
    "PlayerName": "Jack Marin",
    "Year": "1967-1977",
    "Num": 0
  },
  {
    "PlayerId": "mccloja01",
    "PlayerName": "Jack McCloskey",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "mcmahja01",
    "PlayerName": "Jack McMahon",
    "Year": "1953-1960",
    "Num": 0
  },
  {
    "PlayerId": "molinja01",
    "PlayerName": "Jack Molinas",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "nichoja01",
    "PlayerName": "Jack Nichols",
    "Year": "1949-1958",
    "Num": 0
  },
  {
    "PlayerId": "parkija01",
    "PlayerName": "Jack Parkinson",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "parrja01",
    "PlayerName": "Jack Parr",
    "Year": 1959,
    "Num": 0
  },
  {
    "PlayerId": "phelaja01",
    "PlayerName": "Jack Phelan",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "rockeja01",
    "PlayerName": "Jack Rocker",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "sikmaja01",
    "PlayerName": "Jack Sikma",
    "Year": "1978-1991",
    "Num": 0
  },
  {
    "PlayerId": "smileja01",
    "PlayerName": "Jack Smiley",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "stephja01",
    "PlayerName": "Jack Stephens",
    "Year": 1956,
    "Num": 0
  },
  {
    "PlayerId": "thompja01",
    "PlayerName": "Jack Thompson",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "tinglja01",
    "PlayerName": "Jack Tingle",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "toomaja01",
    "PlayerName": "Jack Toomay",
    "Year": "1948-1950",
    "Num": 0
  },
  {
    "PlayerId": "turneja01",
    "PlayerName": "Jack Turner",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "turneja02",
    "PlayerName": "Jack Turner",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "twymaja01",
    "PlayerName": "Jack Twyman",
    "Year": "1956-1966",
    "Num": 0
  },
  {
    "PlayerId": "butleja01",
    "PlayerName": "Jackie Butler",
    "Year": "2005-2007",
    "Num": 0
  },
  {
    "PlayerId": "carmija01",
    "PlayerName": "Jackie Carmichael",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "dinkija01",
    "PlayerName": "Jackie Dinkins",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "mooreja01",
    "PlayerName": "Jackie Moore",
    "Year": "1955-1957",
    "Num": 0
  },
  {
    "PlayerId": "morelja01",
    "PlayerName": "Jackie Moreland",
    "Year": "1961-1970",
    "Num": 0
  },
  {
    "PlayerId": "ridglja01",
    "PlayerName": "Jackie Ridgle",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "robinja01",
    "PlayerName": "Jackie Robinson",
    "Year": "1979-1982",
    "Num": 0
  },
  {
    "PlayerId": "vromaja01",
    "PlayerName": "Jackson Vroman",
    "Year": "2005-2006",
    "Num": 0
  },
  {
    "PlayerId": "dorseja01",
    "PlayerName": "Jacky Dorsey",
    "Year": "1978-1981",
    "Num": 0
  },
  {
    "PlayerId": "pulleja01",
    "PlayerName": "Jacob Pullen",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "wileyja01",
    "PlayerName": "Jacob Wiley",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "willija05",
    "PlayerName": "JaCorey Williams",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "vaughja01",
    "PlayerName": "Jacque Vaughn",
    "Year": "1998-2009",
    "Num": 0
  },
  {
    "PlayerId": "crowdja01",
    "PlayerName": "Jae Crowder",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "whiteja01",
    "PlayerName": "Jahidi White",
    "Year": "1999-2005",
    "Num": 0
  },
  {
    "PlayerId": "okafoja01",
    "PlayerName": "Jahlil Okafor",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "johnsja02",
    "PlayerName": "JaJuan Johnson",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "sampsja02",
    "PlayerName": "JaKarr Sampson",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "anderja02",
    "PlayerName": "Jake Anderson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bornhja01",
    "PlayerName": "Jake Bornheimer",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "carteja01",
    "PlayerName": "Jake Carter",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "cohenja01",
    "PlayerName": "Jake Cohen",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fendlja01",
    "PlayerName": "Jake Fendley",
    "Year": "1952-1953",
    "Num": 0
  },
  {
    "PlayerId": "fordja01",
    "PlayerName": "Jake Ford",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "jonesja01",
    "PlayerName": "Jake Jones",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "laymaja01",
    "PlayerName": "Jake Layman",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "pelkija01",
    "PlayerName": "Jake Pelkington",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "tsakaja01",
    "PlayerName": "Jake Tsakalidis",
    "Year": "2001-2007",
    "Num": 0
  },
  {
    "PlayerId": "voskuja01",
    "PlayerName": "Jake Voskuhl",
    "Year": "2001-2009",
    "Num": 0
  },
  {
    "PlayerId": "weberja01",
    "PlayerName": "Jake Weber",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "poeltja01",
    "PlayerName": "Jakob Poeltl",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "cousija01",
    "PlayerName": "Jaleel Cousins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "roberja01",
    "PlayerName": "Jaleel Roberts",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jonesja04",
    "PlayerName": "Jalen Jones",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "mooreja02",
    "PlayerName": "Jalen Moore",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "roseja01",
    "PlayerName": "Jalen Rose",
    "Year": "1995-2007",
    "Num": 0
  },
  {
    "PlayerId": "frankja01",
    "PlayerName": "Jamaal Franklin",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "magloja01",
    "PlayerName": "Jamaal Magloire",
    "Year": "2001-2012",
    "Num": 0
  },
  {
    "PlayerId": "tinslja01",
    "PlayerName": "Jamaal Tinsley",
    "Year": "2002-2014",
    "Num": 0
  },
  {
    "PlayerId": "wilkeja01",
    "PlayerName": "Jamaal Wilkes",
    "Year": "1975-1986",
    "Num": 0
  },
  {
    "PlayerId": "crawfja01",
    "PlayerName": "Jamal Crawford",
    "Year": "2001-2018",
    "Num": 1
  },
  {
    "PlayerId": "mashbja01",
    "PlayerName": "Jamal Mashburn",
    "Year": "1994-2004",
    "Num": 0
  },
  {
    "PlayerId": "murraja01",
    "PlayerName": "Jamal Murray",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "robinja03",
    "PlayerName": "Jamal Robinson",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "sampsja01",
    "PlayerName": "Jamal Sampson",
    "Year": "2003-2007",
    "Num": 0
  },
  {
    "PlayerId": "moonja01",
    "PlayerName": "Jamario Moon",
    "Year": "2008-2012",
    "Num": 0
  },
  {
    "PlayerId": "sandeja01",
    "PlayerName": "Jamarr Sanders",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "warneja01",
    "PlayerName": "Jameel Warney",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "nelsoja01",
    "PlayerName": "Jameer Nelson",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "artisja01",
    "PlayerName": "Jamel Artis",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "thomaja01",
    "PlayerName": "Jamel Thomas",
    "Year": "2000-2001",
    "Num": 0
  },
  {
    "PlayerId": "haginja01",
    "PlayerName": "Jamelle Hagins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "anderja01",
    "PlayerName": "James Anderson",
    "Year": "2011-2016",
    "Num": 0
  },
  {
    "PlayerId": "augusja01",
    "PlayerName": "James Augustine",
    "Year": "2007-2008",
    "Num": 0
  },
  {
    "PlayerId": "baileja01",
    "PlayerName": "James Bailey",
    "Year": "1980-1988",
    "Num": 0
  },
  {
    "PlayerId": "blackja02",
    "PlayerName": "James Blackmon",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "blackja01",
    "PlayerName": "James Blackwell",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "collija01",
    "PlayerName": "James Collins",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "cottoja02",
    "PlayerName": "James Cotton",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "donalja01",
    "PlayerName": "James Donaldson",
    "Year": "1981-1995",
    "Num": 0
  },
  {
    "PlayerId": "edwarja01",
    "PlayerName": "James Edwards",
    "Year": "1978-1996",
    "Num": 0
  },
  {
    "PlayerId": "ennisja01",
    "PlayerName": "James Ennis",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "hardeja01",
    "PlayerName": "James Harden",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "hardyja01",
    "PlayerName": "James Hardy",
    "Year": "1979-1982",
    "Num": 0
  },
  {
    "PlayerId": "johnsja01",
    "PlayerName": "James Johnson",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "jonesja02",
    "PlayerName": "James Jones",
    "Year": "2004-2017",
    "Num": 0
  },
  {
    "PlayerId": "langja01",
    "PlayerName": "James Lang",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "mcadoja01",
    "PlayerName": "James Michael McAdoo",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "nunnaja01",
    "PlayerName": "James Nunnally",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "phelaja02",
    "PlayerName": "James Phelan",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "poseyja01",
    "PlayerName": "James Posey",
    "Year": "2000-2011",
    "Num": 0
  },
  {
    "PlayerId": "rayja01",
    "PlayerName": "James Ray",
    "Year": "1981-1983",
    "Num": 0
  },
  {
    "PlayerId": "robinja02",
    "PlayerName": "James Robinson",
    "Year": "1994-2001",
    "Num": 0
  },
  {
    "PlayerId": "scottja01",
    "PlayerName": "James Scott",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "silasja01",
    "PlayerName": "James Silas",
    "Year": "1973-1982",
    "Num": 0
  },
  {
    "PlayerId": "singlja01",
    "PlayerName": "James Singleton",
    "Year": "2006-2012",
    "Num": 0
  },
  {
    "PlayerId": "southja01",
    "PlayerName": "James Southerland",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "thomaja02",
    "PlayerName": "James Thomas",
    "Year": "2005-2006",
    "Num": 0
  },
  {
    "PlayerId": "webbja01",
    "PlayerName": "James Webb",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "whiteja02",
    "PlayerName": "James White",
    "Year": "2007-2013",
    "Num": 0
  },
  {
    "PlayerId": "wilkeja02",
    "PlayerName": "James Wilkes",
    "Year": "1981-1983",
    "Num": 0
  },
  {
    "PlayerId": "worthja01",
    "PlayerName": "James Worthy",
    "Year": "1983-1994",
    "Num": 0
  },
  {
    "PlayerId": "youngja01",
    "PlayerName": "James Young",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "curryja01",
    "PlayerName": "JamesOn Curry",
    "Year": 2010,
    "Num": 0
  },
  {
    "PlayerId": "feickja01",
    "PlayerName": "Jamie Feick",
    "Year": "1997-2001",
    "Num": 0
  },
  {
    "PlayerId": "walleja01",
    "PlayerName": "Jamie Waller",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "watsoja01",
    "PlayerName": "Jamie Watson",
    "Year": "1995-1999",
    "Num": 0
  },
  {
    "PlayerId": "wilsoja02",
    "PlayerName": "Jamil Wilson",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "breweja01",
    "PlayerName": "Jamison Brewer",
    "Year": "2002-2005",
    "Num": 0
  },
  {
    "PlayerId": "greenja01",
    "PlayerName": "JaMychal Green",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "vanbrja01",
    "PlayerName": "Jan Van Breda Kolff",
    "Year": "1975-1983",
    "Num": 0
  },
  {
    "PlayerId": "veselja01",
    "PlayerName": "Jan Vesely",
    "Year": "2012-2014",
    "Num": 0
  },
  {
    "PlayerId": "timmaja01",
    "PlayerName": "Janis Timma",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "pargoja01",
    "PlayerName": "Jannero Pargo",
    "Year": "2003-2015",
    "Num": 0
  },
  {
    "PlayerId": "berggja01",
    "PlayerName": "Jared Berggren",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "cunnija01",
    "PlayerName": "Jared Cunningham",
    "Year": "2013-2016",
    "Num": 1
  },
  {
    "PlayerId": "dudleja01",
    "PlayerName": "Jared Dudley",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "jeffrja01",
    "PlayerName": "Jared Jeffries",
    "Year": "2003-2013",
    "Num": 0
  },
  {
    "PlayerId": "reineja01",
    "PlayerName": "Jared Reiner",
    "Year": "2005-2007",
    "Num": 0
  },
  {
    "PlayerId": "sullija01",
    "PlayerName": "Jared Sullinger",
    "Year": "2013-2017",
    "Num": 1
  },
  {
    "PlayerId": "eddieja01",
    "PlayerName": "Jarell Eddie",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "martija01",
    "PlayerName": "Jarell Martin",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "jacksja01",
    "PlayerName": "Jaren Jackson",
    "Year": "1990-2002",
    "Num": 0
  },
  {
    "PlayerId": "stokeja01",
    "PlayerName": "Jarnell Stokes",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "blossja01",
    "PlayerName": "Jaron Blossomgame",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnsja03",
    "PlayerName": "Jaron Johnson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "allenja01",
    "PlayerName": "Jarrett Allen",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "durhaja01",
    "PlayerName": "Jarrett Durham",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "jackja01",
    "PlayerName": "Jarrett Jack",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "famouja01",
    "PlayerName": "Jarrid Famous",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "uthofja01",
    "PlayerName": "Jarrod Uthoff",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "collija03",
    "PlayerName": "Jarron Collins",
    "Year": "2002-2011",
    "Num": 0
  },
  {
    "PlayerId": "hayesja01",
    "PlayerName": "Jarvis Hayes",
    "Year": "2004-2010",
    "Num": 0
  },
  {
    "PlayerId": "varnaja01",
    "PlayerName": "Jarvis Varnado",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "caffeja01",
    "PlayerName": "Jason Caffey",
    "Year": "1996-2003",
    "Num": 0
  },
  {
    "PlayerId": "collija02",
    "PlayerName": "Jason Collier",
    "Year": "2001-2005",
    "Num": 0
  },
  {
    "PlayerId": "collija04",
    "PlayerName": "Jason Collins",
    "Year": "2002-2014",
    "Num": 0
  },
  {
    "PlayerId": "hartja01",
    "PlayerName": "Jason Hart",
    "Year": "2001-2010",
    "Num": 0
  },
  {
    "PlayerId": "kaponja01",
    "PlayerName": "Jason Kapono",
    "Year": "2004-2012",
    "Num": 0
  },
  {
    "PlayerId": "kiddja01",
    "PlayerName": "Jason Kidd",
    "Year": "1995-2013",
    "Num": 0
  },
  {
    "PlayerId": "lawsoja01",
    "PlayerName": "Jason Lawson",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "maxieja01",
    "PlayerName": "Jason Maxiell",
    "Year": "2006-2015",
    "Num": 0
  },
  {
    "PlayerId": "miskija01",
    "PlayerName": "Jason Miskiri",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "richaja01",
    "PlayerName": "Jason Richardson",
    "Year": "2002-2015",
    "Num": 0
  },
  {
    "PlayerId": "sasseja01",
    "PlayerName": "Jason Sasser",
    "Year": "1997-1999",
    "Num": 0
  },
  {
    "PlayerId": "smithja02",
    "PlayerName": "Jason Smith",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "terryja01",
    "PlayerName": "Jason Terry",
    "Year": "2000-2018",
    "Num": 1
  },
  {
    "PlayerId": "thompja02",
    "PlayerName": "Jason Thompson",
    "Year": "2009-2016",
    "Num": 0
  },
  {
    "PlayerId": "washbja01",
    "PlayerName": "Jason Washburn",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "willija02",
    "PlayerName": "Jason Williams",
    "Year": "1999-2011",
    "Num": 0
  },
  {
    "PlayerId": "wilsoja01",
    "PlayerName": "Jasper Wilson",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "mcgeeja01",
    "PlayerName": "JaVale McGee",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "crittja01",
    "PlayerName": "Javaris Crittenton",
    "Year": "2008-2009",
    "Num": 0
  },
  {
    "PlayerId": "willija04",
    "PlayerName": "Jawad Williams",
    "Year": "2009-2011",
    "Num": 0
  },
  {
    "PlayerId": "oldhaja01",
    "PlayerName": "Jawann Oldham",
    "Year": "1981-1991",
    "Num": 0
  },
  {
    "PlayerId": "evansja01",
    "PlayerName": "Jawun Evans",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "arnetja01",
    "PlayerName": "Jay Arnette",
    "Year": "1964-1966",
    "Num": 0
  },
  {
    "PlayerId": "cartyja01",
    "PlayerName": "Jay Carty",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "edwarja02",
    "PlayerName": "Jay Edwards",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "guidija01",
    "PlayerName": "Jay Guidinger",
    "Year": "1993-1994",
    "Num": 0
  },
  {
    "PlayerId": "humphja01",
    "PlayerName": "Jay Humphries",
    "Year": "1985-1995",
    "Num": 0
  },
  {
    "PlayerId": "milleja01",
    "PlayerName": "Jay Miller",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "murphja01",
    "PlayerName": "Jay Murphy",
    "Year": "1985-1988",
    "Num": 0
  },
  {
    "PlayerId": "tayloja01",
    "PlayerName": "Jay Taylor",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "vinceja01",
    "PlayerName": "Jay Vincent",
    "Year": "1982-1990",
    "Num": 0
  },
  {
    "PlayerId": "willija03",
    "PlayerName": "Jay Williams",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "brownja02",
    "PlayerName": "Jaylen Brown",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "johnsja04",
    "PlayerName": "Jaylen Johnson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "grangja01",
    "PlayerName": "Jayson Granger",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "tatumja01",
    "PlayerName": "Jayson Tatum",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "willija01",
    "PlayerName": "Jayson Williams",
    "Year": "1991-1999",
    "Num": 0
  },
  {
    "PlayerId": "adrieje01",
    "PlayerName": "Jeff Adrien",
    "Year": "2011-2015",
    "Num": 0
  },
  {
    "PlayerId": "pendeje02",
    "PlayerName": "Jeff Ayres",
    "Year": "2010-2016",
    "Num": 0
  },
  {
    "PlayerId": "cookje01",
    "PlayerName": "Jeff Cook",
    "Year": "1980-1988",
    "Num": 0
  },
  {
    "PlayerId": "crossje01",
    "PlayerName": "Jeff Cross",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "footeje01",
    "PlayerName": "Jeff Foote",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "fosteje01",
    "PlayerName": "Jeff Foster",
    "Year": "2000-2012",
    "Num": 0
  },
  {
    "PlayerId": "grayeje01",
    "PlayerName": "Jeff Grayer",
    "Year": "1989-1998",
    "Num": 0
  },
  {
    "PlayerId": "greenje02",
    "PlayerName": "Jeff Green",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "hallije01",
    "PlayerName": "Jeff Halliburton",
    "Year": "1972-1973",
    "Num": 0
  },
  {
    "PlayerId": "hornaje01",
    "PlayerName": "Jeff Hornacek",
    "Year": "1987-2000",
    "Num": 0
  },
  {
    "PlayerId": "judkije01",
    "PlayerName": "Jeff Judkins",
    "Year": "1979-1983",
    "Num": 0
  },
  {
    "PlayerId": "lampje01",
    "PlayerName": "Jeff Lamp",
    "Year": "1982-1989",
    "Num": 0
  },
  {
    "PlayerId": "leboje01",
    "PlayerName": "Jeff Lebo",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "malonje01",
    "PlayerName": "Jeff Malone",
    "Year": "1984-1996",
    "Num": 0
  },
  {
    "PlayerId": "martije01",
    "PlayerName": "Jeff Martin",
    "Year": "1990-1991",
    "Num": 0
  },
  {
    "PlayerId": "mcinnje01",
    "PlayerName": "Jeff McInnis",
    "Year": "1997-2008",
    "Num": 0
  },
  {
    "PlayerId": "mullije01",
    "PlayerName": "Jeff Mullins",
    "Year": "1965-1976",
    "Num": 0
  },
  {
    "PlayerId": "nordgje01",
    "PlayerName": "Jeff Nordgaard",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "rulanje01",
    "PlayerName": "Jeff Ruland",
    "Year": "1982-1993",
    "Num": 0
  },
  {
    "PlayerId": "sandeje01",
    "PlayerName": "Jeff Sanders",
    "Year": "1990-1993",
    "Num": 0
  },
  {
    "PlayerId": "sladeje01",
    "PlayerName": "Jeff Slade",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "tayloje01",
    "PlayerName": "Jeff Taylor",
    "Year": "1983-1987",
    "Num": 0
  },
  {
    "PlayerId": "tayloje03",
    "PlayerName": "Jeff Taylor",
    "Year": "2013-2015",
    "Num": 0
  },
  {
    "PlayerId": "teaguje01",
    "PlayerName": "Jeff Teague",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "trepaje01",
    "PlayerName": "Jeff Trepagnier",
    "Year": "2002-2004",
    "Num": 0
  },
  {
    "PlayerId": "turneje01",
    "PlayerName": "Jeff Turner",
    "Year": "1985-1996",
    "Num": 0
  },
  {
    "PlayerId": "webbje01",
    "PlayerName": "Jeff Webb",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "webstje01",
    "PlayerName": "Jeff Webster",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "wilkije01",
    "PlayerName": "Jeff Wilkins",
    "Year": "1981-1986",
    "Num": 0
  },
  {
    "PlayerId": "witheje01",
    "PlayerName": "Jeff Withey",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "congdje01",
    "PlayerName": "Jeffrey Congdon",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "sheppje01",
    "PlayerName": "Jeffrey Sheppard",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "mccoyje01",
    "PlayerName": "Jelani McCoy",
    "Year": "1999-2008",
    "Num": 0
  },
  {
    "PlayerId": "lewisje01",
    "PlayerName": "JeQuan Lewis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "grantje03",
    "PlayerName": "Jerai Grant",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "honeyje01",
    "PlayerName": "Jerald Honeycutt",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "grantje01",
    "PlayerName": "Jerami Grant",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "mcneaje01",
    "PlayerName": "Jerel McNeal",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "riverje01",
    "PlayerName": "Jeremiah Rivers",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "allenje02",
    "PlayerName": "Jeremy Allen",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "evansje01",
    "PlayerName": "Jeremy Evans",
    "Year": "2011-2016",
    "Num": 1
  },
  {
    "PlayerId": "lambje01",
    "PlayerName": "Jeremy Lamb",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "linje01",
    "PlayerName": "Jeremy Lin",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "morgaje01",
    "PlayerName": "Jeremy Morgan",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "pargoje01",
    "PlayerName": "Jeremy Pargo",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "richaje01",
    "PlayerName": "Jeremy Richardson",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "senglje01",
    "PlayerName": "Jeremy Senglin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "tylerje01",
    "PlayerName": "Jeremy Tyler",
    "Year": "2012-2014",
    "Num": 0
  },
  {
    "PlayerId": "grantje02",
    "PlayerName": "Jerian Grant",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "jacksje01",
    "PlayerName": "Jermaine Jackson",
    "Year": "2000-2006",
    "Num": 0
  },
  {
    "PlayerId": "onealje01",
    "PlayerName": "Jermaine O'Neal",
    "Year": "1997-2014",
    "Num": 0
  },
  {
    "PlayerId": "tayloje02",
    "PlayerName": "Jermaine Taylor",
    "Year": "2010-2011",
    "Num": 0
  },
  {
    "PlayerId": "davidje01",
    "PlayerName": "Jermareo Davidson",
    "Year": "2008-2009",
    "Num": 0
  },
  {
    "PlayerId": "allenje01",
    "PlayerName": "Jerome Allen",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "anderje01",
    "PlayerName": "Jerome Anderson",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "beaslje01",
    "PlayerName": "Jerome Beasley",
    "Year": 2004,
    "Num": 0
  },
  {
    "PlayerId": "dysonje01",
    "PlayerName": "Jerome Dyson",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "harmoje01",
    "PlayerName": "Jerome Harmon",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "hendeje01",
    "PlayerName": "Jerome Henderson",
    "Year": "1986-1987",
    "Num": 0
  },
  {
    "PlayerId": "jamesje01",
    "PlayerName": "Jerome James",
    "Year": "1999-2009",
    "Num": 0
  },
  {
    "PlayerId": "jordaje01",
    "PlayerName": "Jerome Jordan",
    "Year": "2012-2015",
    "Num": 0
  },
  {
    "PlayerId": "kerseje01",
    "PlayerName": "Jerome Kersey",
    "Year": "1985-2001",
    "Num": 0
  },
  {
    "PlayerId": "laneje01",
    "PlayerName": "Jerome Lane",
    "Year": "1989-1993",
    "Num": 0
  },
  {
    "PlayerId": "moisoje01",
    "PlayerName": "Jerome Moiso",
    "Year": "2001-2005",
    "Num": 0
  },
  {
    "PlayerId": "whiteje01",
    "PlayerName": "Jerome Whitehead",
    "Year": "1979-1989",
    "Num": 0
  },
  {
    "PlayerId": "willije01",
    "PlayerName": "Jerome Williams",
    "Year": "1997-2005",
    "Num": 0
  },
  {
    "PlayerId": "benimje01",
    "PlayerName": "Jerrelle Benimon",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "mustaje01",
    "PlayerName": "Jerrod Mustaf",
    "Year": "1991-1994",
    "Num": 0
  },
  {
    "PlayerId": "baskeje01",
    "PlayerName": "Jerry Baskerville",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "birdje01",
    "PlayerName": "Jerry Bird",
    "Year": 1959,
    "Num": 0
  },
  {
    "PlayerId": "chambje01",
    "PlayerName": "Jerry Chambers",
    "Year": "1967-1974",
    "Num": 0
  },
  {
    "PlayerId": "doverje01",
    "PlayerName": "Jerry Dover",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "eavesje01",
    "PlayerName": "Jerry Eaves",
    "Year": "1983-1987",
    "Num": 0
  },
  {
    "PlayerId": "fleisje01",
    "PlayerName": "Jerry Fleishman",
    "Year": "1947-1953",
    "Num": 0
  },
  {
    "PlayerId": "fowleje01",
    "PlayerName": "Jerry Fowler",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "greenje01",
    "PlayerName": "Jerry Greenspan",
    "Year": "1964-1965",
    "Num": 0
  },
  {
    "PlayerId": "groteje01",
    "PlayerName": "Jerry Grote",
    "Year": 1965,
    "Num": 0
  },
  {
    "PlayerId": "harknje01",
    "PlayerName": "Jerry Harkness",
    "Year": "1964-1969",
    "Num": 0
  },
  {
    "PlayerId": "kellyje01",
    "PlayerName": "Jerry Kelly",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "lucasje01",
    "PlayerName": "Jerry Lucas",
    "Year": "1964-1974",
    "Num": 0
  },
  {
    "PlayerId": "mckeeje01",
    "PlayerName": "Jerry McKee",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "nagelje01",
    "PlayerName": "Jerry Nagel",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "paulsje01",
    "PlayerName": "Jerry Paulson",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "pendeje01",
    "PlayerName": "Jerry Pender",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "pettwje01",
    "PlayerName": "Jerry Pettway",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "reynoje01",
    "PlayerName": "Jerry Reynolds",
    "Year": "1986-1996",
    "Num": 0
  },
  {
    "PlayerId": "rookje01",
    "PlayerName": "Jerry Rook",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "rulloje01",
    "PlayerName": "Jerry Rullo",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "sichtje01",
    "PlayerName": "Jerry Sichting",
    "Year": "1981-1990",
    "Num": 0
  },
  {
    "PlayerId": "sloanje01",
    "PlayerName": "Jerry Sloan",
    "Year": "1966-1976",
    "Num": 0
  },
  {
    "PlayerId": "smithje01",
    "PlayerName": "Jerry Smith",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "stackje01",
    "PlayerName": "Jerry Stackhouse",
    "Year": "1996-2013",
    "Num": 0
  },
  {
    "PlayerId": "westje01",
    "PlayerName": "Jerry West",
    "Year": "1961-1974",
    "Num": 0
  },
  {
    "PlayerId": "bayleje01",
    "PlayerName": "Jerryd Bayless",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "sasseje01",
    "PlayerName": "Jeryl Sasser",
    "Year": "2002-2003",
    "Num": 0
  },
  {
    "PlayerId": "arnelje01",
    "PlayerName": "Jesse Arnelle",
    "Year": 1956,
    "Num": 0
  },
  {
    "PlayerId": "bransje01",
    "PlayerName": "Jesse Branson",
    "Year": "1966-1968",
    "Num": 0
  },
  {
    "PlayerId": "darkje01",
    "PlayerName": "Jesse Dark",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "changje01",
    "PlayerName": "Jet Chang",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ardji01",
    "PlayerName": "Jim Ard",
    "Year": "1971-1978",
    "Num": 0
  },
  {
    "PlayerId": "baechji01",
    "PlayerName": "Jim Baechtold",
    "Year": "1953-1957",
    "Num": 0
  },
  {
    "PlayerId": "barneji01",
    "PlayerName": "Jim Barnes",
    "Year": "1965-1971",
    "Num": 0
  },
  {
    "PlayerId": "barneji02",
    "PlayerName": "Jim Barnett",
    "Year": "1967-1977",
    "Num": 0
  },
  {
    "PlayerId": "bostiji01",
    "PlayerName": "Jim Bostic",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "bradlji01",
    "PlayerName": "Jim Bradley",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "brascji01",
    "PlayerName": "Jim Brasco",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "breweji01",
    "PlayerName": "Jim Brewer",
    "Year": "1974-1982",
    "Num": 0
  },
  {
    "PlayerId": "brogaji01",
    "PlayerName": "Jim Brogan",
    "Year": "1982-1983",
    "Num": 0
  },
  {
    "PlayerId": "brownji01",
    "PlayerName": "Jim Browne",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "burnsji01",
    "PlayerName": "Jim Burns",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "caldwji01",
    "PlayerName": "Jim Caldwell",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "choneji01",
    "PlayerName": "Jim Chones",
    "Year": "1973-1982",
    "Num": 0
  },
  {
    "PlayerId": "cleamji01",
    "PlayerName": "Jim Cleamons",
    "Year": "1972-1980",
    "Num": 0
  },
  {
    "PlayerId": "creigji01",
    "PlayerName": "Jim Creighton",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "davisji01",
    "PlayerName": "Jim Davis",
    "Year": "1968-1975",
    "Num": 0
  },
  {
    "PlayerId": "eakinji01",
    "PlayerName": "Jim Eakins",
    "Year": "1969-1978",
    "Num": 0
  },
  {
    "PlayerId": "farmeji01",
    "PlayerName": "Jim Farmer",
    "Year": "1988-1994",
    "Num": 0
  },
  {
    "PlayerId": "foxji01",
    "PlayerName": "Jim Fox",
    "Year": "1968-1977",
    "Num": 0
  },
  {
    "PlayerId": "fritsji01",
    "PlayerName": "Jim Fritsche",
    "Year": "1954-1955",
    "Num": 0
  },
  {
    "PlayerId": "garviji01",
    "PlayerName": "Jim Garvin",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "grandji01",
    "PlayerName": "Jim Grandholm",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "hadnoji01",
    "PlayerName": "Jim Hadnot",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "hayesji01",
    "PlayerName": "Jim Hayes",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "holstji01",
    "PlayerName": "Jim Holstein",
    "Year": "1953-1956",
    "Num": 0
  },
  {
    "PlayerId": "jacksji01",
    "PlayerName": "Jim Jackson",
    "Year": "1993-2006",
    "Num": 0
  },
  {
    "PlayerId": "jarviji01",
    "PlayerName": "Jim Jarvis",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "johnsji01",
    "PlayerName": "Jim Johnstone",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "kingji01",
    "PlayerName": "Jim King",
    "Year": "1964-1973",
    "Num": 0
  },
  {
    "PlayerId": "kissaji01",
    "PlayerName": "Jim Kissane",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "krebsji01",
    "PlayerName": "Jim Krebs",
    "Year": "1958-1964",
    "Num": 0
  },
  {
    "PlayerId": "lamplji01",
    "PlayerName": "Jim Lampley",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "lesji01",
    "PlayerName": "Jim Les",
    "Year": "1989-1995",
    "Num": 0
  },
  {
    "PlayerId": "loscuji01",
    "PlayerName": "Jim Loscutoff",
    "Year": "1956-1964",
    "Num": 0
  },
  {
    "PlayerId": "luisiji01",
    "PlayerName": "Jim Luisi",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "marshji01",
    "PlayerName": "Jim Marsh",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "mcdanji01",
    "PlayerName": "Jim McDaniels",
    "Year": "1972-1978",
    "Num": 0
  },
  {
    "PlayerId": "mcelrji01",
    "PlayerName": "Jim McElroy",
    "Year": "1976-1982",
    "Num": 0
  },
  {
    "PlayerId": "mcilvji01",
    "PlayerName": "Jim McIlvaine",
    "Year": "1995-2001",
    "Num": 0
  },
  {
    "PlayerId": "mcmilji01",
    "PlayerName": "Jim McMillian",
    "Year": "1971-1979",
    "Num": 0
  },
  {
    "PlayerId": "mooneji01",
    "PlayerName": "Jim Mooney",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "nealji01",
    "PlayerName": "Jim Neal",
    "Year": "1954-1955",
    "Num": 0
  },
  {
    "PlayerId": "nolanji01",
    "PlayerName": "Jim Nolan",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "obrieji02",
    "PlayerName": "Jim O'Brien",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "owensji01",
    "PlayerName": "Jim Owens",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "palmeji01",
    "PlayerName": "Jim Palmer",
    "Year": "1959-1961",
    "Num": 0
  },
  {
    "PlayerId": "paxsoji01",
    "PlayerName": "Jim Paxson",
    "Year": "1957-1958",
    "Num": 0
  },
  {
    "PlayerId": "paxsoji02",
    "PlayerName": "Jim Paxson",
    "Year": "1980-1990",
    "Num": 0
  },
  {
    "PlayerId": "peterji01",
    "PlayerName": "Jim Petersen",
    "Year": "1985-1992",
    "Num": 0
  },
  {
    "PlayerId": "pollaji01",
    "PlayerName": "Jim Pollard",
    "Year": "1949-1955",
    "Num": 0
  },
  {
    "PlayerId": "priceji01",
    "PlayerName": "Jim Price",
    "Year": "1973-1979",
    "Num": 0
  },
  {
    "PlayerId": "rayji01",
    "PlayerName": "Jim Ray",
    "Year": "1957-1960",
    "Num": 0
  },
  {
    "PlayerId": "reidji01",
    "PlayerName": "Jim Reid",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "riffeji01",
    "PlayerName": "Jim Riffey",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "rowinji01",
    "PlayerName": "Jim Rowinski",
    "Year": "1989-1990",
    "Num": 0
  },
  {
    "PlayerId": "seminji01",
    "PlayerName": "Jim Seminoff",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "slaugji01",
    "PlayerName": "Jim Slaughter",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "smithji01",
    "PlayerName": "Jim Smith",
    "Year": "1982-1983",
    "Num": 0
  },
  {
    "PlayerId": "spanaji01",
    "PlayerName": "Jim Spanarkel",
    "Year": "1980-1984",
    "Num": 0
  },
  {
    "PlayerId": "sprinji01",
    "PlayerName": "Jim Springer",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "spruiji01",
    "PlayerName": "Jim Spruill",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "thomaji01",
    "PlayerName": "Jim Thomas",
    "Year": "1984-1991",
    "Num": 0
  },
  {
    "PlayerId": "tuckeji01",
    "PlayerName": "Jim Tucker",
    "Year": "1955-1957",
    "Num": 0
  },
  {
    "PlayerId": "walshji01",
    "PlayerName": "Jim Walsh",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "wareji01",
    "PlayerName": "Jim Ware",
    "Year": "1967-1969",
    "Num": 0
  },
  {
    "PlayerId": "washiji01",
    "PlayerName": "Jim Washington",
    "Year": "1966-1976",
    "Num": 0
  },
  {
    "PlayerId": "wilsoji01",
    "PlayerName": "Jim Wilson",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "zoetji01",
    "PlayerName": "Jim Zoet",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "fredeji01",
    "PlayerName": "Jimmer Fredette",
    "Year": "2012-2016",
    "Num": 0
  },
  {
    "PlayerId": "bakerji01",
    "PlayerName": "Jimmie Baker",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "butleji01",
    "PlayerName": "Jimmy Butler",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "carruji01",
    "PlayerName": "Jimmy Carruth",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "colliji01",
    "PlayerName": "Jimmy Collins",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "conneji01",
    "PlayerName": "Jimmy Conner",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "dardeji01",
    "PlayerName": "Jimmy Darden",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "darroji01",
    "PlayerName": "Jimmy Darrow",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "dawsoji01",
    "PlayerName": "Jimmy Dawson",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "fosteja01",
    "PlayerName": "Jimmy Foster",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "jonesji01",
    "PlayerName": "Jimmy Jones",
    "Year": "1968-1977",
    "Num": 0
  },
  {
    "PlayerId": "kingji02",
    "PlayerName": "Jimmy King",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "obrieji01",
    "PlayerName": "Jimmy O'Brien",
    "Year": "1972-1975",
    "Num": 0
  },
  {
    "PlayerId": "oliveji01",
    "PlayerName": "Jimmy Oliver",
    "Year": "1992-1999",
    "Num": 0
  },
  {
    "PlayerId": "raylji01",
    "PlayerName": "Jimmy Rayl",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "walkeji01",
    "PlayerName": "Jimmy Walker",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "welscji01",
    "PlayerName": "Jiri Welsch",
    "Year": "2003-2006",
    "Num": 0
  },
  {
    "PlayerId": "englijo01",
    "PlayerName": "Jo Jo English",
    "Year": "1993-1995",
    "Num": 0
  },
  {
    "PlayerId": "whitejo01",
    "PlayerName": "Jo Jo White",
    "Year": "1970-1981",
    "Num": 0
  },
  {
    "PlayerId": "noahjo01",
    "PlayerName": "Joakim Noah",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "viannjo01",
    "PlayerName": "Joao Vianna",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "wrighjo01",
    "PlayerName": "Joby Wright",
    "Year": "1973-1976",
    "Num": 0
  },
  {
    "PlayerId": "meeksjo01",
    "PlayerName": "Jodie Meeks",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "alexajo01",
    "PlayerName": "Joe Alexander",
    "Year": "2009-2010",
    "Num": 0
  },
  {
    "PlayerId": "arlaujo01",
    "PlayerName": "Joe Arlauckas",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "carrojo01",
    "PlayerName": "Joe Barry Carroll",
    "Year": "1981-1991",
    "Num": 0
  },
  {
    "PlayerId": "biniojo01",
    "PlayerName": "Joe Binion",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "bradljo01",
    "PlayerName": "Joe Bradley",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "bryanjo01",
    "PlayerName": "Joe Bryant",
    "Year": "1976-1983",
    "Num": 0
  },
  {
    "PlayerId": "buckhjo01",
    "PlayerName": "Joe Buckhalter",
    "Year": "1962-1963",
    "Num": 0
  },
  {
    "PlayerId": "caldwjo01",
    "PlayerName": "Joe Caldwell",
    "Year": "1965-1975",
    "Num": 0
  },
  {
    "PlayerId": "colonjo01",
    "PlayerName": "Joe Colone",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "cookejo01",
    "PlayerName": "Joe Cooke",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "coopejo01",
    "PlayerName": "Joe Cooper",
    "Year": "1982-1985",
    "Num": 0
  },
  {
    "PlayerId": "courtjo01",
    "PlayerName": "Joe Courtney",
    "Year": "1993-1997",
    "Num": 0
  },
  {
    "PlayerId": "crawfjo01",
    "PlayerName": "Joe Crawford",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "crispjo01",
    "PlayerName": "Joe Crispin",
    "Year": 2002,
    "Num": 0
  },
  {
    "PlayerId": "deprejo01",
    "PlayerName": "Joe DePre",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "dolhojo01",
    "PlayerName": "Joe Dolhon",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "dumarjo01",
    "PlayerName": "Joe Dumars",
    "Year": "1986-1999",
    "Num": 0
  },
  {
    "PlayerId": "ellisjo01",
    "PlayerName": "Joe Ellis",
    "Year": "1967-1974",
    "Num": 0
  },
  {
    "PlayerId": "fabeljo01",
    "PlayerName": "Joe Fabel",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "fulksjo01",
    "PlayerName": "Joe Fulks",
    "Year": "1947-1954",
    "Num": 0
  },
  {
    "PlayerId": "grabojo01",
    "PlayerName": "Joe Graboski",
    "Year": "1949-1962",
    "Num": 0
  },
  {
    "PlayerId": "hamiljo01",
    "PlayerName": "Joe Hamilton",
    "Year": "1971-1976",
    "Num": 0
  },
  {
    "PlayerId": "hamoojo01",
    "PlayerName": "Joe Hamood",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "harrijo01",
    "PlayerName": "Joe Harris",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "hassejo01",
    "PlayerName": "Joe Hassett",
    "Year": "1978-1983",
    "Num": 0
  },
  {
    "PlayerId": "hollajo01",
    "PlayerName": "Joe Holland",
    "Year": "1950-1952",
    "Num": 0
  },
  {
    "PlayerId": "holupjo01",
    "PlayerName": "Joe Holup",
    "Year": "1957-1959",
    "Num": 0
  },
  {
    "PlayerId": "huttojo01",
    "PlayerName": "Joe Hutton",
    "Year": "1951-1952",
    "Num": 0
  },
  {
    "PlayerId": "inglejo01",
    "PlayerName": "Joe Ingles",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "jacksjo01",
    "PlayerName": "Joe Jackson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnsjo02",
    "PlayerName": "Joe Johnson",
    "Year": "2002-2018",
    "Num": 1
  },
  {
    "PlayerId": "kennejo01",
    "PlayerName": "Joe Kennedy",
    "Year": "1969-1971",
    "Num": 0
  },
  {
    "PlayerId": "kleinjo01",
    "PlayerName": "Joe Kleine",
    "Year": "1986-2000",
    "Num": 0
  },
  {
    "PlayerId": "kopicjo01",
    "PlayerName": "Joe Kopicki",
    "Year": "1983-1985",
    "Num": 0
  },
  {
    "PlayerId": "mcnamjo01",
    "PlayerName": "Joe McNamee",
    "Year": "1951-1952",
    "Num": 0
  },
  {
    "PlayerId": "meriwjo01",
    "PlayerName": "Joe Meriweather",
    "Year": "1976-1985",
    "Num": 0
  },
  {
    "PlayerId": "mullajo01",
    "PlayerName": "Joe Mullaney",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "pacejo01",
    "PlayerName": "Joe Pace",
    "Year": "1977-1978",
    "Num": 0
  },
  {
    "PlayerId": "reavejo01",
    "PlayerName": "Joe Reaves",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "roberjo01",
    "PlayerName": "Joe Roberts",
    "Year": "1961-1968",
    "Num": 0
  },
  {
    "PlayerId": "ruklijo01",
    "PlayerName": "Joe Ruklick",
    "Year": "1960-1962",
    "Num": 0
  },
  {
    "PlayerId": "smithjo02",
    "PlayerName": "Joe Smith",
    "Year": "1996-2011",
    "Num": 0
  },
  {
    "PlayerId": "smythjo01",
    "PlayerName": "Joe Smyth",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "stephjo01",
    "PlayerName": "Joe Stephens",
    "Year": "1997-2000",
    "Num": 0
  },
  {
    "PlayerId": "strawjo01",
    "PlayerName": "Joe Strawder",
    "Year": "1966-1968",
    "Num": 0
  },
  {
    "PlayerId": "thomajo01",
    "PlayerName": "Joe Thomas",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "wolfjo01",
    "PlayerName": "Joe Wolf",
    "Year": "1988-1999",
    "Num": 0
  },
  {
    "PlayerId": "youngjo01",
    "PlayerName": "Joe Young",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "anthojo01",
    "PlayerName": "Joel Anthony",
    "Year": "2008-2017",
    "Num": 1
  },
  {
    "PlayerId": "barkejo01",
    "PlayerName": "Joel Barkers",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bolomjo01",
    "PlayerName": "Joel Bolomboy",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "embiijo01",
    "PlayerName": "Joel Embiid",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "freeljo01",
    "PlayerName": "Joel Freeland",
    "Year": "2013-2015",
    "Num": 0
  },
  {
    "PlayerId": "kramejo01",
    "PlayerName": "Joel Kramer",
    "Year": "1979-1983",
    "Num": 0
  },
  {
    "PlayerId": "przybjo01",
    "PlayerName": "Joel Przybilla",
    "Year": "2001-2013",
    "Num": 0
  },
  {
    "PlayerId": "dorsejo01",
    "PlayerName": "Joey Dorsey",
    "Year": "2009-2015",
    "Num": 0
  },
  {
    "PlayerId": "grahajo01",
    "PlayerName": "Joey Graham",
    "Year": "2006-2011",
    "Num": 0
  },
  {
    "PlayerId": "lauvejo01",
    "PlayerName": "Joffrey Lauvergne",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "petrojo01",
    "PlayerName": "Johan Petro",
    "Year": "2006-2013",
    "Num": 0
  },
  {
    "PlayerId": "abramjo01",
    "PlayerName": "John Abramovic",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "amaecjo01",
    "PlayerName": "John Amaechi",
    "Year": "1996-2003",
    "Num": 0
  },
  {
    "PlayerId": "arthujo01",
    "PlayerName": "John Arthurs",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "baglejo01",
    "PlayerName": "John Bagley",
    "Year": "1983-1994",
    "Num": 0
  },
  {
    "PlayerId": "barbejo01",
    "PlayerName": "John Barber",
    "Year": 1957,
    "Num": 0
  },
  {
    "PlayerId": "barnhjo01",
    "PlayerName": "John Barnhill",
    "Year": "1963-1972",
    "Num": 0
  },
  {
    "PlayerId": "barrjo01",
    "PlayerName": "John Barr",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "battljo01",
    "PlayerName": "John Battle",
    "Year": "1986-1995",
    "Num": 0
  },
  {
    "PlayerId": "beasljo01",
    "PlayerName": "John Beasley",
    "Year": "1968-1974",
    "Num": 0
  },
  {
    "PlayerId": "blockjo01",
    "PlayerName": "John Block",
    "Year": "1967-1976",
    "Num": 0
  },
  {
    "PlayerId": "briskjo01",
    "PlayerName": "John Brisker",
    "Year": "1970-1975",
    "Num": 0
  },
  {
    "PlayerId": "brownjo01",
    "PlayerName": "John Brown",
    "Year": "1974-1980",
    "Num": 0
  },
  {
    "PlayerId": "celesjo01",
    "PlayerName": "John Celestand",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "chanejo01",
    "PlayerName": "John Chaney",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "clawsjo01",
    "PlayerName": "John Clawson",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "cokerjo01",
    "PlayerName": "John Coker",
    "Year": "1996-2001",
    "Num": 0
  },
  {
    "PlayerId": "collijo01",
    "PlayerName": "John Collins",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "comeajo01",
    "PlayerName": "John Comeaux",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "coughjo01",
    "PlayerName": "John Coughran",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "crottjo01",
    "PlayerName": "John Crotty",
    "Year": "1993-2003",
    "Num": 0
  },
  {
    "PlayerId": "dicksjo01",
    "PlayerName": "John Dickson",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "dougljo01",
    "PlayerName": "John Douglas",
    "Year": "1982-1983",
    "Num": 0
  },
  {
    "PlayerId": "drewjo01",
    "PlayerName": "John Drew",
    "Year": "1975-1985",
    "Num": 0
  },
  {
    "PlayerId": "durenjo01",
    "PlayerName": "John Duren",
    "Year": "1981-1983",
    "Num": 0
  },
  {
    "PlayerId": "edwarjo01",
    "PlayerName": "John Edwards",
    "Year": "2005-2006",
    "Num": 0
  },
  {
    "PlayerId": "faircjo01",
    "PlayerName": "John Fairchild",
    "Year": "1966-1970",
    "Num": 0
  },
  {
    "PlayerId": "garrijo01",
    "PlayerName": "John Garris",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "gianejo01",
    "PlayerName": "John Gianelli",
    "Year": "1973-1980",
    "Num": 0
  },
  {
    "PlayerId": "greigjo01",
    "PlayerName": "John Greig",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "hargijo01",
    "PlayerName": "John Hargis",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "havlijo01",
    "PlayerName": "John Havlicek",
    "Year": "1963-1978",
    "Num": 0
  },
  {
    "PlayerId": "hazenjo01",
    "PlayerName": "John Hazen",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "hensojo01",
    "PlayerName": "John Henson",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "hollajo02",
    "PlayerName": "John Holland",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "hummejo01",
    "PlayerName": "John Hummer",
    "Year": "1971-1976",
    "Num": 0
  },
  {
    "PlayerId": "janisjo01",
    "PlayerName": "John Janisch",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "jenkijo01",
    "PlayerName": "John Jenkins",
    "Year": "2013-2017",
    "Num": 1
  },
  {
    "PlayerId": "johnsjo01",
    "PlayerName": "John Johnson",
    "Year": "1971-1982",
    "Num": 0
  },
  {
    "PlayerId": "kuestjo01",
    "PlayerName": "John Kuester",
    "Year": "1978-1980",
    "Num": 0
  },
  {
    "PlayerId": "lambejo01",
    "PlayerName": "John Lambert",
    "Year": "1976-1982",
    "Num": 0
  },
  {
    "PlayerId": "laskojo01",
    "PlayerName": "John Laskowski",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "loganjo01",
    "PlayerName": "John Logan",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "longjo01",
    "PlayerName": "John Long",
    "Year": "1979-1997",
    "Num": 0
  },
  {
    "PlayerId": "lucasjo01",
    "PlayerName": "John Lucas",
    "Year": "1977-1990",
    "Num": 0
  },
  {
    "PlayerId": "lucasjo02",
    "PlayerName": "John Lucas III",
    "Year": "2006-2017",
    "Num": 1
  },
  {
    "PlayerId": "mahnkjo01",
    "PlayerName": "John Mahnken",
    "Year": "1947-1953",
    "Num": 0
  },
  {
    "PlayerId": "mandijo01",
    "PlayerName": "John Mandic",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "mcconjo01",
    "PlayerName": "John McConathy",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "mcculjo01",
    "PlayerName": "John McCullough",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "mengejo01",
    "PlayerName": "John Mengelt",
    "Year": "1972-1981",
    "Num": 0
  },
  {
    "PlayerId": "millsjo01",
    "PlayerName": "John Mills",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "millsjo02",
    "PlayerName": "John Millsap",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "morrijo01",
    "PlayerName": "John Morrison",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "mortojo01",
    "PlayerName": "John Morton",
    "Year": "1990-1992",
    "Num": 0
  },
  {
    "PlayerId": "murphjo01",
    "PlayerName": "John Murphy",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "oboyljo01",
    "PlayerName": "John O'Boyle",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "oldhajo01",
    "PlayerName": "John Oldham",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "olivejo01",
    "PlayerName": "John Olive",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "paxsojo01",
    "PlayerName": "John Paxson",
    "Year": "1984-1994",
    "Num": 0
  },
  {
    "PlayerId": "pilchjo01",
    "PlayerName": "John Pilch",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "pinonjo01",
    "PlayerName": "John Pinone",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "postljo01",
    "PlayerName": "John Postley",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "pritcjo01",
    "PlayerName": "John Pritchard",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "rennijo01",
    "PlayerName": "John Rennicke",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "richtjo01",
    "PlayerName": "John Richter",
    "Year": 1960,
    "Num": 0
  },
  {
    "PlayerId": "rochejo01",
    "PlayerName": "John Roche",
    "Year": "1972-1982",
    "Num": 0
  },
  {
    "PlayerId": "ruddjo01",
    "PlayerName": "John Rudd",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "rudomjo01",
    "PlayerName": "John Rudometkin",
    "Year": "1963-1965",
    "Num": 0
  },
  {
    "PlayerId": "sallejo01",
    "PlayerName": "John Salley",
    "Year": "1987-2000",
    "Num": 0
  },
  {
    "PlayerId": "salmojo01",
    "PlayerName": "John Salmons",
    "Year": "2003-2015",
    "Num": 0
  },
  {
    "PlayerId": "schwejo01",
    "PlayerName": "John Schweitz",
    "Year": "1985-1987",
    "Num": 0
  },
  {
    "PlayerId": "shaskjo01",
    "PlayerName": "John Shasky",
    "Year": "1989-1991",
    "Num": 0
  },
  {
    "PlayerId": "shumajo01",
    "PlayerName": "John Shumate",
    "Year": "1976-1981",
    "Num": 0
  },
  {
    "PlayerId": "smithjo01",
    "PlayerName": "John Smith",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "starkjo01",
    "PlayerName": "John Starks",
    "Year": "1989-2002",
    "Num": 0
  },
  {
    "PlayerId": "stockjo01",
    "PlayerName": "John Stockton",
    "Year": "1985-2003",
    "Num": 0
  },
  {
    "PlayerId": "stroejo01",
    "PlayerName": "John Stroeder",
    "Year": "1988-1989",
    "Num": 0
  },
  {
    "PlayerId": "stroujo01",
    "PlayerName": "John Stroud",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "thomajo02",
    "PlayerName": "John Thomas",
    "Year": "1998-2006",
    "Num": 0
  },
  {
    "PlayerId": "thompjo01",
    "PlayerName": "John Thompson",
    "Year": "1965-1966",
    "Num": 0
  },
  {
    "PlayerId": "trappjo01",
    "PlayerName": "John Trapp",
    "Year": "1969-1973",
    "Num": 0
  },
  {
    "PlayerId": "tresvjo01",
    "PlayerName": "John Tresvant",
    "Year": "1965-1973",
    "Num": 0
  },
  {
    "PlayerId": "tschojo01",
    "PlayerName": "John Tschogl",
    "Year": "1973-1975",
    "Num": 0
  },
  {
    "PlayerId": "turnejo01",
    "PlayerName": "John Turner",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "vallejo01",
    "PlayerName": "John Vallely",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "walljo01",
    "PlayerName": "John Wall",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "wallajo01",
    "PlayerName": "John Wallace",
    "Year": "1997-2004",
    "Num": 0
  },
  {
    "PlayerId": "warrejo01",
    "PlayerName": "John Warren",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "wetzejo01",
    "PlayerName": "John Wetzel",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "willijo02",
    "PlayerName": "John Williams",
    "Year": "1987-1995",
    "Num": 0
  },
  {
    "PlayerId": "willijo01",
    "PlayerName": "John Williamson",
    "Year": "1974-1981",
    "Num": 0
  },
  {
    "PlayerId": "windsjo01",
    "PlayerName": "John Windsor",
    "Year": 1964,
    "Num": 0
  },
  {
    "PlayerId": "motlejo01",
    "PlayerName": "Johnathan Motley",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "austijo01",
    "PlayerName": "Johnny Austin",
    "Year": "1967-1968",
    "Num": 0
  },
  {
    "PlayerId": "bachjo01",
    "PlayerName": "Johnny Bach",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "baumjo01",
    "PlayerName": "Johnny Baum",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "coxjo01",
    "PlayerName": "Johnny Cox",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "davisjo01",
    "PlayerName": "Johnny Davis",
    "Year": "1977-1986",
    "Num": 0
  },
  {
    "PlayerId": "dawkijo01",
    "PlayerName": "Johnny Dawkins",
    "Year": "1987-1995",
    "Num": 0
  },
  {
    "PlayerId": "eganjo01",
    "PlayerName": "Johnny Egan",
    "Year": "1962-1972",
    "Num": 0
  },
  {
    "PlayerId": "ezersjo01",
    "PlayerName": "Johnny Ezersky",
    "Year": "1948-1950",
    "Num": 0
  },
  {
    "PlayerId": "greenjo01",
    "PlayerName": "Johnny Green",
    "Year": "1960-1973",
    "Num": 0
  },
  {
    "PlayerId": "highjo01",
    "PlayerName": "Johnny High",
    "Year": "1980-1984",
    "Num": 0
  },
  {
    "PlayerId": "horanjo01",
    "PlayerName": "Johnny Horan",
    "Year": 1956,
    "Num": 0
  },
  {
    "PlayerId": "jonesjo01",
    "PlayerName": "Johnny Jones",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "jorgejo01",
    "PlayerName": "Johnny Jorgensen",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "macknjo01",
    "PlayerName": "Johnny Macknowsky",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "mathijo01",
    "PlayerName": "Johnny Mathis",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "mccarjo01",
    "PlayerName": "Johnny McCarthy",
    "Year": "1957-1964",
    "Num": 0
  },
  {
    "PlayerId": "moorejo01",
    "PlayerName": "Johnny Moore",
    "Year": "1981-1990",
    "Num": 0
  },
  {
    "PlayerId": "neumajo01",
    "PlayerName": "Johnny Neumann",
    "Year": "1972-1978",
    "Num": 0
  },
  {
    "PlayerId": "newmajo01",
    "PlayerName": "Johnny Newman",
    "Year": "1987-2002",
    "Num": 0
  },
  {
    "PlayerId": "norlajo01",
    "PlayerName": "Johnny Norlander",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "obryajo01",
    "PlayerName": "Johnny O'Bryant",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "orrjo01",
    "PlayerName": "Johnny Orr",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "payakjo01",
    "PlayerName": "Johnny Payak",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "rogerjo01",
    "PlayerName": "Johnny Rogers",
    "Year": "1987-1988",
    "Num": 0
  },
  {
    "PlayerId": "simmojo01",
    "PlayerName": "Johnny Simmons",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "taylojo01",
    "PlayerName": "Johnny Taylor",
    "Year": "1998-2000",
    "Num": 0
  },
  {
    "PlayerId": "barryjo01",
    "PlayerName": "Jon Barry",
    "Year": "1993-2006",
    "Num": 0
  },
  {
    "PlayerId": "brockjo01",
    "PlayerName": "Jon Brockman",
    "Year": "2010-2012",
    "Num": 0
  },
  {
    "PlayerId": "diebljo01",
    "PlayerName": "Jon Diebler",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "horfojo01",
    "PlayerName": "Jon Horford",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "koncajo01",
    "PlayerName": "Jon Koncak",
    "Year": "1986-1996",
    "Num": 0
  },
  {
    "PlayerId": "leuerjo01",
    "PlayerName": "Jon Leuer",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "mcglojo01",
    "PlayerName": "Jon McGlocklin",
    "Year": "1966-1976",
    "Num": 0
  },
  {
    "PlayerId": "sundvjo01",
    "PlayerName": "Jon Sundvold",
    "Year": "1984-1992",
    "Num": 0
  },
  {
    "PlayerId": "boldejo01",
    "PlayerName": "Jonah Bolden",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jerebjo01",
    "PlayerName": "Jonas Jerebko",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "valanjo01",
    "PlayerName": "Jonas Valanciunas",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "bendejo01",
    "PlayerName": "Jonathan Bender",
    "Year": "2000-2010",
    "Num": 0
  },
  {
    "PlayerId": "gibsojo01",
    "PlayerName": "Jonathan Gibson",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "holmejo01",
    "PlayerName": "Jonathan Holmes",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "isaacjo01",
    "PlayerName": "Jonathan Isaac",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "kernejo01",
    "PlayerName": "Jonathan Kerner",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "simmojo02",
    "PlayerName": "Jonathon Simmons",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "flynnjo01",
    "PlayerName": "Jonny Flynn",
    "Year": "2010-2012",
    "Num": 0
  },
  {
    "PlayerId": "adamsjo01",
    "PlayerName": "Jordan Adams",
    "Year": "2015-2016",
    "Num": 1
  },
  {
    "PlayerId": "bachyjo01",
    "PlayerName": "Jordan Bachynski",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "belljo01",
    "PlayerName": "Jordan Bell",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "clarkjo01",
    "PlayerName": "Jordan Clarkson",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "crawfjo02",
    "PlayerName": "Jordan Crawford",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "farmajo01",
    "PlayerName": "Jordan Farmar",
    "Year": "2007-2017",
    "Num": 1
  },
  {
    "PlayerId": "hamiljo02",
    "PlayerName": "Jordan Hamilton",
    "Year": "2012-2016",
    "Num": 0
  },
  {
    "PlayerId": "henrijo01",
    "PlayerName": "Jordan Henriquez",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hilljo01",
    "PlayerName": "Jordan Hill",
    "Year": "2010-2017",
    "Num": 1
  },
  {
    "PlayerId": "mathejo01",
    "PlayerName": "Jordan Mathews",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mcraejo01",
    "PlayerName": "Jordan McRae",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "mickejo01",
    "PlayerName": "Jordan Mickey",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "railejo01",
    "PlayerName": "Jordan Railey",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "siberjo01",
    "PlayerName": "Jordan Sibert",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "taylojo02",
    "PlayerName": "Jordan Taylor",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "willijo03",
    "PlayerName": "Jordan Williams",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "garbajo01",
    "PlayerName": "Jorge Garbajosa",
    "Year": "2007-2008",
    "Num": 0
  },
  {
    "PlayerId": "gutiejo01",
    "PlayerName": "Jorge Gutierrez",
    "Year": "2014-2016",
    "Num": 0
  },
  {
    "PlayerId": "caldejo01",
    "PlayerName": "Jose Calderon",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "ortizjo01",
    "PlayerName": "Jose Ortiz",
    "Year": "1989-1990",
    "Num": 0
  },
  {
    "PlayerId": "slaugjo01",
    "PlayerName": "Jose Slaughter",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "fortejo01",
    "PlayerName": "Joseph Forte",
    "Year": "2002-2003",
    "Num": 0
  },
  {
    "PlayerId": "akognjo01",
    "PlayerName": "Josh Akognon",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "boonejo01",
    "PlayerName": "Josh Boone",
    "Year": "2007-2010",
    "Num": 0
  },
  {
    "PlayerId": "childjo01",
    "PlayerName": "Josh Childress",
    "Year": "2005-2014",
    "Num": 1
  },
  {
    "PlayerId": "davisjo03",
    "PlayerName": "Josh Davis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "davisjo02",
    "PlayerName": "Josh Davis",
    "Year": "2004-2012",
    "Num": 0
  },
  {
    "PlayerId": "grantjo01",
    "PlayerName": "Josh Grant",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "harrejo01",
    "PlayerName": "Josh Harrellson",
    "Year": "2012-2014",
    "Num": 0
  },
  {
    "PlayerId": "hartjo01",
    "PlayerName": "Josh Hart",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "heytvjo01",
    "PlayerName": "Josh Heytvelt",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "howarjo01",
    "PlayerName": "Josh Howard",
    "Year": "2004-2013",
    "Num": 0
  },
  {
    "PlayerId": "huestjo01",
    "PlayerName": "Josh Huestis",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "jacksjo02",
    "PlayerName": "Josh Jackson",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "magetjo01",
    "PlayerName": "Josh Magette",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "mcrobjo01",
    "PlayerName": "Josh McRoberts",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "poweljo01",
    "PlayerName": "Josh Powell",
    "Year": "2006-2014",
    "Num": 0
  },
  {
    "PlayerId": "richajo01",
    "PlayerName": "Josh Richardson",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "selbyjo01",
    "PlayerName": "Josh Selby",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "smithjo03",
    "PlayerName": "Josh Smith",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "smithjo04",
    "PlayerName": "Joshua Smith",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "holidjr01",
    "PlayerName": "Jrue Holiday",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "navarju01",
    "PlayerName": "Juan Carlos Navarro",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "dixonju01",
    "PlayerName": "Juan Dixon",
    "Year": "2003-2009",
    "Num": 0
  },
  {
    "PlayerId": "hernaju01",
    "PlayerName": "Juan Hernangomez",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "vauleju01",
    "PlayerName": "Juan Pablo Vaulet",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hawkiju01",
    "PlayerName": "Juaquin Hawkins",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "buechju01",
    "PlayerName": "Jud Buechler",
    "Year": "1991-2002",
    "Num": 0
  },
  {
    "PlayerId": "hammoju01",
    "PlayerName": "Julian Hammond",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "jacobju01",
    "PlayerName": "Julian Jacobs",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "washbju01",
    "PlayerName": "Julian Washburn",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wrighju01",
    "PlayerName": "Julian Wright",
    "Year": "2008-2011",
    "Num": 0
  },
  {
    "PlayerId": "ervinju01",
    "PlayerName": "Julius Erving",
    "Year": "1972-1987",
    "Num": 0
  },
  {
    "PlayerId": "hodgeju01",
    "PlayerName": "Julius Hodge",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "keyeju01",
    "PlayerName": "Julius Keye",
    "Year": "1970-1975",
    "Num": 0
  },
  {
    "PlayerId": "nwosuju01",
    "PlayerName": "Julius Nwosu",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "randlju01",
    "PlayerName": "Julius Randle",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "stoneju01",
    "PlayerName": "Julyan Stone",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "jonesju01",
    "PlayerName": "Jumaine Jones",
    "Year": "2000-2007",
    "Num": 0
  },
  {
    "PlayerId": "bridgju01",
    "PlayerName": "Junior Bridgeman",
    "Year": "1976-1987",
    "Num": 0
  },
  {
    "PlayerId": "burroju01",
    "PlayerName": "Junior Burrough",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "cadouju01",
    "PlayerName": "Junior Cadougan",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "harriju01",
    "PlayerName": "Junior Harrington",
    "Year": "2003-2007",
    "Num": 0
  },
  {
    "PlayerId": "anderju01",
    "PlayerName": "Justin Anderson",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "dentmju01",
    "PlayerName": "Justin Dentmon",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "hamilju01",
    "PlayerName": "Justin Hamilton",
    "Year": "2014-2017",
    "Num": 1
  },
  {
    "PlayerId": "hamilju02",
    "PlayerName": "Justin Hamilton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "harpeju01",
    "PlayerName": "Justin Harper",
    "Year": "2012-2017",
    "Num": 1
  },
  {
    "PlayerId": "holidju01",
    "PlayerName": "Justin Holiday",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "jacksju01",
    "PlayerName": "Justin Jackson",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "johnsju01",
    "PlayerName": "Justin Johnson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "pattoju01",
    "PlayerName": "Justin Patton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "reedju01",
    "PlayerName": "Justin Reed",
    "Year": "2005-2007",
    "Num": 0
  },
  {
    "PlayerId": "williju01",
    "PlayerName": "Justin Williams",
    "Year": "2007-2008",
    "Num": 0
  },
  {
    "PlayerId": "winslju01",
    "PlayerName": "Justise Winslow",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "thigpju01",
    "PlayerName": "Justus Thigpen",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "nurkiju01",
    "PlayerName": "Jusuf Nurkic",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "howarju01",
    "PlayerName": "Juwan Howard",
    "Year": "1995-2013",
    "Num": 0
  },
  {
    "PlayerId": "stateju01",
    "PlayerName": "Juwan Staten",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "joneskc01",
    "PlayerName": "K.C. Jones",
    "Year": "1959-1967",
    "Num": 0
  },
  {
    "PlayerId": "mcdankj01",
    "PlayerName": "K.J. McDaniels",
    "Year": "2015-2017",
    "Num": 1
  },
  {
    "PlayerId": "allenka01",
    "PlayerName": "Kadeem Allen",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "jackka01",
    "PlayerName": "Kadeem Jack",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "tarczka01",
    "PlayerName": "Kaleb Tarczewski",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lucaska01",
    "PlayerName": "Kalin Lucas",
    "Year": 2015,
    "Num": 1
  },
  {
    "PlayerId": "murphka01",
    "PlayerName": "Kamari Murphy",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "dickeka01",
    "PlayerName": "Kaniel Dickens",
    "Year": "2004-2008",
    "Num": 0
  },
  {
    "PlayerId": "johnska01",
    "PlayerName": "Kannard Johnson",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "abdulka01",
    "PlayerName": "Kareem Abdul-Jabbar",
    "Year": "1970-1989",
    "Num": 0
  },
  {
    "PlayerId": "rushka01",
    "PlayerName": "Kareem Rush",
    "Year": "2003-2010",
    "Num": 0
  },
  {
    "PlayerId": "malonka01",
    "PlayerName": "Karl Malone",
    "Year": "1986-2004",
    "Num": 0
  },
  {
    "PlayerId": "townska01",
    "PlayerName": "Karl-Anthony Towns",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "powelka01",
    "PlayerName": "Kasib Powell",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "leonaka01",
    "PlayerName": "Kawhi Leonard",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "feldeka01",
    "PlayerName": "Kay Felder",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "stewake01",
    "PlayerName": "Kebu Stewart",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "brownke01",
    "PlayerName": "Kedrick Brown",
    "Year": "2002-2005",
    "Num": 0
  },
  {
    "PlayerId": "sykeske01",
    "PlayerName": "Keifer Sykes",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "applike01",
    "PlayerName": "Keith Appling",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "askinke01",
    "PlayerName": "Keith Askins",
    "Year": "1991-1999",
    "Num": 0
  },
  {
    "PlayerId": "bensoke02",
    "PlayerName": "Keith Benson",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "boganke01",
    "PlayerName": "Keith Bogans",
    "Year": "2004-2014",
    "Num": 0
  },
  {
    "PlayerId": "boothke01",
    "PlayerName": "Keith Booth",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "clantke01",
    "PlayerName": "Keith Clanton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "closske01",
    "PlayerName": "Keith Closs",
    "Year": "1998-2000",
    "Num": 0
  },
  {
    "PlayerId": "edmonke01",
    "PlayerName": "Keith Edmonson",
    "Year": "1983-1984",
    "Num": 0
  },
  {
    "PlayerId": "erickke01",
    "PlayerName": "Keith Erickson",
    "Year": "1966-1977",
    "Num": 0
  },
  {
    "PlayerId": "herroke01",
    "PlayerName": "Keith Herron",
    "Year": "1979-1982",
    "Num": 0
  },
  {
    "PlayerId": "hornske01",
    "PlayerName": "Keith Hornsby",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jennike01",
    "PlayerName": "Keith Jennings",
    "Year": "1993-1995",
    "Num": 0
  },
  {
    "PlayerId": "langfke01",
    "PlayerName": "Keith Langford",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "leeke01",
    "PlayerName": "Keith Lee",
    "Year": "1986-1989",
    "Num": 0
  },
  {
    "PlayerId": "mccorke01",
    "PlayerName": "Keith McCord",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "mcleoke01",
    "PlayerName": "Keith McLeod",
    "Year": "2004-2007",
    "Num": 0
  },
  {
    "PlayerId": "owenske01",
    "PlayerName": "Keith Owens",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "smartke01",
    "PlayerName": "Keith Smart",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "smithke03",
    "PlayerName": "Keith Smith",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "starrke01",
    "PlayerName": "Keith Starr",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "swageke01",
    "PlayerName": "Keith Swagerty",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "towerke01",
    "PlayerName": "Keith Tower",
    "Year": "1994-1997",
    "Num": 0
  },
  {
    "PlayerId": "vanhoke01",
    "PlayerName": "Keith Van Horn",
    "Year": "1998-2006",
    "Num": 0
  },
  {
    "PlayerId": "azubuke01",
    "PlayerName": "Kelenna Azubuike",
    "Year": "2007-2012",
    "Num": 0
  },
  {
    "PlayerId": "dunhake01",
    "PlayerName": "Kellen Dunham",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mccarke01",
    "PlayerName": "Kelly McCarty",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "olynyke01",
    "PlayerName": "Kelly Olynyk",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "oubreke01",
    "PlayerName": "Kelly Oubre Jr.",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "tripuke01",
    "PlayerName": "Kelly Tripucka",
    "Year": "1982-1991",
    "Num": 0
  },
  {
    "PlayerId": "catoke01",
    "PlayerName": "Kelvin Cato",
    "Year": "1998-2007",
    "Num": 0
  },
  {
    "PlayerId": "ranseke01",
    "PlayerName": "Kelvin Ransey",
    "Year": "1981-1986",
    "Num": 0
  },
  {
    "PlayerId": "upshake01",
    "PlayerName": "Kelvin Upshaw",
    "Year": "1989-1991",
    "Num": 0
  },
  {
    "PlayerId": "walkeke02",
    "PlayerName": "Kemba Walker",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "austike01",
    "PlayerName": "Ken Austin",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "bannike01",
    "PlayerName": "Ken Bannister",
    "Year": "1985-1991",
    "Num": 0
  },
  {
    "PlayerId": "boydke01",
    "PlayerName": "Ken Boyd",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "charlke01",
    "PlayerName": "Ken Charles",
    "Year": "1974-1978",
    "Num": 0
  },
  {
    "PlayerId": "corleke01",
    "PlayerName": "Ken Corley",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "durreke01",
    "PlayerName": "Ken Durrett",
    "Year": "1972-1975",
    "Num": 0
  },
  {
    "PlayerId": "greenke01",
    "PlayerName": "Ken Green",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "johnske01",
    "PlayerName": "Ken Johnson",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "johnske03",
    "PlayerName": "Ken Johnson",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "kelleke01",
    "PlayerName": "Ken Keller",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "mayfike01",
    "PlayerName": "Ken Mayfield",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "mcbrike01",
    "PlayerName": "Ken McBride",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "menkeke01",
    "PlayerName": "Ken Menke",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "murrake01",
    "PlayerName": "Ken Murray",
    "Year": "1951-1955",
    "Num": 0
  },
  {
    "PlayerId": "normake01",
    "PlayerName": "Ken Norman",
    "Year": "1988-1997",
    "Num": 0
  },
  {
    "PlayerId": "rohloke01",
    "PlayerName": "Ken Rohloff",
    "Year": 1964,
    "Num": 0
  },
  {
    "PlayerId": "smithke02",
    "PlayerName": "Ken Smith",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "spainke01",
    "PlayerName": "Ken Spain",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "wilbuke01",
    "PlayerName": "Ken Wilburn",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "gillke01",
    "PlayerName": "Kendall Gill",
    "Year": "1991-2005",
    "Num": 0
  },
  {
    "PlayerId": "marshke01",
    "PlayerName": "Kendall Marshall",
    "Year": "2013-2016",
    "Num": 1
  },
  {
    "PlayerId": "pollake01",
    "PlayerName": "Kendall Pollard",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "rhineke01",
    "PlayerName": "Kendall Rhine",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "perkike01",
    "PlayerName": "Kendrick Perkins",
    "Year": "2004-2016",
    "Num": 1
  },
  {
    "PlayerId": "winchke01",
    "PlayerName": "Kennard Winchester",
    "Year": "1991-1993",
    "Num": 0
  },
  {
    "PlayerId": "meekske01",
    "PlayerName": "Kennedy Meeks",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "farieke01",
    "PlayerName": "Kenneth Faried",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "gardnke01",
    "PlayerName": "Kenneth Gardner",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "anderke01",
    "PlayerName": "Kenny Anderson",
    "Year": "1992-2005",
    "Num": 0
  },
  {
    "PlayerId": "battlke01",
    "PlayerName": "Kenny Battle",
    "Year": "1990-1993",
    "Num": 0
  },
  {
    "PlayerId": "carrke01",
    "PlayerName": "Kenny Carr",
    "Year": "1978-1987",
    "Num": 0
  },
  {
    "PlayerId": "dennake01",
    "PlayerName": "Kenny Dennard",
    "Year": "1982-1984",
    "Num": 0
  },
  {
    "PlayerId": "fieldke01",
    "PlayerName": "Kenny Fields",
    "Year": "1985-1988",
    "Num": 0
  },
  {
    "PlayerId": "gattike01",
    "PlayerName": "Kenny Gattison",
    "Year": "1987-1996",
    "Num": 0
  },
  {
    "PlayerId": "greenke02",
    "PlayerName": "Kenny Green",
    "Year": "1986-1987",
    "Num": 0
  },
  {
    "PlayerId": "higgske01",
    "PlayerName": "Kenny Higgs",
    "Year": "1979-1982",
    "Num": 0
  },
  {
    "PlayerId": "kadjike01",
    "PlayerName": "Kenny Kadji",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mcintke01",
    "PlayerName": "Kenny McIntosh",
    "Year": "1972-1975",
    "Num": 0
  },
  {
    "PlayerId": "nattke01",
    "PlayerName": "Kenny Natt",
    "Year": "1981-1985",
    "Num": 0
  },
  {
    "PlayerId": "payneke01",
    "PlayerName": "Kenny Payne",
    "Year": "1990-1993",
    "Num": 0
  },
  {
    "PlayerId": "rollike01",
    "PlayerName": "Kenny Rollins",
    "Year": "1949-1953",
    "Num": 0
  },
  {
    "PlayerId": "sailoke01",
    "PlayerName": "Kenny Sailors",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "satteke01",
    "PlayerName": "Kenny Satterfield",
    "Year": "2002-2003",
    "Num": 0
  },
  {
    "PlayerId": "searske01",
    "PlayerName": "Kenny Sears",
    "Year": "1956-1964",
    "Num": 0
  },
  {
    "PlayerId": "smithke01",
    "PlayerName": "Kenny Smith",
    "Year": "1988-1997",
    "Num": 0
  },
  {
    "PlayerId": "thomake01",
    "PlayerName": "Kenny Thomas",
    "Year": "2000-2010",
    "Num": 0
  },
  {
    "PlayerId": "walkeke01",
    "PlayerName": "Kenny Walker",
    "Year": "1987-1995",
    "Num": 0
  },
  {
    "PlayerId": "willike03",
    "PlayerName": "Kenny Williams",
    "Year": "1991-1994",
    "Num": 0
  },
  {
    "PlayerId": "bazemke01",
    "PlayerName": "Kent Bazemore",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "bensoke01",
    "PlayerName": "Kent Benson",
    "Year": "1978-1988",
    "Num": 0
  },
  {
    "PlayerId": "caldwke01",
    "PlayerName": "Kentavious Caldwell-Pope",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "edelike01",
    "PlayerName": "Kenton Edelin",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "martike01",
    "PlayerName": "Kenyon Martin",
    "Year": "2001-2015",
    "Num": 0
  },
  {
    "PlayerId": "clarkke01",
    "PlayerName": "Keon Clark",
    "Year": "1999-2004",
    "Num": 0
  },
  {
    "PlayerId": "washike01",
    "PlayerName": "Kermit Washington",
    "Year": "1974-1988",
    "Num": 0
  },
  {
    "PlayerId": "kittlke01",
    "PlayerName": "Kerry Kittles",
    "Year": "1997-2005",
    "Num": 0
  },
  {
    "PlayerId": "brookke01",
    "PlayerName": "Kevin Brooks",
    "Year": "1992-1994",
    "Num": 0
  },
  {
    "PlayerId": "burleke01",
    "PlayerName": "Kevin Burleson",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "duckwke01",
    "PlayerName": "Kevin Duckworth",
    "Year": "1987-1997",
    "Num": 0
  },
  {
    "PlayerId": "duranke01",
    "PlayerName": "Kevin Durant",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "edwarke01",
    "PlayerName": "Kevin Edwards",
    "Year": "1989-2001",
    "Num": 0
  },
  {
    "PlayerId": "gamblke01",
    "PlayerName": "Kevin Gamble",
    "Year": "1988-1997",
    "Num": 0
  },
  {
    "PlayerId": "garneke01",
    "PlayerName": "Kevin Garnett",
    "Year": "1996-2016",
    "Num": 0
  },
  {
    "PlayerId": "greveke01",
    "PlayerName": "Kevin Grevey",
    "Year": "1976-1985",
    "Num": 0
  },
  {
    "PlayerId": "hendeke01",
    "PlayerName": "Kevin Henderson",
    "Year": "1987-1988",
    "Num": 0
  },
  {
    "PlayerId": "johnske02",
    "PlayerName": "Kevin Johnson",
    "Year": "1988-2000",
    "Num": 0
  },
  {
    "PlayerId": "joneske01",
    "PlayerName": "Kevin Jones",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "joyceke01",
    "PlayerName": "Kevin Joyce",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "kunneke01",
    "PlayerName": "Kevin Kunnert",
    "Year": "1974-1982",
    "Num": 0
  },
  {
    "PlayerId": "loderke01",
    "PlayerName": "Kevin Loder",
    "Year": "1982-1984",
    "Num": 0
  },
  {
    "PlayerId": "loughke01",
    "PlayerName": "Kevin Loughery",
    "Year": "1963-1973",
    "Num": 0
  },
  {
    "PlayerId": "loveke01",
    "PlayerName": "Kevin Love",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "lynchke01",
    "PlayerName": "Kevin Lynch",
    "Year": "1992-1993",
    "Num": 0
  },
  {
    "PlayerId": "martike02",
    "PlayerName": "Kevin Martin",
    "Year": "2005-2016",
    "Num": 0
  },
  {
    "PlayerId": "mchalke01",
    "PlayerName": "Kevin McHale",
    "Year": "1981-1993",
    "Num": 0
  },
  {
    "PlayerId": "mckenke01",
    "PlayerName": "Kevin McKenna",
    "Year": "1982-1988",
    "Num": 0
  },
  {
    "PlayerId": "murphke01",
    "PlayerName": "Kevin Murphy",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "osheake01",
    "PlayerName": "Kevin O'Shea",
    "Year": "1951-1953",
    "Num": 0
  },
  {
    "PlayerId": "ollieke01",
    "PlayerName": "Kevin Ollie",
    "Year": "1998-2010",
    "Num": 0
  },
  {
    "PlayerId": "porteke01",
    "PlayerName": "Kevin Porter",
    "Year": "1973-1983",
    "Num": 0
  },
  {
    "PlayerId": "pritcke01",
    "PlayerName": "Kevin Pritchard",
    "Year": "1991-1996",
    "Num": 0
  },
  {
    "PlayerId": "restake01",
    "PlayerName": "Kevin Restani",
    "Year": "1975-1982",
    "Num": 0
  },
  {
    "PlayerId": "salvake01",
    "PlayerName": "Kevin Salvadori",
    "Year": "1997-1998",
    "Num": 0
  },
  {
    "PlayerId": "serapke01",
    "PlayerName": "Kevin Seraphin",
    "Year": "2011-2017",
    "Num": 1
  },
  {
    "PlayerId": "stacoke01",
    "PlayerName": "Kevin Stacom",
    "Year": "1975-1982",
    "Num": 0
  },
  {
    "PlayerId": "thompke01",
    "PlayerName": "Kevin Thompson",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "willike01",
    "PlayerName": "Kevin Williams",
    "Year": "1984-1989",
    "Num": 0
  },
  {
    "PlayerId": "willike02",
    "PlayerName": "Kevin Willis",
    "Year": "1985-2007",
    "Num": 0
  },
  {
    "PlayerId": "pinknke01",
    "PlayerName": "Kevinn Pinkney",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "looneke01",
    "PlayerName": "Kevon Looney",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "clarkke03",
    "PlayerName": "Keydren Clark",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "doolike01",
    "PlayerName": "Keyon Dooling",
    "Year": "2001-2013",
    "Num": 0
  },
  {
    "PlayerId": "elamikh01",
    "PlayerName": "Khalid El-Amin",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "reevekh01",
    "PlayerName": "Khalid Reeves",
    "Year": "1995-2000",
    "Num": 0
  },
  {
    "PlayerId": "wyattkh01",
    "PlayerName": "Khalif Wyatt",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "birchkh01",
    "PlayerName": "Khem Birch",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "middlkh01",
    "PlayerName": "Khris Middleton",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "vandeki01",
    "PlayerName": "Kiki Vandeweghe",
    "Year": "1981-1993",
    "Num": 0
  },
  {
    "PlayerId": "anderki01",
    "PlayerName": "Kim Anderson",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "engliki01",
    "PlayerName": "Kim English",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "hugheki01",
    "PlayerName": "Kim Hughes",
    "Year": "1976-1981",
    "Num": 0
  },
  {
    "PlayerId": "hastoki01",
    "PlayerName": "Kirk Haston",
    "Year": "2002-2003",
    "Num": 0
  },
  {
    "PlayerId": "hinriki01",
    "PlayerName": "Kirk Hinrich",
    "Year": "2004-2016",
    "Num": 0
  },
  {
    "PlayerId": "penneki01",
    "PlayerName": "Kirk Penney",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "snydeki01",
    "PlayerName": "Kirk Snyder",
    "Year": "2005-2008",
    "Num": 0
  },
  {
    "PlayerId": "garriki01",
    "PlayerName": "Kiwane Garris",
    "Year": "1998-2000",
    "Num": 0
  },
  {
    "PlayerId": "thompkl01",
    "PlayerName": "Klay Thompson",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "hermskl01",
    "PlayerName": "Kleggie Hermsen",
    "Year": "1947-1953",
    "Num": 0
  },
  {
    "PlayerId": "pennkl01",
    "PlayerName": "Kleon Penn",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bryanko01",
    "PlayerName": "Kobe Bryant",
    "Year": "1997-2016",
    "Num": 0
  },
  {
    "PlayerId": "simmoko01",
    "PlayerName": "Kobi Simmons",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "lucioko01",
    "PlayerName": "Korie Lucious",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "youngko01",
    "PlayerName": "Korleone Young",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "davidko01",
    "PlayerName": "Kornel David",
    "Year": "1999-2001",
    "Num": 0
  },
  {
    "PlayerId": "koufoko01",
    "PlayerName": "Kosta Koufos",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "perovko01",
    "PlayerName": "Kosta Perovic",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "papanko01",
    "PlayerName": "Kostas Papanikolaou",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "dunnkr01",
    "PlayerName": "Kris Dunn",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "humphkr01",
    "PlayerName": "Kris Humphries",
    "Year": "2005-2017",
    "Num": 1
  },
  {
    "PlayerId": "josepkr01",
    "PlayerName": "Kris Joseph",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "porzikr01",
    "PlayerName": "Kristaps Porzingis",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "leeku01",
    "PlayerName": "Kurk Lee",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "nimphku01",
    "PlayerName": "Kurt Nimphius",
    "Year": "1982-1990",
    "Num": 0
  },
  {
    "PlayerId": "rambiku01",
    "PlayerName": "Kurt Rambis",
    "Year": "1982-1995",
    "Num": 0
  },
  {
    "PlayerId": "thomaku01",
    "PlayerName": "Kurt Thomas",
    "Year": "1996-2013",
    "Num": 0
  },
  {
    "PlayerId": "brownkw01",
    "PlayerName": "Kwame Brown",
    "Year": "2002-2013",
    "Num": 0
  },
  {
    "PlayerId": "vaughkw01",
    "PlayerName": "Kwame Vaughn",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "anderky01",
    "PlayerName": "Kyle Anderson",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "baronky01",
    "PlayerName": "Kyle Barone",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "caseyky01",
    "PlayerName": "Kyle Casey",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "colliky01",
    "PlayerName": "Kyle Collinsworth",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "gibsoky01",
    "PlayerName": "Kyle Gibson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "korveky01",
    "PlayerName": "Kyle Korver",
    "Year": "2004-2018",
    "Num": 1
  },
  {
    "PlayerId": "kuricky01",
    "PlayerName": "Kyle Kuric",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "kuzmaky01",
    "PlayerName": "Kyle Kuzma",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "lowryky01",
    "PlayerName": "Kyle Lowry",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "macyky01",
    "PlayerName": "Kyle Macy",
    "Year": "1981-1987",
    "Num": 0
  },
  {
    "PlayerId": "oquinky01",
    "PlayerName": "Kyle O'Quinn",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "randaky01",
    "PlayerName": "Kyle Randall",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "singlky01",
    "PlayerName": "Kyle Singler",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "weaveky01",
    "PlayerName": "Kyle Weaver",
    "Year": "2009-2011",
    "Num": 0
  },
  {
    "PlayerId": "wiltjky01",
    "PlayerName": "Kyle Wiltjer",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "irvinky01",
    "PlayerName": "Kyrie Irving",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "fesenky01",
    "PlayerName": "Kyrylo Fesenko",
    "Year": "2008-2012",
    "Num": 0
  },
  {
    "PlayerId": "peaklj01",
    "PlayerName": "L.J. Peak",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "smithla02",
    "PlayerName": "LaBradford Smith",
    "Year": "1992-1994",
    "Num": 0
  },
  {
    "PlayerId": "hentola01",
    "PlayerName": "LaDontae Henton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "greenla01",
    "PlayerName": "Lamar Green",
    "Year": "1970-1975",
    "Num": 0
  },
  {
    "PlayerId": "odomla01",
    "PlayerName": "Lamar Odom",
    "Year": "2000-2013",
    "Num": 0
  },
  {
    "PlayerId": "pattela01",
    "PlayerName": "Lamar Patterson",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "aldrila01",
    "PlayerName": "LaMarcus Aldridge",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "bakerla01",
    "PlayerName": "LaMark Baker",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "murrala01",
    "PlayerName": "Lamond Murray",
    "Year": "1995-2006",
    "Num": 0
  },
  {
    "PlayerId": "mackla01",
    "PlayerName": "Lamont Mack",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "strotla01",
    "PlayerName": "Lamont Strothers",
    "Year": "1992-1993",
    "Num": 0
  },
  {
    "PlayerId": "copella01",
    "PlayerName": "Lanard Copeland",
    "Year": "1990-1992",
    "Num": 0
  },
  {
    "PlayerId": "gordola01",
    "PlayerName": "Lancaster Gordon",
    "Year": "1985-1988",
    "Num": 0
  },
  {
    "PlayerId": "allrela01",
    "PlayerName": "Lance Allred",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "blankla01",
    "PlayerName": "Lance Blanks",
    "Year": "1991-1993",
    "Num": 0
  },
  {
    "PlayerId": "goulbla01",
    "PlayerName": "Lance Goulbourne",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "stephla01",
    "PlayerName": "Lance Stephenson",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "thomala01",
    "PlayerName": "Lance Thomas",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "fieldla01",
    "PlayerName": "Landry Fields",
    "Year": "2011-2015",
    "Num": 0
  },
  {
    "PlayerId": "nnokola01",
    "PlayerName": "Landry Nnoko",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gallola01",
    "PlayerName": "Langston Galloway",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "ellisla01",
    "PlayerName": "LaPhonso Ellis",
    "Year": "1993-2003",
    "Num": 0
  },
  {
    "PlayerId": "ketnela01",
    "PlayerName": "Lari Ketner",
    "Year": "2000-2001",
    "Num": 0
  },
  {
    "PlayerId": "profila01",
    "PlayerName": "Laron Profit",
    "Year": "2000-2006",
    "Num": 0
  },
  {
    "PlayerId": "berghla01",
    "PlayerName": "Larry Bergh",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "birdla01",
    "PlayerName": "Larry Bird",
    "Year": "1980-1992",
    "Num": 0
  },
  {
    "PlayerId": "brownla01",
    "PlayerName": "Larry Brown",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "buncela01",
    "PlayerName": "Larry Bunce",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "cannola01",
    "PlayerName": "Larry Cannon",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "comlela01",
    "PlayerName": "Larry Comley",
    "Year": 1964,
    "Num": 0
  },
  {
    "PlayerId": "conlela01",
    "PlayerName": "Larry Conley",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "costela01",
    "PlayerName": "Larry Costello",
    "Year": "1955-1968",
    "Num": 0
  },
  {
    "PlayerId": "demicla01",
    "PlayerName": "Larry Demic",
    "Year": "1980-1982",
    "Num": 0
  },
  {
    "PlayerId": "drewla01",
    "PlayerName": "Larry Drew",
    "Year": "1981-1991",
    "Num": 0
  },
  {
    "PlayerId": "drewla02",
    "PlayerName": "Larry Drew II",
    "Year": 2015,
    "Num": 1
  },
  {
    "PlayerId": "finchla01",
    "PlayerName": "Larry Finch",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "foglela01",
    "PlayerName": "Larry Fogle",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "foustla01",
    "PlayerName": "Larry Foust",
    "Year": "1951-1962",
    "Num": 0
  },
  {
    "PlayerId": "frienla01",
    "PlayerName": "Larry Friend",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "hennela01",
    "PlayerName": "Larry Hennessy",
    "Year": "1956-1957",
    "Num": 0
  },
  {
    "PlayerId": "hughela01",
    "PlayerName": "Larry Hughes",
    "Year": "1999-2012",
    "Num": 0
  },
  {
    "PlayerId": "johnsla02",
    "PlayerName": "Larry Johnson",
    "Year": "1992-2001",
    "Num": 0
  },
  {
    "PlayerId": "johnsla01",
    "PlayerName": "Larry Johnson",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "jonesla01",
    "PlayerName": "Larry Jones",
    "Year": "1965-1974",
    "Num": 0
  },
  {
    "PlayerId": "kenonla01",
    "PlayerName": "Larry Kenon",
    "Year": "1974-1983",
    "Num": 0
  },
  {
    "PlayerId": "krystla01",
    "PlayerName": "Larry Krystkowiak",
    "Year": "1987-1997",
    "Num": 0
  },
  {
    "PlayerId": "mcneila01",
    "PlayerName": "Larry McNeill",
    "Year": "1974-1979",
    "Num": 0
  },
  {
    "PlayerId": "michela01",
    "PlayerName": "Larry Micheaux",
    "Year": "1984-1985",
    "Num": 0
  },
  {
    "PlayerId": "mikanla01",
    "PlayerName": "Larry Mikan",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "millela01",
    "PlayerName": "Larry Miller",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "moffela01",
    "PlayerName": "Larry Moffett",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "moorela01",
    "PlayerName": "Larry Moore",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "nancela01",
    "PlayerName": "Larry Nance",
    "Year": "1982-1994",
    "Num": 0
  },
  {
    "PlayerId": "nancela02",
    "PlayerName": "Larry Nance Jr.",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "owensla01",
    "PlayerName": "Larry Owens",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "robinla01",
    "PlayerName": "Larry Robinson",
    "Year": "1991-2002",
    "Num": 0
  },
  {
    "PlayerId": "sandela01",
    "PlayerName": "Larry Sanders",
    "Year": "2011-2017",
    "Num": 1
  },
  {
    "PlayerId": "siegfla01",
    "PlayerName": "Larry Siegfried",
    "Year": "1964-1972",
    "Num": 0
  },
  {
    "PlayerId": "smithla01",
    "PlayerName": "Larry Smith",
    "Year": "1981-1993",
    "Num": 0
  },
  {
    "PlayerId": "sprigla01",
    "PlayerName": "Larry Spriggs",
    "Year": "1982-1986",
    "Num": 0
  },
  {
    "PlayerId": "stavela01",
    "PlayerName": "Larry Staverman",
    "Year": "1959-1964",
    "Num": 0
  },
  {
    "PlayerId": "steella01",
    "PlayerName": "Larry Steele",
    "Year": "1972-1980",
    "Num": 0
  },
  {
    "PlayerId": "stewala01",
    "PlayerName": "Larry Stewart",
    "Year": "1992-1997",
    "Num": 0
  },
  {
    "PlayerId": "sykesla01",
    "PlayerName": "Larry Sykes",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "wrighla01",
    "PlayerName": "Larry Wright",
    "Year": "1977-1982",
    "Num": 0
  },
  {
    "PlayerId": "hansela01",
    "PlayerName": "Lars Hansen",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "martila01",
    "PlayerName": "LaRue Martin",
    "Year": "1973-1976",
    "Num": 0
  },
  {
    "PlayerId": "thompla01",
    "PlayerName": "LaSalle Thompson",
    "Year": "1983-1997",
    "Num": 0
  },
  {
    "PlayerId": "willila01",
    "PlayerName": "Latavious Williams",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "sprewla01",
    "PlayerName": "Latrell Sprewell",
    "Year": "1993-2005",
    "Num": 0
  },
  {
    "PlayerId": "bowerla01",
    "PlayerName": "Laurence Bowers",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "markkla01",
    "PlayerName": "Lauri Markkanen",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "postela01",
    "PlayerName": "Lavor Postell",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "allenla01",
    "PlayerName": "Lavoy Allen",
    "Year": "2012-2017",
    "Num": 1
  },
  {
    "PlayerId": "bostola01",
    "PlayerName": "Lawrence Boston",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "fundela01",
    "PlayerName": "Lawrence Funderburke",
    "Year": "1998-2005",
    "Num": 0
  },
  {
    "PlayerId": "motenla01",
    "PlayerName": "Lawrence Moten",
    "Year": "1996-1998",
    "Num": 0
  },
  {
    "PlayerId": "roberla01",
    "PlayerName": "Lawrence Roberts",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "haywala01",
    "PlayerName": "Lazar Hayward",
    "Year": "2011-2013",
    "Num": 0
  },
  {
    "PlayerId": "borrela01",
    "PlayerName": "Lazaro Borrell",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "jonesla02",
    "PlayerName": "Lazeric Jones",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "nashle01",
    "PlayerName": "Le'Bryan Nash",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "barbole01",
    "PlayerName": "Leandro Barbosa",
    "Year": "2004-2017",
    "Num": 1
  },
  {
    "PlayerId": "lentzle01",
    "PlayerName": "Leary Lentz",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "jamesle01",
    "PlayerName": "LeBron James",
    "Year": "2004-2018",
    "Num": 1
  },
  {
    "PlayerId": "eacklle01",
    "PlayerName": "Ledell Eackles",
    "Year": "1989-1998",
    "Num": 0
  },
  {
    "PlayerId": "davisle01",
    "PlayerName": "Lee Davis",
    "Year": "1969-1976",
    "Num": 0
  },
  {
    "PlayerId": "johnsle01",
    "PlayerName": "Lee Johnson",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "knorele01",
    "PlayerName": "Lee Knorek",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "maybele01",
    "PlayerName": "Lee Mayberry",
    "Year": "1993-1999",
    "Num": 0
  },
  {
    "PlayerId": "nailole01",
    "PlayerName": "Lee Nailon",
    "Year": "2001-2006",
    "Num": 0
  },
  {
    "PlayerId": "robbile01",
    "PlayerName": "Lee Robbins",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "shaffle01",
    "PlayerName": "Lee Shaffer",
    "Year": "1962-1964",
    "Num": 0
  },
  {
    "PlayerId": "winfile01",
    "PlayerName": "Lee Winfield",
    "Year": "1970-1976",
    "Num": 0
  },
  {
    "PlayerId": "mitchle01",
    "PlayerName": "Leland Mitchell",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "chapple01",
    "PlayerName": "Len Chappell",
    "Year": "1963-1972",
    "Num": 0
  },
  {
    "PlayerId": "elmorle01",
    "PlayerName": "Len Elmore",
    "Year": "1975-1984",
    "Num": 0
  },
  {
    "PlayerId": "kosmale01",
    "PlayerName": "Len Kosmalski",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "rosenle01",
    "PlayerName": "Lennie Rosenbluth",
    "Year": "1958-1959",
    "Num": 0
  },
  {
    "PlayerId": "wilkele01",
    "PlayerName": "Lenny Wilkens",
    "Year": "1961-1975",
    "Num": 0
  },
  {
    "PlayerId": "barnhle01",
    "PlayerName": "Leo Barnhorst",
    "Year": "1950-1954",
    "Num": 0
  },
  {
    "PlayerId": "gottlle01",
    "PlayerName": "Leo Gottlieb",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "katkale01",
    "PlayerName": "Leo Katkaveck",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "klierle01",
    "PlayerName": "Leo Klier",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "kubiale01",
    "PlayerName": "Leo Kubiak",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "mogusle01",
    "PlayerName": "Leo Mogus",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "rautile01",
    "PlayerName": "Leo Rautins",
    "Year": "1984-1985",
    "Num": 0
  },
  {
    "PlayerId": "benbole01",
    "PlayerName": "Leon Benbow",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "blevile01",
    "PlayerName": "Leon Blevins",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "brownle01",
    "PlayerName": "Leon Brown",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "douglle01",
    "PlayerName": "Leon Douglas",
    "Year": "1977-1983",
    "Num": 0
  },
  {
    "PlayerId": "powele01",
    "PlayerName": "Leon Powe",
    "Year": "2007-2011",
    "Num": 0
  },
  {
    "PlayerId": "smithle01",
    "PlayerName": "Leon Smith",
    "Year": "2002-2004",
    "Num": 0
  },
  {
    "PlayerId": "woodle01",
    "PlayerName": "Leon Wood",
    "Year": "1985-1991",
    "Num": 0
  },
  {
    "PlayerId": "grayle01",
    "PlayerName": "Leonard Gray",
    "Year": "1975-1977",
    "Num": 0
  },
  {
    "PlayerId": "taylole01",
    "PlayerName": "Leonard Taylor",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "ellisle02",
    "PlayerName": "LeRon Ellis",
    "Year": "1992-1996",
    "Num": 0
  },
  {
    "PlayerId": "chollle01",
    "PlayerName": "Leroy Chollet",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "combsle01",
    "PlayerName": "Leroy Combs",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "ellisle01",
    "PlayerName": "Leroy Ellis",
    "Year": "1963-1976",
    "Num": 0
  },
  {
    "PlayerId": "wrighle01",
    "PlayerName": "Leroy Wright",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "huntele01",
    "PlayerName": "Les Hunter",
    "Year": "1965-1973",
    "Num": 0
  },
  {
    "PlayerId": "jepsele01",
    "PlayerName": "Les Jepsen",
    "Year": "1991-1992",
    "Num": 0
  },
  {
    "PlayerId": "pughle01",
    "PlayerName": "Les Pugh",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "connele01",
    "PlayerName": "Lester Conner",
    "Year": "1983-1995",
    "Num": 0
  },
  {
    "PlayerId": "hudsole01",
    "PlayerName": "Lester Hudson",
    "Year": "2010-2015",
    "Num": 0
  },
  {
    "PlayerId": "selvale01",
    "PlayerName": "Lester Selvage",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "tartle01",
    "PlayerName": "Levern Tart",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "fontale01",
    "PlayerName": "Levi Fontaine",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "randole01",
    "PlayerName": "Levi Randolph",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hitchle01",
    "PlayerName": "Lew Hitch",
    "Year": "1952-1957",
    "Num": 0
  },
  {
    "PlayerId": "brownle02",
    "PlayerName": "Lewis Brown",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "lloydle01",
    "PlayerName": "Lewis Lloyd",
    "Year": "1982-1990",
    "Num": 0
  },
  {
    "PlayerId": "mcmorli01",
    "PlayerName": "Liam McMorrow",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "kleizli01",
    "PlayerName": "Linas Kleiza",
    "Year": "2006-2013",
    "Num": 0
  },
  {
    "PlayerId": "hairsli01",
    "PlayerName": "Lindsay Hairston",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "hunteli01",
    "PlayerName": "Lindsey Hunter",
    "Year": "1994-2010",
    "Num": 0
  },
  {
    "PlayerId": "johnsli01",
    "PlayerName": "Linton Johnson",
    "Year": "2004-2009",
    "Num": 0
  },
  {
    "PlayerId": "towneli01",
    "PlayerName": "Linton Townes",
    "Year": "1983-1985",
    "Num": 0
  },
  {
    "PlayerId": "billili01",
    "PlayerName": "Lionel Billingy",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "chalmli01",
    "PlayerName": "Lionel Chalmers",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "hollili01",
    "PlayerName": "Lionel Hollins",
    "Year": "1976-1985",
    "Num": 0
  },
  {
    "PlayerId": "malamli01",
    "PlayerName": "Lionel Malamed",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "simmoli01",
    "PlayerName": "Lionel Simmons",
    "Year": "1991-1997",
    "Num": 0
  },
  {
    "PlayerId": "eliyali01",
    "PlayerName": "Lior Eliyahu",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "greenli01",
    "PlayerName": "Litterial Green",
    "Year": "1993-1999",
    "Num": 0
  },
  {
    "PlayerId": "jeancli01",
    "PlayerName": "Livio Jean-Charles",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "battsll01",
    "PlayerName": "Lloyd Batts",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "daniell01",
    "PlayerName": "Lloyd Daniels",
    "Year": "1993-1998",
    "Num": 0
  },
  {
    "PlayerId": "nealll01",
    "PlayerName": "Lloyd Neal",
    "Year": "1973-1979",
    "Num": 0
  },
  {
    "PlayerId": "waltoll01",
    "PlayerName": "Lloyd Walton",
    "Year": "1977-1981",
    "Num": 0
  },
  {
    "PlayerId": "vandelo01",
    "PlayerName": "Logan Vander Velden",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "perralo01",
    "PlayerName": "London Perrantes",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "egglelo01",
    "PlayerName": "Lonnie Eggleston",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "kluttlo01",
    "PlayerName": "Lonnie Kluttz",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "lynnlo01",
    "PlayerName": "Lonnie Lynn",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "sheltlo01",
    "PlayerName": "Lonnie Shelton",
    "Year": "1977-1986",
    "Num": 0
  },
  {
    "PlayerId": "wrighlo01",
    "PlayerName": "Lonnie Wright",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "baxtelo01",
    "PlayerName": "Lonny Baxter",
    "Year": "2003-2006",
    "Num": 0
  },
  {
    "PlayerId": "balllo01",
    "PlayerName": "Lonzo Ball",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "meyerlo01",
    "PlayerName": "Loren Meyer",
    "Year": "1996-1999",
    "Num": 0
  },
  {
    "PlayerId": "woodslo01",
    "PlayerName": "Loren Woods",
    "Year": "2002-2008",
    "Num": 0
  },
  {
    "PlayerId": "wrighlo02",
    "PlayerName": "Lorenzen Wright",
    "Year": "1997-2009",
    "Num": 0
  },
  {
    "PlayerId": "brownlo01",
    "PlayerName": "Lorenzo Brown",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "charllo01",
    "PlayerName": "Lorenzo Charles",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "romarlo01",
    "PlayerName": "Lorenzo Romar",
    "Year": "1981-1985",
    "Num": 0
  },
  {
    "PlayerId": "willilo01",
    "PlayerName": "Lorenzo Williams",
    "Year": "1993-2000",
    "Num": 0
  },
  {
    "PlayerId": "jackslo01",
    "PlayerName": "Lorne Jackson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "amundlo01",
    "PlayerName": "Lou Amundson",
    "Year": "2007-2016",
    "Num": 0
  },
  {
    "PlayerId": "hudsolo01",
    "PlayerName": "Lou Hudson",
    "Year": "1967-1979",
    "Num": 0
  },
  {
    "PlayerId": "roelo01",
    "PlayerName": "Lou Roe",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "spicelo01",
    "PlayerName": "Lou Spicer",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "tsiorlo01",
    "PlayerName": "Lou Tsioropoulos",
    "Year": "1957-1959",
    "Num": 0
  },
  {
    "PlayerId": "willilo02",
    "PlayerName": "Lou Williams",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "dampilo01",
    "PlayerName": "Louie Dampier",
    "Year": "1968-1979",
    "Num": 0
  },
  {
    "PlayerId": "nelsolo01",
    "PlayerName": "Louie Nelson",
    "Year": "1974-1978",
    "Num": 0
  },
  {
    "PlayerId": "labeylo01",
    "PlayerName": "Louis Labeyrie",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "orrlo01",
    "PlayerName": "Louis Orr",
    "Year": "1981-1988",
    "Num": 0
  },
  {
    "PlayerId": "moorelo01",
    "PlayerName": "Lowes Moore",
    "Year": "1981-1983",
    "Num": 0
  },
  {
    "PlayerId": "peterlo01",
    "PlayerName": "Loy Petersen",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "vaughlo01",
    "PlayerName": "Loy Vaught",
    "Year": "1991-2001",
    "Num": 0
  },
  {
    "PlayerId": "kinglo01",
    "PlayerName": "Loyd King",
    "Year": "1972-1973",
    "Num": 0
  },
  {
    "PlayerId": "longllu01",
    "PlayerName": "Luc Longley",
    "Year": "1992-2001",
    "Num": 0
  },
  {
    "PlayerId": "mbahalu01",
    "PlayerName": "Luc Mbah a Moute",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "noguelu01",
    "PlayerName": "Lucas Nogueira",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "harrilu01",
    "PlayerName": "Lucious Harris",
    "Year": "1994-2005",
    "Num": 0
  },
  {
    "PlayerId": "allenlu01",
    "PlayerName": "Lucius Allen",
    "Year": "1970-1979",
    "Num": 0
  },
  {
    "PlayerId": "florelu01",
    "PlayerName": "Luis Flores",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "montelu01",
    "PlayerName": "Luis Montero",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "scolalu01",
    "PlayerName": "Luis Scola",
    "Year": "2008-2017",
    "Num": 1
  },
  {
    "PlayerId": "mitrolu01",
    "PlayerName": "Luka Mitrovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "babbilu01",
    "PlayerName": "Luke Babbitt",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "haranlu01",
    "PlayerName": "Luke Harangody",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "jackslu01",
    "PlayerName": "Luke Jackson",
    "Year": "1965-1972",
    "Num": 0
  },
  {
    "PlayerId": "jackslu02",
    "PlayerName": "Luke Jackson",
    "Year": "2005-2008",
    "Num": 0
  },
  {
    "PlayerId": "kennalu01",
    "PlayerName": "Luke Kennard",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "kornelu01",
    "PlayerName": "Luke Kornet",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "petralu01",
    "PlayerName": "Luke Petrasek",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ridnolu01",
    "PlayerName": "Luke Ridnour",
    "Year": "2004-2015",
    "Num": 0
  },
  {
    "PlayerId": "schenlu01",
    "PlayerName": "Luke Schenscher",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "sikmalu01",
    "PlayerName": "Luke Sikma",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "waltolu01",
    "PlayerName": "Luke Walton",
    "Year": "2004-2013",
    "Num": 0
  },
  {
    "PlayerId": "wittelu01",
    "PlayerName": "Luke Witte",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "zellelu01",
    "PlayerName": "Luke Zeller",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "denglu01",
    "PlayerName": "Luol Deng",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "greenlu01",
    "PlayerName": "Luther Green",
    "Year": "1970-1973",
    "Num": 0
  },
  {
    "PlayerId": "headlu01",
    "PlayerName": "Luther Head",
    "Year": "2006-2011",
    "Num": 0
  },
  {
    "PlayerId": "rackllu01",
    "PlayerName": "Luther Rackley",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "wrighlu01",
    "PlayerName": "Luther Wright",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "greerly01",
    "PlayerName": "Lynn Greer",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "shackly01",
    "PlayerName": "Lynn Shackelford",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "carrml01",
    "PlayerName": "M.L. Carr",
    "Year": "1976-1985",
    "Num": 0
  },
  {
    "PlayerId": "waynsma01",
    "PlayerName": "Maalik Wayns",
    "Year": "2013-2014",
    "Num": 1
  },
  {
    "PlayerId": "leunema01",
    "PlayerName": "Maarty Leunen",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "koshwma01",
    "PlayerName": "Mac Koshwal",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ottenma01",
    "PlayerName": "Mac Otten",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "bastoma01",
    "PlayerName": "Maceo Baston",
    "Year": "2003-2009",
    "Num": 0
  },
  {
    "PlayerId": "lampema01",
    "PlayerName": "Maciej Lampe",
    "Year": "2004-2006",
    "Num": 0
  },
  {
    "PlayerId": "calvima01",
    "PlayerName": "Mack Calvin",
    "Year": "1970-1981",
    "Num": 0
  },
  {
    "PlayerId": "daughma01",
    "PlayerName": "Mack Daughtry",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "johnsma02",
    "PlayerName": "Magic Johnson",
    "Year": "1980-1996",
    "Num": 0
  },
  {
    "PlayerId": "abdulma02",
    "PlayerName": "Mahmoud Abdul-Rauf",
    "Year": "1991-2001",
    "Num": 0
  },
  {
    "PlayerId": "jonesma01",
    "PlayerName": "Major Jones",
    "Year": "1980-1985",
    "Num": 0
  },
  {
    "PlayerId": "ndiayma01",
    "PlayerName": "Makhtar N'Diaye",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "grahama01",
    "PlayerName": "Mal Graham",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "mcmulma01",
    "PlayerName": "Mal McMullen",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "richama01",
    "PlayerName": "Malachi Richardson",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "brogdma01",
    "PlayerName": "Malcolm Brogdon",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "delanma01",
    "PlayerName": "Malcolm Delaney",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "leema01",
    "PlayerName": "Malcolm Lee",
    "Year": "2012-2015",
    "Num": 0
  },
  {
    "PlayerId": "mackema01",
    "PlayerName": "Malcolm Mackey",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "millema01",
    "PlayerName": "Malcolm Miller",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "thomama01",
    "PlayerName": "Malcolm Thomas",
    "Year": "2012-2015",
    "Num": 0
  },
  {
    "PlayerId": "allenma01",
    "PlayerName": "Malik Allen",
    "Year": "2002-2011",
    "Num": 0
  },
  {
    "PlayerId": "beaslma01",
    "PlayerName": "Malik Beasley",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "hairsma01",
    "PlayerName": "Malik Hairston",
    "Year": "2009-2010",
    "Num": 0
  },
  {
    "PlayerId": "monkma01",
    "PlayerName": "Malik Monk",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "rosema01",
    "PlayerName": "Malik Rose",
    "Year": "1997-2009",
    "Num": 0
  },
  {
    "PlayerId": "sealyma01",
    "PlayerName": "Malik Sealy",
    "Year": "1993-2000",
    "Num": 0
  },
  {
    "PlayerId": "ndiayma02",
    "PlayerName": "Mamadou N'Diaye",
    "Year": "2001-2005",
    "Num": 0
  },
  {
    "PlayerId": "ndiayma03",
    "PlayerName": "Mamadou Ndiaye",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mathima01",
    "PlayerName": "Mangok Mathiang",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "harrima01",
    "PlayerName": "Manny Harris",
    "Year": "2011-2017",
    "Num": 1
  },
  {
    "PlayerId": "leaksma01",
    "PlayerName": "Manny Leaks",
    "Year": "1969-1974",
    "Num": 0
  },
  {
    "PlayerId": "ginobma01",
    "PlayerName": "Manu Ginobili",
    "Year": "2003-2018",
    "Num": 1
  },
  {
    "PlayerId": "bolma01",
    "PlayerName": "Manute Bol",
    "Year": "1986-1995",
    "Num": 0
  },
  {
    "PlayerId": "gasolma01",
    "PlayerName": "Marc Gasol",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "iavarma01",
    "PlayerName": "Marc Iavaroni",
    "Year": "1983-1989",
    "Num": 0
  },
  {
    "PlayerId": "jacksma02",
    "PlayerName": "Marc Jackson",
    "Year": "2001-2007",
    "Num": 0
  },
  {
    "PlayerId": "lovinma01",
    "PlayerName": "Marc Loving",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "huertma01",
    "PlayerName": "Marcelo Huertas",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "gortama01",
    "PlayerName": "Marcin Gortat",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "belinma01",
    "PlayerName": "Marco Belinelli",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "banksma01",
    "PlayerName": "Marcus Banks",
    "Year": "2004-2011",
    "Num": 0
  },
  {
    "PlayerId": "brownma01",
    "PlayerName": "Marcus Brown",
    "Year": "1997-2000",
    "Num": 0
  },
  {
    "PlayerId": "cambyma01",
    "PlayerName": "Marcus Camby",
    "Year": "1997-2013",
    "Num": 0
  },
  {
    "PlayerId": "cousima01",
    "PlayerName": "Marcus Cousin",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "denmoma01",
    "PlayerName": "Marcus Denmon",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "eriksma01",
    "PlayerName": "Marcus Eriksson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fizerma01",
    "PlayerName": "Marcus Fizer",
    "Year": "2001-2006",
    "Num": 0
  },
  {
    "PlayerId": "georgma01",
    "PlayerName": "Marcus Georges-Hunt",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "haislma01",
    "PlayerName": "Marcus Haislip",
    "Year": "2003-2010",
    "Num": 0
  },
  {
    "PlayerId": "landrma01",
    "PlayerName": "Marcus Landry",
    "Year": 2010,
    "Num": 0
  },
  {
    "PlayerId": "liberma01",
    "PlayerName": "Marcus Liberty",
    "Year": "1991-1994",
    "Num": 0
  },
  {
    "PlayerId": "morrima03",
    "PlayerName": "Marcus Morris",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "paigema01",
    "PlayerName": "Marcus Paige",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "simmoma01",
    "PlayerName": "Marcus Simmons",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "smartma01",
    "PlayerName": "Marcus Smart",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "thornma02",
    "PlayerName": "Marcus Thornton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "thornma01",
    "PlayerName": "Marcus Thornton",
    "Year": "2010-2017",
    "Num": 1
  },
  {
    "PlayerId": "vincima01",
    "PlayerName": "Marcus Vinicius",
    "Year": "2007-2008",
    "Num": 0
  },
  {
    "PlayerId": "webbma01",
    "PlayerName": "Marcus Webb",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "willima03",
    "PlayerName": "Marcus Williams",
    "Year": "2007-2010",
    "Num": 0
  },
  {
    "PlayerId": "willima04",
    "PlayerName": "Marcus Williams",
    "Year": "2008-2009",
    "Num": 0
  },
  {
    "PlayerId": "collima01",
    "PlayerName": "Mardy Collins",
    "Year": "2007-2010",
    "Num": 0
  },
  {
    "PlayerId": "austima01",
    "PlayerName": "Mario Austin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bennema01",
    "PlayerName": "Mario Bennett",
    "Year": "1996-2000",
    "Num": 0
  },
  {
    "PlayerId": "chalmma01",
    "PlayerName": "Mario Chalmers",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "eliema01",
    "PlayerName": "Mario Elie",
    "Year": "1991-2001",
    "Num": 0
  },
  {
    "PlayerId": "hezonma01",
    "PlayerName": "Mario Hezonja",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "kasunma01",
    "PlayerName": "Mario Kasun",
    "Year": "2005-2006",
    "Num": 0
  },
  {
    "PlayerId": "westma02",
    "PlayerName": "Mario West",
    "Year": "2008-2011",
    "Num": 0
  },
  {
    "PlayerId": "acresma01",
    "PlayerName": "Mark Acres",
    "Year": "1988-1993",
    "Num": 0
  },
  {
    "PlayerId": "aguirma01",
    "PlayerName": "Mark Aguirre",
    "Year": "1982-1994",
    "Num": 0
  },
  {
    "PlayerId": "alarima01",
    "PlayerName": "Mark Alarie",
    "Year": "1987-1991",
    "Num": 0
  },
  {
    "PlayerId": "blounma01",
    "PlayerName": "Mark Blount",
    "Year": "2001-2009",
    "Num": 0
  },
  {
    "PlayerId": "bradtma01",
    "PlayerName": "Mark Bradtke",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "bryanma01",
    "PlayerName": "Mark Bryant",
    "Year": "1989-2003",
    "Num": 0
  },
  {
    "PlayerId": "crowma01",
    "PlayerName": "Mark Crow",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "davisma02",
    "PlayerName": "Mark Davis",
    "Year": "1996-2000",
    "Num": 0
  },
  {
    "PlayerId": "davisma01",
    "PlayerName": "Mark Davis",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "eatonma01",
    "PlayerName": "Mark Eaton",
    "Year": "1983-1993",
    "Num": 0
  },
  {
    "PlayerId": "hendrma01",
    "PlayerName": "Mark Hendrickson",
    "Year": "1997-2000",
    "Num": 0
  },
  {
    "PlayerId": "jacksma01",
    "PlayerName": "Mark Jackson",
    "Year": "1988-2004",
    "Num": 0
  },
  {
    "PlayerId": "jonesma03",
    "PlayerName": "Mark Jones",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "jonesma02",
    "PlayerName": "Mark Jones",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "landsma01",
    "PlayerName": "Mark Landsberger",
    "Year": "1978-1984",
    "Num": 0
  },
  {
    "PlayerId": "lyonsma01",
    "PlayerName": "Mark Lyons",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "maconma01",
    "PlayerName": "Mark Macon",
    "Year": "1992-1999",
    "Num": 0
  },
  {
    "PlayerId": "madsema01",
    "PlayerName": "Mark Madsen",
    "Year": "2001-2009",
    "Num": 0
  },
  {
    "PlayerId": "mcnamma01",
    "PlayerName": "Mark McNamara",
    "Year": "1983-1991",
    "Num": 0
  },
  {
    "PlayerId": "minorma01",
    "PlayerName": "Mark Minor",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "olberma01",
    "PlayerName": "Mark Olberding",
    "Year": "1976-1987",
    "Num": 0
  },
  {
    "PlayerId": "popema01",
    "PlayerName": "Mark Pope",
    "Year": "1998-2005",
    "Num": 0
  },
  {
    "PlayerId": "pricema01",
    "PlayerName": "Mark Price",
    "Year": "1987-1998",
    "Num": 0
  },
  {
    "PlayerId": "radfoma01",
    "PlayerName": "Mark Radford",
    "Year": "1982-1983",
    "Num": 0
  },
  {
    "PlayerId": "randama01",
    "PlayerName": "Mark Randall",
    "Year": "1992-1995",
    "Num": 0
  },
  {
    "PlayerId": "siblema01",
    "PlayerName": "Mark Sibley",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "stricma01",
    "PlayerName": "Mark Strickland",
    "Year": "1995-2003",
    "Num": 0
  },
  {
    "PlayerId": "wadema01",
    "PlayerName": "Mark Wade",
    "Year": "1988-1990",
    "Num": 0
  },
  {
    "PlayerId": "westma01",
    "PlayerName": "Mark West",
    "Year": "1984-2000",
    "Num": 0
  },
  {
    "PlayerId": "workmma01",
    "PlayerName": "Mark Workman",
    "Year": "1953-1954",
    "Num": 0
  },
  {
    "PlayerId": "brownma02",
    "PlayerName": "Markel Brown",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "fultzma01",
    "PlayerName": "Markelle Fultz",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "morrima02",
    "PlayerName": "Markieff Morris",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "jaricma01",
    "PlayerName": "Marko Jaric",
    "Year": "2003-2009",
    "Num": 0
  },
  {
    "PlayerId": "milicma01",
    "PlayerName": "Marko Milic",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "todorma01",
    "PlayerName": "Marko Todorovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "praddma01",
    "PlayerName": "Marlbert Pradd",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "garnema01",
    "PlayerName": "Marlon Garnett",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "maxeyma01",
    "PlayerName": "Marlon Maxey",
    "Year": "1993-1994",
    "Num": 0
  },
  {
    "PlayerId": "redmoma01",
    "PlayerName": "Marlon Redmond",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "braggma01",
    "PlayerName": "Marques Bragg",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "johnsma01",
    "PlayerName": "Marques Johnson",
    "Year": "1978-1990",
    "Num": 0
  },
  {
    "PlayerId": "chrisma01",
    "PlayerName": "Marquese Chriss",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "daniema01",
    "PlayerName": "Marquis Daniels",
    "Year": "2004-2013",
    "Num": 0
  },
  {
    "PlayerId": "teaguma01",
    "PlayerName": "Marquis Teague",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "speigma01",
    "PlayerName": "Marreese Speights",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "hawkima01",
    "PlayerName": "Marshall Hawkins",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "hendema01",
    "PlayerName": "Marshall Henderson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "plumlma02",
    "PlayerName": "Marshall Plumlee",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "rogerma01",
    "PlayerName": "Marshall Rogers",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "brookma01",
    "PlayerName": "MarShon Brooks",
    "Year": "2012-2014",
    "Num": 0
  },
  {
    "PlayerId": "webstma02",
    "PlayerName": "Martell Webster",
    "Year": "2006-2015",
    "Num": 0
  },
  {
    "PlayerId": "lewisma01",
    "PlayerName": "Martin Lewis",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "muursma01",
    "PlayerName": "Martin Muursepp",
    "Year": "1997-1998",
    "Num": 0
  },
  {
    "PlayerId": "nesslma01",
    "PlayerName": "Martin Nessley",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "byrnema01",
    "PlayerName": "Marty Byrnes",
    "Year": "1979-1983",
    "Num": 0
  },
  {
    "PlayerId": "conloma01",
    "PlayerName": "Marty Conlon",
    "Year": "1992-2000",
    "Num": 0
  },
  {
    "PlayerId": "passama01",
    "PlayerName": "Marty Passaglia",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "andrima01",
    "PlayerName": "Martynas Andriuskevicius",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "roberma01",
    "PlayerName": "Marv Roberts",
    "Year": "1972-1977",
    "Num": 0
  },
  {
    "PlayerId": "schatma01",
    "PlayerName": "Marv Schatzman",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "winklma01",
    "PlayerName": "Marv Winkler",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "barnema01",
    "PlayerName": "Marvin Barnes",
    "Year": "1975-1980",
    "Num": 0
  },
  {
    "PlayerId": "webstma01",
    "PlayerName": "Marvin Webster",
    "Year": "1976-1987",
    "Num": 0
  },
  {
    "PlayerId": "willima02",
    "PlayerName": "Marvin Williams",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "plumlma01",
    "PlayerName": "Mason Plumlee",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "cleavma01",
    "PlayerName": "Mateen Cleaves",
    "Year": "2001-2006",
    "Num": 0
  },
  {
    "PlayerId": "lessoma01",
    "PlayerName": "Mathias Lessort",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "barnema02",
    "PlayerName": "Matt Barnes",
    "Year": "2004-2017",
    "Num": 0
  },
  {
    "PlayerId": "bonnema01",
    "PlayerName": "Matt Bonner",
    "Year": "2005-2016",
    "Num": 0
  },
  {
    "PlayerId": "bullama01",
    "PlayerName": "Matt Bullard",
    "Year": "1991-2002",
    "Num": 0
  },
  {
    "PlayerId": "carroma01",
    "PlayerName": "Matt Carroll",
    "Year": "2004-2013",
    "Num": 0
  },
  {
    "PlayerId": "costema01",
    "PlayerName": "Matt Costello",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "fishma01",
    "PlayerName": "Matt Fish",
    "Year": "1995-1997",
    "Num": 0
  },
  {
    "PlayerId": "freijma01",
    "PlayerName": "Matt Freije",
    "Year": "2005-2007",
    "Num": 0
  },
  {
    "PlayerId": "geigema01",
    "PlayerName": "Matt Geiger",
    "Year": "1993-2002",
    "Num": 0
  },
  {
    "PlayerId": "guokama01",
    "PlayerName": "Matt Guokas",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "guokama02",
    "PlayerName": "Matt Guokas",
    "Year": "1967-1976",
    "Num": 0
  },
  {
    "PlayerId": "harprma01",
    "PlayerName": "Matt Harpring",
    "Year": "1999-2009",
    "Num": 0
  },
  {
    "PlayerId": "jannima01",
    "PlayerName": "Matt Janning",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jonesma04",
    "PlayerName": "Matt Jones",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "malonma01",
    "PlayerName": "Matt Maloney",
    "Year": "1997-2003",
    "Num": 0
  },
  {
    "PlayerId": "mazzama01",
    "PlayerName": "Matt Mazza",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "othicma01",
    "PlayerName": "Matt Othick",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "pressma01",
    "PlayerName": "Matt Pressey",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "steigma01",
    "PlayerName": "Matt Steigenga",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "walshma01",
    "PlayerName": "Matt Walsh",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "wenstma01",
    "PlayerName": "Matt Wenstrom",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "willima05",
    "PlayerName": "Matt Williams",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "zunicma01",
    "PlayerName": "Matt Zunic",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "aitchma01",
    "PlayerName": "Matthew Aitch",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "dellama01",
    "PlayerName": "Matthew Dellavedova",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "agerma01",
    "PlayerName": "Maurice Ager",
    "Year": "2007-2011",
    "Num": 0
  },
  {
    "PlayerId": "bakerma01",
    "PlayerName": "Maurice Baker",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "cartema01",
    "PlayerName": "Maurice Carter",
    "Year": 2004,
    "Num": 0
  },
  {
    "PlayerId": "cheekma01",
    "PlayerName": "Maurice Cheeks",
    "Year": "1979-1993",
    "Num": 0
  },
  {
    "PlayerId": "evansma01",
    "PlayerName": "Maurice Evans",
    "Year": "2002-2012",
    "Num": 0
  },
  {
    "PlayerId": "harklma01",
    "PlayerName": "Maurice Harkless",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "lucasma01",
    "PlayerName": "Maurice Lucas",
    "Year": "1975-1988",
    "Num": 0
  },
  {
    "PlayerId": "martima01",
    "PlayerName": "Maurice Martin",
    "Year": "1987-1988",
    "Num": 0
  },
  {
    "PlayerId": "mcharma01",
    "PlayerName": "Maurice McHartley",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "ndourma01",
    "PlayerName": "Maurice Ndour",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "stokema01",
    "PlayerName": "Maurice Stokes",
    "Year": "1956-1958",
    "Num": 0
  },
  {
    "PlayerId": "suttoma01",
    "PlayerName": "Maurice Sutton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "tayloma01",
    "PlayerName": "Maurice Taylor",
    "Year": "1998-2007",
    "Num": 0
  },
  {
    "PlayerId": "kingma01",
    "PlayerName": "Maury King",
    "Year": "1960-1963",
    "Num": 0
  },
  {
    "PlayerId": "kouguma01",
    "PlayerName": "Max Kouguere",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "morrima01",
    "PlayerName": "Max Morris",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "zasloma01",
    "PlayerName": "Max Zaslofsky",
    "Year": "1947-1956",
    "Num": 0
  },
  {
    "PlayerId": "klebima01",
    "PlayerName": "Maxi Kleber",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "ingramc01",
    "PlayerName": "McCoy Ingram",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "mclemmc01",
    "PlayerName": "McCoy McLemore",
    "Year": "1965-1972",
    "Num": 0
  },
  {
    "PlayerId": "singlmc01",
    "PlayerName": "McKinley Singleton",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "parkme01",
    "PlayerName": "Med Park",
    "Year": "1956-1960",
    "Num": 0
  },
  {
    "PlayerId": "okurme01",
    "PlayerName": "Mehmet Okur",
    "Year": "2003-2012",
    "Num": 0
  },
  {
    "PlayerId": "benneme01",
    "PlayerName": "Mel Bennett",
    "Year": "1976-1982",
    "Num": 0
  },
  {
    "PlayerId": "countme01",
    "PlayerName": "Mel Counts",
    "Year": "1965-1976",
    "Num": 0
  },
  {
    "PlayerId": "danieme01",
    "PlayerName": "Mel Daniels",
    "Year": "1968-1977",
    "Num": 0
  },
  {
    "PlayerId": "davisme01",
    "PlayerName": "Mel Davis",
    "Year": "1974-1977",
    "Num": 0
  },
  {
    "PlayerId": "gibsome01",
    "PlayerName": "Mel Gibson",
    "Year": 1964,
    "Num": 0
  },
  {
    "PlayerId": "hirscme01",
    "PlayerName": "Mel Hirsch",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "hutchme01",
    "PlayerName": "Mel Hutchins",
    "Year": "1952-1958",
    "Num": 0
  },
  {
    "PlayerId": "mccanme01",
    "PlayerName": "Mel McCants",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "mcgahme01",
    "PlayerName": "Mel McGaha",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "nowelme01",
    "PlayerName": "Mel Nowell",
    "Year": "1963-1968",
    "Num": 0
  },
  {
    "PlayerId": "paytome01",
    "PlayerName": "Mel Payton",
    "Year": "1952-1953",
    "Num": 0
  },
  {
    "PlayerId": "peterme01",
    "PlayerName": "Mel Peterson",
    "Year": "1964-1970",
    "Num": 0
  },
  {
    "PlayerId": "riebeme01",
    "PlayerName": "Mel Riebe",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "thursme01",
    "PlayerName": "Mel Thurston",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "trimbme01",
    "PlayerName": "Melo Trimble",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bookeme01",
    "PlayerName": "Melvin Booker",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "ejimme01",
    "PlayerName": "Melvin Ejim",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "elyme01",
    "PlayerName": "Melvin Ely",
    "Year": "2003-2014",
    "Num": 0
  },
  {
    "PlayerId": "newbeme01",
    "PlayerName": "Melvin Newbern",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "sandeme01",
    "PlayerName": "Melvin Sanders",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "turpime01",
    "PlayerName": "Melvin Turpin",
    "Year": "1985-1990",
    "Num": 0
  },
  {
    "PlayerId": "bateeme01",
    "PlayerName": "Mengke Bateer",
    "Year": "2002-2004",
    "Num": 0
  },
  {
    "PlayerId": "jacksme01",
    "PlayerName": "Mervin Jackson",
    "Year": "1969-1973",
    "Num": 0
  },
  {
    "PlayerId": "artesro01",
    "PlayerName": "Metta World Peace",
    "Year": "2000-2017",
    "Num": 0
  },
  {
    "PlayerId": "leoname01",
    "PlayerName": "Meyers Leonard",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "adamsmi01",
    "PlayerName": "Michael Adams",
    "Year": "1986-1996",
    "Num": 0
  },
  {
    "PlayerId": "andermi01",
    "PlayerName": "Michael Anderson",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "anslemi01",
    "PlayerName": "Michael Ansley",
    "Year": "1990-1992",
    "Num": 0
  },
  {
    "PlayerId": "beaslmi01",
    "PlayerName": "Michael Beasley",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "bradlmi01",
    "PlayerName": "Michael Bradley",
    "Year": "2002-2006",
    "Num": 0
  },
  {
    "PlayerId": "brookmi01",
    "PlayerName": "Michael Brooks",
    "Year": "1981-1988",
    "Num": 0
  },
  {
    "PlayerId": "bytzumi01",
    "PlayerName": "Michael Bytzura",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "cagemi01",
    "PlayerName": "Michael Cage",
    "Year": "1985-2000",
    "Num": 0
  },
  {
    "PlayerId": "cartemi01",
    "PlayerName": "Michael Carter-Williams",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "coopemi01",
    "PlayerName": "Michael Cooper",
    "Year": "1979-1990",
    "Num": 0
  },
  {
    "PlayerId": "currymi01",
    "PlayerName": "Michael Curry",
    "Year": "1994-2005",
    "Num": 0
  },
  {
    "PlayerId": "dickemi01",
    "PlayerName": "Michael Dickerson",
    "Year": "1999-2003",
    "Num": 0
  },
  {
    "PlayerId": "doleami01",
    "PlayerName": "Michael Doleac",
    "Year": "1999-2008",
    "Num": 0
  },
  {
    "PlayerId": "dunigmi01",
    "PlayerName": "Michael Dunigan",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "finlemi01",
    "PlayerName": "Michael Finley",
    "Year": "1996-2010",
    "Num": 0
  },
  {
    "PlayerId": "frazimi01",
    "PlayerName": "Michael Frazier",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gbinimi01",
    "PlayerName": "Michael Gbinije",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "hawkimi01",
    "PlayerName": "Michael Hawkins",
    "Year": "1997-2001",
    "Num": 0
  },
  {
    "PlayerId": "holyfmi01",
    "PlayerName": "Michael Holyfield",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jacksmi02",
    "PlayerName": "Michael Jackson",
    "Year": "1988-1990",
    "Num": 0
  },
  {
    "PlayerId": "jordami01",
    "PlayerName": "Michael Jordan",
    "Year": "1985-2003",
    "Num": 0
  },
  {
    "PlayerId": "kiddgmi01",
    "PlayerName": "Michael Kidd-Gilchrist",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "mcdonmi01",
    "PlayerName": "Michael McDonald",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "olowomi01",
    "PlayerName": "Michael Olowokandi",
    "Year": "1999-2007",
    "Num": 0
  },
  {
    "PlayerId": "phelpmi01",
    "PlayerName": "Michael Phelps",
    "Year": "1986-1988",
    "Num": 0
  },
  {
    "PlayerId": "quallmi01",
    "PlayerName": "Michael Qualls",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "reddmi01",
    "PlayerName": "Michael Redd",
    "Year": "2001-2012",
    "Num": 0
  },
  {
    "PlayerId": "ruffimi01",
    "PlayerName": "Michael Ruffin",
    "Year": "2000-2009",
    "Num": 0
  },
  {
    "PlayerId": "smithmi02",
    "PlayerName": "Michael Smith",
    "Year": "1995-2001",
    "Num": 0
  },
  {
    "PlayerId": "smithmi01",
    "PlayerName": "Michael Smith",
    "Year": "1990-1995",
    "Num": 0
  },
  {
    "PlayerId": "snaermi01",
    "PlayerName": "Michael Snaer",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "stewami01",
    "PlayerName": "Michael Stewart",
    "Year": "1998-2005",
    "Num": 0
  },
  {
    "PlayerId": "stockmi01",
    "PlayerName": "Michael Stockton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "thompmi01",
    "PlayerName": "Michael Thompson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wileymi01",
    "PlayerName": "Michael Wiley",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "wilsomi01",
    "PlayerName": "Michael Wilson",
    "Year": "1984-1987",
    "Num": 0
  },
  {
    "PlayerId": "youngmi02",
    "PlayerName": "Michael Young",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "youngmi01",
    "PlayerName": "Michael Young",
    "Year": "1985-1990",
    "Num": 0
  },
  {
    "PlayerId": "kysermi01",
    "PlayerName": "Michale Kyser",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "richami01",
    "PlayerName": "Micheal Ray Richardson",
    "Year": "1979-1986",
    "Num": 0
  },
  {
    "PlayerId": "willimi02",
    "PlayerName": "Micheal Williams",
    "Year": "1989-1999",
    "Num": 0
  },
  {
    "PlayerId": "gelabmi01",
    "PlayerName": "Mickael Gelabale",
    "Year": "2007-2013",
    "Num": 0
  },
  {
    "PlayerId": "pietrmi01",
    "PlayerName": "Mickael Pietrus",
    "Year": "2004-2013",
    "Num": 0
  },
  {
    "PlayerId": "gladnmi01",
    "PlayerName": "Mickell Gladness",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "davismi02",
    "PlayerName": "Mickey Davis",
    "Year": "1972-1977",
    "Num": 0
  },
  {
    "PlayerId": "dillami01",
    "PlayerName": "Mickey Dillard",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "johnsmi01",
    "PlayerName": "Mickey Johnson",
    "Year": "1975-1986",
    "Num": 0
  },
  {
    "PlayerId": "mcconmi01",
    "PlayerName": "Mickey McConnell",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "rottnmi01",
    "PlayerName": "Mickey Rottner",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "bantomi01",
    "PlayerName": "Mike Bantom",
    "Year": "1974-1982",
    "Num": 0
  },
  {
    "PlayerId": "barrmi01",
    "PlayerName": "Mike Barr",
    "Year": "1973-1977",
    "Num": 0
  },
  {
    "PlayerId": "barremi01",
    "PlayerName": "Mike Barrett",
    "Year": "1970-1973",
    "Num": 0
  },
  {
    "PlayerId": "batismi01",
    "PlayerName": "Mike Batiste",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "bibbymi01",
    "PlayerName": "Mike Bibby",
    "Year": "1999-2012",
    "Num": 0
  },
  {
    "PlayerId": "bloommi01",
    "PlayerName": "Mike Bloom",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "bratzmi01",
    "PlayerName": "Mike Bratz",
    "Year": "1978-1986",
    "Num": 0
  },
  {
    "PlayerId": "brittmi01",
    "PlayerName": "Mike Brittain",
    "Year": "1986-1987",
    "Num": 0
  },
  {
    "PlayerId": "brownmi01",
    "PlayerName": "Mike Brown",
    "Year": "1987-1997",
    "Num": 0
  },
  {
    "PlayerId": "bruesmi01",
    "PlayerName": "Mike Bruesewitz",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "butlemi01",
    "PlayerName": "Mike Butler",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "champmi01",
    "PlayerName": "Mike Champion",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "cobbimi01",
    "PlayerName": "Mike Cobbins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "conlemi01",
    "PlayerName": "Mike Conley",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "dantomi01",
    "PlayerName": "Mike D'Antoni",
    "Year": "1974-1977",
    "Num": 0
  },
  {
    "PlayerId": "dabicmi01",
    "PlayerName": "Mike Dabich",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "davismi01",
    "PlayerName": "Mike Davis",
    "Year": "1970-1973",
    "Num": 0
  },
  {
    "PlayerId": "davismi03",
    "PlayerName": "Mike Davis",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "dunlemi02",
    "PlayerName": "Mike Dunleavy",
    "Year": "2003-2017",
    "Num": 1
  },
  {
    "PlayerId": "dunlemi01",
    "PlayerName": "Mike Dunleavy",
    "Year": "1977-1990",
    "Num": 0
  },
  {
    "PlayerId": "evansmi01",
    "PlayerName": "Mike Evans",
    "Year": "1980-1988",
    "Num": 0
  },
  {
    "PlayerId": "farmemi01",
    "PlayerName": "Mike Farmer",
    "Year": "1959-1966",
    "Num": 0
  },
  {
    "PlayerId": "flynnmi01",
    "PlayerName": "Mike Flynn",
    "Year": "1976-1978",
    "Num": 0
  },
  {
    "PlayerId": "galemi01",
    "PlayerName": "Mike Gale",
    "Year": "1972-1982",
    "Num": 0
  },
  {
    "PlayerId": "gibsomi01",
    "PlayerName": "Mike Gibson",
    "Year": "1984-1986",
    "Num": 0
  },
  {
    "PlayerId": "glennmi01",
    "PlayerName": "Mike Glenn",
    "Year": "1978-1987",
    "Num": 0
  },
  {
    "PlayerId": "gminsmi01",
    "PlayerName": "Mike Gminski",
    "Year": "1981-1994",
    "Num": 0
  },
  {
    "PlayerId": "greenmi01",
    "PlayerName": "Mike Green",
    "Year": "1974-1980",
    "Num": 0
  },
  {
    "PlayerId": "grossmi01",
    "PlayerName": "Mike Grosso",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "hallmi01",
    "PlayerName": "Mike Hall",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "harpemi01",
    "PlayerName": "Mike Harper",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "harrimi01",
    "PlayerName": "Mike Harris",
    "Year": "2008-2014",
    "Num": 0
  },
  {
    "PlayerId": "higgimi01",
    "PlayerName": "Mike Higgins",
    "Year": "1990-1991",
    "Num": 0
  },
  {
    "PlayerId": "holtomi01",
    "PlayerName": "Mike Holton",
    "Year": "1985-1990",
    "Num": 0
  },
  {
    "PlayerId": "iuzzomi01",
    "PlayerName": "Mike Iuzzolino",
    "Year": "1992-1993",
    "Num": 0
  },
  {
    "PlayerId": "jacksmi01",
    "PlayerName": "Mike Jackson",
    "Year": "1973-1976",
    "Num": 0
  },
  {
    "PlayerId": "jamesmi02",
    "PlayerName": "Mike James",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "jamesmi01",
    "PlayerName": "Mike James",
    "Year": "2002-2014",
    "Num": 0
  },
  {
    "PlayerId": "kearnmi01",
    "PlayerName": "Mike Kearns",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "lewismi01",
    "PlayerName": "Mike Lewis",
    "Year": "1969-1974",
    "Num": 0
  },
  {
    "PlayerId": "lynnmi01",
    "PlayerName": "Mike Lynn",
    "Year": "1970-1971",
    "Num": 0
  },
  {
    "PlayerId": "macalmi01",
    "PlayerName": "Mike Macaluso",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "maloymi01",
    "PlayerName": "Mike Maloy",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "mccarmi01",
    "PlayerName": "Mike McCarron",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "mcgeemi01",
    "PlayerName": "Mike McGee",
    "Year": "1982-1990",
    "Num": 0
  },
  {
    "PlayerId": "millemi01",
    "PlayerName": "Mike Miller",
    "Year": "2001-2017",
    "Num": 1
  },
  {
    "PlayerId": "mitchmi01",
    "PlayerName": "Mike Mitchell",
    "Year": "1979-1988",
    "Num": 0
  },
  {
    "PlayerId": "morrimi01",
    "PlayerName": "Mike Morrison",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "muscami01",
    "PlayerName": "Mike Muscala",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "newlimi01",
    "PlayerName": "Mike Newlin",
    "Year": "1972-1982",
    "Num": 0
  },
  {
    "PlayerId": "nilesmi01",
    "PlayerName": "Mike Niles",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "novakmi01",
    "PlayerName": "Mike Novak",
    "Year": "1949-1954",
    "Num": 0
  },
  {
    "PlayerId": "okoremi01",
    "PlayerName": "Mike O'Koren",
    "Year": "1981-1988",
    "Num": 0
  },
  {
    "PlayerId": "oneilmi01",
    "PlayerName": "Mike O'Neill",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "penbemi01",
    "PlayerName": "Mike Penberthy",
    "Year": "2001-2002",
    "Num": 0
  },
  {
    "PlayerId": "peplomi01",
    "PlayerName": "Mike Peplowski",
    "Year": "1994-1996",
    "Num": 0
  },
  {
    "PlayerId": "prattmi01",
    "PlayerName": "Mike Pratt",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "pricemi01",
    "PlayerName": "Mike Price",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "ratlimi01",
    "PlayerName": "Mike Ratliff",
    "Year": "1973-1974",
    "Num": 0
  },
  {
    "PlayerId": "riordmi01",
    "PlayerName": "Mike Riordan",
    "Year": "1969-1977",
    "Num": 0
  },
  {
    "PlayerId": "sandemi01",
    "PlayerName": "Mike Sanders",
    "Year": "1983-1993",
    "Num": 0
  },
  {
    "PlayerId": "scottmi01",
    "PlayerName": "Mike Scott",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "sillimi01",
    "PlayerName": "Mike Silliman",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "smithmi03",
    "PlayerName": "Mike Smith",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "smrekmi01",
    "PlayerName": "Mike Smrek",
    "Year": "1986-1992",
    "Num": 0
  },
  {
    "PlayerId": "sojoumi01",
    "PlayerName": "Mike Sojourner",
    "Year": "1975-1977",
    "Num": 0
  },
  {
    "PlayerId": "sweetmi01",
    "PlayerName": "Mike Sweetney",
    "Year": "2004-2007",
    "Num": 0
  },
  {
    "PlayerId": "taylomi01",
    "PlayerName": "Mike Taylor",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "tobeymi01",
    "PlayerName": "Mike Tobey",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "todormi01",
    "PlayerName": "Mike Todorovich",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "wilksmi01",
    "PlayerName": "Mike Wilks",
    "Year": "2003-2010",
    "Num": 0
  },
  {
    "PlayerId": "willimi03",
    "PlayerName": "Mike Williams",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "woodsmi01",
    "PlayerName": "Mike Woodson",
    "Year": "1981-1991",
    "Num": 0
  },
  {
    "PlayerId": "mooremi01",
    "PlayerName": "Mikki Moore",
    "Year": "1999-2012",
    "Num": 0
  },
  {
    "PlayerId": "macvami01",
    "PlayerName": "Milan Macvan",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ilicmi01",
    "PlayerName": "Mile Ilic",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "plumlmi01",
    "PlayerName": "Miles Plumlee",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "simonmi01",
    "PlayerName": "Miles Simon",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "komenmi01",
    "PlayerName": "Milo Komenich",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "babicmi01",
    "PlayerName": "Milos Babic",
    "Year": "1991-1992",
    "Num": 0
  },
  {
    "PlayerId": "teodomi01",
    "PlayerName": "Milos Teodosic",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "rakovmi01",
    "PlayerName": "Milovan Rakovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "palacmi01",
    "PlayerName": "Milt Palacio",
    "Year": "2000-2006",
    "Num": 0
  },
  {
    "PlayerId": "schoomi01",
    "PlayerName": "Milt Schoon",
    "Year": "1947-1950",
    "Num": 0
  },
  {
    "PlayerId": "wagnemi01",
    "PlayerName": "Milt Wagner",
    "Year": "1988-1991",
    "Num": 0
  },
  {
    "PlayerId": "willimi01",
    "PlayerName": "Milt Williams",
    "Year": "1971-1975",
    "Num": 0
  },
  {
    "PlayerId": "doylemi01",
    "PlayerName": "Milton Doyle",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "kuzmimi01",
    "PlayerName": "Mindaugas Kuzminskas",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "radulmi01",
    "PlayerName": "Miroslav Raduljica",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "turkcmi01",
    "PlayerName": "Mirsad Turkcan",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "begicmi01",
    "PlayerName": "Mirza Begic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "teletmi01",
    "PlayerName": "Mirza Teletovic",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "kupchmi01",
    "PlayerName": "Mitch Kupchak",
    "Year": "1977-1986",
    "Num": 0
  },
  {
    "PlayerId": "mcgarmi01",
    "PlayerName": "Mitch McGary",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "richmmi01",
    "PlayerName": "Mitch Richmond",
    "Year": "1989-2002",
    "Num": 0
  },
  {
    "PlayerId": "butlemi02",
    "PlayerName": "Mitchell Butler",
    "Year": "1994-2004",
    "Num": 0
  },
  {
    "PlayerId": "wattmi01",
    "PlayerName": "Mitchell Watt",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wiggimi01",
    "PlayerName": "Mitchell Wiggins",
    "Year": "1984-1992",
    "Num": 0
  },
  {
    "PlayerId": "howarmo01",
    "PlayerName": "Mo Howard",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "laytomo01",
    "PlayerName": "Mo Layton",
    "Year": "1972-1978",
    "Num": 0
  },
  {
    "PlayerId": "mahonmo01",
    "PlayerName": "Mo Mahoney",
    "Year": "1953-1954",
    "Num": 0
  },
  {
    "PlayerId": "willima01",
    "PlayerName": "Mo Williams",
    "Year": "2004-2016",
    "Num": 0
  },
  {
    "PlayerId": "barrmo01",
    "PlayerName": "Moe Barr",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "beckemo01",
    "PlayerName": "Moe Becker",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "radovmo01",
    "PlayerName": "Moe Radovich",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "meinemo01",
    "PlayerName": "Monk Meineke",
    "Year": "1953-1958",
    "Num": 0
  },
  {
    "PlayerId": "ellismo01",
    "PlayerName": "Monta Ellis",
    "Year": "2006-2017",
    "Num": 1
  },
  {
    "PlayerId": "morrimo01",
    "PlayerName": "Monte Morris",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "towemo01",
    "PlayerName": "Monte Towe",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "davismo01",
    "PlayerName": "Monti Davis",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "harremo01",
    "PlayerName": "Montrezl Harrell",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "willimo01",
    "PlayerName": "Monty Williams",
    "Year": "1995-2003",
    "Num": 0
  },
  {
    "PlayerId": "norrimo01",
    "PlayerName": "Moochie Norris",
    "Year": "1997-2006",
    "Num": 0
  },
  {
    "PlayerId": "blaylmo01",
    "PlayerName": "Mookie Blaylock",
    "Year": "1990-2002",
    "Num": 0
  },
  {
    "PlayerId": "wileymo01",
    "PlayerName": "Morlon Wiley",
    "Year": "1989-1995",
    "Num": 0
  },
  {
    "PlayerId": "almonmo01",
    "PlayerName": "Morris Almond",
    "Year": "2008-2012",
    "Num": 0
  },
  {
    "PlayerId": "petermo01",
    "PlayerName": "Morris Peterson",
    "Year": "2001-2011",
    "Num": 0
  },
  {
    "PlayerId": "malonmo01",
    "PlayerName": "Moses Malone",
    "Year": "1975-1995",
    "Num": 0
  },
  {
    "PlayerId": "senesa01",
    "PlayerName": "Mouhamed Sene",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "boguemu01",
    "PlayerName": "Muggsy Bogues",
    "Year": "1988-2001",
    "Num": 0
  },
  {
    "PlayerId": "mitchmu01",
    "PlayerName": "Murray Mitchell",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "wiermu01",
    "PlayerName": "Murray Wier",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "shakumu01",
    "PlayerName": "Mustafa Shakur",
    "Year": "2011-2014",
    "Num": 0
  },
  {
    "PlayerId": "farramu01",
    "PlayerName": "Mustapha Farrakhan",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "thompmy01",
    "PlayerName": "Mychal Thompson",
    "Year": "1979-1991",
    "Num": 0
  },
  {
    "PlayerId": "thompmy02",
    "PlayerName": "Mychel Thompson",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "kabonmy01",
    "PlayerName": "Myck Kabongo",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "henrymy01",
    "PlayerName": "Myke Henry",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "patrimy01",
    "PlayerName": "Myles Patrick",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "turnemy01",
    "PlayerName": "Myles Turner",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "brownmy01",
    "PlayerName": "Myron Brown",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "jacksmy01",
    "PlayerName": "Myron Jackson",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "decolna01",
    "PlayerName": "Nando De Colo",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "cliftna01",
    "PlayerName": "Nat Clifton",
    "Year": "1951-1958",
    "Num": 0
  },
  {
    "PlayerId": "frankna01",
    "PlayerName": "Nat Frankel",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "hickena01",
    "PlayerName": "Nat Hickey",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "militna01",
    "PlayerName": "Nat Militzok",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "blackna01",
    "PlayerName": "Nate Blackwell",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "bowmana01",
    "PlayerName": "Nate Bowman",
    "Year": "1967-1972",
    "Num": 0
  },
  {
    "PlayerId": "delonna01",
    "PlayerName": "Nate DeLong",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "driggna01",
    "PlayerName": "Nate Driggers",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "hawthna01",
    "PlayerName": "Nate Hawthorne",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "huffmna01",
    "PlayerName": "Nate Huffman",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "johnsna01",
    "PlayerName": "Nate Johnston",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "mcmilna01",
    "PlayerName": "Nate McMillan",
    "Year": "1987-1998",
    "Num": 0
  },
  {
    "PlayerId": "robinna01",
    "PlayerName": "Nate Robinson",
    "Year": "2006-2016",
    "Num": 0
  },
  {
    "PlayerId": "thurmna01",
    "PlayerName": "Nate Thurmond",
    "Year": "1964-1977",
    "Num": 0
  },
  {
    "PlayerId": "willina01",
    "PlayerName": "Nate Williams",
    "Year": "1972-1979",
    "Num": 0
  },
  {
    "PlayerId": "woltena01",
    "PlayerName": "Nate Wolters",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "jawaina01",
    "PlayerName": "Nathan Jawai",
    "Year": "2009-2010",
    "Num": 0
  },
  {
    "PlayerId": "barnena01",
    "PlayerName": "Nathaniel Barnett",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "mitrona01",
    "PlayerName": "Naz Mitrou-Long",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "mohamna01",
    "PlayerName": "Nazr Mohammed",
    "Year": "1999-2016",
    "Num": 0
  },
  {
    "PlayerId": "ebind01",
    "PlayerName": "Ndudi Ebi",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "walkne01",
    "PlayerName": "Neal Walk",
    "Year": "1970-1977",
    "Num": 0
  },
  {
    "PlayerId": "endrene01",
    "PlayerName": "Ned Endress",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "sinanne01",
    "PlayerName": "Nedzad Sinanovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "knighne01",
    "PlayerName": "Negele Knight",
    "Year": "1991-1999",
    "Num": 0
  },
  {
    "PlayerId": "johnsne02",
    "PlayerName": "Neil Johnson",
    "Year": "1967-1973",
    "Num": 0
  },
  {
    "PlayerId": "johnsne01",
    "PlayerName": "Neil Johnston",
    "Year": "1952-1959",
    "Num": 0
  },
  {
    "PlayerId": "bobbne01",
    "PlayerName": "Nelson Bobb",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "bjeline01",
    "PlayerName": "Nemanja Bjelica",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "dangune01",
    "PlayerName": "Nemanja Dangubic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "nedovne01",
    "PlayerName": "Nemanja Nedovic",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "krstine01",
    "PlayerName": "Nenad Krstic",
    "Year": "2005-2011",
    "Num": 0
  },
  {
    "PlayerId": "hilarne01",
    "PlayerName": "Nene",
    "Year": "2003-2018",
    "Num": 1
  },
  {
    "PlayerId": "noelne01",
    "PlayerName": "Nerlens Noel",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "anderni01",
    "PlayerName": "Nick Anderson",
    "Year": "1990-2002",
    "Num": 0
  },
  {
    "PlayerId": "calatni01",
    "PlayerName": "Nick Calathes",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "collini01",
    "PlayerName": "Nick Collison",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "covinni01",
    "PlayerName": "Nick Covington",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fazekni01",
    "PlayerName": "Nick Fazekas",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "johnsni01",
    "PlayerName": "Nick Johnson",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "jonesni01",
    "PlayerName": "Nick Jones",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "mantini01",
    "PlayerName": "Nick Mantis",
    "Year": "1960-1963",
    "Num": 0
  },
  {
    "PlayerId": "minneni01",
    "PlayerName": "Nick Minnerath",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "shabani01",
    "PlayerName": "Nick Shaback",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "vanexni01",
    "PlayerName": "Nick Van Exel",
    "Year": "1994-2006",
    "Num": 0
  },
  {
    "PlayerId": "vanosni01",
    "PlayerName": "Nick Vanos",
    "Year": "1986-1987",
    "Num": 0
  },
  {
    "PlayerId": "weathni01",
    "PlayerName": "Nick Weatherspoon",
    "Year": "1974-1980",
    "Num": 0
  },
  {
    "PlayerId": "wiggini01",
    "PlayerName": "Nick Wiggins",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "youngni01",
    "PlayerName": "Nick Young",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "zeislni01",
    "PlayerName": "Nick Zeisloft",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "batumni01",
    "PlayerName": "Nicolas Batum",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "brussni01",
    "PlayerName": "Nicolas Brussino",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "laproni01",
    "PlayerName": "Nicolas Laprovittola",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "hayesni01",
    "PlayerName": "Nigel Hayes",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "willini01",
    "PlayerName": "Nigel Williams-Goss",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "stausni01",
    "PlayerName": "Nik Stauskas",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "wilsoni01",
    "PlayerName": "Nikita Wilson",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "jokicni01",
    "PlayerName": "Nikola Jokic",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "jovanni01",
    "PlayerName": "Nikola Jovanovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "milutni01",
    "PlayerName": "Nikola Milutinov",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mirotni01",
    "PlayerName": "Nikola Mirotic",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "pekovni01",
    "PlayerName": "Nikola Pekovic",
    "Year": "2011-2016",
    "Num": 0
  },
  {
    "PlayerId": "radicni01",
    "PlayerName": "Nikola Radicevic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "vucevni01",
    "PlayerName": "Nikola Vucevic",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "tskitni01",
    "PlayerName": "Nikoloz Tskitishvili",
    "Year": "2003-2006",
    "Num": 0
  },
  {
    "PlayerId": "egwunn01",
    "PlayerName": "Nnanna Egwu",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "vonleno01",
    "PlayerName": "Noah Vonleh",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "jorgeno01",
    "PlayerName": "Noble Jorgensen",
    "Year": "1947-1953",
    "Num": 0
  },
  {
    "PlayerId": "felixno01",
    "PlayerName": "Noel Felix",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "smithno01",
    "PlayerName": "Nolan Smith",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "bakerno01",
    "PlayerName": "Norm Baker",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "cookno01",
    "PlayerName": "Norm Cook",
    "Year": "1977-1978",
    "Num": 0
  },
  {
    "PlayerId": "grekino01",
    "PlayerName": "Norm Grekin",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "magerno01",
    "PlayerName": "Norm Mager",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "nixonno01",
    "PlayerName": "Norm Nixon",
    "Year": "1978-1989",
    "Num": 0
  },
  {
    "PlayerId": "richano01",
    "PlayerName": "Norm Richardson",
    "Year": 2002,
    "Num": 0
  },
  {
    "PlayerId": "stewano01",
    "PlayerName": "Norm Stewart",
    "Year": 1957,
    "Num": 0
  },
  {
    "PlayerId": "swansno01",
    "PlayerName": "Norm Swanson",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "vanlino01",
    "PlayerName": "Norm Van Lier",
    "Year": "1970-1979",
    "Num": 0
  },
  {
    "PlayerId": "blackno01",
    "PlayerName": "Norman Black",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "powelno01",
    "PlayerName": "Norman Powell",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "glickno01",
    "PlayerName": "Normie Glick",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "coleno01",
    "PlayerName": "Norris Cole",
    "Year": "2012-2017",
    "Num": 1
  },
  {
    "PlayerId": "colemno01",
    "PlayerName": "Norris Coleman",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "barnhno01",
    "PlayerName": "Norton Barnhill",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "anosiod01",
    "PlayerName": "O.D. Anosike",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mayooj01",
    "PlayerName": "O.J. Mayo",
    "Year": "2009-2016",
    "Num": 1
  },
  {
    "PlayerId": "ekeziob01",
    "PlayerName": "Obinna Ekezie",
    "Year": "2000-2005",
    "Num": 0
  },
  {
    "PlayerId": "spearod01",
    "PlayerName": "Odie Spears",
    "Year": "1949-1957",
    "Num": 0
  },
  {
    "PlayerId": "allisod01",
    "PlayerName": "Odis Allison",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "anunoog01",
    "PlayerName": "OG Anunoby",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "jaramog01",
    "PlayerName": "Ognjen Jaramaz",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "kuzmiog01",
    "PlayerName": "Ognjen Kuzmic",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "whiteok01",
    "PlayerName": "Okaro White",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "polynol01",
    "PlayerName": "Olden Polynice",
    "Year": "1988-2004",
    "Num": 0
  },
  {
    "PlayerId": "pecheol01",
    "PlayerName": "Oleksiy Pecherov",
    "Year": "2008-2010",
    "Num": 0
  },
  {
    "PlayerId": "lafayol01",
    "PlayerName": "Oliver Lafayette",
    "Year": 2010,
    "Num": 0
  },
  {
    "PlayerId": "milleol01",
    "PlayerName": "Oliver Miller",
    "Year": "1993-2004",
    "Num": 0
  },
  {
    "PlayerId": "robinol01",
    "PlayerName": "Oliver Robinson",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "taylool01",
    "PlayerName": "Oliver Taylor",
    "Year": "1971-1974",
    "Num": 0
  },
  {
    "PlayerId": "hanlaol01",
    "PlayerName": "Olivier Hanlan",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "dardeol01",
    "PlayerName": "Ollie Darden",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "johnsol01",
    "PlayerName": "Ollie Johnson",
    "Year": "1973-1982",
    "Num": 0
  },
  {
    "PlayerId": "mackol01",
    "PlayerName": "Ollie Mack",
    "Year": "1980-1982",
    "Num": 0
  },
  {
    "PlayerId": "ashaool01",
    "PlayerName": "Olu Ashaolu",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "oyedeol01",
    "PlayerName": "Olumide Oyedeji",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "cookom01",
    "PlayerName": "Omar Cook",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "reedom01",
    "PlayerName": "Omar Reed",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnsom01",
    "PlayerName": "Omari Johnson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "asikom01",
    "PlayerName": "Omer Asik",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "casspom01",
    "PlayerName": "Omri Casspi",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "bowlior01",
    "PlayerName": "Orbie Bowling",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "greenor01",
    "PlayerName": "Orien Greene",
    "Year": "2006-2011",
    "Num": 0
  },
  {
    "PlayerId": "grahaor01",
    "PlayerName": "Orlando Graham",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "johnsor01",
    "PlayerName": "Orlando Johnson",
    "Year": "2013-2016",
    "Num": 0
  },
  {
    "PlayerId": "sanchor01",
    "PlayerName": "Orlando Sanchez",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "woolror01",
    "PlayerName": "Orlando Woolridge",
    "Year": "1982-1994",
    "Num": 0
  },
  {
    "PlayerId": "roberos01",
    "PlayerName": "Oscar Robertson",
    "Year": "1961-1974",
    "Num": 0
  },
  {
    "PlayerId": "torreos01",
    "PlayerName": "Oscar Torres",
    "Year": "2002-2003",
    "Num": 0
  },
  {
    "PlayerId": "schecos01",
    "PlayerName": "Ossie Schectman",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "wilsoot01",
    "PlayerName": "Othell Wilson",
    "Year": "1985-1987",
    "Num": 0
  },
  {
    "PlayerId": "harriot01",
    "PlayerName": "Othella Harrington",
    "Year": "1997-2008",
    "Num": 0
  },
  {
    "PlayerId": "hunteot01",
    "PlayerName": "Othello Hunter",
    "Year": "2009-2010",
    "Num": 0
  },
  {
    "PlayerId": "jeffeot01",
    "PlayerName": "Othyus Jeffers",
    "Year": "2010-2014",
    "Num": 0
  },
  {
    "PlayerId": "birdsot01",
    "PlayerName": "Otis Birdsong",
    "Year": "1978-1989",
    "Num": 0
  },
  {
    "PlayerId": "howarot01",
    "PlayerName": "Otis Howard",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "smithot01",
    "PlayerName": "Otis Smith",
    "Year": "1987-1992",
    "Num": 0
  },
  {
    "PlayerId": "thorpot01",
    "PlayerName": "Otis Thorpe",
    "Year": "1985-2001",
    "Num": 0
  },
  {
    "PlayerId": "mooreot01",
    "PlayerName": "Otto Moore",
    "Year": "1969-1977",
    "Num": 0
  },
  {
    "PlayerId": "porteot01",
    "PlayerName": "Otto Porter",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "schneot01",
    "PlayerName": "Otto Schnellbacher",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "wellsow01",
    "PlayerName": "Owen Wells",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "jonesoz01",
    "PlayerName": "Ozell Jones",
    "Year": "1985-1986",
    "Num": 0
  },
  {
    "PlayerId": "brownpj01",
    "PlayerName": "P.J. Brown",
    "Year": "1994-2008",
    "Num": 0
  },
  {
    "PlayerId": "hairspj02",
    "PlayerName": "P.J. Hairston",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "tuckepj01",
    "PlayerName": "P.J. Tucker",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "prigipa01",
    "PlayerName": "Pablo Prigioni",
    "Year": "2013-2016",
    "Num": 0
  },
  {
    "PlayerId": "morlepa01",
    "PlayerName": "Paccelis Morlende",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mannipa01",
    "PlayerName": "Pace Mannion",
    "Year": "1984-1989",
    "Num": 0
  },
  {
    "PlayerId": "diapa01",
    "PlayerName": "Papa Dia",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "sowpa01",
    "PlayerName": "Pape Sow",
    "Year": "2005-2007",
    "Num": 0
  },
  {
    "PlayerId": "sypa01",
    "PlayerName": "Pape Sy",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "siakapa01",
    "PlayerName": "Pascal Siakam",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "burkepa01",
    "PlayerName": "Pat Burke",
    "Year": "2003-2007",
    "Num": 0
  },
  {
    "PlayerId": "connapa01",
    "PlayerName": "Pat Connaughton",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "cummipa01",
    "PlayerName": "Pat Cummings",
    "Year": "1980-1991",
    "Num": 0
  },
  {
    "PlayerId": "dunnpa01",
    "PlayerName": "Pat Dunn",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "durhapa01",
    "PlayerName": "Pat Durham",
    "Year": "1993-1995",
    "Num": 0
  },
  {
    "PlayerId": "frinkpa01",
    "PlayerName": "Pat Frink",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "garripa01",
    "PlayerName": "Pat Garrity",
    "Year": "1999-2008",
    "Num": 0
  },
  {
    "PlayerId": "rileypa01",
    "PlayerName": "Pat Riley",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "youngpa01",
    "PlayerName": "Patric Young",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "garinpa01",
    "PlayerName": "Patricio Garino",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "beverpa01",
    "PlayerName": "Patrick Beverley",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "chrispa01",
    "PlayerName": "Patrick Christopher",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "eddiepa01",
    "PlayerName": "Patrick Eddie",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "ewingpa01",
    "PlayerName": "Patrick Ewing",
    "Year": "1986-2002",
    "Num": 0
  },
  {
    "PlayerId": "ewingpa02",
    "PlayerName": "Patrick Ewing",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "mccawpa01",
    "PlayerName": "Patrick McCaw",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "mcfarpa01",
    "PlayerName": "Patrick McFarland",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "obryapa01",
    "PlayerName": "Patrick O'Bryant",
    "Year": "2007-2010",
    "Num": 0
  },
  {
    "PlayerId": "pattepa01",
    "PlayerName": "Patrick Patterson",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "richapa01",
    "PlayerName": "Patrick Richard",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "millspa02",
    "PlayerName": "Patty Mills",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "gasolpa01",
    "PlayerName": "Pau Gasol",
    "Year": "2002-2018",
    "Num": 1
  },
  {
    "PlayerId": "arizipa01",
    "PlayerName": "Paul Arizin",
    "Year": "1951-1962",
    "Num": 0
  },
  {
    "PlayerId": "cloydpa01",
    "PlayerName": "Paul Cloyd",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "davispa01",
    "PlayerName": "Paul Davis",
    "Year": "2007-2010",
    "Num": 0
  },
  {
    "PlayerId": "dawkipa01",
    "PlayerName": "Paul Dawkins",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "georgpa01",
    "PlayerName": "Paul George",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "gordopa01",
    "PlayerName": "Paul Gordon",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "grahapa01",
    "PlayerName": "Paul Graham",
    "Year": "1992-1994",
    "Num": 0
  },
  {
    "PlayerId": "grantpa01",
    "PlayerName": "Paul Grant",
    "Year": "1999-2004",
    "Num": 0
  },
  {
    "PlayerId": "griffpa01",
    "PlayerName": "Paul Griffin",
    "Year": "1977-1983",
    "Num": 0
  },
  {
    "PlayerId": "hoffmpa01",
    "PlayerName": "Paul Hoffman",
    "Year": "1948-1955",
    "Num": 0
  },
  {
    "PlayerId": "hoguedu01",
    "PlayerName": "Paul Hogue",
    "Year": "1963-1964",
    "Num": 0
  },
  {
    "PlayerId": "hustopa01",
    "PlayerName": "Paul Huston",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "longpa01",
    "PlayerName": "Paul Long",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "mccrapa01",
    "PlayerName": "Paul McCracken",
    "Year": "1973-1977",
    "Num": 0
  },
  {
    "PlayerId": "mcphepa01",
    "PlayerName": "Paul McPherson",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "millspa01",
    "PlayerName": "Paul Millsap",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "mokespa01",
    "PlayerName": "Paul Mokeski",
    "Year": "1980-1991",
    "Num": 0
  },
  {
    "PlayerId": "napolpa01",
    "PlayerName": "Paul Napolitano",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "neumapa01",
    "PlayerName": "Paul Neumann",
    "Year": "1962-1967",
    "Num": 0
  },
  {
    "PlayerId": "noelpa01",
    "PlayerName": "Paul Noel",
    "Year": "1948-1952",
    "Num": 0
  },
  {
    "PlayerId": "nolenpa01",
    "PlayerName": "Paul Nolen",
    "Year": 1954,
    "Num": 0
  },
  {
    "PlayerId": "piercpa01",
    "PlayerName": "Paul Pierce",
    "Year": "1999-2017",
    "Num": 0
  },
  {
    "PlayerId": "presspa01",
    "PlayerName": "Paul Pressey",
    "Year": "1983-1993",
    "Num": 0
  },
  {
    "PlayerId": "ruffnpa01",
    "PlayerName": "Paul Ruffner",
    "Year": "1971-1976",
    "Num": 0
  },
  {
    "PlayerId": "scranpa01",
    "PlayerName": "Paul Scranton",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "seymopa01",
    "PlayerName": "Paul Seymour",
    "Year": "1948-1960",
    "Num": 0
  },
  {
    "PlayerId": "shirlpa01",
    "PlayerName": "Paul Shirley",
    "Year": "2003-2005",
    "Num": 0
  },
  {
    "PlayerId": "silaspa01",
    "PlayerName": "Paul Silas",
    "Year": "1965-1980",
    "Num": 0
  },
  {
    "PlayerId": "stovapa01",
    "PlayerName": "Paul Stovall",
    "Year": "1973-1974",
    "Num": 0
  },
  {
    "PlayerId": "thomppa01",
    "PlayerName": "Paul Thompson",
    "Year": "1984-1986",
    "Num": 0
  },
  {
    "PlayerId": "walthpa01",
    "PlayerName": "Paul Walther",
    "Year": "1950-1955",
    "Num": 0
  },
  {
    "PlayerId": "westppa01",
    "PlayerName": "Paul Westphal",
    "Year": "1973-1984",
    "Num": 0
  },
  {
    "PlayerId": "zipsepa01",
    "PlayerName": "Paul Zipser",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "prestpa01",
    "PlayerName": "Paulao Prestes",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "podkopa01",
    "PlayerName": "Pavel Podkolzin",
    "Year": "2005-2006",
    "Num": 0
  },
  {
    "PlayerId": "washipe01",
    "PlayerName": "Pearl Washington",
    "Year": "1987-1989",
    "Num": 0
  },
  {
    "PlayerId": "stojape01",
    "PlayerName": "Peja Stojakovic",
    "Year": "1999-2011",
    "Num": 0
  },
  {
    "PlayerId": "earlype01",
    "PlayerName": "Penny Early",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "saulpe01",
    "PlayerName": "Pep Saul",
    "Year": "1950-1955",
    "Num": 0
  },
  {
    "PlayerId": "sanchpe01",
    "PlayerName": "Pepe Sanchez",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "anticpe01",
    "PlayerName": "Pero Antic",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "ellispe02",
    "PlayerName": "Perry Ellis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jonespe01",
    "PlayerName": "Perry Jones",
    "Year": "2013-2015",
    "Num": 1
  },
  {
    "PlayerId": "mosspe01",
    "PlayerName": "Perry Moss",
    "Year": "1986-1987",
    "Num": 0
  },
  {
    "PlayerId": "warbipe01",
    "PlayerName": "Perry Warbington",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "youngpe01",
    "PlayerName": "Perry Young",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "ellispe01",
    "PlayerName": "Pervis Ellison",
    "Year": "1990-2001",
    "Num": 0
  },
  {
    "PlayerId": "brennpe01",
    "PlayerName": "Pete Brennan",
    "Year": 1959,
    "Num": 0
  },
  {
    "PlayerId": "chilcpe01",
    "PlayerName": "Pete Chilcutt",
    "Year": "1992-2000",
    "Num": 0
  },
  {
    "PlayerId": "crosspe01",
    "PlayerName": "Pete Cross",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "darcepe01",
    "PlayerName": "Pete Darcey",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "lalicpe01",
    "PlayerName": "Pete Lalich",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "maravpe01",
    "PlayerName": "Pete Maravich",
    "Year": "1971-1980",
    "Num": 0
  },
  {
    "PlayerId": "myerspe01",
    "PlayerName": "Pete Myers",
    "Year": "1987-1998",
    "Num": 0
  },
  {
    "PlayerId": "smithpe01",
    "PlayerName": "Pete Smith",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "verhope01",
    "PlayerName": "Pete Verhoeven",
    "Year": "1982-1987",
    "Num": 0
  },
  {
    "PlayerId": "willipe01",
    "PlayerName": "Pete Williams",
    "Year": "1986-1987",
    "Num": 0
  },
  {
    "PlayerId": "alumape01",
    "PlayerName": "Peter Aluma",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "ramospe01",
    "PlayerName": "Peter John Ramos",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "jokpe01",
    "PlayerName": "Peter Jok",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "thibepe01",
    "PlayerName": "Peter Thibeaux",
    "Year": "1985-1986",
    "Num": 0
  },
  {
    "PlayerId": "rosenpe01",
    "PlayerName": "Petey Rosenberg",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "cornepe01",
    "PlayerName": "Petr Cornelie",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "koponpe01",
    "PlayerName": "Petteri Koponen",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gudmupe01",
    "PlayerName": "Petur Gudmundsson",
    "Year": "1982-1989",
    "Num": 0
  },
  {
    "PlayerId": "sivape01",
    "PlayerName": "Peyton Siva",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "bondph01",
    "PlayerName": "Phil Bond",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "cheniph01",
    "PlayerName": "Phil Chenier",
    "Year": "1972-1981",
    "Num": 0
  },
  {
    "PlayerId": "farbmph01",
    "PlayerName": "Phil Farbman",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "fordph01",
    "PlayerName": "Phil Ford",
    "Year": "1979-1985",
    "Num": 0
  },
  {
    "PlayerId": "hankiph01",
    "PlayerName": "Phil Hankinson",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "hicksph01",
    "PlayerName": "Phil Hicks",
    "Year": "1977-1979",
    "Num": 0
  },
  {
    "PlayerId": "hubbaph01",
    "PlayerName": "Phil Hubbard",
    "Year": "1980-1989",
    "Num": 0
  },
  {
    "PlayerId": "jacksph01",
    "PlayerName": "Phil Jackson",
    "Year": "1968-1980",
    "Num": 0
  },
  {
    "PlayerId": "jordoph01",
    "PlayerName": "Phil Jordon",
    "Year": "1957-1963",
    "Num": 0
  },
  {
    "PlayerId": "lumpkph01",
    "PlayerName": "Phil Lumpkin",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "martiph01",
    "PlayerName": "Phil Martin",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "pressph01",
    "PlayerName": "Phil Pressey",
    "Year": "2014-2016",
    "Num": 1
  },
  {
    "PlayerId": "rolliph01",
    "PlayerName": "Phil Rollins",
    "Year": "1959-1961",
    "Num": 0
  },
  {
    "PlayerId": "selleph01",
    "PlayerName": "Phil Sellers",
    "Year": 1977,
    "Num": 0
  },
  {
    "PlayerId": "smithph01",
    "PlayerName": "Phil Smith",
    "Year": "1975-1983",
    "Num": 0
  },
  {
    "PlayerId": "walkeph01",
    "PlayerName": "Phil Walker",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "zevenph01",
    "PlayerName": "Phil Zevenbergen",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "wagneph01",
    "PlayerName": "Phillip Wagner",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "kennepi01",
    "PlayerName": "Pickles Kennedy",
    "Year": 1961,
    "Num": 0
  },
  {
    "PlayerId": "jackspi01",
    "PlayerName": "Pierre Jackson",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "russepi01",
    "PlayerName": "Pierre Russell",
    "Year": "1972-1973",
    "Num": 0
  },
  {
    "PlayerId": "doziepj01",
    "PlayerName": "PJ Dozier",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lottpl01",
    "PlayerName": "Plummer Lott",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "richapo01",
    "PlayerName": "Pooh Richardson",
    "Year": "1990-1999",
    "Num": 0
  },
  {
    "PlayerId": "goodwpo01",
    "PlayerName": "Pop Goodwin",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "jonespo01",
    "PlayerName": "Popeye Jones",
    "Year": "1994-2004",
    "Num": 0
  },
  {
    "PlayerId": "mensapo01",
    "PlayerName": "Pops Mensah-Bonsu",
    "Year": "2007-2011",
    "Num": 0
  },
  {
    "PlayerId": "meriwpo01",
    "PlayerName": "Porter Meriwether",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "drobnpr01",
    "PlayerName": "Predrag Drobnjak",
    "Year": "2002-2005",
    "Num": 0
  },
  {
    "PlayerId": "savovpr01",
    "PlayerName": "Predrag Savovic",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "maravpr01",
    "PlayerName": "Press Maravich",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "adamspr01",
    "PlayerName": "Preston Adams",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "brookpr01",
    "PlayerName": "Price Brookfield",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "laudepr01",
    "PlayerName": "Priest Lauderdale",
    "Year": "1997-1998",
    "Num": 0
  },
  {
    "PlayerId": "brezepr01",
    "PlayerName": "Primoz Brezec",
    "Year": "2002-2010",
    "Num": 0
  },
  {
    "PlayerId": "shortpu01",
    "PlayerName": "Purvis Short",
    "Year": "1979-1990",
    "Num": 0
  },
  {
    "PlayerId": "richaqu01",
    "PlayerName": "Quentin Richardson",
    "Year": "2001-2013",
    "Num": 0
  },
  {
    "PlayerId": "acyqu01",
    "PlayerName": "Quincy Acy",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "doubyqu01",
    "PlayerName": "Quincy Douby",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "fordqu01",
    "PlayerName": "Quincy Ford",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lewisqu01",
    "PlayerName": "Quincy Lewis",
    "Year": "2000-2004",
    "Num": 0
  },
  {
    "PlayerId": "millequ01",
    "PlayerName": "Quincy Miller",
    "Year": "2013-2015",
    "Num": 0
  },
  {
    "PlayerId": "pondequ01",
    "PlayerName": "Quincy Pondexter",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "bucknqu01",
    "PlayerName": "Quinn Buckner",
    "Year": "1977-1986",
    "Num": 0
  },
  {
    "PlayerId": "cookqu01",
    "PlayerName": "Quinn Cook",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "dailequ01",
    "PlayerName": "Quintin Dailey",
    "Year": "1983-1992",
    "Num": 0
  },
  {
    "PlayerId": "rossqu01",
    "PlayerName": "Quinton Ross",
    "Year": "2005-2011",
    "Num": 0
  },
  {
    "PlayerId": "woodsqy01",
    "PlayerName": "Qyntel Woods",
    "Year": "2003-2006",
    "Num": 0
  },
  {
    "PlayerId": "lynamrb01",
    "PlayerName": "R.B. Lynam",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "hunterj01",
    "PlayerName": "R.J. Hunter",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "zagorra01",
    "PlayerName": "Rade Zagorac",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "curcira01",
    "PlayerName": "Radisav Curcic",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "lafrera01",
    "PlayerName": "Raef LaFrentz",
    "Year": "1999-2008",
    "Num": 0
  },
  {
    "PlayerId": "addisra01",
    "PlayerName": "Rafael Addison",
    "Year": "1987-1997",
    "Num": 0
  },
  {
    "PlayerId": "araujra01",
    "PlayerName": "Rafael Araujo",
    "Year": "2005-2007",
    "Num": 0
  },
  {
    "PlayerId": "alstora01",
    "PlayerName": "Rafer Alston",
    "Year": "2000-2010",
    "Num": 0
  },
  {
    "PlayerId": "bellra01",
    "PlayerName": "Raja Bell",
    "Year": "2001-2012",
    "Num": 0
  },
  {
    "PlayerId": "rondora01",
    "PlayerName": "Rajon Rondo",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "chrisra01",
    "PlayerName": "Rakeem Christmas",
    "Year": "2016-2017",
    "Num": 1
  },
  {
    "PlayerId": "beardra01",
    "PlayerName": "Ralph Beard",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "davisra01",
    "PlayerName": "Ralph Davis",
    "Year": "1961-1962",
    "Num": 0
  },
  {
    "PlayerId": "drollra01",
    "PlayerName": "Ralph Drollinger",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "hamilra01",
    "PlayerName": "Ralph Hamilton",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "jacksra01",
    "PlayerName": "Ralph Jackson",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "johnsra01",
    "PlayerName": "Ralph Johnson",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "kaplora01",
    "PlayerName": "Ralph Kaplowitz",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "lewisra01",
    "PlayerName": "Ralph Lewis",
    "Year": "1988-1990",
    "Num": 0
  },
  {
    "PlayerId": "obriera01",
    "PlayerName": "Ralph O'Brien",
    "Year": "1952-1953",
    "Num": 0
  },
  {
    "PlayerId": "ogdenra01",
    "PlayerName": "Ralph Ogden",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "polsora01",
    "PlayerName": "Ralph Polson",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "sampsra02",
    "PlayerName": "Ralph Sampson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "sampsra01",
    "PlayerName": "Ralph Sampson",
    "Year": "1984-1992",
    "Num": 0
  },
  {
    "PlayerId": "siewera01",
    "PlayerName": "Ralph Siewert",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "simpsra01",
    "PlayerName": "Ralph Simpson",
    "Year": "1971-1980",
    "Num": 0
  },
  {
    "PlayerId": "wellsra01",
    "PlayerName": "Ralph Wells",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "gallora01",
    "PlayerName": "Ramon Galloway",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "rivasra01",
    "PlayerName": "Ramon Rivas",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "sessira01",
    "PlayerName": "Ramon Sessions",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "jacksra02",
    "PlayerName": "Randell Jackson",
    "Year": "1999-2000",
    "Num": 0
  },
  {
    "PlayerId": "childra01",
    "PlayerName": "Randolph Childress",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "keysra01",
    "PlayerName": "Randolph Keys",
    "Year": "1989-1996",
    "Num": 0
  },
  {
    "PlayerId": "mahafra01",
    "PlayerName": "Randolph Mahaffey",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "morrira01",
    "PlayerName": "Randolph Morris",
    "Year": "2007-2010",
    "Num": 0
  },
  {
    "PlayerId": "allenra01",
    "PlayerName": "Randy Allen",
    "Year": "1989-1990",
    "Num": 0
  },
  {
    "PlayerId": "breuera01",
    "PlayerName": "Randy Breuer",
    "Year": "1984-1994",
    "Num": 0
  },
  {
    "PlayerId": "brownra02",
    "PlayerName": "Randy Brown",
    "Year": "1992-2003",
    "Num": 0
  },
  {
    "PlayerId": "dentora01",
    "PlayerName": "Randy Denton",
    "Year": "1972-1977",
    "Num": 0
  },
  {
    "PlayerId": "foyera01",
    "PlayerName": "Randy Foye",
    "Year": "2007-2017",
    "Num": 1
  },
  {
    "PlayerId": "holcora01",
    "PlayerName": "Randy Holcomb",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "livinra01",
    "PlayerName": "Randy Livingston",
    "Year": "1997-2007",
    "Num": 0
  },
  {
    "PlayerId": "smithra01",
    "PlayerName": "Randy Smith",
    "Year": "1972-1983",
    "Num": 0
  },
  {
    "PlayerId": "stollra01",
    "PlayerName": "Randy Stoll",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "whitera01",
    "PlayerName": "Randy White",
    "Year": "1990-1994",
    "Num": 0
  },
  {
    "PlayerId": "wittmra01",
    "PlayerName": "Randy Wittman",
    "Year": "1984-1992",
    "Num": 0
  },
  {
    "PlayerId": "woodsra01",
    "PlayerName": "Randy Woods",
    "Year": "1993-1996",
    "Num": 0
  },
  {
    "PlayerId": "mccanra01",
    "PlayerName": "Rashad McCants",
    "Year": "2006-2009",
    "Num": 0
  },
  {
    "PlayerId": "vaughra01",
    "PlayerName": "Rashad Vaughn",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "lewisra02",
    "PlayerName": "Rashard Lewis",
    "Year": "1999-2014",
    "Num": 0
  },
  {
    "PlayerId": "thomara01",
    "PlayerName": "Rashawn Thomas",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "sulaira01",
    "PlayerName": "Rasheed Sulaimon",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wallara01",
    "PlayerName": "Rasheed Wallace",
    "Year": "1996-2013",
    "Num": 0
  },
  {
    "PlayerId": "nestera01",
    "PlayerName": "Rasho Nesterovic",
    "Year": "1999-2010",
    "Num": 0
  },
  {
    "PlayerId": "mahalba01",
    "PlayerName": "Rasid Mahalbasic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "cvetkra01",
    "PlayerName": "Rastko Cvetkovic",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "butlera01",
    "PlayerName": "Rasual Butler",
    "Year": "2003-2016",
    "Num": 0
  },
  {
    "PlayerId": "vardara01",
    "PlayerName": "Ratko Varda",
    "Year": 2002,
    "Num": 0
  },
  {
    "PlayerId": "lopezra01",
    "PlayerName": "Raul Lopez",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "netora01",
    "PlayerName": "Raul Neto",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "marshra01",
    "PlayerName": "Rawle Marshall",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "allenra02",
    "PlayerName": "Ray Allen",
    "Year": "1997-2014",
    "Num": 0
  },
  {
    "PlayerId": "blumera01",
    "PlayerName": "Ray Blume",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "corlera01",
    "PlayerName": "Ray Corley",
    "Year": "1950-1953",
    "Num": 0
  },
  {
    "PlayerId": "ellefra01",
    "PlayerName": "Ray Ellefson",
    "Year": "1949-1951",
    "Num": 0
  },
  {
    "PlayerId": "eppsra01",
    "PlayerName": "Ray Epps",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "felixra01",
    "PlayerName": "Ray Felix",
    "Year": "1954-1962",
    "Num": 0
  },
  {
    "PlayerId": "kukara01",
    "PlayerName": "Ray Kuka",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "lumppra01",
    "PlayerName": "Ray Lumpp",
    "Year": "1949-1953",
    "Num": 0
  },
  {
    "PlayerId": "mccalra01",
    "PlayerName": "Ray McCallum",
    "Year": "2014-2016",
    "Num": 0
  },
  {
    "PlayerId": "owesra01",
    "PlayerName": "Ray Owes",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "radzira01",
    "PlayerName": "Ray Radziszewski",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "ragelra01",
    "PlayerName": "Ray Ragelis",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "ramsera01",
    "PlayerName": "Ray Ramsey",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "scottra01",
    "PlayerName": "Ray Scott",
    "Year": "1962-1972",
    "Num": 0
  },
  {
    "PlayerId": "tolbera01",
    "PlayerName": "Ray Tolbert",
    "Year": "1982-1989",
    "Num": 0
  },
  {
    "PlayerId": "wertira01",
    "PlayerName": "Ray Wertis",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "willira01",
    "PlayerName": "Ray Williams",
    "Year": "1978-1987",
    "Num": 0
  },
  {
    "PlayerId": "brownra01",
    "PlayerName": "Raymond Brown",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "feltora01",
    "PlayerName": "Raymond Felton",
    "Year": "2006-2018",
    "Num": 1
  },
  {
    "PlayerId": "townsra01",
    "PlayerName": "Raymond Townsend",
    "Year": "1979-1982",
    "Num": 0
  },
  {
    "PlayerId": "davisre01",
    "PlayerName": "Red Davis",
    "Year": 1956,
    "Num": 0
  },
  {
    "PlayerId": "dehnere01",
    "PlayerName": "Red Dehnert",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "holzmre01",
    "PlayerName": "Red Holzman",
    "Year": "1949-1954",
    "Num": 0
  },
  {
    "PlayerId": "kerrre01",
    "PlayerName": "Red Kerr",
    "Year": "1955-1966",
    "Num": 0
  },
  {
    "PlayerId": "mihalre01",
    "PlayerName": "Red Mihalik",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "morrire01",
    "PlayerName": "Red Morrison",
    "Year": "1955-1958",
    "Num": 0
  },
  {
    "PlayerId": "owensre01",
    "PlayerName": "Red Owens",
    "Year": "1950-1952",
    "Num": 0
  },
  {
    "PlayerId": "robbire01",
    "PlayerName": "Red Robbins",
    "Year": "1968-1975",
    "Num": 0
  },
  {
    "PlayerId": "rochare01",
    "PlayerName": "Red Rocha",
    "Year": "1948-1957",
    "Num": 0
  },
  {
    "PlayerId": "stroure01",
    "PlayerName": "Red Stroud",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "wallare01",
    "PlayerName": "Red Wallace",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "gainere01",
    "PlayerName": "Reece Gaines",
    "Year": "2004-2006",
    "Num": 0
  },
  {
    "PlayerId": "bullore01",
    "PlayerName": "Reggie Bullock",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "cartere01",
    "PlayerName": "Reggie Carter",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "evansre01",
    "PlayerName": "Reggie Evans",
    "Year": "2003-2015",
    "Num": 0
  },
  {
    "PlayerId": "gearyre01",
    "PlayerName": "Reggie Geary",
    "Year": "1997-1998",
    "Num": 0
  },
  {
    "PlayerId": "hansore01",
    "PlayerName": "Reggie Hanson",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "hardire01",
    "PlayerName": "Reggie Harding",
    "Year": "1964-1968",
    "Num": 0
  },
  {
    "PlayerId": "hearnre01",
    "PlayerName": "Reggie Hearn",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jacksre01",
    "PlayerName": "Reggie Jackson",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "johnsre01",
    "PlayerName": "Reggie Johnson",
    "Year": "1981-1984",
    "Num": 0
  },
  {
    "PlayerId": "jordare01",
    "PlayerName": "Reggie Jordan",
    "Year": "1994-2000",
    "Num": 0
  },
  {
    "PlayerId": "kingre01",
    "PlayerName": "Reggie King",
    "Year": "1980-1985",
    "Num": 0
  },
  {
    "PlayerId": "lacefre01",
    "PlayerName": "Reggie Lacefield",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "lewisre01",
    "PlayerName": "Reggie Lewis",
    "Year": "1988-1993",
    "Num": 0
  },
  {
    "PlayerId": "millere01",
    "PlayerName": "Reggie Miller",
    "Year": "1988-2005",
    "Num": 0
  },
  {
    "PlayerId": "royalre01",
    "PlayerName": "Reggie Royals",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "slatere01",
    "PlayerName": "Reggie Slater",
    "Year": "1995-2003",
    "Num": 0
  },
  {
    "PlayerId": "smithre01",
    "PlayerName": "Reggie Smith",
    "Year": "1993-1994",
    "Num": 0
  },
  {
    "PlayerId": "theusre01",
    "PlayerName": "Reggie Theus",
    "Year": "1979-1991",
    "Num": 0
  },
  {
    "PlayerId": "willire01",
    "PlayerName": "Reggie Williams",
    "Year": "1988-1997",
    "Num": 0
  },
  {
    "PlayerId": "willire02",
    "PlayerName": "Reggie Williams",
    "Year": "2010-2017",
    "Num": 1
  },
  {
    "PlayerId": "yusufre01",
    "PlayerName": "Remi Yusuf",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "seibure01",
    "PlayerName": "Renaldas Seibutis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "balkmre01",
    "PlayerName": "Renaldo Balkman",
    "Year": "2007-2012",
    "Num": 0
  },
  {
    "PlayerId": "majorre01",
    "PlayerName": "Renaldo Major",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "woolrre01",
    "PlayerName": "Renaldo Woolridge",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "chapmre01",
    "PlayerName": "Rex Chapman",
    "Year": "1989-2000",
    "Num": 0
  },
  {
    "PlayerId": "morgare01",
    "PlayerName": "Rex Morgan",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "waltere01",
    "PlayerName": "Rex Walters",
    "Year": "1994-2000",
    "Num": 0
  },
  {
    "PlayerId": "dumasri01",
    "PlayerName": "Rich Dumas",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "eichhdi01",
    "PlayerName": "Rich Eichhorst",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "johnsri01",
    "PlayerName": "Rich Johnson",
    "Year": "1969-1971",
    "Num": 0
  },
  {
    "PlayerId": "jonesri01",
    "PlayerName": "Rich Jones",
    "Year": "1970-1977",
    "Num": 0
  },
  {
    "PlayerId": "kelleri01",
    "PlayerName": "Rich Kelley",
    "Year": "1976-1986",
    "Num": 0
  },
  {
    "PlayerId": "kingri01",
    "PlayerName": "Rich King",
    "Year": "1992-1995",
    "Num": 0
  },
  {
    "PlayerId": "laureri01",
    "PlayerName": "Rich Laurel",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "manniri01",
    "PlayerName": "Rich Manning",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "niemari01",
    "PlayerName": "Rich Niemann",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "peekri01",
    "PlayerName": "Rich Peek",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "rinalri01",
    "PlayerName": "Rich Rinaldi",
    "Year": "1972-1974",
    "Num": 0
  },
  {
    "PlayerId": "yonakri01",
    "PlayerName": "Rich Yonakor",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "anderri01",
    "PlayerName": "Richard Anderson",
    "Year": "1983-1990",
    "Num": 0
  },
  {
    "PlayerId": "clarkri01",
    "PlayerName": "Richard Clark",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "cofferi01",
    "PlayerName": "Richard Coffey",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "dumasri02",
    "PlayerName": "Richard Dumas",
    "Year": "1993-1996",
    "Num": 0
  },
  {
    "PlayerId": "fisheri01",
    "PlayerName": "Richard Fisher",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "hamilri01",
    "PlayerName": "Richard Hamilton",
    "Year": "2000-2013",
    "Num": 0
  },
  {
    "PlayerId": "howelri01",
    "PlayerName": "Richard Howell",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jefferi01",
    "PlayerName": "Richard Jefferson",
    "Year": "2002-2018",
    "Num": 1
  },
  {
    "PlayerId": "mooreri01",
    "PlayerName": "Richard Moore",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "mortori01",
    "PlayerName": "Richard Morton",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "parksri01",
    "PlayerName": "Richard Parks",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "petruri01",
    "PlayerName": "Richard Petruska",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "rellfri01",
    "PlayerName": "Richard Rellford",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "solomri01",
    "PlayerName": "Richard Solomon",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "washiri01",
    "PlayerName": "Richard Washington",
    "Year": "1977-1982",
    "Num": 0
  },
  {
    "PlayerId": "holmeri01",
    "PlayerName": "Richaun Holmes",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "frahmri01",
    "PlayerName": "Richie Frahm",
    "Year": "2004-2008",
    "Num": 0
  },
  {
    "PlayerId": "gueriri01",
    "PlayerName": "Richie Guerin",
    "Year": "1957-1970",
    "Num": 0
  },
  {
    "PlayerId": "niemiri01",
    "PlayerName": "Richie Niemiera",
    "Year": "1949-1950",
    "Num": 0
  },
  {
    "PlayerId": "reganri01",
    "PlayerName": "Richie Regan",
    "Year": "1956-1958",
    "Num": 0
  },
  {
    "PlayerId": "adelmri01",
    "PlayerName": "Rick Adelman",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "barryri01",
    "PlayerName": "Rick Barry",
    "Year": "1966-1980",
    "Num": 0
  },
  {
    "PlayerId": "brunsri01",
    "PlayerName": "Rick Brunson",
    "Year": "1998-2006",
    "Num": 0
  },
  {
    "PlayerId": "callori01",
    "PlayerName": "Rick Calloway",
    "Year": 1991,
    "Num": 0
  },
  {
    "PlayerId": "carliri01",
    "PlayerName": "Rick Carlisle",
    "Year": "1985-1990",
    "Num": 0
  },
  {
    "PlayerId": "darneri01",
    "PlayerName": "Rick Darnell",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "foxri01",
    "PlayerName": "Rick Fox",
    "Year": "1992-2004",
    "Num": 0
  },
  {
    "PlayerId": "hugheri02",
    "PlayerName": "Rick Hughes",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "jacksri01",
    "PlayerName": "Rick Jackson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mahorri01",
    "PlayerName": "Rick Mahorn",
    "Year": "1981-1999",
    "Num": 0
  },
  {
    "PlayerId": "mountri01",
    "PlayerName": "Rick Mount",
    "Year": "1971-1975",
    "Num": 0
  },
  {
    "PlayerId": "roberri01",
    "PlayerName": "Rick Roberson",
    "Year": "1970-1976",
    "Num": 0
  },
  {
    "PlayerId": "robeyri01",
    "PlayerName": "Rick Robey",
    "Year": "1979-1986",
    "Num": 0
  },
  {
    "PlayerId": "weitzri01",
    "PlayerName": "Rick Weitzman",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "wilsori01",
    "PlayerName": "Rick Wilson",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "brownri01",
    "PlayerName": "Rickey Brown",
    "Year": "1981-1985",
    "Num": 0
  },
  {
    "PlayerId": "greenri01",
    "PlayerName": "Rickey Green",
    "Year": "1978-1992",
    "Num": 0
  },
  {
    "PlayerId": "williri01",
    "PlayerName": "Rickey Williams",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "winslri01",
    "PlayerName": "Rickie Winslow",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "berryri01",
    "PlayerName": "Ricky Berry",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "blantri01",
    "PlayerName": "Ricky Blanton",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "davisri01",
    "PlayerName": "Ricky Davis",
    "Year": "1999-2010",
    "Num": 0
  },
  {
    "PlayerId": "graceri01",
    "PlayerName": "Ricky Grace",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "harriri01",
    "PlayerName": "Ricky Harris",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ledori01",
    "PlayerName": "Ricky Ledo",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "marshri01",
    "PlayerName": "Ricky Marsh",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "piercri01",
    "PlayerName": "Ricky Pierce",
    "Year": "1983-1998",
    "Num": 0
  },
  {
    "PlayerId": "rubiori01",
    "PlayerName": "Ricky Rubio",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "sanchri01",
    "PlayerName": "Ricky Sanchez",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "soberri01",
    "PlayerName": "Ricky Sobers",
    "Year": "1976-1986",
    "Num": 0
  },
  {
    "PlayerId": "wilsori02",
    "PlayerName": "Ricky Wilson",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "smitsri01",
    "PlayerName": "Rik Smits",
    "Year": "1989-2000",
    "Num": 0
  },
  {
    "PlayerId": "lochmri01",
    "PlayerName": "Riney Lochmann",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "kurzro01",
    "PlayerName": "Rob Kurz",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "lockro01",
    "PlayerName": "Rob Lock",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "rosero01",
    "PlayerName": "Rob Rose",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "williro02",
    "PlayerName": "Rob Williams",
    "Year": "1983-1984",
    "Num": 0
  },
  {
    "PlayerId": "hummero01",
    "PlayerName": "Robbie Hummel",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "archiro01",
    "PlayerName": "Robert Archibald",
    "Year": "2003-2004",
    "Num": 0
  },
  {
    "PlayerId": "churcro01",
    "PlayerName": "Robert Churchwell",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "covinro01",
    "PlayerName": "Robert Covington",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "hahnro01",
    "PlayerName": "Robert Hahn",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "hitero01",
    "PlayerName": "Robert Hite",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "horryro01",
    "PlayerName": "Robert Horry",
    "Year": "1993-2008",
    "Num": 0
  },
  {
    "PlayerId": "packro01",
    "PlayerName": "Robert Pack",
    "Year": "1992-2004",
    "Num": 0
  },
  {
    "PlayerId": "parisro01",
    "PlayerName": "Robert Parish",
    "Year": "1977-1997",
    "Num": 0
  },
  {
    "PlayerId": "reidro01",
    "PlayerName": "Robert Reid",
    "Year": "1978-1991",
    "Num": 0
  },
  {
    "PlayerId": "sacrero01",
    "PlayerName": "Robert Sacre",
    "Year": "2013-2016",
    "Num": 0
  },
  {
    "PlayerId": "smithro01",
    "PlayerName": "Robert Smith",
    "Year": "1978-1985",
    "Num": 0
  },
  {
    "PlayerId": "swiftro01",
    "PlayerName": "Robert Swift",
    "Year": "2005-2009",
    "Num": 0
  },
  {
    "PlayerId": "traylro01",
    "PlayerName": "Robert Traylor",
    "Year": "1999-2005",
    "Num": 0
  },
  {
    "PlayerId": "upsharo01",
    "PlayerName": "Robert Upshaw",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "werdaro01",
    "PlayerName": "Robert Werdann",
    "Year": "1993-1997",
    "Num": 0
  },
  {
    "PlayerId": "whalero01",
    "PlayerName": "Robert Whaley",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "javtoro01",
    "PlayerName": "Robertas Javtokas",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jonesro01",
    "PlayerName": "Robin Jones",
    "Year": "1977-1978",
    "Num": 0
  },
  {
    "PlayerId": "lopezro01",
    "PlayerName": "Robin Lopez",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "leero02",
    "PlayerName": "Rock Lee",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "derliro01",
    "PlayerName": "Rod Derline",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "fostero01",
    "PlayerName": "Rod Foster",
    "Year": "1984-1986",
    "Num": 0
  },
  {
    "PlayerId": "freemro01",
    "PlayerName": "Rod Freeman",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "higgiro01",
    "PlayerName": "Rod Higgins",
    "Year": "1983-1995",
    "Num": 0
  },
  {
    "PlayerId": "knowlro01",
    "PlayerName": "Rod Knowles",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "stricro02",
    "PlayerName": "Rod Strickland",
    "Year": "1989-2005",
    "Num": 0
  },
  {
    "PlayerId": "thornro01",
    "PlayerName": "Rod Thorn",
    "Year": "1964-1971",
    "Num": 0
  },
  {
    "PlayerId": "mcdonro01",
    "PlayerName": "Roderick McDonald",
    "Year": "1971-1973",
    "Num": 0
  },
  {
    "PlayerId": "buforro01",
    "PlayerName": "Rodney Buford",
    "Year": "2000-2005",
    "Num": 0
  },
  {
    "PlayerId": "carnero01",
    "PlayerName": "Rodney Carney",
    "Year": "2007-2011",
    "Num": 0
  },
  {
    "PlayerId": "greenro01",
    "PlayerName": "Rodney Green",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hoodro01",
    "PlayerName": "Rodney Hood",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "mccraro01",
    "PlayerName": "Rodney McCray",
    "Year": "1984-1993",
    "Num": 0
  },
  {
    "PlayerId": "mcgruro01",
    "PlayerName": "Rodney McGruder",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "monroro01",
    "PlayerName": "Rodney Monroe",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "purviro01",
    "PlayerName": "Rodney Purvis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "rogerro01",
    "PlayerName": "Rodney Rogers",
    "Year": "1994-2005",
    "Num": 0
  },
  {
    "PlayerId": "stuckro01",
    "PlayerName": "Rodney Stuckey",
    "Year": "2008-2017",
    "Num": 1
  },
  {
    "PlayerId": "whitero02",
    "PlayerName": "Rodney White",
    "Year": "2002-2005",
    "Num": 0
  },
  {
    "PlayerId": "williro03",
    "PlayerName": "Rodney Williams",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "rhodero01",
    "PlayerName": "Rodrick Rhodes",
    "Year": "1998-2000",
    "Num": 0
  },
  {
    "PlayerId": "beaubro01",
    "PlayerName": "Rodrigue Beaubois",
    "Year": "2010-2013",
    "Num": 0
  },
  {
    "PlayerId": "brownro02",
    "PlayerName": "Roger Brown",
    "Year": "1973-1980",
    "Num": 0
  },
  {
    "PlayerId": "brownro01",
    "PlayerName": "Roger Brown",
    "Year": "1968-1975",
    "Num": 0
  },
  {
    "PlayerId": "burkmro01",
    "PlayerName": "Roger Burkman",
    "Year": 1982,
    "Num": 0
  },
  {
    "PlayerId": "jorgero01",
    "PlayerName": "Roger Jorgensen",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "masonro01",
    "PlayerName": "Roger Mason",
    "Year": "2003-2014",
    "Num": 0
  },
  {
    "PlayerId": "pheglro01",
    "PlayerName": "Roger Phegley",
    "Year": "1979-1984",
    "Num": 0
  },
  {
    "PlayerId": "powelro01",
    "PlayerName": "Roger Powell",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "schurro01",
    "PlayerName": "Roger Schurig",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "stricro01",
    "PlayerName": "Roger Strickland",
    "Year": 1964,
    "Num": 0
  },
  {
    "PlayerId": "ukicro01",
    "PlayerName": "Roko Ukic",
    "Year": "2009-2010",
    "Num": 0
  },
  {
    "PlayerId": "westro01",
    "PlayerName": "Roland West",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "blackro01",
    "PlayerName": "Rolando Blackman",
    "Year": "1982-1994",
    "Num": 0
  },
  {
    "PlayerId": "ferrero01",
    "PlayerName": "Rolando Ferreira",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "hansro01",
    "PlayerName": "Rollen Hans",
    "Year": "1954-1955",
    "Num": 0
  },
  {
    "PlayerId": "seltzro01",
    "PlayerName": "Rollie Seltz",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "osbyro01",
    "PlayerName": "Romero Osby",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "anderro02",
    "PlayerName": "Ron Anderson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "anderro01",
    "PlayerName": "Ron Anderson",
    "Year": "1985-1994",
    "Num": 0
  },
  {
    "PlayerId": "bakerro01",
    "PlayerName": "Ron Baker",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "behagro01",
    "PlayerName": "Ron Behagen",
    "Year": "1974-1980",
    "Num": 0
  },
  {
    "PlayerId": "bonharo01",
    "PlayerName": "Ron Bonham",
    "Year": "1965-1968",
    "Num": 0
  },
  {
    "PlayerId": "boonero01",
    "PlayerName": "Ron Boone",
    "Year": "1969-1981",
    "Num": 0
  },
  {
    "PlayerId": "brewero01",
    "PlayerName": "Ron Brewer",
    "Year": "1979-1986",
    "Num": 0
  },
  {
    "PlayerId": "cartero01",
    "PlayerName": "Ron Carter",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "cavenro01",
    "PlayerName": "Ron Cavenall",
    "Year": "1985-1989",
    "Num": 0
  },
  {
    "PlayerId": "creviro01",
    "PlayerName": "Ron Crevier",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "davisro01",
    "PlayerName": "Ron Davis",
    "Year": "1977-1982",
    "Num": 0
  },
  {
    "PlayerId": "dorsero01",
    "PlayerName": "Ron Dorsey",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "feierro01",
    "PlayerName": "Ron Feiereisel",
    "Year": 1956,
    "Num": 0
  },
  {
    "PlayerId": "filipro01",
    "PlayerName": "Ron Filipek",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "grandro01",
    "PlayerName": "Ron Grandison",
    "Year": "1989-1996",
    "Num": 0
  },
  {
    "PlayerId": "harpero01",
    "PlayerName": "Ron Harper",
    "Year": "1987-2001",
    "Num": 0
  },
  {
    "PlayerId": "hornro01",
    "PlayerName": "Ron Horn",
    "Year": "1962-1968",
    "Num": 0
  },
  {
    "PlayerId": "howarro01",
    "PlayerName": "Ron Howard",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "johnsro01",
    "PlayerName": "Ron Johnson",
    "Year": 1961,
    "Num": 0
  },
  {
    "PlayerId": "kingro01",
    "PlayerName": "Ron King",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "knighro01",
    "PlayerName": "Ron Knight",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "leero01",
    "PlayerName": "Ron Lee",
    "Year": "1977-1982",
    "Num": 0
  },
  {
    "PlayerId": "livinro01",
    "PlayerName": "Ron Livingstone",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "mercero01",
    "PlayerName": "Ron Mercer",
    "Year": "1998-2005",
    "Num": 0
  },
  {
    "PlayerId": "moorero01",
    "PlayerName": "Ron Moore",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "nelsoro01",
    "PlayerName": "Ron Nelson",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "perryro01",
    "PlayerName": "Ron Perry",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "reedro01",
    "PlayerName": "Ron Reed",
    "Year": "1966-1967",
    "Num": 0
  },
  {
    "PlayerId": "rileyro01",
    "PlayerName": "Ron Riley",
    "Year": "1973-1976",
    "Num": 0
  },
  {
    "PlayerId": "rowanro01",
    "PlayerName": "Ron Rowan",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "sanforo01",
    "PlayerName": "Ron Sanford",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "shavlro01",
    "PlayerName": "Ron Shavlik",
    "Year": "1957-1958",
    "Num": 0
  },
  {
    "PlayerId": "sobiero01",
    "PlayerName": "Ron Sobie",
    "Year": "1957-1960",
    "Num": 0
  },
  {
    "PlayerId": "wattsro01",
    "PlayerName": "Ron Watts",
    "Year": "1966-1967",
    "Num": 0
  },
  {
    "PlayerId": "widbyro01",
    "PlayerName": "Ron Widby",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "williro01",
    "PlayerName": "Ron Williams",
    "Year": "1969-1976",
    "Num": 0
  },
  {
    "PlayerId": "duprero01",
    "PlayerName": "Ronald Dupree",
    "Year": "2004-2011",
    "Num": 0
  },
  {
    "PlayerId": "franzro01",
    "PlayerName": "Ronald Franz",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "kozliro01",
    "PlayerName": "Ronald Kozlicki",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "murraro01",
    "PlayerName": "Ronald Murray",
    "Year": "2003-2010",
    "Num": 0
  },
  {
    "PlayerId": "roberro01",
    "PlayerName": "Ronald Roberts",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "tayloro01",
    "PlayerName": "Ronald Taylor",
    "Year": "1970-1972",
    "Num": 0
  },
  {
    "PlayerId": "thomaro01",
    "PlayerName": "Ronald Thomas",
    "Year": "1973-1976",
    "Num": 0
  },
  {
    "PlayerId": "holliro01",
    "PlayerName": "Rondae Hollis-Jefferson",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "brewero02",
    "PlayerName": "Ronnie Brewer",
    "Year": "2007-2014",
    "Num": 0
  },
  {
    "PlayerId": "lestero01",
    "PlayerName": "Ronnie Lester",
    "Year": "1981-1986",
    "Num": 0
  },
  {
    "PlayerId": "macgiro01",
    "PlayerName": "Ronnie MacGilvray",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "murphro01",
    "PlayerName": "Ronnie Murphy",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "pricero01",
    "PlayerName": "Ronnie Price",
    "Year": "2006-2017",
    "Num": 1
  },
  {
    "PlayerId": "robinro01",
    "PlayerName": "Ronnie Robinson",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "valenro01",
    "PlayerName": "Ronnie Valentine",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "turiaro01",
    "PlayerName": "Ronny Turiaf",
    "Year": "2006-2015",
    "Num": 0
  },
  {
    "PlayerId": "seikaro01",
    "PlayerName": "Rony Seikaly",
    "Year": "1989-1999",
    "Num": 0
  },
  {
    "PlayerId": "sparrro01",
    "PlayerName": "Rory Sparrow",
    "Year": "1981-1992",
    "Num": 0
  },
  {
    "PlayerId": "whitero01",
    "PlayerName": "Rory White",
    "Year": "1983-1987",
    "Num": 0
  },
  {
    "PlayerId": "smithro02",
    "PlayerName": "Roscoe Smith",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mcleoro01",
    "PlayerName": "Roshown McLeod",
    "Year": "1999-2001",
    "Num": 0
  },
  {
    "PlayerId": "garrero01",
    "PlayerName": "Rowland Garrett",
    "Year": "1973-1977",
    "Num": 0
  },
  {
    "PlayerId": "ebronro01",
    "PlayerName": "Roy Ebron",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "hamilro01",
    "PlayerName": "Roy Hamilton",
    "Year": "1980-1981",
    "Num": 0
  },
  {
    "PlayerId": "hibbero01",
    "PlayerName": "Roy Hibbert",
    "Year": "2009-2017",
    "Num": 1
  },
  {
    "PlayerId": "hinsoro01",
    "PlayerName": "Roy Hinson",
    "Year": "1984-1991",
    "Num": 0
  },
  {
    "PlayerId": "hurlero01",
    "PlayerName": "Roy Hurley",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "marblro01",
    "PlayerName": "Roy Marble",
    "Year": "1990-1994",
    "Num": 0
  },
  {
    "PlayerId": "mcpipro01",
    "PlayerName": "Roy McPipe",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "pughro01",
    "PlayerName": "Roy Pugh",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "rogerro02",
    "PlayerName": "Roy Rogers",
    "Year": "1997-2000",
    "Num": 0
  },
  {
    "PlayerId": "tarplro01",
    "PlayerName": "Roy Tarpley",
    "Year": "1987-1995",
    "Num": 0
  },
  {
    "PlayerId": "iveyro01",
    "PlayerName": "Royal Ivey",
    "Year": "2005-2014",
    "Num": 0
  },
  {
    "PlayerId": "onealro01",
    "PlayerName": "Royce O'Neale",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "whitero03",
    "PlayerName": "Royce White",
    "Year": 2014,
    "Num": 1
  },
  {
    "PlayerId": "boumtru01",
    "PlayerName": "Ruben Boumtje-Boumtje",
    "Year": "2002-2004",
    "Num": 0
  },
  {
    "PlayerId": "garceru01",
    "PlayerName": "Ruben Garces",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "nembhru01",
    "PlayerName": "Ruben Nembhard",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "patteru01",
    "PlayerName": "Ruben Patterson",
    "Year": "1999-2008",
    "Num": 0
  },
  {
    "PlayerId": "wolkoru01",
    "PlayerName": "Ruben Wolkowyski",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "russeru01",
    "PlayerName": "Rubin Russell",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "fernaru01",
    "PlayerName": "Rudy Fernandez",
    "Year": "2009-2012",
    "Num": 0
  },
  {
    "PlayerId": "gayru01",
    "PlayerName": "Rudy Gay",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "goberru01",
    "PlayerName": "Rudy Gobert",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "hackeru01",
    "PlayerName": "Rudy Hackett",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "larusru01",
    "PlayerName": "Rudy LaRusso",
    "Year": "1960-1969",
    "Num": 0
  },
  {
    "PlayerId": "macklru01",
    "PlayerName": "Rudy Macklin",
    "Year": "1982-1984",
    "Num": 0
  },
  {
    "PlayerId": "tomjaru01",
    "PlayerName": "Rudy Tomjanovich",
    "Year": "1971-1981",
    "Num": 0
  },
  {
    "PlayerId": "whiteru01",
    "PlayerName": "Rudy White",
    "Year": "1976-1981",
    "Num": 0
  },
  {
    "PlayerId": "robinru01",
    "PlayerName": "Rumeal Robinson",
    "Year": "1991-1997",
    "Num": 0
  },
  {
    "PlayerId": "leeru01",
    "PlayerName": "Russ Lee",
    "Year": "1973-1975",
    "Num": 0
  },
  {
    "PlayerId": "schoeru01",
    "PlayerName": "Russ Schoene",
    "Year": "1983-1989",
    "Num": 0
  },
  {
    "PlayerId": "smithru01",
    "PlayerName": "Russ Smith",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "critcru01",
    "PlayerName": "Russell Critchfield",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "crossru01",
    "PlayerName": "Russell Cross",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "westbru01",
    "PlayerName": "Russell Westbrook",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "larueru01",
    "PlayerName": "Rusty LaRue",
    "Year": "1998-2004",
    "Num": 0
  },
  {
    "PlayerId": "anderry01",
    "PlayerName": "Ryan Anderson",
    "Year": "2009-2018",
    "Num": 1
  },
  {
    "PlayerId": "arcidry01",
    "PlayerName": "Ryan Arcidiacono",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "boatrry01",
    "PlayerName": "Ryan Boatright",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bowenry01",
    "PlayerName": "Ryan Bowen",
    "Year": "2000-2010",
    "Num": 0
  },
  {
    "PlayerId": "evansry01",
    "PlayerName": "Ryan Evans",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gomesry01",
    "PlayerName": "Ryan Gomes",
    "Year": "2006-2014",
    "Num": 0
  },
  {
    "PlayerId": "holliry01",
    "PlayerName": "Ryan Hollins",
    "Year": "2007-2016",
    "Num": 0
  },
  {
    "PlayerId": "humphry01",
    "PlayerName": "Ryan Humphrey",
    "Year": "2003-2005",
    "Num": 0
  },
  {
    "PlayerId": "kellyry01",
    "PlayerName": "Ryan Kelly",
    "Year": "2014-2017",
    "Num": 1
  },
  {
    "PlayerId": "lorthry01",
    "PlayerName": "Ryan Lorthridge",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "reidry01",
    "PlayerName": "Ryan Reid",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "richary01",
    "PlayerName": "Ryan Richards",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "roberry01",
    "PlayerName": "Ryan Robertson",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "stackry01",
    "PlayerName": "Ryan Stack",
    "Year": "1999-2000",
    "Num": 0
  },
  {
    "PlayerId": "thompry01",
    "PlayerName": "Ryan Thompson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mejrisa01",
    "PlayerName": "Salah Mejri",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "stoudsa01",
    "PlayerName": "Salim Stoudamire",
    "Year": "2006-2008",
    "Num": 0
  },
  {
    "PlayerId": "bowiesa01",
    "PlayerName": "Sam Bowie",
    "Year": "1985-1995",
    "Num": 0
  },
  {
    "PlayerId": "cashsa01",
    "PlayerName": "Sam Cash",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "cassesa01",
    "PlayerName": "Sam Cassell",
    "Year": "1994-2008",
    "Num": 0
  },
  {
    "PlayerId": "dekkesa01",
    "PlayerName": "Sam Dekker",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "jacobsa01",
    "PlayerName": "Sam Jacobson",
    "Year": "1999-2001",
    "Num": 0
  },
  {
    "PlayerId": "jonessa01",
    "PlayerName": "Sam Jones",
    "Year": "1958-1969",
    "Num": 0
  },
  {
    "PlayerId": "laceysa01",
    "PlayerName": "Sam Lacey",
    "Year": "1971-1983",
    "Num": 0
  },
  {
    "PlayerId": "macksa01",
    "PlayerName": "Sam Mack",
    "Year": "1993-2002",
    "Num": 0
  },
  {
    "PlayerId": "mitchsa01",
    "PlayerName": "Sam Mitchell",
    "Year": "1990-2002",
    "Num": 0
  },
  {
    "PlayerId": "pellosa01",
    "PlayerName": "Sam Pellom",
    "Year": "1980-1983",
    "Num": 0
  },
  {
    "PlayerId": "perkisa01",
    "PlayerName": "Sam Perkins",
    "Year": "1985-2001",
    "Num": 0
  },
  {
    "PlayerId": "ranzisa01",
    "PlayerName": "Sam Ranzino",
    "Year": 1952,
    "Num": 0
  },
  {
    "PlayerId": "sibersa01",
    "PlayerName": "Sam Sibert",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "smithsa01",
    "PlayerName": "Sam Smith",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "smithsa02",
    "PlayerName": "Sam Smith",
    "Year": "1979-1980",
    "Num": 0
  },
  {
    "PlayerId": "stithsa01",
    "PlayerName": "Sam Stith",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "thompsa01",
    "PlayerName": "Sam Thompson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "vincesa01",
    "PlayerName": "Sam Vincent",
    "Year": "1986-1992",
    "Num": 0
  },
  {
    "PlayerId": "willisa02",
    "PlayerName": "Sam Williams",
    "Year": "1982-1985",
    "Num": 0
  },
  {
    "PlayerId": "willisa01",
    "PlayerName": "Sam Williams",
    "Year": "1969-1970",
    "Num": 0
  },
  {
    "PlayerId": "worthsa01",
    "PlayerName": "Sam Worthen",
    "Year": "1981-1982",
    "Num": 0
  },
  {
    "PlayerId": "youngsa01",
    "PlayerName": "Sam Young",
    "Year": "2010-2013",
    "Num": 0
  },
  {
    "PlayerId": "walkesa01",
    "PlayerName": "Samaki Walker",
    "Year": "1997-2006",
    "Num": 0
  },
  {
    "PlayerId": "samuesa01",
    "PlayerName": "Samardo Samuels",
    "Year": "2011-2013",
    "Num": 0
  },
  {
    "PlayerId": "cartesa01",
    "PlayerName": "Sampson Carter",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "dalemsa01",
    "PlayerName": "Samuel Dalembert",
    "Year": "2002-2015",
    "Num": 0
  },
  {
    "PlayerId": "littlsa01",
    "PlayerName": "Samuel Little",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "robinsa01",
    "PlayerName": "Samuel Robinson",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "wattssa01",
    "PlayerName": "Samuel Watts",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "becirsa01",
    "PlayerName": "Sani Becirovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jasiksa01",
    "PlayerName": "Sarunas Jasikevicius",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "marcisa01",
    "PlayerName": "Sarunas Marciulionis",
    "Year": "1990-1997",
    "Num": 0
  },
  {
    "PlayerId": "danilsa01",
    "PlayerName": "Sasha Danilovic",
    "Year": "1996-1997",
    "Num": 0
  },
  {
    "PlayerId": "kaunsa01",
    "PlayerName": "Sasha Kaun",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "pavloal01",
    "PlayerName": "Sasha Pavlovic",
    "Year": "2004-2013",
    "Num": 0
  },
  {
    "PlayerId": "vujacsa01",
    "PlayerName": "Sasha Vujacic",
    "Year": "2005-2017",
    "Num": 1
  },
  {
    "PlayerId": "singhsa01",
    "PlayerName": "Satnam Singh",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mariasa01",
    "PlayerName": "Saul Mariaschin",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "jardisc01",
    "PlayerName": "Scoop Jardine",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mccrasc01",
    "PlayerName": "Scooter McCray",
    "Year": "1984-1987",
    "Num": 0
  },
  {
    "PlayerId": "pollasc01",
    "PlayerName": "Scot Pollard",
    "Year": "1998-2008",
    "Num": 0
  },
  {
    "PlayerId": "brooksc01",
    "PlayerName": "Scott Brooks",
    "Year": "1989-1998",
    "Num": 0
  },
  {
    "PlayerId": "burresc01",
    "PlayerName": "Scott Burrell",
    "Year": "1994-2001",
    "Num": 0
  },
  {
    "PlayerId": "englisc01",
    "PlayerName": "Scott English",
    "Year": "1973-1975",
    "Num": 0
  },
  {
    "PlayerId": "haffnsc01",
    "PlayerName": "Scott Haffner",
    "Year": "1990-1991",
    "Num": 0
  },
  {
    "PlayerId": "haskisc01",
    "PlayerName": "Scott Haskin",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "hastisc01",
    "PlayerName": "Scott Hastings",
    "Year": "1983-1993",
    "Num": 0
  },
  {
    "PlayerId": "lloydsc01",
    "PlayerName": "Scott Lloyd",
    "Year": "1977-1983",
    "Num": 0
  },
  {
    "PlayerId": "machasc01",
    "PlayerName": "Scott Machado",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "maysc01",
    "PlayerName": "Scott May",
    "Year": "1977-1983",
    "Num": 0
  },
  {
    "PlayerId": "meentsc01",
    "PlayerName": "Scott Meents",
    "Year": "1990-1991",
    "Num": 0
  },
  {
    "PlayerId": "padgesc01",
    "PlayerName": "Scott Padgett",
    "Year": "2000-2007",
    "Num": 0
  },
  {
    "PlayerId": "rothsc01",
    "PlayerName": "Scott Roth",
    "Year": "1988-1990",
    "Num": 0
  },
  {
    "PlayerId": "simssc01",
    "PlayerName": "Scott Sims",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "skilesc01",
    "PlayerName": "Scott Skiles",
    "Year": "1987-1996",
    "Num": 0
  },
  {
    "PlayerId": "suggssc01",
    "PlayerName": "Scott Suggs",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wedmasc01",
    "PlayerName": "Scott Wedman",
    "Year": "1975-1987",
    "Num": 0
  },
  {
    "PlayerId": "willisc01",
    "PlayerName": "Scott Williams",
    "Year": "1991-2005",
    "Num": 0
  },
  {
    "PlayerId": "woodsc01",
    "PlayerName": "Scott Wood",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "pippesc01",
    "PlayerName": "Scottie Pippen",
    "Year": "1988-2004",
    "Num": 0
  },
  {
    "PlayerId": "wilbesc01",
    "PlayerName": "Scottie Wilbekin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hopsosc01",
    "PlayerName": "Scotty Hopson",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "colsose01",
    "PlayerName": "Sean Colson",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "elliose01",
    "PlayerName": "Sean Elliott",
    "Year": "1990-2001",
    "Num": 0
  },
  {
    "PlayerId": "greense01",
    "PlayerName": "Sean Green",
    "Year": "1992-1994",
    "Num": 0
  },
  {
    "PlayerId": "higgise01",
    "PlayerName": "Sean Higgins",
    "Year": "1991-1998",
    "Num": 0
  },
  {
    "PlayerId": "kilpase01",
    "PlayerName": "Sean Kilpatrick",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "lamplse01",
    "PlayerName": "Sean Lampley",
    "Year": "2003-2004",
    "Num": 0
  },
  {
    "PlayerId": "marksse01",
    "PlayerName": "Sean Marks",
    "Year": "1999-2011",
    "Num": 0
  },
  {
    "PlayerId": "mayse01",
    "PlayerName": "Sean May",
    "Year": "2006-2010",
    "Num": 0
  },
  {
    "PlayerId": "rooksse01",
    "PlayerName": "Sean Rooks",
    "Year": "1993-2004",
    "Num": 0
  },
  {
    "PlayerId": "singlse01",
    "PlayerName": "Sean Singletary",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "willise01",
    "PlayerName": "Sean Williams",
    "Year": "2008-2012",
    "Num": 0
  },
  {
    "PlayerId": "telfase01",
    "PlayerName": "Sebastian Telfair",
    "Year": "2005-2015",
    "Num": 0
  },
  {
    "PlayerId": "threase01",
    "PlayerName": "Sedale Threatt",
    "Year": "1984-1997",
    "Num": 0
  },
  {
    "PlayerId": "toneyse01",
    "PlayerName": "Sedric Toney",
    "Year": "1986-1994",
    "Num": 0
  },
  {
    "PlayerId": "chrisse01",
    "PlayerName": "Semaj Christon",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "ojelese01",
    "PlayerName": "Semi Ojeleye",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "erdense01",
    "PlayerName": "Semih Erden",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "ibakase01",
    "PlayerName": "Serge Ibaka",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "bazarse01",
    "PlayerName": "Sergei Bazarevich",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "karause01",
    "PlayerName": "Sergei Karaulov",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lishcse01",
    "PlayerName": "Sergei Lishouk",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "moniase01",
    "PlayerName": "Sergei Monia",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "karasse01",
    "PlayerName": "Sergey Karasev",
    "Year": "2014-2016",
    "Num": 0
  },
  {
    "PlayerId": "llullse01",
    "PlayerName": "Sergio Llull",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "rodrise01",
    "PlayerName": "Sergio Rodriguez",
    "Year": "2007-2017",
    "Num": 1
  },
  {
    "PlayerId": "gladyse01",
    "PlayerName": "Sergiy Gladyr",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "curryse01",
    "PlayerName": "Seth Curry",
    "Year": "2014-2017",
    "Num": 1
  },
  {
    "PlayerId": "muhamsh01",
    "PlayerName": "Shabazz Muhammad",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "napiesh01",
    "PlayerName": "Shabazz Napier",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "halimsh01",
    "PlayerName": "Shaler Halimon",
    "Year": "1969-1973",
    "Num": 0
  },
  {
    "PlayerId": "willish01",
    "PlayerName": "Shammond Williams",
    "Year": "1999-2007",
    "Num": 0
  },
  {
    "PlayerId": "andersh01",
    "PlayerName": "Shandon Anderson",
    "Year": "1997-2006",
    "Num": 0
  },
  {
    "PlayerId": "battish01",
    "PlayerName": "Shane Battier",
    "Year": "2002-2014",
    "Num": 0
  },
  {
    "PlayerId": "edwarsh01",
    "PlayerName": "Shane Edwards",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "healsh01",
    "PlayerName": "Shane Heal",
    "Year": "1997-2004",
    "Num": 0
  },
  {
    "PlayerId": "larkish01",
    "PlayerName": "Shane Larkin",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "lawalsh01",
    "PlayerName": "Shane Lawal",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "brownsh01",
    "PlayerName": "Shannon Brown",
    "Year": "2007-2015",
    "Num": 0
  },
  {
    "PlayerId": "scottsh02",
    "PlayerName": "Shannon Scott",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "onealsh01",
    "PlayerName": "Shaquille O'Neal",
    "Year": "1993-2011",
    "Num": 0
  },
  {
    "PlayerId": "abdursh01",
    "PlayerName": "Shareef Abdur-Rahim",
    "Year": "1997-2008",
    "Num": 0
  },
  {
    "PlayerId": "wrighsh01",
    "PlayerName": "Sharone Wright",
    "Year": "1995-1998",
    "Num": 0
  },
  {
    "PlayerId": "fordsh02",
    "PlayerName": "Sharrod Ford",
    "Year": 2006,
    "Num": 0
  },
  {
    "PlayerId": "livinsh01",
    "PlayerName": "Shaun Livingston",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "randosh01",
    "PlayerName": "Shavlik Randolph",
    "Year": "2006-2015",
    "Num": 0
  },
  {
    "PlayerId": "bradlsh01",
    "PlayerName": "Shawn Bradley",
    "Year": "1994-2005",
    "Num": 0
  },
  {
    "PlayerId": "dawsosh01",
    "PlayerName": "Shawn Dawson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "jonessh02",
    "PlayerName": "Shawn Jones",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "kempsh01",
    "PlayerName": "Shawn Kemp",
    "Year": "1990-2003",
    "Num": 0
  },
  {
    "PlayerId": "longsh01",
    "PlayerName": "Shawn Long",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "mariosh01",
    "PlayerName": "Shawn Marion",
    "Year": "2000-2015",
    "Num": 0
  },
  {
    "PlayerId": "respesh01",
    "PlayerName": "Shawn Respert",
    "Year": "1996-1999",
    "Num": 0
  },
  {
    "PlayerId": "willish03",
    "PlayerName": "Shawne Williams",
    "Year": "2007-2015",
    "Num": 0
  },
  {
    "PlayerId": "scottsh01",
    "PlayerName": "Shawnelle Scott",
    "Year": "1997-2002",
    "Num": 0
  },
  {
    "PlayerId": "whittsh01",
    "PlayerName": "Shayne Whittington",
    "Year": "2015-2016",
    "Num": 0
  },
  {
    "PlayerId": "sealssh01",
    "PlayerName": "Shea Seals",
    "Year": 1998,
    "Num": 0
  },
  {
    "PlayerId": "willish02",
    "PlayerName": "Shelden Williams",
    "Year": "2007-2012",
    "Num": 0
  },
  {
    "PlayerId": "mcclesh01",
    "PlayerName": "Sheldon Mac",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "mcmilsh01",
    "PlayerName": "Shellie McMillon",
    "Year": "1959-1962",
    "Num": 0
  },
  {
    "PlayerId": "jonessh01",
    "PlayerName": "Shelton Jones",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "macksh01",
    "PlayerName": "Shelvin Mack",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "fordsh01",
    "PlayerName": "Sherell Ford",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "douglsh01",
    "PlayerName": "Sherman Douglas",
    "Year": "1990-2001",
    "Num": 0
  },
  {
    "PlayerId": "collish01",
    "PlayerName": "Sherron Collins",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "raikesh01",
    "PlayerName": "Sherwin Raiken",
    "Year": 1953,
    "Num": 0
  },
  {
    "PlayerId": "greensi01",
    "PlayerName": "Si Green",
    "Year": "1957-1966",
    "Num": 0
  },
  {
    "PlayerId": "catlesi01",
    "PlayerName": "Sid Catlett",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "tanensi01",
    "PlayerName": "Sid Tanenbaum",
    "Year": "1948-1949",
    "Num": 0
  },
  {
    "PlayerId": "greensi02",
    "PlayerName": "Sidney Green",
    "Year": "1984-1993",
    "Num": 0
  },
  {
    "PlayerId": "lowesi01",
    "PlayerName": "Sidney Lowe",
    "Year": "1984-1990",
    "Num": 0
  },
  {
    "PlayerId": "moncrsi01",
    "PlayerName": "Sidney Moncrief",
    "Year": "1980-1991",
    "Num": 0
  },
  {
    "PlayerId": "wickssi01",
    "PlayerName": "Sidney Wicks",
    "Year": "1972-1981",
    "Num": 0
  },
  {
    "PlayerId": "bhullsi01",
    "PlayerName": "Sim Bhullar",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "hillsi01",
    "PlayerName": "Simmie Hill",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "thornsi01",
    "PlayerName": "Sindarius Thornwell",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "pointsi01",
    "PlayerName": "Sir'Dominic Pointer",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "labissk01",
    "PlayerName": "Skal Labissiere",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "henrysk01",
    "PlayerName": "Skeeter Henry",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "swiftsk01",
    "PlayerName": "Skeeter Swift",
    "Year": "1970-1974",
    "Num": 0
  },
  {
    "PlayerId": "harlisk01",
    "PlayerName": "Skip Harlicka",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "thoresk01",
    "PlayerName": "Skip Thoren",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "wisesk01",
    "PlayerName": "Skip Wise",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "whitask01",
    "PlayerName": "Skippy Whitaker",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "martisl01",
    "PlayerName": "Slater Martin",
    "Year": "1950-1960",
    "Num": 0
  },
  {
    "PlayerId": "vranesl01",
    "PlayerName": "Slavko Vranes",
    "Year": 2004,
    "Num": 0
  },
  {
    "PlayerId": "floydsl01",
    "PlayerName": "Sleepy Floyd",
    "Year": "1983-1995",
    "Num": 0
  },
  {
    "PlayerId": "leonasl01",
    "PlayerName": "Slick Leonard",
    "Year": "1957-1963",
    "Num": 0
  },
  {
    "PlayerId": "wattssl01",
    "PlayerName": "Slick Watts",
    "Year": "1974-1979",
    "Num": 0
  },
  {
    "PlayerId": "willisl01",
    "PlayerName": "Sly Williams",
    "Year": "1980-1986",
    "Num": 0
  },
  {
    "PlayerId": "parkesm01",
    "PlayerName": "Smush Parker",
    "Year": "2003-2008",
    "Num": 0
  },
  {
    "PlayerId": "schorso01",
    "PlayerName": "Sofoklis Schortsanitis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "alabiso01",
    "PlayerName": "Solomon Alabi",
    "Year": "2011-2012",
    "Num": 0
  },
  {
    "PlayerId": "hillso01",
    "PlayerName": "Solomon Hill",
    "Year": "2014-2017",
    "Num": 1
  },
  {
    "PlayerId": "jonesso01",
    "PlayerName": "Solomon Jones",
    "Year": "2007-2014",
    "Num": 0
  },
  {
    "PlayerId": "doveso01",
    "PlayerName": "Sonny Dove",
    "Year": "1968-1972",
    "Num": 0
  },
  {
    "PlayerId": "hertzso01",
    "PlayerName": "Sonny Hertzberg",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "parkeso01",
    "PlayerName": "Sonny Parker",
    "Year": "1977-1982",
    "Num": 0
  },
  {
    "PlayerId": "weemsso01",
    "PlayerName": "Sonny Weems",
    "Year": "2009-2016",
    "Num": 0
  },
  {
    "PlayerId": "samakso01",
    "PlayerName": "Soumaila Samake",
    "Year": "2001-2003",
    "Num": 0
  },
  {
    "PlayerId": "claxtsp01",
    "PlayerName": "Speedy Claxton",
    "Year": "2002-2009",
    "Num": 0
  },
  {
    "PlayerId": "dinwisp01",
    "PlayerName": "Spencer Dinwiddie",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "hawessp01",
    "PlayerName": "Spencer Hawes",
    "Year": "2008-2017",
    "Num": 1
  },
  {
    "PlayerId": "haywosp01",
    "PlayerName": "Spencer Haywood",
    "Year": "1970-1983",
    "Num": 0
  },
  {
    "PlayerId": "bennesp01",
    "PlayerName": "Spider Bennett",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "webbsp01",
    "PlayerName": "Spud Webb",
    "Year": "1986-1998",
    "Num": 0
  },
  {
    "PlayerId": "arcenst01",
    "PlayerName": "Stacey Arceneaux",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "augmost01",
    "PlayerName": "Stacey Augmon",
    "Year": "1992-2006",
    "Num": 0
  },
  {
    "PlayerId": "kingst01",
    "PlayerName": "Stacey King",
    "Year": "1990-1997",
    "Num": 0
  },
  {
    "PlayerId": "brownst01",
    "PlayerName": "Stan Brown",
    "Year": "1948-1952",
    "Num": 0
  },
  {
    "PlayerId": "kimbrst01",
    "PlayerName": "Stan Kimbrough",
    "Year": "1990-1993",
    "Num": 0
  },
  {
    "PlayerId": "lovest01",
    "PlayerName": "Stan Love",
    "Year": "1972-1975",
    "Num": 0
  },
  {
    "PlayerId": "mckenst01",
    "PlayerName": "Stan McKenzie",
    "Year": "1968-1974",
    "Num": 0
  },
  {
    "PlayerId": "miasest01",
    "PlayerName": "Stan Miasek",
    "Year": "1947-1953",
    "Num": 0
  },
  {
    "PlayerId": "noszkst01",
    "PlayerName": "Stan Noszka",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "patrist01",
    "PlayerName": "Stan Patrick",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "pietkst01",
    "PlayerName": "Stan Pietkiewicz",
    "Year": "1979-1981",
    "Num": 0
  },
  {
    "PlayerId": "stutzst01",
    "PlayerName": "Stan Stutz",
    "Year": "1947-1949",
    "Num": 0
  },
  {
    "PlayerId": "washist01",
    "PlayerName": "Stan Washington",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "medvest01",
    "PlayerName": "Stanislav Medvedenko",
    "Year": "2001-2007",
    "Num": 0
  },
  {
    "PlayerId": "baracst01",
    "PlayerName": "Stanko Barac",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "brundst01",
    "PlayerName": "Stanley Brundy",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "jacksst01",
    "PlayerName": "Stanley Jackson",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "johnsst04",
    "PlayerName": "Stanley Johnson",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "roberst01",
    "PlayerName": "Stanley Roberts",
    "Year": "1992-2000",
    "Num": 0
  },
  {
    "PlayerId": "jankost01",
    "PlayerName": "Stefan Jankovic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ruscost01",
    "PlayerName": "Stefano Rusconi",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "johnsst02",
    "PlayerName": "Steffond Johnson",
    "Year": 1987,
    "Num": 0
  },
  {
    "PlayerId": "hannast01",
    "PlayerName": "Stefhon Hannah",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "lasmest01",
    "PlayerName": "Stephane Lasme",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "chubist01",
    "PlayerName": "Stephen Chubin",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "curryst01",
    "PlayerName": "Stephen Curry",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "dennist01",
    "PlayerName": "Stephen Dennis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "grahast01",
    "PlayerName": "Stephen Graham",
    "Year": "2006-2011",
    "Num": 0
  },
  {
    "PlayerId": "howarst01",
    "PlayerName": "Stephen Howard",
    "Year": "1993-1998",
    "Num": 0
  },
  {
    "PlayerId": "jacksst02",
    "PlayerName": "Stephen Jackson",
    "Year": "2001-2014",
    "Num": 0
  },
  {
    "PlayerId": "previst01",
    "PlayerName": "Stephen Previs",
    "Year": 1973,
    "Num": 0
  },
  {
    "PlayerId": "thompst01",
    "PlayerName": "Stephen Thompson",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "vacenst01",
    "PlayerName": "Stephen Vacendak",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "wilsost01",
    "PlayerName": "Stephen Wilson",
    "Year": "1971-1972",
    "Num": 0
  },
  {
    "PlayerId": "zimmest01",
    "PlayerName": "Stephen Zimmerman",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "marbust01",
    "PlayerName": "Stephon Marbury",
    "Year": "1997-2009",
    "Num": 0
  },
  {
    "PlayerId": "brownst02",
    "PlayerName": "Sterling Brown",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "alforst01",
    "PlayerName": "Steve Alford",
    "Year": "1988-1991",
    "Num": 0
  },
  {
    "PlayerId": "bardost01",
    "PlayerName": "Steve Bardo",
    "Year": "1992-1996",
    "Num": 0
  },
  {
    "PlayerId": "blakest01",
    "PlayerName": "Steve Blake",
    "Year": "2004-2016",
    "Num": 0
  },
  {
    "PlayerId": "bracest01",
    "PlayerName": "Steve Bracey",
    "Year": "1973-1975",
    "Num": 0
  },
  {
    "PlayerId": "bucknst01",
    "PlayerName": "Steve Bucknall",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "burttst01",
    "PlayerName": "Steve Burtt",
    "Year": "1985-1993",
    "Num": 0
  },
  {
    "PlayerId": "coltest01",
    "PlayerName": "Steve Colter",
    "Year": "1985-1995",
    "Num": 0
  },
  {
    "PlayerId": "courtst01",
    "PlayerName": "Steve Courtin",
    "Year": 1965,
    "Num": 0
  },
  {
    "PlayerId": "downist01",
    "PlayerName": "Steve Downing",
    "Year": "1974-1975",
    "Num": 0
  },
  {
    "PlayerId": "francst01",
    "PlayerName": "Steve Francis",
    "Year": "2000-2008",
    "Num": 0
  },
  {
    "PlayerId": "goodrst01",
    "PlayerName": "Steve Goodrich",
    "Year": "2001-2002",
    "Num": 0
  },
  {
    "PlayerId": "greenst01",
    "PlayerName": "Steve Green",
    "Year": "1976-1979",
    "Num": 0
  },
  {
    "PlayerId": "hamerst01",
    "PlayerName": "Steve Hamer",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "hamilst01",
    "PlayerName": "Steve Hamilton",
    "Year": "1959-1960",
    "Num": 0
  },
  {
    "PlayerId": "harrist01",
    "PlayerName": "Steve Harris",
    "Year": "1986-1990",
    "Num": 0
  },
  {
    "PlayerId": "hawesst01",
    "PlayerName": "Steve Hawes",
    "Year": "1975-1984",
    "Num": 0
  },
  {
    "PlayerId": "hayesst01",
    "PlayerName": "Steve Hayes",
    "Year": "1982-1986",
    "Num": 0
  },
  {
    "PlayerId": "hensost01",
    "PlayerName": "Steve Henson",
    "Year": "1991-1999",
    "Num": 0
  },
  {
    "PlayerId": "johnsst03",
    "PlayerName": "Steve Johnson",
    "Year": "1982-1991",
    "Num": 0
  },
  {
    "PlayerId": "jonesst01",
    "PlayerName": "Steve Jones",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "kerrst01",
    "PlayerName": "Steve Kerr",
    "Year": "1989-2003",
    "Num": 0
  },
  {
    "PlayerId": "kuberst01",
    "PlayerName": "Steve Kuberski",
    "Year": "1970-1978",
    "Num": 0
  },
  {
    "PlayerId": "lingest01",
    "PlayerName": "Steve Lingenfelter",
    "Year": "1983-1984",
    "Num": 0
  },
  {
    "PlayerId": "malovst01",
    "PlayerName": "Steve Malovic",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "mixst01",
    "PlayerName": "Steve Mix",
    "Year": "1970-1983",
    "Num": 0
  },
  {
    "PlayerId": "nashst01",
    "PlayerName": "Steve Nash",
    "Year": "1997-2014",
    "Num": 0
  },
  {
    "PlayerId": "novakst01",
    "PlayerName": "Steve Novak",
    "Year": "2007-2017",
    "Num": 1
  },
  {
    "PlayerId": "pattest01",
    "PlayerName": "Steve Patterson",
    "Year": "1972-1976",
    "Num": 0
  },
  {
    "PlayerId": "schefst01",
    "PlayerName": "Steve Scheffler",
    "Year": "1991-1997",
    "Num": 0
  },
  {
    "PlayerId": "sheppst01",
    "PlayerName": "Steve Sheppard",
    "Year": "1978-1979",
    "Num": 0
  },
  {
    "PlayerId": "smithst01",
    "PlayerName": "Steve Smith",
    "Year": "1992-2005",
    "Num": 0
  },
  {
    "PlayerId": "stipast01",
    "PlayerName": "Steve Stipanovich",
    "Year": "1984-1988",
    "Num": 0
  },
  {
    "PlayerId": "adamsst01",
    "PlayerName": "Steven Adams",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "hillst01",
    "PlayerName": "Steven Hill",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "huntest01",
    "PlayerName": "Steven Hunter",
    "Year": "2002-2010",
    "Num": 0
  },
  {
    "PlayerId": "kramest01",
    "PlayerName": "Steven Kramer",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "smithst03",
    "PlayerName": "Steven Smith",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "smithst02",
    "PlayerName": "Stevin Smith",
    "Year": 1997,
    "Num": 0
  },
  {
    "PlayerId": "johnsst01",
    "PlayerName": "Stew Johnson",
    "Year": "1968-1976",
    "Num": 0
  },
  {
    "PlayerId": "grangst01",
    "PlayerName": "Stewart Granger",
    "Year": "1984-1987",
    "Num": 0
  },
  {
    "PlayerId": "vrankst01",
    "PlayerName": "Stojko Vrankovic",
    "Year": "1991-1999",
    "Num": 0
  },
  {
    "PlayerId": "swiftst01",
    "PlayerName": "Stromile Swift",
    "Year": "2001-2009",
    "Num": 0
  },
  {
    "PlayerId": "lantzst01",
    "PlayerName": "Stu Lantz",
    "Year": "1969-1976",
    "Num": 0
  },
  {
    "PlayerId": "grayst01",
    "PlayerName": "Stuart Gray",
    "Year": "1985-1991",
    "Num": 0
  },
  {
    "PlayerId": "yuesu01",
    "PlayerName": "Sun Yue",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "gainesu01",
    "PlayerName": "Sundiata Gaines",
    "Year": "2010-2012",
    "Num": 0
  },
  {
    "PlayerId": "halbrsw01",
    "PlayerName": "Swede Halbrook",
    "Year": "1961-1962",
    "Num": 0
  },
  {
    "PlayerId": "natersw01",
    "PlayerName": "Swen Nater",
    "Year": "1974-1984",
    "Num": 0
  },
  {
    "PlayerId": "graysy01",
    "PlayerName": "Sylvester Gray",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "norrisy01",
    "PlayerName": "Sylvester Norris",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "szewcsz01",
    "PlayerName": "Szymon Szewczyk",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fordtj01",
    "PlayerName": "T.J. Ford",
    "Year": "2004-2012",
    "Num": 0
  },
  {
    "PlayerId": "leaftj01",
    "PlayerName": "T.J. Leaf",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "mccontj01",
    "PlayerName": "T.J. McConnell",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "warretj01",
    "PlayerName": "T.J. Warren",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "willitj01",
    "PlayerName": "T.J. Williams",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "dunntr01",
    "PlayerName": "T.R. Dunn",
    "Year": "1978-1991",
    "Num": 0
  },
  {
    "PlayerId": "dragita01",
    "PlayerName": "Tadija Dragicevic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mccalta01",
    "PlayerName": "Tahjere McCall",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gibsota01",
    "PlayerName": "Taj Gibson",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "skinnta01",
    "PlayerName": "Tal Skinner",
    "Year": "1975-1976",
    "Num": 0
  },
  {
    "PlayerId": "zannata01",
    "PlayerName": "Talib Zanna",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "slayta01",
    "PlayerName": "Tamar Slay",
    "Year": "2003-2005",
    "Num": 0
  },
  {
    "PlayerId": "jacksta01",
    "PlayerName": "Tamir Jackson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hamilta01",
    "PlayerName": "Tang Hamilton",
    "Year": 2002,
    "Num": 0
  },
  {
    "PlayerId": "kinseta01",
    "PlayerName": "Tarence Kinsey",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "blackta01",
    "PlayerName": "Tarik Black",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "abdulta01",
    "PlayerName": "Tariq Abdul-Wahad",
    "Year": "1998-2003",
    "Num": 0
  },
  {
    "PlayerId": "armstta01",
    "PlayerName": "Tate Armstrong",
    "Year": "1978-1979",
    "Num": 0
  },
  {
    "PlayerId": "georgta01",
    "PlayerName": "Tate George",
    "Year": "1991-1995",
    "Num": 0
  },
  {
    "PlayerId": "greenta01",
    "PlayerName": "Taurean Green",
    "Year": 2008,
    "Num": 0
  },
  {
    "PlayerId": "princta02",
    "PlayerName": "Taurean Prince",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "braunta01",
    "PlayerName": "Taylor Braun",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "griffta01",
    "PlayerName": "Taylor Griffin",
    "Year": 2010,
    "Num": 0
  },
  {
    "PlayerId": "princta01",
    "PlayerName": "Tayshaun Prince",
    "Year": "2003-2016",
    "Num": 0
  },
  {
    "PlayerId": "luckete01",
    "PlayerName": "Ted Luckenbill",
    "Year": "1962-1963",
    "Num": 0
  },
  {
    "PlayerId": "manakte01",
    "PlayerName": "Ted Manakas",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "mcclate01",
    "PlayerName": "Ted McClain",
    "Year": "1972-1979",
    "Num": 0
  },
  {
    "PlayerId": "frankte01",
    "PlayerName": "Tellis Frank",
    "Year": "1988-1994",
    "Num": 0
  },
  {
    "PlayerId": "morrite01",
    "PlayerName": "Terence Morris",
    "Year": "2002-2006",
    "Num": 0
  },
  {
    "PlayerId": "stanste01",
    "PlayerName": "Terence Stansbury",
    "Year": "1985-1987",
    "Num": 0
  },
  {
    "PlayerId": "pettete01",
    "PlayerName": "Terran Petteway",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fergute01",
    "PlayerName": "Terrance Ferguson",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "roberte01",
    "PlayerName": "Terrance Roberson",
    "Year": 2001,
    "Num": 0
  },
  {
    "PlayerId": "harrite01",
    "PlayerName": "Terrel Harris",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "brandte01",
    "PlayerName": "Terrell Brandon",
    "Year": "1992-2002",
    "Num": 0
  },
  {
    "PlayerId": "joneste01",
    "PlayerName": "Terrence Jones",
    "Year": "2013-2017",
    "Num": 1
  },
  {
    "PlayerId": "renchte01",
    "PlayerName": "Terrence Rencher",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "rosste01",
    "PlayerName": "Terrence Ross",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "willite01",
    "PlayerName": "Terrence Williams",
    "Year": "2010-2013",
    "Num": 0
  },
  {
    "PlayerId": "whitete01",
    "PlayerName": "Terrico White",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "catlete01",
    "PlayerName": "Terry Catledge",
    "Year": "1986-1993",
    "Num": 0
  },
  {
    "PlayerId": "crosbte01",
    "PlayerName": "Terry Crosby",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "cummite01",
    "PlayerName": "Terry Cummings",
    "Year": "1983-2000",
    "Num": 0
  },
  {
    "PlayerId": "daviste01",
    "PlayerName": "Terry Davis",
    "Year": "1990-2001",
    "Num": 0
  },
  {
    "PlayerId": "deherte01",
    "PlayerName": "Terry Dehere",
    "Year": "1994-1999",
    "Num": 0
  },
  {
    "PlayerId": "dischte01",
    "PlayerName": "Terry Dischinger",
    "Year": "1963-1973",
    "Num": 0
  },
  {
    "PlayerId": "doziete01",
    "PlayerName": "Terry Dozier",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "driscte01",
    "PlayerName": "Terry Driscoll",
    "Year": "1971-1975",
    "Num": 0
  },
  {
    "PlayerId": "duerote01",
    "PlayerName": "Terry Duerod",
    "Year": "1980-1983",
    "Num": 0
  },
  {
    "PlayerId": "furlote01",
    "PlayerName": "Terry Furlow",
    "Year": "1977-1980",
    "Num": 0
  },
  {
    "PlayerId": "hendete01",
    "PlayerName": "Terry Henderson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "kunzete01",
    "PlayerName": "Terry Kunze",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "martite01",
    "PlayerName": "Terry Martin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "millste01",
    "PlayerName": "Terry Mills",
    "Year": "1991-2001",
    "Num": 0
  },
  {
    "PlayerId": "portete01",
    "PlayerName": "Terry Porter",
    "Year": "1986-2002",
    "Num": 0
  },
  {
    "PlayerId": "roziete01",
    "PlayerName": "Terry Rozier",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "teaglte01",
    "PlayerName": "Terry Teagle",
    "Year": "1983-1993",
    "Num": 0
  },
  {
    "PlayerId": "thomate01",
    "PlayerName": "Terry Thomas",
    "Year": 1976,
    "Num": 0
  },
  {
    "PlayerId": "tylerte01",
    "PlayerName": "Terry Tyler",
    "Year": "1979-1989",
    "Num": 0
  },
  {
    "PlayerId": "rittete01",
    "PlayerName": "Tex Ritter",
    "Year": "1949-1951",
    "Num": 0
  },
  {
    "PlayerId": "sefolth01",
    "PlayerName": "Thabo Sefolosha",
    "Year": "2007-2018",
    "Num": 1
  },
  {
    "PlayerId": "youngth01",
    "PlayerName": "Thaddeus Young",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "mcreyth01",
    "PlayerName": "Thales McReynolds",
    "Year": 1966,
    "Num": 0
  },
  {
    "PlayerId": "antetth01",
    "PlayerName": "Thanasis Antetokounmpo",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "mayesth01",
    "PlayerName": "Tharon Mayes",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "ratlith01",
    "PlayerName": "Theo Ratliff",
    "Year": "1996-2011",
    "Num": 0
  },
  {
    "PlayerId": "smithth01",
    "PlayerName": "Theron Smith",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "abercth01",
    "PlayerName": "Thomas Abercrombie",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bryanth01",
    "PlayerName": "Thomas Bryant",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "gardnth01",
    "PlayerName": "Thomas Gardner",
    "Year": "2008-2009",
    "Num": 0
  },
  {
    "PlayerId": "hamilth01",
    "PlayerName": "Thomas Hamilton",
    "Year": "1996-2000",
    "Num": 0
  },
  {
    "PlayerId": "jordath01",
    "PlayerName": "Thomas Jordan",
    "Year": 1993,
    "Num": 0
  },
  {
    "PlayerId": "robinth01",
    "PlayerName": "Thomas Robinson",
    "Year": "2013-2017",
    "Num": 1
  },
  {
    "PlayerId": "walkuth01",
    "PlayerName": "Thomas Walkup",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "makerth01",
    "PlayerName": "Thon Maker",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "baileth01",
    "PlayerName": "Thurl Bailey",
    "Year": "1984-1999",
    "Num": 0
  },
  {
    "PlayerId": "splitti01",
    "PlayerName": "Tiago Splitter",
    "Year": "2011-2017",
    "Num": 1
  },
  {
    "PlayerId": "pleisti01",
    "PlayerName": "Tibor Pleiss",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "burdeti01",
    "PlayerName": "Ticky Burden",
    "Year": "1976-1978",
    "Num": 0
  },
  {
    "PlayerId": "keitati01",
    "PlayerName": "Tidjan Keita",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "brownti01",
    "PlayerName": "Tierre Brown",
    "Year": "2002-2005",
    "Num": 0
  },
  {
    "PlayerId": "abromti01",
    "PlayerName": "Tim Abromaitis",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "basseti01",
    "PlayerName": "Tim Bassett",
    "Year": "1974-1980",
    "Num": 0
  },
  {
    "PlayerId": "breauti01",
    "PlayerName": "Tim Breaux",
    "Year": "1995-1998",
    "Num": 0
  },
  {
    "PlayerId": "duncati01",
    "PlayerName": "Tim Duncan",
    "Year": "1998-2016",
    "Num": 0
  },
  {
    "PlayerId": "fraziti01",
    "PlayerName": "Tim Frazier",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "hardati02",
    "PlayerName": "Tim Hardaway",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "hardati01",
    "PlayerName": "Tim Hardaway",
    "Year": "1990-2003",
    "Num": 0
  },
  {
    "PlayerId": "jamesti01",
    "PlayerName": "Tim James",
    "Year": "2000-2002",
    "Num": 0
  },
  {
    "PlayerId": "kemptti01",
    "PlayerName": "Tim Kempton",
    "Year": "1987-1998",
    "Num": 0
  },
  {
    "PlayerId": "legleti01",
    "PlayerName": "Tim Legler",
    "Year": "1990-2000",
    "Num": 0
  },
  {
    "PlayerId": "mccorti01",
    "PlayerName": "Tim McCormick",
    "Year": "1985-1992",
    "Num": 0
  },
  {
    "PlayerId": "ohlbrti01",
    "PlayerName": "Tim Ohlbrecht",
    "Year": 2013,
    "Num": 0
  },
  {
    "PlayerId": "perryti01",
    "PlayerName": "Tim Perry",
    "Year": "1989-1996",
    "Num": 0
  },
  {
    "PlayerId": "quartti01",
    "PlayerName": "Tim Quarterman",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "thomati01",
    "PlayerName": "Tim Thomas",
    "Year": "1998-2010",
    "Num": 0
  },
  {
    "PlayerId": "youngti01",
    "PlayerName": "Tim Young",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "mozgoti01",
    "PlayerName": "Timofey Mozgov",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "luwawti01",
    "PlayerName": "Timothe Luwawu-Cabarrot",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "architi01",
    "PlayerName": "Tiny Archibald",
    "Year": "1971-1984",
    "Num": 0
  },
  {
    "PlayerId": "horfoti01",
    "PlayerName": "Tito Horford",
    "Year": "1989-1994",
    "Num": 0
  },
  {
    "PlayerId": "maddoti01",
    "PlayerName": "Tito Maddox",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "harrito02",
    "PlayerName": "Tobias Harris",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "baileto01",
    "PlayerName": "Toby Bailey",
    "Year": "1999-2000",
    "Num": 0
  },
  {
    "PlayerId": "kimbato01",
    "PlayerName": "Toby Kimball",
    "Year": "1967-1975",
    "Num": 0
  },
  {
    "PlayerId": "knighto01",
    "PlayerName": "Toby Knight",
    "Year": "1978-1982",
    "Num": 0
  },
  {
    "PlayerId": "murphto01",
    "PlayerName": "Tod Murphy",
    "Year": "1988-1994",
    "Num": 0
  },
  {
    "PlayerId": "dayto01",
    "PlayerName": "Todd Day",
    "Year": "1993-2001",
    "Num": 0
  },
  {
    "PlayerId": "fulleto02",
    "PlayerName": "Todd Fuller",
    "Year": "1997-2001",
    "Num": 0
  },
  {
    "PlayerId": "lichtto01",
    "PlayerName": "Todd Lichti",
    "Year": "1990-1994",
    "Num": 0
  },
  {
    "PlayerId": "maccuto01",
    "PlayerName": "Todd MacCulloch",
    "Year": "2000-2003",
    "Num": 0
  },
  {
    "PlayerId": "mitchto01",
    "PlayerName": "Todd Mitchell",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "mundtto01",
    "PlayerName": "Todd Mundt",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "palazto01",
    "PlayerName": "Togo Palazzi",
    "Year": "1955-1960",
    "Num": 0
  },
  {
    "PlayerId": "abernto01",
    "PlayerName": "Tom Abernethy",
    "Year": "1977-1981",
    "Num": 0
  },
  {
    "PlayerId": "barketo01",
    "PlayerName": "Tom Barker",
    "Year": "1977-1979",
    "Num": 0
  },
  {
    "PlayerId": "blackto01",
    "PlayerName": "Tom Black",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "boerwto01",
    "PlayerName": "Tom Boerwinkle",
    "Year": "1969-1978",
    "Num": 0
  },
  {
    "PlayerId": "bosweto01",
    "PlayerName": "Tom Boswell",
    "Year": "1976-1984",
    "Num": 0
  },
  {
    "PlayerId": "brennto01",
    "PlayerName": "Tom Brennan",
    "Year": 1955,
    "Num": 0
  },
  {
    "PlayerId": "burleto01",
    "PlayerName": "Tom Burleson",
    "Year": "1975-1981",
    "Num": 0
  },
  {
    "PlayerId": "callato01",
    "PlayerName": "Tom Callahan",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "chambto01",
    "PlayerName": "Tom Chambers",
    "Year": "1982-1998",
    "Num": 0
  },
  {
    "PlayerId": "copato01",
    "PlayerName": "Tom Copa",
    "Year": 1992,
    "Num": 0
  },
  {
    "PlayerId": "garrito01",
    "PlayerName": "Tom Garrick",
    "Year": "1989-1992",
    "Num": 0
  },
  {
    "PlayerId": "golato01",
    "PlayerName": "Tom Gola",
    "Year": "1956-1966",
    "Num": 0
  },
  {
    "PlayerId": "guglito01",
    "PlayerName": "Tom Gugliotta",
    "Year": "1993-2005",
    "Num": 0
  },
  {
    "PlayerId": "haganto01",
    "PlayerName": "Tom Hagan",
    "Year": "1970-1971",
    "Num": 0
  },
  {
    "PlayerId": "hammoto01",
    "PlayerName": "Tom Hammonds",
    "Year": "1990-2001",
    "Num": 0
  },
  {
    "PlayerId": "hawkito01",
    "PlayerName": "Tom Hawkins",
    "Year": "1960-1969",
    "Num": 0
  },
  {
    "PlayerId": "heinsto01",
    "PlayerName": "Tom Heinsohn",
    "Year": "1957-1965",
    "Num": 0
  },
  {
    "PlayerId": "hendeto01",
    "PlayerName": "Tom Henderson",
    "Year": "1975-1983",
    "Num": 0
  },
  {
    "PlayerId": "hooveto01",
    "PlayerName": "Tom Hoover",
    "Year": "1964-1969",
    "Num": 0
  },
  {
    "PlayerId": "hovasto01",
    "PlayerName": "Tom Hovasse",
    "Year": 1995,
    "Num": 0
  },
  {
    "PlayerId": "ingelto01",
    "PlayerName": "Tom Ingelsby",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "kellyto01",
    "PlayerName": "Tom Kelly",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "kerwito01",
    "PlayerName": "Tom Kerwin",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "kingto01",
    "PlayerName": "Tom King",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "kondlto01",
    "PlayerName": "Tom Kondla",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "kozelto01",
    "PlayerName": "Tom Kozelko",
    "Year": "1974-1976",
    "Num": 0
  },
  {
    "PlayerId": "kroppto01",
    "PlayerName": "Tom Kropp",
    "Year": "1976-1977",
    "Num": 0
  },
  {
    "PlayerId": "lagarto01",
    "PlayerName": "Tom LaGarde",
    "Year": "1978-1985",
    "Num": 0
  },
  {
    "PlayerId": "marshto01",
    "PlayerName": "Tom Marshall",
    "Year": "1955-1959",
    "Num": 0
  },
  {
    "PlayerId": "mcmilto01",
    "PlayerName": "Tom McMillen",
    "Year": "1976-1986",
    "Num": 0
  },
  {
    "PlayerId": "meschto01",
    "PlayerName": "Tom Meschery",
    "Year": "1962-1971",
    "Num": 0
  },
  {
    "PlayerId": "owensto01",
    "PlayerName": "Tom Owens",
    "Year": "1972-1983",
    "Num": 0
  },
  {
    "PlayerId": "patteto01",
    "PlayerName": "Tom Patterson",
    "Year": "1973-1974",
    "Num": 0
  },
  {
    "PlayerId": "payneto01",
    "PlayerName": "Tom Payne",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "piotrto01",
    "PlayerName": "Tom Piotrowski",
    "Year": 1984,
    "Num": 0
  },
  {
    "PlayerId": "rikerto01",
    "PlayerName": "Tom Riker",
    "Year": "1973-1975",
    "Num": 0
  },
  {
    "PlayerId": "sandeto01",
    "PlayerName": "Tom Sanders",
    "Year": "1961-1973",
    "Num": 0
  },
  {
    "PlayerId": "schefto01",
    "PlayerName": "Tom Scheffler",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "sewelto01",
    "PlayerName": "Tom Sewell",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "slubyto01",
    "PlayerName": "Tom Sluby",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "stithto01",
    "PlayerName": "Tom Stith",
    "Year": 1963,
    "Num": 0
  },
  {
    "PlayerId": "thackto01",
    "PlayerName": "Tom Thacker",
    "Year": "1964-1971",
    "Num": 0
  },
  {
    "PlayerId": "tolbeto01",
    "PlayerName": "Tom Tolbert",
    "Year": "1989-1995",
    "Num": 0
  },
  {
    "PlayerId": "vanarto01",
    "PlayerName": "Tom Van Arsdale",
    "Year": "1966-1977",
    "Num": 0
  },
  {
    "PlayerId": "workmto01",
    "PlayerName": "Tom Workman",
    "Year": "1968-1971",
    "Num": 0
  },
  {
    "PlayerId": "satorto01",
    "PlayerName": "Tomas Satoransky",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "zubcito01",
    "PlayerName": "Tomislav Zubcic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bowento01",
    "PlayerName": "Tommie Bowens",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "greento01",
    "PlayerName": "Tommie Green",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "byrneto01",
    "PlayerName": "Tommy Byrnes",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "kearnto01",
    "PlayerName": "Tommy Kearns",
    "Year": 1959,
    "Num": 0
  },
  {
    "PlayerId": "kronto01",
    "PlayerName": "Tommy Kron",
    "Year": "1967-1970",
    "Num": 0
  },
  {
    "PlayerId": "okeefto01",
    "PlayerName": "Tommy O'Keefe",
    "Year": 1951,
    "Num": 0
  },
  {
    "PlayerId": "woodsto01",
    "PlayerName": "Tommy Woods",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "douglto01",
    "PlayerName": "Toney Douglas",
    "Year": "2010-2017",
    "Num": 1
  },
  {
    "PlayerId": "kukocto01",
    "PlayerName": "Toni Kukoc",
    "Year": "1994-2006",
    "Num": 0
  },
  {
    "PlayerId": "allento01",
    "PlayerName": "Tony Allen",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "battito01",
    "PlayerName": "Tony Battie",
    "Year": "1998-2012",
    "Num": 0
  },
  {
    "PlayerId": "benneto01",
    "PlayerName": "Tony Bennett",
    "Year": "1993-1995",
    "Num": 0
  },
  {
    "PlayerId": "bobbito01",
    "PlayerName": "Tony Bobbitt",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "bradlto01",
    "PlayerName": "Tony Bradley",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "brownto01",
    "PlayerName": "Tony Brown",
    "Year": "1985-1992",
    "Num": 0
  },
  {
    "PlayerId": "campbto01",
    "PlayerName": "Tony Campbell",
    "Year": "1985-1995",
    "Num": 0
  },
  {
    "PlayerId": "dawsoto01",
    "PlayerName": "Tony Dawson",
    "Year": "1991-1995",
    "Num": 0
  },
  {
    "PlayerId": "delkto01",
    "PlayerName": "Tony Delk",
    "Year": "1997-2006",
    "Num": 0
  },
  {
    "PlayerId": "dumasto01",
    "PlayerName": "Tony Dumas",
    "Year": "1995-1998",
    "Num": 0
  },
  {
    "PlayerId": "farmeto01",
    "PlayerName": "Tony Farmer",
    "Year": "1998-2000",
    "Num": 0
  },
  {
    "PlayerId": "fulleto01",
    "PlayerName": "Tony Fuller",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "harrito01",
    "PlayerName": "Tony Harris",
    "Year": "1991-1995",
    "Num": 0
  },
  {
    "PlayerId": "jacksto02",
    "PlayerName": "Tony Jackson",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "jacksto01",
    "PlayerName": "Tony Jackson",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "jarosto01",
    "PlayerName": "Tony Jaros",
    "Year": "1947-1951",
    "Num": 0
  },
  {
    "PlayerId": "kappeto01",
    "PlayerName": "Tony Kappen",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "koskito01",
    "PlayerName": "Tony Koski",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "lavelto01",
    "PlayerName": "Tony Lavelli",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "masseto01",
    "PlayerName": "Tony Massenburg",
    "Year": "1991-2005",
    "Num": 0
  },
  {
    "PlayerId": "mitchto03",
    "PlayerName": "Tony Mitchell",
    "Year": 2014,
    "Num": 1
  },
  {
    "PlayerId": "mitchto02",
    "PlayerName": "Tony Mitchell",
    "Year": 2014,
    "Num": 1
  },
  {
    "PlayerId": "parketo01",
    "PlayerName": "Tony Parker",
    "Year": "2002-2018",
    "Num": 1
  },
  {
    "PlayerId": "priceto01",
    "PlayerName": "Tony Price",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "roberto01",
    "PlayerName": "Tony Robertson",
    "Year": "1978-1979",
    "Num": 0
  },
  {
    "PlayerId": "smithto02",
    "PlayerName": "Tony Smith",
    "Year": "1991-2001",
    "Num": 0
  },
  {
    "PlayerId": "snellto01",
    "PlayerName": "Tony Snell",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "tayloto01",
    "PlayerName": "Tony Taylor",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "whiteto01",
    "PlayerName": "Tony White",
    "Year": 1988,
    "Num": 0
  },
  {
    "PlayerId": "windito01",
    "PlayerName": "Tony Windis",
    "Year": 1960,
    "Num": 0
  },
  {
    "PlayerId": "wroteto01",
    "PlayerName": "Tony Wroten",
    "Year": "2013-2016",
    "Num": 1
  },
  {
    "PlayerId": "zenoto01",
    "PlayerName": "Tony Zeno",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "brynto01",
    "PlayerName": "Torgeir Bryn",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "grahato01",
    "PlayerName": "Torian Graham",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "shengto01",
    "PlayerName": "Tornike Shengelia",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "braggto01",
    "PlayerName": "Torraye Braggs",
    "Year": "2004-2005",
    "Num": 0
  },
  {
    "PlayerId": "craigto01",
    "PlayerName": "Torrey Craig",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "murryto01",
    "PlayerName": "Toure' Murry",
    "Year": "2014-2015",
    "Num": 0
  },
  {
    "PlayerId": "jackstr01",
    "PlayerName": "Tracy Jackson",
    "Year": "1982-1984",
    "Num": 0
  },
  {
    "PlayerId": "mcgratr01",
    "PlayerName": "Tracy McGrady",
    "Year": "1998-2012",
    "Num": 0
  },
  {
    "PlayerId": "mooretr01",
    "PlayerName": "Tracy Moore",
    "Year": "1992-1997",
    "Num": 0
  },
  {
    "PlayerId": "murratr01",
    "PlayerName": "Tracy Murray",
    "Year": "1993-2004",
    "Num": 0
  },
  {
    "PlayerId": "langdtr01",
    "PlayerName": "Trajan Langdon",
    "Year": "2000-2002",
    "Num": 0
  },
  {
    "PlayerId": "besttr01",
    "PlayerName": "Travis Best",
    "Year": "1996-2005",
    "Num": 0
  },
  {
    "PlayerId": "dienetr01",
    "PlayerName": "Travis Diener",
    "Year": "2006-2010",
    "Num": 0
  },
  {
    "PlayerId": "granttr01",
    "PlayerName": "Travis Grant",
    "Year": "1973-1976",
    "Num": 0
  },
  {
    "PlayerId": "hansetr01",
    "PlayerName": "Travis Hansen",
    "Year": 2004,
    "Num": 0
  },
  {
    "PlayerId": "hymantr01",
    "PlayerName": "Travis Hyman",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "knightr01",
    "PlayerName": "Travis Knight",
    "Year": "1997-2003",
    "Num": 0
  },
  {
    "PlayerId": "leslitr01",
    "PlayerName": "Travis Leslie",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "maystr01",
    "PlayerName": "Travis Mays",
    "Year": "1991-1993",
    "Num": 0
  },
  {
    "PlayerId": "outlatr01",
    "PlayerName": "Travis Outlaw",
    "Year": "2004-2014",
    "Num": 0
  },
  {
    "PlayerId": "petertr01",
    "PlayerName": "Travis Peterson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "releftr01",
    "PlayerName": "Travis Releford",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "tricetr01",
    "PlayerName": "Travis Trice",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "weartr01",
    "PlayerName": "Travis Wear",
    "Year": 2015,
    "Num": 1
  },
  {
    "PlayerId": "willitr01",
    "PlayerName": "Travis Williams",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "kelletr01",
    "PlayerName": "Tre Kelley",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "rollitr01",
    "PlayerName": "Tree Rollins",
    "Year": "1978-1995",
    "Num": 0
  },
  {
    "PlayerId": "fowlktr01",
    "PlayerName": "Tremaine Fowlkes",
    "Year": "2002-2005",
    "Num": 0
  },
  {
    "PlayerId": "locketr01",
    "PlayerName": "Trent Lockett",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "tucketr01",
    "PlayerName": "Trent Tucker",
    "Year": "1983-1993",
    "Num": 0
  },
  {
    "PlayerId": "hassetr01",
    "PlayerName": "Trenton Hassell",
    "Year": "2002-2010",
    "Num": 0
  },
  {
    "PlayerId": "grahatr01",
    "PlayerName": "Treveon Graham",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "arizatr01",
    "PlayerName": "Trevor Ariza",
    "Year": "2005-2018",
    "Num": 1
  },
  {
    "PlayerId": "booketr01",
    "PlayerName": "Trevor Booker",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "mbakwtr01",
    "PlayerName": "Trevor Mbakwe",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ruffitr01",
    "PlayerName": "Trevor Ruffin",
    "Year": "1995-1996",
    "Num": 0
  },
  {
    "PlayerId": "thomptr03",
    "PlayerName": "Trevor Thompson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wilsotr01",
    "PlayerName": "Trevor Wilson",
    "Year": "1991-1996",
    "Num": 0
  },
  {
    "PlayerId": "wintetr01",
    "PlayerName": "Trevor Winter",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "burketr01",
    "PlayerName": "Trey Burke",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "freemtr01",
    "PlayerName": "Trey Freeman",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "gildetr01",
    "PlayerName": "Trey Gilder",
    "Year": 2010,
    "Num": 0
  },
  {
    "PlayerId": "johnstr01",
    "PlayerName": "Trey Johnson",
    "Year": "2009-2012",
    "Num": 0
  },
  {
    "PlayerId": "lylestr01",
    "PlayerName": "Trey Lyles",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "mckintr01",
    "PlayerName": "Trey McKinney-Jones",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "thomptr02",
    "PlayerName": "Trey Thompkins",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "thomptr01",
    "PlayerName": "Tristan Thompson",
    "Year": "2012-2018",
    "Num": 1
  },
  {
    "PlayerId": "washitr01",
    "PlayerName": "Trooper Washington",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "belltr01",
    "PlayerName": "Troy Bell",
    "Year": 2004,
    "Num": 0
  },
  {
    "PlayerId": "caupatr01",
    "PlayerName": "Troy Caupain",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "danietr01",
    "PlayerName": "Troy Daniels",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "hudsotr01",
    "PlayerName": "Troy Hudson",
    "Year": "1998-2008",
    "Num": 0
  },
  {
    "PlayerId": "murphtr01",
    "PlayerName": "Troy Murphy",
    "Year": "2002-2013",
    "Num": 0
  },
  {
    "PlayerId": "willitr02",
    "PlayerName": "Troy Williams",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "robintr01",
    "PlayerName": "Truck Robinson",
    "Year": "1975-1985",
    "Num": 0
  },
  {
    "PlayerId": "lawsoty01",
    "PlayerName": "Ty Lawson",
    "Year": "2010-2017",
    "Num": 1
  },
  {
    "PlayerId": "brownty01",
    "PlayerName": "Tyler Brown",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "cavanty01",
    "PlayerName": "Tyler Cavanaugh",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "dorsety01",
    "PlayerName": "Tyler Dorsey",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "ennisty01",
    "PlayerName": "Tyler Ennis",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "hansbty01",
    "PlayerName": "Tyler Hansbrough",
    "Year": "2010-2016",
    "Num": 0
  },
  {
    "PlayerId": "harvety01",
    "PlayerName": "Tyler Harvey",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "honeyty01",
    "PlayerName": "Tyler Honeycutt",
    "Year": "2012-2013",
    "Num": 0
  },
  {
    "PlayerId": "johnsty01",
    "PlayerName": "Tyler Johnson",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "lydonty01",
    "PlayerName": "Tyler Lydon",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "ulisty01",
    "PlayerName": "Tyler Ulis",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "zellety01",
    "PlayerName": "Tyler Zeller",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "evansty01",
    "PlayerName": "Tyreke Evans",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "brittty01",
    "PlayerName": "Tyrone Britt",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "corbity01",
    "PlayerName": "Tyrone Corbin",
    "Year": "1986-2001",
    "Num": 0
  },
  {
    "PlayerId": "hillty01",
    "PlayerName": "Tyrone Hill",
    "Year": "1991-2004",
    "Num": 0
  },
  {
    "PlayerId": "nesbyty01",
    "PlayerName": "Tyrone Nesby",
    "Year": "1999-2002",
    "Num": 0
  },
  {
    "PlayerId": "wallaty01",
    "PlayerName": "Tyrone Wallace",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "luety01",
    "PlayerName": "Tyronn Lue",
    "Year": "1999-2009",
    "Num": 0
  },
  {
    "PlayerId": "thomaty01",
    "PlayerName": "Tyrus Thomas",
    "Year": "2007-2015",
    "Num": 0
  },
  {
    "PlayerId": "tayloty01",
    "PlayerName": "Tyshawn Taylor",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "chandty01",
    "PlayerName": "Tyson Chandler",
    "Year": "2002-2018",
    "Num": 1
  },
  {
    "PlayerId": "wheelty01",
    "PlayerName": "Tyson Wheeler",
    "Year": 1999,
    "Num": 0
  },
  {
    "PlayerId": "edneyty01",
    "PlayerName": "Tyus Edney",
    "Year": "1996-2001",
    "Num": 0
  },
  {
    "PlayerId": "jonesty01",
    "PlayerName": "Tyus Jones",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "mckeety01",
    "PlayerName": "Tywain McKee",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "hasleud01",
    "PlayerName": "Udonis Haslem",
    "Year": "2004-2018",
    "Num": 1
  },
  {
    "PlayerId": "slokaur01",
    "PlayerName": "Uros Slokar",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "blabuw01",
    "PlayerName": "Uwe Blab",
    "Year": "1986-1990",
    "Num": 0
  },
  {
    "PlayerId": "beachvj01",
    "PlayerName": "V.J. Beachem",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "blueva01",
    "PlayerName": "Vander Blue",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "williva01",
    "PlayerName": "Vann Williford",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "fernava01",
    "PlayerName": "Vashil Fernandez",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "micicva01",
    "PlayerName": "Vasilije Micic",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "spanova01",
    "PlayerName": "Vassilis Spanoulis",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "hamilve01",
    "PlayerName": "Venson Hamilton",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "flemive01",
    "PlayerName": "Vern Fleming",
    "Year": "1985-1996",
    "Num": 0
  },
  {
    "PlayerId": "gardnve01",
    "PlayerName": "Vern Gardner",
    "Year": "1950-1952",
    "Num": 0
  },
  {
    "PlayerId": "hattove01",
    "PlayerName": "Vern Hatton",
    "Year": "1959-1962",
    "Num": 0
  },
  {
    "PlayerId": "mikkeve01",
    "PlayerName": "Vern Mikkelsen",
    "Year": "1950-1959",
    "Num": 0
  },
  {
    "PlayerId": "goodrve01",
    "PlayerName": "Vernon Goodridge",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "macklve01",
    "PlayerName": "Vernon Macklin",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "maxweve01",
    "PlayerName": "Vernon Maxwell",
    "Year": "1989-2001",
    "Num": 0
  },
  {
    "PlayerId": "marshve01",
    "PlayerName": "Vester Marshall",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "kravtvi01",
    "PlayerName": "Viacheslav Kravtsov",
    "Year": "2013-2014",
    "Num": 0
  },
  {
    "PlayerId": "bartovi01",
    "PlayerName": "Vic Bartolome",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "alexavi01",
    "PlayerName": "Victor Alexander",
    "Year": "1992-2002",
    "Num": 0
  },
  {
    "PlayerId": "clavevi01",
    "PlayerName": "Victor Claver",
    "Year": "2013-2015",
    "Num": 0
  },
  {
    "PlayerId": "oladivi01",
    "PlayerName": "Victor Oladipo",
    "Year": "2014-2018",
    "Num": 1
  },
  {
    "PlayerId": "khryavi01",
    "PlayerName": "Viktor Khryapa",
    "Year": "2005-2008",
    "Num": 0
  },
  {
    "PlayerId": "sanikvi01",
    "PlayerName": "Viktor Sanikidze",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bakervi01",
    "PlayerName": "Vin Baker",
    "Year": "1994-2006",
    "Num": 0
  },
  {
    "PlayerId": "borylvi01",
    "PlayerName": "Vince Boryla",
    "Year": "1950-1954",
    "Num": 0
  },
  {
    "PlayerId": "cartevi01",
    "PlayerName": "Vince Carter",
    "Year": "1999-2018",
    "Num": 1
  },
  {
    "PlayerId": "huntevi01",
    "PlayerName": "Vince Hunter",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "taylovi01",
    "PlayerName": "Vince Taylor",
    "Year": 1983,
    "Num": 0
  },
  {
    "PlayerId": "askewvi01",
    "PlayerName": "Vincent Askew",
    "Year": "1988-1998",
    "Num": 0
  },
  {
    "PlayerId": "councvi01",
    "PlayerName": "Vincent Council",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "yarbrvi01",
    "PlayerName": "Vincent Yarbrough",
    "Year": 2003,
    "Num": 0
  },
  {
    "PlayerId": "esposvi01",
    "PlayerName": "Vincenzo Esposito",
    "Year": 1996,
    "Num": 0
  },
  {
    "PlayerId": "johnsvi01",
    "PlayerName": "Vinnie Johnson",
    "Year": "1980-1992",
    "Num": 0
  },
  {
    "PlayerId": "delnevi01",
    "PlayerName": "Vinny Del Negro",
    "Year": "1989-2002",
    "Num": 0
  },
  {
    "PlayerId": "vaughvi01",
    "PlayerName": "Virgil Vaughn",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "chikovi01",
    "PlayerName": "Vitalis Chikoko",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "potapvi01",
    "PlayerName": "Vitaly Potapenko",
    "Year": "1997-2007",
    "Num": 0
  },
  {
    "PlayerId": "favervi01",
    "PlayerName": "Vitor Faverani",
    "Year": 2014,
    "Num": 0
  },
  {
    "PlayerId": "divacvl01",
    "PlayerName": "Vlade Divac",
    "Year": "1990-2005",
    "Num": 0
  },
  {
    "PlayerId": "radmavl01",
    "PlayerName": "Vladimir Radmanovic",
    "Year": "2002-2013",
    "Num": 0
  },
  {
    "PlayerId": "stepavl01",
    "PlayerName": "Vladimir Stepania",
    "Year": "1999-2004",
    "Num": 0
  },
  {
    "PlayerId": "veremvl01",
    "PlayerName": "Vladimir Veremeenko",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "cancavl01",
    "PlayerName": "Vlatko Cancar",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "wintevo01",
    "PlayerName": "Voise Winters",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "wafervo01",
    "PlayerName": "Von Wafer",
    "Year": "2006-2012",
    "Num": 0
  },
  {
    "PlayerId": "cummivo01",
    "PlayerName": "Vonteego Cummings",
    "Year": "2000-2002",
    "Num": 0
  },
  {
    "PlayerId": "lenarvo01",
    "PlayerName": "Voshon Lenard",
    "Year": "1996-2006",
    "Num": 0
  },
  {
    "PlayerId": "baldwwa01",
    "PlayerName": "Wade Baldwin",
    "Year": 2017,
    "Num": 1
  },
  {
    "PlayerId": "joneswa01",
    "PlayerName": "Wah Wah Jones",
    "Year": "1950-1952",
    "Num": 0
  },
  {
    "PlayerId": "joneswa02",
    "PlayerName": "Wali Jones",
    "Year": "1965-1976",
    "Num": 0
  },
  {
    "PlayerId": "bankswa01",
    "PlayerName": "Walker Banks",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "russewa01",
    "PlayerName": "Walker Russell",
    "Year": "1983-1988",
    "Num": 0
  },
  {
    "PlayerId": "russewa02",
    "PlayerName": "Walker Russell",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "bryanwa01",
    "PlayerName": "Wallace Bryant",
    "Year": "1984-1986",
    "Num": 0
  },
  {
    "PlayerId": "anderwa01",
    "PlayerName": "Wally Anderzunas",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "osterwa01",
    "PlayerName": "Wally Osterkorn",
    "Year": "1952-1955",
    "Num": 0
  },
  {
    "PlayerId": "rankwa01",
    "PlayerName": "Wally Rank",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "szczewa02",
    "PlayerName": "Wally Szczerbiak",
    "Year": "2000-2009",
    "Num": 0
  },
  {
    "PlayerId": "walkewa01",
    "PlayerName": "Wally Walker",
    "Year": "1977-1984",
    "Num": 0
  },
  {
    "PlayerId": "bellawa01",
    "PlayerName": "Walt Bellamy",
    "Year": "1962-1975",
    "Num": 0
  },
  {
    "PlayerId": "budkowa01",
    "PlayerName": "Walt Budko",
    "Year": "1949-1952",
    "Num": 0
  },
  {
    "PlayerId": "daviswa01",
    "PlayerName": "Walt Davis",
    "Year": "1954-1958",
    "Num": 0
  },
  {
    "PlayerId": "fraziwa01",
    "PlayerName": "Walt Frazier",
    "Year": "1968-1980",
    "Num": 0
  },
  {
    "PlayerId": "gilmowa01",
    "PlayerName": "Walt Gilmore",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "abdulma01",
    "PlayerName": "Walt Hazzard",
    "Year": "1965-1974",
    "Num": 0
  },
  {
    "PlayerId": "kirkwa01",
    "PlayerName": "Walt Kirk",
    "Year": "1949-1952",
    "Num": 0
  },
  {
    "PlayerId": "lautewa01",
    "PlayerName": "Walt Lautenbach",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "millewa01",
    "PlayerName": "Walt Miller",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "szczewa01",
    "PlayerName": "Walt Szczerbiak",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "weslewa01",
    "PlayerName": "Walt Wesley",
    "Year": "1967-1976",
    "Num": 0
  },
  {
    "PlayerId": "williwa02",
    "PlayerName": "Walt Williams",
    "Year": "1993-2003",
    "Num": 0
  },
  {
    "PlayerId": "berrywa01",
    "PlayerName": "Walter Berry",
    "Year": "1987-1989",
    "Num": 0
  },
  {
    "PlayerId": "bondwa01",
    "PlayerName": "Walter Bond",
    "Year": "1993-1995",
    "Num": 0
  },
  {
    "PlayerId": "byrdwa01",
    "PlayerName": "Walter Byrd",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "daviswa03",
    "PlayerName": "Walter Davis",
    "Year": "1978-1992",
    "Num": 0
  },
  {
    "PlayerId": "dukeswa01",
    "PlayerName": "Walter Dukes",
    "Year": "1956-1963",
    "Num": 0
  },
  {
    "PlayerId": "herrmwa01",
    "PlayerName": "Walter Herrmann",
    "Year": "2007-2009",
    "Num": 0
  },
  {
    "PlayerId": "jordawa01",
    "PlayerName": "Walter Jordan",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "mccarwa01",
    "PlayerName": "Walter McCarty",
    "Year": "1997-2006",
    "Num": 0
  },
  {
    "PlayerId": "palmewa01",
    "PlayerName": "Walter Palmer",
    "Year": "1991-1993",
    "Num": 0
  },
  {
    "PlayerId": "piatkwa01",
    "PlayerName": "Walter Piatkowski",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "sharpwa01",
    "PlayerName": "Walter Sharpe",
    "Year": 2009,
    "Num": 0
  },
  {
    "PlayerId": "simonwa01",
    "PlayerName": "Walter Simon",
    "Year": "1968-1974",
    "Num": 0
  },
  {
    "PlayerId": "sheliwa01",
    "PlayerName": "Wang Zhelin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "zhizhwa01",
    "PlayerName": "Wang Zhizhi",
    "Year": "2001-2005",
    "Num": 0
  },
  {
    "PlayerId": "williwa01",
    "PlayerName": "Ward Williams",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "jackswa01",
    "PlayerName": "Wardell Jackson",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "daviswa02",
    "PlayerName": "Warren Davis",
    "Year": "1968-1973",
    "Num": 0
  },
  {
    "PlayerId": "fenlewa01",
    "PlayerName": "Warren Fenley",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "jabalwa01",
    "PlayerName": "Warren Jabali",
    "Year": "1969-1975",
    "Num": 0
  },
  {
    "PlayerId": "kiddwa01",
    "PlayerName": "Warren Kidd",
    "Year": 1994,
    "Num": 0
  },
  {
    "PlayerId": "nileswa01",
    "PlayerName": "Warren Niles",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "perkiwa01",
    "PlayerName": "Warren Perkins",
    "Year": "1950-1951",
    "Num": 0
  },
  {
    "PlayerId": "misakwa01",
    "PlayerName": "Wat Misaka",
    "Year": 1948,
    "Num": 0
  },
  {
    "PlayerId": "brittwa01",
    "PlayerName": "Wayman Britt",
    "Year": 1978,
    "Num": 0
  },
  {
    "PlayerId": "tisdawa01",
    "PlayerName": "Wayman Tisdale",
    "Year": "1986-1997",
    "Num": 0
  },
  {
    "PlayerId": "chapmwa01",
    "PlayerName": "Wayne Chapman",
    "Year": "1969-1972",
    "Num": 0
  },
  {
    "PlayerId": "coopewa01",
    "PlayerName": "Wayne Cooper",
    "Year": "1979-1992",
    "Num": 0
  },
  {
    "PlayerId": "ellinwa01",
    "PlayerName": "Wayne Ellington",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "embrywa01",
    "PlayerName": "Wayne Embry",
    "Year": "1959-1969",
    "Num": 0
  },
  {
    "PlayerId": "englewa01",
    "PlayerName": "Wayne Englestad",
    "Year": 1989,
    "Num": 0
  },
  {
    "PlayerId": "hightwa01",
    "PlayerName": "Wayne Hightower",
    "Year": "1963-1972",
    "Num": 0
  },
  {
    "PlayerId": "kreklwa01",
    "PlayerName": "Wayne Kreklow",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "moliswa01",
    "PlayerName": "Wayne Molis",
    "Year": "1967-1968",
    "Num": 0
  },
  {
    "PlayerId": "packwa01",
    "PlayerName": "Wayne Pack",
    "Year": 1975,
    "Num": 0
  },
  {
    "PlayerId": "radfowa01",
    "PlayerName": "Wayne Radford",
    "Year": 1979,
    "Num": 0
  },
  {
    "PlayerId": "robinwa01",
    "PlayerName": "Wayne Robinson",
    "Year": 1981,
    "Num": 0
  },
  {
    "PlayerId": "sapplwa01",
    "PlayerName": "Wayne Sappleton",
    "Year": 1985,
    "Num": 0
  },
  {
    "PlayerId": "seewa01",
    "PlayerName": "Wayne See",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "seldewa01",
    "PlayerName": "Wayne Selden",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "simiewa01",
    "PlayerName": "Wayne Simien",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "stevewa01",
    "PlayerName": "Wayne Stevens",
    "Year": 1960,
    "Num": 0
  },
  {
    "PlayerId": "turnewa01",
    "PlayerName": "Wayne Turner",
    "Year": 2000,
    "Num": 0
  },
  {
    "PlayerId": "yateswa01",
    "PlayerName": "Wayne Yates",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "ladnewe01",
    "PlayerName": "Wendell Ladner",
    "Year": "1971-1975",
    "Num": 0
  },
  {
    "PlayerId": "matthwe01",
    "PlayerName": "Wes Matthews",
    "Year": "1981-1990",
    "Num": 0
  },
  {
    "PlayerId": "unselwe01",
    "PlayerName": "Wes Unseld",
    "Year": "1969-1981",
    "Num": 0
  },
  {
    "PlayerId": "bialowe01",
    "PlayerName": "Wesley Bialosuknia",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "coxwe01",
    "PlayerName": "Wesley Cox",
    "Year": "1978-1979",
    "Num": 0
  },
  {
    "PlayerId": "iwundwe01",
    "PlayerName": "Wesley Iwundu",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "johnswe01",
    "PlayerName": "Wesley Johnson",
    "Year": "2011-2018",
    "Num": 1
  },
  {
    "PlayerId": "matthwe02",
    "PlayerName": "Wesley Matthews",
    "Year": "2010-2018",
    "Num": 1
  },
  {
    "PlayerId": "persowe01",
    "PlayerName": "Wesley Person",
    "Year": "1995-2005",
    "Num": 0
  },
  {
    "PlayerId": "saundwe01",
    "PlayerName": "Wesley Saunders",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "bellwh01",
    "PlayerName": "Whitey Bell",
    "Year": "1960-1961",
    "Num": 0
  },
  {
    "PlayerId": "kachawh01",
    "PlayerName": "Whitey Kachan",
    "Year": 1949,
    "Num": 0
  },
  {
    "PlayerId": "martiwh01",
    "PlayerName": "Whitey Martin",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "skoogwh01",
    "PlayerName": "Whitey Skoog",
    "Year": "1952-1957",
    "Num": 0
  },
  {
    "PlayerId": "vonniwh01",
    "PlayerName": "Whitey Von Nieda",
    "Year": 1950,
    "Num": 0
  },
  {
    "PlayerId": "joneswi02",
    "PlayerName": "Wil Jones",
    "Year": "1970-1978",
    "Num": 0
  },
  {
    "PlayerId": "kirklwi01",
    "PlayerName": "Wilber Kirkland",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "kautzwi01",
    "PlayerName": "Wilbert Kautz",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "robinwi01",
    "PlayerName": "Wilbert Robinson",
    "Year": 1974,
    "Num": 0
  },
  {
    "PlayerId": "hollawi01",
    "PlayerName": "Wilbur Holland",
    "Year": "1976-1979",
    "Num": 0
  },
  {
    "PlayerId": "peckwi01",
    "PlayerName": "Wiley Peck",
    "Year": 1980,
    "Num": 0
  },
  {
    "PlayerId": "bartowi01",
    "PlayerName": "Will Barton",
    "Year": "2013-2018",
    "Num": 1
  },
  {
    "PlayerId": "blalowi01",
    "PlayerName": "Will Blalock",
    "Year": 2007,
    "Num": 0
  },
  {
    "PlayerId": "bynumwi01",
    "PlayerName": "Will Bynum",
    "Year": "2006-2015",
    "Num": 0
  },
  {
    "PlayerId": "cherrwi01",
    "PlayerName": "Will Cherry",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "clybuwi01",
    "PlayerName": "Will Clyburn",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "conrowi01",
    "PlayerName": "Will Conroy",
    "Year": "2007-2013",
    "Num": 0
  },
  {
    "PlayerId": "cummiwi01",
    "PlayerName": "Will Cummings",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "fraziwi01",
    "PlayerName": "Will Frazier",
    "Year": "1966-1969",
    "Num": 0
  },
  {
    "PlayerId": "perduwi01",
    "PlayerName": "Will Perdue",
    "Year": "1989-2001",
    "Num": 0
  },
  {
    "PlayerId": "solomwi01",
    "PlayerName": "Will Solomon",
    "Year": "2002-2009",
    "Num": 0
  },
  {
    "PlayerId": "averywi01",
    "PlayerName": "William Avery",
    "Year": "2000-2002",
    "Num": 0
  },
  {
    "PlayerId": "bedfowi01",
    "PlayerName": "William Bedford",
    "Year": "1987-1993",
    "Num": 0
  },
  {
    "PlayerId": "cunniwi01",
    "PlayerName": "William Cunningham",
    "Year": "1998-1999",
    "Num": 0
  },
  {
    "PlayerId": "frankwi01",
    "PlayerName": "William Franklin",
    "Year": "1973-1976",
    "Num": 0
  },
  {
    "PlayerId": "smithwi01",
    "PlayerName": "William Smith",
    "Year": "1972-1973",
    "Num": 0
  },
  {
    "PlayerId": "allenwi01",
    "PlayerName": "Willie Allen",
    "Year": 1972,
    "Num": 0
  },
  {
    "PlayerId": "anderwi01",
    "PlayerName": "Willie Anderson",
    "Year": "1989-1997",
    "Num": 0
  },
  {
    "PlayerId": "burtowi01",
    "PlayerName": "Willie Burton",
    "Year": "1991-1999",
    "Num": 0
  },
  {
    "PlayerId": "caulewi01",
    "PlayerName": "Willie Cauley-Stein",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "daviswi01",
    "PlayerName": "Willie Davis",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "greenwi01",
    "PlayerName": "Willie Green",
    "Year": "2004-2015",
    "Num": 0
  },
  {
    "PlayerId": "iverswi01",
    "PlayerName": "Willie Iverson",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "joneswi01",
    "PlayerName": "Willie Jones",
    "Year": "1961-1965",
    "Num": 0
  },
  {
    "PlayerId": "longwi01",
    "PlayerName": "Willie Long",
    "Year": "1972-1974",
    "Num": 0
  },
  {
    "PlayerId": "mccarwi01",
    "PlayerName": "Willie McCarter",
    "Year": "1970-1972",
    "Num": 0
  },
  {
    "PlayerId": "murrewi01",
    "PlayerName": "Willie Murrell",
    "Year": "1968-1970",
    "Num": 0
  },
  {
    "PlayerId": "naullwi01",
    "PlayerName": "Willie Naulls",
    "Year": "1957-1966",
    "Num": 0
  },
  {
    "PlayerId": "norwowi01",
    "PlayerName": "Willie Norwood",
    "Year": "1972-1978",
    "Num": 0
  },
  {
    "PlayerId": "portewi01",
    "PlayerName": "Willie Porter",
    "Year": "1968-1969",
    "Num": 0
  },
  {
    "PlayerId": "reedwi02",
    "PlayerName": "Willie Reed",
    "Year": "2016-2018",
    "Num": 1
  },
  {
    "PlayerId": "rogerwi01",
    "PlayerName": "Willie Rogers",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "scottwi01",
    "PlayerName": "Willie Scott",
    "Year": 1970,
    "Num": 0
  },
  {
    "PlayerId": "smithwi02",
    "PlayerName": "Willie Smith",
    "Year": "1977-1980",
    "Num": 0
  },
  {
    "PlayerId": "sojouwi01",
    "PlayerName": "Willie Sojourner",
    "Year": "1972-1975",
    "Num": 0
  },
  {
    "PlayerId": "somerwi01",
    "PlayerName": "Willie Somerset",
    "Year": "1966-1969",
    "Num": 0
  },
  {
    "PlayerId": "warrewi01",
    "PlayerName": "Willie Warren",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "whitewi01",
    "PlayerName": "Willie White",
    "Year": "1985-1986",
    "Num": 0
  },
  {
    "PlayerId": "williwi01",
    "PlayerName": "Willie Williams",
    "Year": 1971,
    "Num": 0
  },
  {
    "PlayerId": "wisewi01",
    "PlayerName": "Willie Wise",
    "Year": "1970-1978",
    "Num": 0
  },
  {
    "PlayerId": "worslwi01",
    "PlayerName": "Willie Worsley",
    "Year": 1969,
    "Num": 0
  },
  {
    "PlayerId": "reedwi01",
    "PlayerName": "Willis Reed",
    "Year": "1965-1974",
    "Num": 0
  },
  {
    "PlayerId": "thomawi01",
    "PlayerName": "Willis Thomas",
    "Year": 1968,
    "Num": 0
  },
  {
    "PlayerId": "hernawi01",
    "PlayerName": "Willy Hernangomez",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "chandwi01",
    "PlayerName": "Wilson Chandler",
    "Year": "2008-2018",
    "Num": 1
  },
  {
    "PlayerId": "washiwi01",
    "PlayerName": "Wilson Washington",
    "Year": "1978-1979",
    "Num": 0
  },
  {
    "PlayerId": "chambwi01",
    "PlayerName": "Wilt Chamberlain",
    "Year": "1960-1973",
    "Num": 0
  },
  {
    "PlayerId": "wilfowi01",
    "PlayerName": "Win Wilfong",
    "Year": "1958-1961",
    "Num": 0
  },
  {
    "PlayerId": "boynewi01",
    "PlayerName": "Winford Boynes",
    "Year": "1979-1981",
    "Num": 0
  },
  {
    "PlayerId": "bennewi01",
    "PlayerName": "Winston Bennett",
    "Year": "1990-1992",
    "Num": 0
  },
  {
    "PlayerId": "critewi01",
    "PlayerName": "Winston Crite",
    "Year": "1988-1989",
    "Num": 0
  },
  {
    "PlayerId": "garlawi01",
    "PlayerName": "Winston Garland",
    "Year": "1988-1995",
    "Num": 0
  },
  {
    "PlayerId": "grimswo01",
    "PlayerName": "Woody Grimshaw",
    "Year": 1947,
    "Num": 0
  },
  {
    "PlayerId": "sauldwo01",
    "PlayerName": "Woody Sauldsberry",
    "Year": "1958-1966",
    "Num": 0
  },
  {
    "PlayerId": "freewo01",
    "PlayerName": "World B. Free",
    "Year": "1976-1988",
    "Num": 0
  },
  {
    "PlayerId": "pattewo01",
    "PlayerName": "Worthy Patterson",
    "Year": 1958,
    "Num": 0
  },
  {
    "PlayerId": "graywy01",
    "PlayerName": "Wyndol Gray",
    "Year": "1947-1948",
    "Num": 0
  },
  {
    "PlayerId": "gibsoxa01",
    "PlayerName": "Xavier Gibson",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "henryxa01",
    "PlayerName": "Xavier Henry",
    "Year": "2011-2015",
    "Num": 1
  },
  {
    "PlayerId": "mcdanxa01",
    "PlayerName": "Xavier McDaniel",
    "Year": "1986-1998",
    "Num": 0
  },
  {
    "PlayerId": "munfoxa02",
    "PlayerName": "Xavier Munford",
    "Year": 2016,
    "Num": 0
  },
  {
    "PlayerId": "rathaxa01",
    "PlayerName": "Xavier Rathan-Mayes",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "silasxa01",
    "PlayerName": "Xavier Silas",
    "Year": 2012,
    "Num": 0
  },
  {
    "PlayerId": "thamexa01",
    "PlayerName": "Xavier Thames",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "yuyanxu01",
    "PlayerName": "Xue Yuyang",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "diawaya01",
    "PlayerName": "Yakhouba Diawara",
    "Year": "2007-2010",
    "Num": 0
  },
  {
    "PlayerId": "ouattya01",
    "PlayerName": "Yakuba Ouattara",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "moreiya01",
    "PlayerName": "Yanick Moreira",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "morinya01",
    "PlayerName": "Yannis Morin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "mingya01",
    "PlayerName": "Yao Ming",
    "Year": "2003-2011",
    "Num": 0
  },
  {
    "PlayerId": "korolya01",
    "PlayerName": "Yaroslav Korolev",
    "Year": "2006-2007",
    "Num": 0
  },
  {
    "PlayerId": "jianlyi01",
    "PlayerName": "Yi Jianlian",
    "Year": "2008-2012",
    "Num": 0
  },
  {
    "PlayerId": "dareyi01",
    "PlayerName": "Yinka Dare",
    "Year": "1995-1998",
    "Num": 0
  },
  {
    "PlayerId": "ferreyo01",
    "PlayerName": "Yogi Ferrell",
    "Year": "2017-2018",
    "Num": 1
  },
  {
    "PlayerId": "laresyo01",
    "PlayerName": "York Larese",
    "Year": 1962,
    "Num": 0
  },
  {
    "PlayerId": "halpeyo01",
    "PlayerName": "Yotam Halperin",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "ndoyeyo01",
    "PlayerName": "Youssou Ndoye",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "tabusyu01",
    "PlayerName": "Yuta Tabuse",
    "Year": 2005,
    "Num": 0
  },
  {
    "PlayerId": "josepyv01",
    "PlayerName": "Yvon Joseph",
    "Year": 1986,
    "Num": 0
  },
  {
    "PlayerId": "dowdeza01",
    "PlayerName": "Zabian Dowdell",
    "Year": 2011,
    "Num": 0
  },
  {
    "PlayerId": "andreza01",
    "PlayerName": "Zach Andrews",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "augusza01",
    "PlayerName": "Zach Auguste",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "colliza01",
    "PlayerName": "Zach Collins",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "lavinza01",
    "PlayerName": "Zach LaVine",
    "Year": "2015-2018",
    "Num": 1
  },
  {
    "PlayerId": "randoza01",
    "PlayerName": "Zach Randolph",
    "Year": "2002-2018",
    "Num": 1
  },
  {
    "PlayerId": "abdulza01",
    "PlayerName": "Zaid Abdul-Aziz",
    "Year": "1969-1978",
    "Num": 0
  },
  {
    "PlayerId": "tabakza01",
    "PlayerName": "Zan Tabak",
    "Year": "1995-2001",
    "Num": 0
  },
  {
    "PlayerId": "cabarza01",
    "PlayerName": "Zarko Cabarkapa",
    "Year": "2004-2006",
    "Num": 0
  },
  {
    "PlayerId": "paspaza01",
    "PlayerName": "Zarko Paspalj",
    "Year": 1990,
    "Num": 0
  },
  {
    "PlayerId": "pachuza01",
    "PlayerName": "Zaza Pachulia",
    "Year": "2004-2018",
    "Num": 1
  },
  {
    "PlayerId": "marshze01",
    "PlayerName": "Zeke Marshall",
    "Year": "-",
    "Num": 0
  },
  {
    "PlayerId": "sinicze01",
    "PlayerName": "Zeke Sinicola",
    "Year": "1952-1954",
    "Num": 0
  },
  {
    "PlayerId": "zawolze01",
    "PlayerName": "Zeke Zawoluk",
    "Year": "1953-1955",
    "Num": 0
  },
  {
    "PlayerId": "rebraze01",
    "PlayerName": "Zeljko Rebraca",
    "Year": "2002-2006",
    "Num": 0
  },
  {
    "PlayerId": "beatyze01",
    "PlayerName": "Zelmo Beaty",
    "Year": "1963-1975",
    "Num": 0
  },
  {
    "PlayerId": "hamilze01",
    "PlayerName": "Zendon Hamilton",
    "Year": "2001-2006",
    "Num": 0
  },
  {
    "PlayerId": "qizh01",
    "PlayerName": "Zhou Qi",
    "Year": 2018,
    "Num": 1
  },
  {
    "PlayerId": "dragizo01",
    "PlayerName": "Zoran Dragic",
    "Year": 2015,
    "Num": 0
  },
  {
    "PlayerId": "planizo01",
    "PlayerName": "Zoran Planinic",
    "Year": "2004-2006",
    "Num": 0
  },
  {
    "PlayerId": "ilgauzy01",
    "PlayerName": "Zydrunas Ilgauskas",
    "Year": "1998-2011",
    "Num": 0
  }
]

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    app.get('/test', function(req, res){
      var options = {
        url: 'http://192.168.43.2:8000/result',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
         body: JSON.stringify({
            grant_type: 'password',
            username: 'user_name',
            password: "user_password"
         })
      };
     request(options, function (error, response, body) {
       if (!error && response.statusCode == 200) {
         console.log(body); // Print the shortened url.
         res.send(body);
       }
     });
    });
    app.get('/team/:id', function(req, res){
      request('http://data.nba.net/10s/prod/v1/2017/players.json', (err, re, body) => {
          if (err) { return console.dir(err); }
          var result = JSON.parse(body);
          var player = result.league.standard;
          var team = [];
          for(var i = 0; i < player.length; i++){
            if(player[i].teamId==nba[parseInt(req.params.id)].team_id){
              team.push(player[i]);
            }
          }
          res.render('pages/team.ejs',{
            "team_name": nba[parseInt(req.params.id)].team,
            "team_logo":nba[parseInt(req.params.id)].logo,
            "team_color":nba[parseInt(req.params.id)].color,
            "team": team
          });
        });
    });
    app.post('/ajax_get_per', function(req, res){
      req.on('data', function(data){
        for(var i = 0; i < nba_player.length; i++){
          if(nba_player[i].PlayerName==JSON.parse(data).pname){
            console.dir(nba_player[i].PlayerId);
            var pid = nba_player[i].PlayerId;
            var fc = String(String(nba_player[i].PlayerId).split('')[0]);
            var url = "https://www.basketball-reference.com/players/"+fc+"/"+nba_player[i].PlayerId+".html";
            console.dir(url);
            request(url, (err, re, body) => {
                if (err) { return console.dir(err); }
                //var sesaonplayed=String(body).split('"advanced.').length-1;
                var game2018=String(body).split('per_game.2018')[1];
                var pts=String(game2018).split('pts_per_g" >')[1];
                var pts=String(String(pts).split('</')[0]).replace('<strong>','');
                var adv=String(body).split('advanced.2018')[1];
                var adv_pos=String(adv).split('pos" >')[1];
                var Pos=String(String(adv_pos).split('</')[0]).replace('<strong>','');
                var adv_bpm=String(adv).split('"bpm" >')[1];
                var BPM=String(String(adv_bpm).split('</')[0]).replace('<strong>','');
                var adv_per=String(adv).split('per" >')[1];
                var PER=String(String(adv_per).split('</')[0]).replace('<strong>','');
                var adv_ws=String(adv).split('"ws" >')[1];
                var WS=String(String(adv_ws).split('</')[0]).replace('<strong>','');
                var adv_blkp=String(adv).split('blk_pct" >')[1];
                var BLKp=String(String(adv_blkp).split('</')[0]).replace('<strong>','');
                var adv_dpbm=String(adv).split('dbpm" >')[1];
                var DPBM=String(String(adv_dpbm).split('</')[0]).replace('<strong>','');
                var adv_dws=String(adv).split('dws" >')[1];
                var DWS=String(String(adv_dws).split('</')[0]).replace('<strong>','');
                var adv_gp=String(adv).split('"g" >')[1];
                var GP=String(String(adv_gp).split('</')[0]).replace('<strong>','');
                var adv_stlp=String(adv).split('stl_pct" >')[1];
                var STLp=String(String(adv_stlp).split('</')[0]).replace('<strong>','');
                var adv_wsp=String(adv).split('"ws" >')[2];
                var wsp=String(String(adv_wsp).split('</')[0]).replace('<strong>','');
                wsp = parseInt(wsp)/parseInt(JSON.parse(data).played);
                var total=String(body).split('totals.2018')[1];
                var adv_trb=String(total).split('trb" >')[2];
                var TRB=String(String(adv_trb).split('</')[0]).replace('<strong>','');
                var adv_mp=String(total).split('mp" >')[2];
                var MP=String(String(adv_mp).split('</')[0]).replace('<strong>','');
                var adv_ast=String(total).split('ast" >')[2];
                var AST=String(String(adv_ast).split('</')[0]).replace('<strong>','');
                var adv_stl=String(total).split('stl" >')[2];
                var STL=String(String(adv_stl).split('</')[0]).replace('<strong>','');
                var adv_blk=String(total).split('blk" >')[2];
                var BLK=String(String(adv_blk).split('</')[0]).replace('<strong>','');
                var adv_ppts=String(total).split('pts" >')[2];
                var ppts=String(String(adv_ppts).split('</')[0]).replace('<strong>','');
                var options = {
                  url: 'http://192.168.43.2:8000/home',
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                   body: JSON.stringify({
                     "PID": pid,
                     "BPM": BPM,
                     "PER": PER,
                     "Pos": Pos,
                     "Pts": pts,
                     "WS": WS,
                     "BLKp": BLKp,
                     "DBPM": DPBM,
                     "DWS": DWS,
                     "GP": GP,
                     "STLp": STLp,
                     "MP": MP,
                     "TRB": TRB,
                     "AST": AST,
                     "STL": STL,
                     "BLK": BLK,
                     "PTS": ppts,
                     "ws": WS
                   })
                };
                console.dir(options);
                request(options, function (error, response, body) {
                  if (!error && response.statusCode == 200) {
                    console.dir(body); // Print the shortened url.
                    var percent = String(body).split(':');
                    res.json({
                      "HoF": parseInt(percent[0]),
                      "Defense": parseInt(percent[1]),
                      "First": parseInt(percent[2]),
                      "PID": pid,
                      "BPM": BPM,
                      "PER": PER,
                      "Pos": Pos,
                      "Pts": pts,
                      "WS": WS,
                      "BLKp": BLKp,
                      "DBPM": DPBM,
                      "DWS": DWS,
                      "GP": GP,
                      "STLp": STLp,
                      "MP": MP,
                      "TRB": TRB,
                      "AST": AST,
                      "STL": STL,
                      "BLK": BLK,
                      "PTS": ppts,
                      "ws": wsp
                    });
                  }
                });
              });
          }
        }
      });
    });
};
