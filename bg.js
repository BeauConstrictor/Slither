class Background {
    constructor(game) {
        this.game = game;

        this.image = new Image();
        this.image.src = TILE;
        this.pattern = null;
        this.loaded = false;
        this.image.onload = () => {
            this.pattern = ctx.createPattern(this.image, "repeat");
            this.loaded = true;
        };
    }

    draw(pos) {
        const head = this.game.player.segments[0];
        const zoom = this.game.zoom;

        let x = head.x;
        let y = head.y;
        if (pos) {
            x = pos.x;
            y = pos.y;
        }

        if (!this.pattern) return;

        ctx.save();

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(zoom, zoom);

        const centerX = canvas.width / 2 / zoom;
        const centerY = canvas.height / 2 / zoom;
        ctx.translate(-x + centerX, -y + centerY);

        ctx.fillStyle = this.pattern;
        ctx.fillRect(
            x - centerX - 500,
            y - centerY - 500,
            canvas.width / zoom + 1000,
            canvas.height / zoom + 1000
        );

        ctx.restore();
    }
}
