import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Loading from './Loading';
import Element from './Element';
const url = './cheatsheet.json';

Modal.setAppElement('#root');
const CheatSheetBox = ({openBox,setOpenBox, resetTranscript}) => {

    const [isModalOpen,setIsModalOpen] = useState(openBox);
    const [loading, setLoading] = useState(false);
    const [cheatSheetData, setCheatSheetData] = useState([]);

    const closeModal = () => {
        setIsModalOpen(false);
        setOpenBox(false);
        resetTranscript();
    }

    const fetchCheatSheet = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const cheatSheets = await response.json();
            setLoading(false);
            setCheatSheetData(cheatSheets);
        } catch (error) {
            setLoading(false);
            console.log(error);
        } 
    };

    useEffect(() => {
        fetchCheatSheet();
    }, []);

    if(loading) {
        return (
        <div>
            <Loading />
        </div>
        );
    }

    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal"
                bodyOpenClassName="show_modal"
                >
                <div className="modal_box">
                    <div className="modal_title">
                        <h2 className="modal_title">Hill CheatSheet Box</h2>
                    </div>
                    <div className="modal_content">
                        {
                            cheatSheetData.map((ele) => {
                                return <Element key={ele.id} {...ele}/>
                            })
                        }
                    </div>
                    <button onClick={closeModal} className="modal_button">Close</button>
                </div>
            </Modal>
        </div>
    );

};

export default CheatSheetBox;