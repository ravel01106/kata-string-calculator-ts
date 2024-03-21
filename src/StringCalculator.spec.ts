import { describe, it, expect } from "vitest"
import { StringCalculator } from "./StringCalculator.js"

describe("String calculator should", () => {
  it(" return 0 when an empty string is passed", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("")

    expect(result).toBe(0)
  })

  it(" return the number when given only a number", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("2")

    expect(result).toBe(2)
  })

  it(" return the total sum when given numbers separated by commas", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("1,2,3")

    expect(result).toBe(6)
  })

  it(" return the total sum when given decimals separated by commas", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("1.1,2.2,3.3")

    expect(result).toBe(6.6)
  })

  it(" return the total sum when given numbers separated by commas or newlines", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("1\n2,3")

    expect(result).toBe(6)
  })

  it(" return error when there are two separators together", () => {
    const stringCalculator = new StringCalculator()
    expect(() => stringCalculator.add("175.2,\n35")).toThrowError(
      /^Number expected but '\\n' found at the position 6.$/,
    )
  })
})
