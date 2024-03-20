import { describe, it, expect } from "vitest"
import { StringCalculator } from "./main.js"

describe("String calculator should", () => {
  it(" return 0 if an empty string is passed", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("")

    expect(result).toBe(0)
  })

  it(" return the number when given only a number", () => {
    const stringCalculator = new StringCalculator()
    const result = stringCalculator.add("2")

    expect(result).toBe(2)
  })
})
