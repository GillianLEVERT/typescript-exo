
import React from 'react';

//Ecriture avec Type (Type = Pas Mergeable )
type  Attributes = {
  strength: number;
  dexterity: number;
  intelligence: number;
}

//Ecriture avec Inteface (Interface = Mergeable, voir en dessous exemple)
interface ProfileCardProps {
  name: string;
  age: number;
  isActive: boolean;

}

interface ProfileCardProps {
  attributes: Attributes;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, isActive, attributes }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Status:</strong> {isActive ? 'Active' : 'Inactive'}</p>
      <h3>Attributes</h3>
      <p><strong>Strength:</strong> {attributes.strength}</p>
      <p><strong>Dexterity:</strong> {attributes.dexterity}</p>
      <p><strong>Intelligence:</strong> {attributes.intelligence}</p>
    </div>
  );
};
