import React from 'react'

export default function HomeTab() {
  return (
    <>
    <div className='container my-3'>
      <div className="result my-3">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="outputResult" className="col-form-label">Output:</label>
          </div>
          <div className="col-auto">
            <input type="text" id="outputResult" className="form-control"/>
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}