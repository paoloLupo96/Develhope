const addProduct = () => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const input = document.querySelector("input");
  li.innerText = input.value;

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  ul.appendChild(li);
  li.appendChild(checkBox);
};

/*Esercizio svolto in pair con Martina <3 */
