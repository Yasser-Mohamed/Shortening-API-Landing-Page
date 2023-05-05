import React, { useEffect, useState } from "react";
import BGdesktop from "../images/bg-shorten-desktop.svg";
import BGmobile from "../images/bg-shorten-mobile.svg";

// https://api.shrtco.de/v2/shorten?url=

const getLocalStorage = () => {
    let links = localStorage.getItem("links")
  
    if (links) {
      return JSON.parse(localStorage.getItem("links"))
    } else {
      return []
    }
  }

const Shortener = () => {
  const [text, setText] = useState("");
  const [links, setLink] = useState(getLocalStorage());
  const [isCopied, setIsCopied] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      alert("Input is empty!");
    } else {
      try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();
        
        setLink(data.result);
        console.log(links);
        setText("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setIsCopied(true);
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])

  
  return (
    <>
      <section className="short mx-10 -bottom-[5.25rem] max-width bg-prim rounded-xl relative h-[180px]">
        <picture>
          <source
            className="w-full"
            media="(min-width:768px )"
            srcset={BGdesktop}
          />
          <img
            className="h-[180px] w-full rounded-xl"
            src={BGmobile}
            alt="bg"
          />
        </picture>
        <form
          onSubmit={handelSubmit}
          className="absolute w-full top-1/2 transform -translate-y-1/2 flex flex-col md:flex-row justify-center md:items-center md:gap-6"
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="md:w-2/3  placeholder:text-red-300 focus::ring-red-300 text-red-300 py-2 mb-10 md:mb-0 mx-5  rounded-lg caret-bl"
            type="url"
            placeholder="Shorten a link here..."
          />
          <button
            onClick={handelSubmit}
            type="submit"
            className="btn-cta rounded-lg md:w-1/4 mx-5 "
          >
            Shorten It!
          </button>
        </form>
        <div className="flex flex-col md:items-center justify-center bg-white  md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
          <article>
            <h6 className="mb-3 md:mb-0">{links.original_link}</h6>
          </article>

          <article>
            <ul className="md:flex md:items-center">
              <li className="md:mr-5">
                <button className="text-cyan-500">
                  {links.full_short_link}
                </button>
              </li>
              <li>
                <button
                  onClick={handleCopy}
                  className={isCopied ? "isCopied rounded-lg w-full" : "btn-cta rounded-lg w-full"}
                >
                  {isCopied? "Copied!": "Copy"}
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Shortener;
