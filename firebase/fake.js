fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
   let products = localStorage.setItem("products",JSON.stringify(data))
    console.log(data)
    // console.log(data)
    let container11 = document.getElementById("container11")
    
    for(var obj of data){
       let get = JSON.parse(localStorage.getItem("product"))
       let item = document.createElement("div")
       item.className = "item1 p-2 "
       item.innerHTML =`
       <img src="${obj.image}">
       <p class="text ">${obj.title} - <span class="price text-warning">${obj.price}</span></p>
       <p class="rating">⭐${obj.rating.rate}</p>
       <p class="cate text-danger">${obj.category}</p>
       `
       container11.appendChild(item);
    }
})
.catch(err=>console.error(err))

 
 