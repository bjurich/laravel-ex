<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/ng-table-bundle/ng-table.js"></script>
    <!--script type="text/javascript" src="bower_components/restangular/dist/restangular.js"></script-->
    <script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script type="text/javascript" src="js/app.js"></script>

    <style>.active { color: red; font-weight: bold; }</style>
</head>

<body ng-app="bj">
<a ui-sref="hello" ui-sref-active="active">Hello</a>
<a ui-sref="about" ui-sref-active="active">About</a>

<ui-view></ui-view>
</body>
</html>
