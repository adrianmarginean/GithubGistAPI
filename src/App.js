import './App.css';
import Home from "./pages/Home";
import ViewGist from "./pages/ViewGist";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/:id" component={ViewGist} />
                </div>
            </Router>
        );
    }
}

export default App;

