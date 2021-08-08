import React, { useState} from 'react';
import Modal from 'react-modal';
import Element from './Element';
import data from '../cheatsheet';

Modal.setAppElement('#root');
const CheatSheetBox = ({openBox,setOpenBox, resetTranscript}) => {

    const [isModalOpen,setIsModalOpen] = useState(openBox);

    const closeModal = () => {
        setIsModalOpen(false);
        setOpenBox(false);
        resetTranscript();
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
                            data.map((ele) => {
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