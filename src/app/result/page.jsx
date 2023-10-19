import Button from "./Button";
import Link from 'next/link'

const ResultPage = () => {
  const results =[
    {id:1, date:'01/07/2023'},
    {id:2, date:'01/08/2023'},
    {id:3, date:'01/09/2023'},
    {id:4, date:'01/10/2023'},
  ]
  return (
    <div className="bg-zinc-950 p-4 text-slate-400">
      <h1>Hi Marco</h1>
      <h2>Check your history</h2>
      <ul className="bg-red-500 text-slate-800"> 
        {results.map( result =>{
          <li>{result.date}</li>
        })}
        <li><Link href='/'>Home</Link></li>
      </ul>
      <Button />
    </div>
  );
};

export default ResultPage;
