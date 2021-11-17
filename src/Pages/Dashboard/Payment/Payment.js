import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JwkDRBjGQu2ljUZ7CZqWQBQJ3R3RipFXEOq0VLGJGXN3vu5BnUJLHMLbZqTxxlUtrqEnbBBbcBQa4RooGa1pmyB00AkrIzMB8');

const Payment = () => {
    const {appointmentId} = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(response => response.json())
        .then(data => setAppointment(data))
    },[appointmentId])
    return (
        <div>
            <h2>Please Pay for {appointment.patientName} for {appointment.serviceName}</h2>
            <h4> Pay: ${appointment.price}</h4>
         { appointment?.price &&  <Elements stripe={stripePromise}>
            <CheckOutForm 
                appointment={appointment}
                
            />
            </Elements>}
        </div>
    );
};

export default Payment;