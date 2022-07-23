import axios from "axios";

export const getPosts = ({ commit }) => {
  axios.get("https://techcrunch.com/wp-json/wp/v2/posts")
   .then((response) => {
      commit("SET_POSTS", response.data);
    })
    .catch((error) => {
      console.log(error)
      alert(error)
    });
}

export const getDetailPost = ({commit}, postId) => {
  axios.get(`https://techcrunch.com/wp-json/wp/v2/posts/${postId}`)
    .then((response) => {
      commit("SET_DETAILPOST", response.data)
    })
    .catch((error) => {
      console.log(error)
      alert(error)
    })
};
