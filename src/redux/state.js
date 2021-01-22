let rerenderEntireTree = () => { };

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hello", likesCount: "9" },
      { id: 2, message: "Hi", likesCount: "7" },
    ],
    newPostText: ""
  },

  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Oleg" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Valera" },
    ],
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "What's up?" },
    ],
  }
};

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (postText) => {
  state.profilePage.newPostText = postText;
  rerenderEntireTree(state);
}

export default state;