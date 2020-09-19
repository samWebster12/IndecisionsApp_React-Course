class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            showDetails: true
        }
    }

    toggleDetails() {
        this.setState((prevState) => {
            return {
                showDetails: !prevState.showDetails
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleDetails}>{this.state.showDetails ? 'Show details' : 'Hide details'}</button>
                <p>{this.state.showDetails ? 'Testing details' : null}</p>
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))


/*const toggleDetails = () => {
    showDetails = !showDetails;
    render();

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
    ReactDOM.render(template, appRoot); }
}
render();*/
