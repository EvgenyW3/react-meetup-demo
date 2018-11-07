const { ApolloServer, gql } = require("apollo-server");

// Stub data
const phones = [
  {
    id: 0,
    brand: "Apple",
    model: "iPhone XS 256GB",
    price: "1349,00",
    image:
      "https://kauppa.telia.fi/yksityisille/images/phones/xlarge/01_AppleiPhoneXS256GB_gold.png",
    tag: "New",
    cms_id: "12",
    slug: "qwe"
  },
  {
    id: 1,
    brand: "OnePlus",
    model: "6T 6+128GB",
    price: "549,00",
    image:
      "https://kauppa.telia.fi/yksityisille/images/phones/xlarge/02_OnePlus6T6GBplus128GB_mirrorblack-v2.png",
    tag: "Pre-sale",
    cms_id: "34",
    slug: "rty"
  },
  {
    id: 2,
    brand: "Nokia",
    model: "7.1",
    price: "379,00",
    image:
      "https://kauppa.telia.fi/yksityisille/images/phones/xlarge/01_Nokia71_blue.png",
    tag: "New",
    cms_id: "56",
    slug: "uio"
  },
  {
    id: 3,
    brand: "Honor",
    model: "Play",
    price: "349,00",
    image:
      "https://kauppa.telia.fi/yksityisille/images/phones/xlarge/01_HonorPlay_black.png",
    tag: "New",
    cms_id: "78",
    slug: "asd"
  },
  {
    id: 4,
    brand: "Huawei",
    model: "P20 128GB",
    price: "599,00",
    image:
      "https://kauppa.telia.fi/yksityisille/images/phones/xlarge/01_HuaweiP20128GB_black.png",
    tag: "Pre-sale",
    cms_id: "90",
    slug: "fgh"
  }
];

// Type definitions
const typeDefs = gql`
  type Phone {
    id: Int
    brand: String
    model: String
    price: String
    image: String
    tag: String
    cms_id: String
    slug: String
  }

  type Query {
    getPhones: [Phone]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    getPhones: () => phones
  }
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

// Server listener
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is up and running at ${url}`);
});
