import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// We can localize to any language and any number of languages.
const resources = {
    en: {
        translation: {
            APP_NAME: "Password Goblin",
            PASSWORD_TITLE: "Password List",
            NOTES_TITLE: "Notes List",
            SORT_BY_DATE: "Date Created",
            SORT_BY_ALPHABET: "Alphabetical",
            SORT_BY_ASCENDING: "Ascending",
            SORT_BY_DESCENDING: "Descending",
            SEARCH: "Search",
            COPIED_USERNAME: "Username Copied!",
            COPIED_PASSWORD: "Password Copied!",
            COPIED_NOTE: "Note Copied!",
            COPY_USERNAME: "Copy Username",
            COPY_PASSWORD: "Copy Password",
            PASSWORD_UPDATED: "Password Updated!",
            NOTE_UPDATED: "Note Updated!",
            WARNING: "Warning!",
            ARE_YOU_SURE: "Are you sure you want to delete this?",
            CANCEL: "Cancel",
            OKAY: "Okay",
            PASSWORD_DELETED: "Password Deleted!",
            NOTE_DELETED: "Note Deleted!",
            SITE_TITLE: "Site title",
            NOTE_TITLE: "Note title",
            USERNAME: "Username",
            PASSWORD: "Password",
            NOTE: "Note",
            UPDATE_PASSWORD: "Update Password",
            UPDATE_NOTE: "Update Note",
            PASSWORD_NOT_FOUND: "Password not found",
            NOTE_NOT_FOUND: "Note not found",
            PASSWORD_ADDED: "Password Added!",
            NOTE_ADDED: "Note Added!",
            NEW_PASSWORD: "New Password",
            NEW_NOTE: "New Note",
            ADD_NEW_PASSWORD: "Add New Password",
            ADD_NEW_NOTE: "Add New Note",
            COPIED_TO_CLIPBOARD: "Copied to Clipboard!",
            GENERATE_PASSWORD: "Generate Password",
            PASSWORD_SUGGESTION: "Password Suggestion",
            NUMBERS: "Numbers (123)",
            UPPERCASE: "Uppercase (ABC)",
            SYLLABLES_COUNT: "Syllables Count",
            MIN_SYLLABLES_COUNT: "Minimum Syllables Count",
            MAX_SYLLABLES_COUNT: "Maximum Syllables Count",
            VOWELS: "Vowels",
            CONSONANTS: "Consonants",
            SEPARATORS: "Separators",

            PRIVACY_POLICY: "Privacy Policy",
            TERMS_OF_USE: "Terms of Use",
            REMOVE_ALL_DATA: "Remove All Data",

            PRIVACY_POLICY_TEXT_1: `This Privacy Policy is meant to help you understand what
            information we collect, why we collect it, and how you
            can update, manage, export, and delete your information.`,
            PRIVACY_POLICY_TEXT_2: `INFORMATION LITESTEP COLLECTS`,
            PRIVACY_POLICY_TEXT_3: `What ever data you create within the application its
            self, you have full control over. It???s your data to Add,
            Edit, or Delete. If you do not wish to store any
            information, simply delete it off of the application. We
            want you to understand that you are in control of your
            data.`,
            PRIVACY_POLICY_TEXT_4: `Things you create or provide to us`,
            PRIVACY_POLICY_TEXT_5: `When you create a LiteStep Account, you provide us with
            personal information that includes your name and a email`,
            PRIVACY_POLICY_TEXT_6: `The content you add using the application is your own.
            We do not assume ownership of any information you input
            into the application.`,
            PRIVACY_POLICY_TEXT_7: `Information we collect as you use our services`,
            PRIVACY_POLICY_TEXT_8: `We may collect crash or bug reports sent by the
            application during usage.`,
            PRIVACY_POLICY_TEXT_9: `We collect this information when a LiteStep service on
            your device contacts our servers ??? for example, when you
            install an app from the IOS App Store or when a service
            checks for automatic updates.`,
            PRIVACY_POLICY_TEXT_10: `WHY LITESTEP COLLECTS DATA`,
            PRIVACY_POLICY_TEXT_11: `We use your information to ensure our services are
            working as intended, such as tracking outages or
            troubleshooting issues that get report to us. We use
            that information to make improvements to our services.`,
            PRIVACY_POLICY_TEXT_12: `We use the information we collect in existing services
            to help us develop new ones. We use the information we
            collect to provide personalized content.`,
            PRIVACY_POLICY_TEXT_13: `We don???t share information that personally identifies
            you with advertisers, such as your name or email.`,
            PRIVACY_POLICY_TEXT_14: `We use data for analytics and measurement to understand
            how our services are used. For example, we analyze data
            about your visits to our sites to do things like
            optimize product design. We use a variety of tools to do
            this, including Google Analytics.`,

            TERMS_1: `Welcome to LiteStep!`,
            TERMS_2: `Thanks for using our products and services. The Services
            are provided by LiteStep.`,
            TERMS_3: `By using our Services, you are agreeing to these terms.
            Please read them carefully.`,
            TERMS_4: `Using our Services`,
            TERMS_5: `You must follow any policies made available to you
            within the Services.`,
            TERMS_6: `Don???t misuse our Services. Don???t try to access our
            Services using any method other than the interface and
            the instructions provided. You may use our Services only
            as permitted by law, including applicable export and
            re-export control laws and regulations. We may suspend
            or stop providing our Services to you if you do not
            comply with our terms and conditions or policies or if
            we are investigating suspected misconduct.`,
            TERMS_7: `Using our Services does not give you ownership of any
            intellectual property rights in our Services or the
            content you access. You may not reuse content from our
            Services unless granted permission or are otherwise
            permitted by law. These terms do not grant you the right
            to use any branding or logos used in our Services. Don???t
            remove, obscure, or alter any legal notices displayed in
            or along with our Services.`,
            TERMS_8: `Any content provided is the sole responsibility of the
            entity that makes it available. We may review content to
            determine whether it is illegal or violates our
            policies, we may remove or refuse to display content
            that we reasonably believe violates our policies or the
            law.`,
            TERMS_9: `In connection with your use of the Services, we may send
            you service announcements, administrative messages, and
            other information. You may opt out of some of those
            communications.`,
            TERMS_10: `Do not use such Services in a way that distracts you and
            prevents you from obeying traffic or safety laws.`,
            TERMS_11: `Your User Account`,
            TERMS_12: `You will need a User Account in order to use our
            Services. You may create your own account, or you may
            use either an Apple, Google, or Facebook Account to
            Login.`,
            TERMS_13: `To protect your LiteStep Account, keep your password
            confidential. You are responsible for the activity that
            happens in your LiteStep Account.`,
            TERMS_14: `Privacy and Copyright Protection`,
            TERMS_15: `Our privacy policy explains how we treat your personal
            data and protect your privacy when you use our Services.
            By using our Services, you agree that LiteStep can use
            such data in accordance with our privacy policies.`,
            TERMS_16: `We respond to notices of alleged copyright infringement
            and terminate accounts of repeat infringers according to
            the process set out in the U.S. Digital Millennium
            Copyright Act.`,
            TERMS_17: `Your Content in our Services`,
            TERMS_18: `Our Services allow you to upload, submit, store, send or
            receive content. You retain ownership of any
            intellectual property rights that you hold in that
            content.`,
            TERMS_19: `When you upload, submit, store, send or receive content
            to or through our Services, you give LiteStep (and those
            we work with) a worldwide license to use, host, store,
            reproduce, modify, create derivative works (such as
            those resulting from translations, adaptations or other
            changes we make so that your content works better with
            our Services), communicate, publish, publicly perform,
            publicly display and distribute such content. The rights
            you grant in this license are for the limited purpose of
            operating, promoting, and improving our Services, and to
            develop new ones. This license continues even if you
            stop using our Services. Some Services may offer you
            ways to access and remove content that has been provided
            to that Service.`,
            TERMS_20: `You can find more information about how LiteStep uses
            and stores content in the privacy policy. If you submit
            feedback or suggestions about our Services, we may use
            your feedback or suggestions without obligation to you.`,
            TERMS_21: `About Software in our Services`,
            TERMS_22: `When a Service requires or includes downloadable
            software, this software may update automatically on your
            device once a new version or feature is available. Some
            Services may let you adjust your automatic update
            settings.`,
            TERMS_23: `LiteStep gives you a personal, worldwide, royalty-free,
            non-assignable and non-exclusive license to use the
            software provided to you by LiteStep as part of the
            Services. This license is for the sole purpose of
            enabling you to use and enjoy the benefit of the
            Services as provided by LiteStep, in the manner
            permitted by these terms. You may not copy, modify,
            distribute, sell, or lease any part of our Services or
            included software, nor may you reverse engineer or
            attempt to extract the source code of that software,
            unless laws prohibit those restrictions or you have our
            written permission.`,
            TERMS_24: `Modifying and Terminating our Services`,
            TERMS_25: `We are constantly changing and improving our Services.
            We may add or remove functionalities or features, and we
            may suspend or stop a Service altogether.`,
            TERMS_26: `You can stop using our Services at any time, although
            we???ll be sorry to see you go. LiteStep may also stop
            providing Services to you, or add or create new limits
            to our Services at any time.`,
            TERMS_27: `We believe that you own your data and preserving your
            access to such data is important. If we discontinue a
            Service, where reasonably possible, we will give you
            reasonable advance notice and a chance to get
            information out of that Service.`,
            TERMS_28: `Our Warranties and Disclaimers`,
            TERMS_29: `We provide our Services using a commercially reasonable
            level of skill and care and we hope that you will enjoy
            using them. But there are certain things that we don???t
            promise about our Services.`,
            TERMS_30: `OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR
            ADDITIONAL TERMS, NEITHER LITESTEP NOR ITS SUPPLIERS
            OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE
            SERVICES. FOR EXAMPLE, WE DON???T MAKE ANY COMMITMENTS
            ABOUT THE CONTENT WITHIN THE SERVICES, THE SPECIFIC
            FUNCTIONS OF THE SERVICES, OR THEIR RELIABILITY,
            AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE
            PROVIDE THE SERVICES ???AS IS???.`,
            TERMS_31: `SOME JURISDICTIONS PROVIDE FOR CERTAIN WARRANTIES,
            LIKE THE IMPLIED WARRANTY OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND
            NON-INFRINGEMENT. TO THE EXTENT PERMITTED BY LAW, WE
            EXCLUDE ALL WARRANTIES.`,
            TERMS_32: `Liability for our Services`,
            TERMS_33: `WHEN PERMITTED BY LAW, LITESTEP, AND LITESTEPS
            SUPPLIERS AND DISTRIBUTORS, WILL NOT BE RESPONSIBLE
            FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL
            LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY, OR PUNITIVE DAMAGES.`,
            TERMS_34: `TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY
            OF LITESTEP, AND ITS SUPPLIERS AND DISTRIBUTORS, FOR
            ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY
            IMPLIED WARRANTIES, IS LIMITED TO THE AMOUNT YOU
            PAID US TO USE THE SERVICES (OR, IF WE CHOOSE, TO
            SUPPLYING YOU THE SERVICES AGAIN).`,
            TERMS_35: `IN ALL CASES, LITESTEP, AND ITS SUPPLIERS AND
            DISTRIBUTORS, WILL NOT BE LIABLE FOR ANY LOSS OR
            DAMAGE THAT IS NOT REASONABLY FORESEEABLE.`,
            TERMS_36: `Business uses of our Services`,
            TERMS_37: `If you are using our Services on behalf of a business,
            that business accepts these terms. It will hold harmless
            and indemnify LiteStep and its affiliates, officers,
            agents, and employees from any claim, suit or action
            arising from or related to the use of the Services or
            violation of these terms, including any liability or
            expense arising from claims, losses, damages, suits,
            judgments, litigation costs and attorneys??? fees.`,
            TERMS_38: `About these Terms`,
            TERMS_39: `We may modify these terms or Services at any time. We???ll
            post notice of modifications to these Terms and Services
            on this page. We???ll post notice of modified additional
            terms in the applicable Service. Changes will not apply
            retroactively and will become effective no sooner than
            fourteen days after they are posted. However, changes
            addressing new functions for a Service or changes made
            for legal reasons will be effective immediately. If you
            do not agree to the modified terms for a Service, you
            should discontinue your use of that Service.`,
            TERMS_40: `If there is a conflict between these terms and the
            additional terms, the additional terms will control for
            that conflict.`,
            TERMS_41: `These terms control the relationship between LiteStep
            and you. They do not create any third party beneficiary
            rights.`,
            TERMS_42: `If you do not comply with these terms, and we don???t take
            action right away, this doesn???t mean that we are giving
            up any rights that we may have (such as taking action in
            the future).`,
            TERMS_43: `If it turns out that a particular term is not
            enforceable, this will not affect any other terms.`,
            TERMS_44: `The laws of Maryland, U.S.A., will apply to any disputes
            arising out of or relating to these terms or the
            Services. All claims arising out of or relating to these
            terms or the Services will be litigated exclusively in
            the federal or state courts of Maryland, USA, and you
            and LiteStep consent to personal jurisdiction in those
            courts.`,
        },
    },
    es: {
        translation: {
            APP_NAME: "LiteStep",
            CATEGORY_RESET_MESSAGE:
                "??Est?? seguro de que desea restablecer todos los recuentos de esta categor??a a cero?",
            RESET_HEADER: "??Advertencia!",
            RESET_SUBHEADER: "Estas seguro",
            FOOTER_RESET_MESSAGE:
                "??Est?? seguro de que desea restablecer todos los recuentos a cero?",
            COPYRIGHT: "?? 2019 LiteStep",
            CANCEL: "Cancelar",
            CONFIRM: "OK",
            RESET: "Reiniciar",
            EMPTY_CATEGORY: "Su lista de categor??as est?? vac??a",
            EMPTY_ITEM: "Tu lista de art??culos est?? vac??a.",
            EMPTY_SEARCH: "Sin resultados de b??squeda",
            EMPTY_CATEGORY_PICK:
                "??Todas las categor??as han sido seleccionadas!",
            EMPTY_ITEM_PICK: "??Todos los art??culos han sido seleccionados!",
            CATEGORY_TITLE: "Categor??as",
            CATEGORYEDIT_TITLE: "Editar categor??as",
            CATEGORY_PLACEHOLDER: "a??adir categor??a",
            ITEM_PLACEHOLDER: "A??adir art??culo",
            SEARCH_PLACEHOLDER: "B??squeda",
            TOAST_LISTUPDATED: "Lista actualizada",
            TOAST_LISTRESTORED: "Lista restaurada",
            UPDATE_BUTTON: "Actualizar cambios",
            CANCEL_BUTTON: "Cancelar",
            BACK: "atr??s",
            EDIT: "Editar",
            CLEAR: "Claro",
            ITEM: "Item",
            ITEMS: "Items",
            ITEM_FOOTER: "Hecho",

            PRIVACY_POLICY: "Pol??tica de privacidad",
            TERMS_OF_USE: "T??rminos de Uso",
            REMOVE_ALL_DATA: "Eliminar todos los datos",

            PRIVACY_POLICY_TEXT_1: `Esta Pol??tica de privacidad est?? destinada a ayudarlo a comprender qu??
            informaci??n que recopilamos, por qu?? la recopilamos y c??mo usted
            puede actualizar, administrar, exportar y eliminar su informaci??n.`,
            PRIVACY_POLICY_TEXT_2: `INFORMACI??N QUE LITESTEP RECOPILA`,
            PRIVACY_POLICY_TEXT_3: `Cualesquiera que sean los datos que cree dentro de la aplicaci??n, su
            usted mismo, usted tiene control total sobre. Son sus datos para agregar,
            Editar o Eliminar. Si no desea almacenar ninguna
            informaci??n, simplemente elim??nela de la aplicaci??n. Nosotros
            quiero que entiendas que tienes el control de tu
            datos.`,
            PRIVACY_POLICY_TEXT_4: `Cosas que creas o nos proporcionas`,
            PRIVACY_POLICY_TEXT_5: `Cuando crea una cuenta LiteStep, nos proporciona
            informaci??n personal que incluye su nombre y un correo electr??nico`,
            PRIVACY_POLICY_TEXT_6: `El contenido que agregas usando la aplicaci??n es tuyo.
            No asumimos la propiedad de ninguna informaci??n que ingrese
            en la aplicaci??n.`,
            PRIVACY_POLICY_TEXT_7: `Informaci??n que recopilamos a medida que utiliza nuestros servicios`,
            PRIVACY_POLICY_TEXT_8: `Podemos recopilar informes de fallas o errores enviados por el aplicaci??n 
            durante el uso.`,
            PRIVACY_POLICY_TEXT_9: `Recopilamos esta informaci??n cuando un servicio LiteStep en
            su dispositivo se comunica con nuestros servidores, por ejemplo, cuando usted
            instalar una aplicaci??n de la App Store de IOS o cuando un servicio
            comprueba si hay actualizaciones autom??ticas.`,
            PRIVACY_POLICY_TEXT_10: `POR QU?? LITESTEP RECOPILA DATOS`,
            PRIVACY_POLICY_TEXT_11: `Usamos su informaci??n para asegurar que nuestros servicios sean
            trabajando seg??n lo previsto, como el seguimiento de interrupciones o
            soluci??n de problemas que nos informan. Usamos
            esa informaci??n para hacer mejoras a nuestros servicios.`,
            PRIVACY_POLICY_TEXT_12: `Usamos la informaci??n que recopilamos en los servicios existentes
            para ayudarnos a desarrollar otros nuevos. Usamos la informaci??n que
            recopilar para proporcionar contenido personalizado.`,
            PRIVACY_POLICY_TEXT_13: `No compartimos informaci??n que identifique personalmente
            con los anunciantes, como su nombre o correo electr??nico.`,
            PRIVACY_POLICY_TEXT_14: `Usamos datos para an??lisis y medici??n para comprender
            c??mo se utilizan nuestros servicios. Por ejemplo, analizamos datos
            sobre sus visitas a nuestros sitios para hacer cosas como
            optimizar el dise??o del producto. Usamos una variedad de herramientas para hacer
            esto, incluido Google Analytics.`,

            TERMS_1: `??Bienvenido a LiteStep!`,
            TERMS_2: `Gracias por utilizar nuestros productos y servicios. Los servicios
            son proporcionados por LiteStep.`,
            TERMS_3: `Al utilizar nuestros Servicios, usted acepta estos t??rminos.
            Por favor, l??alas cuidadosamente.`,
            TERMS_4: `Uso de nuestros servicios`,
            TERMS_5: `Debe seguir todas las pol??ticas disponibles para usted
            dentro de los Servicios.`,
            TERMS_6: `No haga un mal uso de nuestros Servicios. No intente acceder a nuestro
            Servicios utilizando cualquier m??todo que no sea la interfaz y
            las instrucciones proporcionadas. Puede utilizar nuestros Servicios ??nicamente
            seg??n lo permita la ley, incluida la exportaci??n y
            leyes y reglamentos de control de reexportaciones. Podemos suspender
            o dejar de proporcionarle nuestros Servicios si no lo hace
            cumplir con nuestros t??rminos y condiciones o pol??ticas o si
            estamos investigando sospechas de mala conducta.`,
            TERMS_7: `El uso de nuestros Servicios no le otorga la propiedad de ning??n
            derechos de propiedad intelectual en nuestros Servicios o el
            contenido al que accede. No puede reutilizar el contenido de nuestro
            Servicios a menos que se otorgue permiso o sean de otro modo
            permitido por la ley. Estos t??rminos no le otorgan el derecho
            utilizar cualquier marca o logotipo utilizado en nuestros Servicios. No
            eliminar, ocultar o alterar cualquier aviso legal que se muestre en
            o junto con nuestros Servicios.`,
            TERMS_8: `Cualquier contenido proporcionado es responsabilidad exclusiva del
            entidad que lo pone a disposici??n. Podemos revisar el contenido para
            determinar si es ilegal o viola nuestros
            pol??ticas, podemos eliminar o negarnos a mostrar contenido
            que creamos razonablemente que viola nuestras pol??ticas o las
            ley.`,
            TERMS_9: `En relaci??n con su uso de los Servicios, podemos enviar
            servicios de anuncios, mensajes administrativos y
            otra informaci??n. Puede optar por no participar en algunos de esos
            comunicaciones`,
            TERMS_10: `No use tales Servicios de una manera que lo distraiga a usted y
            le impide obedecer las leyes de tr??nsito o de seguridad.`,
            TERMS_11: `Su cuenta de usuario`,
            TERMS_12: `Necesitar?? una cuenta de usuario para utilizar nuestro
            Servicios. Puede crear su propia cuenta, o puede
            utilizar una cuenta de Apple, Google o Facebook para
            Acceso.`,
            TERMS_13: `Para proteger su cuenta LiteStep, mantenga su contrase??a
            confidencial. Usted es responsable de la actividad que
            ocurre en su cuenta LiteStep.`,
            TERMS_14: `Privacidad y protecci??n de derechos de autor`,
            TERMS_15: `Nuestra pol??tica de privacidad explica c??mo tratamos su informaci??n personal.
            datos y proteger su privacidad cuando utiliza nuestros Servicios.
            Al usar nuestros Servicios, usted acepta que LiteStep puede usar
            dichos datos de acuerdo con nuestras pol??ticas de privacidad.`,
            TERMS_16: `Respondemos a avisos de supuesta infracci??n de derechos de autor
            y cancelar las cuentas de los infractores reincidentes de acuerdo con
            el proceso establecido en el Milenio Digital de EE. UU.
            Ley de derechos de autor.`,
            TERMS_17: `Su Contenido en nuestros Servicios`,
            TERMS_18: `Nuestros Servicios le permiten cargar, enviar, almacenar, enviar o
            recibir contenido. Usted conserva la propiedad de cualquier
            derechos de propiedad intelectual que posee en ese
            contenido.`,
            TERMS_19: `Cuando carga, env??a, almacena, env??a o recibe contenido
            hacia o a trav??s de nuestros Servicios, le das a LiteStep (y esos
            trabajamos con) una licencia mundial para usar, alojar, almacenar,
            reproducir, modificar, crear obras derivadas (como
            los resultantes de traducciones, adaptaciones u otros
            cambios que hacemos para que su contenido funcione mejor con
            nuestros Servicios), comunicar, publicar, realizar p??blicamente,
            exhibir y distribuir p??blicamente dicho contenido. Los derechos
            usted otorga en esta licencia son para el prop??sito limitado de
            operar, promover y mejorar nuestros Servicios, y para
            desarrollar otros nuevos. Esta licencia contin??a incluso si usted
            dejar de usar nuestros Servicios. Algunos Servicios pueden ofrecerle
            formas de acceder y eliminar el contenido que se ha proporcionado
            a ese Servicio.`,
            TERMS_20: `Puede encontrar m??s informaci??n sobre c??mo utiliza LiteStep
            y almacena contenido en la pol??tica de privacidad. si env??as
            comentarios o sugerencias sobre nuestros Servicios, podemos utilizar
            sus comentarios o sugerencias sin ning??n compromiso para con usted.`,
            TERMS_21: `Acerca del software en nuestros servicios`,
            TERMS_22: `Cuando un Servicio requiere o incluye contenido descargable
            software, este software puede actualizarse autom??ticamente en su
            dispositivo una vez que una nueva versi??n o funci??n est?? disponible. Alguno
            Los servicios pueden permitirle ajustar su actualizaci??n autom??tica
            ajustes.`,
            TERMS_23: `LiteStep le brinda un acceso personal, mundial, libre de regal??as,
            licencia intransferible y no exclusiva para utilizar el
            software proporcionado por LiteStep como parte del
            Servicios. Esta licencia es con el ??nico prop??sito de
            lo que le permite utilizar y disfrutar de los beneficios de la
            Servicios proporcionados por LiteStep, de la manera
            permitido por estos t??rminos. Usted no puede copiar, modificar,
            distribuir, vender o arrendar cualquier parte de nuestros Servicios o
            software incluido, ni puede realizar ingenier??a inversa o
            intentar extraer el c??digo fuente de ese software,
            a menos que las leyes proh??ban esas restricciones o usted tenga nuestra
            permiso escrito.`,
            TERMS_24: `Modificaci??n y terminaci??n de nuestros servicios`,
            TERMS_25: `Estamos constantemente cambiando y mejorando nuestros Servicios.
            Podemos agregar o eliminar funcionalidades o caracter??sticas, y
            puede suspender o detener un Servicio por completo.`,
            TERMS_26: `Puede dejar de usar nuestros Servicios en cualquier momento, aunque
            lamentaremos que te vayas. LiteStep tambi??n puede detener
            proporcionarle Servicios, o agregar o crear nuevos l??mites
            a nuestros Servicios en cualquier momento.`,
            TERMS_27: `Creemos que usted es due??o de sus datos y preservar su
            el acceso a tales datos es importante. Si descontinuamos un
            Servicio, cuando sea razonablemente posible, le daremos
            aviso previo razonable y la oportunidad de obtener
            informaci??n fuera de ese Servicio.`,
            TERMS_28: `Nuestras garant??as y renuncias`,
            TERMS_29: `Brindamos nuestros Servicios utilizando un m??todo comercialmente razonable
            nivel de habilidad y cuidado y esperamos que disfrute
            utilizarlos. Pero hay ciertas cosas que no
            promesa sobre nuestros Servicios.`,
            TERMS_30: `APARTE DE LO EXPRESAMENTE ESTABLECIDO EN ESTOS T??RMINOS O
            T??RMINOS ADICIONALES, NI LITESTEP NI SUS PROVEEDORES
            O LOS DISTRIBUIDORES HACEN PROMESAS ESPEC??FICAS SOBRE EL
            SERVICIOS. POR EJEMPLO, NO NOS COMPROMETEMOS
            SOBRE EL CONTENIDO DENTRO DE LOS SERVICIOS, EL ESPEC??FICO
            FUNCIONES DE LOS SERVICIOS, O SU FIABILIDAD,
            DISPONIBILIDAD O CAPACIDAD PARA SATISFACER SUS NECESIDADES. NOSOTROS
            PROPORCIONAR LOS SERVICIOS "TAL CUAL".`,
            TERMS_31: `ALGUNAS JURISDICCIONES OFRECEN CIERTAS GARANT??AS,
            COMO LA GARANT??A IMPL??CITA DE COMERCIABILIDAD,
            IDONEIDAD PARA UN PROP??SITO PARTICULAR Y
            NO INFRACCI??N. EN LA MEDIDA EN QUE LO PERMITA LA LEY, NOSOTROS
            EXCLUYA TODAS LAS GARANT??AS.`,
            TERMS_32: `Responsabilidad por nuestros Servicios`,
            TERMS_33: `CUANDO LO PERMITA LA LEY, LITESTEP Y LITESTEPS
            PROVEEDORES Y DISTRIBUIDORES, NO SER??N RESPONSABLES
            POR P??RDIDA DE BENEFICIOS, INGRESOS O DATOS, FINANCIEROS
            P??RDIDAS O INDIRECTAS, ESPECIALES, CONSECUENCIALES,
            DA??OS EJEMPLARES O PUNITIVOS.`,
            TERMS_34: `EN LA MEDIDA EN QUE LO PERMITA LA LEY, LA RESPONSABILIDAD TOTAL
            DE LITESTEP, Y DE SUS PROVEEDORES Y DISTRIBUIDORES, POR
            CUALQUIER RECLAMO BAJO ESTOS T??RMINOS, INCLUYENDO CUALQUIER
            GARANT??AS IMPL??CITAS, EST?? LIMITADA A LA CANTIDAD QUE USTED
            NOS PAG?? PARA UTILIZAR LOS SERVICIOS (O, SI ESCOGEMOS, PARA
            VOLVIENDO A SUMINISTRARLE LOS SERVICIOS).`,
            TERMS_35: `EN TODOS LOS CASOS, LITESTEP, Y SUS PROVEEDORES Y
            DISTRIBUIDORES, NO SER??N RESPONSABLES DE NINGUNA P??RDIDA O
            DA??O QUE NO ES RAZONABLEMENTE PREVISIBLE.`,
            TERMS_36: `Usos comerciales de nuestros Servicios`,
            TERMS_37: `Si est?? utilizando nuestros Servicios en nombre de una empresa,
            que la empresa acepta estos t??rminos. Se mantendr?? inofensivo
            e indemnizar a LiteStep y sus afiliados, funcionarios,
            agentes y empleados de cualquier reclamo, juicio o acci??n
            que surja de o est?? relacionado con el uso de los Servicios o
            violaci??n de estos t??rminos, incluyendo cualquier responsabilidad o
            gastos derivados de reclamaciones, p??rdidas, da??os, demandas,
            juicios, costas procesales y honorarios de abogados.`,
            TERMS_38: `Acerca de estos T??rminos`,
            TERMS_39: `Podemos modificar estos t??rminos o Servicios en cualquier momento. Bien
            publicar aviso de modificaciones a estos T??rminos y Servicios
            en esta p??gina. Publicaremos un aviso de cambios adicionales
            t??rminos en el Servicio aplicable. No se aplicar??n cambios
            retroactivamente y entrar?? en vigor no antes de
            catorce d??as despu??s de su publicaci??n. Sin embargo, los cambios
            abordar nuevas funciones para un Servicio o cambios realizados
            por razones legales entrar?? en vigor de inmediato. Si usted
            no est?? de acuerdo con los t??rminos modificados para un Servicio, usted
            debe interrumpir su uso de ese Servicio.`,
            TERMS_40: `Si hay un conflicto entre estos t??rminos y el
            t??rminos adicionales, los t??rminos adicionales controlar??n
            ese conflicto`,
            TERMS_41: `Estos t??rminos controlan la relaci??n entre LiteStep
            y usted. No crean ning??n tercero beneficiario
            derechos.`,
            TERMS_42: `Si no cumple con estos t??rminos, y no tomamos
            acci??n de inmediato, esto no significa que estamos dando
            cualquier derecho que podamos tener (como tomar medidas en
            el futuro).`,
            TERMS_43: `Si resulta que un t??rmino en particular no es
            aplicable, esto no afectar?? a ning??n otro t??rmino.`,
            TERMS_44: `Las leyes de Maryland, EE. UU., se aplicar??n a cualquier disputa
            que surja de o se relacione con estos t??rminos o el
            Servicios. Todas las reclamaciones que surjan de o est??n relacionadas con estos
            t??rminos o los Servicios ser??n litigados exclusivamente en
            los tribunales federales o estatales de Maryland, EE. UU., y usted
            y LiteStep dan su consentimiento a la jurisdicci??n personal en esos
            tribunales`,
        },
    },
    fr: {
        translation: {
            APP_NAME: "LiteStep",
            CATEGORY_RESET_MESSAGE:
                "Voulez-vous vraiment r??initialiser tous les d??comptes pour cette cat??gorie ?",
            RESET_HEADER: "Avertissement!",
            RESET_SUBHEADER: "??tes-vous s??r?",
            FOOTER_RESET_MESSAGE:
                "??tes-vous s??r de vouloir remettre tous les compteurs ?? z??ro ?",
            COPYRIGHT: "?? 2019 LiteStep",
            CANCEL: "Annuler",
            CONFIRM: "D'ACCORD",
            RESET: "R??initialiser",
            EMPTY_CATEGORY: "Votre liste de cat??gories est vide",
            EMPTY_ITEM: "Votre liste d'articles est vide",
            EMPTY_SEARCH: "Aucun r??sultat trouv??",
            EMPTY_CATEGORY_PICK:
                "Toutes les cat??gories ont ??t?? s??lectionn??es !",
            EMPTY_ITEM_PICK: "Tous les articles ont ??t?? s??lectionn??s !",
            CATEGORY_TITLE: "Cat??gories",
            CATEGORYEDIT_TITLE: "Modifier les cat??gories",
            CATEGORY_PLACEHOLDER: "ajouter une cat??gorie",
            ITEM_PLACEHOLDER: "Ajouter un item",
            SEARCH_PLACEHOLDER: "Chercher",
            TOAST_LISTUPDATED: "Liste mise ?? jour",
            TOAST_LISTRESTORED: "Liste restaur??e",
            UPDATE_BUTTON: "Mettre ?? jour les modifications",
            CANCEL_BUTTON: "Annuler",
            BACK: "Retour",
            EDIT: "??diter",
            CLEAR: "D??gager",
            ITEM: "Item",
            ITEMS: "Items",
            ITEM_FOOTER: "Fait",

            PRIVACY_POLICY: "Politique de confidentialit??",
            TERMS_OF_USE: "Conditions d'utilisation",
            REMOVE_ALL_DATA: "Supprimer toutes les donn??es",

            PRIVACY_POLICY_TEXT_1: `Cette politique de confidentialit?? est destin??e ?? vous aider ?? comprendre ce que
            informations que nous recueillons, pourquoi nous les recueillons et comment vous
            peut mettre ?? jour, g??rer, exporter et supprimer vos informations.`,
            PRIVACY_POLICY_TEXT_2: `INFORMATIONS COLLECT??ES PAR LITESTEP`,
            PRIVACY_POLICY_TEXT_3: `Quelles que soient les donn??es que vous cr??ez dans l'application, elles
            vous-m??me, vous avez un contr??le total sur. Ce sont vos donn??es ?? ajouter,
            Modifier ou supprimer. Si vous ne souhaitez pas stocker de
            informations, supprimez-les simplement de l'application. Nous
            voulez que vous compreniez que vous contr??lez votre
            Les donn??es.`,
            PRIVACY_POLICY_TEXT_4: `Les choses que vous cr??ez ou nous fournissez`,
            PRIVACY_POLICY_TEXT_5: `Lorsque vous cr??ez un compte LiteStep, vous nous fournissez
            des informations personnelles comprenant votre nom et un e-mail`,
            PRIVACY_POLICY_TEXT_6: `Le contenu que vous ajoutez ?? l'aide de l'application vous appartient.
            Nous n'assumons pas la propri??t?? des informations que vous saisissez
            dans l'application.`,
            PRIVACY_POLICY_TEXT_7: `Informations que nous collectons lorsque vous utilisez nos services`,
            PRIVACY_POLICY_TEXT_8: `Nous pouvons recueillir des rapports de plantage ou de bogue envoy??s par le
            application pendant l'utilisation.`,
            PRIVACY_POLICY_TEXT_9: `Nous recueillons ces informations lorsqu'un service LiteStep sur
            votre appareil contacte nos serveurs ??? par exemple, lorsque vous
            installer une application depuis l'App Store IOS ou lorsqu'un service
            v??rifie les mises ?? jour automatiques.`,
            PRIVACY_POLICY_TEXT_10: `POURQUOI LITESTEP COLLECTE DES DONN??ES`,
            PRIVACY_POLICY_TEXT_11: `Nous utilisons vos informations pour nous assurer que nos services sont
            fonctionner comme pr??vu, comme le suivi des pannes ou
            r??soudre les probl??mes qui nous sont signal??s. Nous utilisons
            ces informations pour apporter des am??liorations ?? nos services.`,
            PRIVACY_POLICY_TEXT_12: `Nous utilisons les informations que nous collectons dans les services existants
            pour nous aider ?? en d??velopper de nouveaux. Nous utilisons les informations que nous
            collecter pour fournir un contenu personnalis??.`,
            PRIVACY_POLICY_TEXT_13: `Nous ne partageons pas d'informations qui identifient personnellement
            vous avec des annonceurs, tels que votre nom ou votre adresse e-mail.`,
            PRIVACY_POLICY_TEXT_14: `Nous utilisons les donn??es ?? des fins d'analyse et de mesure pour comprendre
            comment nos services sont utilis??s. Par exemple, nous analysons les donn??es
            sur vos visites sur nos sites pour faire des choses comme
            optimiser la conception des produits. Nous utilisons une vari??t?? d'outils pour faire
            cela, y compris Google Analytics.`,

            TERMS_1: `Bienvenue sur LiteStep !`,
            TERMS_2: `Merci d'utiliser nos produits et services. Les services
            sont fournis par LiteStep.`,
            TERMS_3: `En utilisant nos Services, vous acceptez ces conditions.
            Veuillez les lire attentivement.`,
            TERMS_4: `Utilisation de nos services`,
            TERMS_5: `Vous devez suivre toutes les politiques mises ?? votre disposition
            au sein des Services.`,
            TERMS_6: `N'abusez pas de nos Services. N'essayez pas d'acc??der ?? notre
            Services utilisant toute m??thode autre que l'interface et
            les instructions fournies. Vous ne pouvez utiliser nos Services que
            tel qu'autoris?? par la loi, y compris l'exportation et
            lois et r??glements sur le contr??le de la r??exportation. Nous pouvons suspendre
            ou cesser de vous fournir nos services si vous ne le faites pas
            respecter nos termes et conditions ou politiques ou si
            nous enqu??tons sur des soup??ons d'inconduite.`,
            TERMS_7: `L'utilisation de nos services ne vous conf??re aucun droit de propri??t?? sur
            droits de propri??t?? intellectuelle sur nos Services ou sur
            contenu auquel vous acc??dez. Vous ne pouvez pas r??utiliser le contenu de notre
            Services sauf autorisation ou autrement
            autoris?? par la loi. Ces conditions ne vous donnent pas le droit
            d'utiliser toute marque ou logo utilis?? dans nos Services. Ne le faites pas
            supprimer, masquer ou modifier les mentions l??gales affich??es dans
            ou avec nos Services.`,
            TERMS_8: `Tout contenu fourni rel??ve de la seule responsabilit?? du
            entit?? qui le met ?? disposition. Nous pouvons examiner le contenu pour
            d??terminer s'il est ill??gal ou enfreint nos
            politiques, nous pouvons supprimer ou refuser d'afficher du contenu
            que nous pensons raisonnablement violer nos politiques ou les
            droit.`,
            TERMS_9: `Dans le cadre de votre utilisation des Services, nous pouvons envoyer
            vos annonces de service, messages administratifs et
            les autres informations. Vous pouvez vous d??sinscrire de certains d'entre eux
            communications.`,
            TERMS_10: `N'utilisez pas ces Services d'une mani??re qui vous distrait et
            vous emp??che de respecter les r??gles de circulation ou de s??curit??.`,
            TERMS_11: `Votre compte utilisateur`,
            TERMS_12: `Vous aurez besoin d'un compte utilisateur pour utiliser notre
            Prestations de service. Vous pouvez cr??er votre propre compte ou vous pouvez
            utiliser un compte Apple, Google ou Facebook pour
            Connexion.`,
            TERMS_13: `Pour prot??ger votre compte LiteStep, conservez votre mot de passe
            confidentiel. Vous ??tes responsable de l'activit?? qui
            se passe dans votre compte LiteStep.`,
            TERMS_14: `Protection de la vie priv??e et des droits d'auteur`,
            TERMS_15: `Notre politique de confidentialit?? explique comment nous traitons vos donn??es personnelles
            donn??es et prot??ger votre vie priv??e lorsque vous utilisez nos Services.
            En utilisant nos Services, vous acceptez que LiteStep puisse utiliser
            ces donn??es conform??ment ?? nos politiques de confidentialit??.`,
            TERMS_16: `Nous r??pondons aux avis de violation pr??sum??e du droit d'auteur
            et r??silier les comptes des contrevenants r??cidivistes selon
            le processus d??fini dans le U.S. Digital Millennium
            Loi sur le droit d'auteur.`,
            TERMS_17: `Votre Contenu dans nos Services`,
            TERMS_18: `Nos services vous permettent de t??l??charger, soumettre, stocker, envoyer ou
            recevoir du contenu. Vous conservez la propri??t?? de tout
            les droits de propri??t?? intellectuelle que vous d??tenez dans ce
            contenu.`,
            TERMS_19: `Lorsque vous t??l??chargez, soumettez, stockez, envoyez ou recevez du contenu
            ?? ou via nos Services, vous donnez LiteStep (et ceux
            avec lesquels nous travaillons) une licence mondiale pour utiliser, h??berger, stocker,
            reproduire, modifier, cr??er des ??uvres d??riv??es (telles que
            celles r??sultant de traductions, d'adaptations ou d'autres
            modifications que nous apportons pour que votre contenu fonctionne mieux avec
            nos Services), communiquer, publier, ex??cuter publiquement,
            afficher et distribuer publiquement ce contenu. Les droits
            que vous accordez dans cette licence sont dans le but limit?? de
            exploiter, promouvoir et am??liorer nos Services, et pour
            en d??velopper de nouveaux. Cette licence continue m??me si vous
            cesser d'utiliser nos Services. Certains Services peuvent vous offrir
            les moyens d'acc??der au contenu fourni et de le supprimer
            ?? ce Service.`,
            TERMS_20: `Vous pouvez trouver plus d'informations sur la fa??on dont LiteStep utilise
            et stocke le contenu dans la politique de confidentialit??. Si vous soumettez
            commentaires ou suggestions sur nos services, nous pouvons utiliser
            vos commentaires ou suggestions sans engagement envers vous.`,
            TERMS_21: `?? propos des logiciels dans nos services`,
            TERMS_22: `Lorsqu'un Service n??cessite ou inclut des
            logiciel, ce logiciel peut se mettre ?? jour automatiquement sur votre
            appareil d??s qu'une nouvelle version ou fonctionnalit?? est disponible. Quelques
            Les services peuvent vous permettre d'ajuster votre mise ?? jour automatique
            r??glages.`,
            TERMS_23: `LiteStep vous donne un acc??s personnel, mondial, libre de droits,
            licence incessible et non exclusive d'utilisation du
            logiciel qui vous est fourni par LiteStep dans le cadre du
            Prestations de service. Cette licence est dans le seul but de
            vous permettant d'utiliser et de profiter des avantages de
            Services tels que fournis par LiteStep, de la mani??re
            permis par ces termes. Vous ne pouvez pas copier, modifier,
            distribuer, vendre ou louer une partie de nos Services ou
            logiciel inclus, et vous ne pouvez pas d??sosser ou
            tenter d'extraire le code source de ce logiciel,
            sauf si les lois interdisent ces restrictions ou si vous avez notre
            autorisation ??crite.`,
            TERMS_24: `Modification et r??siliation de nos Services`,
            TERMS_25: `Nous modifions et am??liorons constamment nos Services.
            Nous pouvons ajouter ou supprimer des fonctionnalit??s ou des caract??ristiques, et nous
            peut suspendre ou arr??ter compl??tement un Service.`,
            TERMS_26: `Vous pouvez cesser d'utiliser nos services ?? tout moment, bien que
            nous serons d??sol??s de vous voir partir. LiteStep peut ??galement arr??ter
            vous fournir des Services, ou ajouter ou cr??er de nouvelles limites
            ?? nos Services ?? tout moment.`,
            TERMS_27: `Nous pensons que vous ??tes propri??taire de vos donn??es et que vous pr??servez votre
            l'acc??s ?? ces donn??es est important. Si nous arr??tons un
            Service, dans la mesure du possible, nous vous donnerons
            un pr??avis raisonnable et une chance d'obtenir
            informations provenant de ce service.`,
            TERMS_28: `Nos garanties et clauses de non-responsabilit??`,
            TERMS_29: `Nous fournissons nos services en utilisant un prix commercialement raisonnable
            niveau de comp??tence et de soin et nous esp??rons que vous appr??cierez
            les utiliser. Mais il y a certaines choses que nous ne faisons pas
            promesse sur nos services.`,
            TERMS_30: `AUTRE QUE COMME EXPRESS??MENT ??NONC?? DANS CES CONDITIONS OU
            CONDITIONS SUPPL??MENTAIRES, NI LITESTEP NI SES FOURNISSEURS
            OU LES DISTRIBUTEURS FONT DES PROMESSES SP??CIFIQUES CONCERNANT
            PRESTATIONS DE SERVICE. PAR EXEMPLE, NOUS NE PRENONS AUCUN ENGAGEMENT
            ?? PROPOS DU CONTENU DANS LES SERVICES, LES SP??CIFIQUES
            FONCTIONS DES SERVICES, OU LEUR FIABILIT??,
            DISPONIBILIT??, OU CAPACIT?? ?? R??PONDRE ?? VOS BESOINS. NOUS
            FOURNIR LES SERVICES ?? EN L'??TAT ??.`,
            TERMS_31: `CERTAINES JURIDICTIONS PREVOYENT CERTAINES GARANTIES,
            COMME LA GARANTIE IMPLICITE DE QUALIT?? MARCHANDE,
            ADAPTATION A UN USAGE PARTICULIER ET
            ABSENCE DE CONTREFA??ON. DANS LA MESURE PERMISE PAR LA LOI, NOUS
            EXCLUENT TOUTES LES GARANTIES.`,
            TERMS_32: `Responsabilit?? pour nos Services`,
            TERMS_33: `LORSQU'AUTORIS?? PAR LA LOI, LITESTEP ET LITESTEP
            FOURNISSEURS ET DISTRIBUTEURS, NE SERONT PAS RESPONSABLES
            POUR LES PERTES DE PROFITS, DE REVENUS OU DE DONN??ES, FINANCI??RES
            PERTES INDIRECTES, SP??CIALES, CONS??CUTIVES,
            DOMMAGES EXEMPLAIRES OU PUNITIFS.`,
            TERMS_34: `DANS LA MESURE AUTORIS??E PAR LA LOI, LA RESPONSABILIT?? TOTALE
            DE LITESTEP, ET DE SES FOURNISSEURS ET DISTRIBUTEURS, POUR
            TOUTE R??CLAMATION EN VERTU DE CES CONDITIONS, Y COMPRIS POUR TOUT
            LES GARANTIES IMPLICITES SONT LIMIT??ES AU MONTANT QUE VOUS
            NOUS A PAY??S POUR UTILISER LES SERVICES (OU, SI NOUS LE CHOISISSONS, POUR
            VOUS FOURNIR DE NOUVEAU LES SERVICES).`,
            TERMS_35: `DANS TOUS LES CAS, LITESTEP, SES FOURNISSEURS ET
            LES DISTRIBUTEURS NE SERONT PAS RESPONSABLES DE TOUTE PERTE OU
            DOMMAGES QUI NE SONT PAS RAISONNABLEMENT PR??VISIBLES.`,
            TERMS_36: `Utilisations commerciales de nos services`,
            TERMS_37: `Si vous utilisez nos Services pour le compte d'une entreprise,
            que l'entreprise accepte ces conditions. Il tiendra inoffensif
            et indemniser LiteStep et ses soci??t??s affili??es, dirigeants,
            agents et employ??s de toute r??clamation, poursuite ou action
            d??coulant de ou li??s ?? l'utilisation des Services ou
            violation de ces termes, y compris toute responsabilit?? ou
            d??penses r??sultant de r??clamations, pertes, dommages, poursuites,
            jugements, frais de justice et honoraires d'avocat.`,
            TERMS_38: `?? propos de ces conditions`,
            TERMS_39: `Nous pouvons modifier ces conditions ou services ?? tout moment. Bien
            publier un avis de modification des pr??sentes conditions g??n??rales
            sur cette page. Nous publierons un avis de modifications suppl??mentaires
            conditions du service applicable. Les modifications ne s'appliqueront pas
            r??troactivement et entrera en vigueur au plus t??t
            quatorze jours apr??s leur mise en ligne. Cependant, des changements
            aborder de nouvelles fonctions pour un service ou des modifications apport??es
            pour des raisons juridiques entrera en vigueur imm??diatement. Si vous
            n'acceptez pas les conditions modifi??es d'un Service, vous
            devez cesser d'utiliser ce service.`,
            TERMS_40: `En cas de conflit entre ces termes et les
            termes suppl??mentaires, les termes suppl??mentaires contr??leront pour
            ce conflit.`,
            TERMS_41: `Ces termes contr??lent la relation entre LiteStep
            et tu. Ils ne cr??ent aucun tiers b??n??ficiaire
            droits.`,
            TERMS_42: `Si vous ne respectez pas ces conditions et que nous ne prenons pas
            agir tout de suite, cela ne signifie pas que nous donnons
            tous les droits que nous pourrions avoir (tels que prendre des mesures dans
            l'avenir).`,
            TERMS_43: `S'il s'av??re qu'un terme particulier n'est pas
            ex??cutoire, cela n'affectera pas les autres conditions.`,
            TERMS_44: `Les lois du Maryland, ??tats-Unis, s'appliqueront ?? tout litige
            d??coulant de ou li??s ?? ces conditions ou ?? la
            Prestations de service. Toutes les r??clamations d??coulant de ou li??es ?? ces
            termes ou les Services seront litigieux exclusivement dans
            les tribunaux f??d??raux ou d'??tat du Maryland, aux ??tats-Unis, et vous
            et LiteStep consentent ?? la juridiction personnelle dans ces
            tribunaux.`,
        },
    },
    de: {
        translation: {
            APP_NAME: "LiteStep",
            CATEGORY_RESET_MESSAGE:
                "M??chten Sie wirklich alle Z??hler f??r diese Kategorie auf null zur??cksetzen?",
            RESET_HEADER: "Warnung!",
            RESET_SUBHEADER: "Bist du dir sicher?",
            FOOTER_RESET_MESSAGE:
                "M??chten Sie wirklich alle Z??hler auf Null zur??cksetzen?",
            COPYRIGHT: "?? 2019 LiteStep",
            CANCEL: "Absagen",
            CONFIRM: "OK",
            RESET: "Zur??cksetzen",
            EMPTY_CATEGORY: "Ihre Kategorieliste ist leer",
            EMPTY_ITEM: "Ihre Artikelliste ist leer",
            EMPTY_SEARCH: "Keine Suchergebnisse",
            EMPTY_CATEGORY_PICK: "Alle Kategorien sind ausgew??hlt!",
            EMPTY_ITEM_PICK: "Alle Artikel wurden ausgew??hlt!",
            CATEGORY_TITLE: "Kategorien",
            CATEGORYEDIT_TITLE: "Kategorien bearbeiten",
            CATEGORY_PLACEHOLDER: "Kategorie hinzuf??gen",
            ITEM_PLACEHOLDER: "Artikel hinzuf??gen",
            SEARCH_PLACEHOLDER: "Suche",
            TOAST_LISTUPDATED: "Liste aktualisiert",
            TOAST_LISTRESTORED: "Liste wiederhergestellt",
            UPDATE_BUTTON: "??nderungen aktualisieren",
            CANCEL_BUTTON: "Absagen",
            BACK: "Der R??cken",
            EDIT: "Bearbeiten",
            CLEAR: "Klar",
            ITEM: "Item",
            ITEMS: "Items",
            ITEM_FOOTER: "Fertig",

            PRIVACY_POLICY: "Datenschutz-Bestimmungen",
            TERMS_OF_USE: "Nutzungsbedingungen",
            REMOVE_ALL_DATA: "Alle Daten entfernen",

            PRIVACY_POLICY_TEXT_1: `Diese Datenschutzrichtlinie soll Ihnen helfen zu verstehen, was
            Informationen, die wir sammeln, warum wir sie sammeln und wie Sie
            kann Ihre Informationen aktualisieren, verwalten, exportieren und l??schen.`,
            PRIVACY_POLICY_TEXT_2: `INFORMATIONEN, DIE LITESTEP SAMMELT`,
            PRIVACY_POLICY_TEXT_3: `Welche Daten Sie auch immer in der Anwendung erstellen, es ist
            Selbst, Sie haben die volle Kontrolle ??ber. Es sind Ihre Daten zum Hinzuf??gen,
            Bearbeiten oder l??schen. Wenn Sie keine speichern m??chten
            Informationen, l??schen Sie sie einfach aus der Anwendung. Wir
            Ich m??chte, dass Sie verstehen, dass Sie die Kontrolle ??ber Ihre haben
            Daten.`,
            PRIVACY_POLICY_TEXT_4: `Dinge, die Sie erstellen oder uns zur Verf??gung stellen`,
            PRIVACY_POLICY_TEXT_5: `Wenn Sie ein LiteStep-Konto erstellen, stellen Sie uns dies zur Verf??gung
            personenbezogene Daten, die Ihren Namen und eine E-Mail-Adresse enthalten`,
            PRIVACY_POLICY_TEXT_6: `Die Inhalte, die Sie mit der Anwendung hinzuf??gen, sind Ihre eigenen.
            Wir ??bernehmen kein Eigentum an den von Ihnen eingegebenen Informationen
            in die Anwendung.`,
            PRIVACY_POLICY_TEXT_7: `Informationen, die wir sammeln, wenn Sie unsere Dienste nutzen`,
            PRIVACY_POLICY_TEXT_8: `Wir k??nnen Absturz- oder Fehlerberichte sammeln, die von gesendet werden
            Anwendung w??hrend der Nutzung.`,
            PRIVACY_POLICY_TEXT_9: `Wir sammeln diese Informationen, wenn ein LiteStep-Dienst eingeschaltet ist
            Ihr Ger??t kontaktiert unsere Server ??? zum Beispiel, wenn Sie
            eine App aus dem IOS App Store oder bei einem Dienst installieren
            sucht nach automatischen Updates.`,
            PRIVACY_POLICY_TEXT_10: `WARUM LITESTEP DATEN ERHEBT`,
            PRIVACY_POLICY_TEXT_11: `Wir verwenden Ihre Informationen, um sicherzustellen, dass unsere Dienste verf??gbar sind
            bestimmungsgem????es Funktionieren, z. B. Verfolgung von Ausf??llen oder
            Fehlerbehebung bei Problemen, die uns gemeldet werden. Wir gebrauchen
            diese Informationen, um unsere Dienste zu verbessern.`,
            PRIVACY_POLICY_TEXT_12: `Wir verwenden die von uns gesammelten Informationen in bestehenden Diensten
            um uns zu helfen, neue zu entwickeln. Wir verwenden die Informationen, die wir
            sammeln, um personalisierte Inhalte bereitzustellen.`,
            PRIVACY_POLICY_TEXT_13: `Wir geben keine Informationen weiter, die Sie pers??nlich identifizieren
            Sie mit Werbetreibenden wie Ihrem Namen oder Ihrer E-Mail-Adresse.`,
            PRIVACY_POLICY_TEXT_14: `Wir verwenden Daten f??r Analysen und Messungen, um sie zu verstehen
            wie unsere Dienste genutzt werden. Beispielsweise analysieren wir Daten
            ??ber Ihre Besuche auf unseren Websites, um Dinge zu tun wie z
            Produktdesign optimieren. Dazu verwenden wir verschiedene Tools
            dies, einschlie??lich Google Analytics.`,

            TERMS_1: `Willkommen bei LiteStep!`,
            TERMS_2: `Vielen Dank, dass Sie unsere Produkte und Dienstleistungen nutzen. Die Dienste
            werden von LiteStep bereitgestellt.`,
            TERMS_3: `Durch die Nutzung unserer Dienste stimmen Sie diesen Bedingungen zu.
            Bitte lesen Sie diese sorgf??ltig durch.`,
            TERMS_4: `Nutzung unserer Dienste`,
            TERMS_5: `Sie m??ssen alle Ihnen zur Verf??gung gestellten Richtlinien befolgen
            innerhalb der Dienste.`,
            TERMS_6: `Missbrauchen Sie unsere Dienste nicht. Versuchen Sie nicht, auf unsere zuzugreifen
            Dienste, die eine andere Methode als die Schnittstelle und verwenden
            die bereitgestellten Anweisungen. Sie d??rfen nur unsere Dienste nutzen
            wie gesetzlich zul??ssig, einschlie??lich anwendbarer Export- und
            Gesetze und Vorschriften zur Wiederausfuhrkontrolle. Wir k??nnen aussetzen
            oder stellen Sie die Bereitstellung unserer Dienste f??r Sie ein, wenn Sie dies nicht tun
            unsere Allgemeinen Gesch??ftsbedingungen oder Richtlinien einhalten oder wenn
            Wir untersuchen mutma??liches Fehlverhalten.`,
            TERMS_7: `Die Nutzung unserer Dienste gibt Ihnen kein Eigentum an irgendwelchen
            geistige Eigentumsrechte an unseren Diensten oder den
            Inhalte, auf die Sie zugreifen. Sie d??rfen Inhalte von unseren nicht wiederverwenden
            Dienstleistungen, sofern keine Genehmigung erteilt wurde oder anderweitig vorliegt
            gesetzlich erlaubt. Diese Bedingungen gew??hren Ihnen kein Recht
            in unseren Diensten verwendete Marken oder Logos zu verwenden. Nicht
            rechtliche Hinweise, die in angezeigt werden, zu entfernen, unkenntlich zu machen oder zu ??ndern
            oder zusammen mit unseren Dienstleistungen.`,
            TERMS_8: `F??r die bereitgestellten Inhalte ist ausschlie??lich der verantwortlich
            Entit??t, die es zur Verf??gung stellt. Wir k??nnen Inhalte ??berpr??fen, um
            festzustellen, ob es illegal ist oder gegen unsere verst????t
            Richtlinien k??nnen wir Inhalte entfernen oder deren Anzeige verweigern
            von denen wir vern??nftigerweise annehmen, dass sie gegen unsere Richtlinien versto??en oder die
            Gesetz.`,
            TERMS_9: `Im Zusammenhang mit Ihrer Nutzung der Dienste senden wir ggf
            Sie Service-Ank??ndigungen, administrative Nachrichten und
            andere Informationen. Sie k??nnen einige davon ablehnen
            Kommunikation.`,
            TERMS_10: `Verwenden Sie solche Dienste nicht auf eine Weise, die Sie ablenkt und
            hindert Sie daran, Verkehrs- oder Sicherheitsvorschriften einzuhalten.`,
            TERMS_11: `Ihr Benutzerkonto`,
            TERMS_12: `Sie ben??tigen ein Benutzerkonto, um unsere zu nutzen
            Dienstleistungen. Sie k??nnen Ihr eigenes Konto erstellen, oder Sie k??nnen
            Verwenden Sie dazu entweder ein Apple-, Google- oder Facebook-Konto
            Anmeldung.`,
            TERMS_13: `Um Ihr LiteStep-Konto zu sch??tzen, bewahren Sie Ihr Passwort auf
            vertraulich. Sie sind f??r die Aktivit??t verantwortlich, die
            geschieht in Ihrem LiteStep-Konto.`,
            TERMS_14: `Datenschutz und Urheberrechtsschutz`,
            TERMS_15: `Unsere Datenschutzrichtlinie erl??utert, wie wir Ihre personenbezogenen Daten behandeln
            Daten und sch??tzen Sie Ihre Privatsph??re, wenn Sie unsere Dienste nutzen.
            Durch die Nutzung unserer Dienste stimmen Sie zu, dass LiteStep diese verwenden kann
            solche Daten in ??bereinstimmung mit unseren Datenschutzrichtlinien.`,
            TERMS_16: `Wir reagieren auf Hinweise auf mutma??liche Urheberrechtsverletzungen
            und Konten von Wiederholungst??tern gem???? k??ndigen
            den im U.S. Digital Millennium festgelegten Prozess
            Urheberrechtsgesetz.`,
            TERMS_17: `Ihre Inhalte in unseren Diensten`,
            TERMS_18: `Unsere Dienste erm??glichen es Ihnen, hochzuladen, einzureichen, zu speichern, zu senden oder
            Inhalte erhalten. Sie behalten das Eigentum an allen
            geistige Eigentumsrechte, die Sie daran halten
            Inhalt.`,
            TERMS_19: `Wenn Sie Inhalte hochladen, ??bermitteln, speichern, senden oder empfangen
            zu oder ??ber unsere Dienste geben Sie LiteStep (und diese
            wir arbeiten mit) eine weltweite Lizenz zur Nutzung, zum Hosten, Speichern,
            reproduzieren, modifizieren, abgeleitete Werke erstellen (wie z
            solche, die sich aus ??bersetzungen, Anpassungen oder anderem ergeben
            ??nderungen, die wir vornehmen, damit Ihre Inhalte besser funktionieren
            unsere Dienste), kommunizieren, ver??ffentlichen, ??ffentlich auff??hren,
            solche Inhalte ??ffentlich anzuzeigen und zu verbreiten. Die Rechte
            Sie in dieser Lizenz gew??hren, sind f??r den begrenzten Zweck von
            Betreiben, Bewerben und Verbessern unserer Dienste und um
            neue entwickeln. Diese Lizenz bleibt bestehen, auch wenn Sie
            die Nutzung unserer Dienste einstellen. Einige Dienste k??nnen Ihnen angeboten werden
            M??glichkeiten, auf bereitgestellte Inhalte zuzugreifen und diese zu entfernen
            zu diesem Dienst.`,
            TERMS_20: `Weitere Informationen zur Verwendung von LiteStep finden Sie hier
            und speichert Inhalte in der Datenschutzerkl??rung. Wenn Sie einreichen
            Feedback oder Vorschl??ge zu unseren Diensten, die wir verwenden k??nnen
            Ihr Feedback oder Ihre Vorschl??ge f??r Sie unverbindlich.`,
            TERMS_21: `??ber Software in unseren Diensten`,
            TERMS_22: `Wenn ein Dienst herunterladbare Dienste erfordert oder enth??lt
            Software, kann diese Software automatisch auf Ihrem aktualisiert werden
            Ger??t, sobald eine neue Version oder Funktion verf??gbar ist. Etwas
            Dienste k??nnen Ihnen erm??glichen, Ihr automatisches Update anzupassen
            die Einstellungen.`,
            TERMS_23: `LiteStep bietet Ihnen ein pers??nliches, weltweites, geb??hrenfreies,
            nicht ??bertragbare und nicht ausschlie??liche Lizenz zur Nutzung der
            Software, die Ihnen von LiteStep als Teil der bereitgestellt wird
            Dienstleistungen. Diese Lizenz dient ausschlie??lich dem Zweck
            So k??nnen Sie die Vorteile von nutzen und genie??en
            Dienstleistungen, wie sie von LiteStep bereitgestellt werden, in der Art und Weise
            durch diese Bedingungen gestattet. Sie d??rfen nicht kopieren, modifizieren,
            einen Teil unserer Dienste vertreiben, verkaufen oder vermieten oder
            enthaltene Software, noch d??rfen Sie Reverse Engineering oder
            versuchen, den Quellcode dieser Software zu extrahieren,
            es sei denn, Gesetze verbieten diese Beschr??nkungen oder Sie haben unsere
            schriftliche Erlaubnis.`,
            TERMS_24: `??nderung und Beendigung unserer Dienste`,
            TERMS_25: `Wir ??ndern und verbessern unsere Dienste st??ndig.
            Wir k??nnen Funktionalit??ten oder Merkmale hinzuf??gen oder entfernen, und wir
            kann einen Dienst insgesamt aussetzen oder stoppen.`,
            TERMS_26: `Sie k??nnen die Nutzung unserer Dienste jedoch jederzeit beenden
            Es tut uns leid, Sie gehen zu sehen. LiteStep kann auch stoppen
            Bereitstellung von Diensten f??r Sie oder Hinzuf??gen oder Erstellen neuer Limits
            zu unseren Diensten jederzeit.`,
            TERMS_27: `Wir glauben, dass Sie Ihre Daten besitzen und Ihre Daten sch??tzen
            Der Zugang zu solchen Daten ist wichtig. Wenn wir a
            Service, wo vern??nftigerweise m??glich, werden wir Ihnen geben
            angemessene Vorank??ndigung und eine Chance zu bekommen
            Informationen aus diesem Dienst.`,
            TERMS_28: `Unsere Garantien und Haftungsausschl??sse`,
            TERMS_29: `Wir erbringen unsere Dienstleistungen in wirtschaftlich angemessener Weise
            Niveau an K??nnen und Sorgfalt und wir hoffen, dass Sie es genie??en werden
            benutze sie. Aber es gibt bestimmte Dinge, die wir nicht tun
            Versprechen ??ber unsere Dienstleistungen.`,
            TERMS_30: `ANDER ALS AUSDR??CKLICH IN DIESEN BEDINGUNGEN DARGESTELLT ODER
            ZUS??TZLICHE BEDINGUNGEN, WEDER LITESTEP NOCH SEINE LIEFERANTEN
            ODER DISTRIBUTOREN MACHEN SPEZIFISCHE VERSPRECHEN HINSICHTLICH DER
            DIENSTLEISTUNGEN. BEISPIELSWEISE GEHEN WIR KEINE VERPFLICHTUNGEN EIN
            ??BER DEN INHALT INNERHALB DER DIENSTE, DIE SPEZIFISCHEN
            FUNKTIONEN DER DIENSTE ODER IHRE ZUVERL??SSIGKEIT,
            VERF??GBARKEIT ODER F??HIGKEIT, IHRE BED??RFNISSE ZU ERF??LLEN. WIR
            DIE DIENSTE ???WIE BESEHEN??? BEREITSTELLEN.`,
            TERMS_31: `EINIGE GERICHTSBARKEITEN GEBEN BESTIMMTE GEW??HRLEISTUNGEN VOR,
            WIE DIE STILLSCHWEIGENDE GEW??HRLEISTUNG DER MARKTG??NGIGKEIT,
            EIGNUNG F??R EINEN BESTIMMTEN ZWECK UND
            NICHTVERLETZUNG. SOWEIT GESETZLICH ZUL??SSIG, WIR
            SCHLIESSEN SIE ALLE GEW??HRLEISTUNGEN AUS.`,
            TERMS_32: `Haftung f??r unsere Dienste`,
            TERMS_33: `WENN GESETZLICH ZUL??SSIG, LITESTEP UND LITESTEPS
            LIEFERANTEN UND H??NDLER ??BERNEHMEN KEINE VERANTWORTUNG
            F??R ENTGANGENEN GEWINN, EINNAHMEN ODER DATEN, FINANZIELLEN
            VERLUSTE ODER INDIREKTE, BESONDERE, FOLGESCH??DEN,
            BEISPIELHAFTER ODER STRAFSCHADENSERSATZ.`,
            TERMS_34: `SOWEIT GESETZLICH ZUL??SSIG, DIE GESAMTHAFTUNG
            VON LITESTEP UND IHREN LIEFERANTEN UND VERTRIEBSPARTNERN F??R
            JEGLICHE ANSPR??CHE GEM??SS DIESEN BEDINGUNGEN, EINSCHLIESSLICH F??R JEGLICHE
            STILLSCHWEIGENDE GEW??HRLEISTUNGEN, IST AUF DEN BETRAG BEGRENZT, DEN SIE
            UNS F??R DIE NUTZUNG DER DIENSTE BEZAHLT HABEN (ODER, WENN WIR W??HLEN, F??R
            IHNEN DIE DIENSTLEISTUNGEN WIEDER BEREITSTELLEN).`,
            TERMS_35: `IN ALLEN F??LLEN LITESTEP UND SEINE LIEFERANTEN UND
            H??NDLER HAFTET NICHT F??R VERLUSTE ODER
            SCH??DEN, DIE NICHT VERN??NFTIG VORHERSEHBAR SIND.`,
            TERMS_36: `Gesch??ftliche Nutzung unserer Dienste`,
            TERMS_37: `Wenn Sie unsere Dienste im Namen eines Unternehmens nutzen,
            dass das Unternehmen diese Bedingungen akzeptiert. Es wird harmlos bleiben
            und LiteStep und seine verbundenen Unternehmen, leitenden Angestellten,
            Agenten und Mitarbeiter von jeglichen Anspr??chen, Klagen oder Klagen
            die sich aus oder im Zusammenhang mit der Nutzung der Dienste ergeben oder
            Verletzung dieser Bedingungen, einschlie??lich jeglicher Haftung oder
            Aufwendungen aus Anspr??chen, Verlusten, Sch??den, Klagen,
            Urteile, Gerichts- und Anwaltskosten.`,
            TERMS_38: `??ber diese Bedingungen`,
            TERMS_39: `Wir k??nnen diese Bedingungen oder Dienste jederzeit ??ndern. Brunnen
            Mitteilung ??ber ??nderungen an diesen Bedingungen und Diensten ver??ffentlichen
            auf dieser Seite. Wir werden eine Benachrichtigung ??ber ge??nderte Zusatzinformationen ver??ffentlichen
            Bedingungen im jeweiligen Dienst. ??nderungen werden nicht ??bernommen
            r??ckwirkend und treten fr??hestens in Kraft
            vierzehn Tage nach der Ver??ffentlichung. ??nderungen jedoch
            Adressierung neuer Funktionen f??r einen Dienst oder vorgenommene ??nderungen
            aus rechtlichen Gr??nden werden sofort wirksam. Wenn du
            Sie stimmen den ge??nderten Bedingungen f??r einen Dienst nicht zu
            sollte Ihre Nutzung dieses Dienstes einstellen.`,
            TERMS_40: `Im Falle eines Widerspruchs zwischen diesen Bedingungen und den
            zus??tzliche Bedingungen gelten die zus??tzlichen Bedingungen
            dieser Konflikt.`,
            TERMS_41: `Diese Bedingungen regeln die Beziehung zwischen LiteStep
            Und Sie. Sie schaffen keinen Drittbeg??nstigten
            Rechte.`,
            TERMS_42: `Wenn Sie diese Bedingungen nicht einhalten, ??bernehmen wir diese nicht
            Handeln Sie sofort, das bedeutet nicht, dass wir geben
            alle Rechte geltend machen, die wir m??glicherweise haben (z. B. das Ergreifen von Ma??nahmen in
            die Zukunft).`,
            TERMS_43: `Wenn sich herausstellt, dass ein bestimmter Begriff das nicht ist
            vollstreckbar sind, ber??hrt dies keine anderen Bedingungen.`,
            TERMS_44: `F??r alle Streitigkeiten gelten die Gesetze von Maryland, USA
            die sich aus oder im Zusammenhang mit diesen Bedingungen oder den
            Dienstleistungen. Alle Anspr??che aus oder im Zusammenhang mit diesen
            Bedingungen oder die Dienste werden ausschlie??lich in Rechtsstreitigkeiten verhandelt
            die Bundes- oder Staatsgerichte von Maryland, USA, und Sie
            und LiteStep stimmen der pers??nlichen Gerichtsbarkeit in diesen F??llen zu
            Gerichte.`,
        },
    },
};
i18next.use(initReactI18next).init({
    resources,
    lng: "en",
    // Allowed languages
    supportedLngs: ["en", "es", "fr", "de"],
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});
export default i18next;
