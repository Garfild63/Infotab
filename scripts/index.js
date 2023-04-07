var data;
var rawFile = new XMLHttpRequest();
rawFile.overrideMimeType('application/json');
rawFile.open('GET', 'api/get_all_sights.php', false);
rawFile.onreadystatechange = function() {
    if (rawFile.readyState == 4 && rawFile.status == 200) {
        data = JSON.parse(rawFile.responseText);
    }
}
rawFile.send(null);

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
        center: [44.68, 37.83],
        zoom: 11
    }, {
        searchControlProvider: 'yandex#search'
    }),
	createMarker = (el) => {
		return new ymaps.Placemark([el.lat, el.lng], {
			hintContent: el.text,
			balloonContent: '<p><h4 align="center">' + el.text + '</h4></p><p>' + el.description + '</p><p>' + el.eng_description + '</p>' +
			(el.old_photo1 ? '<p align="center"><img src="images/' + el.old_photo1 + '" alt="Старое фото 1" width="350px"/></p>' : '') +
			(el.old_photo2 ? '<p align="center"><img src="images/' + el.old_photo2 + '" alt="Старое фото 2" width="350px"/></p>' : '') +
			(el.old_photo3 ? '<p align="center"><img src="images/' + el.old_photo3 + '" alt="Старое фото 3" width="350px"/></p>' : '') +
			(el.photo ? '<p align="center"><img src="images/' + el.photo + '" alt="Фото" width="350px"/></p>' : '')
		}, {
			iconLayout: 'default#image',
            iconImageHref: 'images/Marker.png',
			iconImageSize: [15, 45],
			iconImageOffset: [-7, -22]
		});
	},
	markers = data;
	markers.forEach(el => {
		const marker = createMarker(el);
		myMap.geoObjects.add(marker);
	});
});
