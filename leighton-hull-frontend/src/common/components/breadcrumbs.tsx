"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "./icon";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const router = useRouter();

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex cursor-pointer items-center text-sm text-gray-600 transition-colors hover:text-blue-600"
      >
        <Icon name="arrow-left-black" size={20} />
      </button>

      {/* Breadcrumb items */}
      <ol className="flex items-center text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-grey50 font-urbanist-regular text-urbanist-p3 leading-urbanist-p3 cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-grey50 font-urbanist-regular text-urbanist-p3 leading-urbanist-p3 cursor-pointer">
                  {item.label}
                </span>
              )}
              {!isLast && <span className="mx-2 text-gray-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
