class Game{
    constructor(){

    }
    getState(){
  var gameStateref=database.ref("gameState");
  gameStateref.on("value",function(data){
      gameState=data.val();
  })
    }
    update(state){
     database.ref("/").update({
      gameState:state
     })
    }
    async start(){
        if(gameState===0){
            player=new Player();
      var playerCountref=await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
                
            }
            player.getCount(); 
            form=new Form();
            form.display();  
               
        }
        car1=createSprite(100,200,20,20);
        car1.addImage(cars1);
        car2=createSprite(300,200,20,20);
        car2.addImage(cars2);
        car3=createSprite(500,200,20,20);
        car3.addImage(cars3);
        car4=createSprite(700,200,20,20);
        car4.addImage(cars4);
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        form.appear();
        Player.getplayerinfo();
        player.CarAtEnd();
        if(allPlayer!==undefined ){
            background("grey");
            //imageMode(CENTER);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
             var index=0;
             var x=240;
            var y;
            for(var plr in allPlayer){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayer[plr].distance-100;
                //console.log(y);
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(cars[index-1].y<-3400){
                gameState=2;
                player.rank+=1
                Player.updateCars(player.rank);
             }
                if(index===player.index){
                fill("blue");
                ellipse(cars[index-1].x,cars[index-1].y,100,100);   
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
                }
                
             
            }
            if(keyDown(UP_ARROW) && player.index!==null){
                player.distance+=100; 
                
        player.update();
        }
        }
        
       drawSprites();
    }
    end(){
console.log("game end");
//console.log(player.rank);
    }
}