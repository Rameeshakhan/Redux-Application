import "../css/Card.css"


const Home = (props) => {
    // console.warn(props)
    return (
        <div>
            <div className="card">
                <div className="card-img">
                    <img className="image" src="data:image/png;base64,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" alt="laptop image" />
                </div>
                <div className="card-info">
                    <p className="text-title">DELL Inspiron</p>
                    <p className="text-body">core i9 emoled Screen</p>
                </div>
                <div className="card-footer">
                    <span className="text-title">$1000</span>
                    <button onClick={() => props.addToCartHandler({price:1000 , name:"DELL Inspiron"})}>Add to Cart</button>
                    <div className="card-button">
                        <svg className="svg-icon" viewBox="0 0 20 20">
                            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                        </svg>
                    </div>
                </div></div>
        </div>
    )
}

export default Home