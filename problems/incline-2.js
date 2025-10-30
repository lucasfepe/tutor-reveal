// Problem: Incline angle calculation
export default {
    id: "incline-2",
    subject: "Physics",
    topic: "Inclined Planes",
    title: "Incline Angle for Weight Components",

    question: `A suitcase is on an inclined plane. At what angle, relative to the horizontal, will the component of the suitcase's weight parallel to the plane be equal to half the perpendicular component of its weight?`,

    given: [
        "Condition: $W_{\\parallel} = \\frac{1}{2}W_{\\perp}$",
        "Weight components on incline"
    ],

    steps: [
        {
            title: "Set up weight components",
            content: "Express weight components in terms of angle θ:",
            math: "$$W_{\\parallel} = mg\\sin\\theta$$\n$$W_{\\perp} = mg\\cos\\theta$$"
        },
        {
            title: "Apply the given condition",
            content: "Set parallel component equal to half the perpendicular:",
            math: "$$mg\\sin\\theta = \\frac{1}{2}(mg\\cos\\theta)$$"
        },
        {
            title: "Simplify the equation",
            content: "Cancel mg from both sides:",
            math: "$$\\sin\\theta = \\frac{1}{2}\\cos\\theta$$\n$$\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1}{2}$$"
        },
        {
            title: "Solve for angle",
            content: "Use the tangent identity:",
            math: "$$\\tan\\theta = \\frac{1}{2}$$\n$$\\theta = \\arctan(0.5) = 26.57°$$",
            isAnswer: true
        }
    ],

    answer: {
        value: "$\\theta = 26.6°$"
    }
};