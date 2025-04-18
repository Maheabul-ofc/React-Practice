import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //useRef hook
  const passwordRef = useRef (null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current ?. select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password)
  }, [password])


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
     
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  },[length, numAllowed, charAllowed, passwordGenerator])



  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-2  ">
    <h1 className='text-white text-center my-3 '> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 flex-row gap-y-2">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-gray-900 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none bg-gray-800 text-white px-4 py-2" onClick={ copyPasswordToClipboard} >Copy</button> 
      </div>
      <div className="flex text-sm gap-x-5 justify-center" >
           <div className="flex items-center gap-x-1">
             <input type="range" min={8} max={30} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
             <label className="text-white">Length: {length}</label>
           </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked = {numAllowed} id="numberInput" onChange={() => {setNumAllowed((prev) => !prev );}}/>
              <label className="text-white">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked = {charAllowed} id="characterInput" onChange={() => {setCharAllowed((prev) => !prev );}}/>
              <label className="text-white">Characters</label>
            </div>

        </div>
    </div>
  );
}

export default App;
