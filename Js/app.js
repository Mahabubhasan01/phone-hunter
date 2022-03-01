 allBrand = () =>{
     const searchText = document.getElementById('search');
     const searchValue = searchText.value;
    const url = "https://openapi.programming-hero.com/api/phones?search='${searchValue}'";
    fetch(url)
    .then(res=>res.json())
    .then(data=>brandInfo(data.data))
    
 }
  const brandInfo = (datas) =>{
    const parent = document.getElementById('card')
    for(const data of datas){
        console.log(data)
        const div = document.createElement('div');
        div.classList.add('col-sm-1', 'col-md-4', 'col-lg-4')
        div.innerHTML=
    `<div id="card-body" class="col-sm-1 col-md-4 col-lg-4">
    <div class="card" style="width: 18rem;">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.phone_name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>` 
    parent.appendChild(div) 
 }
 
 }