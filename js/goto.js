function goTo(){
	var friends = localStorage.getItem('allFriends');
	try{
		friends = JSON.parse(friends);
	}
	catch(e){
		friends = [];
	}
	if(friends.length){
		var friend = friends[Math.floor(Math.random()*friends.length)];
	}
	if(friend){
		location = 'https://www.facebook.com/' + friend;	
	}
	
}
