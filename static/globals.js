class MainMatch {
	constructor(name, players, minTOL, maxTOL) {
		this.name = name;
		this.players = players;
		this.minTOL = minTOL; // minTOLs, excluding ties.

		if (maxTOL >= minTOL) {
			this.maxTOL = maxTOL; // maxTOLs, excluding ties.
		} else {
			this.maxTOL = minTOL;
		}

	}

	get TOLs() {
		return this.genTOLs();
	}

	genTOLs() {
		var num;

		// If the max TOL is 1, account for the possibility of ties. Max ties of 3, for now.
		if (this.maxTOL == 1) {
			if (getRandomInt(0, 10) == 0) {
				if (getRandomInt(0, 10) < 3) {
					num = 3;
				} else {
					num = 2;
				}
			} else {
				num = 1;
			}
		} else {
			num = getRandomInt(this.minTOL, this.maxTOL + 1);
		}

		// Don't accidentally hand out more TOLs than players and make sure two always don't have TOLs
		return Math.min(num, this.players - 2);
	}
}

const dmArray = [
	"Same Picture Hunt",
	"Quattro",
	"Sun, Moon, Star",
	"Truth Detector",
	"Betting Black and White",
	"Black and White",
	"Black and White II",
	"Betting RPS",
	"Indian Poker",
	"Double-sided Poker",
	"Image Game",
	"Gyul! Hap!",
	"Tactical Yutnori",
	"Monorail",
	"Memory Maze",
	"Same Number Hunt",
	"12 Janggi",
	"Laser Chess",
	"Winning Streak",
	"Number Janggi"
];

const mmArray = [
	new MainMatch("1, 2, 3 Game", 13, 1, 1),
	new MainMatch("Food Chain", 13, 1, 9),
	new MainMatch("Fruit Stand", 13, 1, 1),
	new MainMatch("ID Exchange", 13, 1, 1),
	new MainMatch("Election Game", 12, 1, 1),
	new MainMatch("Seat Exchange", 12, 5, 5),
	new MainMatch("Jury Game", 12, 5, 7), // should only be 5 or 7 but currently no support.
	new MainMatch("Horror Race", 12, 1, 1),
	new MainMatch("Abundance and Famine", 11, 1, 1),
	new MainMatch("King Game", 11, 1, 1),
	new MainMatch("Middle Race", 11, 9, 9),
	new MainMatch("Today's Menu", 11, 1, 1),
	new MainMatch("Zombie Game", 10, 1, 8),
	new MainMatch("Blackout Game", 10, 5, 5),
	new MainMatch("Sword and Shield", 10, 5, 5),
	new MainMatch("Fish Shop", 10, 1, 1),
	new MainMatch("Scamming Horse Race", 9, 1, 1),
	new MainMatch("7 Commandments", 9, 1, 1),
	new MainMatch("Miner Game", 9, 1, 1),
	new MainMatch("Loyalists and Rebels", 9, 1, 1),
	new MainMatch("Catch the Burglar", 8, 1, 2), // I hate this game.
	new MainMatch("Monopoly Game", 8, 1, 1),
	new MainMatch("Stormy Stock Market", 8, 1, 1),
	new MainMatch("Garnet Thief", 8, 1, 1),
	new MainMatch("Open, Pass", 7, 1, 1),
	new MainMatch("God's Judgment", 7, 1, 1),
	new MainMatch("Constellation Game", 7, 1, 1),
	new MainMatch("Seed Poker", 7, 1, 1),
	new MainMatch("Kong's Dilemma", 6, 1, 3),
	new MainMatch("Minus Auction", 6, 1, 1),
	new MainMatch("Investment and Donation", 6, 1, 1),
	new MainMatch("Minus Auction II", 6, 1, 1),
	new MainMatch("Expression Auction", 5, 1, 1),
	new MainMatch("Layoff", 5, 1, 3),
	new MainMatch("Middle Race II", 5, 1, 1),
	new MainMatch("Horror Race II", 5, 1, 1),
	new MainMatch("Confined Scamming Horse Race", 4, 2, 2),
	new MainMatch("Big Deal Game", 4, 1, 1),
	new MainMatch("Chain Auction", 4, 1, 1),
	new MainMatch("Cooperative Hold'em", 4, 1, 1),
	new MainMatch("5:5 Game", 3, 1, 1),
	new MainMatch("Elevator Game", 3, 1, 1),
	new MainMatch("Doubting Yutnori", 3, 1, 1),
	new MainMatch("How Much?", 3, 1, 1)
];

