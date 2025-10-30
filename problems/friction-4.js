// Problem: Friction - Braking distance
export default {
    id: "friction-4",
    subject: "Physics",
    topic: "Friction and Motion",
    title: "Emergency Braking Distance",

    question: `Mrs. Thompson is driving along on a rainy night at 23 m/s when she sees a tree branch lying across the road. She slams on the brakes when the tree branch is 70.0 m in front of her. If the coefficient of kinetic friction between the car's locked tires and the road is 0.41, will the car stop before hitting the branch? Mrs. Thompson and the car have a combined mass of 2400 kg.`,

    given: [
        "Initial velocity: $v_0 = 23 \\text{ m/s}$",
        "Distance to branch: $d_{branch} = 70.0 \\text{ m}$",
        "Coefficient of friction: $\\mu_k = 0.41$",
        "Combined mass: $m = 2400 \\text{ kg}$"
    ],

    steps: [
        {
            title: "Calculate maximum deceleration",
            content: "The friction force provides the deceleration:",
            math: "$$F_{friction} = \\mu_k \\times mg = 0.41 \\times 2400 \\times 9.8 = 9633.6 \\text{ N}$$"
        },
        {
            title: "Find deceleration",
            content: "Using Newton's second law (negative for deceleration):",
            math: "$$a = -\\frac{F_{friction}}{m} = -\\frac{9633.6}{2400} = -4.014 \\text{ m/s}^2$$"
        },
        {
            title: "Calculate stopping distance",
            content: "Using $v^2 = v_0^2 + 2a\\Delta x$ with final velocity = 0:",
            math: "$$0 = (23)^2 + 2(-4.014)\\Delta x$$\n$$\\Delta x = \\frac{529}{8.028} = 65.9 \\text{ m}$$"
        },
        {
            title: "Compare with distance to branch",
            content: "Check if car stops in time:",
            math: "$$\\text{Margin} = 70.0 - 65.9 = 4.1 \\text{ m}$$",
            isAnswer: true
        }
    ],

    answer: {
        value: "Yes, she will miss the branch by 4.2 m"
    }
};