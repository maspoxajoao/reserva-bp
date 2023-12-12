import { IAppointment, Appointment } from "../model/Appointment";

export class AppointmentRepository {
  async createAppointment(appointment: IAppointment): Promise<IAppointment> {
    try {
      const createAppointment = await Appointment.create(appointment);
      return createAppointment.toObject();
    } catch (error) {
      throw new Error("Erro ao criar agendamento");
    }
  }

  async checkAvailability(consultantId: string, date: Date): Promise<boolean> {
    try {
      const existingAppointment = await Appointment.findOne({
        consultant: consultantId,
        date: { $eq: date },
      });

      return !existingAppointment;
    } catch (error) {
      throw new Error(
        `Erro ao verificar a disponibilidade: ${(error as any).message}`
      );
    }
  }
}
