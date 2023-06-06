const PricingData = [
    {
        id: 1,
        title: "Basic Plan",
        price: {
            currency: "$",
            amount: 199,
            type: "Monthly",
        },
        description: "All services are included:",
        services: [
            {
                id: 1.1,
                text: "Full access to library",
            },
            {
                id: 1.2,
                text: "Complete documentation",
            },
            {
                id: 1.3,
                text: "24/7 Support",
                disable: true,
            },
            {
                id: 1.4,
                text: "Cloud storage backup",
                disable: true,
            },
        ],
        url: "/pricing",
    },
    {
        id: 2,
        title: "Standard plan",
        price: {
            currency: "$",
            amount: 399,
            type: "Monthly",
        },
        description: "All services are included:",
        services: [
            {
                id: 1.1,
                text: "Full access to library",
            },
            {
                id: 1.2,
                text: "Complete documentation",
            },
            {
                id: 1.3,
                text: "24/7 Support",
            },
            {
                id: 1.4,
                text: "Cloud storage backup",
                disable: true,
            },
        ],
        url: "/pricing",
    },
    {
        id: 3,
        title: "Advanced  Plan",
        price: {
            currency: "$",
            amount: 599,
            type: "Monthly",
        },
        description: "All services are included:",
        services: [
            {
                id: 1.1,
                text: "Full access to library",
            },
            {
                id: 1.2,
                text: "Complete documentation",
            },
            {
                id: 1.3,
                text: "24/7 Support",
            },
            {
                id: 1.4,
                text: "Cloud storage backup",
            },
        ],
        url: "/pricing",
    },
];

export default PricingData;
