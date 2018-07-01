scrollToFriends = setInterval(function(){
	window.scrollTo(0,document.body.scrollHeight);
	var loader = document.querySelectorAll('[id^="collection_wrapper"] > div > img');

	if(!loader.length){
		clearInterval(scrollToFriends);
		getAllFriends();
	}
},1000);

function getAllFriends(){

	var all = document.querySelectorAll('.uiProfileBlockContent [data-hovercard]'),
		find = /user\.php\?id\=\d+/;
		allFriends = [];
	for(let prof of all){
		var newId = prof.getAttribute('data-hovercard').match(find);
		newId = newId  && newId[0] ? newId[0].replace(/\D/g,'') : '';
		if(newId){

			allFriends.push(newId);
		}

	}
	console.log(allFriends);
	chrome.runtime.sendMessage({action: "saveFriends", "allFriends": allFriends});   
}
