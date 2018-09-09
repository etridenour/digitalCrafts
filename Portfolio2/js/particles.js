var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function Circle(){
    this.radius = getRandomInt(30);
    this.originalSize = this.radius;
    this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
    this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
    this.gradient = Math.random();
    this.color = 'rgba('+ getRandomInt(255) +','+ getRandomInt(255) + ','+ getRandomInt(255) + ','+ this.gradient +')';    
    this.xVelocity = 5 * (Math.random() - Math.random());
    this.yVelocity = 5 * (Math.random() - Math.random());
    this.draw = function(){
        // c.font = 'lighter 80px sans-serif';
        // c.fillStyle = '#dedede';
        // c.textAlign = 'center';
        // c.fillText('Bouncing Bubbles', canvas.width/2, canvas.height/2);
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
        this.update();
    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.xVelocity = -this.xVelocity;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.yVelocity = -this.yVelocity;
        }
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 
            && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                if(this.radius < 150){
                    this.radius += 2;
                }
        }
        else if(this.radius !== this.originalSize){
            this.radius -= 2;
        }
    }
}

var circleArray = [];

for(var i = 0; i < 20; i++){
    circleArray.push(new Circle());
}

function animate(){
    c.clearRect(0,0, innerWidth, innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();