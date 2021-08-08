import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import CheatSheetBox from './cheatSheetBox'

export default function Speech() {

  const [openBox, setOpenBox] = useState(false);
  const [tip,setTip] = useState(true);
  const commands = [
    {
      command: ['Oh yeah','open the box','Its magic'],
      callback: ({ command }) => {
        setTimeout(() => {
          setOpenBox(true)
        }, 2000);
      },
      matchInterim: true
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript()
    }
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  const onVoice = () => {
    setTip(false);
    SpeechRecognition.startListening()
  } 

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="menu">
      <strong>Hill Chat</strong>
      <span>{listening ? 'on' : 'off'}</span>
      <div className="btn_container">
      <button className="btn btn_start" onClick={onVoice} >Start</button>
      <button className="btn btn_stop" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className="btn btn_reset" onClick={resetTranscript}>Reset</button>
      </div>
      { openBox && <CheatSheetBox openBox={openBox} setOpenBox={setOpenBox} resetTranscript={resetTranscript} /> }
      <p>{transcript}</p>
      { tip && <p><em>Say, "Oh yeah or Open Box" to Hill Chat.</em></p> }
    </div>
  );
};
