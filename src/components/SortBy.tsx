import {
    IonButton,
    IonIcon,
    IonItemDivider,
    IonSelect,
    IonSelectOption,
} from "@ionic/react";
import { swapVerticalOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";
import { hapticsImpactLight } from "../capacitor/haptics";

interface ContainerProps {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    sortOrder: string;
    setSortOrder: (sortOrder: string) => void;
}

const SortBy: React.FC<ContainerProps> = ({
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
}) => {
    // This component will display a IonItemDivider bar provide functionality
    // that will filter an array based on the search prop.

    const { t } = useTranslation(); // destructuring the translation function

    return (
        <IonItemDivider>
            <IonSelect
                onSelect={() => hapticsImpactLight()} // Haptic feedback
                onClick={() => hapticsImpactLight()} // Haptic feedback
                value={sortBy}
                placeholder={`t("SORT_BY_DATE")")`}
                onIonChange={(e) => {
                    hapticsImpactLight(); // Haptic feedback
                    setSortBy(e.detail.value); // Set the sortBy state
                }}
            >
                <IonSelectOption value="date">
                    {t("SORT_BY_DATE")}
                </IonSelectOption>
                <IonSelectOption value="alpha">
                    {t("SORT_BY_ALPHABET")}
                </IonSelectOption>
            </IonSelect>
            <IonButton
                onClick={() => {
                    hapticsImpactLight(); // Haptic feedback
                    sortOrder === "asc" // Flip the sortOrder state as desc or asc
                        ? setSortOrder("desc")
                        : setSortOrder("asc");
                }}
                slot="end"
                fill="clear"
            >
                <IonIcon icon={swapVerticalOutline} />
                &nbsp;
                {sortOrder === "asc"
                    ? t("SORT_BY_ASCENDING")
                    : t("SORT_BY_DESCENDING")}
            </IonButton>
        </IonItemDivider>
    );
};

export default SortBy;
