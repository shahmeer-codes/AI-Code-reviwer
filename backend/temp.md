That function has a few syntax issues and a logical problem (where do `a` and `b` come from?).

Here are a few ways to define a `sum` function that takes two numbers as arguments and returns their sum:

---

### 1. Traditional Function Declaration (Corrected)

This is likely what you were aiming for with `function sum()`. The variables `a` and `b` need to be passed as **parameters**.

```javascript
function sum(a, b) {
  return a + b;
}

// How to use it:
console.log(sum(5, 3));  // Output: 8
console.log(sum(10, -2)); // Output: 8
```

---

### 2. Arrow Function (Common Modern JavaScript)

If you intended to use the `=>` syntax (arrow function), this is how it's done. Arrow functions are often assigned to constants.

```javascript
const sum = (a, b) => {
  return a + b;
};

// How to use it:
console.log(sum(5, 3));  // Output: 8
console.log(sum(10, -2)); // Output: 8
```

---

### 3. Arrow Function (Concise/Implicit Return)

For a simple function body like `return a + b`, arrow functions have a shorthand where you can omit the curly braces `{}` and the `return` keyword.

```javascript
const sum = (a, b) => a + b;

// How to use it:
console.log(sum(5, 3));  // Output: 8
console.log(sum(10, -2)); // Output: 8
```

---

**Explanation of the issues in your original `function sum()=>{return a+b}`:**

1.  **Mixed Syntax:** You combined the `function` keyword syntax with arrow function `=>` syntax. You should choose one or the other.
2.  **Missing Parameters:** `a` and `b` were not defined or passed into the function. Functions receive values to operate on through their `parameters` (the variables listed in the parentheses).