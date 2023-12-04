import { Schema, model, Document } from "mongoose";
import { type } from "os";

interface IUser extends Document {
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

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  dateOfBirth: { type: Date, required: false },
  phoneNumber: { type: String, required: false },
  address: {
    street: { type: String, required: false },
    city: { type: String, required: false },
    zipCode: { type: String, required: false },
  },
});

export default model<IUser>("User", UserSchema);
