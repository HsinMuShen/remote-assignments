function example() {
  const xhr = new XMLHttpRequest();
  const url = "getData?number=10";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      document.getElementById("ex").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function calculate() {
  const xhr = new XMLHttpRequest();
  const num = document.getElementById("number").value;
  const url = `getData?number=${num}`;
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      document.getElementById("result").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
