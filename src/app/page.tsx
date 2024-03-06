import data from '@/data/data.json'
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white shadow-lg w-auto h-auto rounded-3xl flex flex-col md:flex-row ">
      <section className=" w-72 h-[450px] bg-violet-500 text-white text-center flex flex-col items-center justify-between rounded-3xl py-9">
        <h3>Your Result</h3>
        <div className="p-3 rounded-full h-40 w-40 bg-violet-700 flex flex-col justify-center items-center">
          <h1 className=" text-5xl font-extrabold">76</h1>
          <span>of 100</span>
        </div>
        <h2>Great</h2>
        <span className="text-center">
          You scored higjer than 65% of
          <br />
          the people who have taken
          <br />
          these tests.
        </span>
      </section>
      <section className="w-72 h-[450px] py-9 px-5 flex flex-col gap-5 justify-between">
        <h2>Summary</h2>
        <div className="flex gap-3 flex-col">
          {
            data.map(value => (
              <div key={value.category} className={"flex justify-between items-center px-4 py-3 bg-opacity-20 rounded-md " + value.color}>
                <div className="flex gap-2">
                  <Image src={value.icon} alt="as" width={20} height={20} />
                  <h4>{value.category}</h4>
                </div>
                <h4>{value.score}/100</h4>
              </div>))
          }
        </div>
        <button className="rounded-3xl bg-blue-950 w-full h-10 text-white">
          Continue
        </button>
      </section>
    </main>
  );
}
