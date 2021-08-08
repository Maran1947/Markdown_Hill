import React, { useContext } from 'react';
import styled from 'styled-components';
import EditorContext from '../EditorContext';

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

const TextArea = styled.textarea`
    width: 100%;
    height: 80%;
    resize: none;
    border: none;
    outline: none;
    padding: 4px 0px 0xp 4px;
    overflow: scroll scroll;
    font-size: 17px;
`;

export function MarkedInput() {

    const { setMarkdownText } = useContext(EditorContext);

    const onInputChange = e => {
        const newValue = e.currentTarget.value;
        setMarkdownText(newValue);
    }

    return (
        <Container className="markdown_input">
            <Title>Markdown Text</Title>
            <TextArea onChange={onInputChange}/>
        </Container>
    )
};

