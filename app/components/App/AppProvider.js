import React, {Component} from 'react'
import AppContext from './AppContext'
import PropTypes from 'prop-types'

class AppProvider extends Component {
  state = {
    title: '',
  }

  setTitle = (title) => {
    this.setState({title: title})
  }

  render() {
    const {title} = this.state
    const {setTitle} = this

    return (
      <AppContext.Provider
        value={{
          title,
          setTitle,
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

AppProvider.propTypes = {
  children: PropTypes.node,
}

export default AppProvider
