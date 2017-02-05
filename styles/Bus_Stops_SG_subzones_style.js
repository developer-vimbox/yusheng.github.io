var size = 0;

var styleCache_Bus_Stops_SG_subzones={}
var style_Bus_Stops_SG_subzones = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0120689655172,
                  anchor: [3, 3],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/transport_bus_station.svg"
            })
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Bus_Stops_SG_subzones[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_Bus_Stops_SG_subzones[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Bus_Stops_SG_subzones[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};