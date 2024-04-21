import mongoose from 'mongoose';

const terapeutaSchema =new mongoose.Schema(
    {
        nombre: {
            type: String, 
            required: true
        },
        apellidoPaterno: {
            type: String, 
            required: true
        },
        apellidoMaterno: {
            type: String, 
            required: true
        },
        celular: {
            type: String, 
            required: true
        },
        correo: {
            type: String, 
            required: true,
            unique: true
        },
        contrasena: {
            type: String, 
            required: true
        },
        role: {
            type: String,
            required: true
        },
    }
)
export default mongoose.models.usuarios || mongoose.model('usuarios', terapeutaSchema);
//export default mongoose.models.usuarios || mongoose.model('usuarios', terapeutaSchema);




