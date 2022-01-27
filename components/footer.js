import React from "react"
import social from "./social.svg"

const App = (props) => {
  return (
   <footer className="component-footer">
    <div className="div-1">
      <div className="div-2"></div>
      <div className="div-3">
        <div className="div-4">
          <div className="div-5">
            <span>Back to top</span>
            <span className="span-2">Let’s connect</span>
            <img className="img-1" src={social} />
            <div className="div-6">
              <div className="div-7">
                <span>mint</span>
                <div className="div-8"></div>
              </div>
              <div className="div-9">
                <span>ourNFTs</span>
                <div className="div-10"></div>
              </div>
            </div>
          </div>
          <div className="div-11">
            <span className="span-5">theTeam</span>
            <div className="div-12"></div>
          </div>
        </div>
        <div className="div-13">
          <div className="div-14">
            <span className="span-6">FAQs</span>
            <div className="div-15"></div>
          </div>
          <div className="div-16">
            <span className="span-7">13</span>
            <span className="span-8">© 2022 Studio Thirteen</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
export default Footer

<style>
.div-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.div-2 {
  background: #ffffff;
}
.div-3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 64;
  background: #4506cb;
  text-align: right;
}
.div-4 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 30;
  color: #ffffff;
}
.div-5 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 24;
  font-size: 24px;
  font-family: "Montserrat";
  font-weight: 700;
  line-height: 28px;
}
.span-2 {
  font-size: 56px;
  font-weight: 500;
  font-family: "Druk Wide Web";
  line-height: 65px;
}
.img-1 {
  height: 40px;
  width: 400px;
}
.div-6 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 64;
}
.div-7 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.div-8 {
  background: #ffffff;
}
.div-9 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.div-10 {
  background: #ffffff;
}
.div-11 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.span-5 {
  font-size: 24px;
  font-weight: 700;
  font-family: "Montserrat";
  line-height: 28px;
}
.div-12 {
  background: #ffffff;
}
.div-13 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 13;
}
.div-14 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4;
}
.span-6 {
  font-size: 24px;
  font-weight: 700;
  font-family: "Montserrat";
  line-height: 28px;
  color: #ffffff;
}
.div-15 {
  background: #ffffff;
}
.div-16 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 64;
}
.span-7 {
  font-size: 300px;
  font-weight: 700;
  font-family: "Druk Wide Web";
  line-height: 351px;
  color: #5eead4;
}
.span-8 {
  font-size: 24px;
  font-weight: 600;
  font-family: "Montserrat";
  line-height: 28px;
  color: #ffffff;
}
</style>
