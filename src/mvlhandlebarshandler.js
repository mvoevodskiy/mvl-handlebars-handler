const MVLoaderBase = require('mvloader/src/mvloaderbase');
const Handlebars = require('handlebars');
const helpers = require('handlebars-helpers');

class Mvlhandlebarshandler extends MVLoaderBase {

    constructor (...config) {
        super(...config);
        this.HB = Handlebars;
        this.Helpers = helpers({handlebars: this.HB});

    }

    render = (template, params) => this.HB.compile(template)(params);

}

module.exports = Mvlhandlebarshandler;