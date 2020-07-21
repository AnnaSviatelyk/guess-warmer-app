import React, { Component } from 'react'
import mockData from './mockData'
import Loader from './components/Loader/Loader'
import Buttons from './components/Buttons/Buttons'
import AppContext from './context/app-context'
import ToolBar from './components/ToolBar/ToolBar'
import HistoryPage from './components/HistoryPage/HistoryPage'
import MainPage from './components/MainPage/MainPage'
import { chunkArr } from './helpers/chunkArr'

const myAppId = '8b1d635ad8d19cf658437581aeb08e79'
class App extends Component {
  initialState = {
    curOptionsIndex: 0,
    selectedAnswerId: null,
    curScore: 0,
    history: []
  }

  state = {
    data: null,
    isFahrenheit: false,
    isHistory: false,
    ...this.initialState
  }

  componentDidMount() {
    this.getWeatherData()
  }

  async getWeatherData() {
    const allCityIds = mockData.map(cur => cur.id).join(',')
    try {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/group?id=${allCityIds}&units=metric&appid=${myAppId}`)
      const allData = await result.json()
      const neededData = allData.list.map(cur => {
        return {
          temp: parseInt(cur.main.temp),
          weather: cur.weather[0].main,
          name: cur.name,
          id: cur.id
        }
      })
      const chunkedData = chunkArr(neededData)
      this.setState({ data: chunkedData })
    } catch (error) {
      console.error(error)
    }
  }

  nextBtnClickHandler = () => {
    const newIndex = this.state.curOptionsIndex + 1

    this.setState({
      selectedAnswerId: null,
      curOptionsIndex: newIndex <= this.state.data.length - 1 ? newIndex : this.state.curOptionsIndex
    })
  }

  selectedAnswerHandler = (id, correctId, addClass) => {
    const newHistoryArr = [...this.state.history]
    newHistoryArr.push({
      cities: this.state.data[this.state.curOptionsIndex],
      selectedAnswerId: id
    })

    this.setState({
      selectedAnswerId: id,
      history: newHistoryArr,
      curScore: id === correctId ? this.state.curScore + 1 : this.state.curScore
    })
  }

  restartGameHandler = () => {
    this.setState({
      ...this.initialState
    })
  }

  onToggleHandler = () => {
    this.setState({ isFahrenheit: !this.state.isFahrenheit })
  }

  navClickHander = (navItem) => {
    this.setState({ isHistory: navItem === 'main' ? false : true })
  }

  render() {
    let content = <Loader />

    if (this.state.data) {
      const context = {
        isFahrenheit: this.state.isFahrenheit,
        isHistory: this.state.isHistory,
        cities: this.state.data[this.state.curOptionsIndex],
        selectAnswerHandler: this.selectedAnswerHandler,
        selectedAnswerId: this.state.selectedAnswerId,
        nextBtnClick: this.nextBtnClickHandler,
        disabledNext: !this.state.selectedAnswerId,
        restartBtnClick: this.restartGameHandler,
        curIndex: this.state.curOptionsIndex,
        dataLength: this.state.data.length,
        toggleClick: this.onToggleHandler,
        navClick: this.navClickHander
      }

      content =
        <>
          <AppContext.Provider value={{ ...context }}>
            <ToolBar />
            {this.state.isHistory ? <HistoryPage results={this.state.history} /> :
              <>
                <MainPage curScore={this.state.curScore} maxScore={this.state.data.length} />
                <Buttons />
              </>
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

export default App
