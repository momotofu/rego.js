export const createGUID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`
}

export const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const compareKey = (key, isAscending, a, b) => {
  if (a[key] < b[key])
    return isAscending ? -1 : 1
  if (a[key] > b[key])
    return isAscending ? 1 : -1
  return 0
}
