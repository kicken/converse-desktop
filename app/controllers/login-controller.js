let angApp = require(__dirname+'/../init')

angApp.controller('LoginController', function($scope, DesktopService, CredentialsServise) {

    $scope.help = {}

    $scope.showHelp = (item) => {
        $scope.help[item] = typeof $scope.help[item] === 'undefined' ? true : !$scope.help[item];
    }

    $scope.addAccountAndLoginAction = () => {
        CredentialsServise.addCredentials($scope.credentials.connectionManager,
            $scope.credentials.login,
            $scope.credentials.password
        )
        DesktopService.getCredentialsAndLogin()
        $scope.accountForm.$setPristine()
        $scope.accountForm.$setUntouched()
        $scope.credentials = {}
    }
})