import { useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App(){
    const inputRef = useRef();

function focusOnInput(){
    inputRef.current.focus();
}
    return <div>
        <BrowserRouter>
            <Link to={"/"}>Allen</Link>
            |
            <Link to={"/neet/online-coaching-class-11"}>Class 11</Link>
            |
            <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
            <Routes>
                <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
                <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
                <Route path='/' element={<Landing/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes> 
        </BrowserRouter>
        <input ref={inputRef} type="text" />
            <input type="text" />
            <button onClick={focusOnInput}>submit</button>
            
    </div>
}

function ErrorPage(){
    return <div>
        <br />                                                                  
        Sorry Page not found :( !
    </div>
}

function Class11Program(){
    return <div>
        <br />
        NEET Programs for Class 11th.
    </div>
}

function Class12Program(){
    return <div>
        <br />
        NEET Programs for Class 12th.
    </div>
}

function Landing(){
    return <div>
        <br />
        Welcome to Allen.
    </div>
}
export default App;