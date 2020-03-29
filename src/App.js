import './App.css';
import React, { Component } from 'react';

//Import Ionic Styles
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';

class App extends Component {
  render() {
    return (
      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>News App v1.0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              News title
            </IonCardTitle>
            <IonCardSubtitle>
              News subtitle
            </IonCardSubtitle>

          </IonCardHeader>
          <IonCardContent>
            <IonButton >Read</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>

    );
  }
}
export default App;