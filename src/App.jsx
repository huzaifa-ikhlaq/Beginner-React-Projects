import { useEffect, useState } from 'react'



function App() {

  let Num = "1234567890101112131415161718"
  let Char = " !@#$%^&*()_+-=[]{}|;:'\"<>,.?~"
  let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let Lower = "abcdefghigklmqrstuvwxyz"

  const [length, setLenght] = useState(8)

  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)

  const [password, setPassword] = useState("")

  let createPassword = () => {

    let intialPassword = `${Lower}`
    let finalPassword = `${Upper.charAt(Math.floor(Math.random() * Upper.length))}`

    if (number || character || intialPassword) {

      if (number) {
        intialPassword += Num
      }

      if (character) {
        intialPassword += Char
      }
      for (let i = 0; i < length; i++) {
        finalPassword += intialPassword.charAt(Math.floor(Math.random() * intialPassword.length))
      }


    }
    setPassword(finalPassword)
  }

  useEffect(() => {
   createPassword()

  }, [])


  let copy = () => {
    navigator.clipboard.writeText(password)
    alert("Copied")
  }

  return (
    <>
      <h2 className="text-white text-xl text-center">Password generator</h2>
      {/* input field and copy button */}
      <div className='relative flex items-center mt-3 '>
        <input className='text-lg font-medium text-black h-[40px] w-full bg-white rounded-[10px] ' type="text" value={password} readOnly />
        <button className='bg-blue-500 text-white absolute right-0 w-15 h-[40px] rounded-r-[10px] cursor-pointer  hover:bg-blue-600 transition-all duration-500 '
          onClick={copy} >Copy</button>
      </div>
      <div className='flex items-center gap-3   mt-4'>

        {/* input range and length */}
        <input className='cursor-pointer' min={8} max={40} value={length} onChange={(e) => setLenght(e.target.value)} type="range" name="" id="" />
        <h3 className='text-orange-500 '>Length: {length}</h3>

        {/* Number check box  */}
        <div className='cursor-pointer'>
          <input className='cursor-pointer' type="checkbox" id="Number" checked={number}
            onChange={(e) => {
              setNumber(!number); console.log(!number);
            }} />
          <label className='text-orange-500 cursor-pointer ml-1' htmlFor="Number">Numbers</label>
        </div>

        {/* character check box  */}
        <div className='cursor-pointer'>
          <input className='cursor-pointer' type="checkbox" id="Character" checked={character}
            onChange={(e) => {
              setCharacter(!character); console.log(!character);
            }} />
          <label className='text-orange-500 cursor-pointer ml-1' htmlFor="Character">Characters</label>
        </div>

      </div>
      {/* Generate Password button  */}
      <button className='mt-4 bg-blue-500 text-white rounded-[10px] w-full cursor-pointer hover:bg-blue-600 hover:scale-99 transition-all duration-500 h-12'
        onClick={createPassword} > Generate Password</button >
    </>
  )
}

export default App
