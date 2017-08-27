(function () {
    function MoviesController() {
        this.favorites = [{
            title: 'The Shawshank Redemption',
            year: '1994',
            popular: false,
            category:'A'
        }, {
            title: 'Inception',
            year: '2010',
            popular: false,
            category: 'B'
        }, {
            title: 'The Matrix',
            year: '1999',
            popular: false,
            category: 'C'
        }, {
            title: 'Saving Private Ryan',
            year: '1998',
            popular: false,
            category: 'D'
        }];
    }

    angular
        .module('app')
        .controller('MoviesController', MoviesController);
})();