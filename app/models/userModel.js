import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  emailVerified: {
    type: Date,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  favorites: [{
    type: Schema.Types.ObjectId,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  //references to other models
  accounts: [{
    type: Schema.Types.ObjectId,
    ref: 'Account',
  }],
  reservations: [{
    type: Schema.Types.ObjectId,
    ref: 'Reservation',
  }],
  listings: [{
    type: Schema.Types.ObjectId,
    ref: 'Listing',
  }]
});

//creating password hash before saving user to database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});
//creating a method to get JWT
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, 'mysolidsecret', {
    expiresIn: '1d',
  });
};

const User = models.User || model('User', userSchema);
export default User;
