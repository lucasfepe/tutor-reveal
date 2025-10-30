// Problem: Friction - Box on concrete floor
export default {
    id: "friction-1",
    subject: "Physics",
    topic: "Friction and Motion",
    title: "Box Acceleration on Concrete",

    question: `A 15 kg box is being dragged over a concrete floor with an applied horizontal force of 40 N. If the coefficient of kinetic friction is 0.25, what is the acceleration of the box?`,

    given: [
        "Mass: $m = 15 \\text{ kg}$",
        "Applied force: $F_{applied} = 40 \\text{ N}$",
        "Coefficient of kinetic friction: $\\mu_k = 0.25$"
    ],

    steps: [
        {
            title: "Calculate the weight of the box",
            content: "Find the normal force (weight) acting on the box:",
            math: "$$W = mg = 15 \\times 9.8 = 147 \\text{ N}$$"
        },
        {
            title: "Calculate the friction force",
            content: "Since the box is on a horizontal surface, $F_N = W$:",
            math: "$$F_{friction} = \\mu_k \\times F_N = 0.25 \\times 147 = 36.75 \\text{ N}$$"
        },
        {
            title: "Find the net force",
            content: "The net force is the applied force minus the friction force:",
            math: "$$F_{net} = F_{applied} - F_{friction} = 40 - 36.75 = 3.25 \\text{ N}$$"
        },
        {
            title: "Calculate acceleration",
            content: "Apply Newton's second law:",
            math: "$$a = \\frac{F_{net}}{m} = \\frac{3.25}{15} = 0.217 \\text{ m/s}^2$$",
            isAnswer: true
        }
    ],

    answer: {
        value: "$a = 0.21 \\text{ m/s}^2$"
    }
};