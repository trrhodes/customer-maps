var size = 0;

var styleCache_DataPoints1={}
var style_DataPoints1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(239,255,11,1.0)'})})
    })];
    if (feature.get("Signal (dBm)") !== null) {
        var labelText = String(feature.get("Signal (dBm)"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_DataPoints1[key]){
        var text = new ol.style.Text({
              font: '20.8px \'.SF NS Text\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
              stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 0
              }),
            });
        styleCache_DataPoints1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_DataPoints1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};