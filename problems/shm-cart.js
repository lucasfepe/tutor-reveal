// Problem: Simple Harmonic Motion - Cart and Spring
export default {
    id: "shm-cart",
    subject: "Physics",
    topic: "Simple Harmonic Motion",
    title: "Cart-Spring System Analysis",

    question: `A 20.0 kg cart is placed on a horizontal surface and attached to a long, horizontal spring. The spring is compressed, and when it is released, the cart-spring system undergoes simple harmonic motion. The horizontal displacement of the cart shows a period of 2.0 s and amplitude of 0.30 m.
a) From the graph, determine the amplitude of oscillation.
b) Determine the frequency of oscillation.
c) Determine the stiffness (spring constant) of the spring.`,

    given: [
        "Mass of cart: $m = 20.0 \\text{ kg}$",
        "Period from graph: $T = 2.0 \\text{ s}$",
        "Amplitude from graph: $A = 0.30 \\text{ m}$"
    ],

    steps: [
        {
            title: "Part a: Amplitude from graph",
            content: "The amplitude is the maximum displacement from equilibrium:",
            math: "$$A = 0.30 \\text{ m}$$"
        },
        {
            title: "Part b: Calculate frequency",
            content: "Frequency is the reciprocal of period:",
            math: "$$f = \\frac{1}{T} = \\frac{1}{2.0} = 0.50 \\text{ Hz}$$"
        },
        {
            title: "Part c: Find angular frequency",
            content: "Calculate ω to find spring constant:",
            math: "$$\\omega = 2\\pi f = 2\\pi(0.50) = \\pi \\text{ rad/s}$$"
        },
        {
            title: "Calculate spring constant",
            content: "Use the relationship $\\omega = \\sqrt{k/m}$:",
            math: "$$\\omega^2 = \\frac{k}{m}$$\n$$k = m\\omega^2 = 20.0 \\times \\pi^2 = 20.0 \\times 9.87$$\n$$k = 197 \\text{ N/m}$$",
            isAnswer: true
        }
    ],

    answer: {
        partA: "$A = 0.30 \\text{ m}$",
        partB: "$f = 0.50 \\text{ Hz}$",
        partC: "$k = 197 \\text{ N/m}$"
    }
};