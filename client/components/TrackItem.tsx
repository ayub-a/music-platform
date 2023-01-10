import React from 'react'
import { ITrack } from '../types/track'

interface TrackItem {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItem> = ({ track, active = false }) => {
  return <div>{track.name}</div>
}

export default TrackItem
