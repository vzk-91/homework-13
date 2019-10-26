const inputKey = document.getElementById("key");
const inputValue = document.querySelector("#value");
const show = document.querySelector("#show");
const create = document.querySelector("#create");
const clear = document.querySelector("#clear");
const table = document.querySelector("#table");




class LocalStorage {

   get(){
       let storageValue = localStorage.getItem(inputKey.value);
      let template = ""
     if(inputKey.value){
        let row = `
        <tr>
                      <td>${inputKey.value}</td>
                      <td>${storageValue}</td>
                  </tr>
        `

        table.innerHTML += row
        table.style.display = "block"
        inputKey.value = "";
     } else {
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

    set(){
       localStorage.setItem(inputKey.value , inputValue.value)
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
create.addEventListener('click', storageApi.set)
clear.addEventListener('click', storageApi.clear)
show.addEventListener('click', storageApi.get)
