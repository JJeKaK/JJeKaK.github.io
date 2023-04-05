const renderItems = (collection) => {
    const collectionList = document.getElementById('movieReview')
    
	collection.forEach((item) => {
		const listItem = document.createElement('li')

		const name = document.createElement('h1')
		name.innerHTML = item.name
		listItem.appendChild(name)

		// const gglImage = document.createElement('iframe')
		// gglImage.src = item.iframe
		// listItem.appendChild(gglImage)

		const itemDetails =
			`
                <p>Released date: ${item.released}</p>
				<p>Genre: ${item.genre}</p>
                <p>Tomatometer: ${item.Tomatometer}</p>
                <p>AudienceScore: ${item.AudienceScore}</p>
                <p>${item.review1}</p>
                <p>${item.review1trans}</p>
                <p>${item.review2}</p>
                <p>${item.review2trans}</p>
                <p>${item.review3}</p>
                <p>${item.review3trans}</p>
                <br>
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