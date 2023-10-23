import ResultCard from "../components/ResultCard";
import Button from "./Button";
import Link from "next/link";

const ResultPage = () => {
  const results = [
    { id: 1, date: "01/07/2023" },
    { id: 2, date: "01/08/2023" },
    { id: 3, date: "01/09/2023" },
    { id: 4, date: "01/10/2023" },
  ];
  return (
    <div className="bg-zinc-950 p-4 text-slate-400">
      <h1 className=" text-gray-50">Hi Marco</h1>
      <h2 className="bg-orange-600 text-gray-50">
        Check your <strong className="text-gray-900">History</strong>
      </h2>
      <ul className="text-orange-600">
        {results.map((result) => (
          <li key={result.id}>
            <ResultCard result={result} />
          </li>
        ))}
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <Button />
    </div>
  );
};

export default ResultPage;
