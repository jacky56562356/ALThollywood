
import React, { createContext, useState, useContext } from 'react';
import { ACTORS, RESOURCES } from './constants';
import { Actor, Resource, Application } from './types';

interface DataContextType {
  actors: Actor[];
  resources: Resource[];
  applications: Application[];
  addActor: (actor: Actor) => void;
  updateActor: (actor: Actor) => void;
  deleteActor: (id: string) => void;
  addResource: (resource: Resource) => void;
  deleteResource: (id: string) => void;
  submitApplication: (app: Application) => void;
  deleteApplication: (id: string) => void;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [actors, setActors] = useState<Actor[]>(ACTORS);
  const [resources, setResources] = useState<Resource[]>(RESOURCES);
  // Initialize with one mock application for demonstration
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 'app-mock-1',
      englishName: 'David Chen',
      chineseName: '',
      gender: 'Male',
      dob: '2015-05-20',
      height: '145',
      weight: '35',
      race: 'Asian',
      idNumber: 'A12345678',
      address: '123 Hollywood Blvd, Los Angeles, CA',
      guardianMobile: '+1 (555) 123-4567',
      englishLevel: 'Fluent',
      hobbies: 'Piano, Soccer',
      resume: 'School play lead role 2024',
      submittedAt: new Date().toISOString().split('T')[0]
    }
  ]);

  const addActor = (actor: Actor) => setActors(prev => [actor, ...prev]);
  
  const updateActor = (updatedActor: Actor) => {
    setActors(prev => prev.map(a => a.id === updatedActor.id ? updatedActor : a));
  };

  const deleteActor = (id: string) => {
    setActors(prev => prev.filter(a => a.id !== id));
  };

  const addResource = (resource: Resource) => {
    setResources(prev => [resource, ...prev]);
  };

  const deleteResource = (id: string) => {
    setResources(prev => prev.filter(r => r.id !== id));
  };

  const submitApplication = (app: Application) => {
    setApplications(prev => [app, ...prev]);
  };

  const deleteApplication = (id: string) => {
    setApplications(prev => prev.filter(a => a.id !== id));
  };

  return (
    <DataContext.Provider value={{ 
      actors, 
      resources, 
      applications, 
      addActor, 
      updateActor, 
      deleteActor, 
      addResource, 
      deleteResource,
      submitApplication,
      deleteApplication
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
