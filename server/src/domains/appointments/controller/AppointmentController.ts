import { Request, Response } from "express";
import AppointmentService from "../service/AppointmentService";

class AppointmentController {
  private appointmentService: AppointmentService;

  constructor(appointmentService: AppointmentService) {
    this.appointmentService = appointmentService;
  }

  scheduleAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(res);
      const { body } = req;
      const appointment = await this.appointmentService.scheduleAppointment(body);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json((error as any).message);
    }
  };
}

export default AppointmentController;