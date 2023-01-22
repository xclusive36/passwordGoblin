import { IonSearchbar } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { hapticsImpactLight } from "../capacitor/haptics";

interface ContainerProps {
    search: string;
    setSearch: (search: string) => void;
}

const SearchBar: React.FC<ContainerProps> = ({ search, setSearch }) => {
    // This component will display a searchbar that will filter an array based on the search prop.

    const { t } = useTranslation(); // destructuring the translation function
    return (
        <IonSearchbar
            value={search}
            placeholder={`${t("SEARCH")}`}
            onIonChange={(e) => {
                hapticsImpactLight(); // Haptic feedback
                setSearch(e.detail.value!); // Set the search state
            }}
            mode="ios"
        />
    );
};

export default SearchBar;
