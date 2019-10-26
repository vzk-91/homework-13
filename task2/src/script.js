const url = "https://dog.ceo/api/breed/";
const images = document.getElementById('images')

const   dogShow = () => {
    const items = document.getElementById('sel').selectedIndex;
    const options=document.getElementById('sel').options;
    
  fetch(`${url}${options[items].value}/images`)
    .then(response => response.json())
    .then( function (data) {
        data.message.forEach(el => {
            let photo = `
            <img src="${el}" class='image'/>
            `
            images.innerHTML += photo
        });
    })
    }

  

