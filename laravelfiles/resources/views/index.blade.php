<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow" />
    <meta name="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="author" content="Ricardo Filho" />

    <title>Simple Library</title>

    <link type="image/ico" rel="shortcut icon" href="{{ URL::asset('assets/images/favicon.ico')}}" />
    <link type="image/ico" rel="icon" href="{{ URL::asset('assets/images/favicon.ico')}}" />

    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/css/styles.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('node_modules/angular-material/angular-material.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('node_modules/angular-material-data-table/dist/md-data-table.min.css') }}" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    <base href="/rke/">

</head>
<body ng-app="app" layout="column">

    <!-- Main App -->
    <div ui-view flex layout="column"></div>

    <script type="text/javascript" src="{{URL::asset('node_modules/angular/angular.min.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('node_modules/angular-material/angular-material.min.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('node_modules/angular-ui-router/release/angular-ui-router.min.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('node_modules/angular-animate/angular-animate.min.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('node_modules/angular-aria/angular-aria.min.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('node_modules/angular-messages/angular-messages.min.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('node_modules/angular-material-data-table/dist/md-data-table.min.js')}}"></script>

    <!-- Angular Files -->
    <script type="text/javascript" src="{{URL::asset('angularjs/app.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('angularjs/routes.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('angularjs/restService.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('angularjs/mainController.js')}}"></script>

</body>
</html>