import { FC, ComponentType } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from '@/utils/supabase/getUser';

export default function isAuth<P extends JSX.IntrinsicAttributes>(Component: ComponentType<P>): FC<P> {
  return function IsAuthComponent(props: P) {
    const router = useRouter();

    useEffect(() => {
      async function checkUser() {
        try {
          const user = await getUser();
          if (!user) {
            router.push("/auth/login");
          }
        } catch (error) {
          router.push("/auth/login");
        }
      }
      checkUser();
    }, [router]);

    return <Component {...props} />;
  };
}
