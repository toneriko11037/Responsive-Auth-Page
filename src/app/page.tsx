"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect } from "react";

export default function Home() {
   useEffect(() => {
    const switchCtn = document.querySelector("#switch-cnt") as HTMLDivElement;
    const switchC1 = document.querySelector("#switch-c1") as HTMLDivElement;
    const switchC2 = document.querySelector("#switch-c2") as HTMLDivElement;
    const switchCircle = document.querySelectorAll(".switch_circle");
    const switchBtn = document.querySelectorAll(".switch-btn");
    const aContainer = document.querySelector("#a-container") as HTMLDivElement;
    const bContainer = document.querySelector("#b-container") as HTMLDivElement;
    const allButtons = document.querySelectorAll(".submit");
    const preventDefault = (e: Event) => e.preventDefault();
    const changeForm = () => {
      switchCtn?.classList.add("is-gx");
      setTimeout(() => {
        switchCtn?.classList.remove("is-gx");
      }, 1500);
      switchCtn?.classList.toggle("is-txr");
      switchCircle[0]?.classList.toggle("is-txr");
      switchCircle[1]?.classList.toggle("is-txr");
      switchC1?.classList.toggle("is-hidden");
      switchC2?.classList.toggle("is-hidden");
      aContainer?.classList.toggle("is-txl");
      bContainer?.classList.toggle("is-txl");
      bContainer?.classList.toggle("is-z");
    };

    allButtons.forEach((button) =>
      button.addEventListener("click", preventDefault)
    );
    switchBtn.forEach((btn) => btn.addEventListener("click", changeForm));

    return () => {
      allButtons.forEach((button) =>
        button.removeEventListener("click", preventDefault)
      );
      switchBtn.forEach((btn) => btn.removeEventListener("click", changeForm));
    };
  }, []);

  return (
  <div className={styles.shell}>
    <div className={`${styles.container} ${styles["a-container"]}`} id="a-container">
      <form className={styles.form} id="a-form">
        <h2 className={`${styles.form_title} ${styles.title}`}>创建账号</h2>
        <div className={styles.form_icons}>
          <i className={`${styles.iconfont} ${styles["icon-QQ"]}`}></i>
          <i className={`${styles.iconfont} ${styles["icon-weixin"]}`}></i>
          <i className={`${styles.iconfont} ${styles["icon-bilibili-line"]}`}></i>
        </div>
        <span className={styles.form_span}>选择注册方式或电子邮箱注册</span>
        <input type="text" className={styles.form_input} placeholder="Name" />
        <input type="text" className={styles.form_input} placeholder="Email" />
        <input type="text" className={styles.form_input} placeholder="Password" />
        <button className={`${styles.form_button} ${styles.button} ${styles.submit}`}>
          SIGN UP
        </button>
      </form>
    </div>
    <div className={`${styles.container} ${styles["b-container"]}`} id="b-container">
      <form className={styles.form} id="b-form">
        <h2 className={`${styles.form_title} ${styles.title}`}>登入账号</h2>
        <div className={styles.form_icons}>
          <i className={`${styles.iconfont} ${styles["icon-QQ"]}`}></i>
          <i className={`${styles.iconfont} ${styles["icon-weixin"]}`}></i>
          <i className={`${styles.iconfont} ${styles["icon-bilibili-line"]}`}></i>
        </div>
        <span className={styles.form_span}>选择登录方式或电子邮箱登录</span>
        <input type="text" className={styles.form_input} placeholder="Email" />
        <input type="text" className={styles.form_input} placeholder="Password" />
        <a className={styles.form_link}>忘记密码？</a>
        <button className={`${styles.form_button} ${styles.button} ${styles.submit}`}>
          SIGN IN
        </button>
      </form>
    </div>
    <div className={styles.switch} id="switch-cnt">
      <div className={styles.switch_circle}></div>
      <div className={`${styles.switch_circle} ${styles["switch_circle-t"]}`}></div>
      <div className={styles.switch_container} id="switch-c1">
        <h2 className={`${styles.switch_title} ${styles.title}`} style={{ letterSpacing: 0 }}>
          Welcome Back！
        </h2>
        <p className={`${styles.switch_description} ${styles.description}`}>
          已经有账号了嘛，去登入账号来进入奇妙世界吧！！！
        </p>
        <button className={`${styles.switch_button} ${styles.button} ${styles["switch-btn"]}`}>
          SIGN IN
        </button>
      </div>
      <div
        className={`${styles.switch_container} ${styles["is-hidden"]}`}
        id="switch-c2"
      >
        <h2 className={`${styles.switch_title} ${styles.title}`} style={{ letterSpacing: 0 }}>
          Hello Friend！
        </h2>
        <p className={`${styles.switch_description} ${styles.description}`}>
          去注册一个账号，成为尊贵的粉丝会员，让我们踏入奇妙的旅途！
        </p>
        <button className={`${styles.switch_button} ${styles.button} ${styles["switch-btn"]}`}>
          SIGN UP
        </button>
      </div>
    </div>
  </div>
);

}
