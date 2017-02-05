var size = 0;
var ranges_MP14_SUBZONE_NO_SEA_PL_svy21 = [[14.000000, 15.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})
    })]],
[15.000000, 16.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,221,240,1.0)'})
    })]],
[16.000000, 18.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(115,179,216,1.0)'})
    })]],
[18.000000, 20.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,121,185,1.0)'})
    })]],
[20.000000, 25.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]]];
var styleCache_MP14_SUBZONE_NO_SEA_PL_svy21={}
var style_MP14_SUBZONE_NO_SEA_PL_svy21 = function(feature, resolution){
    var value = feature.get("q2wHide_WPercent");
    var style = ranges_MP14_SUBZONE_NO_SEA_PL_svy21[0][2];
    for (i = 0; i < ranges_MP14_SUBZONE_NO_SEA_PL_svy21.length; i++){
        var range = ranges_MP14_SUBZONE_NO_SEA_PL_svy21[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MP14_SUBZONE_NO_SEA_PL_svy21[key]){
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
        styleCache_MP14_SUBZONE_NO_SEA_PL_svy21[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MP14_SUBZONE_NO_SEA_PL_svy21[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};