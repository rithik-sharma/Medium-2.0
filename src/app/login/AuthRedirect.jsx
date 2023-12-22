// AuthRedirect.jsx
import { useEffect } from "react";
import { useRouter } from "next/router";

const AuthRedirect = ({ status }) => {
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return null; // Return null as this component doesn't render anything
};

export default AuthRedirect;
