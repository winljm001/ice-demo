import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createBrowserHistory } from 'history'
import { getBasename } from '@ice/stark-app'
import routes from './config'
export const history = createBrowserHistory()

const AppRouter = () => {
  return <Router basename={getBasename()}>{renderRoutes(routes)}</Router>
}

export default AppRouter
