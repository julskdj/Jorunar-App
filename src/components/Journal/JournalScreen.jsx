import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar  from './Sidebar';
import  NoteScreen  from '../notes/NoteScreen';
import NothingSelected from './NothingSelected';
// import { NothingSelected } from './NothingSelected';


 const JournalScreen = () => {

    const {active} = useSelector((state) => state.notes)


    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
            
            <Sidebar />


            <main>

                {
                    (active) 
                        ? (<NoteScreen/>)
                        : (<NothingSelected/>)
                }

                {/* <NothingSelected /> */}
                

            </main>


        </div>
    )
}

export default JournalScreen;
