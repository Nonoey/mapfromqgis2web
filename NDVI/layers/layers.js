var wms_layers = [];


        var lyr_StamenToner_0 = new ol.layer.Tile({
            'title': 'Stamen Toner',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
            })
        });
var lyr_SAVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SAVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SAVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11061510.000000, 2003109.332072, 11193300.000000, 2135453.285755]
                            })
                        });
var lyr_ndvi_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11061510.000000, 2003109.332072, 11193300.000000, 2135453.285755]
                            })
                        });

lyr_StamenToner_0.setVisible(true);lyr_SAVI_1.setVisible(true);lyr_ndvi_2.setVisible(true);
var layersList = [lyr_StamenToner_0,lyr_SAVI_1,lyr_ndvi_2];
