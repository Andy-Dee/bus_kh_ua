/* Fixed top menu */
$(document).ready(function(){
  
  var third = $(".third-row");
  var thirdInner = $(".third-row-inner");
  var thirdwrap = $(".third-row-wrap");
  var logosmall = $(".logo-top-small");
  var sandwich = $(".sandwich");
  var station = $(".station");
  var stations = $(".stations");
  var date = $(".date-add");
  var passenger = $(".passenger");
  var passengerWrap = $(".passenger-wrap");
  var search = $(".search"); 
  var firstRowWrap = $(".first-row-wrap");
  var secondRowWrap = $(".second-row-wrap");
  var logoTopBig = $(".logo-top-big");
  var tCal = $("#tcal");
  
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && thirdInner.hasClass("third-row-inner") ){
            thirdInner.removeClass("third-row-inner").addClass("third-row-inner-fix");
        } else if($(this).scrollTop() <= 345 && thirdInner.hasClass("third-row-inner-fix")) {
            thirdInner.removeClass("third-row-inner-fix").addClass("third-row-inner");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && third.hasClass("third-row") ){
            third.removeClass("third-row").addClass("third-row-fix");
        } else if($(this).scrollTop() <= 345 && third.hasClass("third-row-fix")) {
            third.removeClass("third-row-fix").addClass("third-row");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && thirdwrap.hasClass("third-row-wrap") ){
            thirdwrap.removeClass("third-row-wrap").addClass("third-row-wrap-fix");
        } else if($(this).scrollTop() <= 345 && thirdwrap.hasClass("third-row-wrap-fix")) {
            thirdwrap.removeClass("third-row-wrap-fix").addClass("third-row-wrap");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && logosmall.hasClass("logo-top-small") ){
            logosmall.removeClass("logo-top-small").addClass("logo-top-small-fix");
        } else if($(this).scrollTop() <= 345 && logosmall.hasClass("logo-top-small-fix")) {
            logosmall.removeClass("logo-top-small-fix").addClass("logo-top-small");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && sandwich.hasClass("sandwich") ){
            sandwich.removeClass("sandwich").addClass("sandwich-fix");
        } else if($(this).scrollTop() <= 345 && sandwich.hasClass("sandwich-fix")) {
            sandwich.removeClass("sandwich-fix").addClass("sandwich");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && station.hasClass("station") ){
            station.removeClass("station").addClass("station-fix");
        } else if($(this).scrollTop() <= 345 && station.hasClass("station-fix")) {
            station.removeClass("station-fix").addClass("station");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && stations.hasClass("stations") ){
            stations.removeClass("stations").addClass("stations-fix");
        } else if($(this).scrollTop() <= 345 && stations.hasClass("stations-fix")) {
            stations.removeClass("stations-fix").addClass("stations");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && date.hasClass("date-add") ){
            date.removeClass("date-add").addClass("date-add-fix");
        } else if($(this).scrollTop() <= 345 && date.hasClass("date-add-fix")) {
            date.removeClass("date-add-fix").addClass("date-add");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && passenger.hasClass("passenger") ){
            passenger.removeClass("passenger").addClass("passenger-fix");
        } else if($(this).scrollTop() <= 345 && passenger.hasClass("passenger-fix")) {
            passenger.removeClass("passenger-fix").addClass("passenger");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && passengerWrap.hasClass("passenger-wrap") ){
            passengerWrap.removeClass("passenger-wrap").addClass("passenger-wrap-fix");
        } else if($(this).scrollTop() <= 345 && passengerWrap.hasClass("passenger-wrap-fix")) {
            passengerWrap.removeClass("passenger-wrap-fix").addClass("passenger-wrap");
        }
    });
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && search.hasClass("search") ){
            search.removeClass("search").addClass("search-fix");
        } else if($(this).scrollTop() <= 345 && search.hasClass("search-fix")) {
            search.removeClass("search-fix").addClass("search");
        }
    });  
  $(window).scroll(function(){
        if ( $(this).width() >= 768 && $(this).scrollTop() > 345 && logoTopBig.hasClass("logo-top-big") ){
            logoTopBig.removeClass("logo-top-big").addClass("logo-top-big-fix");
        } else if($(this).scrollTop() <= 345 && logoTopBig.hasClass("logo-top-big-fix")) {
            logoTopBig.removeClass("logo-top-big-fix").addClass("logo-top-big");
        }
    });
  

  $(window).scroll(function(){
        $(this).width() >= 768 && $(this).scrollTop() <= 345 && firstRowWrap.hasClass("first-row-wrap-fix");
        firstRowWrap.removeClass("first-row-wrap-fix").addClass("first-row-wrap");
        
    });
  $(window).scroll(function(){
        $(this).width() >= 768 && $(this).scrollTop() <= 345 && secondRowWrap.hasClass("second-row-wrap-fix");
        secondRowWrap.removeClass("second-row-wrap-fix").addClass("second-row-wrap");
        
    });


