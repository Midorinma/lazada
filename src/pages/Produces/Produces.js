import { useParams } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';
import Box from './Box';

//CreateContext parent
export const DataContext = createContext();

function Produces() {
    const [product, setProduct] = useState([]);

    const name = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/shirt?q=${name.slug}`)
            .then((res) => res.json())
            .then((res) => setProduct(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name.slug]);
    return (
        <div>
            {product.map((item) => (
                <DataContext.Provider value={item} key={item.id}>
                    <Box />
                </DataContext.Provider>
            ))}
        </div>
    );
}

export default Produces;
