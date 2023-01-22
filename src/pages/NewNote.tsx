import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTextarea,
    IonToolbar,
    useIonRouter,
    useIonToast,
} from "@ionic/react";
import {
    atOutline,
    documentAttachOutline,
    documentTextOutline,
} from "ionicons/icons";
import { useContext, useRef } from "react";
import secureLocalStorage from "react-secure-storage";

import "./NewNote.css";
import { Sanitize } from "../utils/Sanitize";
import { RandomId } from "../utils/RandomId";
import { NotesInterface, NotesContext } from "../context/notes.context";
import { hapticsImpactLight, hapticsNotification } from "../capacitor/haptics";
import { useTranslation } from "react-i18next";

const NewNote: React.FC = () => {
    const { t } = useTranslation();
    const { notesArray, setNotesArray } = useContext(NotesContext); // Enable and destructure NotesContext for useage

    // secureLocalStorage.setItem(key, value)	To set values to secure storage	Supports 'String - Object - Number - Boolean' as value
    // secureLocalStorage.getItem(key)	To get values which is saved on secure local storage	Return null if the key does not exits
    // secureLocalStorage.removeItem(key)	To remove specified key from secure local storage
    // secureLocalStorage.clear()	Removed all data from secure local storage

    const formRef = useRef<HTMLFormElement>(null);

    const [presentToast] = useIonToast();
    const router = useIonRouter();

    const updateCurrentContext = (noteList: NotesInterface[]) => {
        setNotesArray(noteList); // update the context
    };

    const updateStorage = (noteList: NotesInterface[]) => {
        secureLocalStorage.setItem("noteArray", noteList); // set note array to secure storage
    };

    const submitForm = (e: any) => {
        hapticsImpactLight(); // haptic feedback
        e.preventDefault(); // prevent default form submission behaviour

        // sanitize form data
        const title = Sanitize(e.target.elements.title.value);
        const note = Sanitize(e.target.elements.note.value);

        if (title.length && note.length) {
            // if all fields are filled
            const obj: NotesInterface = {
                id: RandomId(),
                title: title,
                note: note,
                date: new Date(Date.now()),
            }; // create new note object from form data

            const noteList = [...notesArray]; // copy the array from context
            noteList.push(obj); // Add new note to the array

            updateCurrentContext(noteList); // update the context with new array containing newly added note
            updateStorage(noteList); // update the secure storage
            hapticsNotification("success"); // haptic feedback success
            presentToast({
                message: t("NOTE_ADDED"),
                duration: 1500,
            }); // show toast
            router.goBack(); // go back to the previous page
        }
    };

    return (
        <IonPage id="new-item-page">
            <IonHeader mode="ios" translucent>
                <IonToolbar mode="ios">
                    <IonButtons slot="start">
                        <IonBackButton
                            text={t("NOTES_TITLE")}
                            defaultHref="/home"
                        ></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonItem lines="none" className="ion-margin">
                    <IonIcon
                        className="header-icon"
                        icon={documentAttachOutline}
                        color="dark"
                    />
                    <IonLabel className="ion-text-wrap">
                        <h2>{t("NEW_NOTE")}</h2>
                    </IonLabel>
                </IonItem>

                <form ref={formRef} onSubmit={submitForm}>
                    <IonList>
                        <IonItem>
                            <IonIcon icon={atOutline} slot="start" />
                            <IonLabel position="stacked">{t("NOTE_TITLE")}</IonLabel>
                            <IonInput required name="title" type="text" />
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={documentTextOutline} slot="start" />
                            <IonLabel position="stacked">{t("NOTE")}</IonLabel>
                            <IonTextarea required name="note" />
                        </IonItem>
                    </IonList>
                    <IonButton
                        className="ion-margin"
                        onClick={() => formRef.current?.checkValidity()}
                        expand="block"
                        type="submit"
                    >
                        {t("ADD_NEW_NOTE")}
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default NewNote;
