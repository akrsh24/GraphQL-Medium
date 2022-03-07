const mongoose = require("mongoose");
const { environment } = require("../config/config");
const { friendSchema, seriesSchema } = require("./schema");
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
 **/

mongoose.connect(environment[env].dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

const Friends = mongoose.model("Friends", friendSchema);
const Series = mongoose.model("Series", seriesSchema);

export { Friends, Series };
