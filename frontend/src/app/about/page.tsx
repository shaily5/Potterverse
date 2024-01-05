export default function AboutPage() {
  return (
    <div className="w-full md:w-5/6 mx-auto">
      <h1 className="text-6xl">About</h1>
      <p className="mt-4 text-lg">
        Potter DB is an expansive API dedicated to housing a comprehensive collection of data from
        the Harry Potter Universe. From intricate character profiles to detailed information about
        spells, potions, books, and movies, Potter DB serves as a centralized hub for all things
        related to J.K. Rowling&apos;s magical world.
      </p>

      <div className="my-8">
        <h2 className="text-4xl">Our Journey</h2>
        <p className="mt-4 text-lg">
          The story of Potter DB is a project of passion and love for the Harry Potter Universe. It
          all started in mid of June 2022, when I a dedicated Harry Potter fan, realized that
          something was missing in the magical digital world for fellow Potterheads and developers
          like myself. So I decided to create Potter DB, an API and website that would serve as a
          place for all things related to the magical world of Harry Potter. <br /> <br />{" "}
        </p>
      </div>
      <div className="my-8">
        <h2 className="text-4xl">Copyright Information</h2>
        <p className="mt-4 text-lg">
          Potter DB is an unofficial Harry Potter Database, and is not endorsed by or affiliated
          with J.K. Rowling, Warner Bros., or any of the individuals or companies associated with
          producing and publishing Harry Potter books and films. All content on this website is for
          informational purposes only. Potter DB does not claim any ownership over the data
          displayed on this website.
        </p>
      </div>
    </div>
  );
}
