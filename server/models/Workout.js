const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  // add autoincrement id
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
  },
  routine: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
