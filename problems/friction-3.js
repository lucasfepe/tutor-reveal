// Problem: Friction - Finding coefficient
export default {
    id: "friction-3",
    subject: "Physics",
    topic: "Friction and Motion",
    title: "Coefficient of Friction - Sled",

    question: `A girl exerts a 36 N horizontal force as she pulls a 52 N sled across a cement sidewalk at constant speed. What is the coefficient of kinetic friction between the sidewalk and the metal sled runners? Ignore air resistance.`,

    given: [
        "Applied force: $F_{applied} = 36 \\text{ N}$",
        "Weight of sled: $W = 52 \\text{ N}$",
        "Motion: constant speed (no acceleration)"
    ],

    steps: [
        {
            title: "Analyze forces at constant speed",
            content: "At constant speed, acceleration = 0, so net force = 0:",
            math: "$$F_{net} = F_{applied} - F_{friction} = 0$$"
        },
        {
            title: "Find friction force",
            content: "Since net force is zero:",
            math: "$$F_{friction} = F_{applied} = 36 \\text{ N}$$"
        },
        {
            title: "Identify normal force",
            content: "On a horizontal surface, normal force equals weight:",
            math: "$$F_N = W = 52 \\text{ N}$$"
        },
        {
            title: "Calculate coefficient of friction",
            content: "Use the friction formula to find μ:",
            math: "$$\\mu_k = \\frac{F_{friction}}{F_N} = \\frac{36}{52} = 0.692$$",
            isAnswer: true
        }
    ],

    answer: {
        value: "$\\mu_k = 0.69$"
    }
};