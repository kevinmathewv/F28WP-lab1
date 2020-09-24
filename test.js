//This is a test js file
const person=prompt("Please enter your name","your name");
if (person==null||person==""){
	txt="User cancelled the prompt";
}else{
txt="Hello"+person+"! How are you today?";
}
window.alert(txt);