export const formatNumberToMoney = (value: number) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

export const formatNumberToPercentage = (value: number) => `${(value * 100).toFixed(2)}%`
