import IntroLayout from "../../components/layout/IntroLayout";
import MissionVisionHero from "../../components/blocks/MissionVisionHero";
import MissionVisionBlocks from "../../components/blocks/MissionVisionBlocks";
import CoreValuesGrid from "../../components/blocks/CoreValuesGrid";
import ServiceMottoQuote from "../../components/blocks/ServiceMottoQuote";
import QualityCTA from "../../components/blocks/QualityCTA";

export default function SuMenhTamNhin() {
  return (
    <IntroLayout currentPath="/gioi-thieu/su-menh-tam-nhin">
        <MissionVisionHero />
        <MissionVisionBlocks />
        <CoreValuesGrid />
        <ServiceMottoQuote />
        <QualityCTA />
    </IntroLayout>
  );
}
