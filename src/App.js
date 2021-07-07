import React, { useState } from "react";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return <div>

  {/* 'hello world' */}
  <Folder  name='Desktop' isOpen={false} >
    <Folder  name='Music' >
      <File name='song.mp3' />
      <File name='dababy.mp3' />
    </Folder>
    <File name='logo.png' />
    <File name='dog.png' />
  </Folder>
  <Folder  name='Home' />
  <Folder  name='Documents' />
  </div> 
};

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { name, children} = props
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log('clicked!')
  }
  const direction = isOpen ? 'down' : 'right';
  // console.log(props)
  // const borderStyle = {border: '2px solid red', margin:'0px'};
  return <div>
    <span onClick={handleClick}>
    <i className='blue folder icon'></i>
    <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
    <div style={{marginLeft: '17px'}}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const {name} = props
  const fileExtension = name.split('.')[1]
  const fileIcons = {
    mp3: 'headphones',
    png: 'file image',
    jpeg: 'file image outline'
  };
  return <div> 
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
    </div>
};

export default App;
