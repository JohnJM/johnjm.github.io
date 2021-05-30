import {HashRouter as Router, Redirect, Route, Switch}  from 'react-router-dom';
import Project from './project/pages/Project';
import Home from './home/pages/Home';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
            <Router>
              <ScrollToTop />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/project/:id" exact component={Project} />
                <Redirect to="/" />
              </Switch>
            </Router>
    );
}
export default App;
