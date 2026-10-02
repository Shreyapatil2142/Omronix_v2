import { useState } from 'react';
import { Lock, Unlock, Award, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

export const OfficerCommercialAwardPage = () => {
  const [techFrozen, setTechFrozen] = useState(false);
  const [awardRecommended, setAwardRecommended] = useState(false);
  const [awardSanctioned, setAwardSanctioned] = useState(false);

  return (
    <div className="flex-1 flex flex-col gap-6 max-w-[1120px]">
      {/* Title Header */}
      <div className="flex flex-col gap-1">
        <h1 className="h1">Bid Evaluation &amp; Award Workbench</h1>
        <p className="lead">Unlock sealed financial BOQ covers post technical freeze, inspect QCBS 70:30 score ranks, and sanction contract award.</p>
      </div>

      {/* Technical Freeze Lock Card */}
      <div className={`p-5 rounded-xl border flex justify-between items-center transition-all ${
        techFrozen 
          ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
          : 'bg-amber-50 border-amber-300 text-amber-950'
      }`}>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            techFrozen ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
          }`}>
            {techFrozen ? <Unlock size={24} /> : <Lock size={24} />}
          </div>
          <div>
            <div className="font-bold text-base">
              {techFrozen ? 'Technical Scores Frozen & Sealed Covers Unlocked' : 'Sealed Financial Covers Locked (Pending Technical Freeze)'}
            </div>
            <div className="text-xs opacity-85 mt-0.5">
              {techFrozen 
                ? 'Technical scores are cryptographically locked with SHA-256 token. Financial covers unlocked for QCBS evaluation.' 
                : 'Rule Clause 7.2: Financial rates remain sealed & invisible to evaluators until Technical Freeze is authorized.'
              }
            </div>
          </div>
        </div>

        {!techFrozen ? (
          <button 
            onClick={() => setTechFrozen(true)}
            className="btn pri bg-[#0F6B6E] text-white hover:bg-[#0B5254] px-5 h-10 text-xs shrink-0"
          >
            <ShieldCheck size={16} className="mr-1.5" /> Authorize Technical Freeze
          </button>
        ) : (
          <span className="st s-pass font-bold text-xs px-3 py-1">Tech Freeze Token Active</span>
        )}
      </div>

      {/* QCBS 70:30 Commercial Comparison Table */}
      <div className="card p-5 space-y-4">
        <div className="flex justify-between items-center border-b border-[#EFEDE6] pb-3">
          <div>
            <h2 className="ct flex items-center gap-2">
              <Award size={18} className="text-[#0F6B6E]" /> QCBS 70:30 Evaluated Comparative Statement
            </h2>
            <p className="text-xs text-[#6B7079] mt-0.5">Technical Score Weight: 70% • Financial Score Weight: 30%</p>
          </div>
          <span className="text-xs font-semibold text-[#0F6B6E]">4 Bidders Evaluated</span>
        </div>

        {!techFrozen ? (
          <div className="p-8 text-center bg-[#FAF9F6] border border-dashed border-[#D6D3CA] rounded-xl space-y-2">
            <Lock size={32} className="mx-auto text-amber-600" />
            <div className="font-bold text-sm text-[#1A1D21]">Financial Rates Sealed</div>
            <p className="text-xs text-[#6B7079] max-w-md mx-auto">
              Click "Authorize Technical Freeze" above to unlock financial BOQ covers and calculate QCBS 70:30 score rankings.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF9F6] text-[#4A4F57] font-semibold border-b border-[#E4E2DA]">
                  <th className="p-3">Rank</th>
                  <th className="p-3">Bidder Name</th>
                  <th className="p-3 text-right">Tech Score (70)</th>
                  <th className="p-3 text-right">Quoted Value (₹)</th>
                  <th className="p-3 text-right">Fin Score (30)</th>
                  <th className="p-3 text-right">Total Score</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Rank 1 */}
                <tr className="border-b border-[#EFEDE6] bg-emerald-50/60 font-semibold">
                  <td className="p-3 font-bold text-emerald-900">🏆 Rank 1</td>
                  <td className="p-3 text-emerald-950 font-bold">Siemens Healthcare Private Limited (MAGNETOM Sola)</td>
                  <td className="p-3 text-right font-mono">69.20</td>
                  <td className="p-3 text-right font-mono text-emerald-800 font-bold">₹372,50,00,000 (L1)</td>
                  <td className="p-3 text-right font-mono">30.00</td>
                  <td className="p-3 text-right font-mono font-bold text-emerald-900 text-sm">99.20 / 100</td>
                  <td className="p-3 text-center"><span className="st s-pass">QCBS Winner</span></td>
                </tr>

                {/* Rank 2 */}
                <tr className="border-b border-[#EFEDE6]">
                  <td className="p-3 font-bold text-[#4A4F57]">Rank 2</td>
                  <td className="p-3 text-[#1A1D21] font-medium">Philips India Limited (Ingenia Ambition X)</td>
                  <td className="p-3 text-right font-mono">68.80</td>
                  <td className="p-3 text-right font-mono">₹385,00,00,000</td>
                  <td className="p-3 text-right font-mono">29.02</td>
                  <td className="p-3 text-right font-mono font-bold text-[#1A1D21]">97.82 / 100</td>
                  <td className="p-3 text-center"><span className="st s-done">Qualified</span></td>
                </tr>

                {/* Rank 3 */}
                <tr className="border-b border-[#EFEDE6]">
                  <td className="p-3 font-bold text-[#4A4F57]">Rank 3</td>
                  <td className="p-3 text-[#1A1D21] font-medium">Wipro GE Healthcare Private Limited (SIGNA Artist)</td>
                  <td className="p-3 text-right font-mono">67.50</td>
                  <td className="p-3 text-right font-mono">₹397,00,00,000</td>
                  <td className="p-3 text-right font-mono">28.15</td>
                  <td className="p-3 text-right font-mono font-bold text-[#1A1D21]">95.65 / 100</td>
                  <td className="p-3 text-center"><span className="st text-gray-600">Qualified</span></td>
                </tr>

                {/* Disqualified */}
                <tr className="opacity-60">
                  <td className="p-3 font-bold text-red-700">Disq</td>
                  <td className="p-3 text-[#1A1D21] font-medium">Medisure Healthcare</td>
                  <td className="p-3 text-right font-mono text-red-700">Fails Turnover</td>
                  <td className="p-3 text-right font-mono text-gray-400">Sealed Cover</td>
                  <td className="p-3 text-right font-mono text-gray-400">—</td>
                  <td className="p-3 text-right font-mono font-bold text-red-700">0.00</td>
                  <td className="p-3 text-center"><span className="st s-fail">Non-Compliant</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Award Decision Panel */}
      {techFrozen && (
        <div className="card p-5 space-y-4">
          <h2 className="ct flex items-center gap-2">
            <FileCheck size={18} className="text-[#0F6B6E]" /> TEC Award Recommendation &amp; Sanction Authority
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* TEC Recommendation */}
            <div className="p-4 border border-[#E4E2DA] rounded-lg bg-white space-y-3">
              <div className="font-bold text-sm text-[#1A1D21]">1. Tender Evaluation Committee (TEC) Recommendation</div>
              <p className="text-xs text-[#6B7079]">
                Recommend contract award to <strong>Siemens Healthcare Private Limited</strong> based on highest combined QCBS score of 99.20 / 100.
              </p>
              {!awardRecommended ? (
                <button 
                  onClick={() => { setAwardRecommended(true); alert("Award recommendation recorded by TEC!"); }} 
                  className="btn pri text-xs h-9"
                >
                  <CheckCircle2 size={14} className="mr-1.5" /> Recommend Award to Siemens Healthcare
                </button>
              ) : (
                <span className="st s-pass font-bold text-xs">✓ Recommended by TEC</span>
              )}
            </div>

            {/* Competent Sanction Authority */}
            <div className="p-4 border border-[#E4E2DA] rounded-lg bg-white space-y-3">
              <div className="font-bold text-sm text-[#1A1D21]">2. Additional Director Financial Sanction</div>
              <p className="text-xs text-[#6B7079]">
                Issue formal award sanction order for Tender 014 (Group B Essential Drugs) for ₹41.20 Crore.
              </p>
              {!awardSanctioned ? (
                <button 
                  onClick={() => { 
                    if (!awardRecommended) { alert("Please complete TEC recommendation first."); return; }
                    setAwardSanctioned(true); 
                    alert("Contract Award Sanctioned successfully! Letter of Award (LoA) generated."); 
                  }} 
                  className="btn pri text-xs h-9 bg-emerald-700 hover:bg-emerald-800"
                >
                  <Award size={14} className="mr-1.5" /> Sanction Contract Award
                </button>
              ) : (
                <span className="st s-pass font-bold text-xs bg-emerald-100 text-emerald-900 border-emerald-300">
                  🏆 Contract Award Sanctioned (LoA Generated)
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
