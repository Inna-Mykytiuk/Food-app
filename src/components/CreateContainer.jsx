import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { MdFastfood } from 'react-icons/md';
import { categories } from 'utils/data';
import Loader from "./Loader";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [{ foodItems }, dispatch] = useStateValue();

  return (
    <div className='w-full min-h-screen h-auto flex items-center justify-center'>
      {/* <p className="text-white">CreateContainer</p> */}
      <div className='w-[90%] md:w-[75%]  rounded-lg p-4 flex flex-col items-center justify-center gap-4'
      style={{ color: 'white',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(90, 72, 72, 0.3)',
          boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px' }}>

      {fields && (
        <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger"
        ? "bg-red-400 text-white"
        : "bg-emerald-400 text-emerald-800"}`}>
          {msg}
        </motion.p>
      )}

      <div className='w-full py-2 border-b border-mainTextGrey flex items-center gap-2'
      >
        <MdFastfood className='text-xl text-mainTextGrey'/>
        <input
        type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Give me a title...'
        style={{ color: 'white'}}
        className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-mainTextGrey'
        />
      </div>

      <div className='w-full'>
        <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-mainColor text-base border-b-2 border-mainTextGrey p-2 rounded-md cursor-pointer "
            style={{ backgroundColor: 'white', color: 'black', paddingRight: '20px' }}
          >
            <option value="other" >
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize text-mainColor"
                  value={item.urlParamName}
                  style={{backgroundColor: 'white'}}

                >
                  {item.name}
                </option>
              ))}
        </select>
      </div>

      <div className='group flex items-center justify-center flex-col border-2 border-dotted border-mainTextGrey w-full h-225 md:h-420 cursor-pointer rounded-lg'>
        {isLoading ? <Loader /> : <></>}
      </div>
      </div>
    </div>
  );
};

export default CreateContainer;

// .select-red-arrow {
//   position: relative;
//   background-color: white;
//   color: black;
//   padding-right: 20px;
// }

// /* Стилі для елемента <option> */
// .select-option {
//   background-color: red;
//   color: white;
// }

// /* Стилі для плейсхолдера (першого елемента <option>) */
// .select-placeholder {
//   color: gray;
// }
