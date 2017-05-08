<!DOCTYPE html>
<html ng-app="bj">
<head>
    <title>BJ</title>

    <link rel="stylesheet" href={{asset("css/app.css")}}>

    @section('style')
        {{-- Add additional style sheets here --}}
    @show

</head>
<body ng-cloak>

<div style="padding: 50px 15px 0 15px;">
    <div ui-view></div>
</div>

</body>

</html>
