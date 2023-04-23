import { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Modal,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { UserApi } from '../api/user';
import { PostApi } from '../api/post'

import { setStorage, getStorage } from '../helper/storage';
import { Request } from "../helper/http";

import PostBlock from '../components/PostBlock';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from "../components/CustomButton";

import posts_style from "../styles/posts";
export default class Posts extends Component {
    
    constructor(props){
        super(props);

        this.UserApi = new UserApi();
        this.PostApi = new PostApi();
        this.Request = new Request();

        this.state = {
            isModalVisible: false,
            posts: []
        }
    }

    convertTimestamp = (date) => {
        const timestamp = new Date(date);
        const options = {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        };
        
        const formattedDate = timestamp.toLocaleString('en-US', options);

        return formattedDate;
                
    }

    async componentDidMount() {
        try{
            let [res, error] = await this.UserApi.login('halord@gmail.com', 'envtest123');

            let user_token = res.data.token
            if(res.data.token){
                await setStorage('user', user_token);
            }

            let get_token = await getStorage('user');
            this.Request.addHeaders([{key: 'Authorization', value: `Bearer ${get_token}`}]);
        }catch(error){
            console.log(error)
        }

        this.loadPosts();

    }

    loadPosts = async () => {
        let [res, error] = await PostApi.posts();

        if(res.data){
            this.setState({posts: res.data})
        }

        if(error){
            return error;
        }
    }

  render() {
    return (
        <View style={posts_style.mainBody}>
            <ScrollView>
                <View style={posts_style.addPost}>
                    {/* <Ionicons name="add-outline" size={23} color="#F7FAEF" /> */}
                    <TouchableWithoutFeedback
                    onPressIn={()=>{
                        this.setState({isModalVisible: true})
                    }}                    
                    >
                        <View
                        style={posts_style.addPostInput}
                        >
                            <Text style={{color: "#fff", fontWeight: 'bold', marginRight: 10}}>Post or Ask anything</Text>
                            <Ionicons name="add-outline" size={26} color="#fff" />
                        </View>
                    </TouchableWithoutFeedback>

                    {/* <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=> {
                        this.setState({isModalVisible: true})
                    }}
                    >
                        <View 
                        style={{
                            backgroundColor: "#252031",
                            paddingHorizontal: 40,
                            justifyContent: 'center',
                            height: '100%',
                            borderRadius: 5

                        }}
                        >
                            <Text style={{color: '#fff'}}>Post</Text>
                        </View>
                    </TouchableOpacity> */}
                </View> 
            {this.state.posts.map((post, index) => {
                return(
                    <PostBlock
                    uploader={`${post.user.firstname} ${post.user.lastname}`}
                    post={post.post}
                    createdAt={this.convertTimestamp(post.created_at)}
                    />
                )
            })}

            </ScrollView>



            <Modal
            animationType="slide"
            visible={this.state.isModalVisible}
            // style={posts_style.createPostModal}
            statusBarTranslucent={false}
            onRequestClose={() => {
                this.setState({ isModalVisible: false });
            }}
            >
                <View style={{flex: 1, justifyContent: 'center', margin: 20}}>
                    <View style={posts_style.createPostModalContainer}>
                        <TextInput
                        multiline
                        placeholder="Post something what you want to share with the world!"
                        style={posts_style.createPostModalInput}
                        />
                    </View>
                    <CustomButton
                    margin_Top={20}
                    disabled={false}
                    name="POST"
                    on_press={()=> {
                        this.setState({isModalVisible: false})
                    }}
                    />
                </View>
            </Modal>
        </View>
    );
  }
}
