import { useContext, useEffect, useRef, useState } from "react";
import { Clipboard } from "@capacitor/clipboard";
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
    IonNote,
    IonPage,
    IonRow,
    IonToolbar,
    useIonAlert,
    useIonRouter,
    useIonToast,
} from "@ionic/react";
import {
    atOutline,
    copyOutline,
    documentLockOutline,
    eyeOffOutline,
    eyeSharp,
    lockClosedOutline,
    lockOpenOutline,
    personOutline,
    trashOutline,
} from "ionicons/icons";
import { useParams } from "react-router";
import "./ViewPassword.css";
import { Sanitize } from "../utils/Sanitize";
import secureLocalStorage from "react-secure-storage";
import { objectPosition } from "../utils/ObjectPosition";
import {
    PasswordInterface,
    PasswordsContext,
} from "../context/passwords.context";
import { hapticsImpactLight, hapticsNotification } from "../capacitor/haptics";
import { useTranslation } from "react-i18next";

const ViewPassword: React.FC = () => {
    const { t } = useTranslation();
    const { passwordsArray, setPasswordsArray } = useContext(PasswordsContext); // Enable and destructure PasswordsContext for useage
    const params = useParams<{ id: string }>(); // get id from url
    const index = objectPosition(passwordsArray, Sanitize(params.id)); // get index of password in array
    const password = passwordsArray[index]; // set password object from passwordsArray

    // secureLocalStorage.setItem(key, value)	To set values to secure storage	Supports 'String - Object - Number - Boolean' as value
    // secureLocalStorage.getItem(key)	To get values which is saved on secure local storage	Return null if the key does not exits
    // secureLocalStorage.removeItem(key)	To remove specified key from secure local storage
    // secureLocalStorage.clear()	Removed all data from secure local storage

    const formRef = useRef<HTMLFormElement>(null); // create ref for form
    const [showPassword, setShowPassword] = useState<boolean>(false); // set show password state which is used to toggle password visibility in the form
    const [formData, setFormData] = useState({
        title: "",
        username: "",
        password: "",
    });

    const [presentToast] = useIonToast();
    const router = useIonRouter();
    const [presentAlert] = useIonAlert();

    useEffect(() => {
        // on initial load
        const passwordObj = {
            title: password?.title,
            username: password?.username,
            password: password?.password,
        };

        setFormData(passwordObj);
    }, [password?.password, password?.title, password?.username]);

    const updateCurrentContext = (passwordList: PasswordInterface[]) => {
        setPasswordsArray(passwordList); // update the context
    };

    const updateStorage = (passwordList: PasswordInterface[]) => {
        secureLocalStorage.setItem("passwordArray", passwordList); // set paassword array to secure storage
    };

    const submitForm = (e: any) => {
        e.preventDefault();

        const title = Sanitize(e.target.elements.title.value);
        const username = Sanitize(e.target.elements.username.value);
        const password = Sanitize(e.target.elements.password.value);

        const passwordList = [...passwordsArray];
        const passwordObj = passwordList.find((obj) => obj.id === params.id);

        if (title.length && username.length && password.length) {
            // if username and password are not empty
            if (
                // if any of the fields are changed
                title !== passwordObj?.title ||
                username !== passwordObj?.username ||
                password !== passwordObj?.password
            ) {
                const index = objectPosition(passwordList, params.id);

                passwordList[index].title = title;
                passwordList[index].username = username;
                passwordList[index].password = password;

                updateCurrentContext(passwordList);
                updateStorage(passwordList);

                hapticsNotification("success"); // haptics notification

                presentToast({
                    message: t("PASSWORD_UPDATED"),
                    duration: 1500,
                });
            }
        }
    };

    const deletePassword = () => {
        hapticsNotification("warning"); // haptics notification
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
                        const passwordList = [...passwordsArray];
                        passwordList.splice(index, 1);

                        updateCurrentContext(passwordList);
                        updateStorage(passwordList);
                        hapticsNotification("success"); // haptics notification

                        presentToast({
                            message: t("PASSWORD_DELETED"),
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
                            text={t("PASSWORD_TITLE")}
                            defaultHref="/home"
                        ></IonBackButton>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton
                            onClick={deletePassword}
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
                                    {password?.title}
                                    <span className="date">
                                        <IonNote>
                                            {new Date(
                                                password?.date
                                            ).toLocaleDateString()}
                                        </IonNote>
                                    </span>
                                </h2>
                            </IonLabel>
                        </IonItem>

                        <div className="ion-margin">
                            <h1>{password?.username}</h1>
                        </div>
                        <form ref={formRef} onSubmit={submitForm}>
                            <IonItem>
                                <IonIcon icon={atOutline} slot="start" />
                                <IonLabel position="stacked">
                                    {t("SITE_TITLE")}
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
                                <IonIcon icon={personOutline} slot="start" />
                                <IonLabel position="stacked">{t("USERNAME")}</IonLabel>
                                <IonInput
                                    required
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onIonChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            username: Sanitize(e.detail.value!),
                                        });
                                    }}
                                />
                                <IonButton
                                    disabled={
                                        formData.username !== password?.username
                                    }
                                    onClick={async () => {
                                        await Clipboard.write({
                                            string: password?.username,
                                        });
                                        hapticsImpactLight(); // haptics notification
                                        presentToast({
                                            message: t("COPIED_USERNAME"),
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
                            <IonItem>
                                <IonIcon
                                    icon={lockClosedOutline}
                                    slot="start"
                                />
                                <IonLabel position="stacked">{t("PASSWORD")}</IonLabel>
                                <IonInput
                                    required
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onIonChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            password: Sanitize(e.detail.value!),
                                        });
                                    }}
                                />
                                <IonButton
                                    onClick={() => {
                                        hapticsImpactLight(); // haptics notification
                                        setShowPassword(!showPassword);
                                    }}
                                    fill="clear"
                                    slot="end"
                                >
                                    <IonIcon
                                        slot="icon-only"
                                        icon={
                                            showPassword
                                                ? eyeSharp
                                                : eyeOffOutline
                                        }
                                    />
                                </IonButton>
                                <IonButton
                                    disabled={
                                        formData.password !== password?.password
                                    }
                                    onClick={async () => {
                                        await Clipboard.write({
                                            string: password?.password,
                                        });
                                        hapticsImpactLight(); // haptics notification
                                        presentToast({
                                            message: t("COPIED_PASSWORD"),
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
                            <IonGrid>
                                <IonRow>
                                    <IonCol size="3">
                                        <IonButton
                                            onClick={() => {
                                                hapticsImpactLight(); // haptics notification
                                            }}
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
                                            disabled={
                                                (formData.title ===
                                                    password?.title &&
                                                    formData.username ===
                                                        password?.username &&
                                                    formData.password ===
                                                        password?.password) ||
                                                formData.title === "" ||
                                                formData.username === "" ||
                                                formData.password === ""
                                            }
                                            expand="block"
                                            type="submit"
                                        >
                                            {t("UPDATE_PASSWORD")}
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </form>
                    </>
                ) : (
                    <div>{t("PASSWORD_NOT_FOUND")}</div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default ViewPassword;
