//wojtekgame 2026

//function wojchan()
(() => {
    let g = 30,
        p = { x: innerWidth / 2, y: innerHeight / 2 },
        m = { ...p },
        v = 0,
        u = `url(https://cdn.jsdelivr.net/gh/wojtekcodestoday/wojchan@master/${Math.random() > 0.4 ? "hazelchan" : "sprite"}.png)`,
        d = document.body.appendChild(document.createElement('div')),
        s = d.style;

    onmousemove = e => {
        m = { x: e.clientX, y: e.clientY };
    };

    (function a() {
        let dx = m.x - p.x,
            dy = m.y - p.y,
            t = Math.hypot(dx, dy),
            n = Math.atan2(dy, dx),
            z = t > 150,
            w = t > 20,
            f = dx < 0 ? 1 : 0;

        w && (
            p.x += Math.cos(n) * (z ? 8 : 4),
            p.y += Math.sin(n) * (z ? 8 : 4),
            v = -~v % 4
        );

        s.cssText = `position:fixed;pointer-events:none;z-index:10000;image-rendering:pixelated;width:${g}px;height:${g}px;left:${p.x}px;top:${p.y}px;transform:translate(-50%,-50%) scale(2);background-size:300%;background-image:${`${u},`.repeat(z + 1) + u};background-position:${z ? `-${(f ? 1 : 2) * g}px -${2 * g}px,` : ""}-${(w ? v % 3 : 1) * g}px -${f * g}px,0 -${2 * g}px`;

        setTimeout(() => requestAnimationFrame(a), 70);
    })();
})();
