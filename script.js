let submit = document.querySelector("#submit");
let txtVal = document.getElementById("textArea");

let index = 0;

submit.addEventListener("click", function () {
  index++;

  let li = document.createElement("li");
  li.id = `task${index}`;
  li.innerHTML = txtVal.value;
  document.getElementById("list").appendChild(li);

  let buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Delete";
  buttonDelete.id = `delete${index}`;
  buttonDelete.className = `button-4`;
  li.appendChild(buttonDelete);

  buttonDelete.addEventListener("click", function () {
    li.remove();
  });

  let buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Editar";
  buttonEdit.id = `edit${index}`;
  buttonEdit.className = `button-4`;
  li.appendChild(buttonEdit);

  buttonEdit.addEventListener("click", function () {
    let input = document.createElement("input");
    input.type = "text";
    input.className = "input";
    li.appendChild(input);

    let buttonSave = document.createElement("button");
    buttonSave.innerHTML = "Salvar";
    buttonSave.id = `edit${index}`;
    li.appendChild(buttonSave);
  });
});
