import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import EditorContext from '../EditorContext';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css'

const Container = styled.div`
    width: 45%;
    height: 90%;
    padding: 16px;
    font-family: 'Lato',sans-serif;
    background: #fff;
    box-shadow: 0 10px 10px 0 rgb(0, 0, 0, 0.22), 0px 27px 24px 0 rgb(0, 0, 0, 0.22);
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1em;
    color: #7ed8f3;
    border-bottom: 1px solid #7ed8f3;
`;

const OutputArea = styled.div`
    width: 100%;
    height: 80%;
    resize: none;
    border: none;
    overflow: scroll;
    padding: 0px 20px;   
    font-size: 17px;
    background: #fff;
`;

const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

export function Output() {

    const { markdownText } = useContext(EditorContext);
    return ( 
    <Container className="output_area">
        <Title>Output Text</Title>
        <OutputArea>
            <ReactMarkdown 
                plugins={[gfm, remarkMath]} 
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                children={markdownText} 
                components={components} />
        </OutputArea>
    </Container>
    )
};

