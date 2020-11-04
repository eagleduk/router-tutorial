import useReactRouter from "use-react-router";

function RouterHookSample() {
    const {location,match,history} = useReactRouter();
    console.log({location, match, history});
    return null;
}

export default RouterHookSample;