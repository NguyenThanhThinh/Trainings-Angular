(function () {
    function myController() {
        var $self = this;
        $self.items = [
            { title: 'Banh beo', quantity: 8, price: 24000 },
            { title: 'Banh xeo', quantity: 1, price:30000  },
            { title: 'Banh chuoi', quantity: 5, price: 36000 }
        ];
        $self.remove = function (index) {
            $self.items.splice(index, 1);
        }
        $self.Total = function () {
            let total = 0;
            let len = $self.items.length;
            for (let i = 0; i < len; i++) {
                total += $self.items[i].price * $self.items[i].quantity;
            }
            return total;
        }
    };
    angular.module('home',[]).controller('myController', ['$scope', myController]);
})();