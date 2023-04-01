import Card from '../Components/Card'

const CardContainer = (data) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row',gap: '10px', justifyContent: "center", marginTop: "10%"}}>
    <Card data={{
        image: "https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=",
        heading: "HP Latitute Core-i9",
        text:"LED Screen with bscklit",
        price:"$250",
    }}/>
    <Card data={{
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6uG0D3Vf9SLKlgMjbtX2edsOrIxEDkTogTJyzDRw_YM9gbcFRJUOugIc1-zdUyR1RB4&usqp=CAU",
        heading: "Dell Longitude",
        text:"Emoled Screen Dual Core i9",
        price:"$2500",
    }} />
    <Card data={{
        image: "https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
        heading: "ACER Jaguar",
        text:"AMD processor with multi threading",
        price:"$650",
    }}/>
    <Card data={{
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdgDUm-bCL-OEhQPGEVHrlDMlDd5a5qr_atekygWP&s",
        heading: "Lenovo Rocket",
        text:"Metal Body with Cooling Fan",
        price:"$560",
    }} />
</div>
  )
}

export default CardContainer