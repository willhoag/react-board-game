export const add = (a, b) => [
  a[0] + b[0],
  a[1] + b[1]
]

export const combineLargest = (a, b) => [
  a[0] > b[0] ? a[0] : b[0],
  a[1] > b[1] ? a[1] : b[1]
]
