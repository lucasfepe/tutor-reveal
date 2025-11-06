// Problem: Force and Friction - Dragging Box
export default {
    id: "friction-drag",
    subject: "Physics",
    topic: "Forces and Motion",
    title: "Jack Dragging a Box",

    question: `Jack is dragging a 55.0 kg box. His force is 100 N at 30.0° above the horizontal. The coefficient of friction between the box and the ground is 0.132.
a) Draw a complete force (free body) diagram of the box. Include both vertical and horizontal forces.
b) Using the principles of physics, determine the magnitude of the box's acceleration.`,

    given: [
        "Mass of box: $m = 55.0 \\text{ kg}$",
        "Applied force: $F = 100 \\text{ N}$ at $30.0°$ above horizontal",
        "Coefficient of friction: $\\mu = 0.132$"
    ],

    steps: [
        {
            title: "Part a: Force diagram components",
            content: "The forces acting on the box are:\n- Weight (W) pointing downward\n- Normal force (N) pointing upward\n- Applied force (F) at 30° above horizontal\n- Friction force (f) opposing motion",
            math: "$$\\text{Forces: } W, N, F, f$$"
        },
        {
            title: "Calculate weight and force components",
            content: "Break down the forces:",
            math: "$$W = mg = 55.0 \\times 9.8 = 539 \\text{ N}$$\n$$F_x = F\\cos(30°) = 100\\cos(30°) = 86.6 \\text{ N}$$\n$$F_y = F\\sin(30°) = 100\\sin(30°) = 50.0 \\text{ N}$$"
        },
        {
            title: "Find normal force",
            content: "Apply equilibrium in vertical direction:",
            math: "$$N + F_y = W$$\n$$N = W - F_y = 539 - 50.0 = 489 \\text{ N}$$"
        },
        {
            title: "Calculate friction force",
            content: "Kinetic friction opposes motion:",
            math: "$$f = \\mu N = 0.132 \\times 489 = 64.5 \\text{ N}$$"
        },
        {
            title: "Part b: Find acceleration",
            content: "Apply Newton's second law in horizontal direction:",
            math: "$$F_{net} = F_x - f = 86.6 - 64.5 = 22.1 \\text{ N}$$\n$$a = \\frac{F_{net}}{m} = \\frac{22.1}{55.0} = 0.402 \\text{ m/s}^2$$",
            isAnswer: true
        }
    ],

    answer: {
        partA: "Force diagram shows: Weight down, Normal up, Applied force at 30°, Friction opposing motion",
        partB: "$a = 0.402 \\text{ m/s}^2$"
    }
};