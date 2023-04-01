import Card from '../Components/Card'

const CardContainer = (data) => {
  return (
    <div>
        <Card data={data.prop}/>
    </div>
  )
}

export default CardContainer