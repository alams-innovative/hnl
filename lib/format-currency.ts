/**
 * Format currency amounts with automatic millions/billions conversion
 * @param amount - The amount to format
 * @returns Formatted string like "1.5 Million PKR" or "PKR 50,000"
 */
export function formatCurrency(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(2)} Billion PKR`
  } else if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(2)} Million PKR`
  } else if (amount >= 100_000) {
    return `${(amount / 1_000_000).toFixed(2)} Million PKR`
  } else {
    return `PKR ${amount.toLocaleString()}`
  }
}
