import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { isInIcestark, setLibraryName } from '@ice/stark-app';
import reportWebVitals from './reportWebVitals';

export function mount(props) {
  ReactDOM.render(<App  />, props.container);
}
// // eslint-disable-next-line no-undef
// __webpack_public_path__ = 'http://localhost:9001';
// // if(isInIcestark()){
// //   // eslint-disable-next-line no-undef
// // }

export function unmount(props) {
  ReactDOM.unmountComponentAtNode(props.container);
}
// 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
setLibraryName('microApp');
if (!isInIcestark()) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// http://localhost:9000/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
