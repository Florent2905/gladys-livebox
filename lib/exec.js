module.exports = function exec(params){
var newState;
    switch(params.deviceType.type){
	  case 'binary':
            power();
    	break;
      	case 'channel':
		var chan_value = params.state.value + "";
			channel(chan_value)
	  	break;
		 case 'ok':
		validate()
		break;
		case 'volup':
		increasevolume()
		break;
		case 'voldown':
		decreasevolume()
		break;
		case 'mute':
		mutevolume()
		break;  }

function power(){
newState = "116";
request(newState);
}
function channel(channel){
switch(channel.length){
			case 1:
			newState = channel + 512;
			request(newState);
			break;
			case 2:
			newState = channel.charAt(0) + 512;
			request(newState);
			newState = channel.charAt(1) + 512;
			request(newState);
			break;
			case 3:
			newState = channel.charAt(0) + 512;
			request(newState);
			newState = channel.charAt(1) + 512;
			request(newState);
			newState = channel.charAt(2) + 512;
			request(newState);
			break;
}	

}
function validate(){
newState = "352";
request(newState);
}
function increasevolume(){
newState = "115";
request(newState);
}
function decreasevolume(){
newState = "114";
request(newState);
}
function mutevolume(){
newState = "113"
request(newState)
}

	function request(key){
gladys.utils.request('http://'+params.deviceType.identifier+':8080/remoteControl/cmd?operation=01key='+key+'&mode=0');
console.log("Commande envoyée sur " + 'http://'+params.deviceType.identifier+':8080/remoteControl/cmd?operation=01key='+key+'&mode=0')
	
}
};
