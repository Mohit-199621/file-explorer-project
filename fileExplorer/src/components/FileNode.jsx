import React, { useState } from 'react';
const FileNode = ({ node, onNodeClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    if (node.isFolder) {
      setIsExpanded(!isExpanded);
    }
    onNodeClick(node);
  };
  return (
    <div className="mainFileDiv">
      <div onClick={handleClick} className="subMainDivFile" style={{ cursor: 'pointer' }}>
        {node.isFolder ? (isExpanded ? '📁' : '📂') : '📄'} {node.name}
      </div>
      {node.isFolder && isExpanded && node.items && (
        <div className='subDirectory'>
          {node.items.map((childNode) => (
            <FileNode key={childNode.id} node={childNode} onNodeClick={onNodeClick} />
          ))}
        </div>
      )}
    </div>
  );
};
export default FileNode;
