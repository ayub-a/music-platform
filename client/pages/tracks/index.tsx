import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import TrackList from '../../components/TrackList'
import MainLayout from '../../layouts/MainLayout'

import { ITrack } from '../../types/track'

const index = () => {
  const router = useRouter()

  const tracks: ITrack[] = [
    {
      _id: '63ab6c5c501909572b59fd26',
      name: 'if you want love',
      artist: 'NF',
      text: 'no lyrics',
      listens: 0,
      picture: 'http://localhost:7777/image/2448dfee-054e-4b7d-b938-9717cf5acece.jpeg',
      audio: 'http://localhost:7777/audio/92624ded-9365-4893-8ded-1858f3aa7ac5.mp3',
      comments: [],
    },
    {
      _id: '63bd5c3647998847a74b90a5',
      name: 'Hell or High Water',
      artist: 'Billy Raffoul',
      text: 'no lyrics',
      listens: 0,
      picture: 'http://localhost:7777/image/c25c280e-d082-47ea-a6c6-fe0e45196516.jpeg',
      audio: 'http://localhost:7777/audio/5115eac7-363c-422e-b719-c1094d8bc794.mp3',
      comments: [],
    },
  ]

  return (
    <MainLayout>
      <Grid container justifyContent={'center'}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent={'space-between'}>
              <h1>Tracks:</h1>
              <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default index
