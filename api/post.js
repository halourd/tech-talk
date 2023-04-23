import { Request } from '../helper/http';
import { getStorage, setStorage } from '../helper/storage';

var request = new Request;

export class PostApi {
  static async posts() {
    const user = await getStorage('user');
    request = new Request(user.token);

    return request.get(`posts`);
  }

  create_post = async (post_data) => {
    console.log('[DATA]', post_data)
    const user = await getStorage('user');
    request = new Request(user.token);
    let new_post = post_data.trim();
    return request.post(`post`, {post: new_post});
  }
  
}