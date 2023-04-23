import { StyleSheet } from "react-native";

const posts_style = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: '#eee',
    },

    postContent: {
        marginHorizontal:20,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },

    mediaContentContainer: {
        alignItems: 'center',
        
    }, 

    mediaImage: {
        resizeMode: 'cover',
        width: '100%',
        height: 400,
        borderRadius: 10,
    },

    postDescriptionContainer: {
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },

    postTextContainer: {
        width: '100%', 
        marginVertical: 5
        // borderWidth: 1,
    },

    postUploaderContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingBottom: 20
        
    },

    profileImage: {
        width: 40,
        height: 40,
    },

    profileName: {
        paddingHorizontal: 15
    },

    postActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        // paddingHorizontal: 20,
    },

    postActionButton:{
        width: '32.33%',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
    },

    // headerContainer: {
    //     borderWidth: 1
    // },
    
    // addPostContainer:{
    //     borderWidth: 1,
    //     width: '40%',
    //     padding: 10
    // }

    addPost: {
        flexDirection:'row',
        height: 50,
        margin: 20,
        justifyContent: 'space-between',


        // justifyContent: 'center',
        // alignItems: 'center',
    },

    addPostInput: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'center',
        backgroundColor: "#252031",
        borderWidth: 1,
        borderRadius: 5,
    },

    createPostModalContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 'auto',
    },

    createPostModalInput: {
        padding: 20,
        height: 'auto',
        // borderWidth: 1

    }
})

export default posts_style;