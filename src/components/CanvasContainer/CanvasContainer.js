import React, { Component } from "react";
import "./CanvasContainer.css";

const canvasDots = selector => {
    const canvas = document.querySelector(selector || "canvas");
    const ctx = canvas.getContext("2d");
    const colorDot = "#dedede";
    const color = "#ffffff";

    canvas.width = window.innerWidth;
    canvas.height = 500 /* window.innerHeight */;
    canvas.style.display = "block";
    ctx.fillStyle = colorDot;
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = color;

    const mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
    };

    const dots = {
        nb: 600,
        distance: 60,
        d_radius: 100,
        array: []
    };

    class Dot {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = -0.5 + Math.random();
            this.vy = -0.5 + Math.random();
            this.radius = Math.random();
        }

        create() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        }

        animate() {
            for (let i = 0; i < dots.nb; i++) {
                const dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = dot.vx;
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        }

        line() {
            let i_dot;
            let j_dot;

            for (let i = 0; i < dots.nb; i++) {
                for (let j = 0; j < dots.nb; j++) {
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];

                    if (
                        i_dot.x - j_dot.x < dots.distance &&
                        i_dot.y - j_dot.y < dots.distance &&
                        i_dot.x - j_dot.x > -dots.distance &&
                        i_dot.y - j_dot.y > -dots.distance
                    ) {
                        if (
                            i_dot.x - mousePosition.x < dots.d_radius &&
                            i_dot.y - mousePosition.y < dots.d_radius &&
                            i_dot.x - mousePosition.x > -dots.d_radius &&
                            i_dot.y - mousePosition.y > -dots.d_radius
                        ) {
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    }

    const createDots = () => {
        let dot = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < dots.nb; i++) {
            dots.array.push(new Dot());
            dot = dots.array[i];
            dot.create();
        }

        dot.line();
        dot.animate();
    };

    window.onmousemove = param => {
        mousePosition.x = param.pageX;
        mousePosition.y = param.pageY;
    };

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    setInterval(createDots, 1000 / 30);
};

let CanvasContainerCounter = 1;

export default class CanvasContainer extends Component {
    constructor(props) {
        super(props);
        CanvasContainerCounter++;
        this.id = CanvasContainerCounter;
    }

    componentDidMount() {
        canvasDots(`.a-canvas-container.a-canvas-container--${this.id}`);
    }

    render() {
        return <canvas className={`a-canvas-container a-canvas-container--${this.id}`} />;
    }
}
