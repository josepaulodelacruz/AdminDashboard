import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthStore {
  token: string
  onSave: (token: string) => void,
  onRemoveUser: () => void,
}

const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      token: '',
      onSave: (token: string) => set({token: token}),
      onRemoveUser: () => set({token: ''})
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default useAuth
