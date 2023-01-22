import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/Home";
import ViewPassword from "./pages/ViewPassword";
import NewPassword from "./pages/NewPassword";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import RandomPassword from "./pages/RandomPassword";
import { PasswordsProvider } from "./context/passwords.context";
import Notes from "./pages/Notes";
import { NotesProvider } from "./context/notes.context";
import ViewNote from "./pages/ViewNote";
import NewNote from "./pages/NewNote";

import { useTranslation } from "react-i18next";
import { getLanguageCode } from "./capacitor/device";
import { useCallback, useEffect } from "react";

setupIonicReact();

const App: React.FC = () => {
    const { i18n } = useTranslation();

    const getLanguage = useCallback(async () => {
        const language = await getLanguageCode(); // returns "en"
        i18n.changeLanguage(language?.value); // changes the language
    }, [i18n]);

    useEffect(() => {
        getLanguage();
    }, [getLanguage]);

    return (
        <IonApp>
            <IonReactRouter>
                <PasswordsProvider>
                    <NotesProvider>
                        <IonRouterOutlet>
                            <Route path="/" exact={true}>
                                <Redirect to="/home" />
                            </Route>
                            <Route path="/home" exact={true}>
                                <Home />
                            </Route>
                            <Route path="/newitem" exact={true}>
                                <NewPassword />
                            </Route>
                            <Route path="/newnote" exact={true}>
                                <NewNote />
                            </Route>
                            <Route path="/viewitem/:id">
                                <ViewPassword />
                            </Route>
                            <Route path="/generatepassword" exact={true}>
                                <RandomPassword />
                            </Route>
                            <Route path="/notes" exact={true}>
                                <Notes />
                            </Route>
                            <Route path="/viewnote/:id">
                                <ViewNote />
                            </Route>
                        </IonRouterOutlet>
                    </NotesProvider>
                </PasswordsProvider>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
