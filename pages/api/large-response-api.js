export const config = {
  api: {
    externalResolver: true,
    responseLimit: '8mb',
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};

export default async function handler  (_req, res) {
  const time = Date.now();
  // almost 5.5MB of JSON
  const data = (await fetch('https://coinmap.org/api/v1/venues').then(
    async (response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    },
  ));
  console.log('request took ', Date.now() - time);
  res.json(data);
}
