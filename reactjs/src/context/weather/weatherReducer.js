
const initialState = {
  isLoaded: false
}

const types = {
  SET_WEATHER: (state, {payload}) => ({...state, ...payload, isLoaded: true}),
  DEFAULT: state => state
}

export const weatherReducer = (state = initialState, action) => {
    const reduceState = types[action.type] || types.DEFAULT
    return reduceState(state, action)
}