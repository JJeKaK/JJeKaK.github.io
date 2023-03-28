const renderItems = (collection) => {

    collection.forEach((item) => {
        const collectionList = document.getElementById('collection')

        const listItem = document.createElement('li')

        const name = document.createElement('h2')
        name.innerHTML = item.name

        const itemDetails =
        `
            ${name}
        `
	listItem.insertAdjacentHTML('beforeend', itemDetails)

    collectionList.appendChild(listItem)
    })
}



fetch('/reviewmuseum/collection.json')
    .then((response) => response.json())
    .then((collection) => {
        renderItems(collection)
    });