import { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { usePersona, activeTenders } from '../PersonaContext';
import { personas } from '../api';
import { Shield } from 'lucide-react';
import { BidderPortalPage, type BidderTabType } from '../pages/BidderPortalPage';

export const AppLayout = () => {
  const { persona, setPersona, selectedTender, setSelectedTender } = usePersona();
  const location = useLocation();
  const [bidderTab, setBidderTab] = useState<BidderTabType>('dashboard');

  const isOfficer = persona.id === 'officer';

  const getHeaderTitle = () => {
    if (!isOfficer) {
      if (bidderTab === 'dashboard') return 'Command center';
      if (bidderTab === 'discovery') return 'Tender discovery';
      if (bidderTab === 'detail') return 'Tender intelligence';
      if (bidderTab === 'workspace') return 'Bid workspace';
      if (bidderTab === 'vault') return 'Document vault';
      if (bidderTab === 'clarification') return 'Pre-bid query';
      return 'Bidder Portal';
    }
    const path = location.pathname;
    if (path === '/' || path === '/overview') return 'Overview';
    if (path.includes('/rules')) return 'Tender rules';
    if (path.includes('/bidders')) return 'Bidder check';
    if (path.includes('/evidence')) return 'Evidence and decision';
    if (path.includes('/clarifications')) return 'Pre-bid queries & corrigendum';
    if (path.includes('/commercial-award')) return 'Commercial BOQ & award';
    if (path.includes('/filesystem')) return 'Document vault';
    return 'Overview';
  };

  return (
    <div className="flex h-screen bg-[#F4F3EE] font-sans text-[#1A1D21] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[246px] shrink-0 bg-[#14262B] text-[#C9D4D6] flex flex-col p-6 gap-5.5 select-none">
        
        {/* Brand Mark */}
        <div className="flex items-center gap-3 px-1.5">
          <div className="w-[38px] h-[38px] rounded-[9px] bg-[#E0A458] text-[#14262B] flex items-center justify-center font-bold text-sm">
            AI
          </div>
          <div>
            <div className="font-semibold text-white text-base leading-tight">AI-PPTIP</div>
            <div className="text-xs text-[#8FA3A7]">Tender Intelligence</div>
          </div>
        </div>

        {/* Navigation Links based on Role (RBAC) */}
        {isOfficer ? (
          <nav className="flex flex-col gap-1 mt-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center gap-2.5 px-3 h-[46px] rounded-[7px] text-[15px] transition-colors text-[#C9D4D6] no-underline ${
                  isActive ? 'bg-[#27525C] text-white font-semibold' : 'hover:bg-[#1C3A42] hover:text-white'
                }`
              }
            >
              <span className="w-[22px] h-[22px] rounded-full bg-[#27525C] text-white text-xs font-semibold flex items-center justify-center shrink-0">1</span>
              Overview
            </NavLink>

            <NavLink 
              to="/rules" 
              className={({ isActive }) => 
                `flex items-center gap-2.5 px-3 h-[46px] rounded-[7px] text-[15px] transition-colors text-[#C9D4D6] no-underline ${
                  isActive ? 'bg-[#27525C] text-white font-semibold' : 'hover:bg-[#1C3A42] hover:text-white'
                }`
              }
            >
              <span className="w-[22px] h-[22px] rounded-full bg-[#27525C] text-white text-xs font-semibold flex items-center justify-center shrink-0">2</span>
              Tender rules
            </NavLink>

            <NavLink 
              to="/bidders" 
              className={({ isActive }) => 
                `flex items-center gap-2.5 px-3 h-[46px] rounded-[7px] text-[15px] transition-colors text-[#C9D4D6] no-underline ${
                  isActive ? 'bg-[#27525C] text-white font-semibold' : 'hover:bg-[#1C3A42] hover:text-white'
                }`
              }
            >
              <span className="w-[22px] h-[22px] rounded-full bg-[#27525C] text-white text-xs font-semibold flex items-center justify-center shrink-0">3</span>
              Bidder check
            </NavLink>

            <NavLink 
              to="/evidence" 
              className={({ isActive }) => 
                `flex items-center gap-2.5 px-3 h-[46px] rounded-[7px] text-[15px] transition-colors text-[#C9D4D6] no-underline ${
                  isActive ? 'bg-[#27525C] text-white font-semibold' : 'hover:bg-[#1C3A42] hover:text-white'
                }`
              }
            >
              <span className="w-[22px] h-[22px] rounded-full bg-[#27525C] text-white text-xs font-semibold flex items-center justify-center shrink-0">4</span>
              Evidence &amp; decision
            </NavLink>

            <NavLink 
              to="/clarifications" 
              className={({ isActive }) => 
                `flex items-center gap-2.5 px-3 h-[46px] rounded-[7px] text-[15px] transition-colors text-[#C9D4D6] no-underline ${
                  isActive ? 'bg-[#27525C] text-white font-semibold' : 'hover:bg-[#1C3A42] hover:text-white'
                }`
              }
            >
              <span className="w-[22px] h-[22px] rounded-full bg-[#27525C] text-white text-xs font-semibold flex items-center justify-center shrink-0">5</span>
              Pre-bid &amp; corrigendum
            </NavLink>

            <NavLink 
              to="/commercial-award" 
              className={({ isActive }) => 
                `flex items-center gap-2.5 px-3 h-[46px] rounded-[7px] text-[15px] transition-colors text-[#C9D4D6] no-underline ${
                  isActive ? 'bg-[#27525C] text-white font-semibold' : 'hover:bg-[#1C3A42] hover:text-white'
                }`
              }
            >
              <span className="w-[22px] h-[22px] rounded-full bg-[#27525C] text-white text-xs font-semibold flex items-center justify-center shrink-0">6</span>
              Commercial &amp; award
            </NavLink>

            <NavLink 
              to="/filesystem" 
              className={({ isActive }) => 
                `flex items-center gap-2.5 px-3 h-[46px] rounded-[7px] text-[15px] transition-colors text-[#C9D4D6] no-underline ${
                  isActive ? 'bg-[#27525C] text-white font-semibold' : 'hover:bg-[#1C3A42] hover:text-white'
                }`
              }
            >
              <span className="w-[22px] h-[22px] rounded-full bg-[#27525C] text-white text-xs font-semibold flex items-center justify-center shrink-0">7</span>
              Document vault
            </NavLink>
          </nav>
        ) : (
          <nav className="flex flex-col gap-1 mt-1">
            {[
              { id: 'dashboard', num: '1', label: 'Command center' },
              { id: 'discovery', num: '2', label: 'Tender discovery' },
              { id: 'detail', num: '3', label: 'Tender intelligence' },
              { id: 'workspace', num: '4', label: 'Bid workspace' },
              { id: 'vault', num: '5', label: 'Document vault' },
              { id: 'clarification', num: '6', label: 'Pre-bid query' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setBidderTab(item.id as BidderTabType)}
                className={`flex items-center gap-2.5 px-3 h-[46px] rounded-[7px] text-[15px] transition-colors cursor-pointer text-left border-0 ${
                  bidderTab === item.id 
                    ? 'bg-[#27525C] text-white font-semibold' 
                    : 'text-[#C9D4D6] hover:bg-[#1C3A42] hover:text-white'
                }`}
              >
                <span className="w-[22px] h-[22px] rounded-full bg-[#27525C] text-white text-xs font-semibold flex items-center justify-center shrink-0">
                  {item.num}
                </span>
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </nav>
        )}

        {/* Footer Meta info */}
        <div className="mt-auto flex flex-col gap-3.5 px-1.5">
          <div className="text-[13px] text-[#8FA3A7] leading-relaxed">
            {selectedTender.dept}<br />
            <span className="text-white font-semibold">{selectedTender.code}</span> · {selectedTender.title.length > 22 ? selectedTender.title.substring(0, 22) + '...' : selectedTender.title}
          </div>
          <div className="text-xs text-[#8FA3A7] border-t border-[#27525C] pt-3 flex items-center gap-1.5">
            <Shield size={13} className={isOfficer ? 'text-emerald-400' : 'text-amber-400'} />
            Role: <span className="font-semibold text-white">{isOfficer ? 'Tender Authority' : 'Bidder'}</span>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Header Bar */}
        <header className="h-[62px] shrink-0 bg-white border-b border-[#E4E2DA] flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <div className="text-sm text-[#6B7079] font-medium">
              {getHeaderTitle()}
            </div>
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
              isOfficer ? 'bg-[#E8F1F0] text-[#0A4F52]' : 'bg-amber-100 text-amber-900'
            }`}>
              {isOfficer ? 'Authority / Evaluator Mode' : 'Bidder Portal Mode'}
            </span>

            {/* Active Tender Selector for Officer */}
            {isOfficer && (
              <div className="flex items-center gap-2.5 ml-3 pl-3 border-l border-[#E4E2DA]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] text-[#6B7079] font-medium whitespace-nowrap">Selected:</span>
                  <select
                    value={selectedTender.id}
                    onChange={(e) => {
                      const found = activeTenders.find(t => t.id === e.target.value);
                      if (found) setSelectedTender(found);
                    }}
                    className="h-8 bg-[#FAF9F6] border border-[#D6D3CA] rounded-md px-2.5 text-[12px] font-semibold text-[#1A1D21] focus:outline-none focus:border-[#0F6B6E] cursor-pointer max-w-[440px] truncate leading-none"
                  >
                    {activeTenders.map(t => (
                      <option key={t.id} value={t.id}>
                        {t.code} · {t.title} ({t.value})
                      </option>
                    ))}
                  </select>
                </div>

                <NavLink 
                  to="/tenders/new" 
                  className="h-8 px-3 bg-[#0F6B6E] hover:bg-[#0A5558] !text-white text-[12px] font-semibold rounded-md flex items-center justify-center gap-1 transition-all no-underline shadow-2xs cursor-pointer whitespace-nowrap leading-none border-0 shrink-0"
                >
                  + Create Tender
                </NavLink>
              </div>
            )}
          </div>

          {/* Upper Right Role Switcher Toggle */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-[#1A1D21]">{persona.name}</div>
              <div className="text-xs text-[#6B7079]">{persona.role}</div>
            </div>

            {/* 2-Role Toggle Buttons */}
            <div className="bg-[#E9E7E0] p-1 rounded-lg flex items-center gap-1 border border-[#D6D3CA]">
              <button
                onClick={() => setPersona(personas.officer)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  isOfficer 
                    ? 'bg-[#14262B] text-white shadow-2xs' 
                    : 'text-[#4A4F57] hover:text-[#1A1D21]'
                }`}
              >
                Tender Officer
              </button>
              <button
                onClick={() => setPersona(personas.bidder)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  !isOfficer 
                    ? 'bg-[#0F6B6E] text-white shadow-2xs' 
                    : 'text-[#4A4F57] hover:text-[#1A1D21]'
                }`}
              >
                Bidder
              </button>
            </div>

            <div className="w-9 h-9 rounded-full bg-[#E8F1F0] text-[#0A4F52] flex items-center justify-center text-xs font-semibold border border-[#0F6B6E]/20">
              {persona.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </header>

        {/* View Outlet Container */}
        <div className="flex-1 overflow-auto p-7 flex flex-col">
          {!isOfficer ? <BidderPortalPage activeTab={bidderTab} setActiveTab={setBidderTab} /> : <Outlet />}
        </div>
      </main>
    </div>
  );
};
