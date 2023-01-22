import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { hapticsImpactLight } from "../capacitor/haptics";

interface ContainerProps {
    link: string;
}

const Fab: React.FC<ContainerProps> = ({ link }) => (
    // This component will display a floating action button that will navigate to the add page
    
    <IonFab edge slot="fixed" vertical="bottom" horizontal="center">
        <IonFabButton
            onClick={() => hapticsImpactLight()}
            routerLink={link}
            color="secondary"
        >
            <IonIcon icon={add} />
        </IonFabButton>
    </IonFab>
);

export default Fab;
