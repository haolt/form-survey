import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ResultContainer from '../containers/ResultContainer';
import QuestionnaireContainer from '../containers/QuestionnaireContainer';

const FRoutes = () => {
    return (
        <Switch>
            <Route path="/result">
                <ResultContainer/>
            </Route>
            <Route path="/">
                <QuestionnaireContainer />
            </Route>
        </Switch>
    );
}
export default FRoutes;