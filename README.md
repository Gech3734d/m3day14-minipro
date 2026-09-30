# Addis Eats — Server/API Exercise

Covers all requested requirements:
- GET /api/dishes
- GET /api/dishes/[id] with 404 and one error shape
- POST /api/orders with 201 success and 422 fieldErrors
- placeOrder Server Action using useActionState
- pending button state
- revalidatePath after successful writes
- cancelOrder with server session + ownership verification
- .env.local ignored and no secret imported by client code

Run:

npm install
npm run dev

Then visit http://localhost:3000

The auth helper is a demo. Replace `lib/auth.js` with your real authentication/session provider before production.
