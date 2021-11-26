import {useEffect} from "react";
import {useActions} from "../context/hooks/useActions"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Time} from './Time'
import {Weather} from './Weather'
import {Navbar} from './Navbar'


export const  MainPage = () => {
    const defaultCity = 'Москва'
    const {setWeather} =  useActions()

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
      getWeather()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getWeather = async (event) => {
      let cityName = defaultCity
      if (event) {
        event.preventDefault()
        cityName = event.target.elements?.city?.value
      }

      await fetch(`/api/weather/`, {
        method: 'POST',
        headers: new Headers(
          { 
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json'
          }),
        body: JSON.stringify({'city': cityName})
        })
        .then(res => res.json())
        .then(
          (result) => {
            setWeather(result)
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            console.error(error)
          }
        )
    }
  
      return (
        <div className="container">
          <BrowserRouter>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route path={'/'} exact component={Time}/>
                <Route path={'/weather'}>
                  <Weather getWeather={getWeather} />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      )
  }
  export default MainPage