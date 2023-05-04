const dataUrl = 'https://data.cityofnewyork.us/resource/3nja-bsch.json'



var width = 600
var height = 600

var svg = d3.select("#dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)

var data = [
  { "name": "A", "group": 1 }, { "name": "B", "group": 1 }, { "name": "C", "group": 1 }, { "name": "D", "group": 1 }, { "name": "E", "group": 1 }, { "name": "F", "group": 1 },
  { "name": "G", "group": 2 }, { "name": "H", "group": 2 }, { "name": "I", "group": 2 }, { "name": "J", "group": 2 }, { "name": "K", "group": 2 }, { "name": "L", "group": 2 },
]

var x = d3.scaleOrdinal()
  .domain([1, 2])
  .range([100, 400]
)

var color = d3.scaleOrdinal()
  .domain([1, 2])
  .range([ "#F8766D", "#00BA38"]
)

var node = svg.append("g")
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
    .attr("r", 29)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .style("fill", function(d){ return color(d.group)})
    .style("fill-opacity", 0.8)
    .attr("stroke", "black")
    .style("stroke-width", 4)
    .call(d3.drag()
         .on("start", dragstarted)
         .on("drag", dragged)
         .on("end", dragended));

var simulation = d3.forceSimulation()
.force("x", d3.forceX().strength(0.5).x( function(d){ return x(d.group) } ))
.force("y", d3.forceY().strength(0.1).y( height/2 ))
.force("center", d3.forceCenter().x(width / 2).y(height / 2))
.force("charge", d3.forceManyBody().strength(1))
.force("collide", d3.forceCollide().strength(.1).radius(32).iterations(1))

simulation
    .nodes(data)
    .on("tick", function(d){
      node
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
    });

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(.03).restart();
  d.fx = d.x;
  d.fy = d.y;
}
function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}
function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(.03);
  d.fx = null;
  d.fy = null;
}