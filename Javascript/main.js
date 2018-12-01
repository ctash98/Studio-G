//CHEAT Functions
var state = ""

function hideButtons() {
	document.getElementById('buttons').style.display = "none";
}
function showButtons() {
	document.getElementById('buttons').style.display = "block";	
}
function hideMap() {
		document.getElementById('map-Scene').style.display = "none";
}
function showMap() {
		document.getElementById('map-Scene').style.display = "block";
}
function showBattle() {
		document.getElementById('battle-Scene').style.display = "block";
}
function hideBattle() {
		document.getElementById('battle-Scene').style.display = "none";
}
function hideDebug() {
	document.getElementById('cheats').style.display = "none";
}
function showDebug() {
	document.getElementById('cheats').style.display = "block";	
}

function stateManager() {
	if (state == "menu-scene") {
		showButtons();
		hideBattle();
		hideMap();
	} else if (state == "map-scene") {
		hideButtons();
		hideBattle();
		showMap();
		
		var context1 = document.getElementById('map').getContext('2d');
		mapGame.run(context1);
		
	} else if (state == "battle-scene") {
		hideButtons();
		showBattle();
		hideMap();
		document.getElementById("start").click();
		resizeCanvas();
		/*
		var context2 = document.getElementById('battle').getContext('2d');
		battleGame.run(context2);
		*/
	} else if (state == "Zilch") {
		showButtons();
		hideMap();
		hideBattle();
		hideDebug();
	} else if (state == "Debug") {
		showButtons();
		showMap();
		showBattle();
		showDebug();
	
	}else {
	console.log("error 404")
	}
}

function changeState(newState) {
	state = newState;
	stateManager();
}

function initialize() {
	document.getElementById("start").click();
}
		

window.onload = function () {
	changeState('menu-scene');
	hideDebug();
};