const playersArrays = [
	["Minsoo", "Yuram", "Changyeop", "Jungmoon", "Jinho", "Gura", "Kyungran", "Minseo", "Poong", "Sunggyu", "Junseok", "Sangmin", "Eunji"],
	["Jiwon", "Jinho", "Yooyoung", "Jaekyung", "Dahye", "Doohee", "Eunkyul", "Sangmin", "Yohwan", "Yoonsun", "Hweejong", "Hongchul", "Junghyun"],
	["Yeonseung", "Yeonjoo", "Dongmin", "Yongsuk", "Junghoon", "Kyunghoon", "Yoohyun", "Juri", "Jongbeom", "Hweejong", "Hyunmin", "Ahyoung", "Sujin"],
	["Jungmoon", "Yeonseung", "Jinho", "Dongmin", "Kyunghoon", "Kyungran", "Yoohyun", "Junseok", "Sangmin", "Yohwan", "Yoonsun", "Hyunmin", "Junghyun"]
];

const commArrays = [
	["Isa", "Deusovi", "Jihyo", "Jiffa", "e_is_cool", "chaotic_iak", "relay400", "Meladog", "Heol", "RedsToad", "VicariousShaner", "AZNDEVIL", "MathTurtle"],
	["Penzo", "jkittykitkat", "robert", "Liridium", "tiac", "Rosa", "Meg", "Zacho", "Chargestone96", "Icecube", "pseudonam", "Yoshi", "someguy"],
	["Jackson", "Abi", "Hedger", "Rexxy", "Drey", "Hyeonmu", "infinitejester00", "Isa", "Six", "SoftServe", "powerofdeath", "Crobat", "Jiffa"],
	["Xanth", "Orthuss", "kaycali86", "Konstantinos", "Shadow", "Lexicat", "Deusovi", "Smocke", "Icecube", "Andrew", "Frionel", "MathTurtle", "Numbers"],
	["MarcerMercer", "Liridium", "RedsToad", "pixie", "Grunkle Squeaky", "Craig", "jkittykitkat", "wikkiden", "Piggy", "Jet", "Chaotic", "Sapphireonice", "Simoz"],
	["Maddie", "Sally", "Da Letter El", "Lexicat", "Chaotic", "Scarlet", "SFGiantsFan", "Aslyui", "Benji", "Radja", "JohnAlwin", "beanz222", "MathTurtle"],
	["jakkdl", "Da Letter El", "mado55", "e_is_cool", "Tiac", "Sally", "Zero", "Kevin", "Ethy", "Jackson", "Spadez", "Toby", "Tripado"],
	["VicariousShaner", "Isa", "Rhys", "Nevaeh", "Landon", "Teal", "JohnAlwin", "Jiffa", "hazard", "rozes", "Swiggle", "Vijay", "Chazza647"]
]

