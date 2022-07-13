import { Box, Button, Stack, Typography, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MotionInView, varFadeInUp } from "../animate";

function Timer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [stop, setStop] = useState(false);
  const handleStop = () => {
    setTimerOn(false);
    setStop(true);
  };

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  //for the timer hours ans minutes
  const hours = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2);

  return (
    <>
      <Box sx={{ marginTop: "2rem" }}>
        <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={2}>
            <Typography variant="p" fontSize="3rem" fontWeight="bold">
              {hours} :
            </Typography>
            <Typography variant="p " fontSize="3rem" fontWeight="bold">
              {minutes}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            {!timerOn && time === 0 && (
              <Button
                onClick={() => setTimerOn(true)}
                variant="contained"
                color="secondary"
              >
                Start
              </Button>
            )}
            {timerOn && (
              <Button
                onClick={handleStop}
                variant="contained"
                color="secondary"
              >
                Stop
              </Button>
            )}
            {!timerOn && time !== 0 && (
              <Button
                onClick={() => setTimerOn(true)}
                variant="contained"
                color="secondary"
              >
                Resume
              </Button>
            )}
            {!timerOn && time > 0 && (
              <Button
                onClick={() => setTime(0)}
                variant="contained"
                color="secondary"
              >
                Restart
              </Button>
            )}
          </Stack>
          {stop && (
            <MotionInView variants={varFadeInUp}>
              <Alert
                severity="info"
                onClose={() => setStop(false)}
                sx={{ marginBottom: "1rem" }}
              >
                <Typography varaint="p" fontSize="20px">
                  You have just worked out for <bold> {hours}</bold> Hours and{" "}
                  <bold> {minutes}</bold> minutes
                </Typography>
              </Alert>
            </MotionInView>
          )}
        </Stack>
      </Box>
    </>
  );
}

export default Timer;
