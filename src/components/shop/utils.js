export function formatPrice(price) {
  return `£${(price * 0.01).toFixed(2)}`
}

export function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

export function totalItems(items) {
  return items.reduce((acc, item) => acc + item.quantity, 0)
}
