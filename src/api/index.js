const url = 'https://www.metaweather.com/api/location/search/?query=';
const myHeaders = new Headers();
const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};

export const getWeather = async city => {
  try {
    const response = await fetch(`${url}${city}`, myInit);
    const location = await response.json();
    return location[0].woeid;
  } catch (err) {
    console.log(err);
  }
};

export const getCityWeather = async idCity => {
  const stringIdCity = JSON.stringify(idCity);
  const response = await fetch(
    `https://www.metaweather.com/api/location/${stringIdCity}/`,
    myInit,
  );

  const {consolidated_weather} = await response.json();
  
  return {
    date0: consolidated_weather[0].applicable_date,
    weather0: consolidated_weather[0].weather_state_abbr,
    max_temp0: (consolidated_weather[0].max_temp + 1).toFixed(0),
    temperature0: consolidated_weather[0].the_temp.toFixed(0),
    min_temp0: consolidated_weather[0].min_temp.toFixed(0),

    date1: (consolidated_weather[1].applicable_date).substr(5),
    weather1: consolidated_weather[1].weather_state_abbr,
    max_temp1: (consolidated_weather[1].max_temp + 1).toFixed(0),
    temperature1: consolidated_weather[1].the_temp.toFixed(0),
    min_temp1: consolidated_weather[1].min_temp.toFixed(0),

    date2: (consolidated_weather[2].applicable_date).substr(5),
    weather2: consolidated_weather[2].weather_state_abbr,
    max_temp2: (consolidated_weather[2].max_temp + 1).toFixed(0),
    temperature2: consolidated_weather[2].the_temp.toFixed(0),
    min_temp2: consolidated_weather[2].min_temp.toFixed(0),

    date3: (consolidated_weather[3].applicable_date).substr(5),
    weather3: consolidated_weather[3].weather_state_abbr,
    max_temp3: (consolidated_weather[3].max_temp + 1).toFixed(0),
    temperature3: consolidated_weather[3].the_temp.toFixed(0),
    min_temp3: consolidated_weather[3].min_temp.toFixed(0),
    
    date4: (consolidated_weather[4].applicable_date).substr(5),
    weather4: consolidated_weather[4].weather_state_abbr,
    max_temp4: (consolidated_weather[4].max_temp + 1).toFixed(0),
    temperature4: consolidated_weather[4].the_temp.toFixed(0),
    min_temp4: consolidated_weather[4].min_temp.toFixed(0),

    date5: (consolidated_weather[5].applicable_date).substr(5),
    weather5: consolidated_weather[5].weather_state_abbr,
    max_temp5: (consolidated_weather[5].max_temp + 1).toFixed(0),
    temperature5: consolidated_weather[5].the_temp.toFixed(0),
    min_temp5: consolidated_weather[5].min_temp.toFixed(0)

  };
};
