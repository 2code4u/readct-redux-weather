  
import React from 'react'
import {useSelector} from 'react-redux'

export const Weather = (props) => {
  const weatherState = useSelector((state) => state?.weather)
  let weatherList = <b> Загрузка... </b>

  if (weatherState.cod && weatherState.cod === '404') {
    weatherList = <b> Город не найден </b>
  } else if (weatherState.isLoaded) {
    const weatherDescription = weatherState.weather && weatherState.weather[0] && weatherState.weather[0].description

    weatherList = (
      <ul className="weather-list">
        <li>
          {weatherState.name}
        </li>
        <li>
          {weatherDescription}
        </li>
        <li>
          ветер {weatherState.wind.speed} м\с
        </li>
        <li>
          по ощущениям {weatherState.main.feels_like} °C
        </li>
      </ul>
    )
  }

  return (
    <div className="city-block">
      <h2>Погода</h2>
      <form onSubmit={props.getWeather} className="city-form">
        <input className="form-styling" type="text" name="city" placeholder="Город" ></input>
        <button className="btn">
          Показать погоду
        </button>
      </form>
      <h3>  
        {weatherList}
      </h3>
    </div>
  )
}