import React from 'react';
import PagesBanner from '../Shared/PagesBanner';
import { useLoaderData } from 'react-router-dom';
import TableRecipe from '../../singleComponents/TableRecipe';

const ViewRecipes = () => {
    const recipeData = useLoaderData();
    const {chef_name, chef_picture, description, likes, num_of_recipes, years_of_experience, recipes} = recipeData;
    return (
        <div>
            <PagesBanner>View Details of <span className='primary-color'>{chef_name}</span></PagesBanner>
            <div  className='min-h-[60vh] my-10 md:my-16 max-container flex flex-col justify-center items-center '>
                <div className='flex flex-col md:flex-row gap-5 md:gap-8 items-center md:px-14'>
                    <img className='max-w-[400px] w-[100%] rounded-md px-8 md:px-0' src={chef_picture} alt="" />
                    <div className='px-8 md:px-0'>
                        <h1 className='text-xl md:text-2xl font-serif font-semibold'>{chef_name}</h1>
                        <p className='text-sm font-medium text-slate-700'>Total Recipes: {num_of_recipes}</p>
                        <p className='text-sm font-medium text-slate-700'>Years of Experience: {years_of_experience}</p>
                        <p className='text-sm font-medium text-slate-700'>Total likes: {likes}</p>
                        <p className='text-base font-medium '>{description}</p>
                    </div>
                </div>
                {/* recipes preview */}
                <h1 className='text-xl font-bold font-serif text-center mt-8'>Recipes preview of <span className='primary-color'>{chef_name}</span></h1>
                <div className='w-full bg-slate-200 my-3 h-[2px]'><div className='w-[70%] md:w-[24%] mx-auto h-[2px] bg-[#E25111]'></div></div>
                <div className="md:flex flex-col w-full">
               <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 w-full">
                 <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                   <div className="overflow-hidden">
                     <table className="min-w-full">
                       <thead className="bg-white border-b">
                         <tr>
                           <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                             #
                           </th>
                           <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                             Recipe Picture
                           </th>
                           <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                             Recipe Name
                           </th>
                           <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                             Cooking Methods
                           </th>
                           <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Ingredients
                           </th>
                           <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Rating
                           </th>
                           <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Add to Favorite
                           </th>
                         </tr>
                       </thead>
                       <tbody>
                         {
                             recipes?.map((recipe, index) => <TableRecipe key={index} recipe={recipe} index={index+1}></TableRecipe>)
                         }
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
             </div>
            </div>
        </div>
    );
};

export default ViewRecipes;