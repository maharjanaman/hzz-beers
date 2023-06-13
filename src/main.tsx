// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/**
 * !Removing StrictMode as useEffect was executing twice
 */
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
