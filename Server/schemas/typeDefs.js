const typeDefs = `

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }


  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
