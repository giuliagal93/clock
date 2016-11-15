
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noFill();
}

function drawArc(alt,largh,ampiezza){
  arc(0,0,alt,largh,ampiezza,ampiezza+n,OPEN);
}

function draw() {
  
  background(80);
  translate(width/2, height/2); 
  
  var secondi = second();
  var minuti = minute();
  var ore = abs(hour()-12);

  for (i = 0; i<60; i++) {
    
    //trattino ai secondi
    if (i <= secondi) {
      //se lascio solo uguale resta acceso solo il secondo corrente
      stroke(255,100,160);
    } else {
   
    stroke(200);
      
    }

    strokeWeight(4);
    // rimappo l'incremento 0-60 (secondi) a 0-360 (gradi) 
    // tolto 93 invece di 90 per centrare l'arco 
    var ampiezza = map(i,0,60,0-93,360-93)
    //l'arco è di 6 gradi (360 diviso 60)
    n=6
    drawArc(420,420,ampiezza);
  }

  for (i = 0; i<60; i++) {
    
    //trattino ai minuti
    if (i <= minuti) {
      
      stroke(255,100,120);
      
    } else {
    stroke(200);
    }
    
    strokeWeight(4);
    
    var ampiezza = map(i,0,60,0-93,360-93)
   
    n=6;

    drawArc(300,300,ampiezza);
  }

    for (i = 0; i<12; i++) {
    
    //trattino alle ore
    if (i <= ore) {
    stroke(255,100,80);
    } else {
    stroke(200);
    }

    strokeWeight(4);
    var ampiezza = map(i,0,12,0-96,360-96)
    
    n=30;

    drawArc(180,180,ampiezza);
  }


}

