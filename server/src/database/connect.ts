import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const uri = `mongodb+srv://reserva_BP:123456789kk@teste-01.jjzrvms.mongodb.net/?retryWrites=true&w=majority`;

    await mongoose.connect(uri)

    console.log('Connect to server');
  } catch (error) {
    console.log('Mongo connection error:', error);
    process.exit(1);
  }
};
