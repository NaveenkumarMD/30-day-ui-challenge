Difficulty: Medium
Description: Implement a function that conditionally joins CSS class names together

# Conditional Class Name Joiner

## Problem Context

In web development, it is often necessary to dynamically apply different CSS class names to HTML elements based on certain conditions. This utility function aims to simplify this process by conditionally joining multiple class names into a single string.

## Function Requirements

The function should take multiple arguments, where each argument can be:

1. A string representing a class name that should always be included.
2. An object where the keys are class names and the values are booleans. The class names should only be included if their corresponding boolean value is `true`.

### Output

- The function should return a single string with all class names that meet the conditions.
- Class names should be separated by a single space.
- Duplicate class names should be avoided.

## Examples

### Example 1

**Input:**

```javascript
conditionalClassJoin("btn", "btn-primary", { active: true, disabled: false });
```

"btn btn-primary active"
