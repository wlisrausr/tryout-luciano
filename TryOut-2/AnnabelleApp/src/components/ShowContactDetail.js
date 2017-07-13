import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class ShowContactDetail extends Component {
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
          <Text>{this.props.contact.phone}</Text>
        </CardSection>

        <CardSection>
          <Text>{this.props.contact.address}</Text>
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

export default ShowContactDetail;
