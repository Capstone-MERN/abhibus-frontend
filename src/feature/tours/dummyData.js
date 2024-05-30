export const data = {
  boardingPoints: [
    {
      stopId: 1,
      name: "Kondapur ",
      directions: "Opposite Harsha toyota showroom",
    },
    {
      stopId: 2,
      name: "Kukatpally",
      directions: "Near Hyderabad house , beside vegetable yard.",
    },
    {
      stopId: 3,
      name: "Charminar",
      directions: "Opposite hyderabad central mall",
    },
    {
      stopId: 4,
      name: "Charminar",
      directions: "Opposite hyderabad central mall",
    },
    {
      stopId: 5,
      name: "Charminar",
      directions: "Opposite hyderabad central mall",
    },
    {
      stopId: 6,
      name: "Charminar",
      directions: "Opposite hyderabad central mall",
    },
    {
      stopId: 7,
      name: "Charminar",
      directions: "Opposite hyderabad central mall",
    },
  ],
  droppingPoints: [
    {
      stopId: 8,
      name: "Chickballapur",
      directions: "Chickballapur bypass",
    },
    {
      stopId: 9,
      name: "Devanahalli Airport",
      directions: "Devanahalli airport bypass road",
    },
    {
      stopId: 10,
      name: "Devanahalli Airport",
      directions: "Devanahalli airport bypass road",
    },
    {
      stopId: 11,
      name: "Devanahalli Airport",
      directions: "Devanahalli airport bypass road",
    },
    {
      stopId: 12,
      name: "Devanahalli Airport",
      directions: "Devanahalli airport bypass road",
    },
    {
      stopId: 13,
      name: "Devanahalli Airport",
      directions: "Devanahalli airport bypass road",
    },
  ],
  tours: [
    {
      busId: 544322,
      tourId: 54851,
      busType: "Ashok Leyland AC Sleeper", // AC | NON-AC
      busPartner: "ABC Travels",
      amenities: [
        { icon: "wifi", label: "Wi-Fi" },
        { icon: "power", label: "Power Outlet" },
        { icon: "tv", label: "TV" },
        { icon: "sanitizer", label: "Hand Sanitizer" },
        { icon: "location_on", label: "GPS Tracking" },
        {icon:"medical_services", label:"First Aid Box"}
      ],
      startTime: 24555255, // epoch time
      endTime: 55455554, // epoch time
      duration: "08:30 Hrs",
      availableSeats: 25,
      minPrice: 800,
      maxPrice: 2500,
      sourceStops: [
        {
          stopId: 1,
          arrivalTime: 5465641155,
        },
        {
          stopId: 2,
          arrivalTime: 1715853600,
        },
        {
          stopId: 3,
          arrivalTime: 1715853600,
        },
        {
          stopId: 4,
          arrivalTime: 1715853600,
        },
        {
          stopId: 5,
          arrivalTime: 1715853600,
        },
        {
          stopId: 6,
          arrivalTime: 1715853600,
        },
        {
          stopId: 7,
          arrivalTime: 1715853600,
        },
      ],
      destinationStops: [
        {
          stopId: 8,
          arrivalTime: 1715868000,
        },
        {
          stopId: 9,
          arrivalTime: 1715887200,
        },
        {
          stopId: 10,
          arrivalTime: 1715887200,
        },
        {
          stopId: 11,
          arrivalTime: 1715887200,
        },
        {
          stopId: 12,
          arrivalTime: 1715887200,
        },
        {
          stopId: 13,
          arrivalTime: 1715887200,
        },
      ],
    },
    {
      busId: 45496,
      tourId: 54546,
      busType: "AC", // AC | NON-AC
      busPartner: "ABC Travels",
      amenities: [
        { icon: "wifi", label: "Wi-Fi" },
        { icon: "power", label: "Power Outlet" },
        { icon: "tv", label: "TV" },
      ],
      startTime: 24555255, // epoch time
      endTime: 55455554, // epoch time
      duration: "08:30 Hrs",
      availableSeats: 25,
      minPrice: 800,
      maxPrice: 2500,
      sourceStops: [
        {
          stopId: 1,
          arrivalTime: 5465641155,
        },
        {
          stopId: 2,
          arrivalTime: 1715853600,
        },
      ],
      destinationStops: [
        {
          stopId: 10,
          arrivalTime: 1715868000,
        },
        {
          stopId: 9,
          arrivalTime: 1715887200,
        },
      ],
    },
    {
      busId: 54846,
      tourId: 97986,
      busType: "AC", // AC | NON-AC
      busPartner: "ABC Travels",
      amenities: [
        { icon: "wifi", label: "Wi-Fi" },
        { icon: "power", label: "Power Outlet" },
        { icon: "tv", label: "TV" },
      ],
      startTime: 24555255, // epoch time
      endTime: 55455554, // epoch time
      duration: "08:30 Hrs",
      availableSeats: 25,
      minPrice: 800,
      maxPrice: 2500,
      sourceStops: [
        {
          stopId: 1,
          arrivalTime: 5465641155,
        },
        {
          stopId: 2,
          arrivalTime: 1715853600,
        },
      ],
      destinationStops: [
        {
          stopId: 9,
          arrivalTime: 1715868000,
        },
        {
          stopId: 13,
          arrivalTime: 1715887200,
        },
      ],
    },
  ],
};

