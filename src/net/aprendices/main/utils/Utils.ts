function printNegativeNumbers(negativeNumbers: string[]) {
  let msg = ""
  negativeNumbers.forEach((num) => (msg += num + ", "))
  msg = msg.slice(0, msg.length - 2)
  return msg
}

export const Utils = {
  printNegativeNumbers,
}
