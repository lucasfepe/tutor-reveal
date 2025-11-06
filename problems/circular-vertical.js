// Problem: Vertical Circular Motion
export default {
    id: "circular-vertical",
    subject: "Physics",
    topic: "Circular Motion",
    title: "Object in Vertical Circle",

    question: `A 750 g object is attached to a 61.0 cm massless rod and spun in a vertical circle with a period of rotation of 0.830 s.
a) Sketch a force (free body) diagram of the object at the location where maximum tension in the rod occurs. Include the directions of the velocity and the acceleration on your diagram. Assume it is moving counterclockwise.
b) Algebraically determine the magnitude of the maximum tension in the rod.`,

    given: [
        "Mass: $m = 0.750 \\text{ kg}$",
        "Radius: $r = 0.610 \\text{ m}$",
        "Period: $T = 0.830 \\text{ s}$",
        "Vertical circular motion"
    ],

    steps: [
        {
            title: "Part a: Maximum tension location",
            content: "Maximum tension occurs at the bottom of the circle where:\n- Tension points upward (toward center)\n- Weight points downward\n- Net force must point toward center (up)\n- Velocity is horizontal",
            math: "$$\\text{At bottom: } T_{max} - mg = \\frac{mv^2}{r}$$"
        },
        {
            title: "Calculate angular velocity",
            content: "Find ω from the period:",
            math: "$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0.830} = 7.57 \\text{ rad/s}$$"
        },
        {
            title: "Calculate linear velocity",
            content: "Convert to linear velocity:",
            math: "$$v = \\omega r = 7.57 \\times 0.610 = 4.62 \\text{ m/s}$$"
        },
        {
            title: "Calculate centripetal acceleration",
            content: "Find the centripetal acceleration:",
            math: "$$a_c = \\frac{v^2}{r} = \\frac{(4.62)^2}{0.610} = 35.0 \\text{ m/s}^2$$"
        },
        {
            title: "Part b: Calculate maximum tension",
            content: "Apply Newton's second law at bottom:",
            math: "$$T_{max} = mg + ma_c = m(g + a_c)$$\n$$T_{max} = 0.750(9.8 + 35.0) = 0.750(44.8)$$\n$$T_{max} = 33.6 \\text{ N}$$",
            isAnswer: true
        }
    ],

    answer: {
        partA: "Force diagram at bottom: Tension up, Weight down, velocity horizontal, acceleration upward",
        partB: "$T_{max} = 33.6 \\text{ N}$"
    }
};