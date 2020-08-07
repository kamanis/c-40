class Form{
    constructor(){
        this.inp=createInput("Name");
         this.button=createButton("Play");
        this.greeting=createElement("h3");
        this.title=createElement("h2");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.inp.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(displayWidth/2-120,0);
        
        this.inp.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(()=>{
            this.inp.hide();
            this.button.hide();
            player.name=this.inp.value();
            playerCount+=1
            player.index=playerCount
            player.update();
            player.updateCount(player.index);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
        
    }
    appear(){
        var reset=createButton("Reset");
        reset.position(50,height-20);
        reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            player.delete();
         })
    }
}