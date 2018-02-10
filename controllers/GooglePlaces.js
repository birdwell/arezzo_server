import axios from 'axios';

// "address_components", "adr_address", "formatted_address", "formatted_phone_number", "geometry", "icon", "id", "international_phone_number", "name", "photos", "place_id", "rating", "reference", "reviews", "scope", "types", "url", "utc_offset", "vicinity", "website"

const getPlace = async (req, res) => {
	const { placeId } = req.params;
	const googleAPI = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyAfMJ0dTjFcd5UUbSCQsur5_0B9k-x6pmA&placeid=${placeId}`);

	if (googleAPI.status === 200) {
		const { 
			formatted_address, formatted_phone_number, icon,
			id, name, photos, rating, reviews,
			types, website
		} = googleAPI.data.result;
		const placeDetails = {
			address: formatted_address,
			phoneNumber: formatted_phone_number,
			icon,
			id,
			name,
			photos,
			rating,
			reviews,
			types,
			website
		};
		res.json(placeDetails);
	} else {
		res.send(status.text);
		res.sendStatus(500);
	}

};

export default getPlace;
