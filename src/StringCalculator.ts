export class StringCalculator {
  add(numbers: String): number {
    let result: number = 0

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    this.checkNumberSeparators(numbers)

    result = this.sumNumbers(/,|\n/, numbers)

    return result
  }

  private checkNumberSeparators(numbers: String) {
    if (numbers.includes(",\n") || numbers.includes("\n,")) {
      throw new Error(`Number expected but '\\n' found at the position ${numbers.indexOf("\n")}.`)
    } else if (numbers.endsWith(",") || numbers.endsWith("\n")) throw new Error(`Number expected but EOF found.`)
  }

  private sumNumbers(separator: RegExp, numbers: String): number {
    let result: number = 0
    numbers.split(separator).forEach((num: String) => {
      result = result + Number(num)
    })
    return result
  }
}
