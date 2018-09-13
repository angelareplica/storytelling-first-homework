/* global d3 */
import * as d3 from 'd3'

(function () {
  // Here is your data
  var countries = [
    {
      name: 'Blahstia',
      continent: 'North America',
      gdp: 40
    },
    {
      name: 'Bleers',
      continent: 'Europe',
      gdp: 12
    },
    {
      name: 'Blolo',
      continent: 'Antarctica',
      gdp: 35
    },
    {
      name: 'Blurben',
      continent: 'North America',
      gdp: 90
    }
  ]

  var widthScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 400])

  var colorScale = d3.scaleOrdinal()
    .domain(['North America', 'Europe', 'Antarctica'])
    .range(['#feebe2', '#fbb4b9', '#f768a1'])

  // Get the svg with the id of 'chart2'
  var svg = d3.select('#chart2')

  svg
    .attr('width', 400)
    .attr('height', 200)

  var height = 50

  // Get the rectangles inside of it
  svg.selectAll('rect')
    .data(countries)
    .attr('height', height)
    .attr('width', function (d) {
      return widthScale(d.gdp)
    })
    .attr('fill', function (d) {
      return colorScale(d.continent)
    })
})()
