import React, { useState, useEffect } from 'react';

function DeterminePropertyMix({ time }) {
    const [properties, setProperties] = useState([{ name: "Theatre", time: 5, earning: 1500 }, { name: "Pub", time: 4, earning: 1000 }, { name: "Commercial Park", time: 10, earning: 3000 }]);
    const [result, setResult] = useState([]);


    useEffect(() => {
        let sortedProperties = [...properties];
        sortedProperties.sort((a, b) => (b.earning / b.time) - (a.earning / a.time));

        let newResult = [];
        for (let prop of sortedProperties) {
            let propCount = Math.floor(time / prop.time);
            time -= propCount * prop.time;
            newResult.push({ name: prop.name[0], count: propCount });
        }
        setResult(newResult);
    }, [time, properties]);

    return (
        <div>

            <ul>
                {result.map((property, i) => (
                    <p key={i}>{property.name} - {property.count}</p>
                ))}
            </ul>
        </div>
    );
}

export default DeterminePropertyMix