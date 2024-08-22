mport { NextResponse } from 'next/server';
import Stripe from 'stripe';


// Initialize Stripe with your test secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const Success= () => {
  // const router = useRouter();
  // const { session_id } = router.query;
  // const [customerName, setCustomerName] = useState('');
  // const [loading, setLoading] = useState(true);

    return (
    <div>
      <h1>Thank you for your order </h2> 
    </div>
  );
};

export default Success;
