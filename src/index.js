import  Navbar from "./navigationbar.js";
import { getdata , fetchdata } from "./api.js";

const navbar = Navbar();
const container = document.getElementById('nav');
container.innerHTML = navbar;


function searchData(){
    const container = document.getElementById("container");
    const input_value = document.getElementById("input").value;
    let listData = getdata(`https://api.unsplash.com/search/photos?query=${input_value}&client_id=vx7cOCWaGDkTrIFX5G8SGBORyfLbunFBOZshxFMyvBA&per_page=20`)
     
    listData.then ((res) => {
        fetchdata(res,container)
    })
}
const search = document.getElementById('search');
search.addEventListener('click',searchData);