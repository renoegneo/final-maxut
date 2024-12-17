import React from 'react'

import './Body.css'

const Body = () => {
  return (
    <div className='main'>
        <div className="upper">
            <p className="hackathon">HACKATHON</p>
        </div>
        <div className="mid">


                <div className="mid1">
                  <img src="/brainstorm.png" alt="" />
                  <div className="mid1text">
                  <h3>Идеи, которые изменят будущее</h3>
                  <p>Хакатон начинается с вдохновения и совместной работы.
                      Здесь рождаются самые смелые идеи, которые объединяют творчество, технологии и страсть.
                      В этом пространстве каждый голос важен, а каждая мысль может стать революционной.</p>
                  </div>

                </div>
                <div className="mid1">
                  <img src="/mainph.png" alt="" />

                  <div className="mid1text">
                    <h3>Сила команды</h3>
                    <p>Хакатон – это не только про технологии, но и про людей. 
                      Это место, где участники делятся опытом, учатся друг у друга и создают крепкие связи. 
                      Командная работа – основа успеха.</p>
                  </div>

                </div>
                <div className="mid1">
                  <img src="/codingph.png" alt="" />
                  <div className="mid1text">
                    <h3>Код – инструмент реализации</h3>
                    <p>После рождения идеи приходит время превратить её в реальность.
                       Участники погружаются в разработку, программируя, тестируя и создавая.
                       Здесь каждое нажатие клавиши приближает к созданию чего-то нового и впечатляющего.</p>
                  </div>


                </div>
        </div>



        <div className="lower">
              <div className="first"></div>
              <div className="second"></div>
              <div className="third"></div>
         </div>
         <br />
         <br />
    </div>
    
  )
}

export default Body