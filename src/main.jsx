// Entry point — renders <App /> into the #root div in index.html.
// You should not need to edit this file.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Refresh always lands at the top: browsers otherwise restore the old
// scroll position (and jump to the #section in the URL). Tell the browser
// not to restore, go to the top, and drop the hash so a refresh can't
// jump back to a section.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
