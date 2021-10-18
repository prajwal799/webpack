export async function getdata(url){
    const data = await fetch(url);
    const list = await data.json();
    return list.results; 
}

var array =[];

export function fetchdata( d,container){
    container.innerHTML = "";
    let div = document.createElement("div");
   d.forEach( ({urls,alt_description}) => {  
       const img = document.createElement("img");
       img.src = urls.raw;
       img.style.width= "350px";
       img.style.height = "350px";
       img.className = "imageList";
       const value = alt_description;
       console.log(value);
       img.addEventListener('click',pop.bind(value));
       

       div.append(img);
       
   })
   container.append(div);
}

const pop = function(value){

    console.log(value,"jsak");
    alert(value);
}
export default {getdata,fetchdata}