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
    seriesName: String
    year: Int
    rating: Rating
  }

  input FriendInput {
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
    getFriends: [Friend]
    getSeries: [Series]
    findAFriend(id: String): Friend
    findASeries(id: String): Series
  }

  type Mutation {
    addFriend(friend: FriendInput): Friend
    addSeries(series: SeriesInput): Series
  }
`;
