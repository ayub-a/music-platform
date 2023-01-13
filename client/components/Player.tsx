import React from 'react'
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import styles from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

let audio: any

const Player = () => {
  const { active, currentTime, duration, pause, volume } = useTypedSelector((state) => state.player)
  const { pauseTrack, playTrack, setVolume, setDuration, setCurrentTime } = useActions()

  React.useEffect(() => {
    if (!audio) {
      audio = new Audio()
    } else {
      setAudio()
    }
  }, [active])

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:7777/' + active.audio
      audio.volume = volume / 100

      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration))
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime))
      }
    }
  }

  const play = () => {
    if (pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }

  if (!active) return null

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>{pause ? <PlayArrow /> : <Pause />}</IconButton>
      <Grid container direction={'column'} style={{ padding: '0 20px', width: 'auto' }}>
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  )
}

export default Player
