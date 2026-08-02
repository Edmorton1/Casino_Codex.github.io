type BalanceCardProps = {
  balance: number
}

export function BalanceCard({ balance }: BalanceCardProps) {
  const formattedBalance = balance.toLocaleString('en-US')

  return (
    <div className="balance-card" aria-label={`Player balance $${formattedBalance}`}>
      <span>Balance</span>
      <strong>${formattedBalance}</strong>
    </div>
  )
}
