import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Hello", likesCount: 10 },
            { id: 2, message: "It's second messsage", likesCount: 10 },
            { id: 3, message: "Thanks", likesCount: 6 }
         ],
         newPostText: 'New Text'
      },
      messagesPage: {
         messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Its swesome" },
            { id: 3, message: "How are you?" },
            { id: 3, message: "Im fine" },
            { id: 3, message: "And you?" },
            { id: 3, message: "i'm fine too" },
         ],
         dialogs: [
            { id: 1, name: "Kolya" },
            { id: 2, name: "Petya" },
            { id: 3, name: "Sasha" },
            { id: 4, name: "Lena" },
            { id: 5, name: "Vasya" },
            { id: 6, name: "Vera" }
         ],
         newMessageBody: ""
      }
   },
   _callSubscriber() {
      // Подставляется функция, которая была закинута в параметры observer
   },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
      this._state.sidebar = sidebarReducer(this._state.messagesPage, action);

      this._callSubscriber(this._state);
   }
}

window.store = store;
export default store;

// 40 урок