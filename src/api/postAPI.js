import { instance } from "./instance";

export const postApi = {
  // GET LIST
  getPostList() {
    return instance.get(`/posts`);
  }, 
  getPostByID(postID) {
    return instance.get(`/posts${postID}`);
  }, 
};
