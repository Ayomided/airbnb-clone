import { FaStar } from 'react-icons/fa'

function Card() {
  return (
    <div
      className="mx-10 my-10"
      style={{ fontFamily: 'Poppins', fontWeight: 300 }}
    >
      <div className="relative">
        <img
          className="rounded-xl"
          src="/katie-zaferes.png"
          alt="Katie Zaferes's potrait"
        />
        <div className="absolute top-2.5 left-2.5 bg-white rounded p-1.5 text-sm">
          SOLD OUT
        </div>
      </div>
      <div className="space-y-1 text-lg">
        <div className="flex mt-4">
          <FaStar 
          className="text-pink-500 mt-1 mr-1"  
          alt='Star icon'
          />
          <span>5.0</span>
          <span className="text-slate-400">(6) • </span>
          <span className="text-slate-400">USA</span>
        </div>
         <p>Life lessons with Katie Zaferes</p>
        <p className="">
          <span style={{ fontWeight: 600 }}> From $316 </span> / person
        </p>
      </div>
    </div>
  )
}

export default Card
 