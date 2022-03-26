import React from 'react';
// @ts-ignore
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import Button from "@mui/material/Button";
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import Typography from "@mui/material/Typography";

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
        <div style={{textAlign: 'center', maxWidth: 300, margin: '0 auto'}}>
            <Typography variant="h6">Microphone: {listening ? 'On' : 'Off'}</Typography>
            <Button startIcon={<SettingsVoiceIcon />} size='large' variant='contained' color='success'
                    onClick={() => SpeechRecognition.startListening({language: 'en-EN'})}>Start</Button>
            {/*<button onClick={SpeechRecognition.stopListening}>Stop</button>*/}
            {/*<button onClick={resetTranscript}>Reset</button>*/}
            <Typography variant="h6">{transcript}</Typography>
        </div>
    );
};
export default Dictaphone;