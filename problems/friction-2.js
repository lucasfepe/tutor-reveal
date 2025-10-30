// Problem: Friction - Required force for acceleration
export default {
    id: "friction-2",
    subject: "Physics",
    topic: "Friction and Motion",
    title: "Force Required for Acceleration",

    question: `A 10 kg box is pulled across a level floor, where the coefficient of kinetic friction is 0.35. What horizontal force is required for an acceleration of 2.0 m/s²?`,

    given: [
        "Mass: $m = 10 \\text{ kg}$",
        "Desired acceleration: $a = 2.0 \\text{ m/s}^2$",
        "Coefficient of kinetic friction: $\\mu_k = 0.35$"
    ],

    steps: [
        {
            title: "Calculate the weight and normal force",
            content: "On a level floor, the normal force equals the weight:",
            math: "$$F_N = W = mg = 10 \\times 9.8 = 98 \\text{ N}$$"
        },
        {
            title: "Calculate the friction force",
            content: "Find the kinetic friction force:",
            math: "$$F_{friction} = \\mu_k \\times F_N = 0.35 \\times 98 = 34.3 \\text{ N}$$"
        },
        {
            title: "Apply Newton's second law",
            content: "The net force needed for the desired acceleration:",
            math: "$$F_{net} = ma = 10 \\times 2.0 = 20 \\text{ N}$$"
        },
        {
            title: "Calculate required applied force",
            content: "The applied force must overcome friction and provide net force:",
            math: "$$F_{applied} = F_{net} + F_{friction} = 20 + 34.3 = 54.3 \\text{ N}$$",
            isAnswer: true
        }
    ],

    answer: {
        value: "$F = 54 \\text{ N}$"
    }
};