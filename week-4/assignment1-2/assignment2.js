async function ajax(src, callback) {
  let fetchData = await fetch(src);
  let parseData = await fetchData.json();
  callback(parseData);
}

function render(data) {
  const urlItem = document.querySelector("#urlItem");
  for (let i = 0; i < data.length; i++) {
    let text = `name:${data[i].name}  price:${data[i].price}  description:${data[i].description}`;
    let textSection = document.createElement("p");
    textSection.innerText = text;

    urlItem.appendChild(textSection);
  }
  //   console.log(parseData);
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
