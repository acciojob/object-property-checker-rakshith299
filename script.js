const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  
	let flag = false;
	let ret;
	for(let x in sampleObject){
	  if(x == key){
		  flag = true;
		  ret = true;
		  
	  }
  }

	if(flag == false){
		ret =  false;
	}

	return ret;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
