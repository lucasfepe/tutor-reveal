// Problem: Pulley system with 3kg and 5kg masses
export default {
    id: "pulley-2",
    subject: "Physics",
    topic: "Pulleys and Systems",
    title: "Atwood Machine - 3kg and 5kg",

    question: `A 3.0 kg mass is attached to a 5.0 kg mass by a strong string that passes over a frictionless pulley. When the masses are released, what will be:
(a) the acceleration of the masses, and
(b) the magnitude of the tension in the string?`,

    given: [
        "Mass 1: $m_1 = 3.0 \\text{ kg}$ (lighter)",
        "Mass 2: $m_2 = 5.0 \\text{ kg}$ (heavier)",
        "Frictionless pulley"
    ],

    steps: [
        {
            title: "Set up the system",
            content: "The 5.0 kg mass will fall, 3.0 kg mass will rise. Net force:",
            math: "$$F_{net} = m_2g - m_1g = (5.0 - 3.0) \\times 9.8 = 19.6 \\text{ N}$$"
        },
        {
            title: "Calculate total mass",
            content: "Both masses move together:",
            math: "$$m_{total} = m_1 + m_2 = 3.0 + 5.0 = 8.0 \\text{ kg}$$"
        },
        {
            title: "Part a: Find acceleration",
            content: "Apply Newton's second law:",
            math: "$$a = \\frac{F_{net}}{m_{total}} = \\frac{19.6}{8.0} = 2.45 \\text{ m/s}^2$$"
        },
        {
            title: "Part b: Calculate tension",
            content: "Apply Newton's second law to the 3.0 kg mass (going up):",
            math: "$$T - m_1g = m_1a$$\n$$T = m_1(g + a) = 3.0(9.8 + 2.45)$$\n$$T = 3.0 \\times 12.25 = 36.75 \\text{ N}$$",
            isAnswer: true
        }
    ],

    answer: {
        partA: "$a = 2.5 \\text{ m/s}^2$",
        partB: "$T = 37 \\text{ N}$"
    }
};