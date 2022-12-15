export function Introduce(props) {
  let { age, height, weight } = props

  return (
    <div>
      {age && height && weight ? (
        <h4>hellow i am {age}</h4>
      ) : (
        <div> Please insert all props</div>
      )}
    </div>
  )
}
