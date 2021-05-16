const mongoose = require('mongoose');
const env = process.env.NODE_ENV || "development";
const { environment } = require('../config/config');
const { friendSchema } = require('./schema/friendSchema.js');
const { seriesSchema } = require('./schema/seriesSchema.js');

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Friends = mongoose.model('Friends', friendSchema);
const Series = mongoose.model('Series', seriesSchema);

export { Friends, Series };