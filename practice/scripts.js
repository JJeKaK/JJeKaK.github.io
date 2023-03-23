let icons = [
    {name:"animation", url:"/icons/animation.jpeg"},
    {name:"gallery", url:"/icons/gallery.jpeg"},
    {name:"inpraiseofshadows", url:"/icons/inpraiseofshadows.png"},
    {name:"reponsive", url:"/icons/reponsive.jpeg"},
    {name:"reviewmuseum", url:"/icons/reviewmuseum.jpg"},
    {name:"songlist", url:"/icons/songlist.webp"},
    {name:"stilllife", url:"/icons/stilllife.jpg"},
    {name:"storytime", url:"/icons/storytime.png"},
    {name:"stylizedsonglist", url:"/icons/stylizedsonglist.jpg"},
    {name:"tableofcontents", url:"/icons/tableofcontents.png"}
]

function generateImages (icons) {

    const icon = document.createElement("img")
    icon.src = icons.url
    icon.classList.add("gallery-img")

    //create paragraph element
    const paragraph = document.createElement("p")
    //change the innerHTML of the paragraph to the sign names
    paragraph.innerHTML = icons.name

    const galleryItem = document.createElement("div")
    galleryItem.appendChild(icon)
    //add the paragraph into the galleryItem div
    galleryItem.appendChild(paragraph)

    document.querySelector(".gallery").appendChild(galleryItem)

}

icons.forEach(generateImages)