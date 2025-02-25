import React, { useState } from 'react';
import FileNode from './FileNode';
import fileSystemData from '../data/fileSystemData';
import FileOperation from './FileOperation';
const FileExplorer = () => {
  const [fileSystem, setFileSystem] = useState(fileSystemData);
  const [selectedNode, setSelectedNode] = useState(null);
  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };
  const updateFileSystem = (fs, nodeId, updateCallback) => {
    return {
      ...fs,
      items: fs.items?.map((item) =>
        item.id === nodeId ? updateCallback(item) : item.isFolder ? updateFileSystem(item, nodeId, updateCallback) : item
      ),
    };
  };
  const handleAdd = (name, isFolder) => {
    if (!selectedNode || !selectedNode.isFolder) {
      alert('Please select a folder to add an item.');
      return;
    }
    const newNode = {
      id: Date.now().toString(),
      name,
      isFolder,
      items: isFolder ? [] : undefined,
    };
    setFileSystem((prevFS) =>
      updateFileSystem(prevFS, selectedNode.id, (node) => ({
        ...node,
        items: [...(node.items || []), newNode],
      }))
    );
  };

  const handleRename = (newName) => {
    if (!selectedNode) {
      alert('Please select a folder or file to rename.');
      return;
    }
    setFileSystem((prevFS) =>
      updateFileSystem(prevFS, selectedNode.id, (node) => ({
        ...node,
        name: newName,
      }))
    );
  };

  const handleDelete = () => {
    if (!selectedNode) {
      alert('Please select a file or folder to delete.');
      return;
    }
    const deleteNode = (fs, nodeId) => {
      return {
        ...fs,
        items: fs.items?.filter((item) => item.id !== nodeId).map((item) => (item.isFolder ? deleteNode(item, nodeId) : item)),
      };
    };
    setFileSystem((prevFS) => deleteNode(prevFS, selectedNode.id));
    setSelectedNode(null);
  };
  return (
    <div className="file-explorer">
      <div className="subFile-explorer">
        <FileNode node={fileSystem} onNodeClick={handleNodeClick} />
      </div>
      <div className="fileOprations">
        <FileOperation onAdd={handleAdd} onRename={handleRename} onDelete={handleDelete} selectedNode={selectedNode} />
      </div>
    </div>
  );
};

export default FileExplorer;
