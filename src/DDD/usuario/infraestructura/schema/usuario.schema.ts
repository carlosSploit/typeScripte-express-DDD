import mongoSchema from 'mongoose';

let UserSchema = new mongoSchema.Schema({
    username : String
});

let objSchema = mongoSchema.model('Users', UserSchema);
export default objSchema;