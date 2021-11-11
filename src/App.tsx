import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
