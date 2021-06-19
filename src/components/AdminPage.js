import React, { useState } from 'react';
import { Tabs, Tab } from "@material-ui/core";
 import Withdrawal from './Withdrawal.js';
import UserInfo from './Userdetails';
import AdminDeposit from './AdminDeposit.js';
function Admin() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    const tabStyle = {
        active_tab:{
            fontFamily: "Segoe UI",
            fontSize: 20,
        }
    };
    return (
        <div className="bg-back-img pt-4">
            <Tabs
            className="text-sm ml-12 mr-4 text-white"
            TabIndicatorProps={{style: {background: '#0a9b77', height: '4px'}}}
            textColor="#fff"
            value={selectedTab}
            onChange={handleChange}
            >
                <Tab style={tabStyle.active_tab} label="Withdrawal"/>
                <Tab style={tabStyle.active_tab} label="User's Info"/>
                <Tab style={tabStyle.active_tab} label="Deposit"/>
            </Tabs>
            {selectedTab === 0 && <Withdrawal/>}
            {selectedTab === 1 && <UserInfo/>}
            {selectedTab === 2 && <AdminDeposit/>}
        </div>
    )
}

export default Admin