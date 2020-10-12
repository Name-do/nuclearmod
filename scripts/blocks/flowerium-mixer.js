/*fucking code! you are a bitch hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh get out this world, you must go to hell*/
const floweriumMixer = extendContent(GenericSmelter, "flowerium-mixer",{});
var floweriumMixerAnim = 0;
var RGB_G_B = 0;
var RGB_G_BIsUp = 0;
floweriumMixer.buildType=()=> extendContent(GenericSmelter.SmelterBuild,floweriumMixer,{
	draw(){
	//???
	    this.super$draw();
		
		floweriumMixerAnim = Mathf.floorPositive(Time.time()%31/8);
		if(RGB_G_B <= 0) { RGB_G_BIsUp = 1; }
		else if(RGB_G_B >= 1) { RGB_G_BIsUp = 0; }

		if(RGB_G_BIsUp = 1) 
		{
			RGB_G_B = Mathf.floorPositive(Time.time()%101) / 100;
		}
		else
		{
			RGB_G_B = 1 - Mathf.floorPositive(Time.time()%101) / 100;
		}

		//Draw
		Draw.color(1, RGB_G_B, RGB_G_B);
        Draw.z(Layer.effect -1);
		Draw.rect(Core.atlas.find("nuclearmod-flowerium-mixer-anim-" + floweriumMixerAnim), this.x, this.y);
	}
});