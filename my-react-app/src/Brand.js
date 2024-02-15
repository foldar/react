import Car from './Car.js';

function Brand() {
  const cars = ["Volvo", "Peugeot", "Mercedes"];

  return (
  <>
    <h1>Lijst van beschikbare auto's</h1>
    <ul>
    {cars.map((car, index) => <Car key={index} merk={car} />)}
    </ul>
  </>
  );
}

export default Brand;