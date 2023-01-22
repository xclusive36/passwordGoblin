import { useCallback, useEffect, useState } from "react";
import generatePassword from "omgopass";
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
    IonList,
    IonPage,
    IonRange,
    IonText,
    IonTitle,
    IonToggle,
    IonToolbar,
    useIonToast,
} from "@ionic/react";
import { copyOutline, refreshCircleOutline } from "ionicons/icons";

import "./RandomPassword.css";
import { Sanitize } from "../utils/Sanitize";
import { hapticsImpactLight } from "../capacitor/haptics";
import { useTranslation } from "react-i18next";

const RandomPassword: React.FC = () => {
    // This component will display page to generate a random password

    const { t } = useTranslation(); // destructuring the translation function
    const [randomPassword, setRandomPassword] = useState(""); // useState Hook to set the password generated to state
    const [syllablesCount, setSyllablesCount] = useState(3); // useState Hook to set the syllablesCount state
    const [minSyllableLength, setMinSyllableLength] = useState(1); // useState Hook to set the minSyllableLength state
    const [maxSyllableLength, setMaxSyllableLength] = useState(3); // useState Hook to set the maxSyllableLength state
    const [hasNumbers, setHasNumbers] = useState(true); // useState Hook to set the hasNumbers state
    const [titlecased, setTitlecased] = useState(true); // useState Hook to set the titlecased state
    const [vowels, setVowels] = useState("aeiou"); // useState Hook to set the vowels state
    const [consonants, setConsonants] = useState("bcdfghjklmnpqrstvwxyz"); // useState Hook to set the consonants state
    const [separators, setSeparators] = useState("!#$"); // useState Hook to set the separators state
    const [present] = useIonToast(); // useIonToast Hook to display a toast message

    const generateRandomPassword = useCallback(() => {
        // This function will generate a random password using the omgopass library based on the set data in the state

        const pass = generatePassword({
            syllablesCount: syllablesCount,
            minSyllableLength: minSyllableLength,
            maxSyllableLength: maxSyllableLength,
            hasNumbers: hasNumbers,
            titlecased: titlecased,
            vowels: vowels,
            consonants: consonants,
            separators: separators,
        });

        setRandomPassword(pass); // set the password generated to state
    }, [
        consonants,
        hasNumbers,
        maxSyllableLength,
        minSyllableLength,
        separators,
        syllablesCount,
        titlecased,
        vowels,
    ]);

    const writeToClipboard = async () => {
        // This function will write the password generated to the clipboard and display a toast message

        await Clipboard.write({
            string: randomPassword,
        });

        present({
            message: t("COPIED_TO_CLIPBOARD"),
            duration: 1500,
            position: "bottom",
        });
    };

    useEffect(() => {
        hapticsImpactLight(); // haptic feedback
        generateRandomPassword(); // generate a random password on page load and when any of the state changes
    }, [generateRandomPassword]);

    return (
        <IonPage id="new-item-page">
            <IonHeader mode="ios" translucent>
                <IonToolbar mode="ios">
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{t("GENERATE_PASSWORD")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader mode="ios" collapse="condense">
                    <IonToolbar mode="ios">
                        <IonTitle size="large">
                            {t("GENERATE_PASSWORD")}
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonLabel>
                        <IonText className="small-text">
                            {t("PASSWORD_SUGGESTION")}:
                        </IonText>
                        <p className="password">{randomPassword}</p>
                    </IonLabel>
                    <IonButton
                        onClick={() => {
                            hapticsImpactLight(); // haptic feedback
                            writeToClipboard(); // write the password generated to the clipboard
                        }}
                        slot="end"
                        fill="clear"
                    >
                        <IonIcon slot="icon-only" icon={copyOutline} />
                    </IonButton>
                    <IonButton
                        onClick={generateRandomPassword} // generate a random password
                        slot="end"
                        fill="clear"
                    >
                        <IonIcon slot="icon-only" icon={refreshCircleOutline} />
                    </IonButton>
                </IonItem>
                <IonList>
                    <IonItem>
                        <IonToggle
                            onIonChange={(e) => setHasNumbers(e.detail.checked)} // set the hasNumbers state
                            slot="start"
                            checked={hasNumbers} // toggle the hasNumbers state
                        />
                        <IonLabel>{t("NUMBERS")}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonToggle
                            onIonChange={(e) => setTitlecased(e.detail.checked)} // set the titlecased state
                            slot="start"
                            checked={titlecased} // toggle the titlecased state
                        />
                        <IonLabel>{t("UPPERCASE")}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">
                            {t("SYLLABLES_COUNT")}
                        </IonLabel>
                        <IonRange
                            value={syllablesCount}
                            max={10}
                            snaps={true}
                            ticks={true}
                            pin={true}
                            onIonChange={(e) => {
                                // if the value is not null, set the syllablesCount state
                                e.detail.value &&
                                    setSyllablesCount(
                                        parseInt(e.detail.value.toString())
                                    );
                            }}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">
                            {t("MIN_SYLLABLES_COUNT")}
                        </IonLabel>
                        <IonRange
                            value={minSyllableLength}
                            max={10}
                            snaps={true}
                            ticks={true}
                            pin={true}
                            onIonChange={(e) => {
                                // if the value is not null, set the minSyllableLength state
                                e.detail.value &&
                                    setMinSyllableLength(
                                        parseInt(e.detail.value.toString())
                                    );
                            }}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">
                            {t("MAX_SYLLABLES_COUNT")}
                        </IonLabel>
                        <IonRange
                            value={maxSyllableLength}
                            max={10}
                            snaps={true}
                            ticks={true}
                            pin={true}
                            onIonChange={(e) => {
                                // if the value is not null, set the maxSyllableLength state
                                e.detail.value &&
                                    setMaxSyllableLength(
                                        parseInt(e.detail.value.toString())
                                    );
                            }}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">{t("VOWELS")}</IonLabel>
                        <IonInput
                            inputmode="text"
                            onIonChange={(e) => {
                                // if the value is not null, set the vowels state
                                e.detail.value
                                    ? setVowels(Sanitize(e.detail.value))
                                    : setVowels("");
                            }}
                            value={vowels}
                            type="text"
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">
                            {t("CONSONANTS")}
                        </IonLabel>
                        <IonInput
                            inputmode="text"
                            onIonChange={(e) => {
                                // if the value is not null, set the consonants state
                                e.detail.value
                                    ? setConsonants(Sanitize(e.detail.value))
                                    : setConsonants("");
                            }}
                            value={consonants}
                            type="text"
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">
                            {t("SEPARATORS")}
                        </IonLabel>
                        <IonInput
                            inputmode="text"
                            onIonChange={(e) => {
                                // if the value is not null, set the separators state
                                e.detail.value
                                    ? setSeparators(Sanitize(e.detail.value))
                                    : setSeparators("");
                            }}
                            value={separators}
                            type="text"
                        />
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default RandomPassword;
