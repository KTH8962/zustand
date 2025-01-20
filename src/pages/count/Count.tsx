import { useCountStore } from "@/store/useCountStore"

function Count() {
  const count = useCountStore((state) => state.count)
  // const increase = useCountStore((state) => state.actions.increase)
  // const decrease = useCountStore((state) => state.actions.decrease)
  const { increase, decrease, resetState, deleteState } = useCountStore(
    (state) => state.actions
  )
  const state = useCountStore((state) => state)
  return (
    <>
      {state.min}
      <h2>{count}</h2>
      <button type="button" onClick={increase}>
        증가
      </button>
      <button type="button" onClick={decrease}>
        감소
      </button>
      <button onClick={() => resetState()}>Reset All!</button>
      <button onClick={() => resetState(["double", "min"])}>
        Reset Double, Min!
      </button>
      <button onClick={() => deleteState(["min", "max"])}>
        Delete Min, Max!
      </button>
    </>
  )
}

export default Count
