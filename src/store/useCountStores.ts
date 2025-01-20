import { create } from "zustand"
import { combine, persist, subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

const initialState = {
  count: 1,
  double: 2,
  min: 0,
  max: 99,
}

export const useCountStores = create(
  persist(
    subscribeWithSelector(
      immer(
        combine(initialState, (set) => ({
          actions: {
            increase: () =>
              set((state) => {
                state.count += 1
              }),
            decrease: () =>
              set((state) => {
                state.count -= 1
              }),
          },
        }))
      )
    ),
    {
      name: "countStores",
      partialize: (state) => ({ count: state.count, double: state.double }),
    }
  )
)

useCountStores.subscribe(
  (state) => state.count, // Selector
  (count) => {
    // Listener
    //console.log(useCountStores.getState().double) // Getter
    useCountStores.setState(() => ({ double: count * 2 })) // Setter
  }
)

// export const useCountStores = create(
//   immer(
//     combine(initialState, (set) => {
//       function increase() {
//         set((state) => {
//           state.count += 1
//         })
//         increseDouble()
//       }
//       function decrease() {
//         set((state) => {
//           state.count -= 1
//         })
//         increseDouble()
//       }
//       function increseDouble() {
//         set((state) => {
//           state.double = state.count * 2
//         })
//       }
//       return {
//         actions: {
//           increase,
//           decrease,
//           increseDouble,
//         },
//       }
//     })
//   )
// )

// export const useCountStores = create(
//   combine(initialState, (set) => {
//     function increase() {
//       set((state) => ({ count: state.count + 1 }))
//       increseDouble()
//     }
//     function decrease() {
//       set((state) => ({ count: state.count - 1 }))
//       increseDouble()
//     }
//     function increseDouble() {
//       set((state) => ({ double: state.count * 2 }))
//     }
//     function deleteState(keys: Array<keyof typeof initialState>) {
//       set((state) => {
//         const newState = omit(state, keys)
//         return newState
//       })
//     }
//     return {
//       actions: {
//         increase,
//         decrease,
//         increseDouble,
//         deleteState,
//       },
//     }
//   })
// )
