import {IonText, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Connection: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Anslutning</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Anslutning</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton>Testa anslutning</IonButton>
        <IonButton>Spara från enhet</IonButton></br>
        <IonButton color="warning">Ladda upp</IonButton>
        <IonButton color="warning">Ladda upp från fil</IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Connection;

