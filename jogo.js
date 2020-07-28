/*  Jogo Educativo - Phases of Matter

    Desenvolvedora: Dayana Karoline
    Pedagoga: Denisia Lima
  
    Link: 
*/

//menu 
var titulo = "Phases of Matter";
var tela = 1;
var botMenuX1 = 200,
  botMenuX2 = 400,
  botMenuX3 = 525,
  botMenuY1 = 500,
  botMenuY2 = 500,
  botMenuY3 = 75;

var clicando= false;

var resumo = "As mudanças de estado físico acontece através do resfriamento ou aquecimento da matéria. Algumas mudanças são reversíveis, como por exemplo a agua, é possivel mudar de estados fisico facilmente, já outras matérias não podem ser revertidas, como o ovo cozido e o papel queimado. Para saber se um processo de mudança de fase é ou não reversível, basta pensar se é possivel fazer o processo inverso.";

var largBt1= 100,
  largBt2 = 200,
  largBt3 = 52;
var altura = 50;
var xBt1 = 150,
  xBt2 = 300,
  xBt3 = 500;
var yBt1 = 465,
  yBt2 = 465,
  yBt3 = 40;

var corText = "#4F4F4F",
  corBot = "#696969",
  corPerg = "#2F4F4F",
  corQuad = "#eff1f1";

var iconMx = 50,
  iconMy = 50,
  iconTam = 40;

//informações
var ano = "Nível de ensino: 4° ano do ensino fundamental";
var mat = "Matéria: Ciências";
var hab = "Habilidade-EF04CI03: Concluir que algumas mudanças causadas por aquecimento ou resfriamento são reversíveis (como as mudanças de estado físico da água) e outras não (como o cozimento do ovo, a queima do papel etc.).";
var info = "É um jogo educacional que tem como objetivo principal abordar assuntos de ciências mostrando o nome das mudanças que ocorrem entre os estados físicos da matéria. O jogador irá descobrir o nome das mudanças, causadas pelo aquecimento ou resfriamento, algumas reversíveis como as mudanças do estado físico da água e outras não reversíveis como o cozimento do ovo. Buscando utilizar exemplos do cotidiano, através de algumas perguntas desenvolvidas de acordo com as fases do jogo.";

//imagem do jogo
var imgX1 = 150,
  imgX2 = 250,
  imgX3 = 450,
  imgY1 = 180,
  imgY2 = 180,
  imgY3 = 180;
var largura2 = 100,
  largura3 = 110;

//perfis
var nome1 = " Dayana Karoline";
var curso1 = "Cursando: Bacharelado em Ciência e Tecnologia";
var func1 = "Desenvolvedora";
var nome2 = " Denisia Lima";
var curso2 = "Formação: Pedagogia Licenciatura Plena";
var func2 = "Pedagoga";
var imgX1 = 150,
  imgX2 = 350,
  imgY1 = 150;
var largura4 = 100,
  largura5 = 140;

//vetores para preencher as fases do jogo
var fases = 100,
  fases2 = 90;
var x = [],
  y = [],
  somaX = [],
  somaY = [],
  faseImg = [];
var pergBotX = 150,
  pergBotY1 = 350,
  pergBotY2 = 410,
  pergBotY3 = 470;
var altBot = 50,
  largBot = 300;
var pergColor = "#065252",
  colorBot = "#5ce1e6",
  margBot = "#28729d",
  corBotCerto = "#0ce41b",
  corBotErrado = "#ff1616";
var pergunta = [],
  quest = [];
pergunta[0] = "Qual o estado físico da água?";
pergunta[1] = "Qual o estado fisico da matéria representada na imagem abaixo?";
pergunta[2] = "Qual o estado fisico do sorvete?";
pergunta[3] = "Identifique as mudanças de fase representadas nas imagens abaixo e arraste uma por vez até seu respectivo quadro.";
pergunta[4] = "Ordene a tirinha abaixo de acordo com os processos de mudança de fase: solidificação, fusão e vaporação";
pergunta[5] = "Leia a tirinha abaixo e responda o que as nuvens representam no processo de mudança de fase da agua.";
pergunta[6] = "Qual o conteudo apresentado na tirinha abaixo?";
pergunta[7] = "A mudança de estado fisico do ovo, é um processo reversível ou irreversível?";
pergunta[8] = "Qual o processo de mudança de fase da matéria representado na imagem abaixo?";

