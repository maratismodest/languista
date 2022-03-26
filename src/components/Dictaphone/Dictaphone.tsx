import React from 'react';
// @ts-ignore
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Button from "@mui/material/Button";

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div style={{textAlign: 'center'}}>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <Button size='large' variant='contained' color='success' onClick={()=>SpeechRecognition.startListening({ language: 'en-EN' })}>Start</Button>
            {/*<button onClick={SpeechRecognition.stopListening}>Stop</button>*/}
            {/*<button onClick={resetTranscript}>Reset</button>*/}
            <p>{transcript}</p>
        </div>
    );
};
export default Dictaphone;