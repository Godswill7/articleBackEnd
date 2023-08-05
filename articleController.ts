import { Request, Response } from "express";
import articleModel, { iArticleData } from "./articleModel";

export const createArticle = async (req: Request, res: Response) => {
  try {
    const { content, description, title, category } = req.body;

    const article: iArticleData = await articleModel.create({
      content,
      description,
      title,
      category,
    });

    res.status(200).json({
      message: "Created",
      data: article,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  try {
    const { articleID } = req.params;

    const { content, title } = req.body;

    const article: iArticleData | null = await articleModel.findByIdAndUpdate(
      articleID,
      {
        content,
        title,
      },
      { new: true },
    );

    res.status(200).json({
      message: "updated",
      data: article,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};

export const getOneArticle = async (req: Request, res: Response) => {
  try {
    const { articleID } = req.params;

    const article: iArticleData | null = await articleModel.findById(articleID);

    return res.status(200).json({
      message: "get One",
      data: article,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const deleteOneArticle = async (req: Request, res: Response) => {
  try {
    const { articleID } = req.params;

    const article: iArticleData | null = await articleModel.findByIdAndDelete(
      articleID,
    );

    return res.status(200).json({
      message: "delete One",
      data: article,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const getArticle = async (req: Request, res: Response) => {
  try {
    const article: iArticleData[] = await articleModel.find();

    return res.status(200).json({
      message: "get all article",
      data: article,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
