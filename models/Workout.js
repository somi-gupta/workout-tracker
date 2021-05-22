const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: () => new Date()
    },
    type:{
        type: String,
        required: "Select a name for exercise type"
    },
    exercises: 
        [ {   
        name:{
            type: String,
            trim: true,
            required: "Enter a name for exercise"
        },
        duration:{
            type: Number,
        },
        weight:{
            type: Number,
        },
        reps:{
            type: Number,
        },
        sets:{
            type: Number, 
        }
    } 
    ],
},
    {
        toJSON: {
          virtuals: true
        }
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
