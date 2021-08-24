class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }



  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {

this.handleElements()

handlePlayerControl()

Player.getPlayersInfo()

if (allPlayers !== undefined) {

   image(track, 0, -height *5, width, height *6)

   var index = 0
   index = index + 1

   var x = allPlayers[plr].positonX
   var y = height - allPlayers[plr].positionY

   cars[index - 1].position.x = x
   cars[index - 1].position.y = y

   if(index === player.index){

    stroke(10)
    fill("red")
    ellipse(x, y, 60, 60)

    camera.position.x = cars[index - 1].position.x
    camera.position.y = cars[index - 1].position.y  
    
   }
}

this.handlePlayerControl()

drawSprites()

  } 

  handlePlayerControl(){

    if(keyIsDown(UP_ARROW)){
  
      player.positionY += 
      player.update 
    }
  }
}



