import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as weatherActions from '../weather/weatherActions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(weatherActions, dispatch)
}