import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from './Home';

export class App extends Component {
    render() {
        return (
            <div class="app">
                <Router>
                    <Home path="/" />
                </Router>
            </div>
        );
    }
}

export default App;