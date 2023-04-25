import { StyleSheet } from "react-native";

const profile_style = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        padding: 20,
        justifyContent: 'space-between'
    },

    imageContainer: {
        // borderWidth: 1,
        alignItems: 'center',
    },

    profileImage: {
        width: 170,
        height: 170,
        marginVertical: 40
    },

    profileData: {
        alignItems: 'center'
    },

    profileDataFullname: {
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 10
    }
})

export default profile_style;