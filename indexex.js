


$(document).ready(() => {
	
	
	/*
	$.LoadingOverlay("show");
  	 $(".container").LoadingOverlay("show");
  	 $.LoadingOverlay("hide");
  	 $(".container").LoadingOverlay("hide");
  	 
  	$(".container").LoadingOverlay("show", {

  	  // Background
  	  background              : "rgba(255, 255, 255, 0.8)",
  	  backgroundClass         : "",
  	  // Image
  	  image                   : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxlbGxpcHNlIHJ4PSI4MCIgcnk9IjgwIiBjeD0iNTAwIiBjeT0iOTAiLz48ZWxsaXBzZSByeD0iODAiIHJ5PSI4MCIgY3g9IjUwMCIgY3k9IjkxMCIvPjxlbGxpcHNlIHJ4PSI4MCIgcnk9IjgwIiBjeD0iOTAiIGN5PSI1MDAiLz48ZWxsaXBzZSByeD0iODAiIHJ5PSI4MCIgY3g9IjkxMCIgY3k9IjUwMCIvPjxlbGxpcHNlIHJ4PSI4MCIgcnk9IjgwIiBjeD0iMjEyIiBjeT0iMjEyIi8+PGVsbGlwc2Ugcng9IjgwIiByeT0iODAiIGN4PSI3ODgiIGN5PSIyMTIiLz48ZWxsaXBzZSByeD0iODAiIHJ5PSI4MCIgY3g9IjIxMiIgY3k9Ijc4OCIvPjxlbGxpcHNlIHJ4PSI4MCIgcnk9IjgwIiBjeD0iNzg4IiBjeT0iNzg4Ii8+PC9zdmc+",
  	  image <a href="https://www.jqueryscript.net/animation/">Animation</a>          : "2000ms rotate_right",
  	  imageAutoResize         : true,
  	  imageResizeFactor       : 1,
  	  imageColor              : "#202020",
  	  imageClass              : "",
  	  imageOrder              : 1,
  	  // Font Awesome
  	  fontawesome             : "",
  	  fontawesomeAutoResize   : true,
  	  fontawesomeResizeFactor : 1,
  	  fontawesomeColor        : "#202020",
  	  fontawesomeOrder        : 2,
  	  // Custom
  	  custom                  : "",
  	  customAnimation         : false,
  	  customAutoResize        : true,
  	  customResizeFactor      : 1,
  	  customOrder             : 3,
  	  // Text
  	  text                    : "",
  	  textAnimation           : false,
  	  textAutoResize          : true,
  	  textResizeFactor        : 0.5,
  	  textColor               : "#202020",
  	  textClass               : "",
  	  textOrder               : 4,
  	  // Progress
  	  progress                : false,
  	  progressAutoResize      : true,
  	  progressResizeFactor    : 0.25,
  	  progressColor           : "#a0a0a0",
  	  progressClass           : "",
  	  progressOrder           : 5,
  	  progressFixedPosition   : "",
  	  progressSpeed           : 200,
  	  progressMin             : 0,
  	  progressMax             : 100,
  	  // Sizing
  	  size                    : 50,
  	  maxSize                 : 120,
  	  minSize                 : 20,
  	  // Misc
  	  direction               : "column",
  	  fade                    : [400, 200],
  	  resizeInterval          : 50,
  	  zIndex                  : 2147483647

  	});
   	
   	*/
	
	

	// $('input').inputSearch();
	/* $('#tags').inputSearch({
		    onClear() {
		      console.log('@onClear');
		    },
		  });*/
	 
	 
	getAllDetailsex();
	/*
	    var availableTags = [
	      "ActionScript",
	      "AppleScript",
	      "Asp",
	      "BASIC",
	      "C",
	      "C++",
	      "Clojure",
	      "COBOL",
	      "ColdFusion",
	      "Erlang",
	      "Fortran",
	      "Groovy",
	      "Haskell",
	      "Java",
	      "JavaScript",
	      "Lisp",
	      "Perl",
	      "PHP",
	      "Python",
	      "Ruby",
	      "Scala",
	      "Scheme"
	    ];
	    $( "#tags" ).autocomplete({
	      source: availableTags
	    
	  } );
		 
	*/
	
});



