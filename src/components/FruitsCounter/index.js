import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMangoes = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  reset = () => {
    this.setState(prevState => ({
      bananas: prevState.bananas - prevState.bananas,
    }))
    this.setState(prevState => ({
      mangoes: prevState.bananas - prevState.bananas,
    }))
  }

  render() {
    const {mangoes, bananas, reset} = this.state
    return (
      <div className="card">
        <h1>
          Bob ate<span> {mangoes} </span>mangoes<span> {bananas} </span>bananas
        </h1>
        <div className="fruitsContainer">
          <div className="fruitContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button type="button" onClick={this.eatMangoes}>
              Eat Mangoes
            </button>
          </div>
          <div className="fruitContainer">
            <img
              alt="banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
            <button type="button" onClick={this.eatBananas}>
              Eat Bananas
            </button>
          </div>
        </div>

        <button type="button" onClick={this.reset}>
          RESET
        </button>
      </div>
    )
  }
}

export default FruitsCounter
