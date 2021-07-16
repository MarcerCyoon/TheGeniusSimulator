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
	["123 Game", 1],
	["Food Chain", 1],
	["Fruit Stand", 1],
	["ID Exchange", 1],
	["Election Game", 2],
	["Seat Exchange", 2],
	["Jury Game", 2],
	["Horror Race", 2],
	["Abundance and Famine", 3],
	["King Game", 3],
	["Middle Race", 3],
	["Today's Menu", 3],
	["Zombie Game", 4],
	["Blackout Game", 4],
	["Swords and Shields", 4],
	["Fish Shop", 4],
	["Scamming Horse Race", 5],
	["7 Commandments", 5],
	["Miner Game", 5],
	["Loyalists and Rebels", 5],
	["Catch the Burglar", 6],
	["Monopoly Game", 6],
	["Stormy Stock Market", 6],
	["Garnet Thief", 6],
	["Open, Pass", 7],
	["God's Judgment", 7],
	["Constellation Game", 7],
	["Seed Poker", 7],
	["Kong's Dilemma", 8],
	["Minus Auction", 8],
	["Investment and Donation", 8],
	["Minus Auction II", 8],
	["Expression Auction", 9],
	["Layoff", 9],
	["Middle Race II", 9],
	["Horror Race II", 9],
	["Confined Scamming Horse Race", 10],
	["Big Deal Game", 10],
	["Chain Auction", 10],
	["Cooperative Hold'em", 10],
	["5:5 Game", 11],
	["Elevator Game", 11],
	["Doubting Yutnori", 11],
	["How Much?", 11]
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
