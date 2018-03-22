const moduleAlias = require('module-alias');
moduleAlias.addAlias('~', __dirname);
require('./server');