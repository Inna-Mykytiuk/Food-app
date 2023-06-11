import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md';
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
  console.log(category)
  console.log(setImageAsset)
  console.log(setFields)
  console.log(setAlertStatus)
  console.log(setMsg)
  console.log(setIsLoading)

  const uploadImage =( ) => {}
  const deleteImage =( ) => {}
  const saveDetails =( ) => {}


  return (
    <div className='w-full min-h-screen h-auto flex items-center justify-center'>
      {/* <p className="text-white">CreateContainer</p> */}
      <div className='w-[90%] md:w-[75%]  rounded-lg p-4 flex flex-col items-center justify-center gap-4'
      style={{ color: 'white',
          backdropFilter: 'blur(5px)',
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
        <MdFastfood className='text-xl text-headerBgColor'/>
        <input
        type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Give me a title...'
        style={{ color: 'white'}}
        className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-headerBgColor text-white '
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
        {isLoading ? <Loader /> : (<>
          {!imageAsset ? (<>
            <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
              <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer gap-2 '>
                <MdCloudUpload className='text-gray-500 text-3xl hover:text-headerBgColor'/>
                <p className='text-gray-500 hover:text-headerBgColor'>Click here to upload</p>
              </div>
              <input
              type="file"
              name="uploadimage"
              accept="image/*"
              onChange={uploadImage}
              className='w-0 h-0'></input>
            </label>
          </>) :
          (<>
            <div className='relative h-full'>
              <img src={imageAsset} alt="uploadedImage" className='w-full h-full objest-cover'/>
              <button type='button' className='absolute bottom-3 right-3
              text-xl cursor-pointer outline-none hover:shadov-md duration-500 transition-all ease-in-out
              bg-gradient-to-br from-hoverColor to-logoColor py-2 px-4 rounded-lg text-white'
              onMouseOver={(e) => (e.target.style.boxShadow = '0 2px 6px 0 grey')}
              onMouseOut={(e) => (e.target.style.boxShadow = '')}
              onClick={deleteImage}>
                <MdDelete className='text-white'/>
              </button>
            </div>
          </>
          )}
        </>
        )}
      </div>

      <div className='w-full flex flex-col md:flex-row items-center gap-3'>
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFoodBank className='text-2xl text-headerBgColor bg-transparent outline-none border-none placeholder:text-mainTextGrey'/>
          <input
          type='text'
          required
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder='Calories'
          className='w-full h-full text-lg bg-transparent outline-none border-none text-white placeholder:text-headerBgColor'/>
        </div>

        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdAttachMoney className='text-2xl text-headerBgColor bg-transparent outline-none border-none placeholder:text-mainTextGrey'/>
          <input
          type='text'
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Price'
          className='w-full h-full text-lg bg-transparent outline-none border-none text-white placeholder:text-headerBgColor'/>
        </div>
      </div>

      <div className='flex items-center w-full'>
        <button type="button" className='ml-0 md:ml-auto w-full md:w-auto border-none  px-12 py-2 taxt-lg text-white font-semibold shadow-md

        text-xl cursor-pointer outline-none hover:shadov-md duration-500 transition-all ease-in-out bg-gradient-to-br from-hoverColor to-logoColor  rounded-lg'
        onMouseOver={(e) => (e.target.style.boxShadow = '0 2px 6px 0 grey')}
        onMouseOut={(e) => (e.target.style.boxShadow = '')}
        onClick={saveDetails}>
          Save
        </button>
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