const prefixes = [
	"Doubting",
	"Cooperative",
	"Horror",
	"Blackout",
	"Tactical",
	"Middle",
	"Elevator",
	"Expression",
	"Chain",
	"Garnet",
	"Fruit",
	"Spice",
	"Truth",
	"Dare",
	"Confined",
	"Scamming",
	"Seed",
	"Same",
	"Different",
	"Stormy",
	"King",
	"Queen",
	"Jester",
	"Joker",
	"Laser",
	"Rotating",
	"Revolting",
	"Voting",
	"Politician",
	"Abundance",
	"1, 2, 3",
	"A, B, C",
	"Dissenting",
	"Indian",
	"American",
	"Korean",
	"Russian",
	"All-In",
	"Plus",
	"Minus",
	"Apotheosis",
	"Blockade",
	"Winning",
	"Losing",
	"Restricted",
	"Sliding",
	"Bribing",
	"Unfair",
	"Broken",
	"Reverse",
	"Misére",
	"Open",
	"Public",
	"Private",
	"Virtual",
	"Fish",
	"Food",
	"Image",
	"Social",
	"Antisocial",
	"Crystal",
	"Miner",
	"Picture",
	"Number",
	"Mental",
	"Math",
	"Memory",
	"Painting",
	"Potion",
	"Puzzle",
	"Grid",
	"Placebo",
	"Nocebo",
	"Kong's",
	"Kong",
	"Pokémon",
	"Spirit",
	"Jury",
	"Zombie",
	"Genius",
	"Glitched",
	"Ultimate",
	"Penultimate",
	"Final",
	"Euler",
	"Oiler",
	"X",
	"Marcer",
	"Whims",
	"ID",
	"Chill",
	"Betting",
	"Bidding",
	"Swapping",
	"Jousting",
	"Drafting",
	"Trading",
	"Smuggling",
	"Grouping",
	"Guessing",
	"Channel",
	"Domino",
	"Hexomino",
	"Blind",
	"Atomic",
	"Modular",
	"Quick",
	"Bullet",
	"Pathing",
	"Today's",
	"Tonight's",
	"Yesterday's",
	"Tomorrow's",
	"Liar's",
	"Liar",
	"Ponzi's",
	"Ponzi",
	"Coin",
	"Gold",
	"Diamond",
	"Opal",
	"Famine",
	"Monopoly",
	"Robo",
	"Quantum",
	"Mini",
	"Field",
	"Seat",
	"Tile",
	"Constellation",
	"Big Deal",
	"Far Out",
	"Team",
	"District",
	"Partner",
	"Exploding",
	"Investment",
	"Donation",
	"Taxation",
	"Capitalism",
	"Anarchy",
	"Double-sided",
	"Romeo and Juliet",
	"Hexagonal",
	"Halo",
	"Zoom",
	"Trivia",
	"Infinite",
	"Alchemy",
	"Space",
	"Ocean",
	"Clone",
	"Binary",
	"Hexadecimal",
	"Code",
	"3D",
	"4D",
	"5D",
	"Layered",
	"Extreme",
	"Super",
	"Ultra",
	"Normal",
	"Definitely Not",
	"The Biggest",
	"The Smallest",
	"The Best",
	"The Worst",
	"One Night",
	"Welcome to the",
	"Death of the",
	"History of the",
	"Sinking of the",
	"Memories of the",
	"Playthings of the",
	"Art of the",
	"Hero of the",
	"Catch the",
	"Crack the",
	"Variations on",
	"Highs and Lows of",
	"All Hands on",
	"Proof by",
	"The Amazing",
	"Flat Earth",
	"Fantasy",
	"Multi-Round",
	"Mystery",
	"Sign",
	"Letter",
	"Gift",
	"Murder",
	"Target",
	"Flower",
	"Bouquet",
	"Blooming",
	"Farming",
	"Submarine",
	"Horse",
	"Boat",
	"Dragon",
	"Wyvern",
	"Wizard",
	"Star-Spangled",
	"Turbo",
	"Rune",
	"Archwizard",
	"Pandora's",
	"God's",
	"God",
	"Divine",
	"Gravity",
	"Astral",
	"Secret",
	"Squeaky",
	"Sword",
	"Lance",
	"Axe",
	"Shield",
	"Soul",
	"Universal",
	"Galaxy",
	"Devil",
	"Devil's",
	"Demonic",
	"Demon",
	"Demon's",
	"Angelic",
	"Angel",
	"Angel's",
	"Virus",
	"Ice",
	"Fire",
	"Electric",
	"Water",
	"White",
	"Black",
	"Red",
	"Yellow",
	"Green",
	"Purple",
	"Blue",
	"Pink",
	"Parallel",
	"Chaos",
	"Rewind",
	"Renounce",
	"Redeem",
	"Recess",
	"Wild, Wild",
	"Flickering",
	"Knight",
	"Rook",
	"Bishop",
	"Pawn",
	"Placement",
	"Magnet",
	"Magnetic",
	"Booster",
	"Minecart",
	"Unlucky",
	"Lucky",
	"Bomb",
	"Thwart",
	"Essential",
	"Artistic",
	"Compass",
	"Composer",
	"Variety",
	"Diplomatic",
	"Starry",
	"Cloudy",
	"Subliminal",
	"Stacking",
	"Fixing",
	"Progressive",
	"Upgrade",
	"Potential",
	"Power",
	"Alpha",
	"Beta",
	"Traffic",
	"Rocky",
	"Word",
	"Bow",
	"Arrow",
	"Cursed",
	"awa"
];

