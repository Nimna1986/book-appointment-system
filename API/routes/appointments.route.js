import { Router } from "express";
import {createAppointment, deleteAppointment, getAppointments} from "../controllers/appointments.controllers.js";

const appointmentRouter = Router();

appointmentRouter.get('/', getAppointments)
appointmentRouter.post('/', createAppointment)
appointmentRouter.delete('/:id', deleteAppointment)

export default appointmentRouter;