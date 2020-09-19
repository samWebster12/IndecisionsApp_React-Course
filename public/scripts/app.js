'use strict';

var toggleDetails = function toggleDetails() {
    showDetails = !showDetails;
    render();
};

var showDetails = true;

//Render
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            showDetails ? 'Show details' : 'Hide details'
        ),
        React.createElement(
            'p',
            null,
            showDetails ? 'This is a message' : null
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();
