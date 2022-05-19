import * as mongoose from 'mongoose';

export const ArticlesSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  creationDate: String,
});
