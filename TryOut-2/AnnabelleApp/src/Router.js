import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ContactList from './components/ContactList';
import ShowContactDetail from './components/ShowContactDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 75 }}>
      <Scene
        key="contactList"
        component={ContactList}
        title={'Contacts'}
      />

      <Scene
        key="showContactDetail"
        component={ShowContactDetail}
        title={'Contact Detail'}
      />
    </Router>
  );
};

export default RouterComponent;
