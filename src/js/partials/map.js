ymaps.ready(function () {
	var myMap = new ymaps.Map('map-1', {
				center: [55.812595,37.633248],
				zoom: 16
			}, {
				searchControlProvider: 'yandex#search'
			}),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Я тутачки ))1))',
				balloonContent: 'Я тутачки ))1))'
			}, {
				iconLayout: 'default#image',
				/*iconImageHref: 'img/map-icon-g.png',*/
				/*iconImageSize: [25, 94],*/
				iconImageOffset: [0, 0]
			});

	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
	myMap.behaviors.disable('drag');
});