export default () => {
    return {
        restrict: 'E',
        templateUrl: 'directives/headerBar/headerBar.html', 
        scope: {
            title: '@',
            actions: "="
        },
        link: function(scope) {},
        controller: headerBarDirective,
        controllerAs: 'vm',
        bindToController: true
    };
}

class headerBarDirective {
    constructor($timeout) {
        this.screenSize = "small";
    }

    getTypes() {
        apiService.call('types', 'GET', null).then((data) => {
            console.log("data: ", data);
        })
    }

    changeSize() {
        if(this.screenSize === "small") {
            this.screenSize = "medium";
        } else if(this.screenSize === "medium") {
            this.screenSize = "big";
        } else if(this.screenSize === "big") {
            this.screenSize = "small";
        }

        console.log(this.screenSize);
    }

}

headerBarDirective.$inject = ['$timeout'];