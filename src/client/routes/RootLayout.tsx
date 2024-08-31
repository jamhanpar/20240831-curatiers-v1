import { Outlet, useLoaderData } from 'react-router-dom';

//--- GLOBAL COMPONENTS ---//
import Nav from '../components/nav/Nav.tsx';

export default function RootLayout() {
  const { user } = useLoaderData();

  return (
    <div className="min-h-screen flex flex-col font-inter border border-red-800">
      <Nav user={user} />
      <Outlet />
    </div>
  );
}

//--- LOADER ---//
export async function loader() {
  // TODO: Some API call, maybe check if user is loggedIn or grab user data
  // const contacts = await getContacts();
  // return { contacts };
  return {
    user: { firstName: 'James', lastName: 'Park' },
    message: 'Hello from loader',
  };
}
