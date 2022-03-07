"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seriesSchema = void 0;
const mongoose = require('mongoose');
exports.seriesSchema = new mongoose.Schema({
    seriesName: {
        type: String
    },
    year: {
        type: Number
    },
    rating: {
        type: String
    }
});
