
 
 const allBrand = () =>{
    //  document.getElementById('card').innerHTML='';
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
            div?.classList?.add('col-sm-1', 'col-md-4', 'col-lg-4')
            div.innerHTML=` <div class="card shadow-lg p-1 border-size " style="width: 20rem;">
            <img src="${data.image}" class="card-img-top p-4  " alt="...">
            <div class="card-body">
                <h5 class="card-title ">Brand : ${data.brand}<br>Phone name : ${data.phone_name}</h5>
                <p class="card-text text-normal">Get a touch Brand new Phone here and adjust new trand in your life style
                </p>
            
                <div class="d-flex d-lg-flex justify-content-between">
                <a href="#" class="btn rounded-3  btn-outline-info size"><span  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="detailsProduct('${data.slug}')" id="detail-btn">Detail</span>
                </a>
    
                <a href="#" class="btn rounded-3  btn-outline-info size"><span data-bs-toggle="modal"               data-bs-target="#staticBackdrop" onclick="moreProductInfo('${data.slug}')" id="explore-btn">More</span>
                </a>
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
        cardDetail.innerHTML=''
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
                              <p class="card-text size">

                              <table class="table table-info table-sm">
                              <tbody>
                                <tr>
                                  <th scope="row">Storage</th>
                                  <td> ${data.data.mainFeatures.storage}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Display</th>
                                  <td>${data.data.mainFeatures.displaySize}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Chipset</th>
                                  <td>${data.data.mainFeatures.chipSet}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Memory</th>
                                  <td>${data.data.mainFeatures.memory}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Release Date</th>
                                  <td>${data?.data?.releaseate ? data?.data?.releaseate :'Not found' }</td>
                                </tr>
                              </tbody>
                            </table>
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
        const cardDetail = document.getElementById('card-detail')
        
        const cardDetailDiv = document.createElement('div');
        // console.log(datas)
        cardDetailDiv.innerHTML=`<div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${datas.data.brand}</h5>
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
                              <p class="card-text size">

                              <table class="table table-info table-sm">
                              <tbody>
                                <tr>
                                  <th scope="row">Sensors</th>
                                  <td> ${datas.data.mainFeatures.sensors[0]}, 
                                  ${datas.data.mainFeatures.sensors[1]}, ${datas.data.mainFeatures.sensors[2]}, 
                                  ${datas.data.mainFeatures.sensors[3]}</td>
                                </tr>
                                <tr>
                                  <th scope="row">NFC</th>
                                  <td>${datas?.data?.others?.NFC ? datas?.data?.others?.NFC : 'Not found'}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Radio</th>
                                  <td>${datas?.data?.others?.Radio ? datas?.data?.others?.Radio: 'Not found'}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Bluetooth</th>
                                  <td>${datas?.data?.others?.Bluetooth ? datas?.data?.others?.Bluetooth :'Not found'}</td>
                                </tr>
                                <tr>
                                  <th scope="row">USB</th>
                                  <td>${datas?.data?.others?.USB ? datas?.data?.others?.USB : 'Not found'}</td>
                                </tr>
                                <tr>
                                  <th scope="row">GPS</th>
                                  <td>${datas?.data?.others?.GPS ? datas?.data?.others?.GPS : 'Not found'}</td>
                                </tr>
                                <tr>
                                  <th scope="row">WLAN</th>
                                  <td>${datas?.data?.others?.WLAN ? datas?.data?.others?.WLAN : 'Not found'}</td>
                                </tr>
                              </tbody>
                            </table>
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

