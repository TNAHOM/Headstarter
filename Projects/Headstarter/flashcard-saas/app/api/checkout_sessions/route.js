import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const formatAmountForStripe = (amount) => {
  return Math.round(amount * 100);
};

export async function POST(request) {
  const params = {
    submit_type: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_detail: {
            name: 'Pro subscription test',
          },
          unit_amount: formatAmountForStripe(10),
          recurring: {
            interval: 'month',
            interval_count: 1,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  };
  const checkoutSession =
    await stripe.checkout.sessions.create(params);
  // const { priceId } = await request.json();

  // const session = await stripe.checkout.sessions.create({
  //   mode: "subscription",
  //   payment_method_types: ["card"],
  //   line_items: [{ price: priceId, quantity: 1 }],
  //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
  //   cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  // });

  return NextResponse.json(checkoutSession, {
    status: 200,
  });
}