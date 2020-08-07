class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
        this.rank=0;
    }
    getCount(){
        var playercountref=database.ref("playerCount");
        playercountref.on("value",function(data){
            playerCount=data.val();

         })
    }
    updateCount(count){
       database.ref("/").update({
          playerCount:count
       } )
    } 
    update(){
     var playerindex="players/player"+this.index;
     database.ref(playerindex).set({
         name:this.name,
         distance:this.distance
     })
    }
    static getplayerinfo(){
        var playerinfo=database.ref("players");
        playerinfo.on("value",(data)=>{
            allPlayer=data.val();
        })
    }
    delete(){
        var info=database.ref("/");
        info.child("players").remove();

    }
    CarAtEnd(){
       database.ref("carsAtEnd").on("value",(data)=>{
           this.rank=data.val();
       })
    }
    static updateCars(rank){
       database.ref("/").update({
           carsAtEnd:rank
       })
    }
}