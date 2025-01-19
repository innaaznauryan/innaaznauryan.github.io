const localTime = document.getElementById("local-time");
const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    localTime.innerText = `Local Time: GMT+4 - ${timeString}`;
};
updateTime();
setInterval(updateTime, 1000);



const copyrightYear = document.getElementById("copyright-year");
const year = new Date().getFullYear();
copyrightYear.textContent = year;



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "hsl(120, 50%, 57%)";
}

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.maxParticles = 60;
        this.connectDistance = 50;
    }
    update() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].x += this.particles[i].vx;
            this.particles[i].y += this.particles[i].vy;
            ctx.beginPath();
            ctx.arc(this.particles[i].x, this.particles[i].y, this.particles[i].radius, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.hypot(dx, dy);
                if (distance < this.connectDistance) {
                    ctx.strokeStyle = `hsl(120, 50%, 57%, ${1 - distance / this.connectDistance + 0.3})`;
                    ctx.beginPath();
                    ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    ctx.stroke();
                }
            }
        }
        if (this.particles.length > this.maxParticles) {
            this.particles = this.particles.slice(-this.maxParticles);
        }
    }
}

class Particle {
    constructor(x, y) {
        this.radius = 1;
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 8 - 4;
        this.vy = Math.random() * 8 - 4;
    }
}

const particleSystem = new ParticleSystem();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleSystem.update();
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
    init();
});
window.addEventListener("scroll", (e) => {
    canvas.style.top = `${window.pageYOffset}px`;
})
window.addEventListener("mousemove", (e) => {
    particleSystem.particles.push(new Particle(e.x, e.y));
});