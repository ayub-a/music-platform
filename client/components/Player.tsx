import React from 'react'
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/track'
import TrackProgress from './TrackProgress'

const Player = () => {
  const track: ITrack = {
    _id: '63ab6c5c501909572b59fd26',
    name: 'if you want love',
    artist: 'NF',
    text: 'no lyrics',
    listens: 0,
    picture: 'http://localhost:7777/image/2448dfee-054e-4b7d-b938-9717cf5acece.jpeg',
    audio: 'http://localhost:7777/audio/92624ded-9365-4893-8ded-1858f3aa7ac5.mp3',
    comments: [],
  }

  const active = false

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction={'column'} style={{ padding: '0 20px', width: 'auto' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  )
}

export default Player
