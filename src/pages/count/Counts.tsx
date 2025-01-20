import { useCountStores } from "@/store/useCountStores"

function Counts() {
  const count = useCountStores<number>((state) => state.count)
  const test = [
    useCountStores((state) => state.double),
    useCountStores((state) => state.min),
    useCountStores((state) => state.max),
  ]
  const { increase, decrease } = useCountStores((state) => state.actions)
  return (
    <>
      <h1>{count}</h1>
      {test.map((item) => {
        return <p key={item}>{item}</p>
      })}
      <button type="button" onClick={increase}>
        증가
      </button>
      <button type="button" onClick={decrease}>
        감소
      </button>
    </>
  )
}

export default Counts
