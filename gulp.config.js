module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var root = './';
    var server = './src/server/';
    var bowerComponents = './bower_components/';
    var build = './build/';

    return {
        client: client,
        server: server,
        root: root,
        build: build,
        deploy: './deploy/',

        allJsFiles: [
            './src/**/*.js',
            './*.js'
        ],
        lessFile: client + 'styles/styles.less',
        index: client + 'index.html',
        indexDev: client + 'index-dev.html',
        js: [
          clientApp + '**/*.module.js',
          clientApp + '**/*.js',
          '!' + clientApp + '**/*.spec.js'
        ],
        css: [
            client + 'css/bootstrap.css',
            client + 'css/styles.css',
            client + 'app/**/*.css'
        ],

        fonts: [
            {from: bowerComponents + 'font-awesome/fonts/*.*', to: build + 'fonts'}
        ],
        images: client + 'images/**/*.*',
        htmlTemplates: clientApp + '**/*.html',

        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app',
                standAlone: false,
                root: 'app/'
            }
        },

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
        * Bower and NPM locations
        */
        wiredepDefaultOptions: {
            bowerJson: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],

        /**
        * Node settings
        */
        defaultPort: 7207,
        nodeServer: server + 'app.js'
    };
};