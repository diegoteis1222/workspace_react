import { useState } from "react";

function Ejer6() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <h2>Ejer6 </h2>
            {items.map((item, index) =>
                <div className={index === selectedIndex ? 'text-amber-100' : ''} onClick={() => handleSelect(index)}>{item}</div>
            )}
        </div>

    );
}
export default Ejer6;