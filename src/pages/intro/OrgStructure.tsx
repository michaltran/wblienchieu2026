import IntroLayout from "../../components/layout/IntroLayout";
import OrgHero from "../../components/blocks/OrgHero";
import LeadershipBlock from "../../components/blocks/LeadershipBlock";
import OrgTreeBlock from "../../components/blocks/OrgTreeBlock";
import QualityCTA from "../../components/blocks/QualityCTA";

export default function OrgStructure() {
  return (
    <IntroLayout currentPath="/gioi-thieu/co-cau-to-chuc">
        <OrgHero />
        <LeadershipBlock />
        <OrgTreeBlock />
        <div className="mt-16">
            <QualityCTA />
        </div>
    </IntroLayout>
  );
}
