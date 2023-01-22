import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRow,
    IonToolbar,
    useIonRouter,
    useIonToast,
} from "@ionic/react";
import {
    atOutline,
    documentLockOutline,
    eyeOffOutline,
    eyeSharp,
    lockClosedOutline,
    lockOpenOutline,
    personOutline,
} from "ionicons/icons";
import { useContext, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";

import "./NewPassword.css";
import { Sanitize } from "../utils/Sanitize";
import { RandomId } from "../utils/RandomId";
import {
    PasswordInterface,
    PasswordsContext,
} from "../context/passwords.context";
import { hapticsImpactLight, hapticsNotification } from "../capacitor/haptics";
import { useTranslation } from "react-i18next";

const NewPassword: React.FC = () => {
    const { t } = useTranslation();
    const { passwordsArray, setPasswordsArray } = useContext(PasswordsContext); // Enable and destructure PasswordsContext for useage

    // secureLocalStorage.setItem(key, value)	To set values to secure storage	Supports 'String - Object - Number - Boolean' as value
    // secureLocalStorage.getItem(key)	To get values which is saved on secure local storage	Return null if the key does not exits
    // secureLocalStorage.removeItem(key)	To remove specified key from secure local storage
    // secureLocalStorage.clear()	Removed all data from secure local storage

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    const [presentToast] = useIonToast();
    const router = useIonRouter();

    const updateCurrentContext = (passwordList: PasswordInterface[]) => {
        setPasswordsArray(passwordList); // update the context
    };

    const updateStorage = (passwordList: PasswordInterface[]) => {
        secureLocalStorage.setItem("passwordArray", passwordList); // set paassword array to secure storage
    };

    const submitForm = (e: any) => {
        e.preventDefault(); // prevent default form submission behaviour

        // sanitize form data
        const title = Sanitize(e.target.elements.title.value);
        const username = Sanitize(e.target.elements.username.value);
        const password = Sanitize(e.target.elements.password.value);

        if (title.length && username.length && password.length) {
            // if all fields are filled
            const obj: PasswordInterface = {
                id: RandomId(),
                title: title,
                username: username,
                password: password,
                date: new Date(Date.now()),
            }; // create new password object from form data

            const passwordList = [...passwordsArray]; // copy the array from context
            passwordList.push(obj); // Add new password to the array

            updateCurrentContext(passwordList); // update the context with new array containing newly added password
            updateStorage(passwordList); // update the secure storage
            hapticsNotification("SUCCESS"); // Haptic feedback
            presentToast({
                message: t("PASSWORD_ADDED"),
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
                            text={t("PASSWORD_TITLE")}
                            defaultHref="/home"
                        />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonItem lines="none" className="ion-margin">
                    <IonIcon
                        className="header-icon"
                        icon={documentLockOutline}
                        color="dark"
                    />
                    <IonLabel className="ion-text-wrap">
                        <h2>{t("NEW_PASSWORD")}</h2>
                    </IonLabel>
                </IonItem>

                <form ref={formRef} onSubmit={submitForm}>
                    <IonList>
                        <IonItem>
                            <IonIcon icon={atOutline} slot="start" />
                            <IonLabel position="stacked">{t("SITE_TITLE")}</IonLabel>
                            <IonInput required name="title" type="text" />
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={personOutline} slot="start" />
                            <IonLabel position="stacked">{t("USERNAME")}</IonLabel>
                            <IonInput required name="username" type="text" />
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={lockClosedOutline} slot="start" />
                            <IonLabel position="stacked">{t("PASSWORD")}</IonLabel>
                            <IonInput
                                required
                                name="password"
                                type={showPassword ? "text" : "password"}
                            />
                            <IonButton
                                onClick={() => {
                                    hapticsImpactLight(); // Haptic feedback
                                    setShowPassword(!showPassword);
                                }}
                                fill="clear"
                                slot="end"
                            >
                                <IonIcon
                                    slot="icon-only"
                                    icon={
                                        showPassword ? eyeSharp : eyeOffOutline
                                    }
                                />
                            </IonButton>
                        </IonItem>
                    </IonList>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonButton
                                    onClick={() => hapticsImpactLight()} // Haptic feedback
                                    expand="block"
                                    routerLink="/generatepassword"
                                >
                                    <IonIcon
                                        slot="icon-only"
                                        icon={lockOpenOutline}
                                    />
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton
                                    onClick={() =>
                                        formRef.current?.checkValidity()
                                    }
                                    expand="block"
                                    type="submit"
                                >
                                    {t("ADD_NEW_PASSWORD")}
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default NewPassword;
