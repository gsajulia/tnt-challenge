const createNewLinks = () => {
    const links = document.getElementsByClassName("anavmfe__accordion__item__name"); 
    let arrayOfNames = [];

    for(let i=0; i<links.length;i++) { //Get the names
        arrayOfNames[i] = links[i].textContent;
    }
    let a, linkText, div;

    const banner = document.getElementById("cat-fran-rows");
    div = document.createElement('div'); //Create a div to wrap elements
    div.id = "wraper-links";
    div.style.flexWrap = "wrap";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.padding = "20px 8px 15px 8px";
    div.style.margin = "0 auto";
    document.body.appendChild(div);
    banner.insertBefore(div, banner.childNodes[0]);
    
    for(let i=(arrayOfNames.length-1); i>=0; i--) { //Insert all link elements
        a = document.createElement('a');
        linkText = document.createTextNode(arrayOfNames[i]);
        a.appendChild(linkText);
        a.title = arrayOfNames[i];
        a.style.padding = "0 10px 5px 0";
        a.href = "https://www.dell.com/en-us/member/shop/dell-laptops/sr/laptops/17-inch?appliedRefinements=15690,16858,15687,15685,15689";
        document.body.appendChild(a);
        div.insertBefore(a, div.childNodes[0]);
    }
}

createNewLinks();