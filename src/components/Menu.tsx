import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { terminalSharp, constructSharp, checkmarkDoneSharp, arrowUpSharp, listSharp, helpSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Anslutning',
    url: '/page/Connection',
    mdIcon: arrowUpSharp
  },
  {
    title: 'System',
    url: '/page/System',
    mdIcon: constructSharp
  },
  {
    title: 'Punkter',
    url: '/page/Points',
    mdIcon: listSharp
  },
  {
    title: 'Testning',
    url: '/page/Test',
    mdIcon: checkmarkDoneSharp
  },
  {
    title: 'Terminal',
    url: '/page/Terminal',
    mdIcon: terminalSharp
  },
  {
    title: 'Hjälp',
    url: '/page/Help',
    mdIcon: helpSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>SPR-SDP</IonListHeader>
          <IonNote>Radeguard.se</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
