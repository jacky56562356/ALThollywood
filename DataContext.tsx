
import React, { createContext, useState, useContext } from 'react';
import { ACTORS, RESOURCES } from './constants';
import { Actor, Resource } from './types';

interface DataContextType {
  actors: Actor[];
  resources: Resource[];
  addActor: (actor: Actor) => void;
  updateActor: (actor: Actor) => void;
  deleteActor: (id: string) => void;
  addResource: (resource: Resource) => void;
  deleteResource: (id: string) => void;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [actors, setActors] = useState<Actor[]>(ACTORS);
  const [resources, setResources] = useState<Resource[]>(RESOURCES);

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

  return (
    <DataContext.Provider value={{ actors, resources, addActor, updateActor, deleteActor, addResource, deleteResource }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
