t = 0;
var list=new Array();

function popup(x){
	t++;
	alert(x+" "+"times="+t)
}

function popup2(){
	t++;
	var v = document.getElementById('reply').value;
//	document.getElementById('reply').innerHTML = 'new value'
	alert(v+" "+"times="+t)
}

function freds(){
	
	var f = document.getElementById("fred").value;
//	f.lastIndexOf("fred") > -1?alert(f.replace("fred","FRED")+" "+"times="+t):alert(f+"is not contain fred "+"times="+t)
	
	if(f.lastIndexOf("fred") > -1){	
		t++;
		document.getElementById("fred").value = f.replace("fred","FRED");
		alert(" "+"times="+t)
	}else{
		alert(f+" "+"is not contain fred "+"times="+t)
	}

}

function number(){
	document.getElementById("output").innerHTML = "";
	t++;
	for(var i=1;i<11;i++){
		document.getElementById("output").innerHTML += i+" "
	}
}

function number2(){
	document.getElementById("parseInt").innerHTML = "";
	t++;
	var a = document.getElementById("parseint").value;
//	document.getElementById("parseInt").innerHTML = parseInt(a)
	if(isNaN(a)===true){
		alert("Not a valid number: "+a+"times ="+t)
	}else{
//		parseInt(a)
		for(var p=1;p<parseInt(a)+1;p++){
			document.getElementById("parseInt").innerHTML += p+" "
		}
		alert("times ="+t)
	}
	
	
}

function add(){
	t++;
	var ad = document.getElementById("add").value;
	list.push(ad);
	document.getElementById("add").value = "";
	alert("times ="+t)
}

function show(){
	t++;
	document.getElementById("show").innerHTML = "";
	for(var i=0;i<list.length;i++){
		document.getElementById("show").innerHTML += list[i]+" "
	}
	alert("show all"+" "+"times ="+t)
}

function clearall(){
	t++;
//	document.getElementById("show").innerHTML = "wwww"
	list=[];
	alert("clear"+" "+"times ="+t+" "+list)
//	return list
	
}

function delete_last(){
	t++;
		alert(list.pop()+"\n"+"times ="+t)
	
}


originalFont=null;// Global - place to save original
fontChanges = Array();

function setFont(whichFont){
   if (originalFont == null) {
      originalFont = document.body.style.fontFamily;
   }
   document.body.style.fontFamily = whichFont;
   fontChanges.push(whichFont)
}

function showChanges(){
   if (fontChanges.length === 0)
     alert("No changes");
   else {
      s = '';
      for (i=0; i<fontChanges.length; i++) {
        s = s + fontChanges[i] + '<br>';
      document.getElementById('changeList').innerHTML = s
      }
   }
}