import React from 'react'
import { getFunName } from '../helpers'
import { Redirect } from 'react-router'

class StorePicker extends React.Component {
  //  constructor() {
  //    super()
  //   this.state = {storeIsSet: false,
  //                 value: ''}
  //   this.goToStore = this.goToStore.bind(this)

goToStore(event) {
  event.preventDefault()
  console.log('you changed the URL')
  // first grab the text from the box
  const storeId = this.storeInput.value
  console.log(`Going to ${storeId}`)
  //this.setState({storeIsSet: true,
  //              value: storeId})
  // second were going to transition from / to /store:storeId
  this.context.router.transitionTo(`/store/${storeId}`)    
}

  render() {
    // Routing with Re
    // const storeIsSet = this.state.storeIsSet
    // const storeId = this.state.value
    // if(storeIsSet === true) {
    //   return (
    //     <Redirect to={`store/name/field/location/${storeId}`} />
    //   )
    // }
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" 
          defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker