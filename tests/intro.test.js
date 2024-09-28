import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
    it("should return the first argument if it is greater", () => {
        // AAA: A structured approach for writing tests

        // Arrange:  Set up the necessary preconditions and inputs for the test
        const a = 2;
        const b = 1;

        // Act: Execute the functionality being tested
        const result = max(a, b);

        // Assert: Validate the outcome against expected results
        expect(result).toBe(a);
    })
    it("should return the second argument if it is greater", () => {
        const a = 1;
        const b = 2;

        const result = max(a, b);

        expect(result).toBe(b);
    })
    it("should return the first argument if it is equal", () => {
        const a = 1;
        const b = 1;

        const result = max(a, b);

        expect(result).toBe(a);
    })
})