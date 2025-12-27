import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

const Breadcrumb: React.FC<Props> = ({ items, className = "" }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      className={`w-full flex justify-start overflow-x-auto ${className}`}
      aria-label="Breadcrumb"
    >
      <ol
        className="
          flex items-center flex-wrap
          gap-2 sm:gap-3
          px-3 sm:px-4
          py-2
          rounded-xl sm:rounded-2xl
          text-sm sm:text-base
          whitespace-nowrap
        "
      >
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <React.Fragment key={idx}>
              <li className="flex items-center">
                {isLast ? (
                  <span
                    className="text-yellow-900 font-semibold"
                    aria-current="page"
                  >
                    {it.icon ? (
                      <it.icon className="hidden sm:inline-block w-4 h-4 me-1.5 align-middle" />
                    ) : null}
                    <span className="align-middle">{it.label}</span>
                  </span>
                ) : it.href ? (
                  <Link
                    href={it.href}
                    className="
                      flex items-center gap-1.5 sm:gap-2
                      text-gray-700 font-sm
                      hover:text-yellow-500 transition
                    "
                  >
                    {it.icon ? (
                      <it.icon className="hidden sm:block w-4 h-4 text-gray-500" />
                    ) : null}
                    <span className="truncate max-w-[120px] sm:max-w-none">
                      {it.label}
                    </span>
                  </Link>
                ) : (
                  <span className="text-gray-700 font-sm truncate max-w-[120px] sm:max-w-none">
                    {it.label}
                  </span>
                )}
              </li>

              {!isLast && (
                <li className="flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
