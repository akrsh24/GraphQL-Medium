import { Friends, Series } from "../db/dbConnector.js";

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    getFriends: (root) => {
      return new Promise((resolve, reject) => {
        Friends.find((err, friends) => {
          if (err) reject(err);
          else resolve(friends);
        });
      });
    },
    getSeries: (root) => {
      return new Promise((resolve, reject) => {
        Series.find((err, series) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
    findAFriend: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Friends.findOne({ _id: id }, (err, friend) => {
          if (err) reject(err);
          else resolve(friend);
        });
      });
    },
    findASeries: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Series.findOne({ _id: id }, (err, series) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
  },
  Mutation: {
    addFriend: (root, { friend }) => {
      const { ...rest } = friend;
      const newFriend = new Friends({ ...rest });

      return new Promise((resolve, reject) => {
        newFriend.save((err, friend) => {
          if (err) reject(err);
          else resolve(friend);
        });
      });
    },
    addSeries: (root, { series }) => {
      const { ...rest } = series;
      const newSeries = new Series({
        ...rest,
      });

      return new Promise((resolve, reject) => {
        newSeries.save((err, series) => {
          if (err) reject(err);
          resolve(series);
        });
      });
    },
  },
};
