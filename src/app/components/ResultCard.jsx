import Link from "next/link";

const ResultCard = ({ result }) => {
  console.log(result);
  const {date}= result
  return (
    <div className=" m-2 flex hover:bg-orange-400">
      <p>
        {result.id}. {result.date}
      </p>
      <Link href="/01-09-2023.pdf" target='_blank' download='01-09-2023.pdf'>Download</Link>
      {/* href={`/results/${result.id}`} */}
    </div>
  );
};

export default ResultCard;
