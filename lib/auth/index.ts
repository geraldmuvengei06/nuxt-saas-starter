// useUser.ts
import { ref, provide, inject, onMounted } from 'vue';
import { User } from '@/lib/db/schema';

type UserContextType = {
  user: Ref<User | null>;
  setUser: (user: User | null) => void;
};

const UserSymbol = Symbol('User');

export function useUser(){
  return {}
}

export function UserProvider({ children, userPromise }: { children: any; userPromise: Promise<User | null> }) {
  const user = ref<User | null>(null);

  const setUser = (newUser: User | null) => {
    user.value = newUser;
  };

  onMounted(async () => {
    const initialUser = await userPromise;
    setUser(initialUser);
  });

  provide(UserSymbol, { user, setUser });

  return () => children;
}