import React, { useState } from "react";
import Heading from './Heading';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Dataarr from "./Dataarr";
import Loading from "./Loading";
import Foooter from "./Foooter"
import Pagenf from "./pagenf";
import Details from "./productdetail";
function App() {

  // const [totalcount,uptotalcount]=useState(0);

  const saved_data=localStorage.getItem("cart") || "{}";
  const data_json=JSON.parse(saved_data);
  const[cart,upcart]=useState(data_json);
  function handleaddtocart(productid,procount){
    let oldcount=cart[productid] || 0;
    const newcart={...cart,[productid]:procount+oldcount};
    upcart(newcart);
    
    // uptotalcount(procount+totalcount);
    let cartstr=JSON.stringify(newcart);
    localStorage.setItem("cart",cartstr);
  }
  const totalcount=Object.keys(cart).reduce((x,y)=>{
    return x+cart[y];
  },0)
  // uptotalcount(totalitem);
 
  
  let alldata=Dataarr();
    if(!alldata){
      return <Loading></Loading>;
    }
    // bg-[#F7F5F7]
    //use rgb(209,217,255)
  return (
    <div className="bg-[#F7F5F7] w-screen flex flex-col gap-20">   
    <Heading c={totalcount}/>
        {/* <div className='flex items-center justify-around mx-4 '>
        <div class="w-10">
            <div class="relative w-full min-w-[200px] h-10">
              <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
              <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                onChange={handle}
                class="peer w-full h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900"
                placeholder=" " /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Search Products
              </label>
            </div>
          </div> 
          <div>
          <select className='ml-[900px] border-black' onChange={handlesort} >
          <option value="DS">Sort By Default</option>
          <option value="SN">Sort By Title</option>
          <option value="SPLH">Sort By Price- Low to High</option>
          <option value="SPHL">Sort By Price- Low to High</option>
          </select>
          </div>
        </div> */}
        <div className="flex flex-col grow">
        <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/ProductDetails/:sku" element={<Details  onaddtocart={handleaddtocart}/>}></Route>
        <Route path="*" element={<Pagenf/>} ></Route>
        </Routes>
        </div>
      <Foooter/>
    </div>
  );
}

export default App;
