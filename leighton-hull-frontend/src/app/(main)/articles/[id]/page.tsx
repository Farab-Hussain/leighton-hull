import ArticlesPageScreenView from "@/features/articles/screen/articles-page-screen-view";
import React from "react";

const articles = ["1", "2", "3", "4"];

export async function generateStaticParams() {
  return articles.map(article => ({
    id: article
  }));
}

type Params = {
  params: Promise<{ id: string }>;
};

export default async function ArticlesPage({ params }: Params) {
  const { id } = await params;
  return <ArticlesPageScreenView id={id} />;
}
