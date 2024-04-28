// import house images
import House1 from "../assets/houses/house1.png";
import House2 from "../assets/houses/house2.png";
import House3 from "../assets/houses/house3.png";
import House4 from "../assets/houses/house4.png";
import House5 from "../assets/houses/house5.png";
import House6 from "../assets/houses/house6.png";
import House7 from "../assets/houses/house7.png";
import House8 from "../assets/houses/house8.png";
import House9 from "../assets/houses/house9.png";
import House10 from "../assets/houses/house10.png";
import House11 from "../assets/houses/house11.png";
import House12 from "../assets/houses/house12.png";
// import house large images
import House1Lg from "../assets/houses/house1lg.png";
import House2Lg from "../assets/houses/house2lg.png";
import House3Lg from "../assets/houses/house3lg.png";
import House4Lg from "../assets/houses/house4lg.png";
import House5Lg from "../assets/houses/house5lg.png";
import House6Lg from "../assets/houses/house6lg.png";
import House7Lg from "../assets/houses/house7lg.png";
import House8Lg from "../assets/houses/house8lg.png";
import House9Lg from "../assets/houses/house9lg.png";
import House10Lg from "../assets/houses/house10lg.png";
import House11Lg from "../assets/houses/house11lg.png";
import House12Lg from "../assets/houses/house12lg.png";

// import apartments images
import Apartment1 from "../assets/apartments/a1.png";
import Apartment2 from "../assets/apartments/a2.png";
import Apartment3 from "../assets/apartments/a3.png";
import Apartment4 from "../assets/apartments/a4.png";
import Apartment5 from "../assets/apartments/a5.png";
import Apartment6 from "../assets/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "../assets/apartments/a1lg.png";
import Apartment2Lg from "../assets/apartments/a2lg.png";
import Apartment3Lg from "../assets/apartments/a3lg.png";
import Apartment4Lg from "../assets/apartments/a4lg.png";
import Apartment5Lg from "../assets/apartments/a5lg.png";
import Apartment6Lg from "../assets/apartments/a6lg.png";

// import agents images
import Agent1 from "../assets/agents/agent1.png";
import Agent2 from "../assets/agents/agent2.png";
import Agent3 from "../assets/agents/agent3.png";
import Agent4 from "../assets/agents/agent4.png";
import Agent5 from "../assets/agents/agent5.png";
import Agent6 from "../assets/agents/agent6.png";
import Agent7 from "../assets/agents/agent7.png";
import Agent8 from "../assets/agents/agent8.png";
import Agent9 from "../assets/agents/agent9.png";
import Agent10 from "../assets/agents/agent10.png";
import Agent11 from "../assets/agents/agent11.png";
import Agent12 from "../assets/agents/agent12.png";

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "House 1",
    description:
      "Cozy 6-bedroom bungalow near charming cafes. Fenced yard & updated bathroom. Perfect starter home!",
    image: House1,
    imageLg: House1Lg,
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "110000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    description:
      "Modern 3-bed in trendy Midtown. Rooftop deck & chef's kitchen. Urban oasis awaits!",
    image: House2,
    imageLg: House2Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "140000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    description:
      "Sun-drenched 6-bedroom in family-friendly neighborhood. Sparkling pool & spacious living area. Must-see!",
    image: House3,
    imageLg: House3Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "170000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    description:
      "Historic Victorian in walkable downtown. Original details & modern upgrades. Live in a piece of history! ",
    image: House4,
    imageLg: House4Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "200000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    description:
      "Luxury condo with breathtaking city views. Private balcony & open floor plan. Downtown living at its finest!",
    image: House5,
    imageLg: House5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2015",
    price: "210000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    description:
      "Spacious townhouse in quiet cul-de-sac. Finished basement & private patio. Perfect for entertaining!",
    image: House6,
    imageLg: House6Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2014",
    price: "220000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Move-in ready ranch with low maintenance. Sunroom addition & updated appliances. Easy living awaits! ",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2012",
    price: "20000",
    agent: {
      image: Agent7,
      name: "Jawhar Shamil Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Light-filled loft with exposed brick. Rooftop terrace & modern kitchen. Urban chic living! ",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2011",
    price: "30000",
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Luxury condo with chef's kitchen & marble countertops. Walk-in shower & stunning city views. Unwind in style!",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "United States",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2011",
    price: "40000",
    agent: {
      image: Agent9,
      name: "Jerry Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: 10,
    type: "House",
    name: "House 7",
    description:
      "Bright & airy townhouse in desirable school district. Private patio & stainless steel appliances. Perfect for families!",
    image: House7,
    imageLg: House7Lg,
    country: "Canada",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200 sq ft",
    year: "2015",
    price: "117000",
    agent: {
      image: Agent10,
      name: "Vera Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: 11,
    type: "House",
    name: "House 8",
    description:
      "Stunning Mediterranean-style villa. Private pool & lush landscaping. Resort living at home! ",
    image: House8,
    imageLg: House8Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200 sq ft",
    year: "2019",
    price: "145000",
    agent: {
      image: Agent11,
      name: "Sofia Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: 12,
    type: "House",
    name: "House 9",
    description:
      "Spacious colonial with finished basement. Home theater & wet bar. Perfect for movie nights! ",
    image: House9,
    imageLg: House9Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 sq ft",
    year: "2015",
    price: "139000",
    agent: {
      image: Agent12,
      name: "Raymond Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: 13,
    type: "House",
    name: "House 10",
    description:
      "Renovated studio in trendy neighborhood. Walkable to shops & restaurants. Urban living made simple!",
    image: House10,
    imageLg: House10Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 14,
    type: "House",
    name: "House 11",
    description:
      "End-unit townhouse with extra windows & natural light. Fenced backyard & finished attic space. Bonus features galore!",
    image: House11,
    imageLg: House11Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 15,
    type: "House",
    name: "House 12",
    description:
      "Craftsman bungalow with original wood details. Inviting front porch & cozy fireplace. Step back in time!",
    image: House12,
    imageLg: House12Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 16,
    type: "Apartment",
    name: "Apartment 16",
    description:
      "Industrial loft conversion with soaring ceilings. Exposed brick walls & modern kitchen. Live in a work of art!",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 17,
    type: "Apartment",
    name: "Apartment 17",
    description:
      "Immaculate condo with panoramic mountain views. Balcony access from every bedroom. Wake up to paradise! ",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 18,
    type: "Apartment",
    name: "Apartment 18",
    description:
      "Studio apartment with jaw-dropping city skyline views. Sleek Murphy bed & modern appliances. Urban living redefined! ",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
];
