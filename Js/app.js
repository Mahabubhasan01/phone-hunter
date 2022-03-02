 allBrand = () =>{
     document.getElementById('card').innerHTML='';
     let searchValue = document.getElementById('search').value;
     document.getElementById('search').value='';
     if(searchValue==''){
         alert('Opps! type a brand name input field  here')
         
     }
     else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
        fetch(url)
       .then(res=>res.json())
       .then(data=>brandInfo(data.data));
     }
    
 }
    const brandInfo = datas =>{
        // console.log(datas)
    const parent = document.getElementById('card');
    const sliceValue = datas.slice(0,20);
/*     console.log(sliceValue)
 */    if(sliceValue== null){
     document.getElementById('spiner').style.display='block'
 }
 else{
    for(const data of sliceValue){
        //  console.log(data)
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
            <a href="#" class="btn rounded-3  btn-outline-info size"><span  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="detailsProduct('${data.slug}')" id="detail-btn">Details</span></a>
    
            <a href="#" class="btn rounded-3  btn-outline-info size"><span data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="moreProductInfo('${data.slug}')" id="explore-btn">More</span></a>
            </div>
            </div>
            
        </div>
    ` 
        parent.appendChild(div)
        // console.log(data.slug)
        }
 }
 }

//  Info details
     const detailsProduct = (id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>detailsInfo(data))
}
const detailsInfo = (data) =>{
    // console.log(data.data.name)
        const cardDetail = document.getElementById('card-detail');
        const cardDetailDiv = document.createElement('div');
        cardDetailDiv.innerHTML=`<div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${data.data.brand}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card mb-3 border shadow-lg" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-md-4 p-5">
                            <img src="${data.data.image}" class="img-fluid rounded-start " alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h4 class="card-title">${data.data.name}</h4>
                              <p class="card-text size">Storage : ${data.data.mainFeatures.storage}<br>Display : ${data.data.mainFeatures.displaySize}<br>Chipset : ${data.data.mainFeatures.chipSet}<br>Memory : ${data.data.mainFeatures.memory}
                              </p>
                              <p class="card-text"><small class="text-muted">ReleaseDate : ${data.data.releaseDate}</small></p>
                            </div>
                          </div>
                        </div>
                      </div> 
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>`
      cardDetail.appendChild(cardDetailDiv)
     
    
}


// ...............brandInfo........................brandInfo......brandInfo........
const moreProductInfo = (id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>Info(data))
}
const Info = (datas) =>{
        const cardDetail = document.getElementById('card-detail');
        const cardDetailDiv = document.createElement('div');
        // console.log(datas)
        cardDetailDiv.innerHTML=`<div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${datas.data.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
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
                              <br>NFC : ${datas?.data?.others?.NFC}
                              <br>Radio : ${datas?.data?.others?.Radio}
                              <br>Bluetooth : ${datas?.data?.others?.Bluetooth}
                              <br>USB : ${datas?.data?.others?.USB}
                              <br>GPS : ${datas?.data?.others?.GPS}
                              <br>WLAN : ${datas?.data?.others?.WLAN}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div> 
                      
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>`
    
      cardDetail.appendChild(cardDetailDiv)
    
} 

