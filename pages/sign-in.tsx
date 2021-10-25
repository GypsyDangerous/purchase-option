import { NextPage } from "next";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Type } from "../components/sign-up/steps/Type";

const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
];

const SignIn: NextPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const handleReset = () => {
        setActiveStep(0);
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ width: "100%", padding: "0rem 10rem", paddingTop: "3rem" }}>
            <Stepper activeStep={activeStep}>
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
            <Box sx={{ padding: "0 2rem" }}>
                {activeStep === steps.length ? (
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </>
                ) : (
                    <>
                        <Box
                            sx={{
                                minHeight: "50vh",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Type />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Next"}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default SignIn;
