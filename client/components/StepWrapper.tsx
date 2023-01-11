import { Card, Grid, Step, StepLabel, Stepper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

interface StepWrapperProps {
  activeStep: number
  children?: JSX.Element
}

const steps = ['About track', 'Upload cover', 'Upload audio']
const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent={'center'} style={{ margin: '70px 0', height: 270 }}>
        <Card style={{ width: 600, boxShadow: 'none' }}>{children}</Card>
      </Grid>
    </Container>
  )
}

export default StepWrapper
