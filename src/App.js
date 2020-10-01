import React, {Component} from 'react';
import logo from './logo.svg'; 
import Customer from './components/Customer';
import './App.css';
const customers = [
  {
  'id': '1',
  'image':'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'960907',
  'gender':'남자',
  'job':'대학생'
},
{
  'id': '2',
  'image':'https://placeimg.com/64/64/any',
  'name':'장세진',
  'birthday':'960307',
  'gender':'남자',
  'job':'프로그래머'
},
{
  'id': '3',
  'image':'https://placeimg.com/64/64/any',
  'name':'장한별',
  'birthday':'960807',
  'gender':'남자',
  'job':'디자이너'
}
]
class App extends Component{
  render(){
    return(
      <div>
      {
        customers.map(c=>{
          return <Customer key={c.id}
            id = {c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        })
      }
  </div>
    )
  }
}

export default App;
