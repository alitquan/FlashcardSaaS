'use client';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography } from '@mui/material';
import Navbar from '../components/navbar.js';
import styles from '../components/Subscription.module.css';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)


function SubscribeButton({ plan }) {
    const { user } = useUser();
    const [_priceId, setPriceId] = useState('');

    useEffect(() => {
        if (plan === 'basic') {
            setPriceId('price_1PqQDPAeKHJQojJrGj4dEqxd');
        } else if (plan === 'premium') {
            setPriceId('price_1PqQL3AeKHJQojJrfMXdRcHX');
        }
    }, [plan]);

    const handleSubscribe = async () => {
        try {
            const stripe = await stripePromise;
            
            // Call your backend to create a Checkout session
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
				body: JSON.stringify({ priceId: _priceId, userId: user.id }),
            });

            if (!response.ok) {
                throw new Error(`Failed to create checkout session: ${response.statusText}`);
            }

            const session = await response.json();
			console.log("returned session: ",session);
			const sessionID = session.sessionId;
			console.log("returned session id: ",sessionID);


            // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({ sessionId: sessionID});
			

            if (result.error) {
                console.error(`Stripe redirect failed: ${result.error.message}`);
            }
        } catch (error) {
            console.error('Error in handleSubscribe:', error);
            // Display an error message to the user, or handle it as needed
        }
    };

    return (
        <button 
            style={{
                minWidth: '10em',
                minHeight: '3rem',
                fontSize: '1rem',
                color: 'red',
                borderRadius: '5px'
            }}
            onClick={handleSubscribe}
            disabled={!_priceId}
        >
            Subscribe
        </button>
    );
}

const SubscriptionPage = () => {
    const [plan, setPlan] = useState(null);
    const [price, setPrice] = useState(0);
    const router = useRouter(); // Get router instance

    useEffect(() => {
        // Access URL search parameters
        const queryParams = new URLSearchParams(window.location.search);
        const planParam = queryParams.get('plan');
        setPlan(planParam);
        if (planParam === 'basic') {
            setPrice(25.59);
        } else if (planParam === 'premium') {
            setPrice(50.25);
        }
    }, [router.query]); // Dependencies array

    const monthlyPayment = (0.0875 * price).toFixed(2);
    const totalPayment = parseFloat(monthlyPayment) + parseFloat(price);

    return (
        <Container>
            <Navbar />

            <Container
                align='center'
                sx={{
                    marginTop: '6rem'
                }}
            >
                <Typography variant="h1">Selected Plan: {plan}</Typography>

                <Container>
                    {plan === 'basic' && <Typography variant="h4">You have selected the Basic plan.</Typography>}
                    {plan === 'premium' && <Typography variant="h4">You have selected the Premium plan.</Typography>}
                </Container>
                <Container
                    sx={{
                        margin: '2rem 0',
                        marginBottom: '1rem'
                    }}
                >
                    <div className={styles.containerForm}>
                        <div className={styles.statements}>
                            <Typography variant="h5"> Monthly Payment: </Typography>
                            <Typography variant="h5"> Estimated Taxes: </Typography>
                            <br />
                            <Typography variant="h5"> Total Per Month: </Typography>
                            <br />
                        </div>
                        <div className={styles.statements}>
                            <Typography variant="h5"> {price} </Typography>
                            <Typography variant="h5"> {monthlyPayment} </Typography>
                            <br />
                            <Typography variant="h5"> {totalPayment} </Typography>
                        </div>
                    </div>

                    <Typography variant="h4"> Would you like to subscribe? </Typography>
                </Container>
                <SubscribeButton plan={plan} />
            </Container>
        </Container>
    );
};

export default SubscriptionPage;
