function mostrar()  {

    let inputValuee = document.querySelector("#amount").value;
    console.log(inputValuee);

    
    if (inputValuee === '') {
    } else {

    let lista = document.createElement("li");
    console.log(lista);


    let chekedValue = document.createElement("input");

    chekedValue.type = 'checkbox';
    chekedValue.setAttribute('type', 'checkbox');
    lista.appendChild(chekedValue);

    chekedValue.addEventListener('click', function (e) {
        if(chekedValue.checked) {
            lbText.style.textDecoration = "line-through";
        } else {
            lbText.style.textDecoration = "none";
        }
        
    });

    let butRemove = document.createElement("button");

    butRemove.className = 'material-symbols-outlined';
    butRemove.innerText = 'delete_sweep';
    butRemove.style.width = '22.2px';
    butRemove.style.height = '22.2px';
    butRemove.style.fontSize = '17px';
    butRemove.style.border = 'none';
    butRemove.style.textDecoration = "none";

  

    
    butRemove.addEventListener('click', function (sabe) {
      lista.classList.add('list-none');
      lista.style.display = 'none';
    })

    
    console.log(butRemove);

    let lbText = document.createElement('p');
    lbText.classList.add('textVal');
    let textValue = document.createTextNode(inputValuee);
    lbText.appendChild(textValue);

    lista.appendChild(lbText);
    lista.appendChild(butRemove);
   

    
    let button = document.querySelector('#align');
    document.querySelector(".myul").appendChild(lista);
    };
    document.querySelector("#amount").value = "";


 
}
let btnclick = document.querySelector("#align");
let inputValuee2 = document.querySelector("#amount");

inputValuee2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnclick.click();

  };
});


//parseint pega um value transforma de string para number.