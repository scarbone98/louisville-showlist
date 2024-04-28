import SearchSection from "./components/search-section";
import axios from "@/lib/axios";

export default async function Home() {
  const { data } = await axios('/api/home');

  return (
    <div className="flex justify-center">
      <main className="w-full min-h-screen flex flex-col items-center">
        <header className="w-full flex items-center sticky top-0 bg-white py-2 border-b-2 border-gray-500 z-10 h-16 px-4 justify-center">
          <nav className="flex justify-between w-full lg:w-[1024px]">
            <div>Louisville Showlist</div>
            <div>X</div>
          </nav>
        </header>
        <div className="px-4 pt-2 lg:w-[1024px]">
          <SearchSection data={data} />
        </div>
      </main>
    </div>
  );
}
