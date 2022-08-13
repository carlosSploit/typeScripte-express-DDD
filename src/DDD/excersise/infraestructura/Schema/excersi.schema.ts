import mongoSchema from 'mongoose';

let ExerciseSchema = new mongoSchema.Schema({
    username : String,
    description: String,
    duration: Number,
    date: String
});

let objExercise = mongoSchema.model('Exercises', ExerciseSchema); 

export default objExercise;