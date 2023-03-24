const renderItems = (collection) => {
    const collectionList = document.getElementById('collection')
    
	collection.forEach((item) => {
		const listItem = document.createElement('li')

		const address = document.createElement('h2')
		address.innerHTML = item.address
		listItem.appendChild(address)

		const gglImage = document.createElement('iframe')
		gglImage.src = item.iframe
		listItem.appendChild(gglImage)

		// template literals
		const itemDetails =
			`
                <p>Monthly Fee: ${item.monthlyFee}</p>
				<p>Bathroom(s): ${item.bathrooms}</p>
                <p>It's ${item.school} from The New School</p>
				<a href="${item.imdLink}">
					<p>Google Map →</p>
				</a>
                <br>
            `
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



fetch('/jsonpractice/collection.json')
	.then((response) => response.json())
	.then((collection) => {
        renderItems(collection)
    });
