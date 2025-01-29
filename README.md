# TypeScript Type Error Example

This repository demonstrates a common type error in TypeScript. The `add` function is defined to accept two numbers, but the code attempts to pass a string as an argument. This results in a type error during compilation.

The solution shows how to improve type safety and prevent such errors by adding type guards or using type assertion with caution, depending on the context.

## How to reproduce the error

1. Clone the repository.
2. Navigate to the root folder in terminal.
3. Compile the code using `tsc bug.ts`.
4. Observe the type error message.

## How to solve the error

The solution file (`bugSolution.ts`) shows how to properly handle this scenario and prevent such errors.