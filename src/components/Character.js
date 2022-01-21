const Character = props => {
    const { info } = props
    return (
        <div>
            <h2>{info.name}</h2>
            <p>Gender: {info.gender}</p>
            <p>birth Year: {info.birth_year} </p>
            <h3>Hair: {info.hair_color} Eyes: {info.eye_color}</h3> 
        </div>
    )
    
}

export default Character;