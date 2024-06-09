interface Props {
    img: string,
    description: string
}

const Card = ({img, description}: Props)=> {
    return (
        <div className="card" style={{width: 300}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Card;
