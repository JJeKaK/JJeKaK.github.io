const renderItems = (collection) => {
    const collectionList = document.getElementById('collection')
    
	collection.forEach((item) => {
		const listItem = document.createElement('li') // Make the `li`

		// You can make each element inside of that…
		const address = document.createElement('h2') // Make an `h2`
		address.innerHTML = item.address // Put the JSON title inside
		listItem.appendChild(address) // And add it to the `li`!

		const gglImage = document.createElement('iframe') // And an image
		gglImage.src = item.iframe // Set the `src` attribute from the JSON
		listItem.appendChild(gglImage) // And add that too

		// // This can get annoying, so we can use “template literals” instead
		// const itemDetails =
		// 	`
		// 		<p>Distance from guess: <time>${item.miles}</time> Miles</p>
		// 		<p>Points: <em>${item.points}</em></p>
		// 		<a href="${item.link}">
		// 			<p>${item.number} / 5 →</p>
		// 		</a>
		// 	`
		// listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// // You can build logic from your data, too
		// if (!item.alsoWriter) { // If this is `false`
		// 	listItem.classList.add('faded') // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



fetch('/jsonpractice/collection.json')
	.then((response) => response.json())
	.then((collection) => {
        renderItems(collection)
    });
