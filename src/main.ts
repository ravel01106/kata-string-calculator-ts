export class StringCalculator {
  add(numbers: String): Number {
    if (numbers == "") return 0
    return Number(numbers)
  }
}
