import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class ContactDetail extends Component {
  onPressButton() {
    return Actions.showContactDetail({ contact: this.props.contact });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.nameStyle}>
            {this.props.contact.firstname} {this.props.contact.lastname}
          </Text>
        </CardSection>

        <CardSection>
          <Text>{this.props.contact.organization}</Text>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onPressButton.bind(this)}
            text={'Show'}
          />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  nameStyle: {
    fontWeight: '500'
  }
};

export default ContactDetail;
