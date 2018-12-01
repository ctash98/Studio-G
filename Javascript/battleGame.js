/*
//
// Adapted From: rlee0545/PianoPianoRevolution
//
class Lines {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.color = "#00BFA5";
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo(50, this.canvas.height - 270);
    this.ctx.lineTo(750, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(50, this.canvas.height - 300);
    this.ctx.lineTo(750, this.canvas.height - 300);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(50, this.canvas.height - 300);
    this.ctx.lineTo(50, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(94, this.canvas.height - 300);
    this.ctx.lineTo(94, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(135, this.canvas.height - 300);
    this.ctx.lineTo(135, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(176, this.canvas.height - 300);
    this.ctx.lineTo(176, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(217, this.canvas.height - 300);
    this.ctx.lineTo(217, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(260, this.canvas.height - 300);
    this.ctx.lineTo(260, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(301, this.canvas.height - 300);
    this.ctx.lineTo(301, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(341, this.canvas.height - 300);
    this.ctx.lineTo(341, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(381, this.canvas.height - 300);
    this.ctx.lineTo(381, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(421, this.canvas.height - 300);
    this.ctx.lineTo(421, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(461, this.canvas.height - 300);
    this.ctx.lineTo(461, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(501, this.canvas.height - 300);
    this.ctx.lineTo(501, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(540, this.canvas.height - 300);
    this.ctx.lineTo(540, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(584, this.canvas.height - 300);
    this.ctx.lineTo(584, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(625, this.canvas.height - 300);
    this.ctx.lineTo(625, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(666, this.canvas.height - 300);
    this.ctx.lineTo(666, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(707, this.canvas.height - 300);
    this.ctx.lineTo(707, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(750, this.canvas.height - 300);
    this.ctx.lineTo(750, this.canvas.height - 270);
    this.ctx.strokeStyle=this.color;
    this.ctx.stroke();
  }
}

class WhiteKey {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 38, 30);
    this.ctx.fillStyle = "#00BFA5";
    this.ctx.fill();
    this.ctx.closePath();
  }
}

class BlackKey {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 38, 30);
    this.ctx.fillStyle = "#EEFF41";
    this.ctx.fill();
    this.ctx.closePath();
  }
}

class EasySong {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.whiteCoords = [53, 135, 217, 261, 341, 421, 501, 543, 625, 707];
    this.blackCoords = [94, 176, 301, 381, 461, 584, 666];
    this.yCoords = [];
		for (var z=0;z<-20000;i-50) {
		this.yCoords.push(i);
		}
  }

  notes() {
    const easySong = [];
    let length = this.yCoords.length;

    for (var i = 0; i < 50; i++) {
      let wx = this.whiteCoords[Math.floor((Math.random() * 10))];
      let wy = this.yCoords[Math.floor((Math.random() * length))];
      easySong.push(new WhiteKey(this.canvas, this.ctx, wx, wy));

      let bx = this.blackCoords[Math.floor((Math.random() * 7))];
      let by = this.yCoords[Math.floor((Math.random() * length))];
      easySong.push(new BlackKey(this.canvas, this.ctx, bx, by));
    }

    return easySong;
  }
}

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.strike = 20;
    this.gameover = false;
    this.score = 0;
    this.result = ["Miss!", "", "Hit!", "You lose!", "You win!"];
    this.resultIdx = 1;

    this.easySong = new EasySong(this.canvas, this.ctx).notes();

	this.pressedQ = false;
    this.pressed2 = false;
    this.pressedW = false;
    this.pressed3 = false;
    this.pressedE = false;
    this.pressedR = false;
    this.pressed5 = false;
    this.pressedT = false;
    this.pressed6 = false;
    this.pressedY = false;
    this.pressed7 = false;
    this.pressedU = false;
    this.pressedI = false;
    this.pressed9 = false;
    this.pressedO = false;
    this.pressed0 = false;
    this.pressedP = false;
  }
  
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

	const lines = new Lines(this.canvas, this.ctx);
    lines.drawLines();
	
	const hitbox = this.canvas.height - 298;

  this.easySong.map(note => {
      note.drawNote();
      this.drawScore(this.ctx);
      this.drawLife(this.ctx);
      this.drawResult(this.canvas, this.ctx, this.resultIdx);
      note.y += 2;

      if (note.y > hitbox) {
        note.y = 3000;
      }

      if (this.gameover === false && ((note.x === 53 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedQ === true) ||
          (note.x === 94 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed2 === true) ||
          (note.x === 135 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedW === true) ||
          (note.x === 176 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed3 === true) ||
          (note.x === 217 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedE === true) ||
          (note.x === 261 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedR === true) ||
          (note.x === 301 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed5 === true) ||
          (note.x === 341 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedT === true) ||
          (note.x === 381 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed6 === true) ||
          (note.x === 421 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedY === true) ||
          (note.x === 461 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed7 === true) ||
          (note.x === 501 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedU === true) ||
          (note.x === 543 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedI === true) ||
          (note.x === 584 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed9 === true) ||
          (note.x === 625 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedO === true) ||
          (note.x === 666 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed0 === true) ||
          (note.x === 707 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedP === true)))
          {
            this.score += 1;
            this.resultIdx = 2;
            this.ctx.fillStyle = "yellow";
            this.ctx.fillRect(50, this.canvas.height - 300, this.canvas.width - 100, 30);
          } else if ((note.x === 53 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedQ === false) ||
          (note.x === 94 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed2 === false) ||
          (note.x === 135 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedW === false) ||
          (note.x === 176 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed3 === false) ||
          (note.x === 217 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedE === false) ||
          (note.x === 261 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedR === false) ||
          (note.x === 301 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed5 === false) ||
          (note.x === 341 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedT === false) ||
          (note.x === 381 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed6 === false) ||
          (note.x === 421 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedY === false) ||
          (note.x === 461 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed7 === false) ||
          (note.x === 501 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedU === false) ||
          (note.x === 543 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedI === false) ||
          (note.x === 584 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed9 === false) ||
          (note.x === 625 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedO === false) ||
          (note.x === 666 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressed0 === false) ||
          (note.x === 707 && note.y < hitbox + 2 && note.y > hitbox - 2 && this.pressedP === false))
          {
            this.resultIdx = 0;
            this.strike -= 1;
          }
    });

    if (this.strike <= 0) {
      this.resultIdx = 3;
      this.strike = 0;
      window.moonlight.pause();
      this.drawLife(this.ctx);
      this.drawWL(this.canvas, this.ctx, this.resultIdx);
      this.gameover = true;
      return;
    } else if (this.score >= 80) {
      this.resultIdx = 4;
      window.moonlight.pause();
      this.drawWL(this.canvas, this.ctx, this.resultIdx);
      this.gameover = true;
      return;
    }

    requestAnimationFrame(this.draw.bind(this));
  }

  drawScore(ctx) {
    ctx.font = "30px Permanent Marker";
    ctx.fillStyle = "white";
    ctx.fillText("Score:  " + this.score, 130, 80);
  }

  drawLife(ctx) {
    ctx.font = "30px Permanent Marker";
    ctx.fillStyle = "white";
    ctx.fillText("Life Remaining:  " + this.strike, 460, 80);
  }

  drawWL(canvas, ctx, i) {
    ctx.fillStyle = "black";
    this.ctx.fillRect(300, 200, 450, 250);
    this.drawResult(canvas, ctx, i);
  }

  drawResult(canvas, ctx, i) {
    ctx.font = "50px Permanent Marker";
    ctx.fillStyle = "white";
    ctx.fillText(this.result[i], 315, this.canvas.height - 500);
  }
}



  const gameCanvas = document.getElementById('battle');
  const gameCtx = gameCanvas.getContext('2d');
  
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    gameCanvas.width = 800;
    gameCanvas.height = window.innerHeight;

    const game = new Game(gameCanvas, gameCtx);

    const startButton = document.getElementById("start");
    startButton.addEventListener("click", () => {
      game.draw();
      const speedButton = document.getElementById("faster");
      speedButton.addEventListener("click", () => (
        game.draw()
      ));
    });

    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.keyCode === 81) {
          game.pressedQ = true;
        } else if (e.keyCode === 50) {
          game.pressed2 = true;
        } else if (e.keyCode === 87) {
          game.pressedW = true;
        } else if (e.keyCode === 51) {
          game.pressed3 = true;
        } else if (e.keyCode === 69) {
          game.pressedE = true;
        } else if (e.keyCode === 82) {
          game.pressedR = true;
        } else if (e.keyCode === 53) {
          game.pressed5 = true;
        } else if (e.keyCode === 84) {
          game.pressedT = true;
        } else if (e.keyCode === 54) {
          game.pressed6 = true;
        } else if (e.keyCode === 89) {
          game.pressedY = true;
        } else if (e.keyCode === 55) {
          game.pressed7 = true;
        } else if (e.keyCode === 85) {
          game.pressedU = true;
        } else if (e.keyCode === 73) {
          game.pressedI = true;
        } else if (e.keyCode === 57) {
          game.pressed9 = true;
        } else if (e.keyCode === 79) {
          game.pressedO = true;
        } else if (e.keyCode === 48) {
          game.pressed0 = true;
        } else if (e.keyCode === 80) {
          game.pressedP = true;
        }
    });

    document.addEventListener("keyup", (e) => {
      e.preventDefault();

      if (e.keyCode === 81) {
          game.pressedQ = false;
        } else if (e.keyCode === 50) {
          game.pressed2 = false;
        } else if (e.keyCode === 87) {
          game.pressedW = false;
        } else if (e.keyCode === 51) {
          game.pressed3 = false;
        } else if (e.keyCode === 69) {
          game.pressedE = false;
        } else if (e.keyCode === 82) {
          game.pressedR = false;
        } else if (e.keyCode === 53) {
          game.pressed5 = false;
        } else if (e.keyCode === 84) {
          game.pressedT = false;
        } else if (e.keyCode === 54) {
          game.pressed6 = false;
        } else if (e.keyCode === 89) {
          game.pressedY = false;
        } else if (e.keyCode === 55) {
          game.pressed7 = false;
        } else if (e.keyCode === 85) {
          game.pressedU = false;
        } else if (e.keyCode === 73) {
          game.pressedI = false;
        } else if (e.keyCode === 57) {
          game.pressed9 = false;
        } else if (e.keyCode === 79) {
          game.pressedO = false;
        } else if (e.keyCode === 48) {
          game.pressed0 = false;
        } else if (e.keyCode === 80) {
          game.pressedP = false;
        }
      });
	  
  }
  

  resizeCanvas();
  
  */



































