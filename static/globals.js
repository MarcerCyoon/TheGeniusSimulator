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
	"Middle",
	"Elevator",
	"Expression",
	"Garnet",
	"Fruit",
	"Spice",
	"Confined",
	"Scamming",
	"Seed",
	"Stormy",
	"King",
	"Election",
	"Laser",
	"Rotating",
	"Abundance",
	"1, 2, 3",
	"Black and White",
	"Minus",
	"Apotheosis",
	"Blockade",
	"Winning",
	"Unfair",
	"Reverse",
	"Open",
	"Fish",
	"Food",
	"Social",
	"Crystal",
	"Miner",
	"Number",
	"Mental",
	"Painting",
	"Grid",
	"Marcer",
	"Kong",
	"Spirit",
	"Zombie",
	"Genius",
	"Glitched",
	"Ultimate",
	"Euler",
	"X",
	"Chill",
	"Betting",
	"Opal",
	"Famine",
	"Monopoly",
	"Seat",
	"Constellation",
	"Big Deal",
	"Losing",
	"Exploding",
	"Double-sided",
	"Halo",
	"Paradox",
	"Element",
	"Clone",
	"Definitely Not",
	"Welcome to the",
	"Catch the",
	"Murder",
	"Squeaky",
	"awa"
];

const suffixArray = [
	"Race",
	"Thief",
	"'s Dilemma",
	"Dilemma",
	"'s Court",
	"Court",
	"'s Count",
	"Count",
	", Pass",
	"Goofspiel",
	"Poker",
	"Hold'em",
	"Roulette",
	"Auction",
	"Yutnori",
	"Game",
	"Chain",
	"Dungeon",
	"Burglar",
	"Dominion",
	"Stand",
	"Stock Market",
	"Exchange",
	"Maze",
	"Labyrinth",
	"Janggi",
	"Chess",
	"Checkers",
	"Tic-Tac-Toe",
	"RPS",
	"Dots and Boxes",
	"Streak",
	"Judgment",
	"Commandments",
	"Slingshot",
	"Simulator",
	"Shop",
	"Hunt",
	"Warfare",
	"Snake",
	"Rebels",
	"Loyalists",
	"Criminals",
	"Marathon",
	"Basketball",
	"Black and White", // meme black and white in both arrays
	"Element", // meme element in both arrays
	"Trouble",
	"Quattro",
	"Mayhem"
];

function generateMainMatchName() {
	var chance = 100;
	var num;
	var name;

	// will generated name follow normal standards or "A and B" standards?
	if (getRandomInt(0, 100) <= 85) {
		name = "";
		prefixes = [...prefixArray];

		while (chance >= getRandomInt(0, 100)) {
			num = getRandomInt(0, prefixes.length);
			name += " " + retrieve(prefixes, num);
			chance /= 6;
		}

		var suffixes = suffixArray;

		if (chance < 16) {
			// filter out ", pass" if >1 prefixes
			suffixes = suffixArray.filter(suffix => !suffix.includes(","));
		} else if (name.includes(" the")) {
			// filter out all the ones with grammar if it name has "Welcome to the" or "Catch the"
			suffixes = suffixArray.filter(suffix => !(suffix.includes(",") || suffix.includes("'s")));
		}

		num = getRandomInt(0, suffixes.length);

		// special case handling
		if (!(suffixes[num].includes(",") || suffixes[num].includes("'s"))) {
			name += " "
		}

		name += suffixes[num];

	} else {
		var nameArray = [];
		var prefixes = prefixArray.filter(prefix => !(prefix.includes(" the")));
		var suffixes = suffixArray.filter(suffix => !(suffix.includes(",") || suffix.includes("'s")));
		var words = [...prefixes, ...suffixes];

		while (chance >= getRandomInt(0, 100)) {
			num = getRandomInt(0, words.length);
			nameArray.push(retrieve(words, num));
			chance /= 20;
		}

		num = getRandomInt(0, words.length);
		nameArray.push(retrieve(words, num));

		name = nameArray.join(" and ");
	}

	// small chance you get II or III added to the end of your game
	if (getRandomInt(0, 100) <= 8) {
		if (getRandomInt(0, 100) <= 30) {
			name += " III";
		} else {
			name += " II";
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
