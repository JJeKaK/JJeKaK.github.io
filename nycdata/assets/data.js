const dataUrl = 'https://data.cityofnewyork.us/resource/3nja-bsch.json'

const network = (programs) => {
    let counteeCullenNetwork = 0
    let sewardParkNetwork = 0
    let specialUnit = 0

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
    });

    console.log('Countee Cullen Network: ' + counteeCullenNetwork)
    console.log('Seward Park Network: ' + sewardParkNetwork)
    console.log('Special Unit: ' + specialUnit)

    const networkList = document.getElementsById('networkList')
    programs.forEach(item => {
        const listProgram = document.createElement('li')
        const programDetails =
        `
        <p>${item.data.counteeCullenNetwork}</p>
        <p>${item.data.sewardParkNetwork}</p>
        <p>${item.data.specialUnit}</p>
        `
        listProgram.insertAdjacentHTML('beforeend', programDetails)
        networkList.appendChild(listProgram)
    });
}



fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        network(data)
})