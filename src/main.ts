export class StringCalculator {
  add(numbers: String): number {
    let result: number = 0

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    numbers.split(",").forEach((num: String) => {
      result = result + Number(num)
    })

    return result
  }
}
