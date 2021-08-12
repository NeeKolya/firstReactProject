const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = "";
         state.messages.push({ id: 6, message: body });
         return state;
      default:
         return state;
   }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;