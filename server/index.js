// server/index.js
import Stripe from 'stripe';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Your Stripe secret key

app.use(cors());
app.use(express.json());

// Create a Payment Intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents (e.g., $20.00 is 2000)
      currency: currency,
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));