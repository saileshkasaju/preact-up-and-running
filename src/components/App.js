import { h } from 'preact';
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

export function App () {
    return (
        <div class="app">
            {users.map(user =>
                <User {...user} key={user.name}/>
            )}
        </div>
    );
}

export default App;