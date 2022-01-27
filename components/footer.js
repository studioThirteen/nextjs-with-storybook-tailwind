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