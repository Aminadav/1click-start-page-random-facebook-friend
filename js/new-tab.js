
let used = localStorage.getItem('already_opened');
used = used ? Number(used) : 0;
used++;
localStorage.setItem('already_opened',used);

if(Number(localStorage.getItem('already_opened')) > 3 && !localStorage.getItem('fired')){
checkIfRankNeededAndAndAddRank(function(){
	localStorage.setItem('fired', 1);
	goTo();
});
}
else{
	goTo();
}
//if user closed window
function afterRemoveRateRequest(){
	goTo();
}