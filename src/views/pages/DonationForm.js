import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CCol, CContainer, CForm, CFormInput, CFormSelect, CHeader, CHeaderNav, CInputGroup, CNavItem, CNavLink } from '@coreui/react';
import { AppFooter } from 'src/components';
import { NavLink } from 'react-router-dom';
import './../../scss/donationForm.scss'
const DonationForm = () => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
  
    const stripe = useStripe();
    const elements = useElements();

    const handleDonation = async (e) => {
        e.preventDefault();
        setLoading(true);

        const cardElement = elements.getElement(CardElement);
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.error('Error creating payment method:', error);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('/donate', {
                amount: parseFloat(amount),
                date,
                username,
                email,
                paymentMethodId: paymentMethod.id,
            });

            if (response.status === 200) {
                alert('Donation successful!');
            } else {
                alert('Donation failed!');
            }

            setLoading(false);
        } catch (error) {
            console.error('Error processing donation:', error);
            setLoading(false);
        }
    };

    return (
        <>
            <CHeader position="sticky" className='bg-black'>
                <CContainer fluid>
                    <CHeaderNav className="d-none d-md-flex me-auto">
                        <CNavItem>
                            <CNavLink to="/home" component={NavLink} className='logo font-bold font-white'>
                                CMFB
                            </CNavLink>
                        </CNavItem>
                    </CHeaderNav>
                    <CHeaderNav>
                        <a className="btn btn-custom font-bold font-white" href="/#/home">
                            Home
                        </a>
                        <a className="btn btn-custom font-bold font-white" href="/#/find-food-bank">
                            Find Food Bank
                        </a>
                        <a className="btn btn-custom font-bold font-white" href="/#/login">
                            Login
                        </a>
                    </CHeaderNav>
                </CContainer>
            </CHeader>
            <CCol xs={12} className='bg-black p-0'>
                <div className="donate m-0" data-parallax="scroll" data-image-src="img/donate.jpg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="donate-content">
                                    <div className="section-header">
                                        <p>Donate Now</p>
                                        <h2>Change Lives, Donate Today!</h2>
                                    </div>
                                    <div className="donate-text">
                                        <p>
                                            Your generosity can make a difference. Support Canada Mobile Food Bank in
                                            providing essential resources to those in need. Together, we can build a
                                            brighter future for all. Click the button on the right to donate and create
                                            positive change. Thank you for your support!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <form className="donation-form" onSubmit={handleDonation}>
                                    <div className="form-group">
                                        <label htmlFor="amount">Amount:</label>
                                        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date:</label>
                                        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username:</label>
                                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="card-element">Card Details:</label>
                                        <CardElement id="card-element" />
                                    </div>
                                    <button className="submit-btn btn-dark btn btn-custom" type="submit" disabled={loading}>Donate</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </CCol>
            <AppFooter className={'m-0 borderNone'} isAdmin={false} />
        </>
    );
};

export default DonationForm;