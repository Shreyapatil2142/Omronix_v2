import { Link } from 'react-router-dom';
import { Check, Sparkles, FolderGit2 } from 'lucide-react';
import { usePersona } from '../PersonaContext';

export const OverviewPage = () => {
  const { selectedTender } = usePersona();

  return (
    <div className="flex-1 flex flex-col gap-6 max-w-[1120px]">
      
      {/* Portfolio Top Summary Banner */}
      <div className="bg-gradient-to-r from-[#14262B] to-[#1C3A42] p-4 px-6 rounded-xl text-white shadow-xs flex justify-between items-center border border-[#27525C]">
        <div className="flex items-center gap-3">
          <FolderGit2 size={24} className="text-[#E0A458]" />
          <div>
            <div className="font-bold text-sm text-white">Active Procurement Portfolio (4 Tenders)</div>
            <div className="text-xs text-[#C9D4D6]">Showing evaluation workspace for: <span className="font-semibold text-[#E0A458]">{selectedTender.code}</span></div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-xs text-[#C9D4D6]">
          <div><span className="font-bold text-white text-sm block">56</span> Bids Under Eval</div>
          <div><span className="font-bold text-white text-sm block">14</span> Officer Action Items</div>
          <div><span className="font-bold text-emerald-400 text-sm block">84,200</span> Pages Extracted</div>
        </div>
      </div>

      {/* Selected Tender Title Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-[#0F6B6E] text-white font-bold text-xs px-2 py-0.5 rounded">{selectedTender.code}</span>
            <span className="text-xs font-semibold text-[#6B7079]">{selectedTender.dept}</span>
            <span className="st s-pass text-[11px]">Method: {selectedTender.method} ({selectedTender.qcbsRatio})</span>
          </div>
          <h1 className="h1 text-2xl mt-0.5">{selectedTender.title}</h1>
          <p className="lead text-xs">Estimated Value: <strong className="text-[#1A1D21] font-mono">{selectedTender.value}</strong> • Published: {selectedTender.publishedDate}</p>
        </div>

        <Link to="/tenders/new" className="btn pri text-xs font-semibold px-4 h-9 shadow-2xs !text-white flex items-center gap-1.5 shrink-0">
          + Create New Tender
        </Link>
      </div>

      {/* AI Executive Summary Card */}
      <div className="bg-white p-4 rounded-xl border border-[#E4E2DA] shadow-2xs flex items-start gap-3">
        <div className="p-2 bg-[#E8F1F0] text-[#0F6B6E] rounded-lg shrink-0 mt-0.5">
          <Sparkles size={20} />
        </div>
        <div className="space-y-1 text-xs">
          <div className="font-bold text-[#1A1D21] text-sm flex items-center gap-2">
            AI Evaluation Assistant Executive Summary
            <span className="text-[10px] font-medium bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full">Deterministic Grounding 100%</span>
          </div>
          <p className="text-[#4A4F57] leading-relaxed">
            The AI engine processed <strong>3 submitted bids (Wipro GE, Philips India, Siemens Healthcare)</strong> against 8 explicit tender conditions. 
            All 3 bidders meet essential mandatory conditions, but <strong>Wipro GE (4 items)</strong>, <strong>Philips India (3 items)</strong>, and <strong>Siemens Healthcare (2 items)</strong> require officer confirmation on EMD exemption, reseller past performance, or US FDA/CDSCO equivalence.
          </p>
        </div>
      </div>

      {/* Progress Flow Card */}
      <section className="card p-6 px-7">
        <div className="flex items-center w-full justify-between">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-2 text-center w-[120px]">
            <div className="w-[28px] h-[28px] rounded-full bg-[#0F6B6E] border-2 border-[#0F6B6E] flex items-center justify-center">
              <Check size={14} className="text-white stroke-[3]" />
            </div>
            <div className="text-[14px]">Tender published</div>
            <div className="text-[13px] text-[#6B7079]">15 Jan 2026</div>
          </div>

          <div className="h-[2px] flex-grow bg-[#DEDBD1] mb-[26px]"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-2 text-center w-[120px]">
            <div className="w-[28px] h-[28px] rounded-full bg-[#0F6B6E] border-2 border-[#0F6B6E] flex items-center justify-center">
              <Check size={14} className="text-white stroke-[3]" />
            </div>
            <div className="text-[14px]">3 bids received</div>
            <div className="text-[13px] text-[#6B7079]">12 Feb 2026</div>
          </div>

          <div className="h-[2px] flex-grow bg-[#DEDBD1] mb-[26px]"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-2 text-center w-[120px]">
            <div className="w-[28px] h-[28px] rounded-full bg-[#0F6B6E] border-2 border-[#0F6B6E] flex items-center justify-center">
              <Check size={14} className="text-white stroke-[3]" />
            </div>
            <div className="text-[14px]">Documents read</div>
            <div className="text-[13px] text-[#6B7079]">14 Feb 2026</div>
          </div>

          <div className="h-[2px] flex-grow bg-[#DEDBD1] mb-[26px]"></div>

          {/* Step 4 (Active) */}
          <div className="flex flex-col items-center gap-2 text-center w-[120px]">
            <div className="w-[28px] h-[28px] rounded-full border-2 border-[#0F6B6E] bg-white flex items-center justify-center shadow-[0_0_0_4px_#DCEBEA]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F6B6E]"></span>
            </div>
            <div className="text-[14px] font-semibold">You are checking</div>
            <div className="text-[13px] text-[#0F6B6E] font-medium">now</div>
          </div>

          <div className="h-[2px] flex-grow bg-[#DEDBD1] mb-[26px]"></div>

          {/* Step 5 */}
          <div className="flex flex-col items-center gap-2 text-center w-[120px]">
            <div className="w-[28px] h-[28px] rounded-full border-2 border-[#C9C5B9] bg-white flex items-center justify-center"></div>
            <div className="text-[14px] text-[#6B7079]">Committee meeting</div>
            <div className="text-[13px] text-[#6B7079]">28 Feb 2026</div>
          </div>

          <div className="h-[2px] flex-grow bg-[#DEDBD1] mb-[26px]"></div>

          {/* Step 6 */}
          <div className="flex flex-col items-center gap-2 text-center w-[120px]">
            <div className="w-[28px] h-[28px] rounded-full border-2 border-[#C9C5B9] bg-white flex items-center justify-center"></div>
            <div className="text-[14px] text-[#6B7079]">Award</div>
            <div className="text-[13px] text-[#6B7079]">—</div>
          </div>

        </div>
      </section>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-3 gap-5">
        <div className="card p-[22px] px-[26px]">
          <div className="text-[15px] text-[#4A4F57]">Conditions checked by the system</div>
          <div className="text-[40px] font-semibold leading-tight my-1">24</div>
          <div className="text-[14px] text-[#6B7079]">3 bidders × 8 mandatory conditions</div>
        </div>

        <div className="card p-[22px] px-[26px]">
          <div className="text-[15px] text-[#4A4F57]">Waiting for your decision</div>
          <div className="text-[40px] font-semibold leading-tight my-1 text-[#8A4B08]">9</div>
          <div className="text-[14px] text-[#6B7079]">items need officer judgment across 3 bids</div>
        </div>

        <div className="card p-[22px] px-[26px]">
          <div className="text-[15px] text-[#4A4F57]">Reading time saved</div>
          <div className="text-[40px] font-semibold leading-tight my-1">1,379</div>
          <div className="text-[14px] text-[#6B7079]">pages read &amp; indexed across 3 PDF callsets</div>
        </div>
      </div>

      {/* Action Tasks Card */}
      <section className="card overflow-hidden">
        <div className="p-4 px-6 flex items-center justify-between border-b border-[#F1EFE9]">
          <h2 className="ct">What needs you today</h2>
          <Link to="/bidders" className="text-[15px] text-[#0F6B6E] font-medium hover:underline">See all bidders</Link>
        </div>

        {/* Task 1 */}
        <Link to="/evidence" className="flex items-center gap-4 p-4 px-6 border-t border-[#F1EFE9] first:border-0 hover:bg-[#FAF9F6] text-[#1A1D21] no-underline group transition-colors">
          <span className="st s-check">Needs check</span>
          <span className="flex-grow min-w-0">
            <span className="text-[16px] font-medium group-hover:text-[#0F6B6E]">Wipro GE Healthcare (SIGNA Artist) — past performance &amp; reseller supply check</span>
            <br />
            <span className="text-[14px] text-[#6B7079]">4 conditions need decision: EMD exemption proof, reseller supplies count, and US FDA vs CDSCO equivalence</span>
          </span>
          <span className="btn group-hover:bg-[#0F6B6E] group-hover:text-white group-hover:border-[#0F6B6E]">Open</span>
        </Link>

        {/* Task 2 */}
        <Link to="/bidders" className="flex items-center gap-4 p-4 px-6 border-t border-[#F1EFE9] hover:bg-[#FAF9F6] text-[#1A1D21] no-underline group transition-colors">
          <span className="st s-check">Needs check</span>
          <span className="flex-grow min-w-0">
            <span className="text-[16px] font-medium group-hover:text-[#0F6B6E]">Philips India Limited (Ingenia Ambition X) — turnover calculation window</span>
            <br />
            <span className="text-[14px] text-[#6B7079]">Confirm turnover financial years window (FY 2021-24 vs 2022-25) for ₹119 Cr threshold check</span>
          </span>
          <span className="btn group-hover:bg-[#0F6B6E] group-hover:text-white group-hover:border-[#0F6B6E]">Open</span>
        </Link>

        {/* Task 3 */}
        <Link to="/bidders" className="flex items-center gap-4 p-4 px-6 border-t border-[#F1EFE9] hover:bg-[#FAF9F6] text-[#1A1D21] no-underline group transition-colors">
          <span className="st s-check">Needs check</span>
          <span className="flex-grow min-w-0">
            <span className="text-[16px] font-medium group-hover:text-[#0F6B6E]">Siemens Healthcare (MAGNETOM Sola) — past performance quantity check</span>
            <br />
            <span className="text-[14px] text-[#6B7079]">10% of 31 units equals 3.1 units. Confirm whether 3 installed units meet the past performance rule</span>
          </span>
          <span className="btn group-hover:bg-[#0F6B6E] group-hover:text-white group-hover:border-[#0F6B6E]">Open</span>
        </Link>
      </section>
    </div>
  );
};
