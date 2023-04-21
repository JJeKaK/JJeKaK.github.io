const dataUrl = 'https://data.cityofnewyork.us/resource/3nja-bsch.json'

const parseData = (programs) => {
    let counteeCullenNetwork = 0
    let sewardParkNetwork = 0
    let specialUnit = 0
    let unknownNetwork = 0

    programs.forEach(program => {
        if (program.network == 'Countee Cullen Network') {
            counteeCullenNetwork = counteeCullenNetwork + 1
        }
        else if (program.network == 'Seward Park Network') {
            sewardParkNetwork = sewardParkNetwork + 1
        }
        else if (program.network == 'Special Unit') {
            specialUnit = specialUnit + 1
        }
        else {
            unknownNetwork = unknownNetwork + 1
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