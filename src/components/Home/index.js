// Write your JS code here
import {Component} from "react"

class Home extends Component {
  onClickMap = () => {
    const {history} = this.props
    history.replace('/map')
  }
  render(){
    return(
      <>
        <div className="Dash_bord">
            <h1 className="home-heading">Click to vist Map </h1>
            <button type="button" className="shop-now-button" onClick={this.onClickMap}>
              View Map
            </button>
        </div>
      </>
  
    )
  }
}

export default Home
