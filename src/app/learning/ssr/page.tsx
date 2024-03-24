export async function getData() {
  const apiDataRes = await fetch(
    "https://dog-api.kinduff.com/api/facts?number=6"
  );
  const apiData = await apiDataRes.json();
  return apiData;
}

async function Ssc() {
  const result = await getData();
  return (
    <div>
      {result?.facts?.map((fct) => (
        <div>{fct}</div>
      ))}
    </div>
  );
}

export default Ssc;
