 allBrand = () =>{
     document.getElementById('card').innerHTML='';
     const searchValue = document.getElementById('search').value;
     document.getElementById('search').value='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>brandInfo(data.data))
    
 }
    const brandInfo = datas =>{
    const parent = document.getElementById('card');
    const sliceValue = datas.slice(0,20);
/*     console.log(sliceValue)
 */    for(const data of sliceValue){
     console.log(data)
        const div = document.createElement('div');
        div.classList.add('col-sm-1', 'col-md-4', 'col-lg-4')
        div.innerHTML=
    `
    <div class="card shadow-lg p-1 border-size " style="width: 20rem;">
        <img src="${data.image}" class="card-img-top p-4  " alt="...">
        <div class="card-body">
        <h5 class="card-title ">Brand : ${data.brand}<br>Phone name : ${data.phone_name}</h5>
        <p class="card-text text-normal">Get a touch Brand new Phone here and adjust new trand in your life style</p>
        
        <div class="d-flex d-lg-flex justify-content-between">
        <a href="#" class="btn rounded-3  btn-outline-info size"><span  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="detailsProduct()" id="detail-btn">Details</span></a>

        <a href="#" class="btn rounded-3  btn-outline-info size"><span data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="moreProductInfo()" id="explore-btn">More</span></a>
        </div>
        </div>
    </div>
` 
    parent.appendChild(div) 
 }
 
 }


//  Info details
     const detailsProduct = () =>{
    const searchValue = document.getElementById('search').value;
    const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`
    fetch(url)
    .then(res=>res.json())
    .then(data=>detailsInfo(data))
}
const detailsInfo = (brands) =>{
        const cardDetail = document.getElementById('card-detail');
        const cardDetailDiv = document.createElement('div');
        cardDetailDiv.innerHTML=`<div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${brands.data.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- js  -->
                    <div class="card mb-3 border shadow-lg" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-md-4 p-5">
                            <img src="${brands.data.image}" class="img-fluid rounded-start " alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h4 class="card-title">${brands.data.name}</h4>
                              <p class="card-text size">Storage : ${brands.data.mainFeatures.storage}<br>Display : ${brands.data.mainFeatures.displaySize}<br>Chipset : ${brands.data.mainFeatures.chipSet}<br>Memory : ${brands.data.mainFeatures.memory}
                              </p>
                              <p class="card-text"><small class="text-muted">ReleaseDate : ${brands.data.releaseDate}</small></p>
                            </div>
                          </div>
                        </div>
                      </div> 
                      <!-- js.......  -->
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>`
      cardDetail.appendChild(cardDetailDiv)
     /*  {<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
            </button>} */
    
}


// ...............brandInfo........................brandInfo......brandInfo........
const moreProductInfo = () =>{
    const searchValue = document.getElementById('search').value;
    const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`
    fetch(url)
    .then(res=>res.json())
    .then(data=>Info(data))
}
const Info = (datas) =>{
    
        console.log(datas.data)
        const cardDetail = document.getElementById('card-detail');
        const cardDetailDiv = document.createElement('div');
        cardDetailDiv.innerHTML=`<div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${datas.data.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- js  -->
                    <div class="card mb-3 border shadow-lg" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-md-4 p-5">
                            <img src="${datas.data.image}" class="img-fluid rounded-start " alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">${datas.data.name}</h5>
                              <p class="card-text size">Sensors : ${datas.data.mainFeatures.sensors[0]}, 
                              ${datas.data.mainFeatures.sensors[1]}, ${datas.data.mainFeatures.sensors[2]}, 
                              ${datas.data.mainFeatures.sensors[3]}
                              <br>NFC : ${datas.data.others.NFC}
                              <br>Radio : ${datas.data.others.Radio}
                              <br>Bluetooth : ${datas.data.others.Bluetooth}
                              <br>USB : ${datas.data.others.USB}
                              <br>GPS : ${datas.data.others.GPS}
                              <br>WLAN : ${datas.data.others.WLAN}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div> 
                      <!-- js.......  -->
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>`
      cardDetail.appendChild(cardDetailDiv)
     /*  {<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
            </button>} */
    
} 

