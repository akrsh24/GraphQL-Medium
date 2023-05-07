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

  input UpdateSeriesInput {
    id: ID
    seriesName: String
    year: Int
    rating: Rating
  }

  input UpdateFriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [ContactInput]
  }

  input DeleteSeriesInput {
    id: ID
  }

  input DeleteFriendInput {
    id: ID
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
    updateAFriend(friend: UpdateFriendInput): Friend
    deleteAFriend(friend: DeleteFriendInput): Friend
    addSeries(series: SeriesInput): Series
    updateASeries(series: UpdateSeriesInput): Series
    deleteASeries(series: DeleteSeriesInput): Series
  }
`;
