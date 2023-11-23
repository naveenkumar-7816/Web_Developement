
(function(){
var names=["john", "Naik", "Ram", "Jony", "Vicky","Jocky","Neeraj","Nani","jackow"];

for(var i=0;i<names.length;i++){
var filterName=names[i].charAt(0).toLowerCase();
if(filterName === 'j'){
    byeSpeaker(names[i]);
}
else
{
    helloSpeaker(names[i]);

}

}
})();

