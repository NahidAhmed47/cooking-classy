import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import toast from 'react-hot-toast';

const TableRecipe = ({recipe, index}) => {
    const {cooking_method, rating, recipe_name, ingredients, img} = recipe;
    const [openBtn, setOpenBtn] = useState(false);
    const favoriteBtn = ()=>{
        setOpenBtn(!openBtn);
        toast.success('Recipe added to favorites');
    }
    return (
        <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img className='max-w-[190px]' src={img} alt="" />
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {recipe_name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                {cooking_method === '' ? 'No method available' : cooking_method}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {
                    ingredients.map((ingredient, index) => {
                        return <ul key={index} className='list-disc'><li>{ingredient}</li></ul>
                    })
                }
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rating}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button title='Add to favorite' onClick={favoriteBtn} disabled={openBtn} className={`flex items-center flex-col ${openBtn ? 'text-slate-400' : ''}`}><FaRegHeart className={`w-5 h-5  ${openBtn ? 'text-slate-400' : 'text-red-500'}`}></FaRegHeart> {openBtn ? 'added' : 'add'} </button>
              </td>
            </tr>
    );
};

export default TableRecipe;