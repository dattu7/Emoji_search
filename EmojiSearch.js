import React from 'react'
import './emojiStyles.css';
import { useState } from 'react';
const emojiData=[
    {
    id:1,
    symbol:"😃",
    name:"Smiling face"
    },
    {
        id:1,
        symbol:"😂",
        name:"Laughing face"
    },
    {
        id:1,
        symbol:"🥺",
        name:"Emotional face"
    },
    {
        id:1,
        symbol:"😭",
        name:"crying face"
    },
    {
        id:1,
        symbol:"🥳",
        name:"Partying face"
    }, 
    {
        id:1,
        symbol:"😉",
        name:"wink face"
    }, 
    {
        id:1,
        symbol:"😍",
        name:"hearty eyes face"
    }, 
    {
        id:1,
        symbol:"🤔",
        name:"Thinking face"
    }, 
    {
        id:1,
        symbol:"😋",
        name:"yum face"
    }, 
    {
        id:1,
        symbol:"😐",
        name:"neutral face"
    }, 


];


function EmojiSearch() {
    const [searchEmoji,setSearchEmoji]=useState("");
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji = emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    });
  return (
    <div className='Main'>
        <h1>React Emoji App</h1>
        <input type='text' placeholder='search for emoji...' value={searchEmoji} onChange={handleChange}></input>
        <div className='Container'>
            {showEmoji.map((emoji)=>emoji.symbol)}
        </div>
    </div>
  )
}

export default EmojiSearch