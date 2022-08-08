let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d")
canvas.width=400;
canvas.height=700;
document.body.appendChild(canvas) // 바디에다 붙혀줌

let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;

// 우주선 좌표
let spaceshiptX = canvas.width/2 - 32;
let spaceshiptY = canvas.height - 64;

const loadImage = () => {
    backgroundImage = new Image();
    backgroundImage.src="images/background.jpg"

    spaceshipImage = new Image();
    spaceshipImage.src="images/spaceship.png"

    bulletImage = new Image();
    bulletImage.src="images/bullet.png"

    enemyImage = new Image();
    enemyImage.src="images/enemy.png"

    gameOverImage = new Image();
    gameOverImage.src="images/gameover.jpg"
}

let keysDown={};
const setupKeyboardListener = () => {
    document.addEventListener("keydown", function(e) {
        // console.log("무슨 키가 눌렸어?", e.keyCode)
        keysDown[e.keyCode] = true
        console.log("키다운객체에 들어간 값은?",keysDown)
    })//키보드 눌렀을떄
    document.addEventListener("keyup", function(e) {
        delete keysDown[e.keyCode]
        console.log("키다운객체에 들어간 값은?",keysDown)
    })
}

const locationUpdate = () => {
    if(68 in keysDown) {
        spaceshiptX += 5;
    }
    if(spaceshiptX <=0) {
        spaceshiptX=0
    }
    if(65 in keysDown) {
        spaceshiptX -= 5;
    }
    if(spaceshiptX >= canvas.width - 64) {
        spaceshiptX = canvas.width - 64;
    }
}

const render = () => {
    //drawImage(어떤이미지,시작점X 시작점Y,사이즈)
    ctx.drawImage(backgroundImage, 0, 0, canvas.width,canvas.height)    
    ctx.drawImage(spaceshipImage, spaceshiptX, spaceshiptY)
}

const main = () => {
    locationUpdate();
    render();
    requestAnimationFrame(main) //메인 계속 호출
}

loadImage();
main();
setupKeyboardListener();