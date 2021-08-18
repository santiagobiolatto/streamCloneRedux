import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamEdit from "./components/streams/StreamEdit";
import StreamCreate from "./components/streams/StreamCreate";
import StreamList from "./components/streams/StreamList";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/header/Header.jsx";
import history from "./history";

function App() {
  return (
    <div className="ui container">
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
