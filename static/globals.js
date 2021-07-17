class MainMatch {
	constructor(name, episode, minTOL, maxTOL) {
		this.name = name;
		this.episode = episode;
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
		return Math.min(num, 12 - this.episode);
	}

}

const dmArray = [
	"Same Picture Hunt",
	"Quattro",
	"Sun, Moon, Star",
	"Truth Detector",
	"Betting Black and White",
	"Black and White",
	"Black and White 2",
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
	new MainMatch("123 Game", 1, 1, 1),
	new MainMatch("Food Chain", 1, 1, 9),
	new MainMatch("Fruit Stand", 1, 1, 1),
	new MainMatch("ID Exchange", 1, 1, 1),
	new MainMatch("Election Game", 2, 1, 1),
	new MainMatch("Seat Exchange", 2, 5, 5),
	new MainMatch("Jury Game", 2, 5, 7), // should only be 5 or 7 but currently no support.
	new MainMatch("Horror Race", 2, 1, 1),
	new MainMatch("Abundance and Famine", 3, 1, 1),
	new MainMatch("King Game", 3, 1, 1),
	new MainMatch("Middle Race", 3, 9, 9),
	new MainMatch("Today's Menu", 3, 1, 1),
	new MainMatch("Zombie Game", 4, 1, 8),
	new MainMatch("Blackout Game", 4, 5, 5),
	new MainMatch("Swords and Shields", 4, 5, 5),
	new MainMatch("Fish Shop", 4, 1, 1),
	new MainMatch("Scamming Horse Race", 5, 1, 1),
	new MainMatch("7 Commandments", 5, 1, 1),
	new MainMatch("Miner Game", 5, 1, 1),
	new MainMatch("Loyalists and Rebels", 5, 1, 1),
	new MainMatch("Catch the Burglar", 6, 1, 2), // I hate this game.
	new MainMatch("Monopoly Game", 6, 1, 1),
	new MainMatch("Stormy Stock Market", 6, 1, 1),
	new MainMatch("Garnet Thief", 6, 1, 1),
	new MainMatch("Open, Pass", 7, 1, 1),
	new MainMatch("God's Judgment", 7, 1, 1),
	new MainMatch("Constellation Game", 7, 1, 1),
	new MainMatch("Seed Poker", 7, 1, 1),
	new MainMatch("Kong's Dilemma", 8, 1, 3),
	new MainMatch("Minus Auction", 8, 1, 1),
	new MainMatch("Investment and Donation", 8, 1, 1),
	new MainMatch("Minus Auction II", 8, 1, 1),
	new MainMatch("Expression Auction", 9, 1, 1),
	new MainMatch("Layoff", 9, 1, 3),
	new MainMatch("Middle Race II", 9, 1, 1),
	new MainMatch("Horror Race II", 9, 1, 1),
	new MainMatch("Confined Scamming Horse Race", 10, 2, 2),
	new MainMatch("Big Deal Game", 10, 1, 1),
	new MainMatch("Chain Auction", 10, 1, 1),
	new MainMatch("Cooperative Hold'em", 10, 1, 1),
	new MainMatch("5:5 Game", 11, 1, 1),
	new MainMatch("Elevator Game", 11, 1, 1),
	new MainMatch("Doubting Yutnori", 11, 1, 1),
	new MainMatch("How Much?", 11, 1, 1)
];

const playersArrays = [
	["Minsoo", "Yuram", "Changyeop", "Jungmoon", "Jinho", "Gura", "Kyungran", "Minseo", "Poong", "Sunggyu", "Junseok", "Sangmin", "Eunji"],
	["Jiwon", "Jinho", "Yooyoung", "Jaekyung", "Dahye", "Doohee", "Eunkyul", "Sangmin", "Yohwan", "Yoonsun", "Hweejong", "Hongchul", "Junghyun"],
	["Yeonseung", "Yeonjoo", "Dongmin", "Yongsuk", "Junghoon", "Kyunghoon", "Yoohyun", "Juri", "Jongbeom", "Hweejong", "Hyunmin", "Ahyoung", "Sujin"],
	["Jungmoon", "Yeonseung", "Jinho", "Dongmin", "Kyunghoon", "Kyungran", "Yoohyun", "Junseok", "Sangmin", "Yohwan", "Yoonsun", "Hyunmin", "Junghyun"]
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}
