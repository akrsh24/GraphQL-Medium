const mongoose = require('mongoose');

export const seriesSchema = new mongoose.Schema({
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
