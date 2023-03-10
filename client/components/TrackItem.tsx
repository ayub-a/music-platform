import { Card, Grid, IconButton } from '@mui/material'
import React from 'react'
import { ITrack } from '../types/track'
import styles from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useActions } from '../hooks/useActions'

interface TrackItemProps {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter()

  const { setActiveTrack } = useActions()

  const play = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveTrack(track)
  }

  return (
    <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={play}>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img width={70} height={70} src={'http://localhost:7777/' + track.picture} />
      <Grid container direction={'column'} style={{ width: 200, padding: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:20</div>}
      <IconButton onClick={(e) => e.stopPropagation()} style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </Card>
  )
}

export default TrackItem
