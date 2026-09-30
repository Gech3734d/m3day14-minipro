# Testing

GET /api/dishes -> 200
GET /api/dishes/1 -> 200
GET /api/dishes/999 -> 404 with {"error":{"message":"Dish not found"}}

POST /api/orders with valid JSON -> 201.
POST /api/orders with invalid JSON fields -> 422 and error.fieldErrors.

Visit /checkout to test useActionState and the pending button.

Authorization is enforced inside cancelOrder on the server, so hiding a UI button cannot bypass ownership verification.
