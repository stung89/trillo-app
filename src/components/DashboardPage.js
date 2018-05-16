import React from 'react';
import Header from "../components/Header";
import Navigation from '../components/Navigation';
import Content from '../components/Content';

const DashboardPage = () => (
    <div className="container">
        <Header />
        <div className="content">
            <Navigation />
            <Content />
        </div>
    </div>
);

export default DashboardPage;