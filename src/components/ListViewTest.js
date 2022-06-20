import React from 'react';
import {Button, SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

const ListViewTest = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <SectionList
                sections={[
                    {title: 'A', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic', 'Devin', 'Dan', 'Dominic','Devin', 'Dan', 'Dominic','Devin', 'Dan', 'Dominic']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            />
        </View>
    );
}

export default ListViewTest;
