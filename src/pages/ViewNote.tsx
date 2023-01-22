import { useContext, useEffect, useRef, useState } from "react";
import { Clipboard } from "@capacitor/clipboard";
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
    IonNote,
    IonPage,
    IonTextarea,
    IonToolbar,
    useIonAlert,
    useIonRouter,
    useIonToast,
} from "@ionic/react";
import {
    copyOutline,
    documentLockOutline,
    documentTextOutline,
    folderOutline,
    trashOutline,
} from "ionicons/icons";
import { useParams } from "react-router";
import "./ViewNote.css";
import { Sanitize } from "../utils/Sanitize";
import secureLocalStorage from "react-secure-storage";
import { objectPosition } from "../utils/ObjectPosition";
import { NotesInterface, NotesContext } from "../context/notes.context";
import { hapticsImpactLight, hapticsNotification } from "../capacitor/haptics";
import { useTranslation } from "react-i18next";

const ViewNote: React.FC = () => {
    const { t } = useTranslation();
    const { notesArray, setNotesArray } = useContext(NotesContext); // Enable and destructure NotesContext for useage
    const params = useParams<{ id: string }>(); // get id from url
    const index = objectPosition(notesArray, Sanitize(params.id)); // get index of note in array
    const note = notesArray[index]; // set note object from notesArray

    // secureLocalStorage.setItem(key, value)	To set values to secure storage	Supports 'String - Object - Number - Boolean' as value
    // secureLocalStorage.getItem(key)	To get values which is saved on secure local storage	Return null if the key does not exits
    // secureLocalStorage.removeItem(key)	To remove specified key from secure local storage
    // secureLocalStorage.clear()	Removed all data from secure local storage

    const formRef = useRef<HTMLFormElement>(null); // create ref for form
    const [formData, setFormData] = useState({
        title: "",
        note: "",
    });

    const [presentToast] = useIonToast();
    const router = useIonRouter();
    const [presentAlert] = useIonAlert();

    useEffect(() => {
        // on initial load
        const noteObj = {
            title: note?.title,
            note: note?.note,
        };

        setFormData(noteObj);
    }, [note?.title, note?.note]);

    const updateCurrentContext = (noteList: NotesInterface[]) => {
        setNotesArray(noteList); // update the context
    };

    const updateStorage = (noteList: NotesInterface[]) => {
        secureLocalStorage.setItem("noteArray", noteList); // set note array to secure storage
    };

    const submitForm = (e: any) => {
        hapticsImpactLight(); // haptic feedback
        e.preventDefault(); // prevent default form submission

        const title = Sanitize(e.target.elements.title.value);
        const note = Sanitize(e.target.elements.note.value);

        const noteList = [...notesArray];
        const noteObj = noteList.find((obj) => obj.id === params.id);

        if (title.length && note.length) {
            // if username and note are not empty
            if (
                // if any of the fields are changed
                title !== noteObj?.title ||
                note !== noteObj?.note
            ) {
                const index = objectPosition(noteList, params.id);

                noteList[index].title = title;
                noteList[index].note = note;

                updateCurrentContext(noteList);
                updateStorage(noteList);

                hapticsNotification("success"); // haptic feedback
                presentToast({
                    message: t("NOTE_UPDATED"),
                    duration: 1500,
                });
            }
        }
    };

    const deleteNote = () => {
        hapticsNotification("warning"); // haptic feedback
        presentAlert({
            header: t("WARNING"),
            message: t("ARE_YOU_SURE"),
            buttons: [
                {
                    text: t("CANCEL"),
                    role: "cancel",
                },
                {
                    text: t("OKAY"),
                    role: "confirm",
                    handler: () => {
                        const noteList = [...notesArray];
                        noteList.splice(index, 1);

                        updateCurrentContext(noteList);
                        updateStorage(noteList);

                        hapticsNotification("success"); // haptic feedback
                        presentToast({
                            message: t("NOTE_DELETED"),
                            duration: 1500,
                        });
                        router.goBack();
                    },
                },
            ],
        });
    };

    return (
        <IonPage id="view-item-page">
            <IonHeader mode="ios" translucent>
                <IonToolbar mode="ios">
                    <IonButtons slot="start">
                        <IonBackButton
                            text={t("NOTES_TITLE")}
                            defaultHref="/notes"
                        ></IonBackButton>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton
                            onClick={deleteNote}
                            color="danger"
                            fill="clear"
                        >
                            <IonIcon slot="icon-only" icon={trashOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {formData ? (
                    <>
                        <IonItem lines="none" className="ion-margin">
                            <IonIcon
                                className="header-icon"
                                icon={documentLockOutline}
                                color="dark"
                            />
                            <IonLabel className="ion-text-wrap">
                                <h2>
                                    {note?.title}
                                    <span className="date">
                                        <IonNote>
                                            {new Date(
                                                note?.date
                                            ).toLocaleDateString()}
                                        </IonNote>
                                    </span>
                                </h2>
                            </IonLabel>
                        </IonItem>

                        <div className="ion-margin">
                            <h1>{note?.note}</h1>
                        </div>
                        <form ref={formRef} onSubmit={submitForm}>
                            <IonItem>
                                <IonIcon icon={folderOutline} slot="start" />
                                <IonLabel position="stacked">
                                    {t("NOTE_TITLE")}
                                </IonLabel>
                                <IonInput
                                    required
                                    name="title"
                                    value={formData.title}
                                    onIonChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            title: Sanitize(e.detail.value!),
                                        });
                                    }}
                                    type="text"
                                />
                            </IonItem>
                            <IonItem>
                                <IonIcon
                                    icon={documentTextOutline}
                                    slot="start"
                                />
                                <IonLabel position="stacked">{t("NOTE")}</IonLabel>
                                <IonTextarea
                                    required
                                    name="note"
                                    value={formData.note}
                                    onIonChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            note: Sanitize(e.detail.value!),
                                        });
                                    }}
                                />
                                <IonButton
                                    disabled={formData.note !== note?.note}
                                    onClick={async () => {
                                        await Clipboard.write({
                                            string: note?.note,
                                        });
                                        hapticsNotification("success"); // haptic feedback
                                        presentToast({
                                            message: t("COPIED_NOTE"),
                                            duration: 1500,
                                        });
                                    }}
                                    fill="clear"
                                    slot="end"
                                >
                                    <IonIcon
                                        slot="icon-only"
                                        icon={copyOutline}
                                    />
                                </IonButton>
                            </IonItem>
                            <IonButton
                                onClick={() => formRef.current?.checkValidity()}
                                disabled={
                                    (formData.title === note?.title &&
                                        formData.note === note?.note) ||
                                    formData.title === "" ||
                                    formData.note === ""
                                }
                                expand="block"
                                type="submit"
                            >
                                {t("UPDATE_NOTE")}
                            </IonButton>
                        </form>
                    </>
                ) : (
                    <div>{t("NOTE_NOT_FOUND")}</div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default ViewNote;
