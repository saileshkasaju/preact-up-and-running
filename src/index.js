console.log('test');

import { h, render } from 'preact';
import App from './components/App';

const config = {
    urls: {
        user: 'https://api.github.com/users/saileshkasaju'
    }
};

render(<App config={config} />, document.querySelector('main'));