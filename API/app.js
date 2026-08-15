import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import cookieParser from 'cookie-parser';

import { PORT } from "./config/env.js";

import appointmentRouter from "./routes/appointments.route.js";
import connectToDB from "./databse/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/appointments', appointmentRouter);

app.use(errorMiddleware)

app.get('/', (req, res) => {
    res.send('Welcome to the Appointment Booking API');
})

app.listen(PORT, async () => {
    console.log(`API server is running at http://localhost:${ PORT }`);

    await connectToDB()
});

export default app;