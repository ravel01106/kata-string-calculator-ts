import { describe, it, expect } from "vitest"
import { StringCalculator } from "../main/StringCalculator.js"

describe("String calculator should", () => {
  it(" not add any number when there is no expression.", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("")

    expect(result).toBe(0)
  })

  it(" keep the same number when receiving a single number.", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("2")

    expect(result).toBe(2)
  })

  it(" add numbers separated by commas.", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("1,2,3")

    expect(result).toBe(6)
  })

  it(" add decimals separated by commas.", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("1.1,2.2,3.3")

    expect(result).toBe(6.6)
  })

  it(" add numbers separated by commas or newlines.", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("1\n2,3")

    expect(result).toBe(6)
  })

  it(" throw error when there are two separators together.", () => {
    const stringCalculator = new StringCalculator()
    expect(() => stringCalculator.add("175.2,\n35")).toThrowError(
      /^Number expected but '\\n' found at the position 6.$/,
    )
  })

  it(" throw error when the last character is a separator.", () => {
    const stringCalculator = new StringCalculator()
    expect(() => stringCalculator.add("1,3,")).toThrowError(/^Number expected but EOF found.$/)
  })

  it(" add numbers separated by custom separator.", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("//;\n1;2")

    expect(result).toBe(3)
  })

  it(" add numbers separated by another custom separator.", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("//sep\n2sep3")

    expect(result).toBe(5)
  })

  it(" add numbers separated by vertical bar separator.", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("//|\n1|2|3")

    expect(result).toBe(6)
  })

  it(" throw error when there is a separator other than the custom separator.", () => {
    const stringCalculator = new StringCalculator()
    expect(() => stringCalculator.add("//|\n1|2,3")).toThrowError(/^'\\|' expected but ',' found at position 3.$/)
  })

  it(" throw error when there are negative numbers.", () => {
    const stringCalculator = new StringCalculator()
    expect(() => stringCalculator.add("-1,2")).toThrowError(/^Negative not allowed : -1.$/)
  })

  // throw error with all negative numbers
  it(" throw error with all negative numbers when it has.", () => {
    const stringCalculator = new StringCalculator()
    expect(() => stringCalculator.add("2,-4,-5")).toThrowError(/^Negative not allowed : -4, -5.$/)
  })
})
