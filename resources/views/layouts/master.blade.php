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

@section('content')
    {{-- Add content here --}}
@show


<script src="{{ asset("jspm_packages/system.js") }}"></script>
<script src="{{ asset("config.js") }}"></script>
<script>
    System
        .import('{{ asset('js/main') }}')
        .catch(console.error.bind(console));
</script>

@section('javascript')
    {{-- Add additional javascript blocks here --}}
@show

</body>

</html>
