import React, { Component } from 'react';
import './App.css';
import CitiesOptions from './components/CityOptions/CitiesOptions'
import Loader from './components/Loader/Loader'
import mockData from './mockData'
import Button from './components/Button/Button'
import ToggleSwitcher from './components/ToggleSwitcher/ToggleSwitcher'
import AppContext from './context/app-context'
import Navigation from './components/Navigation/Navigation'
import HistoryPage from './components/HistoryPage/HistoryPage';
import MainPage from './components/MainPage/MainPage'


const myAppId = 'appid=8b1d635ad8d19cf658437581aeb08e79'
class App extends Component {
  state = {
    data: null,
    currOptionsIndex: 0,
    selectedAnswerId: null,
    curScore: 0,
    isToggledToFahrenheit: false,
    history: [],
    isHistory: false

  }

  componentDidMount() {
    this.getWeatherData()
  }

  async getWeatherData() {
    const allCityIds = mockData.map(cur => cur.id).join(',')
    try {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/group?id=${allCityIds}&units=metric&${myAppId}`)
      const allData = await result.json()
      const neededData = allData.list.map(cur => {
        return {
          temp: parseInt(cur.main.temp),
          weather: cur.weather[0].main,
          name: cur.name,
          id: cur.id
        }
      })

      const chunkedData = Array.from({ length: Math.ceil(neededData.length / 2) }, (v, i) => neededData.slice(i * 2, i * 2 + 2))
      this.setState({ data: chunkedData })
    } catch (error) {
      console.error(error)
    }
  }


  nextBtnClickHandler = () => {
    const newIndex = this.state.currOptionsIndex + 1

    if (newIndex <= this.state.data.length - 1) {
      this.setState({ currOptionsIndex: newIndex })
    }

    this.setState({
      selectedAnswerId: null
    })

  }

  selectedAnswerHandler = (id, correctId, addClass) => {
    if (id === correctId) {
      this.setState({ curScore: this.state.curScore + 1 })
    }
    const newHistoryArr = [...this.state.history]
    newHistoryArr.push({
      cities: this.state.data[this.state.currOptionsIndex],
      selectedAnswerId: id
    })

    this.setState({
      selectedAnswerId: id,
      history: newHistoryArr
    })


  }

  restartGameHandler = () => {
    this.setState({
      history: [],
      currOptionsIndex: 0,
      selectedAnswerId: null,
      curScore: 0
    })
  }

  onToggleHandler = () => {
    this.setState({ isToggledToFahrenheit: !this.state.isToggledToFahrenheit })
  }

  navClickHander = (navItem) => {
    if (navItem === 'main') {
      this.setState({ isHistory: false })
    } else {
      this.setState({ isHistory: true })
    }

  }


  render() {
    let content = <Loader />

    if (this.state.data) {

      content = <>
        <div className='Toolbar'>
          <ToggleSwitcher click={this.onToggleHandler} />
          <Navigation click={this.navClickHander} />
        </div>

        <AppContext.Provider value={{
          isToggledToFahrenheit: this.state.isToggledToFahrenheit,
          cities: this.state.data[this.state.currOptionsIndex],
          selectAnswerHandler: this.selectedAnswerHandler,
          selectedAnswerId: this.state.selectedAnswerId,
        }
        }
        >
          {
            !this.state.isHistory ? (
              (
                <>
                  <MainPage curScore={this.state.curScore} maxScore={this.state.data.length} />
                  {
                    this.state.currOptionsIndex !== this.state.data.length - 1 ? (<div className='Buttons'>
                      <Button
                        click={this.nextBtnClickHandler}
                        disabled={!this.state.selectedAnswerId}
                        type='nextBtn'>
                        Next
              </Button>
                      <Button type='restartBtn' click={this.restartGameHandler} disabled={this.state.currOptionsIndex === 0}>Restart</Button>

                    </div>) : <div className='Buttons'><Button type='restartBtn' click={this.restartGameHandler} disabled={this.state.currOptionsIndex === 0}>Restart</Button></div>
                  }
                </>
              )) : <HistoryPage results={this.state.history} />
          }
        </AppContext.Provider>
      </>

    }

    return (
      <div className="App" >
        {content}
      </div>
    )
  }

}

export default App;
