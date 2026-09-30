// Demo server-only session. Replace with your real auth provider in production.
export async function requireSession() { return { userId: "demo-user-1" }; }
