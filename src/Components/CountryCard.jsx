import axios from "axios";
import React, { useEffect, useState } from "react";

const CountryCard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const responce = await axios.get("https://restcountries.com/v3.1/all");

      if (responce.data) {
        setData(responce.data);
      }
    };
    getProducts();
  }, []);

  console.log(data);
  return (
    <>
      <table class="table table-striped">
        <tbody>
          <tr>
            <th className="text-secondary">Si No</th>
            <th className="text-secondary">Country Name</th>
            <th className="text-secondary">Official Name</th>
            <th className="text-secondary">Flag</th>
            <th className="text-secondary">Region</th>
            <th className="text-secondary">Sub Region</th>
            <th className="text-secondary">Population</th>
            <th className="text-secondary">Area</th>
          </tr>

          {
           data && data?.map((d,i)=>(
                <tr className="tble-txt"  key={i}>
                    <td>{i+1}</td>
                    <td>{d?.name?.common}</td>
                    <td>{d?.name?.official}</td>
                    <td><img
                src={d?.flags?.png ? d?.flags?.png : d?.flags?.svg}
                alt=""
                srcset=""
                className="img-size"
              /></td>
              <td>{d?.region}</td>
              <td>{d?.subregion}</td>
              <td>{d?.population}</td>
              <td>{d?.area}</td>
                </tr>
            ))
          }

        
        </tbody>
      </table>
    </>
  );
};

export default CountryCard;