import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
export default function Home({ data }) {
  const [Data, setData] = useState(data);
  let handleChange = (e) => {
    let Region = e.target.value;
    setData(
      data.filter((country) =>
        country.region.toLowerCase().includes(Region.toLocaleLowerCase())
      )
    );
  };
  return (
    <div className={styles.Home}>
      <div className={styles.filterBar}>
        <div>
          <FontAwesomeIcon className={styles.faSearch} icon={faSearch} />
          <input
            type="search"
            placeholder="Search for a country..."
            className={styles.searchBox}
            id=""
          />
        </div>
        <select name="Filter" id={styles.filterRegion} onChange={handleChange}>
          <option value="" selected>
            All
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className={styles.section}>
        {Data.map((country) => (
          <div className={styles.card} key={country.alpha2Code}>
            <Image
              className={styles.flag}
              height={160}
              width={265}
              src={country.flags.svg}
              alt=""
            />
            <h2>{country.name}</h2>
            <p>
              <span>Population:</span> {country.population}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Capital:</span> {country.capital}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();
  return {
    props: { data },
  };
}
