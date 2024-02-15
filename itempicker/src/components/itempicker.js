import "./itempicker.css";
import Logo from './Logo.png';
//import data from './items';

const data = require('./items.json');

function ItemPicker()
{
    return (
        <>
            {data.map( (item) => {
                return (
                    <div key={item.id}>
                        <div><img class = "Image" style={{width: "50px", height: "50px"}} src={"./items/" + item.icon} alt="item"/></div>
                        <div>{item.name}</div>
                        <hr></hr>
                    </div>
                );
            })}
        </>
    );
}

 export default ItemPicker;