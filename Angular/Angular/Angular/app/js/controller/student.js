(function () {
    function studentController() {
        var $self = this;
        $self.students = [{ name: 'Mary Contrary', id: '1' },
        { name: 'Jack Sprat', id: '2' },
        { name: 'Jill Hill', id: '3' }];
        $self.insertTom = function () {
            $self.students.splice(0, 0, { name: 'Thinh', id: '4' });
        };
    };
   
    angular.module('student', []).controller('studentController', ['$scope', studentController]);
})();