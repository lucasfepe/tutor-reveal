// Problem: Inclined plane with friction
export default {
    id: "incline-1",
    subject: "Physics",
    topic: "Inclined Planes",
    title: "Mass on Inclined Plane with Friction",

    question: `A 5.0 kg mass is on an incline which makes an angle of 50° with the horizontal. The incline has a coefficient of friction of 0.10.
a) If the mass is released from rest, at what rate does it accelerate down the incline?
b) What force must be applied to cause the mass to accelerate at 2.0 m/s² up the incline?`,

    given: [
        "Mass: $m = 5.0 \\text{ kg}$",
        "Incline angle: $\\theta = 50°$",
        "Coefficient of friction: $\\mu = 0.10$",
        "Part b: Desired acceleration up incline: $a = 2.0 \\text{ m/s}^2$"
    ],

    steps: [
        {
            title: "Calculate weight components",
            content: "Break weight into parallel and perpendicular components:",
            math: "$$W_{\\parallel} = mg\\sin\\theta = 5.0 \\times 9.8 \\times \\sin(50°) = 37.5 \\text{ N}$$\n$$W_{\\perp} = mg\\cos\\theta = 5.0 \\times 9.8 \\times \\cos(50°) = 31.5 \\text{ N}$$"
        },
        {
            title: "Calculate friction force",
            content: "Normal force equals perpendicular weight component:",
            math: "$$F_f = \\mu F_N = 0.10 \\times 31.5 = 3.15 \\text{ N}$$"
        },
        {
            title: "Part a: Acceleration down incline",
            content: "Net force down incline (taking down as positive):",
            math: "$$F_{net} = W_{\\parallel} - F_f = 37.5 - 3.15 = 34.35 \\text{ N}$$\n$$a = \\frac{F_{net}}{m} = \\frac{34.35}{5.0} = 6.87 \\text{ m/s}^2$$"
        },
        {
            title: "Part b: Force for upward acceleration",
            content: "For acceleration up the incline, applied force must overcome both components:",
            math: "$$F_{applied} - W_{\\parallel} - F_f = ma$$\n$$F_{applied} = ma + W_{\\parallel} + F_f = 5.0(2.0) + 37.5 + 3.15$$\n$$F_{applied} = 50.65 \\text{ N} \\approx 51 \\text{ N}$$",
            isAnswer: true
        }
    ],

    answer: {
        partA: "$a = -6.9 \\text{ m/s}^2$ (down the incline)",
        partB: "$F = 51 \\text{ N}$"
    }
};