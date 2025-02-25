import React, { useState } from 'react';

const FileOperation = ({ onAdd, onRename, onDelete, selectedNode }) => {
  const [newName, setNewName] = useState('');
  const [isFolder, setIsFolder] = useState(false);
  const handleAdd = () => {
    if (!newName.trim()) {
      alert('Please enter a valid name.');
      return;
    }
    onAdd(newName, isFolder);
    setNewName('');
  };
  const handleRename = () => {
    if (!selectedNode) {
      alert('Please select a file or folder to rename.');
      return;
    }
    if (!newName.trim()) {
      alert('Please enter a new name.');
      return;
    }
    onRename(newName);
    setNewName('');
  };
  const handleDelete = () => {
    if (!selectedNode) {
      alert('Please select a file or folder to delete.');
      return;
    }
    onDelete();
  };
  return (
    <div className="file-operations">
      <div>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter Name"/>
        <label>
          <input type="checkbox" checked={isFolder} onChange={(e) => setIsFolder(e.target.checked)}
          />{' '} Folder</label>
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRename} disabled={!selectedNode}>Rename</button>
        <button onClick={handleDelete} disabled={!selectedNode}>Delete</button>
      </div>

      {selectedNode && (
        <div>
          <p>
            <strong>Selected:</strong> {selectedNode.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileOperation;
