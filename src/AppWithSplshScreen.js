import React from 'react'
import SplashView from "./components/splashView/SplashView";

import App from './App'

function appWithSplashScreen(AppComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          loading: true
        };
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 5000);
      }
  
      render() {
        if (this.state.loading) return <div className="App"><SplashView /></div>;
        return <AppComponent {...this.props} />;
      }
    };
  }
  
  const AppWithSplashScreen = appWithSplashScreen(App);
  export default AppWithSplashScreen;