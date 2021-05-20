//OK - review

const changeCategoryName = () => {
    let splittedTitle, li;

    $("#bottomcontent .category-links .category-text-margin ").children().map(function (index, item) {
        if (item.nodeName === "H5") {
            splittedTitle = item.childNodes[3].text.split(" ")[0]; // Get the first name of the H5
        } else if (item.nodeName === "UL") {
            for (let i = 0; i < item.children.length; i++) { // Add the name in each li text
                li = item.children[i];
                li.childNodes[0].text = `${splittedTitle} - ${li.childNodes[0].text}`
           
            }
        }
    
    });
    
}

changeCategoryName();


