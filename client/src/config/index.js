export const signupFormControls  = [
    {
        id: 'name',
        label:'Name',
        type: 'text',
        placeholder: 'Enter your name',
        componentType: 'input',

    },
    {
        id: 'email',
        label:'Email',
        type: 'email',
        placeholder: 'Enter your email',
        componentType: 'input',
        
    },{
        id: 'password',
        label:'Password',
        type: 'password',
        placeholder: 'Enter your password',
        componentType: 'input',
        
    }
];


export const signInFormControls =[
    {
        id: 'email',
        label:'Email',
        type: 'email',
        placeholder: 'Enter your email',
        componentType: 'input',
        
    },{
        id: 'password',
        label:'Password',
        type: 'password',
        placeholder: 'Enter your password',
        componentType: 'input',
        
    }
]
export const scrumBoardOptions = [
    {
      id: "todo",
      label: "To DO",
    },
    {
      id: "inProgress",
      label: "In Progress",
    },
    {
      id: "blocked",
      label: "Blocked",
    },
    {
      id: "review",
      label: "Review",
    },
    {
      id: "done",
      label: "Done",
    },
  ];
  
  export const addNewTaskFormControls = [
    {
      id: "title",
      type: "text",
      placeholder: "Enter title",
      label: "Title",
      componentType: "input",
    },
    {
      id: "description",
      type: "text",
      placeholder: "Enter description",
      label: "Description",
      componentType: "input",
    },
    {
      id: "status",
      placeholder: "Enter Status",
      label: "Status",
      componentType: "select",
      options: scrumBoardOptions,
    },
    {
      id: "priority",
      placeholder: "Enter priority",
      label: "Priority",
      componentType: "select",
      options: [
        {
          id: "low",
          label: "Low",
        },
        {
          id: "medium",
          label: "Medium",
        },
        {
          id: "high",
          label: "High",
        },
      ],
    },
  ];