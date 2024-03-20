export class StringCalculator {
  add(numbers: String): number {
    let result: number = 0

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    if (numbers.includes("\n")) {
      numbers.split(/,|\n/).forEach((num: String) => {
        result = result + Number(num)
      })
    } else {
      numbers.split(",").forEach((num: String) => {
        result = result + Number(num)
      })
    }

    return result
  }
}
