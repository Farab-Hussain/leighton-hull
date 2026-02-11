import BackButton from "@/features/articles/components/common/back-button";
import Container from "@/features/articles/components/common/container";
import ArticleHero from "@/features/articles/components/common/hero";
import Paragraph from "@/features/articles/components/common/paragraph";
import Subtitle from "@/features/articles/components/common/subtitle";
import Title from "@/features/articles/components/common/title";
import React from "react";

const FortuneMagazine = () => {
  return (
    <>
      <ArticleHero src="/images/articles/fortune-magazine.webp" />
      <Container>
        <BackButton />
        <div className="flex flex-col gap-3">
          <Title variant="primary">Denny’s</Title>
          <Subtitle variant="primary">Serving All of America</Subtitle>
        </div>
        <Paragraph>
          <p>
            &quot;Denny&apos;s serves America,&quot; states Rachelle &quot;Ray&quot; Hood-Phillips, chief diversity officer for
            Denny&apos;s parent company, Flagstar Companies, Inc. She&apos;s not only referring to Denny&apos;s top-ranking
            position in the sit-down-family-dining category. The largest full-service family restaurant chain in the United States
            is a diversity success story.
          </p>
          <p>
            This recognition as a leader in diversity was not always Denny&apos;s claim to fame. Lawsuits for discriminating
            against African-American customers were settled in 1994, resulting in consent decrees to ensure equitable treatment of
            all customers. These decrees provide for a toll-free telephone service for customers to report any new instances of
            discrimination, diversity training for employees, and a special civil rights monitor to follow Denny&apos;s progress.
          </p>
          <p>
            Denny&apos;s went beyond the legal mandate and has developed programs to create an environment that embraces its
            diverse customer base and provides internal opportunities for underrepresented minorities and women. &quot;We&apos;re
            transforming a culture,&quot; says Hood-Phillips. &quot;We want to dismantle systems and structures that impede
            inclusion and rebuild the company to foster and leverage diversity as a business advantage.&quot;
          </p>
          <p>
            Hood-Phillips provides strategic counsel as a member of the company&apos;s executive management committee and reports
            directly to Flagstar&apos;s Chair and CEO Jim Adamson. Adamson was the major ingredient in Denny&apos;s reformulation.
            His four-part strategy on diversity is simple and direct: loosen up the hierarchical environment, make diversity a
            performance criterion for all managers, teach racial sensitivity to all employees, and preach diversity at every
            opportunity. Adamson says,
          </p>
          <p>
            &quot;Flagstar is taking this step because we are firmly and sincerely committed to having a truly multicultural work
            force at all levels of our organization that is reflective and respectful of the needs and expectations of our diverse
            customer base.&quot; Denny&apos;s commitment to diversity was recently recognized by the National Association for the
            Advancement of Colored People (NAACP) when Adamson was awarded the 1996 NAACP Corporate CEO Achievement Award.
          </p>
          <p>
            Like most diversity experts, Hood-Phillips believes that diversity must have clear and measurable goals to be
            successful. The company has developed productive partnerships with minority organizations such as the NAACP and
            Hispanic Association on Corporate Responsibility. Annual goals have been established for each of the five Fair Share
            Agreement categories: procurement, franchising, marketing, management, and philanthropy. In every category,
            Denny&apos;s is a success. In procurement, 1992 saw no minority vendors of record. For 1996, the company extended $80
            million in minority contracts. &quot;We have developed many unique opportunities for minority business
            participation,&quot; says Hood-Phillips. She describes a black-owned food-process-ing facility that will supply
            Flagstar with an estimated $100 million in food over the next five years. The franchising area also holds many success
            stories. Hood-Phillips is especially proud of the increase in minority franchises. Nearly one-fourth of all
            Denny&apos;s franchises are now minority owned.
          </p>
          <p>
            With an inclusive attitude at the top, diversity support in the management ranks, and increasing minority
            participation in purchasing and fran-chising, Denny&apos;s can proudly say that they serve all of America.
          </p>
        </Paragraph>
      </Container>
    </>
  );
};

export default FortuneMagazine;
