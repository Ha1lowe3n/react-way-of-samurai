const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hello", likeCount: "9" },
      { id: 2, message: "Hi", likeCount: "7" },
    ]
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

export default state;