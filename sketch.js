		const Engine = Matter.Engine;
		const World = Matter.World;
		const Bodies = Matter.Bodies;
		const Body = Matter.Body;
		var pc,pci1,pci2,pci3,pci4
		var bg1,bg2,bg3,bg4,bg1i,bg2i,bg3i,bg4i
		var g1,g2,g3,g4
		var gameState = 0;
		var play,playi

		function preload(){
		pci1 = loadImage("monkey.png");
		pci2 = loadImage("sam1.png");
		pci3 = loadImage("sam2.png");
		pci4 = loadImage("bm.png");
		bg1i = loadImage("bg1 (1).jpg");
		bg2i = loadImage("bg3.jpg");
		bg3i = loadImage("bg2.jpg");
		bg4i = loadImage("bbg4.jpg");
		playi = loadImage("play.png");
		}

		function setup() {
		createCanvas(1600,600);
		bg1 = createSprite(100,175);
		bg1.addImage("bg1",bg1i);
		bg1.scale = 0.5
		bg2 = createSprite(655,165);
		bg2.addImage("bg2",bg2i);
		bg2.scale = 0.5
		bg3 = createSprite(1000,160);
		bg3.addImage("bg3",bg3i);
		bg3.scale = 0.3
		bg4 = createSprite(1450,160);
		bg4.addImage("bg4",bg4i);
		bg4.scale = .8
		pc = createSprite(60,285);
		pc.addImage("pc",pci1);
		pc.scale = 0.8	
		engine = Engine.create();
		world = engine.world;
		Engine.run(engine);
		}

		function draw() {
  		rectMode(CENTER);
  		background(0);
  		if(gameState === 0){
		play = createSprite(1200,550);
		play.addImage("play",playi);
		play.scale = 0.5
		play.visible = true;
		}
    	if(gameState === 1){
		if (keyIsDown(RIGHT_ARROW)){
		pc.x = pc.x+5;
		}
		//if(keyIsDown(UP_ARROW)){
		//pc.velocityY = -12
		//}
		//pc.velocityY = pc.velocityY+0.8
		if(pc.x>30){
		pc.scale = 0.8
		}
		if(pc.x>350){
    	pc.addImage("pc",pci2);
		pc.scale = 0.7
		pc.y = 270;
		}
		if(pc.x>770){
		pc.addImage("pc",pci3);
		pc.scale = 0.7
		pc.y = 260;
		}
		if(pc.x>1150){
		pc.addImage("pc",pci4);
		pc.scale = 0.3
		pc.y = 290;
		}
	    }
  		drawSprites();
  		if(mousePressedOver(play)) {
    	gameState = 1
  		}
		}

