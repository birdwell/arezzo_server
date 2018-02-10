import axios from 'axios';

const getPlace = async (req, res) => {
	const { placeId } = req.params;
	const googleAPI = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyAfMJ0dTjFcd5UUbSCQsur5_0B9k-x6pmA&placeid=${placeId}`);

	if (googleAPI.status === 200) {
		const { formatted_address, formatted_phone_number, icon,
			id, name, photos, rating, reviews,
			types, website,
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
			website,
		};
		res.json(placeDetails);
	} else {
		res.send(googleAPI.status.text).sendStatus(500);
	}
};

export default getPlace;
