import Appointment from "../models/appointment.model.js";

export const createAppointment = async (req, res, next) => {
    try {
        const newAppointment = await Appointment.create({
            ...req.body
        })

        res.status(201).json({
            success: true,
            data: newAppointment
        })
    } catch (error) {
        next(error)
    }
}
export const getAppointments = async (req, res, next) => {
    try {

        const allAppointments = await Appointment.find();

        res.status(200).json({success: true, data: allAppointments});

    }catch (error) {
        next(error)
    }
}

export const deleteAppointment = async (req, res, next) => {
    try {

        const cancellingAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!cancellingAppointment) {
            res.status(404).json({success: false, message: 'Appointment not found'});
        } else {
            res.status(200).json({success: true, message: 'Appointment cancelled successfully'});
        }

    } catch (error) {
        next(error)
    }
}