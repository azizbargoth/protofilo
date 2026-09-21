import { useState,memo } from "react";


const ExperienceCard = ({action}) => {
   const [isExpanded, setIsExpanded] = useState(false);
   const actionsList = Array.isArray(action) ? action : [];

  return (
    <div >
        {console.log("rendering exp card.....")}
       
      <div 
        className={`leading-relaxed transition-all duration-300 ${
          isExpanded ? '' : 'line-clamp-3'
        }`}
      >
      { actionsList.map((ele) => (<li key={ele.id}>{ele.role.trim()}</li>))}      
      </div>

      {/* Button toggles ONLY this card's state */}
      <div className="mt-3 flex justify-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold  tracking-wider dark:text-amazon hover:text-amazon/50 focus:outline-none"
        >
          {isExpanded ? 'Show Less ▲' : 'Show More ▼'}
        </button>
      </div>
    </div>
  );
}

export default memo(ExperienceCard)