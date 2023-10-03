import { Schema, model, models } from 'mongoose';

const reservationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  listing: {
    type: Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  startDate: Date,
  endDate: Date,
  totalPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


const Reservation = models.Reservation || model('Reservation', reservationSchema);
export default Reservation;
