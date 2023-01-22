import { IonButton, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { documentLockOutline, ellipsisHorizontalOutline } from "ionicons/icons";

import "./NoteListItem.css";
import { NotesInterface } from "../context/notes.context";
import { hapticsImpactLight } from "../capacitor/haptics";

interface NoteListItemProps {
    note: NotesInterface;
}

const NoteListItem: React.FC<NoteListItemProps> = ({ note }) => {
    // This component will output a noteList item for use in the List component

    return (
        <IonItem>
            <IonIcon color="dark" slot="start" icon={documentLockOutline} />
            <IonLabel className="ion-text-wrap">
                <h2>
                    <strong>{note.title}</strong>
                </h2>
                <h3>{note.note}</h3>
            </IonLabel>
            <IonButton
                onClick={() => hapticsImpactLight()}
                color="dark"
                fill="clear"
                routerLink={`/viewnote/${note.id}`}
            >
                <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline} />
            </IonButton>
        </IonItem>
    );
};

export default NoteListItem;
