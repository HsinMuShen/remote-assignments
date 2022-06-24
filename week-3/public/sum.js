async function example() {
  let data = await fetch(`getData?number=10`);
  let parseData = await data.json();
  document.getElementById("ex").innerHTML =
    `The factorial of 10 is ` + parseData;

  //   fetch(`getData?number=10`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((d) => {
  //       document.getElementById("ex").innerHTML = `The factorial of 10 is ${d}`;
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
}

async function calculate() {
  const num = document.getElementById("number").value;
  let data = await fetch(`getData?number=${num}`);
  let parseData = await data.json();
  document.getElementById("result").innerHTML =
    `The factorial of ${num} is ` + parseData;

  //   fetch(`getData?number=${num}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((d) => {
  //       document.getElementById(
  //         "result"
  //       ).innerHTML = `The factorial of ${num} is ${d}`;
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
}
