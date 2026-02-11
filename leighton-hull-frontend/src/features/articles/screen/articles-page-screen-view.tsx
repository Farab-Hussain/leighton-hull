"use client";
import React, { type ReactNode, useEffect } from "react"; // Import useEffect
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import BlackEnterprise from "@/features/articles/components/black-enterprise";
import DennysStory from "@/features/articles/components/dennys-story";
import FortuneMagazine from "@/features/articles/components/fortune-magazine";
import MoneyMagazine from "@/features/articles/components/money-magazine";

type Props = {
  id: string;
};

const articles: Record<string, ReactNode> = {
  "1": <MoneyMagazine />,
  "2": <FortuneMagazine />,
  "3": <BlackEnterprise />,
  "4": <DennysStory />
};

const ArticlesPageScreenView = ({ id }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (id === "contact") {
      router.push("/contact");
    }
  }, [id, router]);

  return articles[id] || null;
};

export default ArticlesPageScreenView;
