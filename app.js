


function mostrar()  {

    let inputValuee = document.querySelector("#amount").value;
    console.log(inputValuee);

    if (inputValuee === '') {
      console.error(null);
    } else {

    let lista = document.createElement("li");
    console.log(lista);


    let chekedValue = document.createElement("input");

    chekedValue.type = 'checkbox';
    chekedValue.setAttribute('type', 'checkbox');
    lista.appendChild(chekedValue);
    chekedValue.classList.add("teste");

    chekedValue.addEventListener('click', function (e) {
        if(chekedValue.checked) {
            lista.style.textDecoration = "line-through";
        } else {
            lista.style.textDecoration = "none";
        }
        
    });

    let butRemove = document.createElement("span");

    butRemove.className = 'material-symbols-outlined';
    butRemove.id = 'texte';
    butRemove.innerText = 'delete_sweep';
    butRemove.style.width = '22.2px';
    butRemove.style.height = '22.2px';
    butRemove.style.fontSize = '17px';
    butRemove.style.transform = "translate(60px, 0.5px)";

    
    butRemove.addEventListener('click', function (sabe) {
      lista.classList.add('listona');
      lista.style.display = 'none';
    })

    console.log(butRemove);

    let textValue = document.createTextNode(inputValuee);
    lista.appendChild(textValue);
    lista.appendChild(butRemove);

    let button = document.querySelector('#align');
    document.querySelector(".myul").appendChild(lista);
    };
    document.querySelector("#amount").value = "";
    button.addEventListener('click', mostrar);
}


//parseint pega um value transforma de string para number.