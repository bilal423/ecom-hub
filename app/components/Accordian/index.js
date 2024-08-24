import React, { useState } from 'react';

import { View, Text } from 'react-native';

import { ListItem, Icon } from '@rneui/base';

import lightStyle from './lightStyle';

const AccordianComponent = ({ title, content }) => {

    const [expanded, setExpanded] = useState(false);

    const styles = lightStyle;

    return (
        <View style={styles.listItemWrapper}>
            <ListItem.Accordion
                containerStyle={{ ...styles.accordianWrapper, paddingBottom: expanded ? 0 : 20, borderBottomWidth: expanded ? 0 : 1 }}
                isExpanded={expanded}
                onPress={ () => {
                    setExpanded(!expanded);
                }}
                content={
                    <>
                      <ListItem.Content>
                        <ListItem.Title style={styles.listTitle}>{ title || ""}</ListItem.Title>
                      </ListItem.Content>
                    </>
                }
            >
                <View style={styles.expandedContetWrapper}>
                    { content }
                </View>
            
            </ListItem.Accordion>
        </View>
    )
}

export default AccordianComponent;