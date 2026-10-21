import Card from '../components/card/Card.tsx';

export default function HomePage() {
  return (
    <div className="">
      <section className="min-h-screen py-6 bg-gradient-to-b from-slate-50 to-teal-500 pt-14 flex justify-center items-center">
        <div className="flex flex-col gap-4 md:flex-row md:px-6">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="h-screen to-slate-50">Section 2</section>
    </div>
  );
}
