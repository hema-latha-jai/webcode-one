
let divRoot = document.getElementById('tbl_body')

async function getData(){
    try {
        let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
        let data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
   
}

async function construct(){
    let data = await getData()
    
    data.forEach(e => {
        let div = document.createElement('tr')
        div.innerHTML += `<td>${e.brand}</td>
        <td>${e.name}</td>
        <td>${e.price}</td>
         ` 

        if(e.image_link){
            div.innerHTML +=`<td><img src="${e.image_link}" width="50" height="50"> </td>`
        }else{
            div.innerHTML +=`<td> </td>`
        }

        div.innerHTML += `
        <td><a href="${e.product_link}">${e.product_link}</a></td>
        <td>${e.description}</td>
        `
      divRoot.appendChild(div)
        
    });
}

construct()