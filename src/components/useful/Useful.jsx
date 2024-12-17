import React from 'react'
import './Usefull.css'

const Usefull = () => {
  return (
    <div className="main">
      <h1 className='usefulh'>Всё, что нужно для успешного старта!</h1>
      <p className='grey'>Здесь вы найдёте подборку инструментов, руководств и советов от экспертов, которые помогут вам на пути к созданию инновационных проектов.</p>
      <div className="usefuldiv">
        <div className='cardsuc useful'>
          <h2>Руководства по технологиям</h2>
          <p>Познакомьтесь с материалами по искусственному интеллекту, IoT, Big Data и разработке приложений.</p>
          <ul>
              <li><a href="https://youtube.com/playlist?list=PLgbWHrkHCcpuCcl0qehDcd5mT1LV_dD_L&si=_vL6yJ0Q85atk1kV" target="_blank" className='linkuse'>Введение в искусственный интеллект</a></li>
              <li><a href="https://habr.com/ru/companies/otus/articles/549550/" target="_blank">Основы интернета вещей</a></li>
              <li><a href="https://roadmap.sh/android" target="_blank">Создание веб-приложений (RoadMap)</a></li>
          </ul>
        </div>
        <div className="cardsuc useful">
          <h2>Инструменты и API</h2>
            <p>Собрали для вас популярные платформы и сервисы, чтобы ускорить разработку.</p>
            <div className="list">
                <p><a href="https://firebase.google.com/" target="_blank">Firebase</a> — для работы с базами данных и хостингом</p>
                <p><a href="https://openai.com/api/" target="_blank">OpenAI API</a> — интеграция искусственного интеллекта</p>
                <p><a href="https://cloud.google.com/" target="_blank">Google Cloud</a> — облачные вычисления</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Usefull