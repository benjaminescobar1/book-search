const { gql } = require('apollo-server-express');

// Double check all required fields to ensure they make sense
const typeDefs = gql`
    type User { 
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    input SaveBookInput {
        bookId: String
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SaveBookInput): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;