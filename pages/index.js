import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head'
export default function Home({ data }) {
  const [Query, setQuery] = useState("");
  const [Region, setRegion] = useState("");
  const filteredCountries = data.filter(
    (country) =>
      country.name.toLowerCase().includes(Query.toLowerCase()) &&
      country.region.toLowerCase().includes(Region.toLocaleLowerCase())
  );
  let handleSearch = (e) => {
    setQuery(e.target.value);
  };
  let handleFilterChange = (e) => {
    setRegion(e.target.value);
  };
  return (
    
    <div className={styles.Home}>
      <Head>
      <title>Where In The World | Frontend mentor project by Vivek K J</title>
    </Head>
      <div className={styles.filterBar}>
        <div>
          <FontAwesomeIcon className={styles.faSearch} icon={faSearch} />
          <input
            type="search"
            placeholder="Search for a country..."
            className={styles.searchBox}
            onChange={handleSearch}
            id=""
          />
        </div>
        <select
          name="Filter"
          id={styles.filterRegion}
          onChange={handleFilterChange}
        >
          <option value="" defaultValue>
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
        {filteredCountries.map((country) => (
          <Link
            as={`/country/${country.alpha3Code}`}
            href="/country/[code]"
            key={country.alpha2Code}
            passHref={true}
          >
            <div className={styles.card}>
              <div className="Flag">

              <Image
                className={styles.flag}
                height={160}
                width={265}
                layout='responsive'
                src={country.flags.svg}
                alt=""
              />
              </div>

              <h2>{country.name}</h2>
              <p>
                <span>Population:</span>
                {country.population}{" "}
              </p>
              <p>
                <span>Region:</span>
                {country.region}{" "}
              </p>
              <p>
                <span>Capital:</span>
                {country.capital}{" "}
              </p>
            </div>
          </Link>
        ))}{" "}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
