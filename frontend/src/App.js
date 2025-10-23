import "./App.css";
import Quiz from './components/Quiz/Quiz.js';
import { useState } from "react";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <div className="content">
        <h1 className="title">Personality tets</h1>

        {!start ? (
          <div className="welcome-container">
            <div className="welcome-content">
              <div className="explanation-card">
                <h2>Зурган дээр хамгийн түрүүнд харж байгаа зүйл нь таны далд зан чанарыг нээх болон
                </h2>
                <p className="explanation-text">
                  Та маск зүүж байгаагаа мэдсэн үү? Ер нь бид нас ахих тусам инээмсэглэлийнхээ ард жинхэнэ сэтгэл хөдлөлөө нууж сурсан. Бид бодит байдалд санаа тавьдаг учраас бусдад таалагдах, сэтгэгдэл төрүүлэх дуртай. Бид маскыг зуршлаараа сольдог бөгөөд заримдаа үүнийг хийж байгаагаа ч анзаардаггүй.

Та өөрийнхөө жинхэнэ зан чанарыг олж мэдмээр байна уу?
                </p>
                <ul className="feature-list">
                  <li>🎯 Байгалийн шийдвэр гаргах хэв маяг</li>
                  <li>💭 Мэдээлэл ба сэтгэл хөдлөлийг боловсруулах арга</li>
                  <li>🤝 Хамтын харилцаа болон нийгмийн орчинд хандах арга</li>
                  <li>⚡ Эрч хүч, мотивацийн хэв маяг</li>
                </ul>
                <p className="instruction-text">
                  Та зургийг анзаараад, хамгийн түрүүнд юуг харсныг сонгоно.  
                  Дараа нь хариулт дундаас сонголтоо хийж, тест дууссаны дараа таны хувийн онцлог тодорхойлогдоно.  
                  Зөв эсвэл буруу хариулт гэж байхгүй.
                </p>
              </div>

              <button 
                onClick={() => setStart(true)} 
                className="btn-start"
              >
                Аялалаа Эхлүүлэх
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-section">
            <Quiz />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
