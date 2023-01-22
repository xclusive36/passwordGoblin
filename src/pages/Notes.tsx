import {
    IonContent,
    IonHeader,
    IonItemGroup,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import secureLocalStorage from "react-secure-storage";
import Fab from "../components/Fab";
import Footer from "../components/Footer";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import SortBy from "../components/SortBy";
import { NotesContext } from "../context/notes.context";

import "./Notes.css";

const Notes: React.FC = () => {
    const { t } = useTranslation();
    const { notesArray, setNotesArray } = useContext(NotesContext); // Enable and destructure NotesContext for useage

    // secureLocalStorage.setItem(key, value)	To set values to secure storage	Supports 'String - Object - Number - Boolean' as value
    // secureLocalStorage.getItem(key)	To get values which is saved on secure local storage	Return null if the key does not exits
    // secureLocalStorage.removeItem(key)	To remove specified key from secure local storage
    // secureLocalStorage.clear()	Removed all data from secure local storage

    const [search, setSearch] = useState<string>(""); // set searchable string to state used by IonSearchbar to filter notesArray
    const [sortOrder, setSortOrder] = useState<string>("asc"); // set sort order to state used to sort notesArray asc or desc
    const [sortBy, setSortBy] = useState<string>("date"); // set sort by to state used by IonSelect to sort notesArray

    useEffect(() => {
        // pull data from secure storage and set to context
        // secureLocalStorage.clear(); // clear secure storage

        const getNotesFromStorage: any =
            secureLocalStorage.getItem("noteArray"); // pull data from storage
        if (getNotesFromStorage) {
            setNotesArray(getNotesFromStorage); // set to NotesContext
        }
    }, [setNotesArray]);

    return (
        <IonPage>
            <IonHeader mode="ios">
                <IonToolbar mode="ios">
                    <IonTitle>{t("NOTES_TITLE")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader mode="ios" collapse="condense">
                    <IonToolbar mode="ios">
                        <IonTitle size="large">{t("NOTES_TITLE")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <SearchBar search={search} setSearch={setSearch} />

                <IonList mode="ios" className="ion-padding-top" lines="none">
                    <IonItemGroup>
                        <SortBy
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            sortOrder={sortOrder}
                            setSortOrder={setSortOrder}
                        />
                        <List
                            array={notesArray}
                            type="note"
                            sortBy={sortBy}
                            sortOrder={sortOrder}
                            search={search}
                        />
                    </IonItemGroup>
                </IonList>
                <Fab link={"/newnote"} />
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Notes;
