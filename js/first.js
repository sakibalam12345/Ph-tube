const categorieshandler = async () =>{
const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
const data = await response.json()
const alldata = data.data

btnhandler(alldata)
// console.log(alldata)
}
function btnhandler(data){ 
    data.forEach(element => {
        // console.log(element)
        const btnfield = document.getElementById('button-container')
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
        <button onclick="cardhandler('${element.category_id}')" type="button" class="bg-[#25252526] px-3 py-1 rounded-md">${element.category}</button>  
    </div>
        `;
        btnfield.appendChild(div)
    });
    // console.log(data)
}

const cardhandler = async (id) =>{
    const cardfield = document.getElementById('card-container');
cardfield.innerHTML = '';
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await response.json()
    const carddata = data.data;
    console.log(carddata)
    const card2field = document.getElementById('card-container2')
    if(carddata.length === 0){

        card2field.classList.remove('hidden')
      
    }else{
        card2field.classList.add('hidden')
        
    } 
    carddata.forEach(category => {
      

        console.log(category)
const div = document.createElement('div')
div.innerHTML = `
<div>
<div class="  ">
<div>
<img class="w-full h-72 rounded-lg" src="${category.thumbnail}" alt="Shoes" /></div>
    
    <div class=" flex items-center justify-around gap-1 mt-4">
        <div>
            <img class ="w-16 h-16 rounded-[40px]" src="${category.authors[0].profile_picture}" alt="">
        </div>
        <div>
            <h2 class="card-title">${category.title}</h2>
            <div class="flex gap-2">
                <div>
                    <p>${category.authors[0].profile_name}</p>
                </div>
                <div>
                <p>${category.authors[0].verified ? '<i class="fa-solid fa-circle-check"></i>' : ''}</p>
                </div>
            </div>
            
            <p>${category.others.views} views</p>
        </div>     
    </div>
  </div>
</div>
`;
cardfield.appendChild(div);
       
    })


}

categorieshandler()
cardhandler('1000')
