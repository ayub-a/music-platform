import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import PlayerActionCreators from '../store/action-creators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(PlayerActionCreators, dispatch)
}
