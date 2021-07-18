import express from "express";
import { Index } from "../controllers/todoCon.js";

export const todoRt = express.Router();
    todoRt.get("/", Index);




