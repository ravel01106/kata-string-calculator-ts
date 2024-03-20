export class StringCalculator {
  add(numbers: String): number {
    let result: number = 0

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    if (numbers.includes("\n")) {
      result = this.sumNumbers(/,|\n/, numbers)
    } else {
      result = this.sumNumbers(/,/, numbers)
    }

    return result
  }

  private sumNumbers(separator: RegExp, numbers: String): number {
    let result: number = 0
    numbers.split(separator).forEach((num: String) => {
      result = result + Number(num)
    })
    return result
  }
}
