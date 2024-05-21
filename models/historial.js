import mongoose from 'mongoose';

const historialSchema =new mongoose.Schema(
    {
        nombre: {
            type: String, 
            required: true
        },
        telefono: {
            type: String, 
            required: true
        },
        edad:{
            type: Number,
            required: true
        },
        estadoCivil: {
            type: String, 
            required: true
        },
        papasMuertos:{
            type: String,
            required: true
        },
        NumeroHijo: {
            type: Number, 
            required: true
        },
        hijoPropio:{
            type: Number,
            required: true
        },
        operaciones:{
            type: String,
            required: true
        },
        medicamentos:{
            type: String,
            required: true
        },
    }
)
export default mongoose.models.HistorialClinico || mongoose.model('HistorialClinico', historialSchema);
//export default mongoose.models.usuarios || mongoose.model('usuarios', terapeutaSchema);