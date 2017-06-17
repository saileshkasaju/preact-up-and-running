import { h, Component } from 'preact';
import User from './User';

export class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            loading: true
        }
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.user}`)
            .then(res => res.json())
            .then(user => {
                this.setState({
                    user,
                    loading: false
                });
            })
            .catch(err => console.error(err));
    }
    render({}, {loading, user}) {
        console.log('user', user);
        return (
            <div class="app">
                {loading
                    ? <p>Fetching...</p>
                    : <User image={user.avatar_url}
                            name={user.name}/>
                }
            </div>
        );
    }
}

export default Profile;