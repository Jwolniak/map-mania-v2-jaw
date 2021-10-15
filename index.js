var myMap;

var myLocations = [
    {content:'Cancun, Mexico', coordinates:{lat:21.1619, lng:-86.8515}, iconImagePath:"flag.png"},
    {content:'Merryville, IN - Albanese Candy Factory', coordinates:{lat:41.4703, lng:-87.2700}, iconImagePath:"flag.png"},
    {content:'Grand Rapids, MI - Frederik Meijer Gardens', coordinates:{lat:42.9795, lng:-85.5856}, iconImagePath:"flag.png"},
    {content:'Portage, MI', coordinates:{lat:42.2012, lng:-85.5800}, iconImagePath:"flag.png"},
    {content:'Puerto Morelos, Mexico', coordinates:{lat:20.8478, lng:-86.8755}, iconImagePath:"flag.png"},
    {content:'Romeoville, IL - Lewis', coordinates:{lat:41.6675, lng:-88.0895}, iconImagePath:"flag.png"},
    {content:'Rhinelander, WI', coordinates:{lat:45.6366,lng:-89.4121}, iconImagePath:"flag.png"},
    {content:'Orland Park, IL', coordinates:{lat:41.6303, lng:-87.8539}, iconImagePath:"flag.png"},
    {content:'#2: Runaway Bay, Jamaica', coordinates:{lat:18.4563,lng:-77.3267}, iconImagePath:"two.png"},
    {content:'#1: Crestwood,IL - My hometown', coordinates:{lat:41.6611, lng:-87.7526}, iconImagePath:"one.png"},
];

var locationIndex = 1;
var currentLocation = myLocations[locationIndex];
var score = 0;

function initApplication() {
    console.log("Welcome to Map Mania!");
}
function initMap() {
    window.alert("Hello! Welcome to Jacob's Map Mania game! Here you will try to figure out\nmy 10 favorite places that I have been to. You can zoom in by double clicking on the map.\nHints will be given if you move away from the place you are looking for. There is a cheat code\nthat will give you an automatic win. Click on the Winner button to win.\nClick on the OK button when you are ready to begin.");
    hint = "All of my favorite places are located in North America.";
    myMap = new google.maps.Map(document.getElementById("myMapID"), {
        center: {lat: 0, lng: 0},
        zoom: 4,
    });
    
    var marker = new google.maps.Marker({position:{lat:18.4563,lng:-77.3267}, map:myMap});

    var marker2 = new google.maps.Marker({position:{lat:45.6366,lng:-89.4121}, map:myMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Rhinelander, WI'});
    marker2.addListener('click', function() {
        infoWindow.open(myMap, marker2);
    });

    google.maps.event.addListener(myMap, 'idle', function() {
        updateGame()
    });
}

function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = myMap.getZoom();
    var inBounds= false;
    var loc1 = new google.maps.LatLng(45.6366, -89.4121);
    if (myMap.getBounds().contains(currentLocation)) {
        inBounds = true;
    }
    if (inBounds == true && zoomLevel == 12){
        score = score + 1;
    }
    if (score == 10){
        window.alert("Congratulations! You have found my favorite places!");
    }
    console.log("inbounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function setHint(hint){
    document.getElementById("hint").value = hint;
}

function setScore() {
    document.getElementById("score").value = score;
}

function winningScore() {
    score = 10;
}