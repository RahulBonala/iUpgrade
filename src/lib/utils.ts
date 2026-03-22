export function formatPrice(amount: number): string {
  return amount.toLocaleString('en-IN');
}

export function calcSavings(mrp: number, monthlyRent: number, years: number = 3): number {
  const buyingCost = (mrp * years) / 3;
  const rentingCost = monthlyRent * 12;
  return (buyingCost - rentingCost) * years;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
