import App from '../containers/App'
import Error from '../containers/Error'
import Features from '../containers/Features'
import Home from '../containers/Home'
import { Route } from 'react-router-dom'

export const routes = (
  <Route path="/" element={<App />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="features" element={<Features />} />
  </Route>
)
