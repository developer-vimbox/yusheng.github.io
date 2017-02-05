var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_MP14_SUBZONE_NO_SEA_PL_svy21 = new ol.format.GeoJSON();
var features_MP14_SUBZONE_NO_SEA_PL_svy21 = format_MP14_SUBZONE_NO_SEA_PL_svy21.readFeatures(geojson_MP14_SUBZONE_NO_SEA_PL_svy21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MP14_SUBZONE_NO_SEA_PL_svy21 = new ol.source.Vector();
jsonSource_MP14_SUBZONE_NO_SEA_PL_svy21.addFeatures(features_MP14_SUBZONE_NO_SEA_PL_svy21);var lyr_MP14_SUBZONE_NO_SEA_PL_svy21 = new ol.layer.Vector({
                source:jsonSource_MP14_SUBZONE_NO_SEA_PL_svy21, 
                style: style_MP14_SUBZONE_NO_SEA_PL_svy21,
                title: "MP14_SUBZONE_NO_SEA_PL_svy21"
            });var format_Train_Stations_SG_subzones = new ol.format.GeoJSON();
var features_Train_Stations_SG_subzones = format_Train_Stations_SG_subzones.readFeatures(geojson_Train_Stations_SG_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Train_Stations_SG_subzones = new ol.source.Vector();
jsonSource_Train_Stations_SG_subzones.addFeatures(features_Train_Stations_SG_subzones);var lyr_Train_Stations_SG_subzones = new ol.layer.Vector({
                source:jsonSource_Train_Stations_SG_subzones, 
                style: style_Train_Stations_SG_subzones,
                title: "Train_Stations_SG_subzones"
            });var format_Bus_Stops_SG_subzones = new ol.format.GeoJSON();
var features_Bus_Stops_SG_subzones = format_Bus_Stops_SG_subzones.readFeatures(geojson_Bus_Stops_SG_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_Stops_SG_subzones = new ol.source.Vector();
jsonSource_Bus_Stops_SG_subzones.addFeatures(features_Bus_Stops_SG_subzones);var lyr_Bus_Stops_SG_subzones = new ol.layer.Vector({
                source:jsonSource_Bus_Stops_SG_subzones, 
                style: style_Bus_Stops_SG_subzones,
                title: "Bus_Stops_SG_subzones"
            });var format_Education_subzones = new ol.format.GeoJSON();
var features_Education_subzones = format_Education_subzones.readFeatures(geojson_Education_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_subzones = new ol.source.Vector();
jsonSource_Education_subzones.addFeatures(features_Education_subzones);var lyr_Education_subzones = new ol.layer.Vector({
                source:jsonSource_Education_subzones, 
                style: style_Education_subzones,
                title: "Education_subzones"
            });var format_Coffeeshops_SG_subzones = new ol.format.GeoJSON();
var features_Coffeeshops_SG_subzones = format_Coffeeshops_SG_subzones.readFeatures(geojson_Coffeeshops_SG_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coffeeshops_SG_subzones = new ol.source.Vector();
jsonSource_Coffeeshops_SG_subzones.addFeatures(features_Coffeeshops_SG_subzones);var lyr_Coffeeshops_SG_subzones = new ol.layer.Vector({
                source:jsonSource_Coffeeshops_SG_subzones, 
                style: style_Coffeeshops_SG_subzones,
                title: "Coffeeshops_SG_subzones"
            });var format_Shopping_Malls_SG_subzones = new ol.format.GeoJSON();
var features_Shopping_Malls_SG_subzones = format_Shopping_Malls_SG_subzones.readFeatures(geojson_Shopping_Malls_SG_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shopping_Malls_SG_subzones = new ol.source.Vector();
jsonSource_Shopping_Malls_SG_subzones.addFeatures(features_Shopping_Malls_SG_subzones);var lyr_Shopping_Malls_SG_subzones = new ol.layer.Vector({
                source:jsonSource_Shopping_Malls_SG_subzones, 
                style: style_Shopping_Malls_SG_subzones,
                title: "Shopping_Malls_SG_subzones"
            });

lyr_MP14_SUBZONE_NO_SEA_PL_svy21.setVisible(true);lyr_Train_Stations_SG_subzones.setVisible(true);lyr_Bus_Stops_SG_subzones.setVisible(true);lyr_Education_subzones.setVisible(true);lyr_Coffeeshops_SG_subzones.setVisible(true);lyr_Shopping_Malls_SG_subzones.setVisible(true);
var layersList = [baseLayer,lyr_MP14_SUBZONE_NO_SEA_PL_svy21,lyr_Train_Stations_SG_subzones,lyr_Bus_Stops_SG_subzones,lyr_Education_subzones,lyr_Coffeeshops_SG_subzones,lyr_Shopping_Malls_SG_subzones];
lyr_MP14_SUBZONE_NO_SEA_PL_svy21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Age65+': 'Age65+', 'ATotal': 'ATotal', 'WPercent': 'WPercent', 'Amenities_Shopping Malls': 'Amenities_Shopping Malls', 'Amenities_Education': 'Amenities_Education', 'Amenities_Coffeeshops': 'Amenities_Coffeeshops', 'Amenities_Train Stations': 'Amenities_Train Stations', 'Amenities_Bus Stops': 'Amenities_Bus Stops', });
lyr_Train_Stations_SG_subzones.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STN_NAME': 'STN_NAME', 'STN_NO': 'STN_NO', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Bus_Stops_SG_subzones.set('fieldAliases', {'BUS_STOP_N': 'BUS_STOP_N', 'BUS_ROOF_N': 'BUS_ROOF_N', 'LOC_DESC': 'LOC_DESC', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Education_subzones.set('fieldAliases', {'level_of_e': 'level_of_e', 'school': 'school', 'cluster': 'cluster', 'address': 'address', 'postal_cod': 'postal_cod', 'X-Coordina': 'X-Coordina', 'Y-Coordina': 'Y-Coordina', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Coffeeshops_SG_subzones.set('fieldAliases', {'NAME': 'NAME', 'POSTCODE': 'POSTCODE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'field_5': 'field_5', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Shopping_Malls_SG_subzones.set('fieldAliases', {'NAME': 'NAME', 'POSTCODE': 'POSTCODE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'SUBZONE_N': 'SUBZONE_N', });
lyr_MP14_SUBZONE_NO_SEA_PL_svy21.set('fieldImages', {'OBJECTID': 'Hidden', 'SUBZONE_NO': 'Hidden', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'Hidden', 'CA_IND': 'Hidden', 'PLN_AREA_N': 'Hidden', 'PLN_AREA_C': 'Hidden', 'REGION_N': 'Hidden', 'REGION_C': 'Hidden', 'INC_CRC': 'Hidden', 'FMEL_UPD_D': 'Hidden', 'X_ADDR': 'Hidden', 'Y_ADDR': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Age65+': 'Hidden', 'ATotal': 'Hidden', 'WPercent': 'Hidden', 'Amenities_Shopping Malls': 'TextEdit', 'Amenities_Education': 'TextEdit', 'Amenities_Coffeeshops': 'TextEdit', 'Amenities_Train Stations': 'TextEdit', 'Amenities_Bus Stops': 'TextEdit', });
lyr_Train_Stations_SG_subzones.set('fieldImages', {'OBJECTID': 'Hidden', 'STN_NAME': 'TextEdit', 'STN_NO': 'Hidden', 'SUBZONE_N': 'Hidden', });
lyr_Bus_Stops_SG_subzones.set('fieldImages', {'BUS_STOP_N': 'TextEdit', 'BUS_ROOF_N': 'Hidden', 'LOC_DESC': 'TextEdit', 'SUBZONE_N': 'Hidden', });
lyr_Education_subzones.set('fieldImages', {'level_of_e': 'Hidden', 'school': 'TextEdit', 'cluster': 'Hidden', 'address': 'TextEdit', 'postal_cod': 'TextEdit', 'X-Coordina': 'Hidden', 'Y-Coordina': 'Hidden', 'SUBZONE_N': 'Hidden', });
lyr_Coffeeshops_SG_subzones.set('fieldImages', {'NAME': 'TextEdit', 'POSTCODE': 'TextEdit', 'X-Coord': 'Hidden', 'Y-Coord': 'Hidden', 'field_5': 'Hidden', 'SUBZONE_N': 'Hidden', });
lyr_Shopping_Malls_SG_subzones.set('fieldImages', {'NAME': 'TextEdit', 'POSTCODE': 'TextEdit', 'X-Coord': 'Hidden', 'Y-Coord': 'Hidden', 'SUBZONE_N': 'Hidden', });
lyr_MP14_SUBZONE_NO_SEA_PL_svy21.set('fieldLabels', {'SUBZONE_N': 'inline label', 'Amenities_Shopping Malls': 'inline label', 'Amenities_Education': 'inline label', 'Amenities_Coffeeshops': 'inline label', 'Amenities_Train Stations': 'inline label', 'Amenities_Bus Stops': 'inline label', });
lyr_Train_Stations_SG_subzones.set('fieldLabels', {'STN_NAME': 'inline label', });
lyr_Bus_Stops_SG_subzones.set('fieldLabels', {'BUS_STOP_N': 'inline label', 'LOC_DESC': 'inline label', });
lyr_Education_subzones.set('fieldLabels', {'school': 'inline label', 'address': 'inline label', 'postal_cod': 'inline label', });
lyr_Coffeeshops_SG_subzones.set('fieldLabels', {'NAME': 'inline label', 'POSTCODE': 'inline label', });
lyr_Shopping_Malls_SG_subzones.set('fieldLabels', {'NAME': 'inline label', 'POSTCODE': 'inline label', });
lyr_Shopping_Malls_SG_subzones.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});