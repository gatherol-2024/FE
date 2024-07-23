import { useEffect } from "react";
import { useUserQuery } from "../services/user/queries";
import { useUserStore } from "../store/user";

const useUser = () => {
  const [user, setUser] = useUserStore();
  const { data } = useUserQuery();

  useEffect(() => {
    if (data) setUser(data);
  }, [setUser, data]);

  return { user, isLogin: !!data };
};

export default useUser;
