import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface IProps {
  steps: string[],
  currStep: number,
  handleNextStep: () => void,
  handleLastStep: () => void,
}
export default function FormStepper(props: IProps) {
  const { steps, currStep,handleNextStep, handleLastStep } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={currStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {currStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {currStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={currStep === 0}
              onClick={handleLastStep}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {currStep === steps.length - 1
                ? <Button type='submit'>Finish</Button>
                : <Button onClick={handleNextStep}>Next</Button>
              }              
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}