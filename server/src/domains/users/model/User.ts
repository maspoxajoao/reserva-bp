import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}

export const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: false },
  phoneNumber: { type: String, required: false },
  address: {
    street: { type: String, required: false },
    city: { type: String, required: false },
    zipCode: { type: String, required: false },
  },
});

export const User = model<IUser>("User", UserSchema);
