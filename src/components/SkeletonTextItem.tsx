import { IonItem, IonLabel, IonSkeletonText, IonThumbnail } from "@ionic/react";

const SkeletonText: React.FC = () => (
    // This component will output a skeleton text for use in the List component
    
    <IonItem>
        <IonThumbnail style={{ width: "27px" }} slot="start">
            <IonSkeletonText
                style={{
                    width: "27px",
                    height: "27px",
                    marginTop: "15px",
                }}
            />
        </IonThumbnail>
        <IonLabel>
            <h3>
                <IonSkeletonText style={{ width: "80%" }}></IonSkeletonText>
            </h3>
            <p>
                <IonSkeletonText style={{ width: "60%" }}></IonSkeletonText>
            </p>
        </IonLabel>
        <IonThumbnail style={{ width: "27px" }} slot="end">
            <IonSkeletonText
                style={{
                    width: "27px",
                    height: "27px",
                    marginTop: "15px",
                }}
            />
        </IonThumbnail>
        <IonThumbnail style={{ width: "27px" }} slot="end">
            <IonSkeletonText
                style={{
                    width: "27px",
                    height: "27px",
                    marginTop: "15px",
                }}
            />
        </IonThumbnail>
    </IonItem>
);

export default SkeletonText;
