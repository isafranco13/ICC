import mongoose from 'mongoose';


const usuarioSchema =new mongoose.Schema(
    {
        nombre: {
            type: String, 
            required: true
        },
        apellido: {
            type: String, 
            required: false
        },
        correo: {
            type: String, 
            required: true,
            unique: true
        },
        contrasena: {
            type: String, 
            required: false
        },
        role: {
            type: String,
            required: true
        },
    }
)

export default mongoose.models.usuarios || mongoose.model('usuarios', usuarioSchema);




