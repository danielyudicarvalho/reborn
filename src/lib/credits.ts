import Stripe from 'stripe';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from './firebase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

/**
 * Add credit to a user's account by charging a payment method via Stripe.
 *
 * @param userId - Firebase Auth user id
 * @param paymentMethod - Stripe payment method id
 * @param amount - Amount in cents to charge and add as credit
 */
export async function addCredit(
  userId: string,
  paymentMethod: string,
  amount: number
) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    payment_method: paymentMethod,
    confirm: true,
  });

  if (paymentIntent.status === 'succeeded') {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, { credits: increment(amount) });
  }

  return paymentIntent;
}
