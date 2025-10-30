// Problem: Forces on an object
export default {
    id: "forces-1",
    subject: "Physics",
    topic: "Forces and Motion",
    title: "Net Force Calculation",

    // The question (supports LaTeX)
    question: `Suppose the only horizontal forces acting on a 20-N object on a smooth table are 36 N [45°] and 60 N [125°].

(a) What is the net force acting on the object?
(b) Calculate the acceleration of the object`,

    // Given information (optional, for display)
    given: [
        "Weight: $W = 20 \\text{ N}$",
        "Force 1: $F_1 = 36 \\text{ N}$ at $45°$",
        "Force 2: $F_2 = 60 \\text{ N}$ at $125°$",
        "Surface: smooth (frictionless)"
    ],

    // Solution steps (what you'll reveal one by one)
    steps: [
        {
            title: "(a): Resolve Force 1 into components",
            content: "Break down $F_1 = 36 \\text{ N}$ at $45°$:",
            math: "$$F_{1x} = 36\\cos(45°) = 25.5 \\text{ N}$$\n$$F_{1y} = 36\\sin(45°) = 25.5 \\text{ N}$$"
        },
        {
            title: "Resolve Force 2 into components",
            content: "Break down $F_2 = 60 \\text{ N}$ at $125°$:",
            math: "$$F_{2x} = 60\\cos(125°) = -34.4 \\text{ N}$$\n$$F_{2y} = 60\\sin(125°) = 49.1 \\text{ N}$$"
        },
        {
            title: "Sum the x-components",
            content: "Add horizontal forces:",
            math: "$$F_x = F_{1x} + F_{2x} = 25.5 + (-34.4) = -8.9 \\text{ N}$$"
        },
        {
            title: "Sum the y-components",
            content: "Add vertical forces:",
            math: "$$F_y = F_{1y} + F_{2y} = 25.5 + 49.1 = 74.6 \\text{ N}$$"
        },
        {
            title: "Calculate net force magnitude",
            content: "Use the Pythagorean theorem:",
            math: "$$F_{net} = \\sqrt{F_x^2 + F_y^2} = \\sqrt{(-8.9)^2 + (74.6)^2} = 75.1 \\text{ N}$$"
        },
        {
            title: "Calculate direction",
            content: "Find the angle from the positive x-axis:",
            math: "$$\\theta = \\tan^{-1}\\left(\\frac{F_y}{F_x}\\right) = \\tan^{-1}\\left(\\frac{74.6}{-8.9}\\right) = 96.8°$$",
            isAnswer: true
        },
        {
            title: "(b): Calculate the mass",
            content: "First, find the mass using $W = mg$:",
            math: "$$m = \\frac{W}{g} = \\frac{20}{9.8} = 2.04 \\text{ kg}$$"
        },
        {
            title: "Calculate acceleration",
            content: "Apply Newton's second law:",
            math: "$$a = \\frac{F_{net}}{m} = \\frac{75.1}{2.04} = 36.8 \\text{ m/s}^2 \\text{ at } 96.8°$$",
            isAnswer: true
        }
    ],

    // Final answer (optional)
    answer: {
        partA: "$F_{net} = 75.1 \\text{ N}$ at $96.8°$",
        partB: "$a = 36.8 \\text{ m/s}^2$ at $96.8°$"
    }
};