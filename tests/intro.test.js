import { describe, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
    it("should return the first argument if it is greater", () => {
        expect(max(2, 1)).toBe(2);
    })
    it("should return the second argument if it is greater", () => {
        expect(max(1, 2)).toBe(2);
    })
    it("should return the second argument if arguments are equal", () => {
        expect(max(1, 1)).toBe(1);
    })
})

describe("fizzBuzz", () => {
    it("should return 'FizzBuzz' if the argument is a multiple of both 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
    it("should retrun 'Fizz' if the argument a multiple of 3", () => {
        expect(fizzBuzz(9)).toBe("Fizz");
    })
    it("should return 'Buzz' if the argument a multiple of 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    })
    it("should return the argument as string if the argument is not a multiple of either 3 or 5", () => {
        expect(fizzBuzz(8)).toBe('8');
    })
}) 