function generateImg() {
    fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((response) => {
        const cuteUrl = response.image;

        const imgElement = document.createElement("img");
        imgElement.src = cuteUrl;
        imgElement.addEventListener("load", function() {
            console.log("image finished loading");
        })

        const divElement = document.querySelector("div");
        divElement.appendChild(imgElement);
    })
}

function loadHandler() {
    generateImg();
}

window.addEventListener("load", loadHandler);

