var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var lyr_TIN_RSSI0 = new ol.layer.Image({
                            opacity: 1,
                            title: "TIN_RSSI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TIN_RSSI0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [300, 300],
                                imageExtent: [-13892360.568404, 6300979.690356, -13891562.963635, 6302158.241046]
                            })
                        });var format_DataPoints1 = new ol.format.GeoJSON();
var features_DataPoints1 = format_DataPoints1.readFeatures(geojson_DataPoints1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataPoints1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DataPoints1.addFeatures(features_DataPoints1);var lyr_DataPoints1 = new ol.layer.Vector({
                source:jsonSource_DataPoints1, 
                style: style_DataPoints1,
                title: "Data Points"
            });

lyr_TIN_RSSI0.setVisible(true);lyr_DataPoints1.setVisible(true);
var layersList = [baseLayer,lyr_TIN_RSSI0,lyr_DataPoints1];
lyr_DataPoints1.set('fieldAliases', {'Signal (dBm)': 'Signal (dBm)', 'DL Speed (Mbps)': 'DL Speed (Mbps)', 'UL Speed (Mbps)': 'UL Speed (Mbps)', });
lyr_DataPoints1.set('fieldImages', {'Signal (dBm)': 'TextEdit', 'DL Speed (Mbps)': 'TextEdit', 'UL Speed (Mbps)': 'TextEdit', });
lyr_DataPoints1.set('fieldLabels', {'Signal (dBm)': 'inline label', 'DL Speed (Mbps)': 'inline label', 'UL Speed (Mbps)': 'inline label', });
lyr_DataPoints1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});