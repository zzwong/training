const Mongoose = require('mongoose');

const TweetSchema = new Mongoose.Schema({
  text: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  author: {
    type: String
  },
  upvotes: {
    type: Number
  }
});

export const Tweets = Mongoose.model('tweets', TweetSchema, 'tweets');
