import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import SidebarHome from "./sidebar/SidebarHome";
import SidebarProfile from "./sidebar/SidebarProile";

const Sidebar = (props) => {
    return (
        <div>
            <div className="sidebar-nav">
                <Link
                    className="padding-10px"
                    to="/sidebar/home"
                >Sidebar Home</Link>
                <Link
                    className="padding-10px"
                    to="/sidebar/profile"
                >Sidebar Profile</Link>
            </div>
            <br />
            <>
                <Switch>
                    <Route
                        path="/sidebar/home"
                        exact
                        component={SidebarHome}
                    />
                    <Route
                        path="/sidebar/profile"
                        exact
                        component={SidebarProfile}
                    />
                </Switch>
            </>
        </div>
    )
}

export default Sidebar;