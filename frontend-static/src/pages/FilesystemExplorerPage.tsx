import { useState, useEffect } from 'react';
import {
  Folder, FolderOpen, FileText, Lock, HardDrive, RefreshCw, Eye,
  ChevronRight, ChevronDown, FolderGit2, X, Download, FileCode,
  CheckCircle2, ShieldCheck
} from 'lucide-react';
import { staticFilesystemTree, defaultExpandedNodes } from '../data/filesystemData';
import type { FileNode } from '../data/filesystemData';

export const FilesystemExplorerPage = () => {
  const [basePath, setBasePath] = useState('/Users/ashutosh/Desktop/ProcurementPortal_Storage');
  const [treeData, setTreeData] = useState<FileNode[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [showViewerModal, setShowViewerModal] = useState(false);
  const [viewerTab, setViewerTab] = useState<'pdf' | 'ocr'>('pdf');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>(defaultExpandedNodes);

  // Static mode: load hardcoded data directly — no backend needed
  const fetchTree = () => {
    setLoading(true);
    setTreeData(staticFilesystemTree);
    setLoading(false);
  };

  useEffect(() => {
    fetchTree();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePath]);

  const toggleExpand = (path: string) => {
    setExpandedNodes(prev => ({ ...prev, [path]: !prev[path] }));
  };

  const handleSelectFile = (node: FileNode) => {
    if (node.type === 'file') {
      setSelectedFile(node);
      // Static mode: show file metadata — no backend content fetch
      setFileContent(
        `[Static Document Vault]\nFile:  ${node.name}\nPath:  ${node.path}\nSize:  ${node.size_bytes ? (node.size_bytes / 1024).toFixed(1) + ' KB' : 'unknown'}\n\nThis file lives on local disk at the path shown above.\nClick "View Document OCR Grounding" to open the native PDF viewer.`
      );
    }
  };

  const renderNode = (node: FileNode, level: number = 0) => {
    const isDir = node.type === 'directory';
    const isExpanded = !!expandedNodes[node.path];
    const isSelected = selectedFile?.path === node.path;

    return (
      <div key={node.path} className="select-none">
        <div
          onClick={() => isDir ? toggleExpand(node.path) : handleSelectFile(node)}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
          className={`flex items-center gap-2 py-1.5 px-2 rounded-md text-xs cursor-pointer transition-colors ${
            isSelected
              ? 'bg-[#0F6B6E] text-white font-medium'
              : 'hover:bg-[#FAF9F6] text-[#1A1D21]'
          }`}
        >
          {isDir ? (
            <>
              {isExpanded ? <ChevronDown size={14} className="text-gray-500" /> : <ChevronRight size={14} className="text-gray-500" />}
              {isExpanded ? <FolderOpen size={16} className="text-[#E0A458]" /> : <Folder size={16} className="text-[#E0A458]" />}
            </>
          ) : (
            <>
              <span className="w-3.5"></span>
              {node.name.endsWith('.enc') ? (
                <Lock size={15} className="text-amber-600 shrink-0" />
              ) : (
                <FileText size={15} className="text-[#0F6B6E] shrink-0" />
              )}
            </>
          )}

          <span className="truncate">{node.name}</span>
          {!isDir && node.size_bytes && (
            <span className={`ml-auto text-[10px] ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
              {(node.size_bytes / 1024).toFixed(1)} KB
            </span>
          )}
        </div>

        {isDir && isExpanded && node.children && (
          <div>
            {node.children.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  // Only documents bundled with the prototype carry a served `url`, and those
  // are the ones the viewer can actually render. Every other node is a
  // path-only placeholder, so it falls through to the "preview not available"
  // state rather than an iframe the browser will refuse to load.
  const rawPdfUrl = selectedFile?.name.endsWith('.pdf') ? selectedFile.url ?? '' : '';

  return (
    <div className="flex-1 flex flex-col gap-5 max-w-[1120px]">

      {/* Title & Path Configuration Bar */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="h1">Document Vault &amp; Storage Tree</h1>
          <p className="lead">Configurable local storage repository housing tender NITs, bidder submission folders, and encrypted financial covers.</p>
        </div>
        <button onClick={fetchTree} className="btn pri text-xs px-4 h-9">
          <RefreshCw size={14} className={`mr-1.5 ${loading ? 'animate-spin' : ''}`} /> Sync Directory Tree
        </button>
      </div>

      {/* Path Input Config Card */}
      <div className="card p-4 bg-white space-y-2 border border-[#E4E2DA]">
        <label className="text-xs font-bold text-[#1A1D21] flex items-center gap-2">
          <HardDrive size={16} className="text-[#0F6B6E]" /> Configurable Local Directory Path:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={basePath}
            onChange={(e) => setBasePath(e.target.value)}
            className="flex-1 p-2 px-3 border border-[#D6D3CA] rounded-lg text-xs font-mono text-[#1A1D21] bg-[#FAF9F6] focus:outline-none focus:border-[#0F6B6E]"
          />
          <button onClick={fetchTree} className="btn text-xs px-4 h-9">Set Path</button>
        </div>
        <div className="text-[11px] text-[#6B7079]">
          Structure: <span className="font-mono text-[#0F6B6E]">[BasePath] / [Tender_ID] / Bidders / [Bidder_Name] / [Submitted_Documents.pdf]</span>
        </div>
      </div>

      {/* Main Split View: Tree vs File Inspection */}
      <div className="grid grid-cols-5 gap-5 min-h-[480px]">

        {/* Left 2 Cols: Interactive Directory Tree */}
        <div className="col-span-2 card p-4 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center border-b border-[#EFEDE6] pb-3 mb-3">
            <h2 className="ct flex items-center gap-2 text-xs">
              <FolderGit2 size={16} className="text-[#0F6B6E]" /> Storage Directory Tree
            </h2>
            <span className="text-[11px] text-gray-500 font-mono">Static Vault</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-0.5">
            {treeData.map(node => renderNode(node, 0))}
          </div>
        </div>

        {/* Right 3 Cols: File Inspector & Grounding Details */}
        <div className="col-span-3 card p-5 flex flex-col overflow-hidden">
          {selectedFile ? (
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex justify-between items-start border-b border-[#EFEDE6] pb-3">
                <div>
                  <div className="font-bold text-sm text-[#1A1D21]">{selectedFile.name}</div>
                  <div className="text-[11px] text-[#6B7079] font-mono mt-0.5">{selectedFile.path}</div>
                </div>
                <span className="st s-pass text-[11px]">Ground Truth File</span>
              </div>

              <div className="flex-1 bg-[#FAF9F6] border border-[#EFEDE6] rounded-lg p-4 font-mono text-xs text-[#2F343B] overflow-y-auto leading-relaxed">
                {fileContent || 'Loading file content...'}
              </div>

              <div className="flex justify-between items-center pt-2 text-xs">
                <span className="text-gray-500">File Type: {selectedFile.name.split('.').pop()?.toUpperCase()} / Document</span>
                <button
                  onClick={() => setShowViewerModal(true)}
                  className="btn pri text-xs px-4 h-8.5 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Eye size={15} /> View Document OCR Grounding
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-400 space-y-2">
              <FileText size={42} className="text-[#0F6B6E]/30" />
              <div className="font-bold text-sm text-gray-700">No File Selected</div>
              <p className="text-xs text-gray-500 max-w-xs">
                Click any submitted document or tender file in the directory tree on the left to inspect ground-truth contents.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* High-Fidelity OCR & PDF Document Viewer Modal */}
      {showViewerModal && selectedFile && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl shadow-2xl border border-[#D6D3CA] w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden">

            {/* Modal Top Bar */}
            <div className="h-14 px-6 bg-[#14262B] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#0F6B6E] text-white flex items-center justify-center">
                  <FileText size={18} />
                </div>
                <div>
                  <div className="font-semibold text-sm leading-tight">{selectedFile.name}</div>
                  <div className="text-[11px] text-[#8FA3A7] font-mono truncate max-w-lg">{selectedFile.path}</div>
                </div>
              </div>

              {/* Tab Selector & Controls */}
              <div className="flex items-center gap-4">
                <div className="bg-[#1C3A42] p-1 rounded-lg flex items-center gap-1 border border-[#27525C]">
                  <button
                    onClick={() => setViewerTab('pdf')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewerTab === 'pdf' ? 'bg-[#0F6B6E] text-white shadow-2xs' : 'text-[#8FA3A7] hover:text-white'
                    }`}
                  >
                    <Eye size={13} /> Native PDF View
                  </button>
                  <button
                    onClick={() => setViewerTab('ocr')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewerTab === 'ocr' ? 'bg-[#0F6B6E] text-white shadow-2xs' : 'text-[#8FA3A7] hover:text-white'
                    }`}
                  >
                    <FileCode size={13} /> OCR Grounding Layer
                  </button>
                </div>

                {rawPdfUrl && (
                  <a
                    href={rawPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-[#8FA3A7] hover:text-white transition-colors"
                    title="Open PDF in system viewer"
                  >
                    <Download size={18} />
                  </a>
                )}

                <button
                  onClick={() => setShowViewerModal(false)}
                  className="p-1.5 text-[#8FA3A7] hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body Container */}
            <div className="flex-1 bg-[#E9E7E0] p-4 min-h-0 overflow-hidden flex flex-col">
              {viewerTab === 'pdf' ? (
                <div className="flex-1 bg-white rounded-lg border border-[#D6D3CA] overflow-hidden shadow-inner flex flex-col">
                  {rawPdfUrl ? (
                    /* Opens the PDF from local disk via file:// URL */
                    <iframe
                      src={rawPdfUrl}
                      title={selectedFile.name}
                      className="w-full h-full border-0 bg-white"
                    />
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-10 text-gray-400 space-y-3">
                      <FileText size={40} className="text-[#0F6B6E]/30" />
                      <div className="font-semibold text-sm text-gray-600">Preview not available for this file type</div>
                      <p className="text-xs text-gray-400 max-w-xs">
                        Only PDF files can be previewed inline. Open the file directly from your file system to view it.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-1 bg-white rounded-lg border border-[#D6D3CA] p-6 overflow-y-auto flex flex-col gap-5 font-sans">

                  {/* OCR Grounding Header */}
                  <div className="bg-[#E8F1F0] border border-[#0F6B6E]/30 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={24} className="text-[#0F6B6E]" />
                      <div>
                        <div className="text-xs font-bold text-[#0A4F52]">AI Deterministic Grounding Receipt</div>
                        <div className="text-[11px] text-[#6B7079]">Text regions extracted directly from source document coordinates</div>
                      </div>
                    </div>
                    <span className="st s-pass text-xs px-3 py-1 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={14} /> 99.4% OCR Confidence
                    </span>
                  </div>

                  {/* Document Simulated Paper View with OCR Highlights */}
                  <div className="bg-[#FAF9F6] border border-[#E4E2DA] rounded-lg p-6 shadow-xs flex flex-col gap-4 font-serif leading-relaxed text-[#1A1D21]">
                    <div className="border-b border-[#D6D3CA] pb-2 text-xs font-sans font-bold text-[#0F6B6E] uppercase tracking-wider">
                      Ground Truth Page View — {selectedFile.name}
                    </div>

                    <div className="space-y-3 font-mono text-xs text-[#2F343B]">
                      {fileContent?.split('\n').map((line, idx) => {
                        const isHighlighted = line.includes('VALIDITY') || line.includes('Clause 4.7') || line.includes('Crores') || line.includes('HIGHLIGHT') || line.includes('Size:');
                        return (
                          <div
                            key={idx}
                            className={`p-2 rounded ${
                              isHighlighted
                                ? 'bg-amber-100/80 border-l-4 border-amber-500 font-semibold text-amber-950'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            <span className="text-[10px] text-gray-400 mr-3 select-none">L{idx + 1}</span>
                            {line}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Modal Footer Bar */}
            <div className="h-12 px-6 bg-white border-t border-[#E4E2DA] flex items-center justify-between text-xs shrink-0">
              <span className="text-[#6B7079]">
                Source File: <span className="font-mono font-semibold text-[#1A1D21]">{selectedFile.name}</span>
              </span>
              <button
                onClick={() => setShowViewerModal(false)}
                className="btn pri text-xs px-5 h-8 cursor-pointer"
              >
                Done Viewing
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
