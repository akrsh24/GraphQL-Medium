import { Friends, Series } from "../db";

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    getAllFriend: (root: any) => {
      return new Promise((resolve, reject) => {
        Friends.find((err: any, friends: any) => {
          if (err) reject(err);
          else resolve(friends);
        });
      });
    },
    getAllSeries: (root: any) => {
      return new Promise((resolve, reject) => {
        Series.find((err: any, series: any) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
    findASeries: (root: any, series: any) => {
      return new Promise((resolve, reject) => {
        Series.findOne({ _id: series.id }, (err: any, series: any) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        age: input.age,
        email: input.email,
        contacts: input.contacts,
      });

      newFriend.id = newFriend._id;

      return new Promise((resolve, reject) => {
        newFriend.save((err) => {
          if (err) reject(err);
          else resolve(newFriend);
        });
      });
    },
    addASeries: (root, { series }) => {
      const newSeries = new Series({
        seriesName: series.seriesName,
        year: series.year,
        rating: series.rating,
      });

      newSeries.id = series._id;

      return new Promise((resolve, reject) => {
        newSeries.save((err) => {
          if (err) reject(err);
          resolve(newSeries);
        });
      });
    },
  },
};
