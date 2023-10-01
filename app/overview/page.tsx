import InterpersonalOverview from '@/components/InterpersonalOverview';
import TechnicalOverview from '@/components/TechnicalOverview';
import { FIREBASE_USER } from '@/data/data';

const OverviewPage = () => {
  return (
    <div className="container flex h-full w-full flex-col items-center justify-center py-4">
      <h1 className="text-3xl font-semibold text-left mr-auto mb-8">
        Hi {FIREBASE_USER.displayName.split(' ')[0]},
        <br />
        Let&apos;s accelerate your career
      </h1>
      <div className="grow grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <TechnicalOverview />
        <InterpersonalOverview />
      </div>
    </div>
  );
};

export default OverviewPage;
