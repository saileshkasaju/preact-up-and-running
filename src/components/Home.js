import { h } from 'preact';

export default function Home() {
    return (
        <section>
            <p>Enter a Github Username</p>
            <input type="search"
                   placeholder="eg: saileshkasaju"
                   onSearch={e => search(e.target.value)}
            />
        </section>
    )
}