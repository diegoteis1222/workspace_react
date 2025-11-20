import type { JSX } from "react";
import CorazonIcono from "./icons/CorazonIcono";

interface Props {
  Icon?: () => JSX.Element;
  title: string;
  url: string;
  urlText: string;
  children: React.ReactNode;
}

function Card({ Icon = CorazonIcono, title, url, urlText, children }: Props) {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-2xl  shadow-xs">
      <Icon />
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">
          {title}
        </h5>
      </a>
      <p className="mb-3 text-body">{children}</p>
      <a
        href={url}
        className="inline-flex font-medium items-center text-fg-brand hover:underline"
      >
        {urlText}
      </a>
    </div>
  );
}
export default Card;
