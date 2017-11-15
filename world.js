// JavaScript File
$(document).ready(function() {
  
  let searchBtn = $('#lookup');
  let query =$('#country');
  let result = $('#result');
  
  $('#searchAll');
  
  searchBtn.click(function(){
  	let Sdata ='';
  	if($('#all')[0].checked){
  		Sdata = { q: "true"};
  	}else{
  		Sdata = { q: query.val()}
  	}
  	
    $.ajax({
      type: 'GET',
      url: 'world.php',
      data: Sdata,
      success: function(data){
        result.html(data);
      }
    })
  })

/*	srchAllBtn.click(function(){
		$.ajax({
			type: 'GET',
			url: 'world.php',
			data:{q: '&all=true'},
			success: function(data){
				result.html("");
				result.append('<ol></ol>');
				$(data).find('definition').each(function(){
					var Response = '<h3>'+$(this).find("name").text()+'</h3>';
					Response += '<p>'+$(this).find("meaning").text()+'</p>';
					Response += '<p>'+"-"+$(this).find("author").text()+'</p>';
					$("#result ol").append('<li>'+Response+'</li>');
				});
			}
			
		});
	});*/
})