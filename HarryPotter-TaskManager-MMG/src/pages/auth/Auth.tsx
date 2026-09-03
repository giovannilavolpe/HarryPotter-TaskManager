import { create } from 'zustand'
import {persist} from  'zustand/middleware'

interface LoginState {

    username: string


    setUsername: (name: string) => void

}

export const useFormularioStore = create<LoginState>()(
    persist(

        (set) => ({
        username: '',
        setUsername: (username) => set({ username })

}), { name: 'claveStorage'}

))