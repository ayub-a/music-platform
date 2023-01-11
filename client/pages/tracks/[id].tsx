import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

const TrackPage: React.FC = () => {
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
  const router = useRouter()

  return (
    <MainLayout>
      <Button variant='outlined' style={{ fontSize: 18 }} onClick={() => router.push('/tracks')}>
        All Tracks
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ margin: '0 20px' }}>
          <h3>Song: {track.name}</h3>
          <h3>Artist: {track.artist}</h3>
          <h3>Listens: {track.listens}</h3>
        </div>
      </Grid>
      <h3>Lyrics:</h3>
      <p>{track.text}</p>
      <h1>Comments</h1>

      <Grid container>
        <TextField label='user name' fullWidth />
        <TextField label='comment' style={{ marginTop: 15 }} fullWidth multiline rows={4} />
        <Button variant={'outlined'} style={{ marginTop: 15 }}>
          Send
        </Button>
      </Grid>
      <Grid container direction={'column'}>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <div>{comment.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </Grid>
    </MainLayout>
  )
}

export default TrackPage
