import groupImage from '../images/group.png';
import userImage from '../images/user.png';

const ChatButton = ({group, channel}) => {
  return (
    <button className='hover:bg-gray-400 w-full max-w-full p-1'>
      <div className='flex flex-row'>
        <img className='w-[50px]' src={group? groupImage: userImage} alt='avatar'/>
        <p className='truncate mt-3 ml-2'>{channel.name}</p>
      </div>
    </button>
  )
}

export default ChatButton;
