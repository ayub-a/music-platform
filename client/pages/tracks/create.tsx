import { Button, Grid } from '@mui/material'
import React from 'react'
import FileUpload from '../../components/FileUpload'
import StepOne from '../../components/StepOne'
import StepWrapper from '../../components/StepWrapper'
import MainLayout from '../../layouts/MainLayout'

const create = () => {
  const [activeStep, setActiceStep] = React.useState(0)
  const [image, setImage] = React.useState(null)
  const [audio, setAudio] = React.useState(null)

  const back = () => setActiceStep((prev) => prev - 1)
  const next = () => setActiceStep((prev) => prev + 1)

  return (
    <MainLayout>
      <h2>Upload Track</h2>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 ? (
          <StepOne />
        ) : activeStep === 1 ? (
          <FileUpload setFile={setImage} accept='image/*'>
            <Button variant='outlined'>Choose image</Button>
          </FileUpload>
        ) : (
          <FileUpload setFile={setAudio} accept='audio/*'>
            <Button variant='outlined'>Choose audio</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent={'space-between'}>
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button disabled={activeStep === 3} onClick={next}>
          {activeStep >= 2 ? 'Upload' : 'Next'}
        </Button>
      </Grid>
    </MainLayout>
  )
}

export default create
