import { h, Component } from 'preact';

export class App extends Component {
    constructor(props) {
        super(props);

        this.setText = this.setText.bind(this);
        this.submit = this.submit.bind(this);
    }
    setText(e) {
        this.setState({
            text: e.target.value
        });
    }
    submit() {
        console.log(this.state.text);
    }
    render(props, { text = '' }) {
        return (
            <div class="app">
                <form onSubmit={this.submit} action="javascript:">
                    <input type="text" value={text} onInput={this.setText} />
                </form>
                <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
            </div>
        );
    }
}

export default App;