/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if (filters.duration.to && filters.duration.from) {
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
    // Filtrujemy wycieczki z wybranego przedzialu czasowego. Przekazujemy argument trip, sprawdzamy w nim wartość "days",
    // gdzie wprowadzony "from" musi być większy lub równy wartości domyślnej "from" i jednocześnie wprowadzona wartość "to" musi być mniejsza lub równa od domyślnej wartości "to".
  }
    

  // TODO - filter by tags
  // Domyślnie wyświetlają się wszystkie wycieczki. Jeżeli wybierzemy jakis tag (czyli tablica tagów będzie rózna od 0) 
  // to filtrujemy wycieczki przekazując do funckji argument "trip". Sprwadzamy nasz tag po kolei we wszystkich wycieczkach po tagach.
  // jeżeli nasz wybrany tag znajdzie się w "tags" wycieczki to zostanie on wyświetlony.
  if (filters.tags.length != 0) {
    output = output.filter(trip => {
      for (let tag of trip.tags) {
        if (filters.tags.indexOf(tag) > -1) { // tagi z indexem wiekszym niz -1 (czyli wszystkie w tablicy od indexu 0)
          return trip;
        }
      }
    });
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) =>{
  const filtered = trips.filter(trip => trip.id == tripId);

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode); // country bo spread operator w CountryContainer, code bo jest to key z Countries.js

  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
