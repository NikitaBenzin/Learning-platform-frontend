import type { Metadata } from "next";
import { AuthForm } from "./auth-form/AuthForm";
import style from "./Login.module.scss";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <h1 className={style.heading}>Login</h1>
        <AuthForm isLogin />
      </main>
    </div>
  );
}
