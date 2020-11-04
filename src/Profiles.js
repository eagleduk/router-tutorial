import { NavLink, Route} from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink 
                    to="/profiles/velopert"
                    activeStyle={{background: "blue", color: "yellow"}}
                    >
                        velopert
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/profiles/homer"
                    activeClassName="active"
                    isActive={() => {
                        return true;
                    }}
                    >
                        simson
                    </NavLink>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div> select profile.. </div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}

export default Profiles;