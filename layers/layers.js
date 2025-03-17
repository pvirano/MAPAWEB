var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_coord_tranformadaUTM_1 = new ol.format.GeoJSON();
var features_coord_tranformadaUTM_1 = format_coord_tranformadaUTM_1.readFeatures(json_coord_tranformadaUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coord_tranformadaUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_tranformadaUTM_1.addFeatures(features_coord_tranformadaUTM_1);
cluster_coord_tranformadaUTM_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_coord_tranformadaUTM_1
});
var lyr_coord_tranformadaUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_coord_tranformadaUTM_1, 
                style: style_coord_tranformadaUTM_1,
                popuplayertitle: 'coord_tranformadaUTM',
                interactive: true,
                title: '<img src="styles/legend/coord_tranformadaUTM_1.png" /> coord_tranformadaUTM'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_coord_tranformadaUTM_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_coord_tranformadaUTM_1];
lyr_coord_tranformadaUTM_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunt': 'T_pregunt', 'N°_Preg_I': 'N°_Preg_I', 'N°_Preg_C': 'N°_Preg_C', 'Porc_corr': 'Porc_corr', 'Porc_incor': 'Porc_incor', 'Porc_Tot': 'Porc_Tot', 'Preg_incor': 'Preg_incor', 'video': 'video', 'Nombre': 'Nombre', });
lyr_coord_tranformadaUTM_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_pregunt': 'TextEdit', 'N°_Preg_I': 'TextEdit', 'N°_Preg_C': 'TextEdit', 'Porc_corr': 'TextEdit', 'Porc_incor': 'TextEdit', 'Porc_Tot': 'TextEdit', 'Preg_incor': 'TextEdit', 'video': 'ExternalResource', 'Nombre': 'TextEdit', });
lyr_coord_tranformadaUTM_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_pregunt': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N°_Preg_C': 'inline label - always visible', 'Porc_corr': 'inline label - visible with data', 'Porc_incor': 'inline label - always visible', 'Porc_Tot': 'inline label - always visible', 'Preg_incor': 'inline label - always visible', 'video': 'inline label - always visible', 'Nombre': 'inline label - always visible', });
lyr_coord_tranformadaUTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});