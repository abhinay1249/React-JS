import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';


export function ChatUser({ message, sender }) {
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
      </div>
      {sender === 'User' && (
        <img
          className="chat-message-profile"
          src={UserProfileImage}
        />
      )}
    </div>
  );
}