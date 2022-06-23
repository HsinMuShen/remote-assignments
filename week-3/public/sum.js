function example() {
  fetch(`getData?number=10`)
    .then((response) => {
      return response.json();
    })
    .then((d) => {
      document.getElementById("ex").innerHTML = `The factorial of 10 is ${d}`;
    })
    .catch((e) => {
      console.log(e);
    });
}

async function calculate() {
  const num = document.getElementById("number").value;
  fetch(`getData?number=${num}`)
    .then((response) => {
      return response.json();
    })
    .then((d) => {
      document.getElementById(
        "result"
      ).innerHTML = `The factorial of ${num} is ${d}`;
    })
    .catch((e) => {
      console.log(e);
    });
}
