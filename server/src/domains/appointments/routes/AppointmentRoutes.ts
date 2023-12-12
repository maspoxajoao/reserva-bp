import AppointmentController from "../controller/AppointmentController";

import express from "express";
import AppointmentService from "../service/AppointmentService";

const router = express.Router();
const appointmentService = new AppointmentService();
const appointmentController = new AppointmentController(appointmentService);

router.post("/schedule", appointmentController.scheduleAppointment);

export default router;
