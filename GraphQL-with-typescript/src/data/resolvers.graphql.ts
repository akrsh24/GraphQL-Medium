import { Friends, Series } from "../db";
import { FriendModel, SeriesModel } from "../model";

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    getFriends: (root: any) => {
      return new Promise((resolve, reject) => {
        Friends.find((err: any, friends: FriendModel[]) => {
          if (err) reject(err);
          else resolve(friends);
        });
      });
    },
    getSeries: (root: any) => {
      return new Promise((resolve, reject) => {
        Series.find((err: any, series: SeriesModel[]) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
    findAFriend: (root: any, friend: any) => {
      return new Promise((resolve, reject) => {
        Friends.findOne({ _id: friend.id }, (err: any, friend: FriendModel) => {
          if (err) reject(err);
          else resolve(friend);
        });
      });
    },
    findASeries: (root: any, series: any) => {
      return new Promise((resolve, reject) => {
        Series.findOne({ _id: series.id }, (err: any, series: SeriesModel) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
  },
  Mutation: {
    addFriend: (root: any, { friend }) => {
      const { ...rest } = friend;
      const newFriend = new Friends({ ...rest });

      return new Promise((resolve, reject) => {
        newFriend.save((err: any, friend: FriendModel) => {
          if (err) reject(err);
          else resolve(friend);
        });
      });
    },
    addSeries: (root: any, { series }) => {
      const { ...rest } = series;
      const newSeries = new Series({
        ...rest,
      });

      return new Promise((resolve, reject) => {
        newSeries.save((err: any, series: SeriesModel) => {
          if (err) reject(err);
          resolve(series);
        });
      });
    },
    updateAFriend: (root: any, { friend }) => {
      return new Promise((resolve, reject) => {
        Friends.findByIdAndUpdate(friend.id, {
          ...friend
        }, (err: any) => {
          if (err) reject(err);
          else resolve(friend);
        });
      });
    },
    updateASeries: (root: any, { series }) => {
      return new Promise((resolve, reject) => {
        Series.findByIdAndUpdate(series.id, {
          ...series
        }, (err: any) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
    deleteAFriend: (root: any, { friend }) => {
      return new Promise((resolve, reject) => {
        Friends.findByIdAndDelete(friend.id, (err) => {
          if (err) reject(err);
          else resolve(friend);
        });
      });
    },
    deleteASeries: (root: any, { series }) => {
      return new Promise((resolve, reject) => {
        Series.findByIdAndDelete(series.id, (err) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
  },
};
