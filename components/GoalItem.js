import { StyleSheet, View, Text, Pressable } from "react-native";

function goalItem(props) {
    return (

        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{ color: '#dddddd' }} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressItm}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View >

    )
};

export default goalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressItm:{
        opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: 'white'
    }
})