import { Schema, model, models } from 'mongoose';

const accountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  provider: String,
  providerAccountId: String,
  refreshToken: String,
  accessToken: String,
  accessTokenExpires: Date,
  accessTokenType: String,
  scope: String,
  idToken: String,
  sessionState: String,
});


const Account = models.Account || model('Account', accountSchema);
export default Account;
