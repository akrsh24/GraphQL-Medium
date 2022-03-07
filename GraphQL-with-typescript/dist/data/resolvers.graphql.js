"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../db");
/**
 * GraphQL Resolvers
 **/
exports.resolvers = {
    Query: {
        getFriends: (root) => {
            return new Promise((resolve, reject) => {
                db_1.Friends.find((err, friends) => {
                    if (err)
                        reject(err);
                    else
                        resolve(friends);
                });
            });
        },
        getSeries: (root) => {
            return new Promise((resolve, reject) => {
                db_1.Series.find((err, series) => {
                    if (err)
                        reject(err);
                    else
                        resolve(series);
                });
            });
        },
        findAFriend: (root, friend) => {
            return new Promise((resolve, reject) => {
                db_1.Friends.findOne({ _id: friend.id }, (err, friend) => {
                    if (err)
                        reject(err);
                    else
                        resolve(friend);
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
        addFriend: (root, { friend }) => {
            const rest = __rest(friend, []);
            const newFriend = new db_1.Friends(Object.assign({}, rest));
            return new Promise((resolve, reject) => {
                newFriend.save((err, friend) => {
                    if (err)
                        reject(err);
                    else
                        resolve(friend);
                });
            });
        },
        addSeries: (root, { series }) => {
            const rest = __rest(series, []);
            const newSeries = new db_1.Series(Object.assign({}, rest));
            return new Promise((resolve, reject) => {
                newSeries.save((err, series) => {
                    if (err)
                        reject(err);
                    resolve(series);
                });
            });
        },
    },
};
