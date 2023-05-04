import mongoose from "mongoose";
import { MovieModel } from "../models/movie.js";

export async function getById(id) {
  const movie = await MovieModel.findById(id);
  return movie;
}

export async function insert({ movie }) {
  const ObjectId = new mongoose.Types.ObjectId();
  const movieModel = new MovieModel({ _id: ObjectId, ...movie });
  await movieModel.save();
  return movieModel;
}
