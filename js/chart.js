$(function () {

	$('#sendbtn').click(function() {
		var value = $('#lynx_ticker').val().trim().toLowerCase();
		var ticker = value.toUpperCase()

		var string = 'https://www.highcharts.com/samples/data/jsonp.php?filename=' + value +
			'-c.json&callback=?';


		$.getJSON(string, function (data) {

			if (data == null) {
				alert('Ticker ' + ticker + ' not found');
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
	                data: 
	        });
		});
    });   


});

