	const plutoniums = new Item("plutonium",Color.valueOf("e6e5e6"));
		plutoniums.cost = 30;
		plutoniums.hardness = 6;
		plutoniums.explosiveness = 3.0;
		plutoniums.radioactivity = 1.5;

	const uraniums = new Item("uranium", Color.valueOf("cfd058"));
		uraniums.cost = 15;
		uraniums.hardness = 8;
		uraniums.explosiveness = 3.5;
		uraniums.radioactivity = 3.0;
		

const plutonium = Vars.content.getByName(ContentType.item,"nuclearmod-plutonium");
const plutoniumOre = new OreBlock(plutoniums);

const uranium = Vars.content.getByName(ContentType.item,"nuclearmod-uranium");
const uraniumOre = new OreBlock(uraniums);