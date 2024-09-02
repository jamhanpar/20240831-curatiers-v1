import { Outlet, useLoaderData } from 'react-router-dom';

//--- GLOBAL COMPONENTS ---//
import Nav from '../components/nav/Nav.tsx';

//--- TYPES ---//
import { User } from '../types/global.ts';

// Define the type for the loader data
interface LoaderData {
  user: User;
}

export default function RootLayout() {
  const { user } = useLoaderData() as LoaderData;

  return (
    <div className="flex justify-center font-inter border border-red-400">
      <div className="w-full md:max-w-7xl min-h-screen border border-orange-400">
        {/* <Nav user={user} /> */}
        <div className="border border-green-400">hello</div>
        <Outlet />
      </div>
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
