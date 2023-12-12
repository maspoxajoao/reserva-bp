import { Schema, model, Document } from "mongoose";

export interface IAppointment extends Document {
  client: string;
  consultant: string;
  date: Date;
  duration: number;
}

export const AppointmentSchema = new Schema({
  client: { type: Schema.Types.String, ref: "User", required: true },
  consultant: { type: Schema.Types.String, ref: "User", required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
});


export const Appointment = model<IAppointment>("Appointment", AppointmentSchema);