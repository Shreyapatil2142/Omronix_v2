import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PersonaProvider } from './PersonaContext';
import { AppLayout } from './layouts/AppLayout';

import { OverviewPage } from './pages/OverviewPage';
import { TenderRulesPage } from './pages/TenderRulesPage';
import { BidderCheckPage } from './pages/BidderCheckPage';
import { EvidenceDecisionPage } from './pages/EvidenceDecisionPage';
import { OfficerClarificationsPage } from './pages/OfficerClarificationsPage';
import { OfficerCommercialAwardPage } from './pages/OfficerCommercialAwardPage';
import { FilesystemExplorerPage } from './pages/FilesystemExplorerPage';

import { DashboardPage, TenderListPage } from './pages/DashTender';
import { TenderWizardPage, TenderDetailPage } from './pages/WizardDetail';
import { BidSubmissionPage, EvaluationMatrixPage } from './pages/BidEval';
import { CommercialEvalPage, CommitteeWorkbenchPage } from './pages/EvalCommittee';
import { AuditTrailPage, RiskFlagsPage } from './pages/AuditRisk';

function App() {
  return (
    <PersonaProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* Primary Prototype Navigation Views matching reference HTML */}
            <Route index element={<OverviewPage />} />
            <Route path="overview" element={<OverviewPage />} />
            <Route path="rules" element={<TenderRulesPage />} />
            <Route path="bidders" element={<BidderCheckPage />} />
            <Route path="evidence" element={<EvidenceDecisionPage />} />
            <Route path="clarifications" element={<OfficerClarificationsPage />} />
            <Route path="commercial-award" element={<OfficerCommercialAwardPage />} />
            <Route path="filesystem" element={<FilesystemExplorerPage />} />

            {/* Additional Workspace & Sub-Routes */}
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="tenders" element={<TenderListPage />} />
            <Route path="tenders/new" element={<TenderWizardPage />} />
            <Route path="tenders/:id" element={<TenderDetailPage />} />
            <Route path="tenders/:id/bid" element={<BidSubmissionPage />} />
            <Route path="tenders/:id/evaluation" element={<EvaluationMatrixPage />} />
            <Route path="tenders/:id/commercial" element={<CommercialEvalPage />} />
            <Route path="tenders/:id/committee" element={<CommitteeWorkbenchPage />} />
            <Route path="tenders/:id/audit" element={<AuditTrailPage />} />
            <Route path="tenders/:id/risk" element={<RiskFlagsPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </PersonaProvider>
  );
}

export default App;
