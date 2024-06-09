interface Props {
    img: string,
    height: number
}

const Avatar = ({img, height}: Props) => {
    return (
                img ? <img src={img} className="rounded-circle" alt="..." style={{height: height}}/> : <i className="bi bi-person"/>
    );
}

export default Avatar;
