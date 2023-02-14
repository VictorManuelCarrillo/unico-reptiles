//? Animal Schema Props ____________________ //
//* title:       String - 100
//* category:    String - 20
//* morph:       String - 150
//* description: String - 250
//* price:       Number - 5
//* age:         String - 20
//* gender:      String - 10
//* available:   Boolean

import { Schema, model, models } from "mongoose";

const animalSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title must be less than 100 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      maxlength: [20, "Category must be less than 20 characters"],
    },
    morph: {
      type: String,
      required: [true, "Morph is required"],
      trim: true,
      maxlength: [150, "Morph must be less than 150 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [250, "Description must be less than 250 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      trim: true,
      maxlength: [5, "Price must be less than 5 characters"],
    },
    age: {
      type: String,
      required: [true, "Age is required"],
      trim: true,
      maxlength: [20, "Age must be less than 20 characters"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      trim: true,
      maxlength: [10, "Gender must be less than 10 characters"],
    },
    available: {
      type: Boolean,
      required: [true, "available is required"],
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Animal || model("Animal", animalSchema);