/*
// battleGame object

var battleGame = {};

battleGame.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

battleGame.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, 512, 512);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    this.update(delta);
    this.render();
}.bind(battleGame);


// override these methods to create the demo
battleGame.init = function () {};
battleGame.update = function (delta) {};
battleGame.render = function () {};

//TEMPORARY
battleGame.load = function () {
    return [
        Loader.loadImage('arrows', 'Assets/arrows.png'),
        Loader.loadImage('hero', 'Assets/character.png')
    ];
};

var beat = {
    cols: 4,
    rows: 480,
    tsize: 64,
    layers: [[
        5, 5, 5, 5, 
        1, 0, 0, 0, 
        0, 0, 0, 4, 
        0, 2, 0, 0, 
        0, 2, 0, 0, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        0, 0, 3, 0,
		0, 0, 0, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        0, 0, 3, 0,
		0, 0, 0, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        1, 0, 0, 4,
		0, 2, 3, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        0, 0, 3, 0,
		0, 0, 0, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        0, 0, 3, 0,
		0, 0, 0, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        1, 0, 0, 4,
		0, 2, 3, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        0, 0, 3, 0,
		0, 0, 0, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        0, 0, 3, 0,
		0, 0, 0, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        1, 0, 0, 4,
		0, 2, 0, 4, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        0, 0, 3, 0,
		0, 0, 0, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        0, 0, 3, 0,
		0, 0, 0, 0, 
        1, 2, 0, 0, 
        0, 0, 3, 4, 
        0, 2, 0, 4, 
        0, 2, 0, 4, 
        1, 0, 0, 4, 
        1, 2, 3, 0, 
        1, 0, 0, 0, 
        1, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 2, 3, 0, 
        5, 5, 5, 5,
    ], [
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0,
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0,
		0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0,
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0,
		0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0,
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * beat.cols + col];
    },
    isSolidTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // tiles 3 and 5 are solid -- the rest are walkable
        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, col, row);
            var isSolid = tile === 5 || tile === 7;
            return res || isSolid;
        }.bind(this), false);
    },
    getCol: function (x) {
        return Math.floor(x / this.tsize);
    },
    getRow: function (y) {
        return Math.floor(y / this.tsize);
    },
    getX: function (col) {
        return col * this.tsize;
    },
    getY: function (row) {
        return row * this.tsize;
    }
};











































battleGame.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas = Loader.getImage('arrows');

    this.hero = new Hero(beat, 160, 160);
    this.camera = new Camera(beat, 512, 512);
    this.camera.follow(this.hero);
};

battleGame.update = function (delta) {
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { diry = -1; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { diry = -1; }
    else if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { diry = -1; }

    this.hero.move(delta, dirx, diry);
    this.camera.update();
	this.hero.move(delta,dirx,1)
};

battleGame._drawLayer = function (layer) {
    var startCol = Math.floor(this.camera.x / beat.tsize);
    var endCol = startCol + (this.camera.width / beat.tsize);
    var startRow = Math.floor(this.camera.y / beat.tsize);
    var endRow = startRow + (this.camera.height / beat.tsize);
    var offsetX = -this.camera.x + startCol * beat.tsize;
    var offsetY = -this.camera.y + startRow * beat.tsize;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = beat.getTile(layer, c, r);
            var x = (c - startCol) * beat.tsize + offsetX;
            var y = (r - startRow) * beat.tsize + offsetY;
            if (tile !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    (tile - 1) * beat.tsize, // source x
                    0, // source y
                    beat.tsize, // source width
                    beat.tsize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    beat.tsize, // target width
                    beat.tsize // target height
                );
            }
        }
    }
};


battleGame._drawGrid = function () {
        var width = beat.cols * beat.tsize;
    var height = beat.rows * beat.tsize;
    var x, y;
    for (var r = 0; r < beat.rows; r++) {
        x = - this.camera.x;
        y = r * beat.tsize - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(width, y);
        this.ctx.stroke();
    }
    for (var c = 0; c < beat.cols; c++) {
        x = c * beat.tsize - this.camera.x;
        y = - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, height);
        this.ctx.stroke();
    }
};

battleGame.render = function () {
    // draw beat background layer
    this._drawLayer(0);

    // draw main character
    this.ctx.drawImage(
        this.hero.image,
        this.hero.screenX - this.hero.width / 2,
        this.hero.screenY - this.hero.height / 2);

    // draw beat top layer
    this._drawLayer(1);

    this._drawGrid();
};
*/
