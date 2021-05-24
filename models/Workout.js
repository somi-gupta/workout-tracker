const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    },
  });

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: () => new Date()
    },
    type:{
        type: String,
    },
    exercises: [exerciseSchema],
},
    {
        toJSON: {virtuals: true}
    }
    
);

workoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((acc, cur) => {
      return acc + cur.duration;
    }, 0); 
    return duration;
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;