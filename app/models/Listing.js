import { Schema, model, models } from 'mongoose';

const listingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
 title: String,
  description: String,
  imageSrc: String,
  createdAt: {
   type: Date,
    default: Date.now,
  },
  category: String,
  roomCount: Number,
  bathroomCount: Number,
  guestCount: Number,
  price: Number,
  location: {
    type: Object,
    required: true,
  },
});


const Listing = models.Listing || model('Listing', listingSchema);
export default Listing;
