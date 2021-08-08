import React, {useState} from 'react';
import './styles.css';
import styled from 'styled-components';
import { MarkedInput } from './components/markdowninput';
import { Output } from './components/output';
import EditorContext from './EditorContext';
import Speech from './components/speech';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  font-family: 'Lato',sans-serif;
  margin: 20px 0;
  color: #fff;
  border: 2px solid #fff;
  text-transform: uppercase;
  padding: 10px 24px;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

const Footer = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  padding: 5px 0px 10px 0px;
  font-weight: 450;
`;

function App() {

  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer className="app_container">
        <Title className="heading"> 🚵‍♀️ Markdown Hill 🚵‍♂️ </Title>
        <EditorContainer className="editor_container">
          <MarkedInput />
          <Speech/>
          <Output />
        </EditorContainer>
        <Footer>Built by Abhishek Maran</Footer>
      </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
