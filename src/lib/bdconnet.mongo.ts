import mongoose from 'mongoose';
//const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = 'mongodb+srv://carloscertificacionprueba:Vb1m4iiR5P7Rfd8t@cluster0.90jlnx3.mongodb.net/certifique-moongosse?retryWrites=true&w=majority';

const Connetion = async () =>{
    // validation
    if (!(MONGO_URI)) return console.log("No se coloco la ruta de conexion");
    // ----------
    try {
        let obtions:any = { useNewUrlParser: true, useUnifiedTopology: true };
        await mongoose.connect(MONGO_URI, obtions);
        console.log("Mongodb Connectado");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default Connetion;