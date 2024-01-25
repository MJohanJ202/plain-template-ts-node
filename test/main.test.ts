import { expect, test } from 'vitest'
import { calculateArea } from "../src/main"


test('calculateArea - should return the correct area for a square with a width of 10 and a height of 20', () => {
  const area = calculateArea(10, 20)
  const expectedArea = 200
  expect(area).toBe(expectedArea)
})

test("should return the correct area for a square with a width of 0 and a height of 0", () => {
  const expectedArea = 0
  const area = calculateArea(0, 0)
  expect(area).toBe(expectedArea)
})
