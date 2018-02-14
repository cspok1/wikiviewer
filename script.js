var counter = -1;




function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var responseJSON = JSON.parse(this.response);

    	counter++;
    	    		document.getElementById("searchbtn").innerHTML="Clear"

    	console.log(counter)
    	if(counter>0){
    		reload()
    	}
    	
    			
    	
    		console.log(responseJSON.query.pages);

    		var result = responseJSON.query.pages

    		var wiki = "http://en.wikipedia.org/?curid="

    		

    		for (i in result){
    			var a = result[i].pageid;
    			var div = document.getElementById("results");
    			var newDiv = document.createElement("div");
    			var link = document.createElement("a")
    			link.setAttribute('href', "http://en.wikipedia.org/?curid="+a);
    			var des = document.createElement("p");

    			

    			
    			link.innerHTML = result[i].title;
    			des.innerHTML = result[i].extract;

    			
    			newDiv.appendChild(link);
    			newDiv.appendChild(des);
    			div.appendChild(newDiv);


    			


    			
    		}


    }

 function reload(){

					window.location.reload(true);

 }

    
  };
  xhttp.open("GET", "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch="+document.getElementById("searchbox").value, true);
  xhttp.send();
}
