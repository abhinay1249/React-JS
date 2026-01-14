import RobotProfileImage from '../assets/robot.png';
import Profile from '../assets/profile.png';
import './ChatUser.css'
import dayjs from 'dayjs';

export function ChatUser({ message, sender, time }) {
  // const message = props.message;
  // const sender = props.sender;
  // const {message,sender} = props;
  /*
  if(sender === "robot"){
    return(
      <div>
        <img src="Images/robot.png" width="50"/>
        {message};
      </div>
    )
  }
  */
  return (
    <div className={
      sender === 'User'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'Robot' && (
        <img
          className="chat-message-profile"
          src={RobotProfileImage}
        />
      )}
      <div className="chat-message-text">
        {message}
        {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
      </div>
      
      {sender === 'User' && (
        <img
          className="chat-message-profile"
          src={Profile}
        />
      )}
    </div>
  );
}