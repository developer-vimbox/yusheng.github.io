var size = 0;
function categories_Education_subzones(feature, value) {
                switch(value) {case "Junior Colleges/Centralised Institute (Excluding Mixed Level Schools)":
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0189655172414,
                  anchor: [5, 5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/education_university.svg"
            })
    })];
                    break;
case "Mixed Level Schools":
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0189655172414,
                  anchor: [5, 5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/background_tilted_square_rounded.svg"
            })
    })];
                    break;
case "Primary Schools (Excluding Mixed Level Schools)":
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0189655172414,
                  anchor: [5, 5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/education_school.svg"
            })
    })];
                    break;
case "Secondary Schools (Excluding Mixed Level Schools)":
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0189655172414,
                  anchor: [5, 5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity_library.svg"
            })
    })];
                    break;
case "":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(207,47,65,1.0)'})})
    })];
                    break;}};
var styleCache_Education_subzones={}
var style_Education_subzones = function(feature, resolution){
    var value = feature.get("q2wHide_level_of_e");
    var style = categories_Education_subzones(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Education_subzones[key]){
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
        styleCache_Education_subzones[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Education_subzones[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};