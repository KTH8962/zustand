import { create } from "zustand"
import { omit } from "lodash-es"
import { combine } from "zustand/middleware"

// interface State {
//   count: number
//   double: number
//   min: number
//   max: number
// }
// interface Actions {
//   actions: {
//     increase: () => void
//     decrease: () => void
//     resetState: (keys?: Array<keyof State>) => void
//     deleteState: (keys?: Array<keyof State>) => void
//   }
// }

// const initialState: State = {
//   count: 1,
//   double: 2,
//   min: 0,
//   max: 99,
// }

const initialState = {
  count: 1,
  double: 2,
  min: 0,
  max: 99,
}

export const useCountStore = create(
  combine(initialState, (set) => ({
    actions: {
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      resetState: (keys: Array<keyof typeof initialState>) => {
        if (keys!) {
          set(initialState)
          return
        }
        keys.forEach((key) => {
          set({ [key]: initialState[key] })
        })
      },
      deleteState: (keys: Array<keyof typeof initialState>) => {
        set((state) => {
          const newState = omit(state, keys)
          console.log(newState)
          return newState
        })
      },
    },
  }))
)

// export const useCountStore = create<State & Actions>((set) => ({
//   ...initialState,
//   actions: {
//     increase: () => set((state) => ({ count: state.count + 1 })),
//     decrease: () => set((state) => ({ count: state.count - 1 })),
//     resetState: (keys) => {
//       // 전체 상태 초기화
//       console.log(initialState, keys)
//       if (!keys) {
//         set(initialState)
//         return
//       }
//       // 일부 상태 초기화
//       keys.forEach((key) => {
//         set({ [key]: initialState[key] })
//       })
//     },
//     deleteState: (keys) => {
//       set((state) => {
//         // 상태에서 keys에 해당하는 값을 제거하고 새로운 객체를 반환
//         const newState = omit(state, keys)
//         console.log(newState)
//         return newState
//       })
//     },
//   },
// }))

// set만 사용시
// export const useCountStore = create<{
//   count: number
//   actions: {
//     increase: () => void
//     decrease: () => void
//   }
// }>((set) => ({
//   count: 1,
//   actions: {
//     increase: () => {
//       set((state) => ({ count: state.count + 1 }))
//     },
//     decrease: () => {
//       set((state) => ({ count: state.count - 1 }))
//     },
//   },
// }))

// get 사용시
// export const useCountStore = create<{
//   count: number
//   increase: () => void
//   decrease: () => void
// }>((set, get) => ({
//   count: 1,
//   increase: () => {
//     const { count } = get()
//     set({ count: count + 1 })
//   },
//   decrease: () => {
//     const { count } = get()
//     set({ count: count - 1 })
//   },
// }))
