function ajax(src, callback) {
  callback(src);
}

async function render(data) {
  let fetchData = await fetch(data);
  let parseData = await fetchData.json();
  const urlItem = document.querySelector("#urlItem");
  for (let i = 0; i < parseData.length; i++) {
    let text = `name:${parseData[i].name}  price:${parseData[i].price}  description:${parseData[i].description}`;
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
