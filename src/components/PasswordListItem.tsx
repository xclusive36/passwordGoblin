import {
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonPopover,
    useIonToast,
} from "@ionic/react";
import {
    copyOutline,
    documentLockOutline,
    ellipsisHorizontalOutline,
} from "ionicons/icons";
import { useRef, useState } from "react";
import { Clipboard } from "@capacitor/clipboard";

import "./PasswordListItem.css";
import { PasswordInterface } from "../context/passwords.context";
import { hapticsImpactLight } from "../capacitor/haptics";
import { useTranslation } from "react-i18next";

interface PasswordListItemProps {
    password: PasswordInterface;
}

const PasswordListItem: React.FC<PasswordListItemProps> = ({ password }) => {
    // This component will output a passwordList item for use in the List component

    const { t } = useTranslation(); // destructuring the translation function
    const popover = useRef<HTMLIonPopoverElement>(null); // useRef Reference to the IonPopover element
    const [popoverOpen, setPopoverOpen] = useState(false); // useState Hook to set the popoverOpen state
    const [presentToast] = useIonToast(); // useIonToast Hook to display a toast message

    const openPopover = (e: any) => {
        // This function will open the popover
        popover.current!.event = e;
        setPopoverOpen(true);
    };

    return (
        <IonItem>
            <IonIcon color="dark" slot="start" icon={documentLockOutline} />
            <IonLabel className="ion-text-wrap">
                <h2>
                    <strong>{password.title}</strong>
                </h2>
                <h3>{password.username}</h3>
            </IonLabel>
            <IonButton
                onClick={(e) => {
                    hapticsImpactLight(); // Haptic feedback
                    openPopover(e); // Open the popover
                }}
                color="primary"
                fill="clear"
            >
                <IonIcon slot="icon-only" icon={copyOutline} />
            </IonButton>
            <IonPopover
                ref={popover} // set the reference to the IonPopover element
                isOpen={popoverOpen} // the IonPopover will be open if the popoverOpen state is true
                onDidDismiss={() => setPopoverOpen(false)} // set the popoverOpen state to false when the popover is dismissed
            >
                <IonButton
                    fill="clear"
                    onClick={async () => {
                        hapticsImpactLight(); // Haptic feedback
                        setPopoverOpen(false); // Close the popover
                        await Clipboard.write({ // Write the username to the clipboard
                            string: password.username,
                        });
                        presentToast({ // Display a toast message
                            message: t("COPIED_USERNAME"),
                            duration: 1500,
                            color: "dark",
                        });
                    }}
                    expand="block"
                >
                    {t("COPY_USERNAME")}
                </IonButton>
                <IonButton
                    fill="clear"
                    onClick={async () => {
                        hapticsImpactLight(); // Haptic feedback
                        setPopoverOpen(false); // Close the popover
                        await Clipboard.write({ // Write the password to the clipboard
                            string: password.password,
                        });
                        presentToast({ // Display a toast
                            message: t("COPIED_PASSWORD"),
                            duration: 1500,
                            color: "dark",
                        });
                    }}
                    expand="block"
                >
                    {t("COPY_PASSWORD")}
                </IonButton>
            </IonPopover>
            <IonButton
                onClick={() => hapticsImpactLight()} // Haptic feedback
                color="dark"
                fill="clear"
                routerLink={`/viewitem/${password.id}`}
            >
                <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline} />
            </IonButton>
        </IonItem>
    );
};

export default PasswordListItem;
