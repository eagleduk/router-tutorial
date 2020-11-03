import { Link, Route} from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/homer">simson</Link>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div> select profile.. </div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}

export default Profiles;