import { useUserStore } from "@/store/useUserStore"

function User() {
  const user = useUserStore((state) => state.user)
  const { signIn, setDisplayName, setIsActive } = useUserStore(
    (state) => state.actions
  )
  console.log(user)
  return (
    <>
      {user !== null &&
        user.isActive &&
        Object.keys(user).map((item) => {
          return (
            <p key={item}>
              {item}: {user[item]}
            </p>
          )
        })}
      <button type="button" onClick={signIn}>
        유저 넣기
      </button>
      <button
        type="button"
        onClick={() => {
          setDisplayName("test")
        }}
      >
        유저 변경
      </button>
      <button
        type="button"
        onClick={() => {
          setIsActive(!user.isActive)
        }}
      >
        숨기기
      </button>
    </>
  )
}

export default User
