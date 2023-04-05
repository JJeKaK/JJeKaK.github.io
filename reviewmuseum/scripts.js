const renderItems = (movieReviews) => {
    const movieReviewsList = document.getElementById('movieReviews')
    
	movieReviews.forEach((movie) => {
		const movieList = document.createElement('li')

		// const gglImage = document.createElement('iframe')
		// gglImage.src = item.iframe
		// movieList.appendChild(gglImage)

		const movieDescription =
			`
                <br>
                <div class="box">
                <h1>${movie.name}</h1>
                <br>
                ${movie.poster}
                <br>
                <p>Released date: ${movie.released}</p>
                <br>
				<p>Genre: ${movie.genre}</p>
                <br>
                <p>Tomatometer: ${movie.Tomatometer}</p>
                <br>
                <p>AudienceScore: ${movie.AudienceScore}</p>
                <br>
                <p>${movie.review1}</p>
                <p>${movie.review1trans}</p>
                <br>
                <p>${movie.review2}</p>
                <p>${movie.review2trans}</p>
                <br>
                <p>${movie.review3}</p>
                <p>${movie.review3trans}</p>
                </div>
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