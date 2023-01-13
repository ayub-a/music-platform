import { Box, Button, Card, Grid } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import TrackList from '../../components/TrackList'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import MainLayout from '../../layouts/MainLayout'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchTracks } from '../../store/action-creators/track'

const index = () => {
  const router = useRouter()

  const { tracks, error } = useTypedSelector((state) => state.tracks)

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    )
  }

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => () => {
  const dispatch = store.dispatch as NextThunkDispatch
  return dispatch(fetchTracks() as any)
})
