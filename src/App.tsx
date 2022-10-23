import React from 'react';
import './App.css';




function App() {
  return (
   <div className={'app-wrapper'}>
       <header className={'header'}>
           <img src={'https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png'}/>
       </header>
       <nav className={'nav'}>
           <ul>
               <li><a>Profile</a></li>
               <li><a>Messages</a></li>
               <li><a>News</a></li>
               <li><a>Music</a></li>
               <li><a>Settings</a></li>
           </ul>
       </nav>
       <div className={'content'}>
           <div>
               <img src={'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'}/>
           </div>
           <div> avatar + description</div>
           <div>
               My post
               <div>New post</div>
               <div>
                   post 1
               </div>
               <div>
                   post 2
               </div>
           </div>
       </div>
   </div>
  );
}


export default App;
