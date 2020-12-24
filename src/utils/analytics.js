import ReactGA from "react-ga"
import { GA_MEASUREMENT_ID } from 'src/constants/index'
const TRACKING_ID = "UA-XXXXXXXXX-X"
 
const init = () => {
  // Enable debug mode on the local development environment
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development"
  ReactGA.initialize(""+GA_MEASUREMENT_ID, { debug: isDev })
}
 
const sendEvent = (payload) => {
  ReactGA.event(payload)
}
 
const sendPageview = (path) => {
  ReactGA.set({ page: path })
  ReactGA.pageview(path)
}
 
export default {
  init,
  sendEvent,
  sendPageview,
}