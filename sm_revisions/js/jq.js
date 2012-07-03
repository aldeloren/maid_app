//Javascript 
//navigation
$(document).ready(function() {
$("#schedule").click(function(){if( $("#schedule_nav").is(':hidden')) {$("#employees_nav, #reports_nav").hide();$("#schedule_nav").show();}else {$("#schedule_nav").hide();}});
$("#employees").click(function(){if( $("#employees_nav").is(':hidden')) {$("#schedule_nav, #reports_nav").hide();$("#employees_nav").show();}else {$("#employees_nav").hide();}});
$("#reports").click(function(){if( $("#reports_nav").is(':hidden')) {$("#schedule_nav, #employees_nav").hide();$("#reports_nav").show();}else {$("#reports_nav").hide();}});

//toggle calendar options (add_appointment.html)
$("#daily_calendar_show_options").click(function(){
	$("#daily_calendar_options").slideToggle("fast");
	});
//toggle full form (add_appointment.html)
$("#drop_form").click(function(){
	$("#drop").slideToggle("fast");
	});
$("#anthony_full").click(function(){
	$("#hidden_scores").slideToggle("fast");
	});
});
//drag and drop functionality
function allowDrop(ev){
ev.preventDefault();}
function drag(ev){ev.dataTransfer.setData("Text",ev.target.id);}
function drop(ev){ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}