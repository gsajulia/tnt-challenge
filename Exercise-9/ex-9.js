const categoryStyle = () => {
    $(".quick-link a").click(function (e) { e.preventDefault(); }); //Prevent page from redirecting

    document.querySelectorAll('.quick-link .quick-links-outer-container .row').forEach((item, index) => {
        for (let i = 0; i < item.children.length; i++) {
            item.children[i].addEventListener('click', () => {
                //select the row children and verify if is the first(left), second(center) or third(right)
                if (i === 0) {
                    $("*[data-testid=category_module_section] .half-image-module").css('background', 'purple');
                } else if (i === 1) {
                    $("*[data-testid=category_module_section] .half-image-module").css('background', 'green');
                } else {
                    $("*[data-testid=category_module_section] .half-image-module").css('background', 'orange');
                }
            })
        }
    })
}

const convertNetworkImages = () => {
    document.querySelectorAll('*[data-testid=category_module_section]').forEach((item, index) => {
        if (item.textContent.includes("Cameras, Photo & Video")) {
            cameras = item.querySelectorAll('img'); //Get all camera images

            document.querySelectorAll('*[data-testid=category_module_section]').forEach((itemj, index) => {
                if (itemj.textContent.includes("Networking")) {
                    networking = itemj.querySelectorAll('img'); //Get reference of networking images
                    for(let i=1; i<networking.length;i++) {
                        networking[i].src = cameras[i].src; // Replace networking images to camera images
                    }
                }
            })
        }
    })
}

const sumPrices = () => {
    document.querySelectorAll('*[data-testid=category_module_section]').forEach((item) => {
        if (item.textContent.includes("Power, Batteries & Adapters")) { //Get referece of Power section
            const power = item.querySelectorAll('.half-hero-pricing'); //Get the string that shows the price
            var sum=0;
            for(let i=0; i<power.length;i++) {
                sum = sum + parseFloat(power[i].textContent.split("$")[1].split("\\")[0]); //Convert to float and sum the values
            }
            alert(sum);
        }
    })
}

/* 1 */
categoryStyle();
/* 2 */
convertNetworkImages();
/* 3 */
sumPrices();