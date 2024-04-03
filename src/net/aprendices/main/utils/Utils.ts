function printNegativeNumbers(negativeNumbers: string[]) {
  let msg = ""
  negativeNumbers.forEach((num) => (msg += num + ", "))
  msg = msg.slice(0, msg.length - 2)
  return msg
}

function sumNumbers(delimiterExpression: RegExp, numbers: String): number {
  let result: number = 0
  numbers.split(delimiterExpression).forEach((num: String) => {
    result = result + Number(num)
  })
  return result
}

export const Utils = {
  printNegativeNumbers,
  sumNumbers,
}
