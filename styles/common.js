import { StyleSheet } from "react-native";


const common = StyleSheet.create({
    mainBody: {
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: '#F7FAEF'
    },

    logoContainer:{
        alignItems: 'center',
    },

    centerLogo: {
        width: 200,
        height: 200,
        marginTop: 90
    },

    field: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 5,
        fontSize: 16
    },

    title: {
        marginVertical: 30,
        fontSize: 28,
        fontWeight: 'bold'
    },

    fieldContainer: {
        marginBottom: 18,
    },

    formContainer: {
        marginTop: 40
    },

    button: {
        padding: 20,
        borderRadius: 90,
        alignItems: 'center'
    },

    buttonText: {

        fontWeight: 'bold'
    },

    middleTextContainer: {
        alignItems: 'center',
        margin: 12,
        
    }

})

export default common;