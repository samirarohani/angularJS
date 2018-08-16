app.controller('myController', function ($scope, $http) {
    $http.get("https://api.myjson.com/bins/1fjxze")
        .then(function (response) {
            $scope.results = response.data;

            $scope.sortColumn = function (col) {
                $scope.column = col;
                if ($scope.reverse) {
                    $scope.reverse = false;

                } else {
                    $scope.reverse = true;

                }
            };

            $scope.sortClass = function (col) {
                if ($scope.column == col) {
                    if ($scope.reverse) {
                        return 'arrow-up';
                    } else {
                        return 'arrow-down';
                    }
                }

            }

        });



});
app.controller('myCtrl', function ($scope) {
    $scope.days = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
    for (i = 10; i <= 31; i++) {
        $scope.days.push(i)
    }
    $scope.month = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
    for (i = 10; i <= 12; i++) {

        $scope.month.push(i)
    }
    $scope.year = [];
    for (i = 2018; i > 0; i--) {
        $scope.year.push(i)
    }

})


