const fileSystemData = {
    id: 'root',
    name: 'Root',
    isFolder: true,
    items: [
      {
        id: '1',
        name: 'Documents',
        isFolder: true,
        items: [
          {
            id: '2',
            name: 'Resume.docx',
            isFolder: false,
            items: [],
          },
          {
            id: '3',
            name: 'CoverLetter.docx',
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        id: '4',
        name: 'Pictures',
        isFolder: true,
        items: [
          {
            id: '5',
            name: 'vacation.png',
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        id: '6',
        name: 'readme.txt',
        isFolder: false,
        items: [], 
      },
    ],
  };
  
  export default fileSystemData;
  