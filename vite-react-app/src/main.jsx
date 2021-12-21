import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { isInIcestark, setLibraryName } from '@ice/stark-app'
export function mount(props) {
  console.log(13)

  ReactDOM.render(<App />, props.container)
}
export function unmount(props) {
  unmountComponentAtNode(props.container)
}
setLibraryName('microApp1')

if (!isInIcestark()) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
