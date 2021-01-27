class Game {
  constructor(){
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref = await database.ref("playerCount").once("value");
      if(playerCountref.exists()){
        playerCount = playerCountref.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){
  form.hide();
  textSize(20);
  text("Game Start",120,100);
  Player.getPlayerinfo();
  if(allPlayers!== undefined){
  var yposition = 130;
  for(var plr in allPlayers){
    if(plr == "player"+ player.index){
      fill("red");
    }
    else{
      fill("black")
    }
    yposition = yposition+20;
    textSize(14);
    text(allPlayers[plr].name+": "+ allPlayers[plr].distance,120,yposition);

  }
  }
}
}
