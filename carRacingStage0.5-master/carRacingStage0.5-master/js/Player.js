class Player {
  constructor(){
    this.name = null;
    this.index = null;
    this.distance = 0;
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
  }
  static getPlayerinfo(){
  var Playerinforef = database.ref("players");
  Playerinforef.on("value",(data)=>{
    allPlayers = data.val();
  })
  }
}