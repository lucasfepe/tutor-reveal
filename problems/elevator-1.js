// Problem: Elevators - Tension in rope
export default {
    id: "elevator-1",
    subject: "Physics",
    topic: "Forces and Elevators",
    title: "Elevator Tension Problems",

    question: `A 490 N object is suspended from a rope.
a) What is the force required to raise it vertically at 5.00 m/s?
b) What is the force required to accelerate it down at 3.00 m/s²?`,

    given: [
        "Weight of object: $W = 490 \\text{ N}$",
        "Part a: Constant velocity $v = 5.00 \\text{ m/s}$",
        "Part b: Downward acceleration $a = -3.00 \\text{ m/s}^2$"
    ],

    steps: [
        {
            title: "Find the mass",
            content: "Calculate mass from weight:",
            math: "$$m = \\frac{W}{g} = \\frac{490}{9.8} = 50 \\text{ kg}$$"
        },
        {
            title: "Part a: Constant velocity",
            content: "At constant velocity, acceleration = 0, so net force = 0:",
            math: "$$T - W = 0$$\n$$T = W = 490 \\text{ N}$$"
        },
        {
            title: "Part b: Downward acceleration",
            content: "Apply Newton's second law (taking down as negative):",
            math: "$$F_{net} = T - W = ma$$\n$$T - 490 = 50 \\times (-3.00)$$"
        },
        {
            title: "Solve for tension",
            content: "Calculate the tension:",
            math: "$$T = 490 - 150 = 340 \\text{ N}$$",
            isAnswer: true
        }
    ],

    answer: {
        partA: "$T = 490 \\text{ N}$",
        partB: "$T = 340 \\text{ N}$"
    }
};