const suffixes = [
	"Race",
	"'s Dilemma",
	"Dilemma",
	"'s Deceit",
	"Deceit",
	"'s Court",
	"Court",
	"'s Count",
	"Count",
	"Open, Pass",
	", Pass",
	"Menu",
	"Goofspiel",
	"Poker",
	"Blackjack",
	"Hold'em",
	"Roulette",
	"Auction",
	"Crashdown",
	"Draft",
	"Sign",
	"Set",
	"Hopping",
	"Squares",
	"Triangles",
	"Hexagons",
	"Duos",
	"Trios",
	"Duel",
	"Standoff",
	"Dice",
	"Block",
	"Game",
	"Speedrun",
	"Circuit",
	"Chain",
	"Tournament",
	"Invitational",
	"Plunder",
	"Dungeon",
	"Bubble",
	"Escape",
	"Dominion",
	"Pandemic",
	"Allegiance",
	"Stand",
	"Last Stand",
	"Market",
	"Stock Market",
	"Market Crater",
	"Exchange",
	"Mansion",
	"Voyage",
	"Machine",
	"Maze",
	"Labyrinth",
	"Janggi",
	"Ur",
	"Yutnori",
	"Gomoku",
	"Sudoku",
	"Chess",
	"Checkers",
	"Chutes and Ladders",
	"Battleship",
	"Solitaire",
	"Tic-Tac-Toe",
	"-Tac-Toe",
	"-finding",
	"RPS",
	"Dots and Boxes",
	"Connect Four",
	"Bridge",
	"Monorail",
	"Duorail",
	"Nim",
	"Tetris",
	"Effect",
	"Streak",
	"Judgment",
	"Commandments",
	"Domain",
	"Teller",
	"Breaker",
	"Collector",
	"Constructor",
	"Destroyer",
	"Detector",
	"Deflector",
	"Defender",
	"Defenders",
	"Slingshot",
	"Simulator",
	"Slayer",
	"Shop",
	"Party",
	"Party Pack",
	"Jam",
	"Gamble",
	"Trick",
	"Ways",
	"Struggle",
	"Tactics",
	"Expedition",
	"Hunt",
	"Raid",
	"Apocalypse",
	"Warfare",
	"War",
	"Clash",
	"Fight",
	"Crusade",
	"Conquest",
	"Battle Royale",
	"Kingdom",
	"Empire",
	"Alignment",
	"Snake",
	"Kittens",
	"Rebels",
	"Killers",
	"Loyalists",
	"Detectives",
	"Criminals",
	"Mafia",
	"Marathon",
	"Basketball",
	"Assassination",
	"Field",
	"Safe",
	"Trouble",
	"Network",
	"City",
	"Town",
	"Mayhem",
	"Library",
	"Titanic",
	"Conundrum",
	"Konundrum",
	"Flow",
	"Box",
	"Bluff",
	"Anguish",
	"Runes",
	"Heaven",
	"Hell",
	"Tartarus",
	"Robbery",
	"Ballad",
	"Aria",
	"Crypt",
	"Highway",
	"Connector",
	"Arrangement",
	"Estate",
	"Theory",
	"Contradiction",
	"Collapse",
	"Test",
	"Quiz",
	"Horror",
	"Extract",
	"Extraction",
	"Signals",
	"Patterns",
	"Route",
	"Path",
	"Connection",
	"Connections",
	"Rite",
	"Ritual",
	"Favor",
	"Collision",
	"Collisions",
	"Fate",
	"Loop",
	"Factory",
	"Interpretation",
	"Treasure Island"
];

const both = [
	"Quattro",
	"Werewolf",
	"Black and White",
	"Element",
	"Death",
	"Shift",
	"Square",
	"Triangle",
	"Hexagon",
	"Election",
	"Gyul",
	"Hap",
	"Paranoia",
	"Planet",
	"Mitosis",
	"Thief",
	"Bandit",
	"Burglar",
	"Past",
	"Present",
	"Future",
	"Omega",
	"Love Letter",
	"Rainbow Road",
	"Brain",
	"Signal",
	"Pattern",
	"Night",
	"Day",
	"Vacation",
	"Clock",
	"Paradox",
	"Archery",
	"Curse"
];

