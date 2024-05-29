import mongoose from 'mongoose';

const perfilterapeutaSchema =new mongoose.Schema(
    {
        usuarioId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuarios',
            required: true
        },
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
        edad: {
            type: String, 
            required: false
        },
        calle: {
            type: String, 
            required: false
        },
        numExt: {
            type: String, 
            required: false
        },
        numInt: {
            type: String, 
            required: false
        },
        cp: {
            type: String, 
            required: false
        },
        detallesDireccion: {
            type: String, 
            required: false
        },
        terapias: {
            type: String, 
            required: false
        },
    }
)

export default mongoose.models.PerfilTerapeutas || mongoose.model('PerfilTerapeutas', perfilterapeutaSchema);




