
import React, { useState, useCallback } from 'react';
import { ACTORS } from '../constants';
import { Plus, Trash2, Edit2, Camera, User, Star, Save, X, UploadCloud, Image as ImageIcon } from 'lucide-react';
import type { Actor } from '../types';

export default function Dashboard() {
  const [talent, setTalent] = useState<Actor[]>(ACTORS);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form States
  const [formData, setFormData] = useState<Partial<Actor>>({
    name: '',
    ageRange: '6-10',
    imageUrl: '',
    skills: [],
    credits: []
  });

  const resetForm = () => {
    setFormData({
        name: '',
        ageRange: '6-10',
        imageUrl: '',
        skills: [],
        credits: []
    });
  };

  const handleEditClick = (actor: Actor) => {
      setEditingId(actor.id);
      setFormData(actor);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this talent from the official roster?')) {
      setTalent(prev => prev.filter(a => a.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
        // Update existing
        setTalent(prev => prev.map(t => t.id === editingId ? { ...t, ...formData } as Actor : t));
    } else {
        // Add new
        const newActor: Actor = {
            id: `new-${Date.now()}`,
            name: formData.name || 'New Talent',
            ageRange: formData.ageRange || '6-10',
            imageUrl: formData.imageUrl || 'https://via.placeholder.com/600x800',
            skills: formData.skills || [],
            credits: formData.credits || ['New Signing']
        };
        setTalent(prev => [newActor, ...prev]);
    }

    setIsAdding(false);
    setEditingId(null);
    resetForm();
    alert('Changes synced with Hollywood Production Database (Local Session).');
  };

  // Drag and Drop Logic
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setFormData(prev => ({ ...prev, imageUrl: event.target?.result as string }));
        };
        reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setFormData(prev => ({ ...prev, imageUrl: event.target?.result as string }));
        };
        reader.readAsDataURL(file);
      }
  }

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 border-b border-white/10 pb-16">
          <div>
            <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Internal Management</h2>
            <h1 className="text-6xl font-cinematic font-black mb-4 tracking-tight">Talent Roster</h1>
            <p className="text-brandGray text-lg font-light">Add, edit, and curate the official ALT Hollywood Dream Star actor database.</p>
          </div>
          <button 
            onClick={() => { setIsAdding(true); resetForm(); }}
            className="px-8 py-4 brand-bg text-white font-black rounded-xl uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brandCyan/20"
          >
            <Plus size={18} /> Add New Talent
          </button>
        </div>

        {/* Talent Table */}
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
              {talent.map((actor) => (
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
                      <button onClick={() => handleEditClick(actor)} className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-brandCyan/60 hover:text-brandCyan transition-all"><Edit2 size={16} /></button>
                      <button onClick={() => handleDelete(actor.id)} className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-red-500/60 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal/Form */}
        {(isAdding || editingId) && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brandBlack/90 backdrop-blur-md">
            <div className="w-full max-w-2xl bg-brandBlack border border-white/10 rounded-3xl p-8 relative shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
               <button onClick={() => { setIsAdding(false); setEditingId(null); }} className="absolute top-6 right-6 text-brandGray hover:text-white"><X /></button>
               <h3 className="text-3xl font-cinematic font-black mb-10 tracking-tight">{isAdding ? 'Register New Star' : 'Update Star Portfolio'}</h3>
               
               <form onSubmit={handleSave} className="grid grid-cols-2 gap-8">
                  {/* Drag and Drop Zone */}
                  <div className="col-span-2">
                    <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Headshot Upload</label>
                    <div 
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className="w-full h-48 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] hover:border-brandCyan/50 transition-all cursor-pointer relative group overflow-hidden"
                    >
                        {formData.imageUrl ? (
                            <img src={formData.imageUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Preview" />
                        ) : (
                            <div className="text-center p-6">
                                <UploadCloud className="w-10 h-10 text-brandCyan mx-auto mb-4" />
                                <p className="text-sm font-bold text-white mb-1">Drag & Drop Image Here</p>
                                <p className="text-xs text-brandGray">or click to browse</p>
                            </div>
                        )}
                        <input type="file" accept="image/*" onChange={handleFileSelect} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        
                        {formData.imageUrl && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-brandBlack/80 px-4 py-2 rounded-full text-xs font-bold text-white border border-white/20">Change Image</span>
                            </div>
                        )}
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Full Stage Name</label>
                    <input 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white" 
                        placeholder="e.g. Scarlett Johnson" 
                        required 
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Age Category</label>
                    <select 
                        value={formData.ageRange}
                        onChange={e => setFormData({...formData, ageRange: e.target.value})}
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
                        value={formData.skills?.join(', ')} 
                        onChange={e => setFormData({...formData, skills: e.target.value.split(',').map(s => s.trim())})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white" 
                        placeholder="Acting, Dancing, Martial Arts..." 
                    />
                  </div>
                   <div className="col-span-2">
                    <label className="block text-[10px] text-brandGray uppercase font-black mb-3 tracking-widest">Recent Credits (Comma separated)</label>
                    <input 
                        value={formData.credits?.join(', ')} 
                        onChange={e => setFormData({...formData, credits: e.target.value.split(',').map(s => s.trim())})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-brandCyan outline-none text-white" 
                        placeholder="Hollywood Film, TV Commercial..." 
                    />
                  </div>

                  <div className="col-span-2 flex gap-4 mt-6">
                    <button type="submit" className="flex-1 py-5 brand-bg text-white font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
                      <Save size={18} /> Save to Roster
                    </button>
                    <button type="button" onClick={() => { setIsAdding(false); setEditingId(null); }} className="flex-1 py-5 border border-white/10 text-white font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/5 transition-colors">
                      Discard
                    </button>
                  </div>
               </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
