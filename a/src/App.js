import React from "react";
import Login from "./view/components/pages/LogInPage/LogIn";
import ForgotPassword from "./view/components/pages/ForgotPassword/ForgotPassword";
import SignUp from "./view/components/pages/SignUp/SignUp";
import ParentHomePage from "./view/components/pages/ParentHomePage/ParentHomePage" ; 
import MyChildCard from "./view/components/pages/MyChildCard/MyChildCard";
import ChildAttendance from "./view/components/pages/ChildAttendance/ChildAttendance";
import MyChildCardInfo from "./view/components/pages/MyChildCard/MyChildCardInfo";
import DriverPage from "./view/components/pages/DriverPage/DriverPage";
import AccompanyingPersonPage from "./view/components/pages/AccompanyingPersonPage/AccompanyingPersonPage";
import TransportationManager from "./view/components/pages/TransportationManager/TransportationManager";
import DriverAttendancePage from "./view/components/pages/DriverAttendancePage/DriverAttendancePage";
import TransportationManagerSubList from "./view/components/pages/TransportationManagerSubList/TransportationManagerSubList";
import AccompanyingPersonAbsentPage from "./view/components/pages/AccompanyingPersonAbsentPage/AccompanyingPersonAbsentPage";
import AccompanyingPersonChildCard from "./view/components/pages/AccompanyingPersonChildCard/AccompanyingPersonChildCard";
import AccompanyingPersonTrack from "./view/components/pages/AccompanyingPersonTrack/AccompanyingPersonTrack";
import TransportationManagerAbsentPage from "./view/components/pages/TransportationManagerAbsentPage/TransportationManagerAbsentPage";
import DriverEditInfo from "./view/components/pages/DriverEditInfo/DriverEditInfo";
import SchoolAdministratorPage from "./view/components/pages/SchoolAdministratorPage/SchoolAdministratorPage";
import VehicleCompanyManager from "./view/components/pages/VehicleCompanyManager/VehicleCompanyManager";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/LogInPage">login</Link>
            </li>
            <li>
              <Link to="/ForgotPassword">ForgotPassword</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
            <li>
              <Link to="/ParentHomePage">ParentHomePage</Link>
            </li>
            <li>
              <Link to="/MyChildCard">MyChildCard</Link>
            </li>
            <li>
              <Link to="/ChildAttendance">ChildAttendance</Link>
            </li>
            <li>
              <Link to="/MyChildCardInfo">MyChildCardInfo</Link>
            </li>
			
			<li>
              <Link to="/DriverEditInfo">DriverEditInfo</Link>
            </li>
          <li>
              <Link to="/TransportationManagerAbsentPage">TransportationManagerAbsentPage</Link>
            </li>
          <li>
              <Link to="/AccompanyingPersonChildCard">AccompanyingPersonChildCard</Link>
            </li>
          <li>
              <Link to="/AccompanyingPersonAbsentPage">AccompanyingPersonAbsentPage</Link>
            </li>
			
			<li>
              <Link to="/DriverAttendancePage">DriverAttendancePage</Link>
            </li>
            <li>
              <Link to="/TransportationManagerSubList">TransportationManagerSubList</Link>
            </li>
             <li>
              <Link to="/DriverPage">DriverPage</Link>
            </li>

            <li>
              <Link to="/TransportationManager">TransportationManager</Link>
            </li>
            <li>
              <Link to="/AccompanyingPersonTrack">AccompanyingPersonTrack</Link>
            </li>
            

            <li>
              <Link to="/AccompanyingPersonPage">AccompanyingPersonPage</Link>
            </li>

            <li>
              <Link to="/SchoolAdministratorPage">SchoolAdministratorPage</Link>
            </li>

            <li>
              <Link to="/VehicleCompanyManager">VehicleCompanyManager</Link>
            </li>

            
			
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/DriverEditInfo">
            <DriverEditInfo />
          </Route>
        <Route path="/TransportationManagerAbsentPage">
            <TransportationManagerAbsentPage />
          </Route>
        <Route path="/AccompanyingPersonTrack">
            <AccompanyingPersonTrack />
          </Route>
        <Route path="/AccompanyingPersonChildCard">
            <AccompanyingPersonChildCard />
          </Route>
        <Route path="/DriverAttendancePage">
            <DriverAttendancePage />
          </Route>
		  <Route path="/TransportationManagerSubList">
            <TransportationManagerSubList />
            
          </Route>
          <Route path="/AccompanyingPersonAbsentPage">
            <AccompanyingPersonAbsentPage />
            
          </Route>
          
          <Route path="/AccompanyingPersonPage">
            <AccompanyingPersonPage />
          </Route>
          <Route path="/TransportationManager">
            <TransportationManager />
          </Route>
          <Route path="/DriverPage">
            <DriverPage />
          </Route>
          <Route path="/VehicleCompanyManager">
            <VehicleCompanyManager />
          </Route>
          
          <Route path="/SchoolAdministratorPage">
            <SchoolAdministratorPage />
          </Route>
          <Route path="/MyChildCardInfo">
            <MyChildCardInfo />
          </Route>
        <Route path="/ChildAttendance">
            <ChildAttendance />
          </Route>
        <Route path="/MyChildCard">
            <MyChildCard />
          </Route>
        <Route path="/ParentHomePage">
            <ParentHomePage />
          </Route>
        <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/ForgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

