import { HashRouter, Route, Switch } from "react-router-dom";
import NewAccount from "./views/Auth/NewAccount";
import Home1 from "./views/home"


const App = () => {
    return (<div className="App">
       <Home1/>
       <NewAccount/>
       

    </div>
    );

};

export default App;
