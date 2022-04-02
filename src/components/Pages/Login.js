import React, { Component } from "react";
import style from "../Pages/Modules/login.module.scss";
import img1 from "../../../src/Assets/Home/login bg.jpg";
import img2 from "../../../src/Assets/Home/login shoe 2.jpg";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      isRegister: true,
    };
  }

  render() {
    return (
      this.state.isRegister ?
      <>
      <div className={style.body}>
            <img src={img1} alt="" />

            <div className={style.bg_shoe}>
              <img src={img2} alt="" />
            </div>

            <div className={style.container}>
              <div className={style.welcome}>
                <h2>WELCOME</h2>
              </div>

              <div className={style.username}>
                <h4>Username</h4>
                <input type="text" placeholder="xxxxxxxxxx" />
              </div>

              <div className={style.password}>
                <h4>Password</h4>
                <input type="password" placeholder="******" />
              </div>

              <div className={style.remember_forget}>
                <div className={style.remember}>
                  <h5>
                    <input type="checkbox" /> Remember me
                  </h5>
                </div>
                <div className={style.forget}>
                  <h5>Forget Password?</h5>
                </div>
              </div>

              <div className={style.submit}>
                <button onClick={() => console.log("submit")}>
                  Submit
                </button>
              </div>
              <div className={style.alter}>
                <h3>Not registered yet?</h3>
                <button onClick={() => this.setState({isRegister:false})}>
                  Register
                </button>
              </div>
            </div>
          </div>
          
        
      </>
      :
      <>
      <div>
          <div className={style.body}>
            <img src={img1} alt="" />

            <div className={style.bg_shoe}>
              <img src={img2} alt="" />
            </div>
            <div className={style.container}>
              <div className={style.welcome}>
                <h2>WELCOME</h2>
              </div>

              <div className={style.username}>
                <h4>Username</h4>
                <input type="text" placeholder="xxxxxxxxxx" />
              </div>

              <div className={style.password}>
                <h4>Password</h4>
                <input type="password" placeholder="******" />
              </div>

              <div className={style.password}>
                <h4>Confirm Password</h4>
                <input type="password" placeholder="******" />
              </div>

              <div className={style.submit}>
                <button onClick={() => console.log('signup')}>
                  Sign Up
                </button>
              </div>
              <div className={style.alter}>
                <h3>Already registered ?</h3>

                <button onClick ={() => this.setState({isRegister:true})}>
                  Login
                </button>
              </div>
            </div>
          </div>
          </div>
      </>
    )
  }
}