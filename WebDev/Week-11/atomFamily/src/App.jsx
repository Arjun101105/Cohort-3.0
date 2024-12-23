import { RecoilRoot, useRecoilState, useRecoilValue} from 'recoil';
import todosAtomFamily from './atoms'

import './App.css'

function App() {


  return <div><RecoilRoot>
    <Todo id={1}/>
    <Todo id={2}/>

    </RecoilRoot> 
  </div>
}

function Todo({id}){
  const todo = useRecoilValue(todosAtomFamily(id));
  
  return<div>
    {todo.title}
    {todo.description}
    <br/>
  </div>
}

export default App
