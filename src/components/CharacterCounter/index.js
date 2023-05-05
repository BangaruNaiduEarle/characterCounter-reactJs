import {Component} from 'react'

import {v4} from 'uuid'
import ListItem from '../ListItem'

import './index.css'

class CharacterCounter extends Component {
  state = {inputValue: '', listOfWords: []}

  onClickAdd = () => {
    const {inputValue} = this.state
    this.setState(prevState => ({
      listOfWords: [
        ...prevState.listOfWords,
        {id: v4(), InputValue: inputValue, Length: inputValue.length},
      ],
      inputValue: '',
    }))
  }

  onChangeText = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue, listOfWords} = this.state

    const listLength = listOfWords.length

    return (
      <div className="container">
        <div className="panelMainContainer">
          <div className="leftPanel">
            <div className="leftPaneHeadingContainer">
              <h1 className="leftPanelText">
                Count the characters like a <br />
                Boss...
              </h1>
            </div>
            <div className="leftPanelBottom">
              {listLength === 0 ? (
                <div className="image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                    alt="no user inputs"
                    className="image"
                  />
                </div>
              ) : (
                <ul className="unOrderList">
                  {listOfWords.map(each => (
                    <ListItem each={each} key={each.id} />
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="rightPanel">
            <h1 className="counterText">Character Counter</h1>

            <form className="InputButtonContainer">
              <input
                id="inputEle"
                type="text"
                value={inputValue}
                onChange={this.onChangeText}
                placeholder="Enter the characters here"
                className="inputText"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickAdd}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
