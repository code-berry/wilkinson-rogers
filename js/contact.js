// Google Map Initialization Function...
// Use vanilla js only
function initMap() {
    // Wilksonson Rogers Coordinates
    var address = {lat: 42.994077, lng: -81.252075};

    // Create map object
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: address});

    // Infobox String
    var contentString = '<div id="siteBox">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Wilkinson Rogers</h1>'+
        '<div id="bodyContent">'+
        '<ul class="infoBox">'+
        '<li><a href="tel:(519) 661-0990">(519) 661-0990</a></li>'+
        '<li>700 Richmond St #214</li>'+
        '<li>London, Ontario Canada</li>'+
        '<li>N6A 5C7</li>'+
        '</ul>'+
        '</div>'+
        '</div>';

    // Infobox object
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Marker object
    var marker = new google.maps.Marker({
        position: address,
        map: map,
        title: 'Wilkinson Rogers LLP'
    });

    // Event Listener
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