function preload() {
  fundo = loadImage('imagens/fundo.png');
  fundo2 = loadImage('imagens/ceu.png');
  img1 = loadImage('imagens/fusao.jpg');
  img2 = loadImage('imagens/prof.jpeg');
  img3 = loadImage('imagens/day.jpg');
  menu = loadImage('imagens/menu.png');
  mdf = loadImage('imagens/mdf.png');
  menino = loadImage('imagens/menino.png');
  fest = loadImage('imagens/fest.png');
  bolas = loadImage('imagens/bolas.png');
  faseImg[0] = loadImage('imagens/1.png');
  faseImg[1] = loadImage('imagens/2.png');
  faseImg[2] = loadImage('imagens/3.png');
  faseImg[3] = loadImage('imagens/4.png');
  faseImg[4] = loadImage('imagens/5.png');
  faseImg[5] = loadImage('imagens/6.png');
  faseImg[6] = loadImage('imagens/7.png');
  faseImg[7] = loadImage('imagens/8.png');
  faseImg[8] = loadImage('imagens/9.png');
  feliz = loadImage('imagens/feliz.png');
  triste = loadImage('imagens/triste.png');
  quest[0] = loadImage('imagens/q1.jpg'); //agua
  quest[1] = loadImage('imagens/q2.jpg'); //gasoso ou evaporação
  quest[2] = loadImage('imagens/sorvete.jpg'); //sorvete
  quest[3] = loadImage('imagens/q5.jpg'); //gelo derretendo
  quest[4] = loadImage('imagens/q6.jpg'); //gelo solido na forma
  quest[5] = loadImage('imagens/q7.jpg'); //agua fervendo
  quest[6] = loadImage('imagens/nivel8.jpg'); //Ovo cozido
  quest[7] = loadImage('imagens/q9.png'); // tirinha cascão
  quest[8] = loadImage('imagens/q10.jpg'); // tirinha turma da monica
  quest[9] = loadImage('imagens/q13.jpg'); // tirinha monica granizo
  quest[10] = loadImage('imagens/q14.jpg'); // gelo seco
  quest[11] = loadImage('imagens/1-1.png'); //tirinha img 1
  quest[12] = loadImage('imagens/2-1.png'); //tirinha img 2
  quest[13] = loadImage('imagens/3-1.png'); // tirinha img 3
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  imageMode(CORNER);
  background(fundo2);
  textStyle(NORMAL);

  // tela do menu
  if (tela == 1) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo, 0, 0, 600, 600);
      textAlign(CENTER);

      //Titulo do jogo
      fill(corText);
      stroke(corText);
      textFont('Georgia');
      textSize(70);
      text("Phases", 300, 250);
      text("of", 300, 320);
      text("Matter", 300, 390);


      textSize(30);

      //botão jogar
      stroke(corBot);
      noFill();
      rect(xBt1, yBt1, largBt1, altura, 15);
      noStroke();
      fill(corText);
      text("Jogar", botMenuX1, botMenuY1);

      //botão de informações
      stroke(corBot);
      noFill();
      rect(xBt2, yBt2, largBt2, altura, 15);
      noStroke();
      fill(corText);
      text("Informações", botMenuX2, botMenuY2);

      //botão de créditos
      noStroke();
      fill("#c3eff1");
      rect(xBt3, yBt3, largBt3, altura, 25);
      fill(corText);
      noStroke();
      text("c", botMenuX3, botMenuY3);

      //Botão de iniciar o jogo
      if ((mouseX > xBt1 && mouseX < xBt1 + largBt1) && (mouseY > yBt1 && mouseY < yBt1 + altura)) {
        stroke("#363636");
        noFill();
        rect(xBt1, yBt1, largBt1, altura, 15);


        if (mouseIsPressed) {
          tela = 15;
          clicando = true;
        }
      }

      //Botão de Informações
      else if ((mouseX > xBt2 && mouseX < xBt2 + largBt2) && (mouseY > yBt2 && mouseY < yBt2 + altura)) {
        stroke("#363636");
        noFill();
        rect(xBt2, yBt2, largBt2, altura, 15);


        if (mouseIsPressed) {
          tela = 3;
          clicando = true;
        }
      }

      //Botão de Créditos
      else if ((mouseX > xBt3 && mouseX < xBt3 + largBt3) && (mouseY > yBt3 && mouseY < yBt3 + altura)) {
        noStroke();
        fill("#c3eff1");
        rect(xBt3-1, yBt3-1, largBt3+2, altura+2, 50);
        fill(corText);
        noStroke();
        text("c", botMenuX3, botMenuY3);

        if (mouseIsPressed) {
        tela = 4;
        clicando = true;
        }
      }
    }
  }

  //fases 
  else if (tela == 2) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);

      //barra de tarefas
      noStroke();
      fill("#87CEFA");
      rect(0, 10, 600, 80);

      //Titulo
      fill(corPerg);
      noStroke();
      textSize(30);
      text(titulo, 300, 60);

      //icone de voltar pro menu
      noStroke();
      fill("#eff1f1");
      square(30, 30, 40, 5);
      image(menu, 31, 31, 37, 37);

      if ((mouseIsPressed) && (mouseX >= 30 && mouseX <= 70) && (mouseY >= 30 && mouseY <= 70)) {
        tela = 1;
        clicando = true;
      }

      //preenchendo a posição x e y das fases
      for (cont = 0; cont < 3; cont++) {
        somaX[cont] = cont * 150 + 100;
        somaY[cont] = cont * 150 + 150;
        x[cont] = somaX[cont];
        y[cont] = somaY[cont];
      }

      //mostrando as fases
      for (v = 0, j = 0; v < 3; v++) {
        for (c = 0; c < 3; c++) {
          stroke(corBot);
          fill("#eff1f1");
          square(x[c], y[v], fases, 10);
          image(faseImg[j++], x[c] + 5, y[v] + 5, fases2, fases2);

          //ciclou na fase
          if ((mouseIsPressed) && (mouseX >= x[c] && mouseX <= x[c] + fases) && (mouseY >= y[v] && mouseY <= y[v] + fases)) {


            if (c === 0 && v === 0) { //Fase 1
              tela = 5;
              clicando = true;
            } else if (c === 1 && v === 0) { //Fase 2
              tela = 6;
              clicando = true;
            } else if (c === 2 && v === 0) { //Fase 3
              tela = 7;
              clicando = true;
            } else if (c === 0 && v === 1) { //Fase 4
              tela = 8;
              clicando = true;
            } else if (c === 1 && v === 1) { //Fase 5
              tela = 9; 
              clicando = true;
            } else if (c === 2 && v === 1) { //Fase 6
              tela = 10;
              clicando = true;
            } else if (c === 0 && v === 2) { //Fase 7
              tela = 11;
              clicando = true;
            } else if (c === 1 && v === 2) { //Fase 8
              tela = 12;
              clicando = true;
            } else if (c === 2 && v === 2) { //Fase 9
              tela = 13;
              clicando = true;
            }

          }
        }
      }
    }
  }

  //informações sobre o jogo
  else if (tela == 3) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);

      //quadro central
      stroke(corText);
      fill(corQuad);
      square(50, 50, 500, 25);

      //titulo do jogo
      noStroke();
      fill(corText);
      textSize(30);
      textAlign(CENTER);
      text(titulo, 100, 75, 400, 50);

      //Ano
      noStroke();
      fill(corText);
      textSize(16);
      textAlign(LEFT);
      text(ano, 100, 120, 400, 20);

      //matéria
      noStroke();
      fill(corText);
      textSize(16);
      textAlign(LEFT);
      text(mat, 100, 140, 400, 20);

      //Habilidade
      noStroke();
      fill(corText);
      textSize(16);
      textAlign(LEFT);
      text(hab, 100, 160, 400, 200);

      //dados do jogo
      noStroke();
      fill(corText);
      textSize(16);
      textAlign(CENTER);
      text(info, 100, 265, 400, 250);

      //botão voltar
      fill(corText);
      noStroke();
      text("Voltar", 300, 520); 

      //clicou botão
      if ((mouseX > 250 && mouseX < 250 + 100) && (mouseY > 470 && mouseY < 470 + 50)) {
        stroke(corBot);
        noFill();
        rect(250, 500, 100, 30, 15);

        if (mouseIsPressed) {
          tela = 1;
          clicando = true;
        }
      }
    }
  }

  //creditos do jogo
  else if (tela == 4) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);

      //quadro central
      stroke(corText);
      fill(corQuad);
      square(50, 50, 500, 25);

      //Créditos
      fill(corText);
      textSize(25);
      noStroke();
      text("Colaboradores", 200, 80, 200, 300);


      //perfis
      textSize(16);
      fill(corText);
      noStroke();
      text(nome1, 300, 330, 200, 300);
      text(curso1, 300, 360, 200, 300);
      text(func1, 300, 300, 200, 300);
      text(nome2, 100, 330, 200, 300);
      text(curso2, 100, 360, 200, 300);
      text(func2, 100, 300, 200, 300);

      image(img2, imgX1, imgY1, largura4, largura5);
      image(img3, imgX2, imgY1, largura4, largura5);

      //botão voltar
      fill(corText);
      noStroke();
      text("Voltar", 300, 520); 

      //clicou botão
      if ((mouseX > 250 && mouseX < 250 + 100) && (mouseY > 500 && mouseY < 500 + 30)) {
        stroke(corBot);
        noFill();
        rect(250, 500, 100, 30, 15);

        if (mouseIsPressed) {
          tela = 1;
          clicando = true;
        }
      }
    }
  }

  //fase 1
  else if (tela == 5) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(25);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(50, 50, 500, 250, 15);

      //pergunta
      noStroke();
      fill(pergColor);
      text(pergunta[0], 100, 75, 400, 50);
      imageMode(CENTER);
      image(quest[0], 300, 200, 220, 160);

      imageMode(CORNER);

      //botão
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY1, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Sólido", pergBotX, pergBotY1 + 10, largBot, altBot);

      //botão
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY2, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Gasoso", pergBotX, pergBotY2 + 10, largBot, altBot);

      //botão liquido resposta correta
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY3, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Líquido", pergBotX, pergBotY3 + 10, largBot, altBot);

      if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY1 && mouseY < pergBotY1 + altBot)) {
        stroke("#ff1616");
        fill(corBotErrado);
        rect(pergBotX, pergBotY1, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Sólido", pergBotX, pergBotY1 + 10, largBot, altBot);

        tela = 21; // tente novamente
        clicando= true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY2 && mouseY < pergBotY2 + altBot)) {
        stroke("#ff1616");
        fill(corBotErrado);
        rect(pergBotX, pergBotY2, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Gasoso", pergBotX, pergBotY2 + 10, largBot, altBot);

        tela = 21; //tente novamente
        clicando = true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY3 && mouseY < pergBotY3 + altBot)) {
        stroke("#28729d");
        fill(corBotCerto);
        rect(pergBotX, pergBotY3, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Líquido", pergBotX, pergBotY3 + 10, largBot, altBot);

        tela = 20; // Parabens
        clicando = true;

      }
    }
  }

  //fase 2
  else if (tela == 6) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(25);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(50, 30, 500, 300, 15);

      //pergunta
      noStroke();
      fill(pergColor);
      text(pergunta[1], 100, 75, 400, 100);
      imageMode(CENTER);
      image(quest[1], 300, 230, 220, 160);

      imageMode(CORNER);

      //botão
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY1, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Sólido", pergBotX, pergBotY1 + 10, largBot, altBot);

      //botão correto
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY2, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Gasoso", pergBotX, pergBotY2 + 10, largBot, altBot);

      //botão 
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY3, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Líquido", pergBotX, pergBotY3 + 10, largBot, altBot);

      if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY1 && mouseY < pergBotY1 + altBot)) {
        stroke("#ff1616");
        fill(corBotErrado);
        rect(pergBotX, pergBotY1, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Sólido", pergBotX, pergBotY1 + 10, largBot, altBot);

        tela = 21;
        clicando = true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY2 && mouseY < pergBotY2 + altBot)) {
        stroke("#ff1616");
        fill(corBotCerto);
        rect(pergBotX, pergBotY2, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Gasoso", pergBotX, pergBotY2 + 10, largBot, altBot);

        tela = 20;
        clicando = true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY3 && mouseY < pergBotY3 + altBot)) {
        stroke("#28729d");
        fill(corBotErrado);
        rect(pergBotX, pergBotY3, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Líquido", pergBotX, pergBotY3 + 10, largBot, altBot);

        tela = 21;
        clicando = true;

      }
    }
  }

  //fase 3
  else if (tela == 7) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(25);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(25, 10, 550, 550, 15);


      //pergunta
      fill(pergColor);
      noStroke();
      text(pergunta[3], 25, 30, 550, 150);

      //opção 1 - correta
      stroke(pergColor);
      noFill();
      square(100, 300, largura3);
      fill(pergColor);
      noStroke();
      text("Solidificação", 100, 420, largura3);
      //opçãp 2
      stroke(pergColor);
      noFill();
      square(250, 300, largura3);
      fill(pergColor);
      noStroke();
      text("Vaporização", 260, 420, largura3);
      //opção3
      stroke(pergColor);
      noFill();
      square(400, 300, largura3);
      fill(pergColor);
      noStroke();
      text("Fusão", 400, 420, largura3);


      //arrastar a imagem
      imageMode(CENTER);

      //fusão
      image(quest[3], imgX1, imgY1, largura2, largura2);
      //solidificação
      image(quest[4], imgX2, imgY2, largura2, largura2);
      //vaporização
      image(quest[5], imgX3, imgY3, largura2, largura2);


      if ((mouseIsPressed) && dist(imgX1, imgY1, mouseX, mouseY) < largura2) {
        imgX1 = mouseX;
        imgY1 = mouseY;
      } else if ((mouseIsPressed) && dist(imgX2, imgY2, mouseX, mouseY) < largura2) {
        imgX2 = mouseX;
        imgY2 = mouseY;
      } else if ((mouseIsPressed) && dist(imgX3, imgY3, mouseX, mouseY) < largura2) {
        imgX3 = mouseX;
        imgY3 = mouseY;
      }

      //botão responder
      noStroke();
      fill(colorBot);
      rect(150, 500, 300, 50, 10);
      noStroke();
      fill(pergColor);
      text("Responder", 280, 510, 50);

      //clicou botão
      if ((mouseIsPressed) && (mouseX > 150 && mouseX < 450) && (mouseY > 500 && mouseY < 550)) {
        if ((dist(imgX3, imgY3, 250, 300) < largura3) && (dist(imgX2, imgY2, 100, 300) < largura3) && (dist(imgX1, imgY1, 400, 300) < largura3)) {
          tela = 20;
          clicando =true;
        } else {
          tela = 21;
          clicando = true;
        }
      }
    }
  }

  //fase 4
  else if (tela == 8) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(25);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(50, 50, 500, 250, 15);

      //pergunta
      noStroke();
      fill(pergColor);
      text(pergunta[2], 100, 75, 400, 50);
      imageMode(CENTER);
      image(quest[2], 300, 200, 220, 160);

      imageMode(CORNER);

      //botão
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY1, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Sólido", pergBotX, pergBotY1 + 10, largBot, altBot);

      //botão
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY2, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Gasoso", pergBotX, pergBotY2 + 10, largBot, altBot);

      //botão liquido resposta correta
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY3, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Líquido", pergBotX, pergBotY3 + 10, largBot, altBot);

      if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY1 && mouseY < pergBotY1 + altBot)) {
        stroke("#ff1616");
        fill(corBotCerto);
        rect(pergBotX, pergBotY1, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Sólido", pergBotX, pergBotY1 + 10, largBot, altBot);

        tela = 20;
        clicando =true;
        
      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY2 && mouseY < pergBotY2 + altBot)) {
        stroke("#ff1616");
        fill(corBotErrado);
        rect(pergBotX, pergBotY2, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Gasoso", pergBotX, pergBotY2 + 10, largBot, altBot);

        tela = 21;
        clicando=true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY3 && mouseY < pergBotY3 + altBot)) {
        stroke("#28729d");
        fill(corBotErrado);
        rect(pergBotX, pergBotY3, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Líquido", pergBotX, pergBotY3 + 10, largBot, altBot);

        tela = 21;
        clicando =true;

      }
    }
  }

  //fase 5
  else if (tela == 9) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(25);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(25, 10, 550, 550, 15);


      //pergunta
      fill(pergColor);
      noStroke();
      text(pergunta[4], 25, 30, 550, 150);

      //opção 1 - correta
      stroke(pergColor);
      noFill();
      square(100, 300, largura3);
      fill(pergColor);
      noStroke();
      text("1", 100, 420, largura3);
      //opçãp 2
      stroke(pergColor);
      noFill();
      square(250, 300, largura3);
      fill(pergColor);
      noStroke();
      text("2", 260, 420, largura3);
      //opção3
      stroke(pergColor);
      noFill();
      square(400, 300, largura3);
      fill(pergColor);
      noStroke();
      text("3", 400, 420, largura3);


      //arrastar a imagem
      imageMode(CENTER);

      //fusão
      image(quest[12], imgX1, imgY1, largura2, largura2);
      //solidificação
      image(quest[11], imgX2, imgY2, largura2, largura2);
      //vaporização
      image(quest[13], imgX3, imgY3, largura2, largura2);


      if ((mouseIsPressed) && dist(imgX1, imgY1, mouseX, mouseY) < largura2) {
        imgX1 = mouseX;
        imgY1 = mouseY;
      } else if ((mouseIsPressed) && dist(imgX2, imgY2, mouseX, mouseY) < largura2) {
        imgX2 = mouseX;
        imgY2 = mouseY;
      } else if ((mouseIsPressed) && dist(imgX3, imgY3, mouseX, mouseY) < largura2) {
        imgX3 = mouseX;
        imgY3 = mouseY;
      }

      //botão responder
      noStroke();
      fill(colorBot);
      rect(150, 500, 300, 50, 10);
      noStroke();
      fill(pergColor);
      text("Responder", 280, 510, 50);

      //clicou botão
      if ((mouseIsPressed) && (mouseX > 150 && mouseX < 450) && (mouseY > 500 && mouseY < 550)) {
        if ((dist(imgX1, imgY1, 250, 300) < largura3) && (dist(imgX2, imgY2, 100, 300) < largura3) && (dist(imgX3, imgY3, 400, 300) < largura3)) {
          tela = 20;
          clicando = true;
          
        } else {
          tela = 21;
          clicando = true;
        }
      }
    }
  }

  //fase 6
  else if (tela == 10) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(20);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(25, 10, 550, 550, 15);

      //pergunta
      fill(pergColor);
      noStroke();
      text(pergunta[5], 25, 30, 550, 150);

      imageMode(CENTER);
      image(quest[7], 300, 250, 300, 300);

      imageMode(CORNER);
      //botão correto
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY2, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Vaporização", pergBotX, pergBotY2 + 10, largBot, altBot);

      //botão 
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY3, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Solidificação", pergBotX, pergBotY3 + 10, largBot, altBot);

      if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY2 && mouseY < pergBotY2 + altBot)) {
        stroke("#ff1616");
        fill(corBotCerto);
        rect(pergBotX, pergBotY2, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Vaporização", pergBotX, pergBotY2 + 10, largBot, altBot);

        tela = 20;
        clicando = true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY3 && mouseY < pergBotY3 + altBot)) {
        stroke("#28729d");
        fill(corBotErrado);
        rect(pergBotX, pergBotY3, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Solidificação", pergBotX, pergBotY3 + 10, largBot, altBot);

        tela = 21;
        clicando=true;

      }
    }
  }

  //fase 7
  else if (tela == 11) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(20);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(25, 10, 550, 550, 15);

      //pergunta
      fill(pergColor);
      noStroke();
      text(pergunta[6], 25, 30, 550, 150);

      imageMode(CENTER);
      image(quest[8], 300, 230, 350, 350);


      //botão correto
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY2, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Estados Físicos da Água", pergBotX, pergBotY2 + 10, largBot, altBot);

      //botão 
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY3, largBot, altBot + 10, 15);
      noStroke();
      fill(20);
      text("Mudanças no Estado Físico da Água", pergBotX, pergBotY3 + 10, largBot, altBot);

      if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY2 && mouseY < pergBotY2 + altBot)) {
        stroke("#ff1616");
        fill(corBotCerto);
        rect(pergBotX, pergBotY2, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Estados Físicos da Água", pergBotX, pergBotY2 + 10, largBot, altBot);

        tela = 20;
        clicando = true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY3 && mouseY < pergBotY3 + altBot)) {
        stroke("#28729d");
        fill(corBotErrado);
        rect(pergBotX, pergBotY3, largBot, altBot + 10, 15);
        noStroke();
        fill(20);
        text("Mudanças no Estado Físico da Água", pergBotX, pergBotY3 + 10, largBot, altBot);

        tela = 21;
        clicando =true;

      }
    }
  }

  //fase 8
  else if (tela == 12) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(20);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(25, 10, 550, 550, 15);

      //pergunta
      fill(pergColor);
      noStroke();
      text(pergunta[7], 25, 30, 550, 150);

      imageMode(CENTER);
      image(quest[6], 300, 230, 300, 250);


      //botão correto
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY2-40, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Reversível", pergBotX, pergBotY2-25, largBot, altBot);

      //botão 
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY3-40, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Irreversível", pergBotX, pergBotY3-25, largBot, altBot);

      if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > (pergBotY2-40) && mouseY < (pergBotY2-40) + altBot)) {
        stroke("#ff1616");
        fill(corBotErrado);
        rect(pergBotX, pergBotY2-40, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Reversível", pergBotX, pergBotY2-25, largBot, altBot);

        tela = 21;
        clicando = true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > (pergBotY3-40) && mouseY < (pergBotY3-40)+ altBot)) {
        stroke("#28729d");
        fill(corBotCerto);
        rect(pergBotX, pergBotY3-40, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Irreversível", pergBotX, pergBotY3 -25, largBot, altBot);

        tela = 20;
        clicando = true;

      }
    }
  }

  //Fase 9
  else if (tela == 13) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      image(fundo2, 0, 0, 600, 600);
      textAlign(CENTER);
      textSize(20);

      //quadro central
      noStroke();
      fill("#FFFAFA");
      rect(50, 30, 500, 300, 15);

      //pergunta
      noStroke();
      fill(pergColor);
      text(pergunta[8], 100, 60, 400, 50);
      imageMode(CENTER);
      image(quest[10], 300, 200, 220, 160);

      imageMode(CORNER);

      //botão
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY1, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Condensação", pergBotX, pergBotY1 + 10, largBot, altBot);

      //botão
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY2, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Liquefação", pergBotX, pergBotY2 + 10, largBot, altBot);

      //botão liquido resposta correta
      stroke(margBot);
      fill(colorBot);
      rect(pergBotX, pergBotY3, largBot, altBot, 15);
      noStroke();
      fill(20);
      text("Sublimação", pergBotX, pergBotY3 + 10, largBot, altBot);

      if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY1 && mouseY < pergBotY1 + altBot)) {
        stroke("#ff1616");
        fill(corBotErrado);
        rect(pergBotX, pergBotY1, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Condensação", pergBotX, pergBotY1 + 10, largBot, altBot);

        tela = 21;
        clicando = true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY2 && mouseY < pergBotY2 + altBot)) {
        stroke("#ff1616");
        fill(corBotErrado);
        rect(pergBotX, pergBotY2, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Liquefação", pergBotX, pergBotY2 + 10, largBot, altBot);

        tela = 21;
        clicando = true;

      } else if ((mouseIsPressed) && (mouseX > pergBotX && mouseX < pergBotX + largBot && mouseY > pergBotY3 && mouseY < pergBotY3 + altBot)) {
        stroke("#28729d");
        fill(corBotCerto);
        rect(pergBotX, pergBotY3, largBot, altBot, 15);
        noStroke();
        fill(20);
        text("Sublimação", pergBotX, pergBotY3 + 10, largBot, altBot);

        tela = 14;
        clicando = true;

      }
    }
  }

  //Final do Jogo
  else if (tela == 14) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      textAlign(CENTER);
      background(fundo2);

      //Menssagem final do jogo
      fill(corPerg);
      noStroke();
      textSize(60);
      text("Parabéns!!", 300, 250);
      text("Fim do Jogo!!", 300, 350);
      
      
      //icone de voltar pro menu
      stroke(corBot);
      fill("#eff1f1");
      rect(200, 450, 200,50,25);
      fill(corPerg);
      noStroke();
      textSize(25);
      text("Voltar", 300, 480);

      //BOTÃO MENU
      if ((mouseIsPressed) && (mouseX >= 200 && mouseX <= 400) && (mouseY >= 450 && mouseY <= 500)) {
        tela = 1;
        clicando=true;
      }
    }
  }
  
  //Introdução do Jogo
  else if (tela == 15){
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      textAlign(CENTER);
      image(fundo2, 0, 0, 600, 600);
      
      textSize(16);
      stroke(corBot);
      fill("#f4f6f6");
      rect(50, 50, 500, 450, 50);
      noStroke();
      fill(corPerg);
      text(resumo, 230, 280, 300);
      
      image(mdf, 270, 65, 215,215);
      
      image(menino, 60, 80, 200,350);
      
      //Continuar
      textSize(25);
      stroke(corBot);
      fill("#eff1f1");
      rect(200, 520, 200, 40, 10);
      noStroke();
      fill(corPerg);
      text("Continuar", 280, 527, 50);

      //Clicou continuar
      if ((mouseIsPressed) && (mouseX > 200&& mouseX < 400) && (mouseY > 520 && mouseY < 560)) {
        tela = 2;
        clicando = true;
      }
    }
  }

  //Parabéns, proxima fase...
  else if (tela == 20) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      textAlign(CENTER);
      image(fundo2, 0, 0, 600, 600);

      //Menssagem
      fill(corText);
      noStroke();
      textSize(60);
      text("Parabéns!!", 300,200);

      image(feliz, 250,250, 100,100);

      //icone de voltar pro menu
      stroke(corBot);
      fill("#eff1f1");
      square(iconMx, iconMy, iconTam, 5);
      image(menu, iconMx + 2, iconMy + 2, iconTam - 4, 37);

      //Continuar
      textSize(25);
      stroke(corBot);
      fill("#eff1f1");
      rect(200, 400, 200, 40, 10);
      noStroke();
      fill(corPerg);
      text("Continuar", 280, 407, 50);

      //Clicou continuar
      if ((mouseIsPressed) && (mouseX > 200&& mouseX < 400) && (mouseY > 400 && mouseY < 440)) {
        tela = 2;
        clicando = true;
      }

      //BOTÃO MENU
      else if ((mouseIsPressed) && (mouseX >= iconMx && mouseX <= iconMx + iconTam) && (mouseY >= iconMy && mouseY <= iconMy + iconTam)) {
        tela = 1;
        clicando= true;
      }
    }
  }

  //Tente novamente
  else if (tela == 21) {
    if(mouseIsPressed == false){
      clicando = false;
    }
    
    if(clicando == false){
      imageMode(CORNER);
      textAlign(CENTER);
      image(fundo2, 0, 0, 600, 600);

      //resporta incorreta
      fill(corText);
      noStroke();
      textSize(40);
      text("Tente Novamente!!", 300, 250);

      image(triste, 250,280, 100,100);

      //icone de voltar pro menu
      stroke(corBot);
      fill("#eff1f1");
      square(iconMx, iconMy, iconTam, 5);
      image(menu, iconMx + 2, iconMy + 2, iconTam - 4, 37);

     //Continuar
      textSize(25);
      stroke(corBot);
      fill("#eff1f1");
      rect(200, 400, 200, 40, 10);
      noStroke();
      fill(corPerg);
      text("Continuar", 280, 407, 50);

      //Clicou continuar
      if ((mouseIsPressed) && (mouseX > 200&& mouseX < 400) && (mouseY > 400 && mouseY < 440)) {
        tela = 2;
        clicando = true;
      }

      //Menu
      else if ((mouseIsPressed) && (mouseX >= iconMx && mouseX <= iconMx + iconTam) && (mouseY >= iconMy && mouseY <= iconMy + iconTam)) {
        tela = 1;
        clicando = true;
      } 
    
    }

  }
  
 

}