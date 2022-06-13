function calculate(args) {
  if (args.op === "+") {
    return args.n1 + args.n2;
  } else if (args.op === "-") {
    return args.n1 - args.n2;
  } else {
    return "Not support";
  }
}
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // result to 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // result to 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // result to 'Not supported'
