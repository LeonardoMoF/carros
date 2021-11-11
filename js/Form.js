class Form {
  constructor() {
    this.input = createInput("Enter Name");
    this.button = createButton("Play");
    this.greeting = createElement("h2");
  }

    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }

  display(){
    var title = createElement('h2')
    title.html("Car Race");
    title.position(155, 0);
    
    this.input.position(130, 160);
    this.button.position(190, 200);

    this.button.mousePressed(()=>{
      input.hide();
      button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hola " + player.name )
      greeting.position(130, 160)
    });

  }
}
