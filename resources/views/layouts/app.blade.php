<html>
<head>
    <script src="lib/angular.js"></script>
    <script src="lib/angular-ui-router.js"></script>
    <script src="helloworld.js"></script>

    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/ng-table-bundle/ng-table.js"></script>
    <!--script type="text/javascript" src="bower_components/restangular/dist/restangular.js"></script-->
    <script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script type="text/javascript" src="js/app.js"></script>

    <style>.active { color: red; font-weight: bold; }</style>
</head>

<body ng-app="helloworld">
<a ui-sref="hello" ui-sref-active="active">Hello</a>
<a ui-sref="about" ui-sref-active="active">About</a>

<ui-view></ui-view>
</body>
</html>
