import React from 'react';
import MyContext from '@/component/context/MyContext';
import Car from '@/component/context/Car';

const Cars = props => (
  <MyContext.Consumer>
    {context => (
        <div>
            <h4>Cars:</h4>
            {Object.keys(context.cars).map(carID => (
                <Car
                    key={carID}
                    name={context.cars[carID].name}
                    price={context.cars[carID].price}
                    incrementPrice={() => context.incrementPrice(carID)}
                    decrementPrice={() => context.decrementPrice(carID)}
                />
            ))}
        </div>
    )}
  </MyContext.Consumer>
);

export default Cars;
