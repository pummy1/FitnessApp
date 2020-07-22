import React from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    Image,
    TouchableOpacity,
    YellowBox,
    Dimensions,
    Button,
    SafeAreaView,
    ScrollView,
} from 'react-native';

const Contacts = ({ contacts }) => {
    return (
        <View>
            <ScrollView>
                {contacts.map((contact) => (
                    // <div class="card">
                    //     <div class="card-body">
                    //         <h5 class="card-title">{contact.name}</h5>
                    //         <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                    //         <p class="card-text">{contact.company.catchPhrase}</p>
                    //     </div>
                    // </div>
                    <View>
                        <Text>{contact.name}</Text>
                        <Text>{contact.email}</Text>
                        <Text>{contact.catchPhrase}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>

        // <div className="App">
        //     <ContactList contacts={this.state.contacts} />
        // </div>
    )
};

export default Contacts