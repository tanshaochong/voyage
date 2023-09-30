import InterpersonalOverview from '@/components/InterpersonalOverview';
import TechnicalOverview from '@/components/TechnicalOverview';

const OverviewPage = () => {
  return (
    <div className="container flex h-full w-full flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-semibold text-left mr-auto mb-8">
        Hi John,
        <br />
        let&apos;s accelerate your career with PSA!
      </h1>
      <div className="grow grid grid-cols-2 gap-4 w-full">
        <TechnicalOverview />
        <InterpersonalOverview />
      </div>
    </div>
  );
};

export default OverviewPage;
