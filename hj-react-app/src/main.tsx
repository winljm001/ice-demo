import './publicPathConf'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import './index.css'
import { isInIcestark, setLibraryName } from '@ice/stark-app'
import App from './App'
export function mount(props) {
  render(<App />, props.container)
}
export function unmount(props) {
  unmountComponentAtNode(props.container)
}
setLibraryName('microApp')

if (!isInIcestark()) {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}
