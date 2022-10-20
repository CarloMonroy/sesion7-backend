"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
  type Query {
    getAllBooks: [Book]
    getBook(asin: ID!): Book
  }
  type Mutation {
    insertBook(asin: ID!, title: String!, author: String!, pages: Int!): Book
    updateBook(asin: ID!, title: String, author: String, pages: Int): Book
    signUp(input: UserInput): User
    signIn(email: String!, password: String!): String
  }
  type Book {
    asin: ID
    title: String
    author: String
    pages: Int
  }
  type User {
    id: Int
    name: String
    lastname: String
    email: String
    isAdmin: Boolean
  }
  input UserInput {
    name: String
    lastname: String
    email: String!
    password: String!
    isAdmin: Boolean
  }
`;
