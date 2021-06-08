import React from "react";

const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, population, timezones, languages } = obj;
    // const languages1 = obj.languages;
    console.log(languages);
    return (
      <div key={i}>
        <h2>{name}</h2>
        <h5>Capital: {capital}</h5>
        <h5>languages: {languages.map((language) => language.name)}</h5>
        <h5>timezones: {timezones}</h5>
        <h5>Population: {population}</h5>
        <img src={flag} alt={name} className="flag" />
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
