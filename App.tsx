import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import SupplyChainView from './components/SupplyChainView';
import RiskAssessmentView from './components/RiskAssessmentView';
import OpportunityFinderView from './components/OpportunityFinderView';
import EmissionsEstimatorView from './components/EmissionsEstimatorView';
import GreenerRoutesView from './components/GreenerRoutesView';
import { NavigationItem } from './types';
import { APP_TITLE } from './constants';

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavigationItem>(NavigationItem.Dashboard);

  const handleNavigate = useCallback((item: NavigationItem) => {
    setActiveItem(item);
  }, []);

  const renderView = () => {
    switch (activeItem) {
      case NavigationItem.Dashboard:
        return <DashboardView />;
      case NavigationItem.SupplyChain:
        return <SupplyChainView />;
      case NavigationItem.RiskAssessment:
        return <RiskAssessmentView />;
      case NavigationItem.OpportunityFinder:
        return <OpportunityFinderView />;
      case NavigationItem.EmissionsEstimator:
        return <EmissionsEstimatorView />;
      case NavigationItem.GreenerRoutes:
        return <GreenerRoutesView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-base-100">
      <Sidebar activeItem={activeItem} onNavigate={handleNavigate} />
      <main className="flex-1 ml-64"> {/* Adjust ml to match sidebar width */}
        <header className="bg-base-200 shadow-md p-6 sticky top-0 z-10">
          <h1 className="text-2xl font-semibold text-white">{APP_TITLE} - {activeItem}</h1>
        </header>
        <div className="overflow-y-auto h-[calc(100vh-72px)]"> {/* Adjust height for header */}
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;