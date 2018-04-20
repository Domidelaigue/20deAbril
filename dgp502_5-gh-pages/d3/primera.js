var data;
 var trabajos = [
    {name:'Agua',porcent:4},
    {name:'Energía electrica',porcent:5},
    {name:'Reparación',porcent:9},
    {name:'Transporte marítimo', porcent:37},
   
   ];

var w = 450;
var h = 450;
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","black");

 d3.selectAll('circle')
    .data(trabajos)
    .attr('fill','black')
    .attr('r', function(d) {
      return d.porcent * 1.5;
    })

 d3.selectAll('text')
    .data(trabajos)
    .attr('fill','#D6083E')                      
    .text(function(d) {
      return ". " + d.name;
    });