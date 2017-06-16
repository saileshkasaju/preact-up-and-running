import { h } from 'preact';
import User from './User';

export function App () {
    return (
        <div class="app">
            <User image="https://avatars3.githubusercontent.com/u/16471628?v=3&s=460"
                  name="Sailesh Kasaju" />
            <User image="https://avatars3.githubusercontent.com/u/16471628?v=3&s=460"
                  name="Sailesh Kasaju" />
        </div>
    );
}

export default App;