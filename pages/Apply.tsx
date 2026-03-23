
import React, { useState, useRef } from 'react';
import { FileDown, CheckCircle2, User, Activity, MapPin, FileText, Phone, Mail, Info, Send, UploadCloud, Printer, ArrowLeft, ScrollText, ShieldCheck, FileType, Video, Clapperboard } from 'lucide-react';
import { useData } from '../DataContext';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const { resources, submitApplication } = useData();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    englishName: '',
    chineseName: '',
    gender: 'Male',
    dob: '',
    country: 'USA',
    height: '',
    weight: '',
    race: '',
    idNumber: '',
    address: '',
    guardianMobile: '',
    englishLevel: '',
    hobbies: '',
    resume: '',
    headshotUrl: '',
    resumeFileUrl: '',
    resumeFileName: '',
    videoFileUrl: '',
    videoFileName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({ ...prev, headshotUrl: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        alert("Please upload a PDF file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({ 
          ...prev, 
          resumeFileUrl: event.target?.result as string,
          resumeFileName: file.name
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('video/')) {
        alert("Please upload a valid video file.");
        return;
      }
      const url = URL.createObjectURL(file);
      setFormData(prev => ({ 
        ...prev, 
        videoFileUrl: url,
        videoFileName: file.name
      }));
    }
  };

  const calculateAge = (dob: string) => {
    if (!dob) return '';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Save to Internal Context
    submitApplication({
      id: `app-${Date.now()}`,
      ...formData,
      submittedAt: new Date().toISOString().split('T')[0]
    });

    // 2. Show the "Official Form" view
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmailDraft = () => {
    const subject = `Application: ${formData.englishName}`;
    const body = `To ALT Hollywood Dream Star Production Team,\n\nPlease find my application details attached.\n\nNOTE: I have attached the printed Application PDF and my Resume PDF.\n\nName: ${formData.englishName}\nMobile: ${formData.guardianMobile}\n\n`;
    window.location.href = `mailto:altdreamstar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-black pt-10 pb-20 px-4 font-sans">
        {/* SUCCESS MESSAGE UI (Screen Only) */}
        <div className="max-w-4xl mx-auto text-center mb-10 print:hidden">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-3xl font-black mb-2">Application Generated</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Your form is ready. Please <strong>Print/Save as PDF</strong> and email it to us along with your Resume file.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handlePrint} className="px-8 py-3 bg-brandBlack text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl">
               <Printer size={18} /> Print / Save as PDF
            </button>
            <button onClick={handleEmailDraft} className="px-8 py-3 border-2 border-brandBlack text-brandBlack rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
               <Mail size={18} /> Open Email App
            </button>
             <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    englishName: '', chineseName: '', gender: 'Male', dob: '', country: 'USA', height: '', weight: '', 
                    race: '', idNumber: '', address: '', guardianMobile: '', englishLevel: '', hobbies: '', resume: '', headshotUrl: '', resumeFileUrl: '', resumeFileName: '', videoFileUrl: '', videoFileName: ''
                  });
                }}
                className="px-8 py-3 text-gray-500 font-bold hover:text-black transition-colors flex items-center gap-2"
            >
                <ArrowLeft size={16} /> Back
            </button>
          </div>
        </div>

        {/* OFFICIAL FORM LAYOUT - A4 Scaled */}
        <div className="max-w-[210mm] mx-auto bg-white print:p-0 print:w-full print:max-w-none shadow-2xl print:shadow-none p-8">
          
          {/* Header Section */}
          <div className="text-center mb-6">
             <div className="flex justify-center mb-3">
                <div className="flex items-center gap-3">
                  <Clapperboard className="h-16 w-16 text-black" />
                  <div className="flex flex-col leading-none text-left">
                    <span className="text-3xl font-cinematic font-black text-black tracking-tight">ALT</span>
                    <span className="text-xs text-black/80 font-bold tracking-[0.2em] uppercase">Hollywood Dream Star</span>
                  </div>
                </div>
             </div>
             <h1 className="text-2xl font-serif font-bold uppercase tracking-wide leading-none text-black">Hollywood Kids Movie Entry Form</h1>
             <h2 className="text-xl font-serif font-bold mt-2 text-black tracking-wide">ALT 好莱坞儿童电影报名表</h2>
          </div>

          {/* Main Form Border */}
          <div className="border-2 border-black">
             
             {/* Row 0: Title Bar */}
             <div className="border-b border-black p-2 pl-4 font-bold text-sm uppercase tracking-wider bg-white">
                ALT HOLLYWOOD DREAM STAR
             </div>

             <div className="flex">
                {/* LEFT SIDE: DATA FIELDS */}
                <div className="flex-grow">
                   
                   {/* ROW 1: Name Block */}
                   <div className="flex border-b border-black h-24">
                      {/* Name Label */}
                      <div className="w-24 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold p-1">
                         <span>Name</span>
                         <span>姓名</span>
                      </div>
                      
                      {/* Name Inputs */}
                      <div className="flex-grow flex flex-col">
                         {/* Chinese Name + Sex Row */}
                         <div className="flex h-1/2 border-b border-black">
                            <div className="w-24 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-1">
                               <span>Chinese</span>
                               <span>中文</span>
                            </div>
                            <div className="flex-grow border-r border-black flex items-center justify-center text-sm font-bold">
                               {formData.chineseName}
                            </div>
                            <div className="w-16 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-1">
                               <span>Sex</span>
                               <span>性别</span>
                            </div>
                            <div className="w-32 flex items-center justify-center text-xs font-bold gap-3">
                               <div className="flex items-center gap-1">
                                  <span>Male</span>
                                  <div className={`w-3 h-3 border border-black flex items-center justify-center ${formData.gender === 'Male' ? 'bg-black text-white' : ''}`}>
                                     {formData.gender === 'Male' && '✓'}
                                  </div>
                               </div>
                               <div className="flex items-center gap-1">
                                  <span>Female</span>
                                  <div className={`w-3 h-3 border border-black flex items-center justify-center ${formData.gender === 'Female' ? 'bg-black text-white' : ''}`}>
                                     {formData.gender === 'Female' && '✓'}
                                  </div>
                               </div>
                            </div>
                         </div>
                         
                         {/* English Name Row */}
                         <div className="flex h-1/2">
                            <div className="w-24 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-1">
                               <span>English</span>
                               <span>英文</span>
                            </div>
                            <div className="flex-grow flex items-center justify-center text-sm font-bold">
                               {formData.englishName}
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* ROW 2: DOB & Age */}
                   <div className="flex border-b border-black h-12">
                      <div className="w-24 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold p-1">
                         <span>Date of Birth</span>
                         <span>出生日期</span>
                      </div>
                      <div className="flex-grow border-r border-black flex items-center justify-center text-sm font-bold">
                         {formData.dob}
                      </div>
                      <div className="w-16 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-1">
                         <span>Age</span>
                         <span>年龄</span>
                      </div>
                      <div className="w-32 flex items-center justify-center text-sm font-bold">
                         {calculateAge(formData.dob)}
                      </div>
                   </div>

                   {/* ROW 3: ID & Height */}
                   <div className="flex border-b border-black h-12">
                      <div className="w-24 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold p-1">
                         <span>ID Card No.</span>
                         <span>ID</span>
                      </div>
                      <div className="flex-grow border-r border-black flex items-center justify-center text-sm font-bold">
                         {formData.idNumber}
                      </div>
                      <div className="w-16 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-1">
                         <span>Height</span>
                         <span>身高</span>
                      </div>
                      <div className="w-32 flex items-center justify-center text-sm font-bold">
                         {formData.height} cm
                      </div>
                   </div>

                </div>

                {/* RIGHT SIDE: PHOTO (Spanning Rows 1-3) */}
                <div className="w-40 border-l border-black flex flex-col items-center justify-center bg-gray-50 relative">
                   {formData.headshotUrl ? (
                      <img src={formData.headshotUrl} className="absolute inset-0 w-full h-full object-cover" alt="Headshot" />
                   ) : (
                      <div className="text-gray-400 font-bold text-center text-sm">
                         相片<br/>PHOTO
                      </div>
                   )}
                </div>
             </div>

             {/* ROW 4: Address / Weight / English */}
             <div className="flex border-b border-black h-12">
                <div className="w-24 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold p-1">
                   <span>Address</span>
                   <span>家庭住址</span>
                </div>
                <div className="flex-grow border-r border-black flex items-center justify-center text-xs font-medium px-2 text-center">
                   {formData.address} {formData.country ? `(${formData.country})` : ''}
                </div>
                <div className="w-16 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-1">
                   <span>Weight</span>
                   <span>体重</span>
                </div>
                <div className="w-24 border-r border-black flex items-center justify-center text-sm font-bold">
                   {formData.weight} kg
                </div>
                <div className="w-16 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-1">
                   <span>English</span>
                   <span>英语</span>
                </div>
                <div className="w-24 flex items-center justify-center text-sm font-bold">
                   {formData.englishLevel}
                </div>
             </div>

             {/* ROW 5: Guardian Mobile / Race */}
             <div className="flex border-b border-black h-12">
                <div className="w-48 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold p-1">
                   <span>Guardians Mobile Phone</span>
                   <span>父母移动电话</span>
                </div>
                <div className="flex-grow border-r border-black flex items-center justify-center text-sm font-bold">
                   {formData.guardianMobile}
                </div>
                <div className="w-24 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-1">
                   <span>Race</span>
                   <span>民族</span>
                </div>
                <div className="w-40 flex items-center justify-center text-sm font-bold">
                   {formData.race}
                </div>
             </div>

             {/* ROW 6: Personal Preference */}
             <div className="border-b border-black">
                <div className="h-8 border-b border-black flex items-center px-4 text-xs font-bold bg-gray-100">
                   Personal preference 个人爱好
                </div>
                {/* Empty Grid for Visual */}
                <div className="grid grid-cols-4 divide-x divide-black h-10 border-b border-black">
                   <div className="col-span-4 p-2 text-sm font-medium">{formData.hobbies}</div>
                </div>
                <div className="grid grid-cols-4 divide-x divide-black h-8">
                   <div></div><div></div><div></div><div></div>
                </div>
             </div>

             {/* ROW 7: Personal Resume & Media */}
             <div className="flex h-64">
                <div className="w-32 border-r border-black flex flex-col items-center justify-center text-center text-xs font-bold bg-gray-50 p-2">
                   <div className="mb-4">Personal Resume & Media</div>
                   <div className="mb-2">个人简历及作品</div>
                   <div className="text-[10px] text-gray-500 font-normal leading-tight">
                      (曾参与表演类似的活动<br/>或者赛事)
                   </div>
                </div>
                <div className="flex-grow p-4 text-sm font-medium whitespace-pre-wrap leading-relaxed relative flex flex-col">
                   <div className="flex-grow">
                     {formData.resume}
                   </div>
                   
                   {(formData.resumeFileName || formData.videoFileName) && (
                     <div className="mt-4 pt-4 border-t border-dashed border-gray-300 flex flex-col gap-2">
                       <p className="text-xs font-bold text-gray-500 uppercase">Attached Files:</p>
                       {formData.resumeFileName && (
                         <div className="flex items-center gap-2 text-sm">
                           <FileText size={16} /> {formData.resumeFileName}
                         </div>
                       )}
                       {formData.videoFileName && (
                         <div className="flex items-center gap-2 text-sm">
                           <Video size={16} /> {formData.videoFileName}
                         </div>
                       )}
                     </div>
                   )}
                </div>
             </div>
          </div>

          {/* Footer Declaration */}
          <div className="mt-4 italic text-sm font-serif text-black">
             I hereby declare that all the information given by me in this form is true.
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Info */}
          <div className="order-2 lg:order-1">
            <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-2">Join Us</h2>
            <h1 className="text-3xl md:text-5xl font-cinematic font-black mb-6 tracking-tight leading-tight">Your Hollywood Journey Starts Here</h1>
            
            {/* New Guidelines Section */}
            <div className="w-full bg-brandBlack/60 border border-brandCyan/20 rounded-2xl p-6 mb-8 relative overflow-hidden group shadow-xl">
               <div className="absolute top-0 left-0 w-1 h-full brand-bg"></div>
               <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                  <div className="p-2.5 bg-brandCyan/10 rounded-lg text-brandCyan shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <ScrollText size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-cinematic font-bold text-white leading-none mb-1">Enrollment Guidelines</h3>
                    <p className="text-[10px] text-brandGray uppercase tracking-[0.2em] font-bold">Policy & Procedures</p>
                  </div>
               </div>
               
               <div className="h-80 overflow-y-auto pr-3 custom-scrollbar space-y-6 text-xs text-brandGray leading-relaxed font-light">
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-[10px]">Welcome</h4>
                    <p>Welcome to our Children’s Film & Acting Training Program. This program is designed to provide professional training in screen acting, on-camera performance, and real-world film production experience. Through systematic instruction and hands-on practice, students will develop confidence, creativity, communication skills, and teamwork.</p>
                    <p className="mt-2 text-brandCyan/80 italic">To ensure a safe, productive, and professional learning environment, parents and students are kindly requested to carefully read and comply with the following guidelines.</p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-[10px] border-b border-white/10 pb-1">I. Enrollment Guidelines</h4>
                    
                    <div className="mb-3">
                       <h5 className="text-white font-bold mb-1">1. Eligibility</h5>
                       <ul className="list-disc pl-4 space-y-1 marker:text-brandCyan">
                          <li>Children and youth ages 6–18</li>
                          <li>Students interested in acting, film, and performing arts</li>
                          <li>Students willing to participate in professional training and production practice</li>
                          <li>Students with a positive learning attitude and cooperative spirit</li>
                          <li>No prior acting experience is required. Beginners are welcome.</li>
                       </ul>
                    </div>

                    <div className="mb-3">
                       <h5 className="text-white font-bold mb-1">2. Enrollment Process</h5>
                       <ul className="list-disc pl-4 space-y-1 marker:text-brandCyan">
                          <li>Complete the enrollment application</li>
                          <li>Submit student information and optional materials (photo/video/performance introduction)</li>
                          <li>Selected courses may require an interview or audition</li>
                          <li>Admission will be confirmed upon review</li>
                          <li>Registration is finalized once enrollment procedures are completed</li>
                       </ul>
                       <p className="mt-1 opacity-70">Admission decisions are based on age suitability, learning attitude, potential, and class availability.</p>
                    </div>

                    <div>
                       <h5 className="text-white font-bold mb-1">3. Training Format</h5>
                       <p className="mb-1">The program includes, but is not limited to:</p>
                       <ul className="list-disc pl-4 space-y-1 marker:text-brandCyan">
                          <li>Acting fundamentals & On-camera performance techniques</li>
                          <li>Voice and dialogue training</li>
                          <li>Movement and body expression</li>
                          <li>Improvisation and scene study</li>
                          <li>Team collaboration</li>
                          <li>Short film and movie production practice</li>
                       </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-[10px] border-b border-white/10 pb-1">II. Class Policies</h4>
                    
                    <div className="space-y-4">
                       <div>
                          <h5 className="text-white font-bold mb-1">4. Attendance</h5>
                          <p>Students are expected to attend classes on time. Tardiness or unexcused absences may affect learning progress. Parents should notify instructors in advance if a student needs to be absent.</p>
                       </div>
                       
                       <div>
                          <h5 className="text-white font-bold mb-1">5. Class Preparation</h5>
                          <p>Students should bring comfortable clothing suitable for movement, water, and writing materials. Avoid bringing valuables.</p>
                       </div>

                       <div>
                          <h5 className="text-white font-bold mb-1">6. Conduct & Behavior</h5>
                          <p>Students must respect instructors and classmates, follow instructions, and maintain a safe environment. Disruptive behavior may result in warnings.</p>
                       </div>

                       <div>
                          <h5 className="text-white font-bold mb-1">7. Practice & Progress</h5>
                          <p>Regular practice is essential. Parents are encouraged to support their children’s learning at home.</p>
                       </div>

                       <div>
                          <h5 className="text-white font-bold mb-1">8. Filming & Media Participation</h5>
                          <p>By enrolling, parents agree that students may participate in educational filming. Projects may be used for educational or promotional purposes (non-commercial). Please notify us in writing of any restrictions.</p>
                       </div>

                       <div>
                          <h5 className="text-white font-bold mb-1">9. Parent Responsibilities</h5>
                          <p>Parents should ensure timely drop-off/pick-up and maintain communication with instructors.</p>
                       </div>
                       
                       <div>
                          <h5 className="text-white font-bold mb-1">10. Safety</h5>
                          <p>Students may not leave premises without permission. Safety is our highest priority.</p>
                       </div>

                       <div>
                          <h5 className="text-white font-bold mb-1">11. General Provisions</h5>
                          <p>The institution reserves the right to make reasonable adjustments to course arrangements. The institution retains final interpretation rights of these guidelines.</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               {/* Fade Overlay */}
               <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-brandBlack to-transparent pointer-events-none rounded-b-2xl"></div>
            </div>
            
            {/* Styled Notice */}
            <div className="p-6 border border-brandCyan/20 rounded-2xl bg-brandCyan/5 relative mb-8">
              <div className="flex items-center gap-3 text-brandCyan mb-3">
                <Info size={18} />
                <h4 className="font-black uppercase tracking-[0.2em] text-[10px]">Registration Notice</h4>
              </div>
              <p className="text-xs text-brandGray leading-relaxed font-light">
                Please fill out this digital form completely. Once submitted, the system will generate an <strong>Official Entry Form</strong> matching our production standards. You can then print/save it and email it to us.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">Documents</h3>
              {resources.map((res) => (
                  <a 
                    key={res.id} 
                    href={res.fileUrl} 
                    download={`${res.title}.pdf`}
                    className="flex items-center justify-between p-4 border border-white/10 bg-white/5 rounded-xl hover:border-brandCyan/40 transition-all group cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-brandCyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="p-2.5 brand-bg rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-brandCyan/20"><FileDown className="text-white" size={18} /></div>
                      <div>
                        <p className="font-bold text-sm mb-0.5 text-white">{res.title}</p>
                        <p className="text-xs text-brandGray font-medium">
                            <span className="opacity-60 block uppercase tracking-wider text-[9px] font-bold">PDF · {res.fileSize}</span>
                        </p>
                      </div>
                    </div>
                  </a>
                ))
              }
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/5 p-8 border border-white/10 rounded-2xl relative sticky top-24 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 brand-bg rounded-t-2xl"></div>
              <h3 className="text-2xl font-cinematic font-black mb-6 tracking-tight">Digital Registration</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Photo Upload */}
                <div className="mb-6">
                   <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest mb-3"><UploadCloud size={12}/> Headshot Photo</h4>
                   <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-48 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center bg-brandBlack/50 hover:bg-brandBlack/80 hover:border-brandCyan/50 transition-all cursor-pointer relative overflow-hidden group"
                   >
                      {formData.headshotUrl ? (
                         <img src={formData.headshotUrl} className="w-full h-full object-cover" alt="Preview" />
                      ) : (
                         <div className="text-center p-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 text-brandCyan group-hover:scale-110 transition-transform">
                               <User size={24} />
                            </div>
                            <p className="text-xs font-bold text-white">Click to Upload Headshot</p>
                            <p className="text-[10px] text-brandGray mt-1">JPG or PNG (Max 5MB)</p>
                         </div>
                      )}
                      <input 
                         type="file" 
                         ref={fileInputRef} 
                         onChange={handleImageSelect} 
                         accept="image/*" 
                         className="hidden" 
                         required
                      />
                   </div>
                   {!formData.headshotUrl && <p className="text-[10px] text-red-400 mt-2 font-bold">* Photo is required</p>}
                </div>

                {/* Section 1: Basic Info */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest"><User size={12}/> Personal Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">English Name</label>
                        <input name="englishName" value={formData.englishName} onChange={handleChange} required className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Legal Name" />
                    </div>
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Chinese Name (If any)</label>
                        <input name="chineseName" value={formData.chineseName} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Name in Chinese" />
                    </div>
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white/80">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Date of Birth</label>
                        <input name="dob" value={formData.dob} onChange={handleChange} required type="date" className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white/80" />
                    </div>
                  </div>
                </div>

                {/* Section 2: Biometrics */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest"><Activity size={12}/> Biometrics & ID</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Height (cm)</label>
                        <input name="height" value={formData.height} onChange={handleChange} type="number" className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="0" />
                    </div>
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Weight (kg)</label>
                        <input name="weight" value={formData.weight} onChange={handleChange} type="number" className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="0" />
                    </div>
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Race</label>
                        <input name="race" value={formData.race} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Ethnicity" />
                    </div>
                    <div className="col-span-3">
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">ID Card / Passport No.</label>
                        <input name="idNumber" value={formData.idNumber} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Govt Issued ID" />
                    </div>
                  </div>
                </div>

                {/* Section 3: Contact */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest"><MapPin size={12}/> Contact Information</h4>
                  <div className="space-y-3">
                    
                    {/* ADDED COUNTRY DROPDOWN */}
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Country of Residence</label>
                        <select name="country" value={formData.country} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white/80">
                          <option value="USA">United States</option>
                          <option value="China">China</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Residential Address</label>
                        <input name="address" value={formData.address} onChange={handleChange} required className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Street, City, Zip" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[9px] text-brandGray uppercase font-bold mb-1"><Phone size={10} className="inline mr-1"/> Guardian Mobile</label>
                            <input name="guardianMobile" value={formData.guardianMobile} onChange={handleChange} required type="tel" className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="+1 (555) 000-0000" />
                        </div>
                        <div>
                            <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">English Level</label>
                            <input name="englishLevel" value={formData.englishLevel} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Fluent / Int / Basic" />
                        </div>
                    </div>
                  </div>
                </div>

                 {/* Section 4: Experience */}
                <div className="space-y-3">
                   <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest"><FileText size={12}/> Profile & Resume</h4>
                   <div>
                      <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Personal Preferences / Hobbies</label>
                      <textarea name="hobbies" value={formData.hobbies} onChange={handleChange} rows={2} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all resize-none text-white" placeholder="Singing, Dancing, Sports..."></textarea>
                   </div>
                   
                   <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-[9px] text-brandGray uppercase font-bold">Resume & Media</label>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                         <textarea name="resume" value={formData.resume} onChange={handleChange} rows={4} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all resize-none text-white" placeholder="Type detailed experience here..."></textarea>
                         
                         <div className="flex flex-col gap-3">
                           <div 
                              onClick={() => resumeInputRef.current?.click()}
                              className="w-full h-1/2 min-h-[50px] border border-dashed border-white/10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-brandCyan/50 transition-all cursor-pointer group px-4"
                           >
                              <FileType size={16} className="text-brandGray group-hover:text-brandCyan mr-3" />
                              <div className="text-left flex-grow overflow-hidden">
                                <p className="text-[10px] font-bold text-white">Upload PDF Resume</p>
                                <p className="text-[9px] text-brandGray truncate">{formData.resumeFileName || "(Optional)"}</p>
                              </div>
                              <input 
                                type="file" 
                                ref={resumeInputRef} 
                                onChange={handleResumeSelect} 
                                accept="application/pdf" 
                                className="hidden" 
                              />
                           </div>

                           <div 
                              onClick={() => videoInputRef.current?.click()}
                              className="w-full h-1/2 min-h-[50px] border border-dashed border-white/10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-brandCyan/50 transition-all cursor-pointer group px-4"
                           >
                              <Video size={16} className="text-brandGray group-hover:text-brandCyan mr-3" />
                              <div className="text-left flex-grow overflow-hidden">
                                <p className="text-[10px] font-bold text-white">Upload Intro/Reel</p>
                                <p className="text-[9px] text-brandGray truncate">{formData.videoFileName || "Video File (Optional)"}</p>
                              </div>
                              <input 
                                type="file" 
                                ref={videoInputRef} 
                                onChange={handleVideoSelect} 
                                accept="video/*" 
                                className="hidden" 
                              />
                           </div>
                         </div>
                      </div>
                   </div>

                   <div className="flex items-start gap-3 mt-3">
                      <input type="checkbox" required className="mt-1" />
                      <p className="text-[10px] text-brandGray">I hereby declare that all the information given by me in this form is true.</p>
                   </div>
                </div>

                <button type="submit" disabled={!formData.headshotUrl} className="w-full py-5 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-black uppercase tracking-[0.3em] rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_40px_rgba(191,149,63,0.4)] text-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed animate-pulse hover:animate-none mt-6">
                  <Send size={20} /> Generate Official Form
                </button>
                <p className="text-[9px] text-center text-brandGray mt-2">Steps: Upload Photo &rarr; Fill Form &rarr; Generate &rarr; Save PDF &rarr; Email Us</p>
              </form>
            </div>
          </div>
        </div>

        {/* Summer Camp Section */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-4">Special Program</h2>
            <h1 className="text-3xl md:text-5xl font-cinematic font-black mb-6 tracking-tight">Hollywood Summer Camp</h1>
            <p className="text-brandGray max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
              An exclusive 2-week intensive program designed to immerse young performers in the magic of Hollywood filmmaking. From acting workshops to a real red-carpet premiere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brandCyan/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brandCyan/10 flex items-center justify-center text-brandCyan mb-6 group-hover:scale-110 transition-transform">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Intensive Training</h3>
              <p className="text-brandGray text-sm leading-relaxed">Daily workshops in screen acting, voice projection, improvisation, and on-camera techniques led by industry professionals.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brandPurple/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brandPurple/10 flex items-center justify-center text-brandPurple mb-6 group-hover:scale-110 transition-transform">
                <FileType size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real Production</h3>
              <p className="text-brandGray text-sm leading-relaxed">Students will be cast in a professionally produced short film, experiencing a real Hollywood set environment.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-amber-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Red Carpet Premiere</h3>
              <p className="text-brandGray text-sm leading-relaxed">The camp concludes with a glamorous red carpet screening of their film, complete with certificates of achievement.</p>
            </div>
          </div>

          <div className="mt-12 bg-brandBlack/60 border border-brandCyan/20 rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 left-0 w-1 h-full brand-bg"></div>
            <div>
              <h3 className="text-2xl font-cinematic font-bold text-white mb-2">Ready for the Summer of a Lifetime?</h3>
              <ul className="text-brandGray text-sm space-y-2">
                <li><strong className="text-white">Ages:</strong> 6 - 18 years old</li>
                <li><strong className="text-white">Location:</strong> Los Angeles, CA</li>
                <li><strong className="text-white">Duration:</strong> 2 Weeks (July - August)</li>
              </ul>
            </div>
            <button 
              onClick={() => window.location.href = 'mailto:altdreamstar@gmail.com?subject=Summer Camp Application Inquiry'}
              className="px-8 py-4 brand-bg text-white font-black rounded-xl uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brandCyan/20 whitespace-nowrap"
            >
              <Mail size={18} /> Inquire & Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
