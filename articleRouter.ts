import express, { Router } from "express";
import {
  createArticle,
  deleteOneArticle,
  getArticle,
  getOneArticle,
  updateArticle,
} from "./articleController";

const router: Router = express.Router();

router.route("/get-articles").get(getArticle);
router.route("/:articleID/get-one-article").get(getOneArticle);
router.route("/:articleID/update-articles").patch(updateArticle);
router.route("/:articleID/delete-articles").delete(deleteOneArticle);
router.route("/create-articles").post(createArticle);

export default router;
