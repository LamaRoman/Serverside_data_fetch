import Link from "next/link";

async function getPets() {
  const pets = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const allPets = await pets.json();

  return allPets;
}
export default async function page({ params }) {
  const pets = await getPets();
  return (
    <>
      <div>
        {pets.map((pet, index) => (
          <ul>
            <li key={index}>
              <Link href={"/pets/" + pet.name.toLowerCase()}>{pet.name}</Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
