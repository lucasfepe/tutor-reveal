// Problem: Pulley system with two masses
export default {
    id: "pulley-1",
    subject: "Physics",
    topic: "Pulleys and Systems",
    title: "Two Masses Connected by Pulley",

    question: `A 600 kg mass is connected over a pulley to a 400 kg mass. What is the resulting acceleration when the masses are released? What is the tension in the rope?`,

    given: [
        "Mass 1: $m_1 = 600 \\text{ kg}$ (heavier)",
        "Mass 2: $m_2 = 400 \\text{ kg}$ (lighter)",
        "Connected by rope over pulley"
    ],

    steps: [
        {
            title: "Identify the motion",
            content: "The heavier mass (600 kg) will fall, lighter mass (400 kg) will rise",
            math: "$$\\text{Net driving force} = m_1g - m_2g = (m_1 - m_2)g$$"
        },
        {
            title: "Calculate net force",
            content: "Find the difference in weights:",
            math: "$$F_{net} = (600 - 400) \\times 9.8 = 200 \\times 9.8 = 1960 \\text{ N}$$"
        },
        {
            title: "Find total mass",
            content: "Both masses accelerate together:",
            math: "$$m_{total} = m_1 + m_2 = 600 + 400 = 1000 \\text{ kg}$$"
        },
        {
            title: "Calculate acceleration",
            content: "Apply Newton's second law to the system:",
            math: "$$a = \\frac{F_{net}}{m_{total}} = \\frac{1960}{1000} = 1.96 \\text{ m/s}^2$$"
        },
        {
            title: "Find tension in rope",
            content: "Apply Newton's second law to the lighter mass (going up):",
            math: "$$T - m_2g = m_2a$$\n$$T = m_2(g + a) = 400(9.8 + 1.96) = 400 \\times 11.76$$\n$$T = 4704 \\text{ N} = 4.70 \\times 10^3 \\text{ N}$$",
            isAnswer: true
        }
    ],

    answer: {
        acceleration: "$a = 1.96 \\text{ m/s}^2$",
        tension: "$T = 4.71 \\times 10^3 \\text{ N}$"
    }
};