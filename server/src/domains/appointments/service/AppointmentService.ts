import { IAppointment } from "../model/Appointment";
import { AppointmentRepository } from "../repository/AppointmentRepository";

class AppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor() {
    this.appointmentRepository = new AppointmentRepository();
  }

  async scheduleAppointment(appointment: IAppointment): Promise<IAppointment> {
    try {
      const isAvailable = await this.appointmentRepository.checkAvailability(
        appointment.consultant,
        appointment.date
      );
      if (!isAvailable) {
        throw new Error(
          "O consultor não está disponível no horário especificado."
        );
      }
  
      const createdAppointment = await this.appointmentRepository.createAppointment(appointment);
      return createdAppointment;
    } catch (error) {
      throw new Error(`Erro ao agendar consulta: ${(error as any).message}`);
    }
  }
}

export default AppointmentService;
