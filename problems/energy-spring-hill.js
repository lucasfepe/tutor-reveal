// Problem: Energy Conservation - Spring and Hill
export default {
    id: "energy-spring-hill",
    subject: "Physics",
    topic: "Energy Conservation",
    title: "Spring-Launched Cart on Hill",

    question: `A 6.5 kg cart is connected to a spring with a spring constant of 775 N/m. The spring is initially compressed 46 cm and the cart is at rest on horizontal ground. The spring is then released and travels up a hill.
a) Using the principle of physics, determine the height h when the cart is travelling at 3.0 m/s. Assume an ideal spring and no friction or air resistance.
b) Describe the energy conversions that take place: (i) when the spring is released (ii) when the cart moves up the hill`,

    given: [
        "Mass of cart: $m = 6.5 \\text{ kg}$",
        "Spring constant: $k = 775 \\text{ N/m}$",
        "Initial compression: $x = 0.46 \\text{ m}$",
        "Velocity at height h: $v = 3.0 \\text{ m/s}$"
    ],

    steps: [
        {
            title: "Calculate initial elastic potential energy",
            content: "Energy stored in compressed spring:",
            math: "$$PE_{elastic} = \\frac{1}{2}kx^2 = \\frac{1}{2}(775)(0.46)^2 = 82.0 \\text{ J}$$"
        },
        {
            title: "Apply conservation of energy",
            content: "Initial elastic PE = Final KE + Final gravitational PE:",
            math: "$$PE_{elastic} = KE_{final} + PE_{gravity}$$\n$$82.0 = \\frac{1}{2}mv^2 + mgh$$"
        },
        {
            title: "Calculate kinetic energy at height h",
            content: "Find KE when cart is moving at 3.0 m/s:",
            math: "$$KE = \\frac{1}{2}(6.5)(3.0)^2 = 29.3 \\text{ J}$$"
        },
        {
            title: "Part a: Solve for height",
            content: "Substitute and solve for h:",
            math: "$$82.0 = 29.3 + 6.5(9.8)h$$\n$$52.7 = 63.7h$$\n$$h = 0.827 \\text{ m}$$",
            isAnswer: true
        },
        {
            title: "Part b: Energy conversions",
            content: "(i) When spring released: Elastic PE → Kinetic Energy (transformation)\n(ii) Moving up hill: Kinetic Energy → Gravitational PE (transformation)",
            isAnswer: true
        }
    ],

    answer: {
        partA: "$h = 0.827 \\text{ m}$",
        partB: "(i) Elastic PE transforms to KE\n(ii) KE transforms to gravitational PE"
    }
};