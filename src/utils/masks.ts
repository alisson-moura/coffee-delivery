export const formatCEP = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export const onlyNumbers = (value: string): string => {
  return value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
}

export const toUpperCase = (value: string): string => {
  return value.replace(/[^A-Za-z]/g, '').toLocaleUpperCase()
}
