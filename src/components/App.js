import { h, Component } from 'preact';
import User from './User';

const users = [
    {
        image: 'https://avatars3.githubusercontent.com/u/16471628?v=3',
        name: 'Sailesh Kasaju'
    },
    {
        image: 'https://avatars0.githubusercontent.com/u/1643522?v=3',
        name: 'Shane Osbourne'
    }
];

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/saileshkasaju')
            .then(res => res.json())
            .then(user => {
                this.setState({
                    user,
                    loading: false
                });
            })
    }
    render() {
        return (
            <div class="app">
                {this.state.loading
                    ? <p>Please wait...</p>
                    : <User name={this.state.user.name}
                            image={this.state.user.avatar_url} />
                }

            </div>
        );
    }
}

export default App;