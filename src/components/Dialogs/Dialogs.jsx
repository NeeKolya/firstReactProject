import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
   let state = props.store.getState().dialogsPage;

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   let messagesElements = state.messages.map(message => <Message message={message.message} />)
   let newMessageBody = state.newMessageBody;


   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   }
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }


   return (
      <div>
         <div className={style.dialogs}>
            <div className={style.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={style.messages}>
               {messagesElements}
               <textarea
                  value={newMessageBody}
                  onChange={onNewMessageChange} ></textarea>
               <button onClick={onSendMessageClick}>Add message</button>
            </div>

         </div>
      </div>
   )
}

export default Dialogs;

