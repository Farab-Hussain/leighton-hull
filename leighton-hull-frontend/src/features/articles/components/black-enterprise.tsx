import BackButton from "@/features/articles/components/common/back-button";
import Container from "@/features/articles/components/common/container";
import ArticleHero from "@/features/articles/components/common/hero";
import Paragraph from "@/features/articles/components/common/paragraph";
import Title from "@/features/articles/components/common/title";
import React from "react";

const BlackEnterprise = () => {
  return (
    <>
      <ArticleHero src="/images/articles/black-enterprise.webp" />
      <Container>
        <BackButton />
        <Title variant="primary">FOR YOURSELF, BUT NOT BY YOURSELF</Title>
        <Paragraph>
          <p>
            Leighton Hull uses the word &apos;growth&apos; a lot because the term embodies a principle at the heart of his
            business and personal philosophy. Choosing the right franchise involves investigating the &quot;growth rate and growth
            pattern&quot; of a particular franchise.
          </p>
          <p>
            It is a principle from which he seldom deviates. After eleven successful years in the food service industry, Hull
            bought a five-store package of <span className="text-p3-poppins-bold">Denny&apos;s</span> units in Ventura County,
            California. His stores have posted double-digit increases in sales since, and he has set his sights on adding seven to
            ten units per year with a long-term nationwide goal of triple digits in stores.
          </p>
          <p>
            Given Hull&apos;s track record and the success of <span className="text-p3-poppins-bold">Denny&apos;s</span>
            nationwide, this is no pipe dream.
          </p>
          <p>
            A member of several business organizations which focus on African-American issues, he also is a realist when it comes
            to distilling the elixir for growth. &quot;Assess your own strengths and weaknesses,&quot; he counsels. &quot;The
            ability to manage people and financial resources are prerequisites for long term success.&quot;
          </p>
        </Paragraph>
      </Container>
    </>
  );
};

export default BlackEnterprise;
