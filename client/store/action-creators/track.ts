import axios from 'axios'
import { Dispatch } from 'redux'
import { TrackActionTypes, TracksAction } from '../../types/track'

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TracksAction>) => {
    try {
      const res = await axios.get('http://localhost:7777/tracks')
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Error: something with uploading tracks',
      })
    }
  }
}
