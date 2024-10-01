// fetchCapitalCities.js
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";  // Import FeatureLayer to add external data sources

// This function creates and returns a FeatureLayer configured for capital cities
export const fetchCapitalCities = () => {
  // Create a FeatureLayer using the provided URL
  const citiesLayer = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Cities/FeatureServer/0",
    outFields: ["CITY_NAME", "POP"], // Fetch CITY_NAME and POP fields
    popupTemplate: {
      title: "{CITY_NAME}",               // Display city name in the popup
      content: "Population: {POP}",       // Display city population in the popup
    },
    definitionExpression: "STATUS LIKE 'National%'  " // Display filltered country's capital cities as it is includes National 

  });

  return citiesLayer;  // Return the FeatureLayer
};
