'use strict';

console.log('App is running');

//JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecisions App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
