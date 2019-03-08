import React, { Component } from 'react';
import SidebarLogo from './SideBarComponents/SidebarLogo'
import SelectPeriod from './SideBarComponents/selectPeriod'
import SelectLanguage from './SideBarComponents/selectLanguage'
class Sidebar extends Component {
    render(){
        return (
            <div className="sideBar">
                <SidebarLogo/>
                <SelectPeriod/>
                <SelectLanguage/>
            </div>
        )
    }
}

export default Sidebar;