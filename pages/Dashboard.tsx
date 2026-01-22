
import React, { useState, useCallback } from 'react';
import { Plus, Trash2, Edit2, UploadCloud, FileText, Download, X, Save, Users, FileStack } from 'lucide-react';
import type { Actor, Resource } from '../types';
import { useData } from '../DataContext';

type Tab = 'talent' | 'resources';

export default function Dashboard() {
  const { actors, resources, addActor, updateActor, deleteActor, addResource, deleteResource } = useData();
  const [activeTab, setActiveTab] = useState<Tab>('talent');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Actor Form State
  const [actorForm, setActorForm] = useState<Partial<Actor>>({
    name: '',
    ageRange: '6-10',
    imageUrl: '',
    skills: [],
    credits: []
  });

  // Resource Form State
  const [resourceForm, setResourceForm] = useState<Partial<Resource>>({
    title: '',
    description: '',
    fileUrl: '',
    fileSize: '0.0 MB'
  });

  // --- ACTOR HANDLERS ---
  const resetActorForm = () => {
    setActorForm({
        name: '',
        ageRange: '6-10',
        imageUrl: '',
        skills: [],
        credits: []
    });
  };

  const handleEditActor = (actor: Actor) => {
      setEditingId(actor.id);
      setActorForm(actor);
      setIsModalOpen(true);
  };

  const handleDeleteActor = (id: string) => {
    if (confirm('Are you sure you want to remove this talent from the official roster?')) {
      deleteActor(id);
    }
  };

  const handleSaveActor = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
        updateActor({ ...actorForm, id: editingId } as Actor);
    } else {
        addActor({
            id: `new-${Date.now()}`,
            name: actorForm.name || 'New Talent',
            ageRange: actorForm.ageRange || '6-10',
            imageUrl: actorForm.imageUrl || 'https://via.placeholder.com/600x800',
            skills: actorForm.skills || [],
            credits: actorForm.credits || ['New Signing']
        } as Actor);
    }
    setIsModalOpen(false);
    setEditingId(null);
    resetActorForm();
  };

  // --- RESOURCE HANDLERS ---
  const resetResourceForm = () => {
    setResourceForm({
      title: '',
      description: '',
      fileUrl: '',
      fileSize: '0.0 MB'
    });
  };

  const handleDeleteResource = (id: string) => {
    if (confirm('Are you sure you want to remove this document?')) {
      deleteResource(id);
    }
  };

  const handleSaveResource = (e: React.FormEvent) => {
    e.preventDefault();
    // Since we can't do real edits on files easily in this mock, we only support Add for now or simple Text edits if we expanded it.
    // Assuming ADD ONLY for this demo flow or simple text updates.
    addResource({
      id: `res-${Date.now()}`,
      title: resourceForm.title || 'Untitled Document',
      description: resourceForm.description || '',
      fileUrl: resourceForm.fileUrl || '#',
      fileSize: resourceForm.fileSize || '0.5 MB',
      uploadDate: new Date().toISOString().split('T')[0]
    } as Resource);

    setIsModalOpen(false);
    resetResourceForm();
  };

  // --- DRAG & DROP & FILE HANDLERS ---
  const handleImageDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => setActorForm(prev => ({ ...prev, imageUrl: event.target?.result as string }));
        reader.readAsDataURL(file);
    }
  }, []);

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
       const url = URL.createObjectURL(file);
       setResourceForm(prev => ({ 
         ...prev, 
         fileUrl: url,
         title: prev.title || file.name,
         fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
       }));
    } else {
      alert('Please upload a valid PDF file.');
    }
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => setActorForm(prev => ({ ...prev, imageUrl: event.target?.result as string }));
        reader.readAsDataURL(file);
      }
  };

  const handlePdfSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setResourceForm(prev => ({ 
        ...prev, 
        fileUrl: url,
        title: prev.title || file.name,
        fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      }));
    }
  };

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12 border-b border-white/10 pb-8">
          <div>
            <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-4">Internal Management</h2>
            <h1 className="text-5xl font-cinematic font-black tracking-tight">Agent Dashboard</h1>
          </div>
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
             <button 
                onClick={() => setActiveTab('talent')}
                className={`px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'talent' ? 'brand-bg text-white shadow-lg' : 'text-brandGray hover:text-white'}`}
             >
                <Users size={14} /> Talent Roster
             </button>
             <button 
                onClick={() => setActiveTab('resources')}
                className={`px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'resources' ? 'brand-bg text-white shadow-lg' : 'text-brandGray hover:text-white'}`}
             >
                <FileStack size={14} /> Documents
             </button>
          </div>
        </div>

        {/* Add Button */}
        <div className="flex justify-end mb-8">
           <button 
            onClick={() => { setIsModalOpen(true); setEditingId(null); resetActorForm(); resetResourceForm(); }}
            className="px-8 py-4 brand-bg text-white font-black rounded-xl uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brandCyan/20"
          >
            <Plus size={18} /> {activeTab === 'talent' ? 'Add New Talent' : 'Upload Document'}
          </button>
        </div>

        {/* CONTENT AREA */}
        {activeTab === 'talent' ? (
          // TALENT TABLE
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-6 text-[10px] uppercase tracking-widest text-brandGray font-black">Headshot</th>
                  <th className="pb-6 text-[10px] uppercase tracking-widest text-brandGray font-black">Name & Credits</th>
                  <th className="pb-6 text-[10px] uppercase tracking-widest text-brandGray font-black">Age Tier</th>
                  <th className="pb-6 text-[10px] uppercase tracking-widest text-brandGray font-black">Skills</th>
                  <th className="pb-6 text-[10px] uppercase tracking-widest text-brandGray font-black text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {actors.map((actor) => (
                  <tr key={actor.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="py-6">
                      <img src={actor.imageUrl} className="w-16 h-20 object-cover rounded-lg border border-white/10 group-hover:border-brandCyan/40 transition-all" alt={actor.name} />
                    </td>
                    <td className="py-6">
                      <h4 className="text-xl font-cinematic font-bold text-white mb-1">{actor.name}</h4>
                      <p className="text-[10px] text-brandCyan uppercase font-black tracking-widest">{actor.credits[0]}</p>
                    </td>
                    <td className="py-6">
                      <span className="text-sm font-medium text-brandGray">{actor.ageRange}</span>
                    </td>
                    <td className="py-6">
                      <div className="flex flex-wrap gap-2">
                        {actor.skills.slice(0, 2).map((s, i) => (
                          <span key={i} className="text-[9px] px-2 py-1 bg-white/5 border border-white/10 rounded text-brandGray uppercase">{s}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-6 text-right">
                      <div className="flex justify-end gap-3">
                        <button onClick={() => handleEditActor(actor)} className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-brandCyan/60 hover:text-brandCyan transition-all"><Edit2 size={16} /></button>
                        <button onClick={() => handleDeleteActor(actor.id)} className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-red-500/60 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // RESOURCES TABLE
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {resources.map((res) => (
               <div key={res.id} className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-brandCyan/40 transition-all flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                     <div className="p-3 bg-brandBlack/50 rounded-lg border border-white/5 text-brandCyan">
                        <FileText size={24} />
                     </div>
                     <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleDeleteResource(res.id)} className="p-2 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                     </div>
                  </div>
                  <h4 className="text-xl font-cinematic font-bold text-white mb-2 leading-tight">{res.title}</h4>
                  <p className="text-xs text-brandGray mb-6 line-clamp-2 font-light">{res.description}</p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5 text-[10px] text-brandGray uppercase font-black tracking-widest">
                     <span>{res.fileSize}</span>
                     <span>{res.uploadDate}</span>
                  </div>
                  <a href={res.fileUrl} download className="mt-4 w-full py-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase hover:bg-brandCyan hover:text-brandBlack transition-all">
                     <Download size={14} /> Download PDF
                  </a>
               </div>
             ))}
          </div>
        )}

        {/* --- MODALS --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brandBlack/90 backdrop-blur-md">
            <div className="w-full max-w-2xl bg-brandBlack border border-white/10 rounded-3xl p-8 relative shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
               <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-brandGray hover:text-white"><X /></button>
               
               {activeTab === 'talent' ? (
                 /* ACTOR FORM */
                 <>
                   <h3 className="text-3xl font-cinematic font-black mb-10 tracking-tight">{editingId ? 'Update Star Portfolio' : 'Register New Star'}</h3>
                   <form onSubmit={handleSaveActor} className="grid grid-cols-2 gap-8">
                      <div className="col-span-2">
                        <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Headshot Upload</label>
                        <div 
                            onDrop={handleImageDrop}
                            onDragOver={handleDragOver}
                            className="w-full h-48 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] hover:border-brandCyan/50 transition-all cursor-pointer relative group overflow-hidden"
                        >
                            {actorForm.imageUrl ? (
                                <img src={actorForm.imageUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Preview" />
                            ) : (
                                <div className="text-center p-6">
                                    <UploadCloud className="w-10 h-10 text-brandCyan mx-auto mb-4" />
                                    <p className="text-sm font-bold text-white mb-1">Drag & Drop Image</p>
                                </div>
                            )}
                            <input type="file" accept="image/*" onChange={handleImageSelect} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        </div>
                      </div>

                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Full Stage Name</label>
                        <input 
                            value={actorForm.name} 
                            onChange={e => setActorForm({...actorForm, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white" 
                            required 
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Age Category</label>
                        <select 
                            value={actorForm.ageRange}
                            onChange={e => setActorForm({...actorForm, ageRange: e.target.value})}
                            className="w-full bg-brandBlack border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white"
                        >
                          <option value="6-10">6-10 Years</option>
                          <option value="8-12">8-12 Years</option>
                          <option value="10-14">10-14 Years</option>
                          <option value="12-16">12-16 Years</option>
                          <option value="14-18">14-18 Years</option>
                        </select>
                      </div>
                      
                      <div className="col-span-2">
                        <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Core Skills (Comma separated)</label>
                        <input 
                            value={actorForm.skills?.join(', ')} 
                            onChange={e => setActorForm({...actorForm, skills: e.target.value.split(',').map(s => s.trim())})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white" 
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Recent Credits</label>
                        <input 
                            value={actorForm.credits?.join(', ')} 
                            onChange={e => setActorForm({...actorForm, credits: e.target.value.split(',').map(s => s.trim())})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white" 
                        />
                      </div>
                      <div className="col-span-2 mt-4">
                        <button type="submit" className="w-full py-5 brand-bg text-white font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
                          <Save size={18} /> Save Changes
                        </button>
                      </div>
                   </form>
                 </>
               ) : (
                 /* RESOURCE FORM */
                 <>
                   <h3 className="text-3xl font-cinematic font-black mb-10 tracking-tight">Upload Document</h3>
                   <form onSubmit={handleSaveResource} className="grid grid-cols-1 gap-8">
                      <div>
                        <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">PDF File</label>
                        <div 
                            onDrop={handleFileDrop}
                            onDragOver={handleDragOver}
                            className="w-full h-40 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] hover:border-brandCyan/50 transition-all cursor-pointer relative group"
                        >
                            {resourceForm.fileUrl ? (
                                <div className="text-center">
                                   <FileText size={32} className="text-brandCyan mx-auto mb-2" />
                                   <p className="text-sm font-bold text-white">{resourceForm.title}</p>
                                   <p className="text-xs text-brandGray">{resourceForm.fileSize}</p>
                                </div>
                            ) : (
                                <div className="text-center p-6">
                                    <UploadCloud className="w-10 h-10 text-brandCyan mx-auto mb-4" />
                                    <p className="text-sm font-bold text-white mb-1">Drag & Drop PDF</p>
                                </div>
                            )}
                            <input type="file" accept="application/pdf" onChange={handlePdfSelect} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Document Title</label>
                        <input 
                            value={resourceForm.title} 
                            onChange={e => setResourceForm({...resourceForm, title: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white" 
                            required 
                            placeholder="e.g. 2026 Season Schedule"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Description</label>
                        <textarea 
                            value={resourceForm.description} 
                            onChange={e => setResourceForm({...resourceForm, description: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white resize-none h-24" 
                            placeholder="Brief details about this document..."
                        />
                      </div>

                      <div className="mt-4">
                        <button type="submit" disabled={!resourceForm.fileUrl} className="w-full py-5 brand-bg text-white font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                          <Save size={18} /> Upload File
                        </button>
                      </div>
                   </form>
                 </>
               )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
