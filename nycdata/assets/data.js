const dataUrl = 'https://data.cityofnewyork.us/resource/3nja-bsch.json'

const parseData = (programs) => {
    let counteeCullenNetwork = 0
    let sewardParkNetwork = 0
    let specialUnit = 0
    let unknownNetwork = 0

    programs.forEach(program => {
        if (program.network == 'Countee Cullen Network') {
            counteeCullenNetwork++
        }
        else if (program.network == 'Seward Park Network') {
            sewardParkNetwork++
        }
        else if (program.network == 'Special Unit') {
            specialUnit++
        }
        else {
            unknownNetwork++
        }
    });

    console.log('Countee Cullen Network: ' + counteeCullenNetwork)
    console.log('Seward Park Network: ' + sewardParkNetwork)
    console.log('Special Unit: ' + specialUnit)
    console.log('Extra: ' + unknownNetwork)
}



fetch(dataUrl + '?$limit=100')
    .then(response => response.json())
    .then(data => {
        parseData(data)
    })