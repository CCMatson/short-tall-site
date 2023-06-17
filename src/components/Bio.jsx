// import React from 'react'

import PropTypes from 'prop-types'

const Bio = ({ bioName, bioTitle, bioDetails }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4 ">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-md md:text-md'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-customPurple rounded-md font-merriweather'>{bioName}</span>
          <span className='font-merriweather'>{bioTitle}</span>
        </p>
        <p className='my-2 text-base font-normal text-stone-800'>{bioDetails}</p>
      </li>
    </ol>
  );
};

Bio.propTypes = {
  bioName: PropTypes.string.isRequired,
  bioTitle: PropTypes.string.isRequired,
  bioDetails: PropTypes.string.isRequired,
}

export default Bio;