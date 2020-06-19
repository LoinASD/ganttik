import React from 'react';
import ReactDOM from 'react-dom';

import { isDevelopmentMode } from './utils';
import { App } from './App';

if (isDevelopmentMode) {
    if ((module as any).hot) {
        console.clear();
        (module as any).hot.accept();
    }
}

ReactDOM.render(
    //<StoreProvider>
        <App />
    //</StoreProvider>,
    ,document.getElementById('ganttik'));
