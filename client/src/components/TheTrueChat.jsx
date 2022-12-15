import userImage from '../images/user.png';
import Header from './Header';

const TheTrueChat = ({channel}) => {
  const messages = channel.messages;
  return (
    <div>
      <Header title='Chat - groupe blablacar'/>
      <div className='flex flex-col-reverse border-[3px] solid rounded-md p-2 w-[600px] h-[450px]'>
        <form className='flex flex-row w-full pt-3 border-t-2' action="">
          <input className='w-full h-[35px] outline-none border rounded-xl focus:border-pink-500 border-violet-400 hover:border-pink-500 pr-2 pl-2' type="text" placeholder='message ...'  />
          <button
            className=' bg-gradient-to-l from-violet-400 to-pink-500
            text-white hover:bg-gradient-to-r rounded-2xl pl-2 pr-2 ml-2'
          >
            Envoyer
          </button>
        </form>
        <div className='p-[2px] max-h-[390px] overflow-y-auto'>
          <div>
            <p className='flex flex-row text-blue-600 font-bold'>
              <img className='w-[20px] h-[20px] mr-2' src={userImage} alt="avatar" />
              Les Autres
            </p> 
            <p className='bg-[#23f8a67c] ml-1 p-1 rounded-md overflow-hidden max-w-[50ch]'>
              saluut ceci est un messgaejkbbbbbbbbaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbb bbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbb bbbbbbbbbbb bbbbbbbbbb bbbbb bbbbbbbbbbb
            </p>
          </div>
          <div className='flex flex-row-reverse mr-1'>
            <div>
              <p className='flex flex-row-reverse text-pink-500 font-bold'>Nous</p>
              
              <p className=' p-1 bg-[#ffc0cbb5] text-black mr-2 rounded-md overflow-hidden max-w-[50ch]'>
                saluut ceci est un messgaejkbbbbbbbbaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbb bbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbb bbbbbbbbbbb bbbbbbbbbb bbbbb bbbbbbbbbbb
              </p>
            </div>
          </div>
          <div>
            <p className='text-blue-600 font-bold'>Les Autres</p> 
            <p className='bg-[#23f8a67c] ml-1 p-1 rounded-md overflow-hidden max-w-[50ch]'>
              saluut ceci est un messgaejkbbbbbbbbaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbb bbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbb bbbbbbbbbbb bbbbbbbbbb bbbbb bbbbbbbbbbb
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheTrueChat;
