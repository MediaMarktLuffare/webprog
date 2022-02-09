import {useParams} from "react-router-dom";

function ViewIngredient(props) {
    const inventory = props.inventory;
    const urlName = useParams().name;
    return (
        <div>
        <h2>{useParams().name}</h2>
        {Object.keys(inventory[urlName]).map(name => (
            <div key={name}>{name+": "+inventory[urlName][name]}</div>
        ))}
        </div>
    );
}
export default ViewIngredient;