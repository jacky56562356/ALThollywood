
import React from 'react';
import { HISTORY } from '../constants';

export default function History() {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6 text-center">Our Evolution</h2>
        <h1 className="text-6xl font-cinematic font-black mb-24 text-center tracking-tight">A Legacy in the Making</h1>

        <div className="relative border-l-2 border-brandCyan/30 ml-4 md:ml-0 md:left-1/2">
          {HISTORY.map((item, index) => (
            <div key={index} className={`relative mb-24 md:w-1/2 ${index % 2 === 0 ? 'md:left-[-50%] md:pr-16 md:text-right' : 'md:left-[50%] md:pl-16'}`}>
              <div className={`absolute top-0 w-5 h-5 brand-bg rounded-full border-4 border-brandBlack shadow-[0_0_20px_rgba(0,210,255,0.6)] ${index % 2 === 0 ? '-left-[11px] md:left-auto md:-right-[11px]' : '-left-[11px]'}`}></div>
              <div>
                <span className="text-3xl font-cinematic font-black brand-gradient-text block mb-4 tracking-wider">{item.year}</span>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{item.title}</h3>
                <p className="text-brandGray leading-relaxed text-lg font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
