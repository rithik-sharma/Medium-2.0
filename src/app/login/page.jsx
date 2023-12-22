"use client";

import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import AuthRedirect from "/src/app/login/AuthRedirect.jsx";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <h1 className={styles.title}>You have been successfully logged in</h1>
        <div className={styles.socialButton}>
          <Link href="/" className={styles.link}>
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {/* <AuthRedirect status={status} /> */}
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          Sign in with Github
        </div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
