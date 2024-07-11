export default async function getSocialAPI(name: string) {
    try {
        const response = await fetch('https://linkedin-data-api.p.rapidapi.com/search-people?keywords=' + name, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY as string,
            }
        });
        const data = await response.json();
        // Handle the API response data here
        console.log(data);
        return data.data.items;
    } catch (error) {
        // Handle any errors that occur during the API request
        console.error(error);
    }
}