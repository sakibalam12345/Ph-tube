const categorieshandler = async () =>{
const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
const data = await response.json()
const alldata = data.data

btnhandler(alldata)
// console.log(alldata)
}
function btnhandler(data){ 
    data.forEach(element => {
        console.log(element)
        const cardfield = document.getElementById('button-container')
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
        <button onclick="cardhandler('${element.category_id}')" type="button" class="bg-[#25252526] px-3 py-1 rounded-md">${element.category}</button>  
    </div>
        `;
        cardfield.appendChild(div)
    });
    // console.log(data)
}

function cardhandler(id){
    console.log(id)

}




categorieshandler()