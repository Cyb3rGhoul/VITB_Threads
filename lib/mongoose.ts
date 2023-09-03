import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
  // Set strict query mode for Mongoose to prevent unknown field queries.
  mongoose.set("strictQuery", true);

  if (!'mongodb+srv://harshshukla1911:<password>@cluster0.mvkmvqi.mongodb.net/?retryWrites=true&w=majority') return console.log("Missing MongoDB URL");

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect('mongodb+srv://harshshukla1911:Harsh$1911@cluster0.mvkmvqi.mongodb.net/?retryWrites=true&w=majority');

    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
