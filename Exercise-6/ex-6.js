const moveImage = () => {
    const offering = document.getElementById("solncat-offering");
    const hero = document.getElementById("solncat-hero");
    offering.insertBefore(hero, offering.childNodes[0]);
}

moveImage();