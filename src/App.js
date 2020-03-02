import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Picker,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import {getWeather, getCityWeather} from './api';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavButton from './components/favButton';
import AddFav from './components/addFav';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import favorite from './store/reduccers';

const App = () => {
  const [handleChangeCalled, setHandleChangeCalled] = useState(false);
  const [city, setCity] = useState('');

  const [addIdCity, setAddIdCity] = useState('');
  const [recalled, setRecalled] = useState(true);
  const [date0, setDate0] = useState('');
  const [weather0, setWeather0] = useState('');
  const [temperature0, setTemperature0] = useState('');
  const [min0, setMin0] = useState('');
  const [max0, setMax0] = useState('');

  const [date1, setDate1] = useState('');
  const [weather1, setWeather1] = useState('');
  const [temperature1, setTemperature1] = useState('');
  const [min1, setMin1] = useState('');
  const [max1, setMax1] = useState('');

  const [date2, setDate2] = useState('');
  const [weather2, setWeather2] = useState('');
  const [temperature2, setTemperature2] = useState('');
  const [min2, setMin2] = useState('');
  const [max2, setMax2] = useState('');

  const [date3, setDate3] = useState('');
  const [weather3, setWeather3] = useState('');
  const [temperature3, setTemperature3] = useState('');
  const [min3, setMin3] = useState('');
  const [max3, setMax3] = useState('');

  const [date4, setDate4] = useState('');
  const [weather4, setWeather4] = useState('');
  const [temperature4, setTemperature4] = useState('');
  const [min4, setMin4] = useState('');
  const [max4, setMax4] = useState('');

  const [date5, setDate5] = useState('');
  const [weather5, setWeather5] = useState('');
  const [temperature5, setTemperature5] = useState('');
  const [min5, setMin5] = useState('');
  const [max5, setMax5] = useState('');

  const [itemFavoriteSaved, setItemFavoriteSaved] = useState(false);

  const handleChange = async itemValue => {
    if (itemValue !== '') {
      try {
        const idCity = await getWeather(itemValue);
        setAddIdCity(idCity);
        
        setItemFavoriteSaved(true);


        const {
          date0,
          weather0,
          max_temp0,
          temperature0,
          min_temp0,

          date1,
          weather1,
          max_temp1,
          temperature1,
          min_temp1,

          date2,
          weather2,
          max_temp2,
          temperature2,
          min_temp2,

          date3,
          weather3,
          max_temp3,
          temperature3,
          min_temp3,

          date4,
          weather4,
          max_temp4,
          temperature4,
          min_temp4,

          date5,
          weather5,
          max_temp5,
          temperature5,
          min_temp5,
        } = await getCityWeather(idCity);

        setDate0(date0);
        setWeather0(weather0);
        setTemperature0(temperature0);
        setMin0(min_temp0);
        setMax0(max_temp0);

        setDate1(date1), setWeather1(weather1);
        setTemperature1(temperature1);
        setMin1(min_temp1);
        setMax1(max_temp1);

        setDate2(date2), setWeather2(weather2);
        setTemperature2(temperature2);
        setMin2(min_temp2);
        setMax2(max_temp2);

        setDate3(date3), setWeather3(weather3);
        setTemperature3(temperature3);
        setMin3(min_temp3);
        setMax3(max_temp3);

        setDate4(date4), setWeather4(weather4);
        setTemperature4(temperature4);
        setMin4(min_temp4);
        setMax4(max_temp4);

        setDate5(date5), setWeather5(weather5);
        setTemperature5(temperature5);
        setMin5(min_temp5);
        setMax5(max_temp5);

        setHandleChangeCalled(true);

        setRecalled(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ImageBackground
          source={require('./img/background.jpg')}
          style={styles.bgImage}>
          <StatusBar translucent backgroundColor="transparent" />
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bodypicker}>
                <Picker
                  style={styles.picker}
                  selectedValue={city}
                  onValueChange={itemValue => {
                    setCity(itemValue),
                      handleChange(itemValue),
                      setHandleChangeCalled(true);
                  }}>
                  <Picker.Item label="Selecione a cidade" value="" />
                  <Picker.Item label="Aberdeen" value="Aberdeen" />
                  <Picker.Item label="Abidjan" value="Abidjan" />
                  <Picker.Item label="Addis Ababa" value="Addis Ababa" />
                  <Picker.Item label="Adelaide" value="Adelaide" />
                  <Picker.Item label="Ahmedabad" value="Ahmedabad" />
                  <Picker.Item label="Ajaccio" value="Ajaccio" />
                  <Picker.Item label="Albuquerque" value="Albuquerque" />
                  <Picker.Item label="Alexandria" value="Alexandria" />
                  <Picker.Item label="Amsterdam" value="Amsterdam" />
                  <Picker.Item label="Anchorage" value="Anchorage" />
                  <Picker.Item label="Ankara" value="Ankara" />
                  <Picker.Item label="Athens" value="Athens" />
                  <Picker.Item label="Atlanta" value="Atlanta" />
                  <Picker.Item label="Auckland" value="Auckland" />
                  <Picker.Item label="Austin" value="Austin" />
                  <Picker.Item label="Baghdad" value="Baghdad" />
                  <Picker.Item label="Bakersfield" value="Bakersfield" />
                  <Picker.Item label="Baltimore" value="Baltimore" />
                  <Picker.Item label="Bangalore" value="Bangalore" />
                  <Picker.Item label="Bangkok" value="Bangkok" />
                  <Picker.Item label="Barcelona" value="Barcelona" />
                  <Picker.Item label="Beijing" value="Beijing" />
                  <Picker.Item label="Belfast" value="Belfast" />
                  <Picker.Item label="Berlin" value="Berlin" />
                  <Picker.Item label="Billings" value="Billings" />
                  <Picker.Item label="Birmingham" value="Birmingham" />
                  <Picker.Item label="Birmingham" value="Birmingham" />
                  <Picker.Item label="Blackpool" value="Blackpool" />
                  <Picker.Item label="Bogotá" value="Bogotá" />
                  <Picker.Item label="Boise" value="Boise" />
                  <Picker.Item label="Bordeaux" value="Bordeaux" />
                  <Picker.Item label="Boston" value="Boston" />
                  <Picker.Item label="Boulder" value="Boulder" />
                  <Picker.Item label="Bournemouth" value="Bournemouth" />
                  <Picker.Item label="Bradford" value="Bradford" />
                  <Picker.Item label="Brasília" value="Brasília" />
                  <Picker.Item label="Bremen" value="Bremen" />
                  <Picker.Item label="Bridgeport" value="Bridgeport" />
                  <Picker.Item label="Brighton" value="Brighton" />
                  <Picker.Item label="Brisbane" value="Brisbane" />
                  <Picker.Item label="Bristol" value="Bristol" />
                  <Picker.Item label="Brussels" value="Brussels" />
                  <Picker.Item label="Bucharest" value="Bucharest" />
                  <Picker.Item label="Budapest" value="Budapest" />
                  <Picker.Item label="Buenos Aires" value="Buenos Aires" />
                  <Picker.Item label="Burlington" value="Burlington" />
                  <Picker.Item label="Busan" value="Busan" />
                  <Picker.Item label="Cairo" value="Cairo" />
                  <Picker.Item label="Calgary" value="Calgary" />
                  <Picker.Item label="Calvi" value="Calvi" />
                  <Picker.Item label="Cambridge" value="Cambridge" />
                  <Picker.Item label="Cape Town" value="Cape Town" />
                  <Picker.Item label="Caracas" value="Caracas" />
                  <Picker.Item label="Cardiff" value="Cardiff" />
                  <Picker.Item label="Casablanca" value="Casablanca" />
                  <Picker.Item label="Charleston" value="Charleston" />
                  <Picker.Item label="Charlotte" value="Charlotte" />
                  <Picker.Item label="Chengdu" value="Chengdu" />
                  <Picker.Item label="Chennai" value="Chennai" />
                  <Picker.Item label="Cheyenne" value="Cheyenne" />
                  <Picker.Item label="Chicago" value="Chicago" />
                  <Picker.Item label="Christchurch" value="Christchurch" />
                  <Picker.Item label="Cologne" value="Cologne" />
                  <Picker.Item
                    label="Colorado Springs"
                    value="Colorado Springs"
                  />
                  <Picker.Item label="Columbia" value="Columbia" />
                  <Picker.Item label="Columbus" value="Columbus" />
                  <Picker.Item label="Copenhagen" value="Copenhagen" />
                  <Picker.Item label="Coventry" value="Coventry" />
                  <Picker.Item label="Dallas" value="Dallas" />
                  <Picker.Item label="Damascus" value="Damascus" />
                  <Picker.Item label="Denpasar" value="Denpasar" />
                  <Picker.Item label="Denver" value="Denver" />
                  <Picker.Item label="Derby" value="Derby" />
                  <Picker.Item label="Des Moines" value="Des Moines" />
                  <Picker.Item label="Detroit" value="Detroit" />
                  <Picker.Item label="Dhaka" value="Dhaka" />
                  <Picker.Item label="Dongguan" value="Dongguan" />
                  <Picker.Item label="Dortmund" value="Dortmund" />
                  <Picker.Item label="Dresden" value="Dresden" />
                  <Picker.Item label="Dubai" value="Dubai" />
                  <Picker.Item label="Dublin" value="Dublin" />
                  <Picker.Item label="Dundee" value="Dundee" />
                  <Picker.Item label="Durban" value="Durban" />
                  <Picker.Item label="Düsseldorf" value="Düsseldorf" />
                  <Picker.Item label="Edinburgh" value="Edinburgh" />
                  <Picker.Item label="Edmonton" value="Edmonton" />
                  <Picker.Item label="El Paso" value="El Paso" />
                  <Picker.Item label="Essen" value="Essen" />
                  <Picker.Item label="Exeter" value="Exeter" />
                  <Picker.Item label="Falmouth" value="Falmouth" />
                  <Picker.Item label="Fargo" value="Fargo" />
                  <Picker.Item label="Fort Worth" value="Fort Worth" />
                  <Picker.Item label="Frankfurt" value="Frankfurt" />
                  <Picker.Item label="Fresno" value="Fresno" />
                  <Picker.Item label="Fukuoka" value="Fukuoka" />
                  <Picker.Item label="Geneva" value="Geneva" />
                  <Picker.Item label="Glasgow" value="Glasgow" />
                  <Picker.Item label="Gothenburg" value="Gothenburg" />
                  <Picker.Item label="Guangzhou" value="Guangzhou" />
                  <Picker.Item label="Hà Nội" value="Hà Nội" />
                  <Picker.Item label="Hamburg" value="Hamburg" />
                  <Picker.Item label="Hangzhou" value="Hangzhou" />
                  <Picker.Item label="Hanover" value="Hanover" />
                  <Picker.Item label="Helsinki" value="Helsinki" />
                  <Picker.Item label="Hiroshima" value="Hiroshima" />
                  <Picker.Item
                    label="Ho Chi Minh City"
                    value="Ho Chi Minh City"
                  />
                  <Picker.Item label="Hong Kong" value="Hong Kong" />
                  <Picker.Item label="Honolulu" value="Honolulu" />
                  <Picker.Item label="Houston" value="Houston" />
                  <Picker.Item label="Huddersfield" value="Huddersfield" />
                  <Picker.Item label="Hyderabad" value="Hyderabad" />
                  <Picker.Item label="Ibadan" value="Ibadan" />
                  <Picker.Item label="Indianapolis" value="Indianapolis" />
                  <Picker.Item label="Ipswich" value="Ipswich" />
                  <Picker.Item label="Istanbul" value="Istanbul" />
                  <Picker.Item label="İzmir" value="İzmir" />
                  <Picker.Item label="Jackson" value="Jackson" />
                  <Picker.Item label="Jacksonville" value="Jacksonville" />
                  <Picker.Item label="Jakarta" value="Jakarta" />
                  <Picker.Item label="Johannesburg" value="Johannesburg" />
                  <Picker.Item label="Kano" value="Kano" />
                  <Picker.Item label="Kansas City" value="Kansas City" />
                  <Picker.Item label="Karachi" value="Karachi" />
                  <Picker.Item label="Kawasaki" value="Kawasaki" />
                  <Picker.Item label="Kharkiv" value="Kharkiv" />
                  <Picker.Item label="Kiev" value="Kiev" />
                  <Picker.Item
                    label="Kingston upon Hull"
                    value="Kingston upon Hull"
                  />
                  <Picker.Item label="Kinshasa" value="Kinshasa" />
                  <Picker.Item label="Kirkwall" value="Kirkwall" />
                  <Picker.Item label="Kitakyushu" value="Kitakyushu" />
                  <Picker.Item label="Kobe" value="Kobe" />
                  <Picker.Item label="Kolkata" value="Kolkata" />
                  <Picker.Item label="Kuala Lumpur" value="Kuala Lumpur" />
                  <Picker.Item label="Kyoto" value="Kyoto" />
                  <Picker.Item label="Lagos" value="Lagos" />
                  <Picker.Item label="Lahore" value="Lahore" />
                  <Picker.Item label="Lake Tahoe" value="Lake Tahoe" />
                  <Picker.Item label="Las Vegas" value="Las Vegas" />
                  <Picker.Item label="Leeds" value="Leeds" />
                  <Picker.Item label="Leicester" value="Leicester" />
                  <Picker.Item label="Leipzig" value="Leipzig" />
                  <Picker.Item label="Lille" value="Lille" />
                  <Picker.Item label="Lima" value="Lima" />
                  <Picker.Item label="Lisbon" value="Lisbon" />
                  <Picker.Item label="Little Rock" value="Little Rock" />
                  <Picker.Item label="Liverpool" value="Liverpool" />
                  <Picker.Item label="Long Beach" value="Long Beach" />
                  <Picker.Item label="Los Angeles" value="Los Angeles" />
                  <Picker.Item label="Louisville" value="Louisville" />
                  <Picker.Item label="Luton" value="Luton" />
                  <Picker.Item label="Lyon" value="Lyon" />
                  <Picker.Item label="Madrid" value="Madrid" />
                  <Picker.Item label="Manchester" value="Manchester" />
                  <Picker.Item label="Manchester" value="Manchester" />
                  <Picker.Item label="Manila" value="Manila" />
                  <Picker.Item label="Manukau" value="Manukau" />
                  <Picker.Item label="Maracaibo" value="Maracaibo" />
                  <Picker.Item label="Marseille" value="Marseille" />
                  <Picker.Item label="Melbourne" value="Melbourne" />
                  <Picker.Item label="Memphis" value="Memphis" />
                  <Picker.Item label="Mesa" value="Mesa" />
                  <Picker.Item label="Mexico City" value="Mexico City" />
                  <Picker.Item label="Miami" value="Miami" />
                  <Picker.Item label="Middlesbrough" value="Middlesbrough" />
                  <Picker.Item label="Milan" value="Milan" />
                  <Picker.Item label="Milwaukee" value="Milwaukee" />
                  <Picker.Item label="Minneapolis" value="Minneapolis" />
                  <Picker.Item label="Minsk" value="Minsk" />
                  <Picker.Item label="Mombasa" value="Mombasa" />
                  <Picker.Item label="Montréal" value="Montréal" />
                  <Picker.Item label="Moscow" value="Moscow" />
                  <Picker.Item label="Mountain View" value="Mountain View" />
                  <Picker.Item label="Mumbai" value="Mumbai" />
                  <Picker.Item label="Munich" value="Munich" />
                  <Picker.Item label="Nagoya" value="Nagoya" />
                  <Picker.Item label="Nairobi" value="Nairobi" />
                  <Picker.Item label="Naples" value="Naples" />
                  <Picker.Item label="Nashville" value="Nashville" />
                  <Picker.Item label="New Delhi" value="New Delhi" />
                  <Picker.Item label="New Orleans" value="New Orleans" />
                  <Picker.Item label="New York" value="New York" />
                  <Picker.Item label="Newark" value="Newark" />
                  <Picker.Item label="Newcastle" value="Newcastle" />
                  <Picker.Item label="Nice" value="Nice" />
                  <Picker.Item label="Northampton" value="Northampton" />
                  <Picker.Item label="Norwich" value="Norwich" />
                  <Picker.Item label="Nottingham" value="Nottingham" />
                  <Picker.Item label="Nuremberg" value="Nuremberg" />
                  <Picker.Item label="Oakland" value="Oakland" />
                  <Picker.Item label="Oklahoma City" value="Oklahoma City" />
                  <Picker.Item label="Omaha" value="Omaha" />
                  <Picker.Item label="Osaka" value="Osaka" />
                  <Picker.Item label="Oslo" value="Oslo" />
                  <Picker.Item label="Oxford" value="Oxford" />
                  <Picker.Item label="Palm Springs" value="Palm Springs" />
                  <Picker.Item label="Paris" value="Paris" />
                  <Picker.Item label="Penzance" value="Penzance" />
                  <Picker.Item label="Perth" value="Perth" />
                  <Picker.Item label="Philadelphia" value="Philadelphia" />
                  <Picker.Item label="Phoenix" value="Phoenix" />
                  <Picker.Item label="Phuket" value="Phuket" />
                  <Picker.Item label="Plymouth" value="Plymouth" />
                  <Picker.Item label="Portland" value="Portland" />
                  <Picker.Item label="Portland" value="Portland" />
                  <Picker.Item label="Portsmouth" value="Portsmouth" />
                  <Picker.Item label="Prague" value="Prague" />
                  <Picker.Item label="Preston" value="Preston" />
                  <Picker.Item label="Providence" value="Providence" />
                  <Picker.Item label="Pune" value="Pune" />
                  <Picker.Item label="Pyongyang" value="Pyongyang" />
                  <Picker.Item label="Raleigh" value="Raleigh" />
                  <Picker.Item label="Reading" value="Reading" />
                  <Picker.Item label="Reykjavík" value="Reykjavík" />
                  <Picker.Item label="Rhyl" value="Rhyl" />
                  <Picker.Item label="Richmond" value="Richmond" />
                  <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
                  <Picker.Item label="Riyadh" value="Riyadh" />
                  <Picker.Item label="Rome" value="Rome" />
                  <Picker.Item label="Sacramento" value="Sacramento" />
                  <Picker.Item label="Saitama" value="Saitama" />
                  <Picker.Item label="Salford" value="Salford" />
                  <Picker.Item label="Salt Lake City" value="Salt Lake City" />
                  <Picker.Item label="Salvador" value="Salvador" />
                  <Picker.Item label="San Antonio" value="San Antonio" />
                  <Picker.Item label="San Diego" value="San Diego" />
                  <Picker.Item label="San Francisco" value="San Francisco" />
                  <Picker.Item label="San Jose" value="San Jose" />
                  <Picker.Item
                    label="Santa Cruz de Tenerife"
                    value="Santa Cruz de Tenerife"
                  />
                  <Picker.Item label="Santa Cruz" value="Santa Cruz" />
                  <Picker.Item label="Santa Fe" value="Santa Fe" />
                  <Picker.Item label="Santander" value="Santander" />
                  <Picker.Item label="Santiago" value="Santiago" />
                  <Picker.Item label="Santorini" value="Santorini" />
                  <Picker.Item label="São Paulo" value="São Paulo" />
                  <Picker.Item label="Sapporo" value="Sapporo" />
                  <Picker.Item label="Seattle" value="Seattle" />
                  <Picker.Item label="Sendai" value="Sendai" />
                  <Picker.Item label="Seoul" value="Seoul" />
                  <Picker.Item label="Shanghai" value="Shanghai" />
                  <Picker.Item label="Sheffield" value="Sheffield" />
                  <Picker.Item label="Shenzhen" value="Shenzhen" />
                  <Picker.Item label="Sidmouth" value="Sidmouth" />
                  <Picker.Item label="Singapore" value="Singapore" />
                  <Picker.Item label="Sioux Falls" value="Sioux Falls" />
                  <Picker.Item label="Sofia" value="Sofia" />
                  <Picker.Item
                    label="Southend-on-Sea"
                    value="Southend-on-Sea"
                  />
                  <Picker.Item label="St Ives" value="St Ives" />
                  <Picker.Item label="St Petersburg" value="St Petersburg" />
                  <Picker.Item label="St. Louis" value="St. Louis" />
                  <Picker.Item label="Stockholm" value="Stockholm" />
                  <Picker.Item label="Stoke-on-Trent" value="Stoke-on-Trent" />
                  <Picker.Item label="Stuttgart" value="Stuttgart" />
                  <Picker.Item label="Sunderland" value="Sunderland" />
                  <Picker.Item label="Surat" value="Surat" />
                  <Picker.Item label="Swansea" value="Swansea" />
                  <Picker.Item label="Swindon" value="Swindon" />
                  <Picker.Item label="Sydney" value="Sydney" />
                  <Picker.Item label="Taipei" value="Taipei" />
                  <Picker.Item label="Tehrān" value="Tehrān" />
                  <Picker.Item label="The Hague" value="The Hague" />
                  <Picker.Item label="Tianjin" value="Tianjin" />
                  <Picker.Item label="Tokyo" value="Tokyo" />
                  <Picker.Item label="Torino" value="Torino" />
                  <Picker.Item label="Toronto" value="Toronto" />
                  <Picker.Item label="Toulouse" value="Toulouse" />
                  <Picker.Item label="Truro" value="Truro" />
                  <Picker.Item label="Tucson" value="Tucson" />
                  <Picker.Item label="Vancouver" value="Vancouver" />
                  <Picker.Item label="Venice" value="Venice" />
                  <Picker.Item label="Vienna" value="Vienna" />
                  <Picker.Item label="Virginia Beach" value="Virginia Beach" />
                  <Picker.Item label="Wakefield" value="Wakefield" />
                  <Picker.Item label="Warsaw" value="Warsaw" />
                  <Picker.Item label="Washington DC" value="Washington DC" />
                  <Picker.Item label="Wellington" value="Wellington" />
                  <Picker.Item label="Wichita" value="Wichita" />
                  <Picker.Item label="Wilmington" value="Wilmington" />
                  <Picker.Item label="Windhoek" value="Windhoek" />
                  <Picker.Item label="Wolverhampton" value="Wolverhampton" />
                  <Picker.Item label="Wuhan" value="Wuhan" />
                  <Picker.Item label="Yangon" value="Yangon" />
                  <Picker.Item label="Yokohama" value="Yokohama" />
                  <Picker.Item label="York" value="York" />
                  <Picker.Item label="Zagreb" value="Zagreb" />
                  <Picker.Item label="Zurich" value="Zurich" />
                </Picker>
              </View>
              <AddFav city={city} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: 30,
                marginRight: 30,
                justifyContent: 'flex-start',
              }}>
              <FavButton onRef={favoriteSaved => handleChange(favoriteSaved)} />
            </View>

            {handleChangeCalled === false && recalled ? (
              itemFavoriteSaved ? (
                <View></View>
              ) : (
                <View style={styles.loading}>
                  <Text
                    style={{
                      color: '#f3ecec',
                      fontWeight: 'bold',
                      alignSelf: 'center',
                    }}>
                    Loading...
                  </Text>
                  <ActivityIndicator
                    style={{alignSelf: 'center'}}
                    size="large"
                    color="#f3ecec"
                  />
                </View>
              )
            ) : handleChangeCalled === true && recalled === false ? (
              <>
                <View style={styles.card}>
                  <View style={styles.titleRow}>
                    <Text style={styles.title}>Now - {date0}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.description}>{temperature0}°</Text>
                    <Image
                      style={{
                        alignSelf: 'center',
                        marginLeft: 3,
                        width: 64,
                        height: 64,
                      }}
                      source={{
                        uri: `https://www.metaweather.com//static/img/weather/png/64/${weather0}.png`,
                      }}
                    />
                  </View>
                  <View style={styles.row}>
                    <Icon
                      name="arrow-up"
                      size={25}
                      color="#ff0000"
                      style={{marginLeft: 10, marginRight: 5}}
                    />
                    <Text style={styles.subtitle}>{max0}°</Text>
                    <Icon
                      name="arrow-down"
                      size={25}
                      color="#0038b2"
                      style={{marginLeft: 10, marginRight: 5}}
                    />
                    <Text style={styles.subtitle}>{min0}°</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.subCards}>
                    <View style={styles.titleRowSubCards}>
                      <Text style={styles.subtitle}>{date1}</Text>
                    </View>
                    <View style={styles.RowSubCards}>
                      <Image
                        style={{
                          alignSelf: 'center',
                          marginLeft: 3,
                          width: 40,
                          height: 40,
                        }}
                        source={{
                          uri: `https://www.metaweather.com//static/img/weather/png/${weather1}.png`,
                        }}
                      />
                      <Text style={styles.subtitle1}>{temperature1}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-up"
                        size={15}
                        color="#ff0000"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{max1}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-down"
                        size={15}
                        color="#0038b2"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{min1}°</Text>
                    </View>
                  </View>
                  <View style={styles.subCards}>
                    <View style={styles.titleRowSubCards}>
                      <Text style={styles.subtitle}>{date2}</Text>
                    </View>
                    <View style={styles.RowSubCards}>
                      <Image
                        style={{
                          alignSelf: 'center',
                          marginLeft: 3,
                          width: 40,
                          height: 40,
                        }}
                        source={{
                          uri: `https://www.metaweather.com//static/img/weather/png/${weather2}.png`,
                        }}
                      />
                      <Text style={styles.subtitle1}>{temperature2}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-up"
                        size={15}
                        color="#ff0000"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{max2}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-down"
                        size={15}
                        color="#0038b2"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{min2}°</Text>
                    </View>
                  </View>
                  <View style={styles.subCards}>
                    <View style={styles.titleRowSubCards}>
                      <Text style={styles.subtitle}>{date3}</Text>
                    </View>
                    <View style={styles.RowSubCards}>
                      <Image
                        style={{
                          alignSelf: 'center',
                          marginLeft: 3,
                          width: 40,
                          height: 40,
                        }}
                        source={{
                          uri: `https://www.metaweather.com//static/img/weather/png/${weather3}.png`,
                        }}
                      />
                      <Text style={styles.subtitle1}>{temperature3}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-up"
                        size={15}
                        color="#ff0000"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{max3}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-down"
                        size={15}
                        color="#0038b2"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{min3}°</Text>
                    </View>
                  </View>
                  <View style={styles.subCards}>
                    <View style={styles.titleRowSubCards}>
                      <Text style={styles.subtitle}>{date4}</Text>
                    </View>
                    <View style={styles.RowSubCards}>
                      <Image
                        style={{
                          alignSelf: 'center',
                          marginLeft: 3,
                          width: 40,
                          height: 40,
                        }}
                        source={{
                          uri: `https://www.metaweather.com//static/img/weather/png/${weather4}.png`,
                        }}
                      />
                      <Text style={styles.subtitle1}>{temperature4}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-up"
                        size={15}
                        color="#ff0000"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{max4}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-down"
                        size={15}
                        color="#0038b2"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{min4}°</Text>
                    </View>
                  </View>
                  <View style={styles.subCards}>
                    <View style={styles.titleRowSubCards}>
                      <Text style={styles.subtitle}>{date5}</Text>
                    </View>
                    <View style={styles.RowSubCards}>
                      <Image
                        style={{
                          alignSelf: 'center',
                          marginLeft: 3,
                          width: 40,
                          height: 40,
                        }}
                        source={{
                          uri: `https://www.metaweather.com//static/img/weather/png/${weather5}.png`,
                        }}
                      />
                      <Text style={styles.subtitle1}>{temperature5}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-up"
                        size={15}
                        color="#ff0000"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{max5}°</Text>
                    </View>
                    <View style={styles.RowSubCards2}>
                      <Icon
                        name="arrow-down"
                        size={15}
                        color="#0038b2"
                        style={{alignSelf: 'center', marginRight: 5}}
                      />
                      <Text style={styles.subtitle}>{min5}°</Text>
                    </View>
                  </View>
                </View>
              </>
            ) : (
              <View style={styles.loading}>
                <Text
                  style={{
                    color: '#f3ecec',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Loading...
                </Text>
                <ActivityIndicator
                  style={{alignSelf: 'center'}}
                  size="large"
                  color="#f3ecec"
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  row: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loading: {
    margin: 30,
    height: 200,
    justifyContent: 'center',
  },
  RowSubCards: {
    margin: 10,
    justifyContent: 'center',
  },
  RowSubCards2: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3,
    justifyContent: 'center',
  },
  titleRow: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#00e0e5',
    borderRadius: 3,
  },
  titleRowSubCards: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#00e0e5',
    borderRadius: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subtitle1: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  description: {
    fontSize: 64,
  },
  card: {
    backgroundColor: '#e5feff',
    margin: 30,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subCards: {
    backgroundColor: '#e5feff',
    borderRadius: 3,
    height: 200,
    width: 55,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bodypicker: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    width: 250,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picker: {
    flex: 1,
  },
});

export default App;
