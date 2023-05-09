const dataUrl = 'https://data.cityofnewyork.us/resource/3nja-bsch.json'

const graph = document.querySelector('#graph')

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
}

// const aProgramz = (aPrograms) => {
//     let adult_program = 0
//     let young_adult_program = 0
//     let juvenile_program = 0
//     let outreach_services_program = 0

//     aPrograms.forEach(aProgram => {
//         if (aProgram.aProgramz == 'Adult Programs') {
//             adult_program++
//         }
//         else if (aProgram.aProgramz == 'Young Adult Programs') {
//             young_adult_program++
//         }
//         else if (aProgram.aProgramz == 'Juvenile Programs') {
//             juvenile_program++
//         }
//         else if (aProgram.aProgramz == 'Outreach Services Programs') {
//             outreach_services_program++
//         }
//     });

//     console.log('Adult Programs: ' + adult_program)
//     console.log('Young Adult Programs: ' + young_adult_program)
//     console.log('Juvenile Programs: ' + juvenile_program)
//     console.log('Outreach Services Programs: ' + outreach_services_program)
// }



fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        network(data)
})

// fetch(dataUrl)
//     .then(response => response.json())
//     .then(data => {
//         aProgramz(data)
// })
