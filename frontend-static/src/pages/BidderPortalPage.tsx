import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  UploadCloud, 
  Lock, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  FolderCheck, 
  Sparkles,
  Building2,
  Calendar
} from 'lucide-react';

export type BidderTabType = 'dashboard' | 'discovery' | 'detail' | 'workspace' | 'vault' | 'clarification';

interface BidderPortalPageProps {
  activeTab?: BidderTabType;
  setActiveTab?: (tab: BidderTabType) => void;
}

export const BidderPortalPage = ({ activeTab: propActiveTab, setActiveTab: propSetActiveTab }: BidderPortalPageProps = {}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<BidderTabType>('dashboard');
  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;
  const setActiveTab = propSetActiveTab !== undefined ? propSetActiveTab : setInternalActiveTab;
  const [selectedTenderId, setSelectedTenderId] = useState<string>('MSC/RC/DRG/2026-27/015');

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [savedTenders, setSavedTenders] = useState<string[]>(['MSC/RC/DRG/2026-27/015', 'MSC/RC/EQP/2026-27/016']);

  // Pre-Bid Clarification State
  const [questionText, setQuestionText] = useState('');
  const [clarifications, setClarifications] = useState([
    {
      q: 'Can the bidder submit equivalent WHO-GMP or NABL certification instead of state GMP?',
      a: 'Yes. Equivalent WHO-GMP / NABL certificates meeting the stated tender specifications are accepted.',
      date: '01 Oct 2026',
      status: 'Answered'
    }
  ]);

  const toggleSaveTender = (id: string) => {
    setSavedTenders(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col gap-5">
      {/* VIEW 1: BIDDER COMMAND CENTER / DASHBOARD */}
      {activeTab === 'dashboard' && (
        <div className="flex-1 min-h-0 overflow-y-auto space-y-6">
          
          {/* Welcome Card & 4 Status Badges */}
          <div className="bg-gradient-to-r from-[#14262B] to-[#1C3A42] p-6 rounded-xl text-white shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-[#27525C]">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#E0A458] text-[#14262B] font-bold text-xs px-2 py-0.5 rounded">Avantika Pharma Ltd</span>
                <span className="text-xs text-[#8FA3A7]">Reg No: L24231UP2010PLC04123</span>
              </div>
              <h1 className="text-2xl font-bold font-serif text-white mt-1">Good morning, Rajesh Kumar</h1>
              <p className="text-xs text-[#C9D4D6] mt-0.5">Authorized Representative • Preferred Category: Medical Supplies & ICU Equipment</p>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => setActiveTab('discovery')} className="btn pri text-xs h-9">
                <Search size={14} className="mr-1.5" /> Explore Tenders
              </button>
              <button onClick={() => setActiveTab('workspace')} className="btn on text-xs h-9">
                <Lock size={14} className="mr-1.5" /> My Bids
              </button>
              <button onClick={() => setActiveTab('vault')} className="btn text-xs h-9">
                <FolderCheck size={14} className="mr-1.5" /> Document Vault
              </button>
            </div>
          </div>

          {/* 4 Status Alert Badges */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center justify-between shadow-2xs">
              <div>
                <div className="text-xs font-semibold text-red-800 uppercase tracking-wider">Closing Soon</div>
                <div className="text-2xl font-bold text-red-900 mt-1">🔴 3 Bids</div>
                <div className="text-[11px] text-red-700 mt-0.5">Deadline &lt; 72 Hours</div>
              </div>
              <Clock size={28} className="text-red-400" />
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center justify-between shadow-2xs">
              <div>
                <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Clarifications</div>
                <div className="text-2xl font-bold text-amber-900 mt-1">🟡 5 Answers</div>
                <div className="text-[11px] text-amber-700 mt-0.5">Official responses posted</div>
              </div>
              <HelpCircle size={28} className="text-amber-400" />
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between shadow-2xs">
              <div>
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Active Bids</div>
                <div className="text-2xl font-bold text-emerald-900 mt-1">🟢 8 Active</div>
                <div className="text-[11px] text-emerald-700 mt-0.5">Under evaluation</div>
              </div>
              <ShieldCheck size={28} className="text-emerald-400" />
            </div>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl flex items-center justify-between shadow-2xs">
              <div>
                <div className="text-xs font-semibold text-purple-800 uppercase tracking-wider">Document Expiry</div>
                <div className="text-2xl font-bold text-purple-900 mt-1">⚠️ 2 Expiring</div>
                <div className="text-[11px] text-purple-700 mt-0.5">ISO 9001 &amp; MSME</div>
              </div>
              <AlertTriangle size={28} className="text-purple-400" />
            </div>
          </div>

          {/* Recommended & Active Bids Section */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Recommended Tenders (2 Cols) */}
            <div className="col-span-2 space-y-4">
              <div className="card p-5 space-y-4">
                <div className="flex justify-between items-center border-b border-[#EFEDE6] pb-3">
                  <div>
                    <h2 className="ct flex items-center gap-2">
                      <Sparkles size={18} className="text-[#0F6B6E]" /> AI Recommended for You (17 Matches)
                    </h2>
                    <p className="text-xs text-[#6B7079] mt-0.5">Matched against profile: Turnover ≥ ₹15Cr • MSME Eligible • Medical Category</p>
                  </div>
                  <button onClick={() => setActiveTab('discovery')} className="text-xs text-[#0F6B6E] font-semibold hover:underline">View All</button>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      id: 'MSC/RC/DRG/2026-27/015',
                      title: 'Procurement of ICU Medical Devices & Patient Monitors',
                      dept: 'UP Medical Supplies Corporation Ltd',
                      value: '₹28,50,00,000',
                      deadline: '20 Oct 2026',
                      match: '98% Profile Match',
                      tags: ['MSME Exempt', 'Make In India Class-I']
                    },
                    {
                      id: 'MSC/RC/DRG/2026-27/014',
                      title: 'Supply of Essential Drugs & Formulations for UPMSCL',
                      dept: 'Department of Health & Family Welfare',
                      value: '₹45,20,00,000',
                      deadline: '15 Oct 2026',
                      match: '95% Profile Match',
                      tags: ['QCBS 70:30', 'WHO-GMP Required']
                    },
                    {
                      id: 'MSC/RC/EQP/2026-27/016',
                      title: 'Procurement of Diagnostic Imaging & CT Scanners',
                      dept: 'State Health Society Uttar Pradesh',
                      value: '₹12,50,00,000',
                      deadline: '05 Nov 2026',
                      match: '89% Profile Match',
                      tags: ['L1 Evaluation', 'Turnover ≥ ₹10Cr']
                    }
                  ].map(t => (
                    <div key={t.id} className="p-4 border border-[#E4E2DA] rounded-lg hover:border-[#0F6B6E] transition bg-white space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-0.5">
                          <span className="font-mono text-xs font-bold text-[#0F6B6E]">{t.id}</span>
                          <h3 className="font-semibold text-sm text-[#1A1D21]">{t.title}</h3>
                          <div className="text-xs text-[#6B7079] flex items-center gap-3">
                            <span><Building2 size={12} className="inline mr-1" />{t.dept}</span>
                            <span><Calendar size={12} className="inline mr-1" />Closing: {t.deadline}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-gray-900 block">{t.value}</span>
                          <span className="st s-pass text-[11px] py-0.5">{t.match}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#F1EFE9]">
                        <div className="flex gap-1.5">
                          {t.tags.map(tag => (
                            <span key={tag} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">{tag}</span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => toggleSaveTender(t.id)} className="btn text-xs px-2.5 h-8">
                            <Bookmark size={13} className={savedTenders.includes(t.id) ? 'fill-[#0F6B6E] text-[#0F6B6E]' : ''} />
                          </button>
                          <button 
                            onClick={() => { setSelectedTenderId(t.id); setActiveTab('detail'); }} 
                            className="btn pri text-xs h-8"
                          >
                            Inspect &amp; Apply →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Expiring Docs & Saved Tenders Sidebar (1 Col) */}
            <div className="space-y-4">
              
              {/* Document Expiry Card */}
              <div className="card p-4 space-y-3 bg-purple-50/50 border-purple-200">
                <h3 className="font-semibold text-xs uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
                  <AlertTriangle size={15} className="text-purple-600" /> Vault Document Expiry Warning
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="bg-white p-2.5 rounded border border-purple-200 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-purple-950">MSME Udyam Certificate</div>
                      <div className="text-[11px] text-purple-700">Expires in 14 days (16 Oct 2026)</div>
                    </div>
                    <button onClick={() => setActiveTab('vault')} className="text-[11px] font-bold text-purple-900 underline">Renew</button>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-purple-200 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-purple-950">ISO 9001 Quality Certificate</div>
                      <div className="text-[11px] text-purple-700">Expires in 31 days (02 Nov 2026)</div>
                    </div>
                    <button onClick={() => setActiveTab('vault')} className="text-[11px] font-bold text-purple-900 underline">Renew</button>
                  </div>
                </div>
              </div>

              {/* Saved Tenders Quick Watch */}
              <div className="card p-4 space-y-3">
                <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-700 flex items-center justify-between">
                  <span>Watchlist ({savedTenders.length})</span>
                  <Bookmark size={14} className="text-[#0F6B6E]" />
                </h3>
                <div className="space-y-2 text-xs">
                  {savedTenders.map(stId => (
                    <div key={stId} className="p-2.5 bg-[#FAF9F6] border border-[#E4E2DA] rounded flex justify-between items-center">
                      <div>
                        <div className="font-mono font-bold text-[#0F6B6E]">{stId}</div>
                        <div className="text-[11px] text-gray-500">Closing in 12 days 🟡</div>
                      </div>
                      <button onClick={() => { setSelectedTenderId(stId); setActiveTab('detail'); }} className="text-xs font-semibold text-[#0F6B6E] hover:underline">View</button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* VIEW 2: ADVANCED TENDER DISCOVERY */}
      {activeTab === 'discovery' && (
        <div className="flex-1 min-h-0 overflow-y-auto space-y-5">
          <div className="flex flex-col gap-1">
            <h1 className="h1">Tender Discovery &amp; Profile Matcher</h1>
            <p className="lead">Multi-parameter search across government tenders with automated MSME, Start-up, and Make-in-India eligibility filters.</p>
          </div>

          {/* Search & Multi-Filter Bar */}
          <div className="card p-5 space-y-4">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3 text-gray-400" size={18} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Keyword, Tender ID, Organisation, Department, or Product Category..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#CFCBC0] rounded-lg text-sm focus:outline-none focus:border-[#0F6B6E]"
                />
              </div>
              <button className="btn pri text-sm">
                <Filter size={15} className="mr-1.5" /> Apply Filters
              </button>
            </div>

            {/* Filter Pills */}
            <div className="grid grid-cols-4 gap-3 text-xs">
              <div>
                <label className="lbl block mb-1">Category</label>
                <select className="w-full bg-white border border-[#CFCBC0] rounded p-2 text-xs">
                  <option>All Categories</option>
                  <option>Medical Equipment &amp; ICU</option>
                  <option>Drugs &amp; Pharmaceuticals</option>
                  <option>IT Services &amp; Cloud</option>
                </select>
              </div>
              <div>
                <label className="lbl block mb-1">State / Location</label>
                <select className="w-full bg-white border border-[#CFCBC0] rounded p-2 text-xs">
                  <option>All India (UP, Delhi, KA)</option>
                  <option>Uttar Pradesh</option>
                  <option>Karnataka</option>
                  <option>Delhi NCR</option>
                </select>
              </div>
              <div>
                <label className="lbl block mb-1">Tender Value Range</label>
                <select className="w-full bg-white border border-[#CFCBC0] rounded p-2 text-xs">
                  <option>Any Value</option>
                  <option>₹50L – ₹5Cr</option>
                  <option>₹5Cr – ₹50Cr</option>
                  <option>&gt; ₹50Cr</option>
                </select>
              </div>
              <div>
                <label className="lbl block mb-1">Eligibility Preference</label>
                <select className="w-full bg-white border border-[#CFCBC0] rounded p-2 text-xs">
                  <option>MSME Exemption Allowed</option>
                  <option>Make in India Class-I</option>
                  <option>Startup Exemption</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="card p-5 space-y-3">
            <div className="flex justify-between items-center text-xs text-[#6B7079] border-b border-[#EFEDE6] pb-2">
              <span>Showing 4 active tenders matching your filters</span>
              <span>Sorted by Profile Match %</span>
            </div>

            {[
              {
                id: 'MSC/RC/DRG/2026-27/015',
                title: 'Procurement of ICU Medical Devices & Patient Monitors',
                org: 'UP Medical Supplies Corporation Ltd',
                value: '₹28,50,00,000',
                emd: '₹5,70,000 (MSME Exempt)',
                closing: '20 Oct 2026 | 5:00 PM',
                type: 'QCBS (70:30)',
                eligible: true
              },
              {
                id: 'MSC/RC/DRG/2026-27/014',
                title: 'Supply of Essential Drugs & Formulations for UPMSCL',
                org: 'UP Medical Supplies Corporation Ltd',
                value: '₹45,20,00,000',
                emd: '₹9,04,000',
                closing: '15 Oct 2026 | 5:00 PM',
                type: 'QCBS (80:20)',
                eligible: true
              }
            ].map(item => (
              <div key={item.id} className="p-4 border border-[#E4E2DA] rounded-lg bg-white hover:border-[#0F6B6E] transition space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#0F6B6E]">{item.id}</span>
                    <h3 className="font-semibold text-base text-[#1A1D21]">{item.title}</h3>
                    <div className="text-xs text-[#6B7079] mt-0.5">{item.org} • Bid Type: {item.type}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-gray-900 block">{item.value}</span>
                    <span className="st s-pass text-xs">Appears Eligible 🟢</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-[#F1EFE9]">
                  <div className="flex gap-4 text-[#6B7079]">
                    <span>EMD: <strong className="text-[#1A1D21]">{item.emd}</strong></span>
                    <span>Closing: <strong className="text-[#1A1D21]">{item.closing}</strong></span>
                  </div>
                  <button 
                    onClick={() => { setSelectedTenderId(item.id); setActiveTab('detail'); }}
                    className="btn pri text-xs h-8"
                  >
                    Open Structured Summary →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: STRUCTURED TENDER SUMMARY & AI INTELLIGENCE */}
      {activeTab === 'detail' && (
        <div className="flex-1 min-h-0 overflow-y-auto space-y-6">
          
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#E4E2DA] pb-4">
            <div>
              <span className="font-mono font-bold text-xs text-[#0F6B6E]">TENDER ID: {selectedTenderId}</span>
              <h1 className="h1 text-2xl mt-0.5">Procurement of ICU Medical Devices &amp; Patient Monitors</h1>
              <p className="text-xs text-[#6B7079] mt-1">UP Medical Supplies Corporation Ltd • Lucknow, Uttar Pradesh</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => toggleSaveTender(selectedTenderId)} className="btn text-xs">
                <Bookmark size={14} className={savedTenders.includes(selectedTenderId) ? 'fill-[#0F6B6E] text-[#0F6B6E] mr-1.5' : 'mr-1.5'} /> 
                {savedTenders.includes(selectedTenderId) ? 'Saved' : 'Save Tender'}
              </button>
              <button onClick={() => setActiveTab('workspace')} className="btn pri text-xs">
                Participate in Tender →
              </button>
            </div>
          </div>

          {/* Structured Summary Cards */}
          <div className="grid grid-cols-4 gap-4 text-xs">
            <div className="card p-3.5 space-y-1">
              <span className="lbl">Tender Value</span>
              <div className="text-lg font-bold text-gray-900">₹28,50,00,000</div>
              <div className="text-[11px] text-gray-500">Estimated Project Value</div>
            </div>

            <div className="card p-3.5 space-y-1">
              <span className="lbl">EMD Deposit</span>
              <div className="text-lg font-bold text-emerald-700">₹5,70,000</div>
              <div className="text-[11px] text-emerald-800 font-medium">✓ MSME Exemption Available</div>
            </div>

            <div className="card p-3.5 space-y-1">
              <span className="lbl">Bid Closing</span>
              <div className="text-lg font-bold text-red-700">20 Oct 2026</div>
              <div className="text-[11px] text-gray-500">5:00 PM IST</div>
            </div>

            <div className="card p-3.5 space-y-1">
              <span className="lbl">Evaluation Method</span>
              <div className="text-lg font-bold text-[#0F6B6E]">QCBS (70:30)</div>
              <div className="text-[11px] text-gray-500">70% Tech / 30% Financial</div>
            </div>
          </div>

          {/* ELIGIBILITY CHECKER (Can I Bid?) */}
          <div className="card p-5 space-y-4 bg-emerald-50/40 border-emerald-200">
            <div className="flex justify-between items-center border-b border-emerald-200 pb-3">
              <div>
                <h2 className="ct text-emerald-950 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-600" /> Automated Eligibility Checker (Can I Bid?)
                </h2>
                <p className="text-xs text-emerald-800 mt-0.5">Matched Avantika Pharma's Profile against Tender Requirements</p>
              </div>
              <span className="st s-pass text-sm font-bold px-3 py-1">🟢 Appears Eligible</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="lbl text-emerald-900 font-bold">Your Company Credentials</span>
                <div className="bg-white p-3 rounded border border-emerald-200 space-y-1.5 font-medium">
                  <div>• Turnover: <strong className="text-gray-900">₹22.47 Cr / yr average</strong></div>
                  <div>• Experience: <strong className="text-gray-900">7 Years in Healthcare</strong></div>
                  <div>• Similar Projects: <strong className="text-gray-900">4 Executed Govt Orders</strong></div>
                  <div>• Quality Certs: <strong className="text-gray-900">WHO-GMP &amp; ISO 9001</strong></div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="lbl text-emerald-900 font-bold">Tender Requirements Comparison</span>
                <div className="bg-white p-3 rounded border border-emerald-200 space-y-1.5">
                  <div className="flex justify-between"><span>Average Turnover ≥ ₹20 Cr</span> <span className="font-bold text-green-700">✓ Pass</span></div>
                  <div className="flex justify-between"><span>Experience ≥ 5 Years</span> <span className="font-bold text-green-700">✓ Pass</span></div>
                  <div className="flex justify-between"><span>2+ Govt Orders ≥ ₹2 Cr</span> <span className="font-bold text-green-700">✓ Pass</span></div>
                  <div className="flex justify-between"><span>ISO 9001 Certification</span> <span className="font-bold text-green-700">✓ Pass</span></div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-emerald-800 italic bg-white p-2.5 rounded border border-emerald-200">
              * Note: Based on information provided in your profile, you appear to satisfy the listed eligibility criteria. Final determination rests with the procuring authority.
            </div>
          </div>

          {/* AI DOCUMENT INTELLIGENCE ("Understand Tender") */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* AI Summary Card */}
            <div className="card p-5 space-y-3">
              <h3 className="ct flex items-center gap-2">
                <Zap size={18} className="text-amber-500" /> AI Document Intelligence Summary
              </h3>
              <div className="space-y-2 text-xs text-[#2F343B] leading-relaxed">
                <div className="p-2.5 bg-[#FAF9F6] rounded border border-[#EFEDE6]">
                  <strong>📌 Scope:</strong> Supply, installation, and 3-year warranty commissioning of ICU Patient Monitors (50 units) &amp; Infusion Pumps (100 units).
                </div>
                <div className="p-2.5 bg-[#FAF9F6] rounded border border-[#EFEDE6]">
                  <strong>📌 Payment Terms:</strong> 80% on delivery &amp; physical verification, 20% post commissioning report sign-off.
                </div>
                <div className="p-2.5 bg-[#FAF9F6] rounded border border-[#EFEDE6]">
                  <strong>📌 Penalties:</strong> 0.5% per week delay subject to maximum 10% contract value.
                </div>
              </div>
            </div>

            {/* Compliance Matrix */}
            <div className="card p-5 space-y-3">
              <h3 className="ct flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" /> Compliance Matrix (32 Requirements)
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between bg-emerald-50 p-2.5 rounded text-emerald-900 border border-emerald-200">
                  <span>✓ 28 Criteria Satisfied</span>
                  <span className="font-bold">87.5% Ready</span>
                </div>
                <div className="flex justify-between bg-amber-50 p-2.5 rounded text-amber-900 border border-amber-200">
                  <span>⚠ 3 Require Document Evidence Attachment</span>
                  <span className="font-bold">Pending</span>
                </div>
                <div className="flex justify-between bg-red-50 p-2.5 rounded text-red-900 border border-red-200">
                  <span>❌ 1 Startup Exemption Unavailable</span>
                  <span className="font-bold">Standard Track</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* VIEW 4: BID PREPARATION WORKSPACE & SEALED VAULT */}
      {activeTab === 'workspace' && (
        <div className="flex-1 min-h-0 overflow-y-auto space-y-6 max-w-4xl mx-auto">
          
          <div className="flex justify-between items-center border-b border-[#E4E2DA] pb-3">
            <div>
              <h1 className="h1 text-xl">Bid Preparation Workspace</h1>
              <p className="text-xs text-[#6B7079] mt-0.5">Tender: <span className="font-mono font-bold text-[#0F6B6E]">{selectedTenderId}</span></p>
            </div>
            <span className="st s-pass font-bold">Progress: 75% Complete</span>
          </div>

          {/* Step Progress Workspace Steps */}
          <div className="card p-5 space-y-4">
            <h3 className="ct">Submission Checklist &amp; Document Selection</h3>

            <div className="space-y-3 text-xs">
              
              {/* Step 1: Company Profile */}
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <div>
                    <div className="font-bold text-emerald-950 text-sm">1. Company Profile &amp; Registration</div>
                    <div className="text-[11px] text-emerald-700">Avantika Pharma Ltd • GSTIN: 09AAACA1234F1Z5</div>
                  </div>
                </div>
                <span className="st s-done text-[11px]">Completed</span>
              </div>

              {/* Step 2: Technical Docs from Vault */}
              <div className="p-3.5 bg-white border border-[#E4E2DA] rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FolderCheck size={18} className="text-[#0F6B6E]" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">2. Select Technical Qualification Documents (from Vault)</div>
                      <div className="text-[11px] text-gray-500">Auto-attach verified credentials without re-uploading</div>
                    </div>
                  </div>
                  <button onClick={() => setActiveTab('vault')} className="text-xs text-[#0F6B6E] font-semibold hover:underline">+ Open Vault</button>
                </div>

                <div className="space-y-2 bg-[#FAF9F6] p-3 rounded border border-[#EFEDE6]">
                  {[
                    { key: 'gst', label: 'GST Registration Certificate', valid: 'Valid till 31 Mar 2027' },
                    { key: 'pan', label: 'PAN Card Copy', valid: 'Permanent' },
                    { key: 'msme', label: 'MSME Udyam Exemption Certificate', valid: 'Valid till 16 Oct 2026' },
                    { key: 'iso', label: 'WHO-GMP / ISO 9001 Quality Certificate', valid: 'Valid till 02 Nov 2026' },
                    { key: 'balanceSheet', label: 'Audited CA Turnover Certificate (Last 3 Yrs)', valid: 'Verified' }
                  ].map(doc => (
                    <label key={doc.key} className="flex items-center justify-between p-2 bg-white rounded border border-gray-200 text-xs cursor-pointer">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked={true} className="rounded accent-[#0F6B6E]" />
                        <span className="font-medium text-gray-800">{doc.label}</span>
                      </div>
                      <span className="text-[11px] text-green-700 font-semibold">{doc.valid}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Financial BOQ */}
              <div className="p-3.5 bg-white border border-[#E4E2DA] rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Lock size={18} className="text-emerald-600" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">3. Financial BOQ (Client-Side Encrypted Cover)</div>
                      <div className="text-[11px] text-amber-800 font-medium">Prices remain sealed &amp; invisible to evaluators until Technical Freeze</div>
                    </div>
                  </div>
                  <span className="st s-pass text-[11px]">Sealed Cover</span>
                </div>

                <table className="w-full text-left border-collapse border border-gray-200 rounded">
                  <thead>
                    <tr className="bg-[#FAF9F6] text-xs font-semibold text-gray-600 border-b">
                      <th className="p-2">Item Description</th>
                      <th className="p-2">Qty</th>
                      <th className="p-2">Unit Rate (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 text-xs">ICU Patient Monitor 12-inch</td>
                      <td className="p-2 text-xs">50</td>
                      <td className="p-2"><input type="number" defaultValue={245000} className="border rounded px-2 py-1 text-xs w-32 font-mono" /></td>
                    </tr>
                    <tr>
                      <td className="p-2 text-xs">Syringe Infusion Pump</td>
                      <td className="p-2 text-xs">100</td>
                      <td className="p-2"><input type="number" defaultValue={65000} className="border rounded px-2 py-1 text-xs w-32 font-mono" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            {/* Submission Action */}
            <div className="pt-3 border-t border-[#EFEDE6] flex justify-between items-center">
              <span className="text-xs text-gray-500">Digital Signature: Registered (DSC Token Active)</span>
              <button 
                onClick={() => alert("Bid successfully signed and vaulted! SHA-256 Receipt: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855")} 
                className="btn pri text-sm px-6 h-10"
              >
                <Lock size={16} className="mr-1.5" /> Sign &amp; Vault Bid (Generate Receipt)
              </button>
            </div>
          </div>

        </div>
      )}

      {/* VIEW 5: COMPANY DOCUMENT VAULT & EXPIRY MANAGEMENT */}
      {activeTab === 'vault' && (
        <div className="flex-1 min-h-0 overflow-y-auto space-y-5">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="h1">Reusable Company Document Vault</h1>
              <p className="lead">Maintain company compliance credentials once and reuse them across all bid submissions.</p>
            </div>
            <button className="btn pri text-xs">
              <UploadCloud size={14} className="mr-1.5" /> Upload New Document
            </button>
          </div>

          <div className="card p-5 space-y-4">
            <h2 className="ct">Active Vault Credentials</h2>

            <div className="space-y-3 text-xs">
              {[
                { name: 'GST Registration Certificate', category: 'Taxation', uploadDate: '12 Aug 2026', expiry: '31 Mar 2027', status: 'Valid 🟢' },
                { name: 'PAN Card Copy', category: 'Taxation', uploadDate: '12 Aug 2026', expiry: 'Permanent', status: 'Valid 🟢' },
                { name: 'MSME Udyam Exemption Certificate', category: 'Exemption', uploadDate: '15 Aug 2026', expiry: '16 Oct 2026', status: 'Expiring in 14 days ⚠️' },
                { name: 'ISO 9001 Quality Certificate', category: 'Quality', uploadDate: '10 Aug 2026', expiry: '02 Nov 2026', status: 'Expiring in 31 days ⚠️' },
                { name: 'Audited CA Turnover Certificate (Last 3 Yrs)', category: 'Financial', uploadDate: '20 Aug 2026', expiry: '31 Mar 2027', status: 'Valid 🟢' }
              ].map(doc => (
                <div key={doc.name} className="p-3.5 border border-[#E4E2DA] rounded-lg bg-white flex justify-between items-center">
                  <div className="space-y-0.5">
                    <div className="font-semibold text-sm text-[#1A1D21]">{doc.name}</div>
                    <div className="text-[11px] text-[#6B7079]">Category: {doc.category} • Uploaded: {doc.uploadDate}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-xs font-bold block">{doc.expiry}</span>
                      <span className="text-[11px] font-medium">{doc.status}</span>
                    </div>
                    <button className="btn text-xs px-3 h-8">Download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 6: PRE-BID CLARIFICATIONS */}
      {activeTab === 'clarification' && (
        <div className="flex-1 min-h-0 overflow-y-auto space-y-5 max-w-4xl mx-auto">
          <div className="flex flex-col gap-1">
            <h1 className="h1">Pre-Bid Clarification Workflow</h1>
            <p className="lead">Submit pre-bid technical queries and inspect official published responses from the procuring authority.</p>
          </div>

          {/* Ask Question Form */}
          <div className="card p-5 space-y-3">
            <h2 className="ct">Submit Pre-Bid Query</h2>
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="e.g. Can the bidder submit equivalent WHO-GMP / NABL quality certifications instead of state GMP?"
              className="w-full h-20 border border-[#D6D3CA] rounded-lg p-3 text-xs focus:outline-none focus:border-[#0F6B6E]"
            />
            <div className="flex justify-end">
              <button 
                onClick={() => {
                  if (questionText.trim()) {
                    setClarifications(prev => [{ q: questionText, a: 'Awaiting official response from committee.', date: 'Today', status: 'Pending' }, ...prev]);
                    setQuestionText('');
                  }
                }}
                className="btn pri text-xs px-5 h-9"
              >
                Submit Pre-Bid Clarification
              </button>
            </div>
          </div>

          {/* Published Answers */}
          <div className="card p-5 space-y-4">
            <h2 className="ct">Official Published Responses</h2>
            <div className="space-y-3 text-xs">
              {clarifications.map((c, i) => (
                <div key={i} className="p-4 border border-[#E4E2DA] rounded-lg bg-white space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="font-semibold text-sm text-[#1A1D21]">Q: {c.q}</div>
                    <span className={`st ${c.status === 'Answered' ? 's-pass' : 's-check'} text-[11px]`}>{c.status}</span>
                  </div>
                  <div className="p-3 bg-[#FAF9F6] border border-[#EFEDE6] rounded text-[#2F343B]">
                    <strong>Official Response:</strong> {c.a}
                  </div>
                  <div className="text-[11px] text-[#6B7079]">Published Date: {c.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
