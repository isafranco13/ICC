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
        }
    }
)

export default mongoose.models.Usuarios || mongoose.model('usuarios', usuarioSchema);




