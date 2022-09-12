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
  const data = (await fetch('https://api.fda.gov/food/enforcement.json?limit=1000').then(
    async (response) => {
      if (response.ok) {
        const clone = response.clone();
        return clone.json();
      }
      return Promise.reject(response);
    },
  ));
  console.log('request took ', Date.now() - time);
  res.json({
    dataSet1: {...data}, 
    dataSet2: {...data},
  });
}
