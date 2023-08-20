import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './components/Hello.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <Hello />
    </React.StrictMode>
  </>
);

