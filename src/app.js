import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from './redux/actions'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }


  render() {
    const { isFetching, apps } = this.props
    const totalapps = apps.length;
    debugger
    return (
       <Fragment>
         {isFetching && totalapps === 0 && <h2>Loading...</h2>}
         {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
       </Fragment>
    );
  }
}
 
function mapStateToProps({ isFetching, apps }) {
  return {
    isFetching,
    apps
  }
}
 
export default connect(mapStateToProps)(App)
