import {useParams} from "react-router-dom";

function ViewIngredient(props) {
    const inventory = props.inventory;
    const urlName = useParams().name;
    const extraInfo = inventory[urlName];
    return (
        <div>
        <h2>{useParams().name}</h2>
        {Object.keys(extraInfo).map(name => (
            <div key={name}>{name+": "+extraInfo[name]}</div>
        ))}
        </div>
    );
}

export default ViewIngredient;