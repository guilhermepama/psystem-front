
async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337"
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default async function Home () {
  const strapiData = await getStrapiData("/api/home-page")

  if (!strapiData?.data) {
    return <p>Erro: Dados não encontrados</p>;
  }

  const { documentId, title, description } = strapiData.data;

  return (
    <main className="container mx-auto py-4">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
    </main>
  );
}

