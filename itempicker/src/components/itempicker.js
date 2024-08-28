import "./itempicker.css";
import "./tooltiptext.css";
import Search from "./search.js";
//import data from './items';
 const data = require('./items.json');

function ItemPicker({maxCounter=7,pictureWidth=50,pictureHeight=50}) {
    let Counter = 0;
    let searchString = "stained";

    return (
        <div id="Table">
            <Search/>
            {data.filter(item => item.name.toLowerCase().includes(searchString)).map( (item => {
                Counter=Counter + 1;
                if (Counter===maxCounter)
                 {
                    Counter=0;
                    return (
                        <>
                        <div className="tooltip" key={item.id}>
                            <img className="Image" src={"./items/" + item.icon}  width={pictureWidth} height={pictureHeight} alt="item" />
                            <span className="tooltiptext">{item.name}<br></br>{item.tags}</span>
                        </div>
                        <div className="newline"></div>
                        </>
                        )
                    } else
                    {return (
                        <div className="tooltip" key={item.id}>
                            <img className="Image"src={"./items/" + item.icon}  width={pictureWidth} height={pictureHeight} alt="item" />
                            <span className="tooltiptext">{item.name}<br></br>{item.tags}</span>
                        </div>);
                    };
            }   ))}
        </div>
    )
}

export default ItemPicker;