import ResultCard from "../components/ResultCard";
import Link from "next/link";

const ResultPage = () => {
  const results = [
    { id: 1, date: "01/07/2023" },
    { id: 2, date: "01/08/2023" },
    { id: 3, date: "01/09/2023" },
    { id: 4, date: "01/10/2023" },
  ];
  return (
    <div className="flex flex-col text-center mx-2 my-4 md:my-10">
      <h1 className="text-5xl p-4 mb-6 text-center">Hi Marco!</h1>
      <div className=" bg-orange-600 text-3xl md:mx-auto font-extrabold p-6">
        <h2 className="mb-4">Check your</h2>
        <h2 className="text-gray-900 ">History</h2>
      </div>

      <div className="">
      <ul className="text-orange-600 py-20  text-bold ">
        {results.map((result) => (
          <li key={result.id}>
            <ResultCard result={result} />
          </li>
        ))}
      </ul>
      </div>
      <Link href="/" className="bg-orange-600 mx-auto text-gray-900 py-1 px-8 rounded-lg text-center hover:bg-orange-400 md:text-2xl md:px-12 md:py-4">
        Back
      </Link>
    </div>
  );
};

export default ResultPage;
