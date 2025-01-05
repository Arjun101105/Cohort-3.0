import { ShareIcon } from "../icons/Shareicon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "project";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="bg-white rounded-md p-4 border-2 border-slate-100">
      <div className="flex justify-between ">
        <div className="flex space-x-2 items-center text-md">
          <ShareIcon size="sm" />
          <h1>{title}</h1>
        </div>
        <div className="flex space-x-2 items-center">
          <a href={link} target="_blank">
            <ShareIcon size="sm" />
          </a>
          <ShareIcon size="sm" />
        </div>
      </div>
      <div className="pt-4">
        {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

        {type === "twitter" && <blockquote className="twitter-tweet">
          <a href={link.replace("x.com", "twitter.com")} target="_blank"></a>
        </blockquote>}
        
      </div>
    </div>
  );
};
