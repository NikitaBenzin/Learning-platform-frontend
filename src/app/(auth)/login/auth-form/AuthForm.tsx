"use client";

import clsx from "clsx";
import { useState } from "react";
import styles from "./AuthForm.module.scss";
import { AuthToggle } from "./AuthToggle";
import { useAuthForm } from "./useAuthForm";
interface AuthFormProps {
  isLogin: boolean;
}

export function AuthForm({ isLogin }: AuthFormProps) {
  const { handleSubmit, isLoading, onSubmit, recaptchaRef, register } =
    useAuthForm(isLogin);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
      <div className="mb-4 relative">
        <label className={styles.inputLabel}>
          <p className={isFocused ? "text-white" : "text-transparent"}>
            Email email:{" "}
          </p>
          <input
            type="email"
            placeholder="Enter email: "
            onFocus={() => setIsFocused(!isFocused)}
            {...register("email", { required: true })}
            className={clsx(
              styles["input-field"],
              "w-full p-2 border rounded focus:outline-none focus:border-indigo-800"
            )}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className={styles.inputLabel}>
          Password
          <input
            type="password"
            placeholder="Enter password: "
            {...register("password", { required: true })}
            className={clsx(
              styles["input-field"],
              "w-full p-2 border rounded focus:outline-none focus:border-indigo-500"
            )}
          />
        </label>
      </div>

      {/* <ReCAPTCHA
        ref={recaptchaRef}
        size="normal"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        theme="light"
        className={styles.recaptcha}
      /> */}

      <div className="mb-3">
        <button
          type="submit"
          className={clsx(
            styles["btn-primary"],
            isLogin ? "bg-indigo-500" : "bg-green-500",
            isLoading ? "opacity-75 cursor-not-allowed" : ""
          )}
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
      </div>

      {/* <SocialMediaButtons /> */}

      <AuthToggle isLogin={isLogin} />
    </form>
  );
}
