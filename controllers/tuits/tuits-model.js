import mongoose from "mongoose";
import tuitsSchema from "./tuits-schema.js";

const tuitModel = mongoose.model("tuits", tuitsSchema);

export default tuitModel;