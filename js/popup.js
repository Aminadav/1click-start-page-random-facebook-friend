$('body').addClass('wide').append($('<div class="grant-perm">' + chrome.i18n.getMessage('request_permission_explain') + '<button type="button" class="grant-permission-butt">' + chrome.i18n.getMessage('request_permission_button') + '</button></div>'))
$('.grant-permission-butt').click(function(){
requestPermissions(function(){
    $('.grant-perm').remove();
    $('body').append($('<div>').text( chrome.i18n.getMessage('before_friends_saving')));
    setTimeout(function(){
    	chrome.runtime.sendMessage({action: "getFriends"});   
        window.close();
    },3000);

    });
});


function requestPermissions(callback){
    chrome.permissions.request({ origins: ['https://*.facebook.com/*']},function(status){
    if(status){
        callback();
    }
    else{
        alert('Cant apply random friends without permissions')
    }
    });
}