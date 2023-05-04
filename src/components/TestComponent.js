import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

export default class Test extends Component {
    render() {
        return (
            <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
              <Route exact path="/add" component={AddTutorial} />
              <Route path="/tutorials/:id" component={Tutorial} />
            </Switch>
          </div>
        )
    }
}