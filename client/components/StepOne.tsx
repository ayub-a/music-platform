import { Grid, TextField } from '@mui/material'
import React from 'react'

const StepOne = () => {
  return (
    <Grid container direction={'column'} style={{ padding: 20, gap: 15 }}>
      <h3>Step 1:</h3>
      <TextField label="Track title" />
      <TextField label="Artist" />
      <TextField disabled multiline rows={3} label="lyrics" value="no lyrics" />
    </Grid>
  )
}

export default StepOne
