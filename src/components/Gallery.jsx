import React from 'react';

const Gallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] border-white/10 dark:bg-gray-900/40 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                <img alt="Abstract composition of black cylinders with smoke" className="rounded-lg w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe7zWB_nPUVD2QfAXwzLvEiehhUESBmQcJ8oJsKo-WcYvXrdnzlQEcujeqLhMZ0tVMy6HQVMtte6gi8dHZaITOsE0ezUQI28Etoimsgte_Iu5a2Eqz0eNQtY6yFPfRWCO-rBS1VhHtRFRSIxRhXSqcq1FpOm1A12DTAwv00bcoCOLu4DLkIDGCXRD24zpWMsJOApJMRMSWyTLDyellL1HxP8jLIfIRa__eSx_8qQKxzX_KaLIoz7e4iQF_wHU0hVkHAfYaD1SSB0w" />
            </div>
            <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] border-white/10 dark:bg-gray-900/40 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                <img alt="Abstract composition of a black geometric object on a pile of powder" className="rounded-lg w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3Mazpq85X99SUuTpEfEziuy8Tzgz3b6uaPFdMLXx1VujZ6Zn9_IIYi9mXi0fl5XqbgsrBWXZMQOse4pJRi8BFTE9wQpG1D1dcvjs7VJbjX-RGFTcRcsEcEILzGykR3dC7KxVsGJ2qvR1PDLsYXxD6SWoLa3V9gCu7VxWVcibkn_w3rN1tJWZrl-ecAh-xrlsjbYlX6q5OIPbbjrErXxA1lRty7ikLAhzsStddmUaG1290LjANTfmKHgJ6awt8h3wPg_5qCsDJEI" />
            </div>
        </div>
    );
};

export default Gallery;
