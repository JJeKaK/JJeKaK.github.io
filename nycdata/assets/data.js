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

graph.style.setProperty('--counteeCullenNetwork', counteeCullenNetwork)
graph.style.setProperty('--sewardParkNetwork', sewardParkNetwork)
graph.style.setProperty('--specialUnit', specialUnit)
}

fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        network(data)
})



fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        const totalPrograms = data[42];
        const adultProgram = totalPrograms.adult_program;
        const youngAdultProgram = totalPrograms.young_adult_program;
        const juvenileProgram = totalPrograms.juvenile_program;
        const outreachServices = totalPrograms.outreach_services_program;

        var xValues = ["Adult Program", "Young Adult Program", "Juvenile Program", "Outreach Services"];
        var yValues = [adultProgram, youngAdultProgram, juvenileProgram, outreachServices];
        var barColors = ["#F84D61", "#59F7DA", "#B5E046", "#FFB653"];

        new Chart("totalPrograms", {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    borderColor: "lightgray",
                    data: yValues
                }]
            },
            options: {
                legend: {
                    position: "bottom"
                }
            }
        });
})



fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        const totalAttendance = data[42];
        const adultAttendance = totalAttendance.adult_attendance;
        const youngAdultAttendance = totalAttendance.young_adult_attendance;
        const juvenileAttendance = totalAttendance.juvenile_attendance;
        const outreachAttendance = totalAttendance.outreach_services_attendance;

        var xAttendance = ["Adult Program Attendance", "Young Adult Program Attendance", "Juvenile Program Attendance", "Outreach Services Attendance"];
        var yAttendance = [adultAttendance, youngAdultAttendance, juvenileAttendance, outreachAttendance];
        var barColors = ["#F84D61", "#59F7DA", "#B5E046", "#FFB653"];

        new Chart("totalAttendance", {
            type: "pie",
            data: {
                labels: xAttendance,
                datasets: [{
                    backgroundColor: barColors,
                    borderColor: "lightgray",
                    data: yAttendance
                }]
            },
            options: {
                legend: {
                    position: "bottom"
                }
            }
        });
})



