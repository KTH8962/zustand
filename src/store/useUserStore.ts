import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface State {
  user: {
    email: string
    displayName: string
    isActive: boolean
  } | null
}
interface Actions {
  actions: {
    signIn: () => void
    setDisplayName: (name: string) => void
    setIsActive: (bool: boolean) => void
  }
}

const initialState: State = {
  user: null,
}

export const useUserStore = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    actions: {
      signIn: () => {
        set({
          user: {
            email: "thesecon@gmail.com",
            displayName: "HEROPY",
            isActive: true,
          },
        })
      },
      setDisplayName: (name) => {
        set((state) => {
          if (state.user) {
            state.user.displayName = name
          }
        })
      },
      setIsActive: (bool) => {
        set((state) => {
          state.user.isActive = bool
        })
      },
    },
  }))
)

// export const useUserStore = create<State & Actions>((set) => ({
//   ...initialState,
//   actions: {
//     signIn: () => {
//       set({
//         user: {
//           email: "thesecon@gmail.com",
//           displayName: "HEROPY",
//           isActive: true,
//         },
//       })
//     },
//     setDisplayName: (name) => {
//       set((state) => {
//         if (state.user) {
//           return {
//             user: {
//               ...state.user,
//               displayName: name,
//             },
//           }
//         }
//         return {} // 병합할 상태, 상태 변경 없음!
//       })
//     },
//   },
// }))
