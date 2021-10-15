import Image from "next/image";
import styles from "../../styles/countryDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from 'next/head'
const CountryDetails = ({ data }) => {
    const router = useRouter()
  return (
    <div className={styles.CountryDetails}>
      <Head>
        <title>{data.name}</title>
      </Head>
      <button className={styles.backButton} onClick={()=>router.back()}>
        <FontAwesomeIcon className={styles.ArrowIcon} icon={faArrowLeft} />
        Back
      </button>
      <div className={styles.detailsCountry}>
        <div className={styles.flag}>
          <Image height={400} width={560} src={data.flag} alt="" />
        </div>
        <div className={styles.DetailsSection}>
          <div className={styles.firstSection}>
            <h2>{data.name}</h2>
            <p>
              <b>Native Name:</b> {data.nativeName}
            </p>
            <p>
              <b>Population:</b> {data.population}
            </p>
            <p>
              <b>Region:</b> {data.region}
            </p>
            <p>
              <b>Sub Region:</b> {data.subregion}
            </p>
            <p>
              <b>Capital:</b> {data.capital}
            </p>
          </div>
          <div className={styles.secondSection}>
            <p>
              <b>Top Level domain: </b>
              {data.topLevelDomain}
            </p>
            <p>
              <b>Currencies: </b>
              {data.currencies.map((currency) => currency.name)}
            </p>
            <p>
              <b>Languages: </b>
              {data.languages.map((language) => language.name)}
            </p>
          </div>
          {data.borders ? (
            <div className={styles.borderCountries}>
              <b>Border Countries:</b>
              {data.borders.map((border) => (
                <Link href={`/country/${border}`} key={border} passHref={true}>
                  <button className={styles.borderCountry}>{border}</button>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { code } = context.query;

  const res = await fetch(`https://restcountries.com/v2/alpha/${code}`);
  const data = await res.json();
  return {
    props: { data },
  };
}
export default CountryDetails;
