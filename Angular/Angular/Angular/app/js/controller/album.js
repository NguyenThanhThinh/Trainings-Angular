(function () {
    function albumController() {
        var $self = this;
        $self.album = [{ name: 'Southwest Serenade', duration: '2:34' },
        { name: 'Northern Light Waltz', duration: '3:21' },
        { name: 'Eastern Tango', duration: '17:45' }];

        $self.menuState = false;
        $self.isDisabled = false;
        $self.toggleMenu = function () {
            $self.menuState = !$self.menuState.show;
        };
        $self.stun = function () {
            // stun the target, then disable menu
            $self.isDisabled = true;
        };
    };

    angular.module('album', []).controller('albumController', ['$scope', albumController]);
})();