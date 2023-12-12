import { IAppointment } from "../model/Appointment";
import { AppointmentRepository } from "../repository/AppointmentRepository";

class AppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor() {
    this.appointmentRepository = new AppointmentRepository();
  }

  async scheduleAppointment(appointment: IAppointment): Promise<IAppointment> {
    try {
      const { client, consultant, date, duration } = appointment;

      // Garanta que a data seja uma instância de Date
      const utcDate = new Date(date);
      console.log(appointment);
      if (!isValidDate(utcDate)) {
        throw new Error("A propriedade 'date' não é uma data válida.");
      }

      const dateWithoutTimezone = new Date(utcDate.toISOString());

      if (!client || !consultant || !dateWithoutTimezone || !duration) {
        throw new Error("Campos obrigatórios do agendamento estão ausentes.");
      }

      const isAvailable = await this.appointmentRepository.checkAvailability(
        consultant,
        dateWithoutTimezone
      );

      if (!isAvailable) {
        throw new Error("O consultor não está disponível no horário especificado.");
      }

      const createdAppointment = await this.appointmentRepository.createAppointment({
        client,
        consultant,
        date: dateWithoutTimezone,
        duration,
      } as IAppointment);

      return createdAppointment;
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
      throw new Error(`Erro ao agendar consulta: ${(error as any).message}`);
    }
  }
}

function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.getTime());
}

export default AppointmentService;
