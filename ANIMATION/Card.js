const { PI, floor } = Math;
class Card {
    constructor(canvas, p) {
        this.c = canvas;

        this.c.width = this.c.clientWidth;
        this.c.height = this.c.clientHeight;

        this.x = this.c.width / 2;
        this.y = this.c.height / 2;
        this.r = this.c.width / 2 - 20;

        this.p = p * 1;
        this.ctx = this.c.getContext("2d");
    }

    start() {
        let term = this.p / 30; //30은 프레임 
        let now = 0;
        let frame = setInterval(() => {
            now += term;
            if (now >= this.p) {
                now = this.p;
                clearInterval(frame);
            }
            this.draw(now);
        }, 1000 / 30);
    }

    draw(p) {
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * PI);
        this.ctx.fillStyle = "#e2eced";
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.r, -PI / 2, -PI / 2 + p * PI / 50);
        this.ctx.fillStyle = "#01b794";
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r - 30, 0, 2 * PI);
        this.ctx.fillStyle = "#fff";
        this.ctx.fill();

        this.ctx.fillStyle = "#000";
        this.ctx.font = "30px Arial";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(floor(p) + "%", this.x, this.y);
    }
}