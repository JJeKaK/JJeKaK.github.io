let movieReviews = [
    {name:"Everything Everywhere All at Once", released:"2022", genre:"Comedy / Adventure", Tomatometer:"94%", AudienceScore:"86%"},
    {name:"Get Out", released:"2017", genre:"Horror / Mystery / Thriller", Tomatometer:"98%", AudienceScore:"86%"},
    {name:"Fight Club", released:"1999", genre:"Mystery / Thriller / Drama", Tomatometer:"79%", AudienceScore:"96%"},
    {name:"La La Land", released:"2016", genre:"Musical / Romance", Tomatometer:"91%", AudienceScore:"81%"},
    {name:"Eternal Sunshine", released:"2004", genre:"Romance / Sci-fi", Tomatometer:"92%", AudienceScore:"94%"},
    {name:"Your Name", released:"2016", genre:"Fantasy / Romance", Tomatometer:"98%", AudienceScore:"94%"},
    {name:"Hidden Figures", released:"2016", genre:"History / Drama", Tomatometer:"93%", AudienceScore:"93%"},
    {name:"Mad Max: Fury Road", released:"2015", genre:"Action / Adventure", Tomatometer:"97%", AudienceScore:"86%"},
    {name:"Searching", released:"2018", genre:"Mystery / Thriller", Tomatometer:"92%", AudienceScore:"87%"},
    {name:"Se7en", released:"1995", genre:"Mystery / Thriller / Crime", Tomatometer:"82%", AudienceScore:"95%"},
    {name:"The Imitation Game", released:"2014", genre:"History / Drama", Tomatometer:"90%", AudienceScore:"91%"},
    {name:"Nope", released:"2022", genre:"Sci-fi / Horror", Tomatometer:"83%", AudienceScore:"69%"},
    {name:"Top Gun: Maverick", released:"2022", genre:"Action / Adventure", Tomatometer:"96%", AudienceScore:"99%"},
    {name:"Cruella", released:"2021", genre:"Comedy / Family", Tomatometer:"75%", AudienceScore:"97%"},
    {name:"Minari", released:"2020", genre:"Drama", Tomatometer:"98%", AudienceScore:"86%"}
]

function generateItem (movieReview) {

    // console.log(movieReview)

    // const icon = document.createElement("img")
    // icon.src = icons.url
    // icon.classList.add("gallery-img")

    //create paragraph element
    const heading = document.createElement("h2")
    // change the innerHTML of the paragraph to the sign names
    heading.innerHTML = movieReview.name

    const image = document.createElement("img")
    // change the innerHTML of the paragraph to the sign names
    image.src = movieReview.released
    image.classList.add("whatever")



    const item = document.createElement("li")
    item.appendChild(heading)
    item.appendChild(image)


    document.querySelector(".gallery").appendChild(item)

}

movieReviews.forEach(generateItem)