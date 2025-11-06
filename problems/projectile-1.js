// Problem: Projectile Motion - Golf Ball
export default {
    id: "projectile-1",
    subject: "Physics",
    topic: "Projectile Motion",
    title: "Golf Ball Trajectory",

    question: `A golf ball is struck with an initial velocity of 85.0 m/s at an angle of 27.0° above the horizontal. If we assume no air resistance and that the ground is level, determine the horizontal distance D travelled while in the air.`,

    given: [
        "Initial velocity: $v_0 = 85.0 \\text{ m/s}$",
        "Launch angle: $\\theta = 27.0°$",
        "No air resistance",
        "Level ground"
    ],

    steps: [
        {
            title: "Find velocity components",
            content: "Break the initial velocity into horizontal and vertical components:",
            math: "$$v_{0x} = v_0 \\cos\\theta = 85.0 \\cos(27.0°) = 75.7 \\text{ m/s}$$\n$$v_{0y} = v_0 \\sin\\theta = 85.0 \\sin(27.0°) = 38.6 \\text{ m/s}$$"
        },
        {
            title: "Calculate time of flight",
            content: "Find the total time in the air using $v_y = v_{0y} - gt$ at the peak (where $v_y = 0$):",
            math: "$$t_{up} = \\frac{v_{0y}}{g} = \\frac{38.6}{9.8} = 3.94 \\text{ s}$$\n$$t_{total} = 2t_{up} = 7.88 \\text{ s}$$"
        },
        {
            title: "Alternative time calculation",
            content: "Or use the formula for total flight time:",
            math: "$$t = \\frac{2v_0\\sin\\theta}{g} = \\frac{2(85.0)\\sin(27.0°)}{9.8} = 7.88 \\text{ s}$$"
        },
        {
            title: "Calculate horizontal distance",
            content: "The horizontal distance is constant velocity × time:",
            math: "$$D = v_{0x} \\times t = 75.7 \\times 7.88 = 597 \\text{ m}$$",
            isAnswer: true
        }
    ],

    answer: {
        value: "$D = 597 \\text{ m}$"
    }
};