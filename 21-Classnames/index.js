function getClassName() {
  var resArr = [];
  for (let i of arguments) {
    if (typeof i === "string") {
      resArr.push(i);
    } else {
      for (const [key, value] of Object.entries(i)) {
        console.log(i);
        if (value) {
          resArr.push(key);
        }
      }
    }
  }
  return resArr.join(" ");
}
var x = getClassName("nav", { "nav-item": true, hidden: false }, "responsive");
console.log(x);
