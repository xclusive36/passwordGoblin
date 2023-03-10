import { useContext, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import {
    IonContent,
    IonHeader,
    IonItemGroup,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { PasswordsContext } from "../context/passwords.context";
import { useTranslation } from "react-i18next";

import "./Home.css";
import SearchBar from "../components/SearchBar";
import SortBy from "../components/SortBy";
import List from "../components/List";
import Fab from "../components/Fab";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    const { t } = useTranslation();
    const { passwordsArray, setPasswordsArray } = useContext(PasswordsContext); // Enable and destructure PasswordsContext for useage

    // secureLocalStorage.setItem(key, value)	To set values to secure storage	Supports 'String - Object - Number - Boolean' as value
    // secureLocalStorage.getItem(key)	To get values which is saved on secure local storage	Return null if the key does not exits
    // secureLocalStorage.removeItem(key)	To remove specified key from secure local storage
    // secureLocalStorage.clear()	Removed all data from secure local storage

    const [search, setSearch] = useState<string>(""); // set searchable string to state used by IonSearchbar to filter passwordsArray
    const [sortOrder, setSortOrder] = useState<string>("asc"); // set sort order to state used to sort passwordsArray asc or desc
    const [sortBy, setSortBy] = useState<string>("date"); // set sort by to state used by IonSelect to sort passwordsArray

    useEffect(() => {
        // pull data from secure storage and set to context
        // secureLocalStorage.clear(); // clear secure storage

        const getPasswordsFromStorage: any =
            secureLocalStorage.getItem("passwordArray"); // pull data from storage
        if (getPasswordsFromStorage) {
            setPasswordsArray(getPasswordsFromStorage); // set to PasswordsContext
        }
    }, [setPasswordsArray]);

    return (
        <IonPage id="home-page">
            <IonHeader mode="ios">
                <IonToolbar mode="ios">
                    <IonTitle>{t("PASSWORD_TITLE")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader mode="ios" collapse="condense">
                    <IonToolbar mode="ios">
                        <IonTitle size="large">{t("PASSWORD_TITLE")}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <SearchBar search={search} setSearch={setSearch} />

                <IonList mode="ios" className="ion-padding-top" lines="none">
                    <IonItemGroup>
                        <SortBy
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            sortOrder={sortOrder}
                            setSortOrder={setSortOrder}
                        />
                        <List
                            array={passwordsArray}
                            type="password"
                            sortBy={sortBy}
                            sortOrder={sortOrder}
                            search={search}
                        />
                    </IonItemGroup>
                </IonList>
                <Fab link={"/newitem"} />
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Home;
