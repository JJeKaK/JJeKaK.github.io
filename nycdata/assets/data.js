const dataUrl = 'https://data.cityofnewyork.us/resource/3nja-bsch.json'

fetch(dataUrl + '?$limit=100')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })