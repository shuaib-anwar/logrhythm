import * as d3 from "d3";
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

import { STUDENTS } from '../../shared/data';

import { map, orderBy, take, find, assign, remove } from 'lodash';

//HomeController.$inject = ['$scope', '$timeout'];

class HomeController {
	constructor(timeout) {
		this.timeout = timeout;

		this.name = "Dashboard";
		this.selectedChartData = { name: null };
		
		this.newItem = {
			name: null,
			sort: ''
		};
		
		this.charts = [{
			id: 1,
			name: 'Top Attendies',
			filter: 'attendence',
			sort: 'desc',
			svg: null,
			selector: 'attendees',
			g: null,
			data: [],
			x: null,
			y: null,
			margin: { top: 20, right: 20, bottom: 30, left: 40 }
		},
		{
			id: 2,
			name: 'Top Score',
			filter: 'score',
			sort: 'desc',
			svg: null,
			selector: 'score',
			g: null,
			data: [],
			x: null,
			y: null,
			margin: { top: 20, right: 20, bottom: 30, left: 40 }
		}];

		this.sortArray = [{
			title: 'Ascending',
			value: 'asc'
	    }, {
			title: 'Decending',
			value: 'desc'
	    }];

		this.charts[0].data = take(orderBy(STUDENTS, ['attendence'], ['desc']), 10);
		this.charts[1].data = take(orderBy(STUDENTS, ['score'], ['desc']), 10);
	}

	$onInit() {
		this.initSvg();
	}

	edit(index) {
		this.selectedChartData = this.charts[index];
	}

	delete(id) {
		remove(this.charts, function(chart) {
		  return chart.id == id;
		});
	}

	addChart() {
		if(this.newItem.name && this.newItem.sort && this.newItem.filter){
			this.charts.push(assign({
				id: Math.floor((Math.random() * 10000) + 1),
				name: 'Top Attendies',
				filter: 'attendence',
				sort: 'desc',
				svg: null,
				selector: this.getClass(),
				g: null,
				data: [],
				x: null,
				y: null,
				data: take(orderBy(STUDENTS, [this.newItem.filter], [this.newItem.sort]), 10),
				margin: { top: 20, right: 20, bottom: 30, left: 40 }
			}, this.newItem));

			this.initSvg();			
		}
	}

	updateChart(data, sort) {
		var chart = find(this.charts, function(chart) { return chart.id == data.id; });

		assign(chart, data);

		chart.data = take(orderBy(STUDENTS, [chart.filter], [data.sort]), 10);
		
		this.initSvg();
	}

	initSvg() {
		var self = this;

		this.timeout(function() {
			map(self.charts, function(chart) {
				d3.select(`svg.${chart.selector}`).selectAll("g").remove();
				// Init SVG
				chart.svg = d3.select(`svg.${chart.selector}`);
			    chart.width = + chart.svg.attr("width") - chart.margin.left - chart.margin.right ;
			    chart.height = +chart.svg.attr("height") - chart.margin.top - chart.margin.bottom;
			    chart.g = chart.svg.append("g")
		            .attr("transform", "translate(" + chart.margin.left + "," + chart.margin.top + ")");
				
				//Init Axis
				chart.x = d3Scale.scaleBand().rangeRound([0, chart.width]).padding(0.1);
				chart.y = d3Scale.scaleLinear().rangeRound([chart.height, 0]);
				chart.x.domain(chart.data.map((d) => d.name));
				chart.y.domain([0, d3Array.max(chart.data, (d) => {
					//console.log(d.attendence)
					return d.attendence;
				})]);
				
				//Draw Axis
				chart.g.append("g")
					.attr("class", "axis axis--x")
					.attr("transform", "translate(0," + chart.height + ")")
					.call(d3Axis.axisBottom(chart.x));
				
				chart.g.append("g")
					.attr("class", "axis axis--y")
					.call(d3Axis.axisLeft(chart.y).ticks(5, "%"))
					.append("text")
					.attr("class", "axis-title")
					.attr("transform", "rotate(-90)")
					.attr("y", 6)
					.attr("dy", "0.71em")
					.attr("text-anchor", "end")
					.text("attendence");

		    	//drawBars
		    	chart.g.selectAll(".bar")
					.data(chart.data)
					.enter().append("rect")
					.attr("class", "bar")
					.attr("x", (d) => chart.x(d.name) )
					.attr("y", (d) => chart.y(d.attendence) )
					.attr("width", chart.x.bandwidth())
					.attr("height", (d) => chart.height - chart.y(d.attendence) );
			})
			
		}, 0);

	}

	getClass() {
	    var text = "";
	    var possible = "abcdefghijklmnopqrstuvwxyz";

	    for( var i=0; i < 5; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return `chart-${text}`;
	}
}

HomeController.$inject = ["$timeout"];

export default HomeController;