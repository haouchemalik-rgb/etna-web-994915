import React from 'react';
import { Header } from '../components';

const Message = () => {
    return (
      <div className='flex flex-row'>

        {/* MENU DE CHAT */}
        <div className="flex flex-col p-2 md:p-10 md:ml-10 ml-2 md:mt-10 md:mb-10 bg-white min-h-full rounded-3xl">
          <Header title="Conversations" />
          <div className='flex flex-col w-full'>
            <div className='flex flex-row border-[3px] p-1 rounded-md h-[450px]'>
              <div className='border-b-2 h-[30px] w-full'>
                <header className='text-lg'>
                  Conversations
                </header>
              </div>
              <div className=''>

              </div>
            </div>
          </div>
        </div>
        
        {/* Chat */}
        <div className='flex flex-col md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
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
            <div className='p-[2px] max-h-[390px] overflow-scroll'>
              <div>
                <p className='text-blue-600 font-bold'>Les Autres</p> 
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
      </div>
    );
};
export default Message;