const prefixArray = both.concat(prefixes);
const suffixArray = both.concat(suffixes);

function generateMainMatchName() {
	var chance = 100;
	var num;
	var name;

	// will generated name follow normal standards or "A and B" standards?
	if (getRandomInt(0, 100) <= 92) {
		name = "";
		var prefixes = [...prefixArray];

		while (chance >= getRandomInt(0, 100)) {
			num = getRandomInt(0, prefixes.length);
			name += " " + retrieve(prefixes, num);
			chance /= 6;
		}

		var suffixes = suffixArray;

		if (chance < 16) {
			// filter out ", pass" if >1 prefixes
			suffixes = suffixArray.filter(suffix => !suffix.startsWith(","));
		} else if (name.includes(" the") || name.includes("'s")) {
			// filter out all the ones with grammar if name has "Welcome to the" or "Catch the" or a "'s"
			suffixes = suffixArray.filter(suffix => !(suffix.startsWith(",") || suffix.includes("'s") || suffix.startsWith("-")));
		}

		num = getRandomInt(0, suffixes.length);

		// special case handling
		if (!(suffixes[num].startsWith(",") || suffixes[num].includes("'s") || suffixes[num].startsWith("-"))) {
			name += " "
		}

		name += suffixes[num];

	} else {
		var nameArray = [];
		var prefixes = prefixArray.filter(prefix => !(prefix.includes(" the") || prefix.includes("'s")));
		var suffixes = suffixArray.filter(suffix => !(suffix.startsWith(",") || suffix.includes("'s") || suffix.startsWith("-")));
		var words = [...prefixes, ...suffixes];

		while (chance >= getRandomInt(0, 100)) {
			num = getRandomInt(0, words.length);
			nameArray.push(retrieve(words, num));
			chance /= 20;
		}

		num = getRandomInt(0, words.length);
		nameArray.push(retrieve(words, num));

		if (getRandomInt(0, 100) <= 70) {
			name = nameArray.join(" and ");
		} else {
			name = nameArray.join(" or ");
		}

	}

	// small chance you get II, III, ∞, or Redux added to the end of your game
	if (getRandomInt(0, 100) <= 5) {
		if (getRandomInt(0, 100) <= 60) {
			name += " II";
		} else if (getRandomInt(0, 100) <= 30) {
			name += " III";
		} else if (getRandomInt(0, 100) <= 50) {
			name += " ∞";
		} else {
			name += " Redux";
		}
	}

	// small chance to add Not to start of your game
	if (getRandomInt(0, 100) <= 5) {
		name = 'Not ' + name;
	}

	return name.trim();
}

function generateMainMatch(players) {
	var name = generateMainMatchName();
	var maxTOL;
	var num = getRandomInt(0, 100);

	if (num <= 5) {
		// decent chance that there will be 1 ToL
		maxTOL = 1;
	} else if (num <= 15) {
		// chances of lots of tokens is low
		maxTOL = getRandomInt((players - 1) / 2, players - 1);
	} else {
		maxTOL = getRandomInt(1, (players - 1) / 2);
	}

	var minTOL = getRandomInt(1, maxTOL + 1);

	return new MainMatch(name, players, minTOL, maxTOL);
}

function generateDeathMatch() {
	var num = getRandomInt(0, 100);

	if (num <= 25) {
		var name = generateMainMatchName();
	} else {
		var dmChoice = getRandomInt(0, dmArray.length);
		var name = dmArray[dmChoice];
	}
	
	return name;
}


function retrieve(arr, num) {
  return arr.splice(num, 1)[0];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

// get index of the element in arr that corresponds to the value when arr is summed
// if arr are [5, 6, 1], then rolling anything (0, 5) is 0, (5, 11) is 1, (11, 12) is 2.
function getSumIndex(arr, value) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (value < sum) {
			return i;
		}
	}
	// return end index if escapes for loop
	return arr.length - 1;
}


// from https://sebhastian.com/javascript-csv-to-array/
function csvToArray(str, delimiter = ",") {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return the array
  return arr;
}