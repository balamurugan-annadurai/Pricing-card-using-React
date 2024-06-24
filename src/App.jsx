import React from 'react'
import './App.css'
import Card from './components/Card';

//Creating object and storing data's
const card1 = {
  tag:"FREE",
  price:"$0/month",
  features:[
    {isIncluded:true,text:"Single user"},
    {isIncluded:true,text:"50GB Storage"},
    {isIncluded:true,text:"Unlimited Public Projects"},
    {isIncluded:true,text:"Community Access"},
    {isIncluded:false,text:"Unlimited Private Projects"},
    {isIncluded:false,text:"Dedicated Phone Support"},
    {isIncluded:false,text:"Free subdomain"},
    {isIncluded:false,text:"Monthly Status Support"},
  ],
  btn:false
}
const card2 = {
  tag:"PLUS",
  price:"$9/month",
  features:[
    {isIncluded:true,text:"Single user"},
    {isIncluded:true,text:"50GB Storage"},
    {isIncluded:true,text:"Unlimited Public Projects"},
    {isIncluded:true,text:"Community Access"},
    {isIncluded:true,text:"Unlimited Private Projects"},
    {isIncluded:true,text:"Dedicated Phone Support"},
    {isIncluded:true,text:"Free subdomain"},
    {isIncluded:false,text:"Monthly Status Support"},
  ],
  btn:false
}
const card3 = {
  tag:"PRO",
  price:"$49/month",
  features:[
    {isIncluded:true,text:"Single user"},
    {isIncluded:true,text:"50GB Storage"},
    {isIncluded:true,text:"Unlimited Public Projects"},
    {isIncluded:true,text:"Community Access"},
    {isIncluded:true,text:"Unlimited Private Projects"},
    {isIncluded:true,text:"Dedicated Phone Support"},
    {isIncluded:true,text:"Free subdomain"},
    {isIncluded:true,text:"Monthly Status Support"},
  ],
  btn:true
}
//////////////////////////////////////////

//function component to create container
function App() {
   
  return (
    <div className='container'>
        <Card card={card1}/>
        <Card card={card2}/>
        <Card card={card3}/>
    </div>
  )
}
/////////////////////////////////////////
export default App