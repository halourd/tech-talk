import { Request } from "../helper/http";

import { getStorage } from "../helper/storage";

var request = new Request();

export class UserApi {
  login(email, password) {
    return request.post('login', { email, password });
  }

  async logout() {
    const user = await getStorage("user");
    request = new Request(user.token);

    return request.post("logout");
  }
}
