const toggleDetails = () => {
    showDetails = !showDetails;
    render();
};

let showDetails = true;

//Render
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{showDetails ? 'Show details' : 'Hide details'}</button>
            <p>{showDetails ? 'This is a message' : null}</p>
        </div>
    );
    
    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
}

render();
