import React, { useState } from "react";
import background from "./pictures/homepage/welcome.svg";
import taiwanCity from "./pictures/homepage/city_collage.svg";
import deform from "./pictures/homepage/deform_collage.svg";
import nature from "./pictures/homepage/nature_collage.svg";
import others from "./pictures/homepage/others_collage.svg";

const Homepage = () => {
  const [welcome, setWelcome] = useState(
    `歡迎來到游牧速寫，我已經迫不及待想與您分享我的作品了!`
  );
  const changeText = () => {
    setWelcome("Have a good time!");
  };

  const [showbtn, setShowbtn] = useState(`Call to Action`);
  const [showbtnStyle, setShowbtnStyle] = useState("none");
  const showMore = () => {
    if (showbtn === "Call to Action") {
      setShowbtnStyle("flex");
      setShowbtn("Hide Contents");
    } else {
      setShowbtnStyle("none");
      setShowbtn("Call to Action");
    }
  };

  return (
    <main>
      <section
        className="backImage"
        style={{ backgroundImage: `url(${background})` }}
        onClick={changeText}
      >
        <h3 className="introduce">{welcome}</h3>
      </section>

      <section className="second" id="second">
        <h3>
          我喜歡將自己的生活環境以手繪的方式紀錄，
          <br />
          以下為大致的分類......
        </h3>
        <section className="classification">
          <div>
            <img src={taiwanCity} alt="台灣城市" />
            <div className="info">
              <p>台灣城市</p>
            </div>
          </div>
          <div>
            <img src={deform} alt="畸零地" />
            <div className="info">
              <p>畸零地</p>
            </div>
          </div>
          <div>
            <img src={nature} alt="自然" />
            <div className="info">
              <p>自然</p>
            </div>
          </div>
          <div>
            <img src={others} alt="其它" />
            <div className="info">
              <p>其它</p>
            </div>
          </div>
        </section>
        <button className="call" onClick={showMore}>
          {showbtn}
        </button>
        <section
          className="classification more-classification"
          style={{ display: showbtnStyle }}
        >
          <div>
            <img src={taiwanCity} alt="台灣城市" />
            <div className="info">
              <p>更多台灣城市</p>
            </div>
          </div>
          <div>
            <img src={deform} alt="畸零地" />
            <div className="info">
              <p>更多畸零地</p>
            </div>
          </div>
          <div>
            <img src={nature} alt="自然" />
            <div className="info">
              <p>更多自然</p>
            </div>
          </div>
          <div>
            <img src={others} alt="其它" />
            <div className="info">
              <p>更多其它</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Homepage;
