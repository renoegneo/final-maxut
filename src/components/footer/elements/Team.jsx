import React from 'react'

const Team = () => {
  return (
    <div className="main">
        <div className="child">
          <div className="card">
            <img src="maxut.jpg" alt="" />
            <p>Максут</p>
          </div>
          <h1 className='and'>AND</h1>
          <div className="card">
            <img src="chatgpt.png" alt="" />
            <p>ChatGPT</p>
          </div>
          {/* <div className="card">
            <img src="Oktan.png" alt="" />
            <pre>             Oktan</pre>
          </div> */}
        </div>
    </div>
  )
}

export default Team;