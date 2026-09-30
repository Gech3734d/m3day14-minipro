const orders = globalThis.__ADDIS_EATS_ORDERS__ ?? new Map();
globalThis.__ADDIS_EATS_ORDERS__ = orders;
export function createOrder(order) { const id = crypto.randomUUID(); const record = { id, ...order, status: "placed", createdAt: new Date().toISOString() }; orders.set(id, record); return record; }
export function cancelOwnedOrder(id, userId) { const order = orders.get(id); if (!order) return { ok:false, reason:"not_found" }; if (order.userId !== userId) return { ok:false, reason:"forbidden" }; order.status="cancelled"; orders.set(id, order); return { ok:true, order }; }
