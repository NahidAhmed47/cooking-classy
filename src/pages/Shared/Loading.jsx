import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-[100vh] flex justify-center items-center">
                 <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-blue-700"></div>
             </div>
    );
};

export default Loading;