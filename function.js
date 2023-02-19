function calcStars() {
    const warpperElements = document.querySelectorAll('.wrapper')
    for (let i = 0; i < warpperElements.length; i++) {
        const el = warpperElements[i];
        const starElements = el.querySelectorAll('.fa-star');
        const halfStarElemwnts = el.querySelectorAll('.fa-star-half-o');
        let countDiv = document.createElement("SPAN");
        countDiv.innerHTML = `${starElements.length + halfStarElemwnts.length * 0.5} stars`
        el.appendChild(countDiv);
    }
}                            
calcStars();
