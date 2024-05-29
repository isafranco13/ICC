import mongoose from 'mongoose';

const CitaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: false,
  },
  apellidoPaterno: {
    type: String,
    required: false,
  },
  apellidoMaterno: {
    type: String,
    required: false,
  },
  celular: {
    type: String,
    required: false,
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usuario',
    required: false,
  },
  terapeutaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'terapeuta',
    required: true,
  },
});

const Cita = mongoose.models.Cita || mongoose.model('Cita', CitaSchema);

export default Cita;

