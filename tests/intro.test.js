import { describe, it, expect } from "vitest";
import { API_URL, calculateAverage, factorial, fetchTodos, fizzBuzz, languages, max, reverseString, user } from "../src/intro";

describe("max", () => {
    it("should return the first argument if it is greater", () => {
        expect(max(2, 1)).toBe(2);
    });
    it("should return the second argument if it is greater", () => {
        expect(max(1, 2)).toBe(2);
    });
    it("should return the second argument if arguments are equal", () => {
        expect(max(1, 1)).toBe(1);
    });
});

describe("fizzBuzz", () => {
    it("should return 'FizzBuzz' if the argument is a multiple of both 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("should retrun 'Fizz' if the argument a multiple of 3", () => {
        expect(fizzBuzz(9)).toBe("Fizz");
    });
    it("should return 'Buzz' if the argument a multiple of 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    it("should return the argument as string if the argument is not a multiple of either 3 or 5", () => {
        expect(fizzBuzz(8)).toBe("8");
    });
});

describe("calculateAverage", () => {
    it("should return NaN if given an empty array", () => {
        expect(calculateAverage([])).toBe(NaN);
    });
    it("should calculate the average of an array with a single element", () => {
        expect(calculateAverage([1])).toBe(1);
    });
    it("should calculate the average of an array with two elements", () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    });
    it("should calculate the average of an array with three elements", () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    });
});

describe("factorial", () => {
    it("should return 1 if given 0", () => {
        expect(factorial(0)).toBe(1);
    });
    it("should return 1 if given 1", () => {
        expect(factorial(1)).toBe(1);
    });
    it("should return 6 if given 3", () => {
        expect(factorial(3)).toBe(6);
    });
    it("should return 24 if given 4", () => {
        expect(factorial(4)).toBe(24);
    });
    it("should return undifined if given negative number", () => {
        expect(factorial(-1)).toBeUndefined();
    });
});

describe("reverseString", () => { 
    it("should return empty string if argument is empty", () => { 
        expect(reverseString("")).toBe("");
    });
    it("should return 'olleH'  if argument is 'Hello'", () => {
        expect(reverseString("Hello")).toBe("olleH");
    });
    it("should return undifined  if argument is not a string", () => {
        expect(reverseString(0)).toBeUndefined();
    });
});

describe("API_URL", () => { 
    it("API_URL is correct", () => { 
        expect(API_URL).toBe("https://api.user.com");
    });
});

describe("languages", () => { 
    it("should contain the 'TypeScript' in languages array", () => { 
        expect(languages).toContain("TypeScript");
    });
});

describe("user", () => { 
    it("should contain 'name' and 'age' keys user object", () => { 
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("age");
    });
    it("type of 'age' in user object must be number", () => {
        expect(typeof user.age).toBe("number");
    });
});

describe('fectchTodos', () => {
    it("should return a non-empty array of todos with the correct structure for the first item", async () => {
        const todos = await fetchTodos();
        expect(Array.isArray(todos)).toBeTruthy();
        expect(todos.length).toBeGreaterThan(0);
        expect(todos[0]).toEqual(
            expect.objectContaining({
                userId: expect.any(Number),
                id: expect.any(Number),
                title: expect.any(String),
                completed: expect.any(Boolean)
            })
        )
    });
});