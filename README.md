# Testing Practise
This collection of exercises was additional practise of TDD, this time using Jest rather than Rspec. There were significantly more similarities than differences between the two suits which, I suppose, is to be expected. For example, although not utilised here, there is a `describe` function, just like there is in Rspec.

## How to run (local)
To run this project follow the following steps:
1. Clone this repo with `git clone git@github.com:qamk/testing-practise-tdd-jest.git`
2. Enter the project directory `cd testing-practise-tdd-jest`
3. Run the test suite with `npm run test`
  - Note: If you want to "watch" any tests (i.e. run them after making changes and saving) use `npm run watch`
    - Check the `package.json` file to change the scripts if you want

## Tasks
The task was simply to take a **Red-Green-Refactor** approach to writing this code. That is
1. Write tests and run them to ensure that your code fails
   - Your tests return **red** 
2. Write code that works and run the tests to check that they pass
   - Your tests return **green**
3. Refactor your code, running tests and writing working code as you do

This allows you to safely update your code and ensure that it works as expected. Writing them first has a few advantages but mostly it helps you actually write them and plan out your project code better.

## Resources
Below are some resources you might find helpful or interesting:
- Skipping tests or files (and using `describe`!)
  - https://codewithhugo.com/run-skip-single-jest-test/
- Modulo with negative numbers
  - https://stackoverflow.com/questions/11720656/modulo-operation-with-negative-numbers
- Jest matchers (reference list)
  - https://jestjs.io/docs/expect

## Discussion
Not much to say, but it was nice to be introduced to another testing suite. TDD is useful when writing projects, especially ones that have even a little bit of complexity or that you intend to extend in some way. One thing that was interesting was Javascript's handling of modulo operations like `a % b` where **a** is negative... That was fairly easily resolved (in no small part to Stack Overflow) after understanding what was going on.
