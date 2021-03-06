(function() {

    angular.module('app').filter('myNiceDate', myNiceDate);

    function myNiceDate (moment) {
        'ngInject';
        return function(input, format) {
            if (format == null) {
                format = 'MMMM Do YYYY, h:mm';
            }
            return moment(input).format(format);
        };
    }
})();