const renderItems = (movieReviews) => {
    const movieReviewsList = document.getElementById('movieReviews')
    
	movieReviews.forEach((movie) => {
		const movieList = document.createElement('li')

		// const gglImage = document.createElement('iframe')
		// gglImage.src = item.iframe
		// movieList.appendChild(gglImage)

		const movieDescription =
			`
                <h1>Title: ${movie.name}</h1>
                <p>Released date: ${movie.released}</p>
				<p>Genre: ${movie.genre}</p>
                <p>Tomatometer: ${movie.Tomatometer}</p>
                <p>AudienceScore: ${movie.AudienceScore}</p>
                <p>${movie.review1}</p>
                <p>${movie.review1trans}</p>
                <p>${movie.review2}</p>
                <p>${movie.review2trans}</p>
                <p>${movie.review3}</p>
                <p>${movie.review3trans}</p>
                <br>
            `
		movieList.insertAdjacentHTML('beforeend', movieDescription)

		movieReviewsList.appendChild(movieList)
	})
}



fetch('/reviewmuseum/collection.json')
	.then((response) => response.json())
	.then((movieReviews) => {
        renderItems(movieReviews)
    });