import React from 'react';
import '../style/spinner.css';
import '../style/listProducts.css'

export default function LoadingSpinner() {
  return (
    <section className="">
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
    </section>
  )
}
