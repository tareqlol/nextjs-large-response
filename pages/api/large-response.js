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
  const fails = new Array(16385).fill('x');
  res.json(fails);
}
