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

  it(" return error when the last character is a separator", () => {
    const stringCalculator = new StringCalculator()
    expect(() => stringCalculator.add("1,3,")).toThrowError(/^Number expected but EOF found.$/)
  })

  it(" return the total sum when given numbers separated by custom separator", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("//;\n1;2")

    expect(result).toBe(3)
  })
  it(" return the total sum when given numbers separated by another custom separator", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("//sep\n2sep3")

    expect(result).toBe(5)
  })

  it(" return the total sum when given numbers separated by vertical bar separator", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("//|\n1|2|3")

    expect(result).toBe(6)
  })

  it(" return error sum when there is a separator other than the custom separator", () => {
    const stringCalculator = new StringCalculator()
    expect(() => stringCalculator.add("//|\n1|2,3")).toThrowError(/^'\\|' expected but ',' found at position 3.$/)
  })
})
