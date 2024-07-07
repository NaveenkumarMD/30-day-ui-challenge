function clamp(value, min, max) {
  if (value <= min) {
    return min;
  } else if (value >= max) {
    return max;
  } else {
    return value;
  }
}

clamp(2, 1, 10);

//apply

function show(name) {
  console.log(this.area);
  console.log(name);
}

const context = {
  area: "chennai",
};
show.apply(context, ["naveen"]);

const func = show.bind(context);

func("naveen");

show.call(context, "naveen");
