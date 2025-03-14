import { useState } from "react";
export default function Accordian() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2 className=" text-3xl underline ">Almaty, Kazakhstan</h2>

      <div className ="">
        <Panel
          title="About"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </Panel>

        <Panel
          title="Etymology"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
          for "apple" and is often translated as "full of apples". In fact, the
          region surrounding Almaty is thought to be the ancestral home of the
          apple, and the wild <i lang="la">Malus sieversii</i> is considered a
          likely candidate for the ancestor of the modern domestic apple.
        </Panel>
      </div>
    </>
  );
}

function Panel({ title, isActive, onShow, children }) {
  return (
    <>
      <section className="border border-gray-500 px-5 ml-10 mr-10 rounded">
        <h3 className=" text-2xl font-bold ">{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={onShow} className="border my-2 px-4 py-1 rounded  ">
            {" "}
            Show
          </button>
        )}
      </section>
    </>
  );
}
