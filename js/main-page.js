var profileHref = document.querySelector('[data-click=\"profile_icon\"] a').href,
	friendsProf = profileHref.indexOf('profile.php') > -1 ? profileHref +'&sk=friends' : profileHref + '/friends'
location.href =  friendsProf;