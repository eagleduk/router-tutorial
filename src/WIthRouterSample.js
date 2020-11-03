import { withRouter } from "react-router-dom";

function WithRouterSample({ location, match, history }) {
    return (
        <div>
            <h3>location</h3>
            <textarea value={JSON.stringify(location, null, 2)} readOnly />
            <h3>match</h3>
            <textarea value={JSON.stringify(match, null, 2)} readOnly />
            <button onClick={() => history.push("/")}>go Home</button>
        </div>
    )
}

export default withRouter(WithRouterSample);