/* Top dropdown menu fixed */
  $('#sandwich').click(function(){
		$('.first-row-wrap').toggleClass('first-row-wrap-fix');
		$('.second-row-wrap').toggleClass('second-row-wrap-fix');		
	});

/* DateTimePicker */
  $('.form_date').datetimepicker({
    language:  'ru',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    maxView: 9,
    forceParse: 0,
    format: 'dd.mm.yyyy'
    });
});

/* Select 2 */
$(document).ready(function() {    
    $('.station').select2({
      allowClear: true,
      multiple: true,
      maximumSelectionLength: 1      
    });
    $('.station-from').select2({
      placeholder: "Откуда",
      maximumSelectionLength: 1,
      allowClear: true,
      multiple: true       
    });
    $('.station-till').select2({
      placeholder: "Куда",
      maximumSelectionLength: 1,
      allowClear: true,
      multiple: true        
    });
});

$(document).ready(function() {
    $('.passenger').select2({
    });
    $('.trip-params-item').select2({
    });
    $('.city').select2({
    });
    $('.street').select2({
    });
    $('.as').select2({
    });
});

/* Laptop top menu */
$(document).ready(function() {
  $('#sandwich-laptop').click(function(){
    $('.top-menu').toggleClass('top-menu-laptop', 3000, 'ease');
    $('.second-row-wrap').toggleClass('second-row-wrap-laptop', 3000, 'ease');
    $('.second-row').toggleClass('second-row-laptop', 3000, 'ease'); 
    $('.top-menu-second').toggleClass('top-menu-second-laptop', 3000, 'ease'); 
    $('.language').toggleClass('language-laptop', 3000, 'ease');
    $('.sandwich-laptop').toggleClass('sandwich-laptop-laptop', 3000, 'ease');    
  });
});

/* Mobile top menu */
$(document).ready(function() {
  $('#sandwich-laptop').click(function(){
    $('.phone').toggleClass('phone-mobile', 3000, 'ease');
    $('.cabinet').toggleClass('cabinet-mobile', 3000, 'ease');
  });
});

/* Accordion in Order */
$(document).ready(function() {
  $('input[name="radios"]').change( function() {    
    if ($('#firstRadio').is(":checked")){
      $('#firstAccordion').collapse('show');
      $('#thirdAccordion').collapse('hide');
      $('#secondAccordion').collapse('hide');    
    } else {      
      $('#firstAccordion').collapse('hide');
    }        
    if ($('#secondRadio').is(":checked")){
      $('#secondAccordion').collapse('show');
      $('#firstAccordion').collapse('hide');
      $('#thirdAccordion').collapse('hide');    
    } else {      
      $('#firstAccordion').collapse('hide');
    }
    if ($('#thirdRadio').is(":checked")){
      $('#thirdAccordion').collapse('show');
      $('#secondAccordion').collapse('hide');
      $('#firstAccordion').collapse('hide');
    } else {      
      $('#firstAccordion').collapse('hide');
    }

  });
});