let getAllDetailsex = () =>{
	
	
	 $.ajax({
	        type: 'GET',
	        dataType: 'json',
	        async: true,
	        url: 'https://www.omdbapi.com/?i=tt3896198&apikey=3f0e323e',

	       
	       /* $("#tags").inputSearch({
				   searchIconVisible: true
				 });*/
			 
	        
	        success: (response) => {
	        	
	        	
	        	
	        	var availableMovies = [response.Title];
	        	var availableyear = [response.Year];
	        	var availableimdb = [response.imdbID];
	        	var img = [response.Poster];
	        	//alert(availableMovies);
	        	//alert(img);
	        	$(".card-img-top").attr("src",img);
	        	
	        	$( "#tagsex" ).autocomplete({
	      	      source: availableMovies
	      	    
	      	  } );
	        	
	        	$( "#tags1ex" ).autocomplete({
		      	      source: availableyear
		      	    
		      	  } );
	        	
	        	$( "#tags2ex" ).autocomplete({
		      	      source: availableimdb
		      	    
		      	  } );
	        	
	        	
	        	
	        	$("#buttonex").click(function(){
	        		
	        		//$.LoadingOverlay("show");
	        	  	 //$(".container").LoadingOverlay("show");
	        		//$(".card-img-top").attr("src",img);
	        		var movies = $('#tagsex').val();
	        		var year = $('#tags1ex').val();
	        		var imdb = $('#tags2ex').val();
	        		
	        		
	        		
	        	  	$.LoadingOverlay("hide");
	        	  	 $(".container").LoadingOverlay("hide");
	        	  	 
	        	  	$(".container").LoadingOverlay("show", {

	        	  	  // Background
	        	  	  background              : "rgba(255, 255, 255, 0.8)",
	        	  	  backgroundClass         : "",
	        	  	  // Image
	        	  	  image                   : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxlbGxpcHNlIHJ4PSI4MCIgcnk9IjgwIiBjeD0iNTAwIiBjeT0iOTAiLz48ZWxsaXBzZSByeD0iODAiIHJ5PSI4MCIgY3g9IjUwMCIgY3k9IjkxMCIvPjxlbGxpcHNlIHJ4PSI4MCIgcnk9IjgwIiBjeD0iOTAiIGN5PSI1MDAiLz48ZWxsaXBzZSByeD0iODAiIHJ5PSI4MCIgY3g9IjkxMCIgY3k9IjUwMCIvPjxlbGxpcHNlIHJ4PSI4MCIgcnk9IjgwIiBjeD0iMjEyIiBjeT0iMjEyIi8+PGVsbGlwc2Ugcng9IjgwIiByeT0iODAiIGN4PSI3ODgiIGN5PSIyMTIiLz48ZWxsaXBzZSByeD0iODAiIHJ5PSI4MCIgY3g9IjIxMiIgY3k9Ijc4OCIvPjxlbGxpcHNlIHJ4PSI4MCIgcnk9IjgwIiBjeD0iNzg4IiBjeT0iNzg4Ii8+PC9zdmc+",
	        	  	 // image <a href="https://www.jqueryscript.net/animation/">Animation</a>          : "2000ms rotate_right",
	        	  	  imageAutoResize         : true,
	        	  	  imageResizeFactor       : 1,
	        	  	  imageColor              : "#202020",
	        	  	  imageClass              : "",
	        	  	  imageOrder              : 1,
	        	  	  // Font Awesome
	        	  	  fontawesome             : "",
	        	  	  fontawesomeAutoResize   : true,
	        	  	  fontawesomeResizeFactor : 1,
	        	  	  fontawesomeColor        : "#202020",
	        	  	  fontawesomeOrder        : 2,
	        	  	  // Custom
	        	  	  custom                  : "",
	        	  	  customAnimation         : false,
	        	  	  customAutoResize        : true,
	        	  	  customResizeFactor      : 1,
	        	  	  customOrder             : 3,
	        	  	  // Text
	        	  	  text                    : "",
	        	  	  textAnimation           : false,
	        	  	  textAutoResize          : true,
	        	  	  textResizeFactor        : 0.5,
	        	  	  textColor               : "#202020",
	        	  	  textClass               : "",
	        	  	  textOrder               : 4,
	        	  	  // Progress
	        	  	  progress                : false,
	        	  	  progressAutoResize      : true,
	        	  	  progressResizeFactor    : 0.25,
	        	  	  progressColor           : "#a0a0a0",
	        	  	  progressClass           : "",
	        	  	  progressOrder           : 5,
	        	  	  progressFixedPosition   : "",
	        	  	  progressSpeed           : 200,
	        	  	  progressMin             : 0,
	        	  	  progressMax             : 100,
	        	  	  // Sizing
	        	  	  size                    : 50,
	        	  	  maxSize                 : 120,
	        	  	  minSize                 : 20,
	        	  	  // Misc
	        	  	  direction               : "column",
	        	  	  fade                    : [400, 200],
	        	  	  resizeInterval          : 50,
	        	  	  zIndex                  : 2147483647

	        	  	});
	        		
	        	  	$(".container").delay(2000).show(function(){
	        	  		//$(".container").delay(3000).show();
	        	  		$.LoadingOverlay("hide");
		        	  	 $(".container").LoadingOverlay("hide");
	        	  	});
	        	  	
if(movies==availableMovies && year=="" && imdb==""){	
		        		
		        		//alert("inside the if"+year);
		        		$(".display").addClass("display1");
		        		$(".remove").show();
		        	
		        		
		        		$(".card-img-top").attr("src",img);
		        		
		        		$(".card-title").text(availableMovies);
		        		$(".card-text").html('<p class="fontcolor">Actors: <b class="fontcolor1">'+response.Actors+'</b></p>');
	        	  	  
	        	  	    $(".collapse .card-body").html('<p class="fontcolor">Director: <b class="fontcolor1">'+response.Director+'</b></p>');
	        	  	  
	        	  	}
	        	  	
	        	  	else if(movies=="" && year==availableyear && imdb==""){
	        	  		
	        	  		//alert("inside the if"+year);
		        		$(".display").addClass("display1");
		        		$(".remove").show();
		        	
		        		
		        		$(".card-img-top").attr("src",img);
		        		
		        		$(".card-title").text(availableMovies);
		        		$(".card-text").html('<p class="fontcolor">Year: <b class="fontcolor1">'+response.Year+'</b></p>'+
		        				'<p class="fontcolor">Released: <b class="fontcolor1">'+response.Released+'</b></p>');
		        	//	$(".card-text").html('<p class="fontcolor">Released: <b class="fontcolor1">'+response.Released+'</b></p>');
	        	  	    $(".collapse .card-body").html('<p class="fontcolor">Runtime: <b class="fontcolor1">'+response.Runtime+'</b></p>');
	        	  		
	        	  	}
	        	  	
	        	  	
                 else if(movies=="" && year=="" && imdb==availableimdb){
	        	  		
	        	  		//alert("inside the if"+year);
		        		$(".display").addClass("display1");
		        		$(".remove").show();
		        	
		        		
		        		$(".card-img-top").attr("src",img);
		        		
		        		$(".card-title").text(availableMovies);
		        		$(".card-text").html('<p class="fontcolor">imdbID: <b class="fontcolor1">'+response.imdbID+'</b></p>'+
		        				'<p class="fontcolor">imdbRating: <b class="fontcolor1">'+response.imdbRating+'</b></p>');
		        	//	$(".card-text").html('<p class="fontcolor">Released: <b class="fontcolor1">'+response.Released+'</b></p>');
	        	  	    $(".collapse .card-body").html('<p class="fontcolor">imdbVotes: <b class="fontcolor1">'+response.imdbVotes+'</b></p>');
	        	  		
	        	  	}
	        	  	
	        	  	
	        	  	  
                 else if(movies==availableMovies && year==availableyear && imdb==""){	
		        		
		        		//alert("inside the if"+year);
		        		$(".display").addClass("display1");
		        		$(".remove").show();
		        	
		        		
		        		$(".card-img-top").attr("src",img);
		        		
		        		$(".card-title").text(availableMovies);
		        		$(".card-text").html('<p class="fontcolor">year: <b class="fontcolor1">'+response.Year+'</b></p>'+
		        				'<p class="fontcolor">Released: <b class="fontcolor1">'+response.Released+'</b></p>'+
		        				'<p class="fontcolor">Actors: <b class="fontcolor1">'+response.Actors+'</b></p>'
		        		         );
	        	  	  
	        	  	    $(".collapse .card-body").html('<p class="fontcolor">Director: <b class="fontcolor1">'+response.Director+'</b></p>'+
		        				'<p class="fontcolor">Runtime: <b class="fontcolor1">'+response.Runtime+'</b></p>');
	        	  	  
	        	  	}
	        	  	
	        	  	
                 else if(movies==availableMovies && year=="" && imdb==availableimdb){	
		        		
		        		//alert("inside the if"+year);
		        		$(".display").addClass("display1");
		        		$(".remove").show();
		        	
		        		
		        		$(".card-img-top").attr("src",img);
		        		
		        		$(".card-title").text(availableMovies);
		        		$(".card-text").html('<p class="fontcolor">imdbID: <b class="fontcolor1">'+response.imdbID+'</b></p>'+
		        				'<p class="fontcolor">imdbRating: <b class="fontcolor1">'+response.imdbRating+'</b></p>'+
		        				'<p class="fontcolor">Actors: <b class="fontcolor1">'+response.Actors+'</b></p>'
		        		         );
	        	  	  
	        	  	    $(".collapse .card-body").html('<p class="fontcolor">Director: <b class="fontcolor1">'+response.Director+'</b></p>'+
		        				'<p class="fontcolor">imdbVotes: <b class="fontcolor1">'+response.imdbVotes+'</b></p>');
	        	  	  
	        	  	}
	        	  	
	        	  	
                 else if(movies=="" && year==availableyear && imdb==availableimdb){	
		        		
		        		//alert("inside the if"+year);
		        		$(".display").addClass("display1");
		        		$(".remove").show();
		        	
		        		
		        		$(".card-img-top").attr("src",img);
		        		
		        		$(".card-title").text(availableMovies);
		        		$(".card-text").html('<p class="fontcolor">imdbID: <b class="fontcolor1">'+response.imdbID+'</b></p>'+
		        				'<p class="fontcolor">imdbRating: <b class="fontcolor1">'+response.imdbRating+'</b></p>'+
		        				'<p class="fontcolor">Year: <b class="fontcolor1">'+response.Year+'</b></p>'
		        		         );
	        	  	  
	        	  	    $(".collapse .card-body").html('<p class="fontcolor">Released: <b class="fontcolor1">'+response.Released+'</b></p>'+
		        				'<p class="fontcolor">imdbVotes: <b class="fontcolor1">'+response.imdbVotes+'</b></p>');
	        	  	  
	        	  	}
	        	  	
	        	  	
                 else if(movies==availableMovies && year==availableyear && imdb==availableimdb){	
                	 
                	 //alert("inside the if"+year);
		        		$(".display").addClass("display1");
		        		$(".remove").show();
		        	
		        		
		        		$(".card-img-top").attr("src",img);
		        		
		        		$(".card-title").text(availableMovies);
		        		$(".card-text").html('<p class="fontcolor">imdbID: <b class="fontcolor1">'+response.imdbID+'</b></p>'+
		        				'<p class="fontcolor">imdbRating: <b class="fontcolor1">'+response.imdbRating+'</b></p>'+
		        				'<p class="fontcolor">Year: <b class="fontcolor1">'+response.Year+'</b></p>'+
		        				'<p class="fontcolor">Actors: <b class="fontcolor1">'+response.Actors+'</b></p>'
		        		         );
	        	  	  
	        	  	    $(".collapse .card-body").html('<p class="fontcolor">Released: <b class="fontcolor1">'+response.Released+'</b></p>'+
		        				'<p class="fontcolor">imdbVotes: <b class="fontcolor1">'+response.imdbVotes+'</b></p>'+
		        				'<p class="fontcolor">Director: <b class="fontcolor1">'+response.Director+'</b></p>'
	        	  	              );
	        	  	
                 }
	        	  	
	        	  	
	        	  	else {
	        			$(".display").addClass("display1");
	        			
	        			$(".remove").hide();
	        			
	        			//alert("inside the else");
	        			$(".card-img-top").attr("src","icon_no_result.jpg");
	        			//$(".card-title").empty();
	        			$(".card-title").text("search for more specific movies");
	        		//	$(".display").removeClass("display1");
	        			//alert("wrong");
	        		}
        	  
	        	});
	        		
	        	
	        	
	        	
	        	
	        }, error: (err) => {

	            console.log(err.responseJSON.error.message);
	            alert(err.responseJSON.error.message);

	        }
	 });
	
}







