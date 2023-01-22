import { createContext, useState } from "react";

export interface NotesInterface {
    id: string;
    title: string;
    note: string;
    date: Date;
}
const NotesArray: NotesInterface[] = [];

export const NotesContext = createContext({
    notesArray: NotesArray,
    setNotesArray: (data: any) => {},
});

export const NotesProvider = ({ children }: any) => {
    const [notesArray, setNotesArray] = useState(NotesArray);

    const value = {
        notesArray,
        setNotesArray,
    };

    return (
        <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
    );
};
