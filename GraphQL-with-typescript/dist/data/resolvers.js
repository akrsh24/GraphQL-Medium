"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../db");
/**
 * GraphQL Resolvers
 **/
exports.resolvers = {
    Query: {
        getAllFriend: (root) => {
            return new Promise((resolve, reject) => {
                db_1.Friends.find((err, friends) => {
                    if (err)
                        reject(err);
                    else
                        resolve(friends);
                });
            });
        },
        findASeries: (root, series) => {
            return new Promise((resolve, reject) => {
                db_1.Series.findOne({ _id: series.id }, (err, series) => {
                    if (err)
                        reject(err);
                    else
                        resolve(series);
                });
            });
        },
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new db_1.Friends({
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
                    if (err)
                        reject(err);
                    else
                        resolve(newFriend);
                });
            });
        },
        addASeries: (root, { series }) => {
            const newSeries = new db_1.Series({
                seriesName: series.seriesName,
                year: series.year,
                rating: series.rating,
            });
            newSeries.id = series._id;
            return new Promise((resolve, reject) => {
                newSeries.save((err) => {
                    if (err)
                        reject(err);
                    resolve(newSeries);
                });
            });
        },
    },
};
