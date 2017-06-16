/**
 * Created by Edge on 6/16/2017.
 */
import { h } from 'preact';

export function User(props) {
    return (
        <div class="user">
            <figure class="user__image">
                <img src={props.image} alt="my github avatar"/>
            </figure>
            <p class="user__name">{props.name}</p>
        </div>
    )
}

export default User;