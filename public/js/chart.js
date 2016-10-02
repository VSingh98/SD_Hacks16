$(function () {


	function graph() {
		var value = $('#lynx_ticker').val().trim().toLowerCase();
		var ticker = value.toUpperCase()

		var string = 'https://www.highcharts.com/samples/data/jsonp.php?filename=' + value +
			'-c.json&callback=?';


		$.getJSON(string, function (data) {

			if (data == null) {
				$('#lynx_graph').text('Ticker ' + ticker + ' not found');
				$('#lynx_graph').css("font-size", "20px");
				$('#lynx_graph').effect("shake");
				return;
			}

	        // Create the chart
	        $('#lynx_graph').highcharts('StockChart', {


	            rangeSelector: {
	                selected: 0
	            },

	            title: {
	                text: ticker
	            },

	            tooltip: {
	                style: {
	                    width: '200px'
	                },
	                valueDecimals: 4,
	                shared: true
	            },

	            yAxis: {
	                title: {
	                    text: 'Exchange rate'
	                }
	            },

	            series: [{
	                name: ticker,
	                data: data,
	                id: 'dataseries'

	            // the event marker flags
	            }, {
	                type: 'flags',
	                data: [{
	                    x: Date.UTC(2016, 8, 1),
	                    title: 'iPhone 7',
	                    text: 'iPhone 7 Released in USA'
	                }],
	                onSeries: 'dataseries',
	                shape: 'circlepin',
	                width: 80
	            }]
	        });
		});
    }   

	$('#lynx_ticker').keypress(function(event) {
		if (event.keyCode == 13 || event.which == 13) {
			graph();
		}
	});

	$('#sendbtn').click(graph);


});

