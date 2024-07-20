import React from 'react'

const InputPage = () => {
  return (
    <div className="w-full h-screen bg-blue-500 flex justify-center items-center">
      <form action="https://input-message-black.vercel.app/" method="post" className="w-[400px] min-h-[300px] flex justify-center items-center flex-col bg-white rounded-2xl">
        <h2 className="text-2xl font-bold">Botga xabar</h2>
        <input type="text" name="message" placeholder="Enter your message" required className="border outline-none py-2 px-3 w-3/4 bg-gray-500 text-white rounded-2xl my-5"/>
        <button type="submit" className="py-2 px-4 border rounded-2xl bg-green-400 active:scale-90 duration-500">Send</button>
      </form>
    </div>
  )
}
export default InputPage
