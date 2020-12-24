/*------------------------------------------------------ 
  Skills Doughnut Chart          
-------------------------------------------------------*/

jQuery(document).ready(function($){

    $('.chart').easyPieChart({
        //your configuration goes here
		barColor: '#09F',
		trackColor: '#BBB',
		scaleColor: 'transparent',
		lineCap: 'square',
		lineWidth: '15',
		size: '150',
		animate: 2000
		
	});
	$('.chartM').easyPieChart({
        //your configuration goes here
		barColor: '#3ee5ee',
		trackColor: '#BBB',
		scaleColor: 'transparent',
		lineCap: 'square',
		lineWidth: '15',
		size: '150',
		animate: 2000
		
    });

});