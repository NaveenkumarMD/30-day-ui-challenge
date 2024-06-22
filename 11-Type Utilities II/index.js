function isNonPrimitive(value) {
  return [
    "string",
    "number",
    "boolean",
    "symbol",
    "undefined",
    "boolean",
  ].includes(typeof value);
}
