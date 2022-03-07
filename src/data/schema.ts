import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    age: Int
    email: String
    contacts: [Contact]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  type Series {
    id: ID
    seriesName: String
    year: Int
    rating: Rating
  }

  enum Rating {
    ONE
    TWO
    THREE
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  input SeriesInput {
    id: ID
    seriesName: String
    year: Int
    rating: Rating
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    age: Int
    email: String
    contacts: [ContactInput]
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  type Query {
    getAllFriend: [Friend]
    findASeries(id: ID): Series
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    addASeries(series: SeriesInput): Series
  }
`;
