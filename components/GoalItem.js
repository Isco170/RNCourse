import { StyleSheet } from "react-native";

function goalItem() {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
};

export default goalItem;

StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',

    },
    goalText: {
        color: 'white'
    }
})