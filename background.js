chrome.runtime.onMessage.addListener(function (data, sender, callback) {
	//console.log('data', data);
	switch(data.action){
		//needs permission to do it
		case 'getFriends':
			readFriends();
			break;
		case 'saveFriends':
			localStorage.setItem('allFriends', JSON.stringify(data.allFriends));
			break;
	}
});

var currentTab = null;

function readFriends(){
	//localStorage.setItem('onReadingFriends',1);
	chrome.tabs.create({ url: 'https://www.facebook.com'}, function(tab){
		currentTab = tab;

		chrome.tabs.executeScript(tab.id, {file:"js/main-page.js"});
	});
}

// function onMainPage(){
// 	localStorage.setItem('onReadingFriends',1);
// 	chrome.tabs.create({ url: 'https://www.facebook.com'}, function(tab){
// 		currentTab = tab;
// 		chrome.tabs.executeScript(tab.id, {file:'js/injected-main.js'});
// 	});
// }

chrome.tabs.onUpdated.addListener(function(tabId, change, tab){
	//console.log(tab, change)
	if(currentTab && tabId == currentTab.id && tab.url && (/https:\/\/www.facebook.com\/.+\/friends/.test(tab.url) || /sk=friends/.test(tab.url) )){
		chrome.tabs.executeScript(tab.id, {file:'js/injected-friends.js'});
		//console.log('immmm');
		currentTab = null;
	}
});