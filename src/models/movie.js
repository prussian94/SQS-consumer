import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    revenue: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    productionCompanies: {
      type: Array,
      required: true,
    },
    productionCountries: {
      type: Array,
      required: true,
    },
    spokenLanguages: {
      type: Array,
      required: false,
    },
    originalTitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { collection: "movie" }
);

export const MovieModel = mongoose.model("movie", movieSchema);
