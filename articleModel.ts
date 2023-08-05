import mongoose from "mongoose";

interface iArticle {
  title?: string;
  category?: string;
  content?: string;
  description?: string;
}

export interface iArticleData extends iArticle, mongoose.Document {}

const articleModel = new mongoose.Schema<iArticle>(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model<iArticleData>("articles", articleModel);
