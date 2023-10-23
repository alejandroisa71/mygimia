import Link from "next/link";

const ResultCard = ({ result }) => {
  console.log(result);
  return (
    <div className=" m-2 flex hover:bg-orange-400">
      <p>
        {result.id}. {result.date}
      </p>
      <Link href={`/results/${result.id}`}>Download</Link>
    </div>
  );
};

export default ResultCard;
