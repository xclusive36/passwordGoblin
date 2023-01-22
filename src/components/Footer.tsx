import {
    IonButton,
    IonCol,
    IonFooter,
    IonGrid,
    IonIcon,
    IonRow,
    IonToolbar,
} from "@ionic/react";
import { documentLockOutline, shieldCheckmarkOutline } from "ionicons/icons";
import { hapticsImpactLight } from "../capacitor/haptics";

const Footer: React.FC = () => {
    // This component will display a footer with two buttons that will navigate between the home page and notes page
    
    return (
        <IonFooter mode="ios">
            <IonToolbar>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonButton
                                onClick={() => hapticsImpactLight()}
                                routerLink={"/home"}
                                routerDirection="back"
                                color="dark"
                                fill="clear"
                            >
                                <IonIcon
                                    slot="icon-only"
                                    icon={documentLockOutline}
                                />
                            </IonButton>
                        </IonCol>
                        <IonCol className="ion-text-center">
                            <IonButton
                                onClick={() => hapticsImpactLight()}
                                routerLink={"/notes"}
                                color="dark"
                                fill="clear"
                            >
                                <IonIcon
                                    slot="icon-only"
                                    icon={shieldCheckmarkOutline}
                                />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonFooter>
    );
};

export default Footer;
