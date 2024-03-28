import "./itempicker.css";
import "./tooltiptext.css";
//import data from './items';
 const data = require('./items.json');

function ItemPicker() {
    let Counter = 0;
    let MaxCounter = 7;

    return (
        <div id="Table">
            {data.map( (item) => {
                Counter=Counter + 1;
                if (Counter===MaxCounter)
                 {
                    Counter=0;
                    return (
                        <>
                        <div className="tooltip" key={item.id}>
                            <img className="Image" src={"./items/" + item.icon} alt="item" />
                            <span className="tooltiptext">{item.name}<br></br>{item.tags}</span>
                        </div>
                        <div className="newline"></div>
                        </>
                        )
                    } else
                    {return (
                        <div className="tooltip" key={item.id}>
                            <img className="Image" src={"./items/" + item.icon} alt="item" />
                            <span className="tooltiptext">{item.name}<br></br>{item.tags}</span>
                        </div>);
                    };
            }   )}
        </div>
    )
}

export default ItemPicker;