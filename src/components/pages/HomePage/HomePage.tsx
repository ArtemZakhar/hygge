import { contactsList } from './contactsList';

const HomePage = () => {
  return (
    <section className="col-span-full min-h-[70vh] flex justify-center items-center flex-col gap-2 text-text-primary ">
      <h1 className="text-3xl font-[700]">Hygge Software Test Assignment</h1>

      <p>prepared by</p>

      <h2 className="text-2xl font-[700]">Artem Zakharchuk</h2>

      <div className="flex gap-4 mt-4 ">
        {contactsList.map(({ id, icon: Icon, link }) => (
          <a key={id} href={link} target="_blank">
            <Icon className="h-10 w-10 hover:scale-110 transition-scale duration-300" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
