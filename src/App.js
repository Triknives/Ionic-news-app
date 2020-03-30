import './App.css';
import React, { Component } from 'react';
import axips from 'axios';


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
import Axios from 'axios';

class App extends Component {

  API_KEY = 'd58332f513164373862837a4a93bc475';
  API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`;

  state = {
    items: []
  }

  componentDidMount() {
    Axios.get(this.API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ items: data.articles })
      console.log(this.state.items)
    })
  }

  render() {
    return (
      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Latest News!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {this.state.items.map((item) => (
                <IonCard>
                  <img src={item.urlToImage}/>
                <IonCardHeader>

                <IonCardTitle>
                {item.title}

                </IonCardTitle>
                 <IonCardSubtitle>
                    {item.author}
                  </IonCardSubtitle>

                </IonCardHeader>
                <IonCardContent>
                  <p>{item.content}</p>
                  <IonButton href={item.url}> Read</IonButton>
                </IonCardContent>
                </IonCard>

      ))}

      </IonContent>
    </IonApp>

    );
  }
}

export default App;