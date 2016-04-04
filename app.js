var express = require('express');
var path = require('path');
var tilestrata = require('tilestrata');
var disk = require('tilestrata-disk');
var mapnik = require('tilestrata-mapnik');
var dependency = require('tilestrata-dependency');

var strata = tilestrata();
var app = express();

// define layers
strata.layer('hillshade')
    .route('shade.png')
        .use(disk.cache({dir: './tiles/shade/'}))
        .use(mapnik({
            pathname: './styles/hillshade.xml',
            tileSize: 256,
            scale: 1
        }));
strata.layer('dem')
    .route('dem.png')
        .use(disk.cache({dir: './tiles/dem/'}))
        .use(mapnik({
            pathname: './styles/dem.xml',
            tileSize: 256,
            scale: 1
        }));
strata.layer('sim1')
    .route('sim1.png')
        .use(disk.cache({dir: './tiles/sim1/'}))
        .use(mapnik({
            pathname: './styles/sim1.xml',
            tileSize: 256,
            scale: 1
        }));
strata.layer('sim2')
    .route('sim2.png')
        .use(disk.cache({dir: './tiles/sim2/'}))
        .use(mapnik({
            pathname: './styles/sim2.xml',
            tileSize: 256,
            scale: 1
        }));
strata.layer('sim3')
    .route('sim3.png')
        .use(disk.cache({dir: './tiles/sim3/'}))
        .use(mapnik({
            pathname: './styles/sim3.xml',
            tileSize: 256,
            scale: 1
        }));
strata.layer('slope')
    .route('slope.png')
        .use(disk.cache({dir: './tiles/slope/'}))
        .use(mapnik({
            pathname: './styles/slope.xml',
            tileSize: 256,
            scale: 1
        }));

var staticPath = path.resolve(__dirname, './public/');
app.use(express.static(staticPath));
app.use(tilestrata.middleware({
	server: strata,
	prefix: ''
}));

app.listen(8080, function() {
  console.log('Express server running on port 8080.');
});
