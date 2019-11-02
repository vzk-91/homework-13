const inputKey = document.getElementById("key");
const inputValue = document.querySelector("#value");
const show = document.querySelector("#show");
const create = document.querySelector("#create");
const clear = document.querySelector("#clear");
const table = document.querySelector("#table");




class LocalStorage {

   get(input){
       let storageValue = localStorage.getItem(input.value);
       return storageValue 
   }

    set(input1, input2 ){
       localStorage.setItem(input1.value , input2.value)
       inputKey.value = "";
       inputValue.value = "";
    }

    clear(){
        if(localStorage.key(1)){
            localStorage.clear()
        } else {
            alert('the localStorage is empty')
        }
        
    }

}; 


let storageApi = new LocalStorage();


function showItem() {
    let stValue = storageApi.get(inputKey)
    let template = ""
    if(inputKey.value){
       let row = `
       <tr>
                     <td>${localStorage.key(inputKey.value)}</td>
                     <td>${stValue}</td>
                 </tr>
       `

       table.innerHTML += row
       table.style.display = "block"
       inputKey.value = "";
    
}else {
    for (var i = 0; i < localStorage.length; i++){
        let row = `
        <tr>
                      <td>${localStorage.key(i)}</td>
                      <td>${localStorage.getItem(localStorage.key(i))}</td>
                  </tr>
        `

        template += row
    }
    table.innerHTML +=template;
    table.style.display = "block"
 }
}


function setItem () {
    storageApi.set(inputKey,inputValue);
    inputKey.value = "";
    inputValue.value = "";

}

function clearStorage() {
    table.innerHTML = ""
    inputKey.value = "";
    inputValue.value = "";
    table.style.display = "none"
    storageApi.clear();
}


create.addEventListener('click', setItem)
clear.addEventListener('click', clearStorage)
show.addEventListener('click', showItem)