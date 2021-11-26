
export const setWeather = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_WEATHER',
            payload: data
        })
    }
}
