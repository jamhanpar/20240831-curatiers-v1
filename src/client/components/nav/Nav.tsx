export default function Nav() {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <nav className="bg-transparent text-black border border-red-500">
      <div className="flex justify-between items-center">
        {/*--- LOGO ---*/}
        <div className="flex items-center">
          <h1 className="text-xl font-bold ml-2">C U R A T I E R S</h1>
        </div>

        {/*--- NAV LINKS ---*/}
        <ul className="flex gap-2">
          {links.map((link, index) => (
            <li key={index}>
              {link.url === '/' ? (
                <a href={link.url} className="hover:text-gray-500">
                  {link.name}
                </a>
              ) : (
                <a href={link.url} className="hover:text-gray-500">
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
