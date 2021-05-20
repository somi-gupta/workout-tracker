const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type:{
        type: String,
        required: "Select a name for exercise type"
    },
    exercise: 
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
    
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
