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

const prefixArray = [
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
	"Election",
	"Laser",
	"Rotating",
	"Revolting",
	"Abundance",
	"1, 2, 3",
	"A, B, C",
	"Black and White",
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
	"Crystal",
	"Miner",
	"Picture",
	"Number",
	"Mental",
	"Painting",
	"Grid",
	"Placebo",
	"Nocebo",
	"Kong's",
	"Kong",
	"Spirit",
	"Jury",
	"Zombie",
	"Genius",
	"Glitched",
	"Ultimate",
	"Euler",
	"X",
	"Marcer",
	"ID",
	"Chill",
	"Betting",
	"Bidding",
	"Swapping",
	"Jousting",
	"Drafting",
	"Trading",
	"Smuggling",
	"Channel",
	"Domino",
	"Blind",
	"Atomic",
	"Modular",
	"Quick",
	"Bullet",
	"Pathing",
	"Today's",
	"Yesterday's",
	"Tomorrow's",
	"Liar's",
	"Liar",
	"Coin",
	"Gold",
	"Diamond",
	"Opal",
	"Famine",
	"Monopoly",
	"Angel",
	"Devil",
	"Werewolf",
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
	"Double-sided",
	"Halo",
	"Zoom",
	"Trivia",
	"Paradox",
	"Element",
	"Alchemy",
	"Gyul",
	"Hap",
	"Space",
	"Clone",
	"Binary",
	"Hexadecimal",
	"Code",
	"3D",
	"4D",
	"5D",
	"Extreme",
	"Definitely Not",
	"One Night",
	"Welcome to the",
	"Catch the",
	"Mystery",
	"Sign",
	"Gift",
	"Murder",
	"Target",
	"Flower",
	"Farming",
	"Submarine",
	"Horse",
	"Boat",
	"Dragon",
	"Wyvern",
	"Wizard",
	"Archwizard",
	"God's",
	"God",
	"Squeaky",
	"Sword",
	"Shield",
	"Universal",
	"Galaxy",
	"Ice",
	"Fire",
	"White",
	"Black",
	"Red",
	"Yellow",
	"Green",
	"Purple",
	"Blue",
	"Pink",
	"awa"
];

const suffixArray = [
	"Race",
	"Thief",
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
	"Hold'em",
	"Roulette",
	"Auction",
	"Draft",
	"Sign",
	"Set",
	"Hopping",
	"Square",
	"Squares",
	"Triangle",
	"Triangles",
	"Hexagon",
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
	"Burglar",
	"Dominion",
	"Pandemic",
	"Allegiance",
	"Stand",
	"Market",
	"Stock Market",
	"Exchange",
	"Mansion",
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
	"Tic-Tac-Toe",
	"-Tac-Toe",
	"RPS",
	"Dots and Boxes",
	"Connect Four",
	"Bridge",
	"Monorail",
	"Nim",
	"Tetris",
	"Effect",
	"Streak",
	"Judgment",
	"Commandments",
	"Domain",
	"Teller",
	"Collector",
	"Detector",
	"Deflector",
	"Defender",
	"Defenders",
	"Slingshot",
	"Simulator",
	"Shop",
	"Party",
	"Jam",
	"Gamble",
	"Trick",
	"Ways",
	"Struggle",
	"Tactics",
	"Expedition",
	"Hunt",
	"Apocalypse",
	"Warfare",
	"War",
	"Crusade",
	"Conquest",
	"Battle Royale",
	"Snake",
	"Rebels",
	"Killers",
	"Loyalists",
	"Detectives",
	"Criminals",
	"Mafia",
	"Marathon",
	"Basketball",
	"Gyul",
	"Hap",
	"Werewolf", // meme werewolf in both arrays
	"Black and White", // meme black and white in both arrays
	"Element", // meme element in both arrays
	"Field",
	"Trouble",
	"Quattro",
	"Network",
	"City",
	"Mayhem"
];

function generateMainMatchName() {
	var chance = 100;
	var num;
	var name;

	// will generated name follow normal standards or "A and B" standards?
	if (getRandomInt(0, 100) <= 85) {
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

	// small chance you get II, III, or Redux added to the end of your game
	if (getRandomInt(0, 100) <= 8) {
		if (getRandomInt(0, 100) <= 30) {
			name += " III";
		} else if (getRandomInt(0, 100) <= 50) {
			name += " II";
		} else {
			name += " Redux";
		}
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


function retrieve(arr, num) {
  return arr.splice(num, 1)[0];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}
