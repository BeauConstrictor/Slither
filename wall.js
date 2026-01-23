
class Wall {
    constructor(game) {
        this.game = game;

        this.radius = WORLD_RADIUS * 2.5;
    }

    snakeStep(snake) {
        const head = snake.segments[0];
        const dist = Math.sqrt(head.x ** 2 + head.y ** 2)
            + snakeRadius(snake.length);

        if (dist > this.radius) {
            snake.kill();
        }
    }

    step() {
        for (let i = 0; i < this.game.bots.length; i++)
            this.snakeStep(this.game.bots[i]);
        const snake = this.game.player;
        this.snakeStep(snake);
    }

    draw() {
        const playerHead = this.game.player.segments[0];
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const radius = this.radius * this.game.zoom;

        ctx.save();

        ctx.fillStyle = "#11111b";
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);

        const screenX = (0 - playerHead.x) * this.game.zoom + centerX;
        const screenY = (0 - playerHead.y) * this.game.zoom + centerY;
        ctx.arc(screenX, screenY, radius, 0, Math.PI * 2, true);

        ctx.fill('evenodd');

        ctx.restore();
    }
}
