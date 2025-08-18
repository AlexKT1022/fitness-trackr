import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layout/Layout';
import App from './App.jsx';
import './index.css';

import { AuthProvider } from './context/AuthContext';
import { ApiProvider } from './context/ApiContext.jsx';
import { PageProvider } from './context/PageContext';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ApiProvider>
      <PageProvider>
        <Layout>
          <App />
        </Layout>
      </PageProvider>
    </ApiProvider>
  </AuthProvider>,
);