export const layoutData = {
  layout: {
    upperDeck: [
      {
        row: 0,
        column: 0,
        seatNumber: "L1",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 0,
        column: 1,
        seatNumber: "L2",
        seatType: "SLEEPER",
        gender: "F",
        price: 1500,
      },
      {
        row: 0,
        column: 2,
        seatNumber: "L3",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 0,
        column: 3,
        seatNumber: "L4",
        seatType: "SLEEPER",
        gender: "M",
        price: 1500,
      },
      {
        row: 0,
        column: 4,
        seatNumber: "L5",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 0,
        column: 5,
        seatNumber: "L6",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 1,
        column: 0,
        seatNumber: "L7",
        seatType: "SLEEPER",
        gender: "M",
        price: 1500,
      },
      {
        row: 1,
        column: 1,
        seatNumber: "L8",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 1,
        column: 2,
        seatNumber: "L9",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 1,
        column: 3,
        seatNumber: "S1",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 1,
        column: 4,
        seatNumber: "S2",
        seatType: "SLEEPER",
        price: 800,
      },
      {
        row: 1,
        column: 5,
        seatNumber: "S3",
        seatType: "SLEEPER",
        gender: "F",
        price: 1500,
      },
      {
        row: 1,
        column: 5,
        seatNumber: "S3",
        seatType: "SLEEPER",
        gender: "F",
        price: 1500,
      },
      {
        row: 3,
        column: 0,
        seatNumber: "S4",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 3,
        column: 1,
        seatNumber: "S5",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 3,
        column: 2,
        seatNumber: "S6",
        seatType: "SLEEPER",
        price: 2000,
      },
      {
        row: 3,
        column: 3,
        seatNumber: "S7",
        seatType: "SLEEPER",
        gender: "M",
        price: 1500,
      },
      {
        row: 3,
        column: 4,
        seatNumber: "S8",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 3,
        column: 5,
        seatNumber: "S9",
        seatType: "SLEEPER",
        price: 1800,
      },
    ],
    lowerDeck: [
      {
        row: 0,
        column: 0,
        seatNumber: "T1",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 0,
        column: 1,
        seatNumber: "T2",
        seatType: "SLEEPER",
        gender: "F",
        price: 1500,
      },
      {
        row: 0,
        column: 2,
        seatNumber: "T3",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 0,
        column: 3,
        seatNumber: "T4",
        seatType: "SLEEPER",
        gender: "M",
        price: 1500,
      },
      {
        row: 0,
        column: 4,
        seatNumber: "T5",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 0,
        column: 5,
        seatNumber: "T6",
        seatType: "SLEEPER",
        price: 1500,
      },
      {
        row: 1,
        column: 0,
        seatNumber: "T7",
        seatType: "SEETER",
        gender: "M",
        price: 1500,
      },
      {
        row: 1,
        column: 1,
        seatNumber: "T8",
        seatType: "SEETER",
        price: 1500,
      },
      {
        row: 1,
        column: 2,
        seatNumber: "T9",
        seatType: "SEETER",
        price: 1500,
      },
      {
        row: 1,
        column: 3,
        seatNumber: "U1",
        seatType: "SEETER",
        price: 1500,
      },
      {
        row: 1,
        column: 4,
        seatNumber: "U2",
        seatType: "SEETER",
        price: 800,
      },
      {
        row: 1,
        column: 5,
        seatNumber: "U3",
        seatType: "SEETER",
        gender: "F",
        price: 1500,
      },
      {
        row: 1,
        column: 6,
        seatNumber: "U4",
        seatType: "SEETER",
        gender: "F",
        price: 1500,
      },
      {
        row: 1,
        column: 7,
        seatNumber: "U5",
        seatType: "SEETER",
        gender: "F",
        price: 1500,
      },
      {
        row: 1,
        column: 8,
        seatNumber: "U6",
        seatType: "SEETER",
        gender: "F",
        price: 1500,
      },
      {
        row: 2,
        column: 8,
        seatNumber: "U4",
        seatType: "SEETER",
        price: 1500,
      },
      {
        row: 3,
        column: 0,
        seatNumber: "U5",
        seatType: "SEETER",
        price: 1500,
      },
      {
        row: 3,
        column: 1,
        seatNumber: "U5",
        seatType: "SEETER",
        price: 1500,
      },
      {
        row: 3,
        column: 2,
        seatNumber: "U6",
        seatType: "SEETER",
        price: 2000,
      },
      {
        row: 3,
        column: 3,
        seatNumber: "U7",
        seatType: "SEETER",
        gender: "M",
        price: 1500,
      },
      {
        row: 3,
        column: 4,
        seatNumber: "U8",
        seatType: "SEETER",
        price: 1500,
      },
      {
        row: 3,
        column: 5,
        seatNumber: "U9",
        seatType: "SEETER",
        price: 1800,
      },
      {
        row: 3,
        column: 6,
        seatNumber: "H1",
        seatType: "SEETER",
        price: 1800,
      },
      {
        row: 3,
        column: 7,
        seatNumber: "H2",
        seatType: "SEETER",
        price: 1800,
      },
      {
        row: 3,
        column: 8,
        seatNumber: "H3",
        seatType: "SEETER",
        price: 2000,
      },
    ],
  },
};

export const BoardingStops = [
  {
    stopId: 1,
    name: "something",
    directions:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for  ",
    time: 64551548,
  },
  {
    stopId: 2,
    name: "nothing",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 3,
    name: "everything",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 4,
    name: "kukatpally",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 5,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 6,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 7,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 8,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 9,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 10,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 11,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 12,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
];
export const DroppingStops = [
  {
    stopId: 1,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 2,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 3,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 4,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
  {
    stopId: 5,
    name: "something",
    directions: "Near this and this and agian this",
    time: 64551548,
  },
];
