
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ACTORS, RESOURCES, OPPORTUNITIES as INITIAL_OPPORTUNITIES } from './constants';
import { Actor, Resource, Application, Opportunity, JobApplication } from './types';

interface DataContextType {
  actors: Actor[];
  resources: Resource[];
  applications: Application[];
  opportunities: Opportunity[];
  jobApplications: JobApplication[];
  addActor: (actor: Actor) => void;
  updateActor: (actor: Actor) => void;
  deleteActor: (id: string) => void;
  addResource: (resource: Resource) => void;
  deleteResource: (id: string) => void;
  submitApplication: (app: Application) => void;
  deleteApplication: (id: string) => void;
  addOpportunity: (job: Opportunity) => void;
  applyToJob: (application: JobApplication) => void;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [actors, setActors] = useState<Actor[]>(ACTORS);
  const [resources, setResources] = useState<Resource[]>(RESOURCES);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(INITIAL_OPPORTUNITIES);
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  
  const [applications, setApplications] = useState<Application[]>([]);

// Fetch applications from backend
useEffect(() => {
  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/applications');
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      }
    } catch (error) {
      console.error('Failed to fetch applications:', error);
    }
  };
  fetchApplications();
}, []);

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

  const submitApplication = async (app: Application) => {
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(app),
      });
      if (response.ok) {
        const data = await response.json();
        const newApp = { ...app, id: data.id };
        setApplications(prev => [newApp, ...prev]);
      } else {
        console.error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  const deleteApplication = async (id: string) => {
    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setApplications(prev => prev.filter(a => a.id !== id));
      }
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const addOpportunity = (job: Opportunity) => {
    setOpportunities(prev => [job, ...prev]);
  };

  const applyToJob = (application: JobApplication) => {
    setJobApplications(prev => [application, ...prev]);
  };

  return (
    <DataContext.Provider value={{ 
      actors, 
      resources, 
      applications, 
      opportunities,
      jobApplications,
      addActor, 
      updateActor, 
      deleteActor, 
      addResource, 
      deleteResource,
      submitApplication,
      deleteApplication,
      addOpportunity,
      applyToJob
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
