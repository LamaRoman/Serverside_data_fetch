export default function page({ params }) {
  return (
    <>
      <h1>Name of the Pets</h1>
      <ul>
        <li>{params.name}</li>
      </ul>
    </>
  );
}
