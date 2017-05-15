var prepositions = ["amid","as","at","atop","but","by","down","for","from","in","into","like","near","next","of","off","on","onto","over","past","per","plus","save","than","till","to","unto","up","upon","via","with"]

var articles = ["the","a","an"];

var co_junct = ["for","and","nor","but","or","yet","so"]; 

function changedata(){
	var string = document.getElementById("text").value;
	clipboard.copy(capitalize(string));
}

function capitalize(string){

	var words = string.split(" ");

	var resultstring = ""

	//First and last letter capitilization
	words[0] = capitalizeFirstLetter(words[0]);
	words[words.length-1] = capitalizeFirstLetter(words[words.length-1]);

	for(var i = 0;i<=words.length-1;i++){
		if(i==0 || i==words.length-1){
			if(i==0){
				resultstring += capitalizeFirstLetter(words[0])+" ";
			}
			else if(i==words.length-1){
				resultstring += capitalizeFirstLetter(words[words.length-1]);
			}
		}
		else if(prepositions.indexOf(words[i]) != -1){
			resultstring += lowerFirstLetter(words[i])+" ";
		}
		else if(articles.indexOf(words[i]) != -1){
			resultstring += lowerFirstLetter(words[i])+" ";
		}
		else if(co_junct.indexOf(words[i]) != -1){
			resultstring += lowerFirstLetter(words[i])+" ";
		}
		else{
			resultstring += capitalizeFirstLetter(words[i])+" ";
		}
	}
	return(resultstring);

}

function changedataforkey(){
	if(event.keyCode == 13){
		changedata();
	}
}

window.onload = function(){
	document.getElementById("text").focus();
	document.getElementById("text").addEventListener("keypress",changedataforkey,false);
	document.getElementById("text").addEventListener("keyup",preview,false);
}

function capitalizeFirstLetter(word){
	var result = "";
	for(var i = 0;i<=word.length-1;i++){
		if(i==0){
			result += word[i].charAt(0).toUpperCase();
		}
		else{
			result += word[i];
		}
	}
	return result;
}

function lowerFirstLetter(word){
	var result = "";
	for(var i = 0;i<=word.length-1;i++){
		if(i==0){
			result += word[i].charAt(0).toLowerCase();
		}
		else{
			result += word[i];
		}
	}
	return result;
}

function preview(e){
	//if(e.keyCode == 32){
	var string = document.getElementById("text").value;
	var restring = capitalize(string);
	document.getElementById("preview").value = restring;
	//}

}
