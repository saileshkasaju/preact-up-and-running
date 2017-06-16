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
        fetch(this.props.config.urls.user)
            .then(res => res.json())
            .then(user => {
                this.setState({
                    user,
                    loading: false
                });
            })
            .catch(err => console.error(err));
    }
    render({config}, {loading, user}) {
        return (
            <div class="app">
                {loading
                    ? <p>Please wait... Fetching {config.urls.user}</p>
                    : <User name={user.name}
                            image={user.avatar_url} />
                }
            </div>
        );
    }
}

export default App;