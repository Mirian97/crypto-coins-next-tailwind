export const formatNumberToMoney = (value: number) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

export const formatNumberToPercentage = (value: number) => `${value.toFixed(2)}%`

export const formatDate = (date: string) => {
  const dateParts = date.split('-')
  const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
  return formattedDate
}
