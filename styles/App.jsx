import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import TeacherList from './components/TeacherList';
import TeacherForm from './components/TeacherForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/students/create" component={StudentForm} />
          <Route exact path="/teachers" component={TeacherList} />
          <Route exact path="/teachers/create" component={TeacherForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
