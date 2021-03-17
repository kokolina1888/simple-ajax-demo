$('#connect').on('click', function(event){
	//PREVENT BUTTON DEFAULT BEHAVIOUR - TO SUBMIT 
	event.preventDefault()
	 $.ajax({
        url: './connect.php',
        type: 'get',
        // data: 'search=' + strSearch,
        dataType: 'json',      
        success: function( response ) {
        	console.log( response );
        	if( !$('#connect').hasClass('connected') ){
        		console.log( 'Connected' )
        		$('#connect').text('Disconnect').addClass('connected');
        		//by adding class can control what to happen - change the button text or do something the way we want
        	} else {
        		$('#connect').text('Connect').removeClass('connected');
        		console.log( 'disonnected' )
        	}

        },
        error: function( xhr, ajaxOptions, thrownError ) {
          console.log( thrownError )             
        }
    });
})
$('#refresh').on('click', function(event){
	//PREVENT BUTTON DEFAULT BEHAVIOUR - TO SUBMIT 
	event.preventDefault()
	 $.ajax({
        url: './refresh.php',
        type: 'get',//or post if you send params or data tro DB
        // data: 'search=' + strSearch,
        dataType: 'json', //because of the response we espect in json format, can be html, ...     
        success: function( response ) {
        	console.log( response );
        	if( !$('#refresh').hasClass('refreshed') ){
        		console.log( 'refreshed' )
        		$('#refresh').text('REFRESHED').addClass('refreshed').css({
        			background: '#2104FA',
        			color: '#fff'
        		});
        		//by adding class can control what to happen - change the button text or do something the way we want
        	} else {
        		$('#refresh').text('Refresh').removeClass('refreshed').css({
        			background: '#ccc',
        			color: '#000'
        		});;
        		console.log( 'refresh' )
        	}

        },
        error: function( xhr, ajaxOptions, thrownError ) {
          console.log( thrownError )             
        }
    });
})