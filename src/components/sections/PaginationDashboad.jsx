import React from 'react';
import { FiArrowDown, FiArrowRight, FiArrowLeft } from "react-icons/fi"


const PaginationDashboad = () => {
    return (
        <div className='pagination'>
            <div className='pag-content'>
                <p>Showing</p>
                <select>
                    <option value="option1">Option 1 <FiArrowDown /></option>
                    <option value="option2">Option 2 <FiArrowDown /></option>
                    <option value="option3">Option 3 <FiArrowDown /></option>
                </select>
                <p>out of 200</p>
            </div>
            <div className="pag-btn">
                <div className="btn-block">
                    <div className='pagBtn'><FiArrowLeft /></div>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>...</p>
                    <p>15</p>
                    <p>16</p>
                    <div className='pagBtn'><FiArrowRight /></div>
                </div>
            </div>
        </div>
    )
}

export default PaginationDashboad;